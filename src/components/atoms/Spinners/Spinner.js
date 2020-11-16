import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const StyledCenter = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
`;

const Spinner = () => (
  <StyledCenter>
    <LinearProgress color="secondary" />
    <LinearProgress />
    <LinearProgress color="secondary" />
    <LinearProgress color="secondary" />
    <LinearProgress />
    <LinearProgress color="secondary" />
  </StyledCenter>
);

export default Spinner;
