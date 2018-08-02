import { handleActions } from 'redux-actions';
import diacritics from 'diacritics';
import { assocPath } from 'ramda';

import { PERMITTED,
  RESTRICTED,
  TO_AVOID,
  INGREDIENTS,
  SORT_BY,
  SORT_BY_OPTIONS,
  SUSPICIOUS,
  CUSTOM,
  ADD_TO_LOCAL,
  SEARCH } from '../../constants/food';

const localList = JSON.parse(localStorage.getItem('food')) || [];

const defaultState = {
  localFoodList: localList,
  list: INGREDIENTS.concat(localList),
  sortBy: SORT_BY_OPTIONS.NAME,
  sortDesc: false,
  query: '',
};

const findFoodIndex = (list, value) => list.findIndex(({ name }) => name === value);
const isNameMatching = (regEx, name) => regEx.test(diacritics.remove(name)) || regEx.test(name);

const filterFoodList = (state) => {
  const { query, sortBy, sortDesc } = state;
  let newFoodList = INGREDIENTS.concat(localList);

  if (query) {
    const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const re = new RegExp(escapedQuery, 'gmi');
    newFoodList = newFoodList.filter(({ name }) => isNameMatching(re, name));
  }

  if (sortBy) {
    newFoodList = newFoodList.sort((a, b) => {
      let sorting = 0;
      if (sortBy === SORT_BY_OPTIONS.NAME) {
        sorting = a.name.localeCompare(b.name);

        if (sortDesc) {
          sorting *= -1;
        }
      }

      if (sortBy === SORT_BY_OPTIONS.INTOLERANCE) {
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

  return assocPath(['list'], newFoodList)(state);
};

const addToLocal = (state, { name }) => {
  let newState = state;

  const { localFoodList } = newState;
  const localFoodIndex = findFoodIndex(localFoodList, name);

  if (localFoodIndex === -1) {
    const newFood = {
      name,
      type: SUSPICIOUS,
      group: CUSTOM,
      events: 1,
    };
    localFoodList.push(newFood);
  } else {
    localFoodList[localFoodIndex] = {
      ...localFoodList[localFoodIndex],
      events: localFoodList[localFoodIndex].events + 1,
    };
  }

  const list = INGREDIENTS.concat(localFoodList);

  newState = assocPath(['list'], list)(newState);
  newState = assocPath(['localFoodList'], localFoodList)(newState);

  localStorage.setItem('food', JSON.stringify(localFoodList));

  return newState;
};

const sortBy = (state, { key }) => {
  let newState = state;

  const sortDesc = newState.sortBy !== key || !newState.sortDesc;

  newState = assocPath(['sortDesc'], sortDesc)(newState);
  newState = assocPath(['sortBy'], key)(newState);
  newState = filterFoodList(newState);

  return newState;
};


const search = (state, { query }) => {
  let newState = state;

  newState = assocPath(['query'], query)(newState);
  newState = filterFoodList(newState);

  return newState;
};

export default handleActions({
  [ADD_TO_LOCAL]: addToLocal,
  [SORT_BY]: sortBy,
  [SEARCH]: search,
}, defaultState);
