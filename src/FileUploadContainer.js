import React, { useState } from 'react';

const FileUploadContainer = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file) => {
    if (selectedFile) {
      console.log('Revoking previous object URL:', selectedFile);
      URL.revokeObjectURL(selectedFile);
    }


    setSelectedFile(file);
  
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image');
        return; 
      }
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(imageUrl);
      console.log('Created new object URL:', imageUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      handleFileChange(file);
    }
  };

  return (
    <div
      id="file-upload-container"
      className={`mt-4 ${isDragging ? 'dragging' : ''}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <label className="position-relative">
        <input 
          type="file" 
          className="input-file" 
          onChange={(e) => handleFileChange(e.target.files[0])}
        />
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <i id='upload-icon' className="fa fa-upload"></i>
          <div id="upload-text" className="text-center">
            Drag and Drop <br/> or <br/> Click to Upload
          </div>
        </div>
      </label>
    </div>
  );
};

export default FileUploadContainer;
