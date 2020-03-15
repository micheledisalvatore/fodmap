import { ADD_TO_LOCAL, SEARCH, SORT_BY, REMOVE_FROM_LOCAL } from '../../constants/food';

export const addToLocal = name => ({
  type: ADD_TO_LOCAL,
  name,
});

export const removeFromLocal = name => ({
  type: REMOVE_FROM_LOCAL,
  name,
});

export const sortBy = key => ({
  type: SORT_BY,
  key,
});

export const search = query => ({
  type: SEARCH,
  query,
});
