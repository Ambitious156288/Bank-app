/* eslint-disable no-unused-vars */
import AVAILABLE_CONSTS from 'actions/constants/budget.constants';

const fetchBudget = () => dispatch => {
  dispatch({ type: AVAILABLE_CONSTS.BUDGET_GET_REQUEST });
};

const fetchBudgetCategories = () => {};
