import React from 'react';

const ExtractedText = ({ text }) => {
  return (
    <div>   
      {text && <p id="extracted_title" className='display-6 text-center'>Extracted Text</p>}
      <p id="extracted_text">{text}</p>
    </div>
  );
};

export default ExtractedText;
