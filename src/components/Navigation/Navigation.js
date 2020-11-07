import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EuroIcon from '@material-ui/icons/Euro';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import ChangeLanguageButtons from './ChangeLanguageButtons';

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: 20,
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledCenter>
        <Paper className={classes.root} elevation={15}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab
              style={{ fontSize: 17 }}
              icon={<DesktopMacIcon />}
              label="Desktop"
              value="/"
              component={NavLink}
              to="/"
            />
            <Tab
              style={{ fontSize: 17 }}
              icon={<EuroIcon />}
              label="Finance"
              value="/finance"
              component={NavLink}
              to="/finance"
            />
          </Tabs>
        </Paper>
        <ChangeLanguageButtons arg1="pl/ang" />
      </StyledCenter>
    </>
  );
};

export default Navigation;
