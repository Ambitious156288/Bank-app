import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const LanguageDropdown = () => {
  return (
    <>
      <ReactFlagsSelect
        searchable // maybe it doesn't fit to the style of app - delete???'
        defaultCountry="US"
        countries={['US', 'PL', 'DE', 'FR']}
        customLabels={{ US: 'English', PL: 'Polish', DE: 'German', FR: 'French' }}
        selectedSize={18}
        optionsSize={14}
      />
    </>
  );
};

export default LanguageDropdown;
