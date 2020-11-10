import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 0 80px;
`;

const ChangeLanguageButtons = ({ language1, language2, onClick1, onClick2 }) => {
  return (
    <>
      <StyledRight>
        <button type="submit" onClick={onClick1}>
          {language1}
        </button>
        <button type="submit" onClick={onClick2}>
          {language2}
        </button>
      </StyledRight>
    </>
  );
};

ChangeLanguageButtons.propTypes = {
  language1: PropTypes.string.isRequired,
  language2: PropTypes.string.isRequired,
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
};

export default ChangeLanguageButtons;
