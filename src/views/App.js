import React from 'react';
import Spinner from 'components/atoms/Spinners/Spinner';
import { connect } from 'react-redux';
import { fetchBudget } from '../actions/budget.action';

const Root = React.lazy(() => import('./Root'));

const ConnectedRoot = connect(
  state => {
    return { budget: state.budget.budget };
  },
  { fetchBudget },
)(Root);

const App = () => (
  <React.Suspense fallback={<Spinner />}>
    <ConnectedRoot />
  </React.Suspense>
);

export default App;
