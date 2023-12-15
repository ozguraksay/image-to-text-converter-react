// ConvertButton.js

import React, { useState } from 'react';

const ConvertButton = ({ onConvert }) => {
  // const [isConverting, setIsConverting] = useState(false)
  // const handleClick = async () => {
  //   setIsConverting(true);
  //   await onConvert();
  //   setIsConverting(false);
  // };
  return (
    <div className="text-center mt-3">
      <button id='convert_btn' onClick={onConvert}>
        Convert
      </button>
    
    </div>
  );
};

export default ConvertButton;
