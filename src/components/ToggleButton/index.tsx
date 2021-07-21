import React from 'react';

import * as SC from './styles';

const ToggleButton: React.FC = () => {

  return (
    <>
      <SC.SwitchButton >
        <label>
          <input data-testid='toggleButton' type="checkbox" />
          <div>
            <span></span>
          </div>
        </label>
      </SC.SwitchButton>
    </>
  );
};

export default ToggleButton;
