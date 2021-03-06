import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'yellow',
      Secondary: 'blue',
      Tertiary: 'green',
    };
    const defaultValue = 'yellow';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>aaa</Button>;
  })
  .add('Secondary', () => <Button secondary>aaa</Button>);
