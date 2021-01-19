/* eslint-disable no-console */
import AVAILABLE_CONSTS from 'actions/constants/budget.constants';
import { fetchBudgetFn, fetchBudgetCategoriesFn } from 'actions/fetch/budget.fetch';

// eslint-disable-next-line import/prefer-default-export
export const fetchBudget = id => async dispatch => {
  dispatch({ type: AVAILABLE_CONSTS.BUDGET_GET_REQUEST });

  try {
    const res = await fetchBudgetFn(id);
    const data = await res.json();

    console.log(data);

    dispatch({ type: AVAILABLE_CONSTS.BUDGET_GET_REQUEST, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: AVAILABLE_CONSTS.BUDGET_GET_FAILURE });
  }
};

export const fetchBudgetCategories = id => async dispatch => {
  dispatch({ type: AVAILABLE_CONSTS.BUDGETED_CATEGORIES_GET_REQUEST });

  try {
    const res = await fetchBudgetCategoriesFn(id);
    const data = await res.json();

    console.log(data);

    dispatch({ type: AVAILABLE_CONSTS.BUDGETED_CATEGORIES_GET_REQUEST, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: AVAILABLE_CONSTS.BUDGETED_CATEGORIES_GET_FAILURE });
  }
};
