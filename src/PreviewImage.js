import React from 'react';

const PreviewImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={imageUrl} style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default PreviewImage;
