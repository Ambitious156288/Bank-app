import AVAILABLE_CONSTS from 'actions/constants/common.constants';
import LOADING_STATES from 'actions/constants/budget.loadingStates';

const initialState = {
  loadingState: {},
  allCategories: [],
};

const common = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    // case AVAILABLE_CONSTS.BUDGET_GET:
    //  return state;

    case AVAILABLE_CONSTS.ALL_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case AVAILABLE_CONSTS.ALL_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.ALL_CATEGORIES_GET_REQUEST;
      return { ...state, allCategories: action.payload, loadingState: newLoadingState };

    case AVAILABLE_CONSTS.ALL_CATEGORIES_GET_FAILURE:
      delete newLoadingState.ALL_CATEGORIES_GET_REQUEST;
      return { ...state, allCategories: {}, loadingState: newLoadingState };

    default:
      return state;
  }
};

export default common;
