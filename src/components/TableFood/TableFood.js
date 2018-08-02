import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux';

import { sortBy } from '../../actions/food';
import { TO_AVOID, RESTRICTED, PERMITTED, SORT_BY_OPTIONS } from '../../constants/food';

import { Dot, SortIcon } from './TableFood.styled';

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

export const TableFood = ({ foodList, actions, sortingBy, sortingDesc }) => {
  const handleSortByClick = key => () => actions.sortBy(key);

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={handleSortByClick(SORT_BY_OPTIONS.INTOLERANCE)}>
            <SortIcon width="13" height="13" up={sortingBy === SORT_BY_OPTIONS.INTOLERANCE && sortingDesc} down={sortingBy === SORT_BY_OPTIONS.INTOLERANCE && !sortingDesc} />
          </th>
          <th onClick={handleSortByClick(SORT_BY_OPTIONS.NAME)}>
            Name
            <SortIcon width="13" height="13" up={sortingBy === SORT_BY_OPTIONS.NAME && sortingDesc} down={sortingBy === SORT_BY_OPTIONS.NAME && !sortingDesc} />
          </th>
        </tr>
      </thead>
      <tbody>
        {foodList.map(food => (
          <tr key={food.name}>
            <td>
              <Dot color={getDotColor(food.type)}>
                {food.events ? food.events : ''}
              </Dot>
            </td>
            <td>
              {food.name}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableFood.propTypes = {
  foodList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      events: PropTypes.number,
    }),
  ).isRequired,
  actions: PropTypes.shape({
    sortBy: PropTypes.func,
  }).isRequired,
  sortingBy: PropTypes.string.isRequired,
  sortingDesc: PropTypes.bool.isRequired,
};

export const mapStateToProps = ({ food }) => ({
  foodList: food.list,
  sortingBy: food.sortBy,
  sortingDesc: food.sortDesc,
});

export const mapDispatchToProps = dispatch => ({
  actions: {
    sortBy: bindActionCreators(sortBy, dispatch),
  },
});
