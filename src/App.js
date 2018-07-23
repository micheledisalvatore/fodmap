import React, { Component } from 'react';
import { Table, Input, InputGroup } from 'reactstrap';
import diacritics from 'diacritics';
import 'bootstrap/dist/css/bootstrap.min.css';
import { INGREDIENTS, TO_AVOID, RESTRICTED, PERMITTED } from './constants';
import { Dot } from './App.styled';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: INGREDIENTS,
    }
  }

  search = e => {
    const { value } = e.currentTarget;
    const escaped = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    this.setState({ query: escaped })
  }

  get filteredIngredients() {
    if(this.state.query) {
      const re = new RegExp(this.state.query, 'gi');
      return this.state.ingredients.filter(ingredient => diacritics.remove(ingredient.name).match(re));
    }

    return this.state.ingredients;
  }

  render () {
    const filteredIngredients = this.state.query ? this.state.ingredients.filter(ingredient => diacritics.remove(ingredient.name).match(this.state.query)) : this.state.ingredients
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th colSpan="2"><InputGroup><Input type="search" placeholder="search..." onChange={this.search} /></InputGroup></th>
            </tr>
          </thead>
          <tbody>
            {filteredIngredients.map(ingredient => (
              <tr key={ingredient.name}>
                <th scope="row">{ingredient.name}</th>
                <td><Dot color={(ingredient.type === TO_AVOID && 'red') || (ingredient.type === RESTRICTED && 'yellow') || (ingredient.type === PERMITTED && 'green')} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
