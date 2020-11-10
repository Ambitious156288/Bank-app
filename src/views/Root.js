import React from 'react';
import GlobalStyle from 'utils/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import mainTheme from 'utils/mainTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from 'components/Desktop/Desktop';
import Finance from 'components/Finance/Finance';

import Navigation from 'components/Navigation/Navigation';

// import { useTranslation } from 'react-i18next';

const Root = () => {
  // const { t, i18n } = useTranslation();aa

  return (
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
};

export default Root;
