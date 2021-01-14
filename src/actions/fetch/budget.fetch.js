export const fetchBudget = id => {
  // eslint-disable-next-line no-undef
  const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

  return promise;
};

export const fetchBudgetCategories = id => {
  // eslint-disable-next-line no-undef
  const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

  return promise;
};
