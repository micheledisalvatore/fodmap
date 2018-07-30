import React, { Component } from 'react';
import diacritics from 'diacritics';
import 'bootstrap/dist/css/bootstrap.min.css';

import { INGREDIENTS, TO_AVOID, RESTRICTED, PERMITTED, SORT_BY, SUSPICIOUS, CUSTOM } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertSuccess, InputsGroup, SearchInput, AddInput, Label } from './App.styled';

import TableIngredients from './components/TableIngredients'

class App extends Component {
  constructor(props) {
    super(props);

    const localIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    this.state = {
      ingredients: INGREDIENTS.concat(localIngredients),
      localIngredients,
      sortBy: SORT_BY.NAME,
      sortDesc: false,
      isAlertVisible: false,
    }
  }

  get filteredIngredients() {
    let ingredients = this.state.ingredients;

    if(this.state.query) {
      const re = new RegExp(this.state.query, 'gmi');
      ingredients = ingredients.filter(ingredient => re.test(diacritics.remove(ingredient.name)) || re.test(ingredient.name));
    }

    if(this.state.sortBy) {
      ingredients = ingredients.sort((a, b) => {
        let sorting = 0;
        if(this.state.sortBy === SORT_BY.NAME) {
          sorting = a.name.localeCompare(b.name)

          if(this.state.sortDesc) {
            sorting *= -1
          }
        }

        if(this.state.sortBy === SORT_BY.INTOLERANCE) {
          const mapTypes = {
            [PERMITTED]: -1,
            [RESTRICTED]: 0,
            [TO_AVOID]: 1,
            [SUSPICIOUS]: 2,
          }
          sorting = mapTypes[a.type] - mapTypes[b.type]

          if(a.type === b.type && a.type === SUSPICIOUS) {
            sorting = a.events - b.events
          }

          if(this.state.sortDesc) {
            sorting *= -1
          }

          if(sorting === 0) {
            sorting = a.name.localeCompare(b.name)
          }
        }

        return sorting;
      })
    }

    return ingredients;
  }

  search = e => {
    const { value } = e.currentTarget;
    const escaped = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    this.setState({ query: escaped })
  }

  add = e => {
    const { value } = e.currentTarget;

    if (e.key === 'Enter') {
      const localIngredients = this.state.localIngredients
      const localIngredientIndex = this.state.localIngredients.findIndex(ingredient => ingredient.name === value)

      if(localIngredientIndex === -1) {
        const newIngredient = {
          name: value,
          type: SUSPICIOUS,
          group: CUSTOM,
          events: 1,
        }
        localIngredients.push(newIngredient)
      } else {
        localIngredients[localIngredientIndex] = {
          ...localIngredients[localIngredientIndex],
          events: ++localIngredients[localIngredientIndex].events,
        }
      }

      const ingredients = INGREDIENTS.concat(localIngredients);
      this.setState(({
        localIngredients,
        ingredients,
      }), () => {
        this.showAlert()
        this.hideTag();
        localStorage.setItem('ingredients', JSON.stringify(this.state.localIngredients));
      })
    }
  }

  sortBy = sortBy => () => {
    this.setState(state => ({ sortBy, sortDesc: state.sortBy !== sortBy || !this.state.sortDesc}))
  }

  show = tag => () => {
    this.setState({ showTag: tag })
  }

  hideTag = () => {
    if(this.state.showTag) {
      this.setState({ showTag: undefined });
    }
  }

  showAlert = () => {
    this.setState({ isAlertVisible: true });
    window.setTimeout(() => this.setState({ isAlertVisible: false }), 2000)
  }

  render () {
    return (
      <div>
        <InputsGroup>
          <SearchInput visible={this.state.showTag === 'search'} type="search" placeholder="Search..." onChange={this.search} required id="search" />
          <AddInput visible={this.state.showTag === 'add'} type="text" placeholder="Add suspicious food..." onKeyDown={this.add} required id="add" />
          <Label left htmlFor="search" onClick={this.show('search')}><FontAwesomeIcon icon={faSearch} /></Label>
          <Label right htmlFor="add" onClick={this.show('add')}><FontAwesomeIcon icon={faPlusCircle} style={{ order: 2 }} /></Label>
        </InputsGroup>
        <AlertSuccess isOpen={this.state.isAlertVisible}>Food added successfully!</AlertSuccess>
        <TableIngredients onClick={this.hideTag} actions={{ sortBy: this.sortBy }} ingredients={this.filteredIngredients} sortBy={this.state.sortBy} sortDesc={this.state.sortDesc} />
      </div>
    );
  }
}

export default App;
