import AVAILABLE_CONSTS from 'actions/constants/budget.constants';
import LOADING_STATES from 'actions/constants/budget.loadingStates';

const initialState = {
  loadingState: {},
  budget: {},
  budgetCategories: [],
};

const budget = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    // case AVAILABLE_CONSTS.BUDGET_GET:
    //  return state;

    case AVAILABLE_CONSTS.BUDGET_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case AVAILABLE_CONSTS.BUDGET_GET_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return { ...state, budget: action.payload, loadingState: newLoadingState };

    case AVAILABLE_CONSTS.BUDGET_GET_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return { ...state, budget: {}, loadingState: newLoadingState };

    default:
      return state;
  }
};

export default budget;
