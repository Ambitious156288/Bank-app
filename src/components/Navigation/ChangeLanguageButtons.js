import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 0 80px;
`;

const ChangeLanguageButtons = ({ arg1 }) => {
  return (
    <>
      <StyledRight>{arg1}</StyledRight>
    </>
  );
};

ChangeLanguageButtons.propTypes = {
  arg1: PropTypes.string.isRequired,
};

export default ChangeLanguageButtons;
