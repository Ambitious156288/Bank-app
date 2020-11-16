import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/mainTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from 'pages/Desktop/Desktop';
import Payments from 'pages/Payments/Payments';
import Finance from 'pages/Finance/Finance';
import Help from 'pages/Help/Help';

import Navigation from 'components/molecules/Navigation/Navigation';

import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EuroIcon from '@material-ui/icons/Euro';

// import { useTranslation } from 'react-i18next';

const Root = () => {
  // const { t, i18n } = useTranslation();aa

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Navigation
            items={[
              { content: 'Desktop', to: '/', icon: <DesktopMacIcon /> },
              { content: 'Payments', to: '/payments', icon: <EuroIcon /> },
              { content: 'Finance', to: '/finance', icon: <EuroIcon /> },
              { content: 'Help', to: '/help', icon: <EuroIcon /> },
            ]}
          />

          <Switch>
            <Route exact path="/" component={Desktop} />
            <Route path="/payments" component={Payments} />
            <Route path="/finance" component={Finance} />
            <Route path="/help" component={Help} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Root;
