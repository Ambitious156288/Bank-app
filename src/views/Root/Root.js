import React from 'react';
import GlobalStyle from 'utils/GlobalStyle';
import Navigation from 'components/Navigation/Navigation';

import { ThemeProvider } from 'styled-components';
import mainTheme from 'utils/mainTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from 'components/Desktop/Desktop';
import Finance from 'components/Finance/Finance';

const Root = () => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Desktop} />
          <Route path="/finance" component={Finance} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default Root;
