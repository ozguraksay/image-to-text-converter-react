// FileUploadContainer.js

import React, { useState } from 'react';

const FileUploadContainer = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (selectedFile) {
      URL.revokeObjectURL(selectedFile);
    }

    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      onImageUpload(imageUrl);
    }
  };
  return (
    <div className="col-md-4">
    <label htmlFor="avatar" className="file-upload-label">
      <div id="file-upload-container" className="mx-auto">
        <div id="upload-icon">&#8679;</div>
        <div id="upload-text">Click to Upload an Image</div>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleFileChange}
          className="d-none"
        />
      </div>
    </label></div>
  );
};

export default FileUploadContainer;
