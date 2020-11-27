import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: 14px;
`;
const AlertMain = styled.p`
  font-size: 12px;
`;

const TransitionRight = props => {
  return <Slide {...props} direction="left" />;
};

const SnackbarAlert = ({ textUp, textBottom }) => {
  const [open, setOpen] = React.useState(true);
  const transition = TransitionRight;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <Alert onClose={handleClose} severity="error">
          <Title>{textUp}</Title>
          <AlertMain>{textBottom}</AlertMain>
          {/* <Title>Uważaj! Przestępcy podszywają się pod pracowników infolinii.</Title>
          <AlertMain>
            Oszuści próbują podszywać się pod pracowników infolinii lub działu bezpieczeństwa banku.
          </AlertMain> */}
        </Alert>
      </Snackbar>
    </>
  );
};

SnackbarAlert.propTypes = {
  textUp: PropTypes.string.isRequired,
  textBottom: PropTypes.string.isRequired,
};

export default SnackbarAlert;
