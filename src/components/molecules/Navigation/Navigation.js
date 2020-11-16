import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { NavLink } from 'react-router-dom';

// import styled from 'styled-components';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    margin: 20,
  },
});

// const StyledCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Navigation = ({ items = [] }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* <StyledCenter> */}
      <Paper className={classes.root} elevation={15}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {items.map(item => (
            <Tab
              style={{ fontSize: 17 }}
              icon={item.icon}
              label={t(item.content)}
              // value={item.to}
              component={NavLink}
              to={item.to}
            />
          ))}
        </Tabs>
      </Paper>
      {/* <ChangeLanguageButtons
          language1="pl"
          language2="en"
          onClick1={() => i18n.changeLanguage('pl')}
          onClick2={() => i18n.changeLanguage('en')}
        /> */}
      <button type="submit" onClick={() => changeLanguage('pl')}>
        pl
      </button>
      <button type="submit" onClick={() => changeLanguage('en')}>
        en
      </button>
      {/* </StyledCenter> */}
    </>
  );
};

Navigation.propTypes = {
  items: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Navigation;
