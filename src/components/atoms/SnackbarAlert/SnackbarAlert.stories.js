import React from 'react';
import { storiesOf } from '@storybook/react';
import SnackbarAlert from './SnackbarAlert';

storiesOf('Atoms/SnackbarAlert', module).add('Normal', () => (
  <SnackbarAlert
    textUp="Uważaj! Przestępcy podszywają się pod pracowników infolinii."
    textBottom="Oszuści próbują podszywać się pod pracowników infolinii lub działu bezpieczeństwa banku."
  />
));
