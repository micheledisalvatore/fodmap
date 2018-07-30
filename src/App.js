import React, { Component } from 'react';
import diacritics from 'diacritics';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { INGREDIENTS, TO_AVOID, RESTRICTED, PERMITTED, SORT_BY, SUSPICIOUS, CUSTOM } from './constants';
import { AlertSuccess, InputsGroup, SearchInput, AddInput, Label } from './App.styled';

import TableIngredients from './components/TableIngredients';

const findLocalIngredientIndex = (localIngredients, value) => localIngredients.findIndex(({ name }) => name === value);
const isNameMatching = (regEx, name) => regEx.test(diacritics.remove(name)) || regEx.test(name);

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
    };
  }

  get filteredIngredients() {
    const { query, sortBy, sortDesc, ingredients } = this.state;
    let newIngredients = ingredients;

    if (query) {
      const re = new RegExp(query, 'gmi');
      newIngredients = newIngredients.filter(({ name }) => isNameMatching(re, name));
    }

    if (sortBy) {
      newIngredients = newIngredients.sort((a, b) => {
        let sorting = 0;
        if (sortBy === SORT_BY.NAME) {
          sorting = a.name.localeCompare(b.name);

          if (sortDesc) {
            sorting *= -1;
          }
        }

        if (sortBy === SORT_BY.INTOLERANCE) {
          const mapTypes = {
            [PERMITTED]: -1,
            [RESTRICTED]: 0,
            [TO_AVOID]: 1,
            [SUSPICIOUS]: 2,
          };
          sorting = mapTypes[a.type] - mapTypes[b.type];

          if (a.type === b.type && a.type === SUSPICIOUS) {
            sorting = a.events - b.events;
          }

          if (sortDesc) {
            sorting *= -1;
          }

          if (sorting === 0) {
            sorting = a.name.localeCompare(b.name);
          }
        }

        return sorting;
      });
    }

    return newIngredients;
  }

  search = e => {
    const { value } = e.currentTarget;
    const escaped = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    this.setState({
      query: escaped,
    });
  }

  add = e => {
    const { value } = e.currentTarget;

    if (e.key === 'Enter') {
      const { localIngredients } = this.state;
      const localIngredientIndex = findLocalIngredientIndex(localIngredients, value);

      if (localIngredientIndex === -1) {
        const newIngredient = {
          name: value,
          type: SUSPICIOUS,
          group: CUSTOM,
          events: 1,
        };
        localIngredients.push(newIngredient);
      } else {
        localIngredients[localIngredientIndex] = {
          ...localIngredients[localIngredientIndex],
          events: localIngredients[localIngredientIndex].events + 1,
        };
      }

      const ingredients = INGREDIENTS.concat(localIngredients);
      this.setState(({
        localIngredients,
        ingredients,
      }), () => {
        this.showAlert();
        this.hideTag();
        localStorage.setItem('ingredients', JSON.stringify(localIngredients));
      });
    }
  }

  sortBy = sortBy => {
    return () => {
      const { sortDesc } = this.state;

      this.setState(state => ({
        sortBy, sortDesc: state.sortBy !== sortBy || !sortDesc,
      }));
    };
  }

  show = tag => {
    return () => {
      this.setState({
        showTag: tag,
      });
    };
  }

  hideTag = () => {
    const { showTag } = this.state;

    if (showTag) {
      this.setState({
        showTag: undefined,
      });
    }
  }

  showAlert = () => {
    this.setState({
      isAlertVisible: true,
    });
    window.setTimeout(() => this.setState({
      isAlertVisible: false,
    }), 2000);
  }

  render() {
    const { isAlertVisible, showTag, sortBy, sortDesc } = this.state;

    return (
      <div>
        <InputsGroup>
          <SearchInput visible={showTag === 'search'} type="search" placeholder="Search..." onChange={this.search} required id="search" />
          <AddInput visible={showTag === 'add'} type="text" placeholder="Add suspicious food..." onKeyDown={this.add} required id="add" />
          <Label left htmlFor="search" onClick={this.show('search')}><FontAwesomeIcon icon={faSearch} /></Label>
          <Label right htmlFor="add" onClick={this.show('add')}><FontAwesomeIcon
            icon={faPlusCircle}
            style={{
              order: 2,
            }}
          />
          </Label>
        </InputsGroup>
        <AlertSuccess isOpen={isAlertVisible}>Food added successfully!</AlertSuccess>
        <TableIngredients
          onClick={this.hideTag}
          actions={{
            sortBy: this.sortBy,
          }}
          ingredients={this.filteredIngredients}
          sortBy={sortBy}
          sortDesc={sortDesc}
        />
      </div>
    );
  }
}

export default App;
