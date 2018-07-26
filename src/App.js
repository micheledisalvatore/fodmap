import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import diacritics from 'diacritics';
import 'bootstrap/dist/css/bootstrap.min.css';
import { INGREDIENTS, TO_AVOID, RESTRICTED, PERMITTED, SORT_BY } from './constants';
import { Dot, InputWrapper, SortIcon } from './App.styled';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: INGREDIENTS,
      sortBy: SORT_BY.NAME,
      sortDesc: false,
    }
  }

  get filteredIngredients() {
    let ingredients = this.state.ingredients;

    if(this.state.query) {
      const re = new RegExp(this.state.query, 'gi');
      ingredients.filter(ingredient => diacritics.remove(ingredient.name).match(re));
    }

    if(this.state.sortBy) {
      ingredients = ingredients.sort((a, b) => {
        let sorting = 0;
        if(this.state.sortBy === SORT_BY.NAME) {
          sorting = a.name.localeCompare(b.name)
        }

        if(this.state.sortBy === SORT_BY.INTOLERANCE) {
          const mapTypes = {
            [PERMITTED]: -1,
            [RESTRICTED]: 0,
            [TO_AVOID]: 1,
          }
          sorting = mapTypes[a.type] - mapTypes[b.type]
        }

        if(this.state.sortDesc) {
          sorting *= -1
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

  sortBy = sortBy => () => {
    this.setState(state => ({ sortBy, sortDesc: state.sortBy !== sortBy || !this.state.sortDesc}))
  }

  getDotColor = type => {
    switch(type) {
      case TO_AVOID :
        return 'red';
      case RESTRICTED :
        return 'yellow';
      case PERMITTED :
        return 'green';
      default :
        return 'grey';
    }
  }

  render () {
    return (
      <div>
        <InputWrapper>
          <Input type="search" placeholder="Search..." onChange={this.search} />
        </InputWrapper>
        <Table>
          <thead>
            <tr>
              <th onClick={this.sortBy(SORT_BY.NAME)}>Name <SortIcon width="13" height="13" up={this.state.sortBy === SORT_BY.NAME && this.state.sortDesc} down={this.state.sortBy === SORT_BY.NAME && !this.state.sortDesc} /></th>
              <th onClick={this.sortBy(SORT_BY.INTOLERANCE)}><SortIcon width="13" height="13" up={this.state.sortBy === SORT_BY.INTOLERANCE && this.state.sortDesc} down={this.state.sortBy === SORT_BY.INTOLERANCE && !this.state.sortDesc} /></th>
            </tr>
          </thead>
          <tbody>
            {this.filteredIngredients.map(ingredient => (
              <tr key={ingredient.name}>
                <td>{ingredient.name}</td>
                <td><Dot color={this.getDotColor(ingredient.type)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
