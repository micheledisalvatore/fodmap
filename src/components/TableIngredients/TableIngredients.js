import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import { TO_AVOID, RESTRICTED, PERMITTED, SORT_BY } from '../../constants/ingredients';

import { Dot, SortIcon } from './TableIngredients.styled';

const getDotColor = (type) => {
  switch (type) {
    case TO_AVOID:
      return 'red';
    case RESTRICTED:
      return 'yellow';
    case PERMITTED:
      return 'green';
    default:
      return 'grey';
  }
};

export const TableIngredients = ({ ingredients, actions, sortBy, sortDesc, onClick }) => (
  <Table onClick={onClick}>
    <thead>
      <tr>
        <th onClick={actions.sortBy(SORT_BY.INTOLERANCE)}>
          <SortIcon width="13" height="13" up={sortBy === SORT_BY.INTOLERANCE && sortDesc} down={sortBy === SORT_BY.INTOLERANCE && !sortDesc} />
        </th>
        <th onClick={actions.sortBy(SORT_BY.NAME)}>
          Name
          <SortIcon width="13" height="13" up={sortBy === SORT_BY.NAME && sortDesc} down={sortBy === SORT_BY.NAME && !sortDesc} />
        </th>
      </tr>
    </thead>
    <tbody>
      {ingredients.map(ingredient => (
        <tr key={ingredient.name}>
          <td>
            <Dot color={getDotColor(ingredient.type)}>
              {ingredient.events ? ingredient.events : ''}
            </Dot>
          </td>
          <td>
            {ingredient.name}
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

TableIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      events: PropTypes.number,
    }),
  ).isRequired,
  actions: PropTypes.shape({
    sortBy: PropTypes.func,
  }).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDesc: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
