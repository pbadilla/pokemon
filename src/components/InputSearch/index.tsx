import React, { useState, useCallback } from 'react';

import * as SC from './styles';

interface InputSearchProps {
  value: string;
  onChange(value: string): void;
}

const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <SC.Container isFocused={isFocused}>
      <input
        placeholder={isFocused ? '' : '¿Qué pokemon buscas?'}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </SC.Container>
  );
};

export default InputSearch;
