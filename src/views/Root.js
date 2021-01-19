import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/mainTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from 'views/Desktop';
import Payments from 'views/Payments';
import Finance from 'views/Finance';
import Help from 'views/Help';

import Navigation from 'components/molecules/Navigation/Navigation';

import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EuroIcon from '@material-ui/icons/Euro';

import routes from 'routes';

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
              { content: 'Desktop', to: routes.desktop, icon: <DesktopMacIcon /> },
              { content: 'Payments', to: routes.payments, icon: <EuroIcon /> },
              { content: 'Finance', to: routes.finance, icon: <EuroIcon /> },
              { content: 'Help', to: routes.help, icon: <EuroIcon /> },
            ]}
          />

          <Switch>
            <Route exact path={routes.desktop} component={Desktop} />
            <Route path={routes.payments} component={Payments} />
            <Route path={routes.finance} component={Finance} />
            <Route path={routes.help} component={Help} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Root;
