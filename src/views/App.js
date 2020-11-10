import React from 'react';
import Spinner from 'components/Spinners/Spinner';

const Root = React.lazy(() => import('./Root'));

const App = () => (
  <React.Suspense fallback={<Spinner />}>
    <Root />
  </React.Suspense>
);
export default App;
