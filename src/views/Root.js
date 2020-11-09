/* eslint-disable import/first */
import React from 'react';
import GlobalStyle from 'utils/GlobalStyle';

const Navigation = React.lazy(() => import('../components/Navigation/Navigation'));

import { ThemeProvider } from 'styled-components';
import mainTheme from 'utils/mainTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from 'components/Desktop/Desktop';
import Finance from 'components/Finance/Finance';

// import { useTranslation } from 'react-i18next';

import Spinner from 'components/Spinners/Spinner';

const Root = () => {
  // const { t, i18n } = useTranslation();

  return (
    <>
      {/* <Spinner /> */}
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <React.Suspense fallback={<Spinner />}>
            <Navigation />
          </React.Suspense>

          <Switch>
            <Route exact path="/" component={Desktop} />
            <Route path="/finance" component={Finance} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Root;
