import React, { useState } from 'react';
import PreviewImage from './PreviewImage';
import FileUploadContainer from './FileUploadContainer';
import ConvertButton from './ConvertButton';
import ExtractedText from './ExtractedText';
import Tesseract from 'tesseract.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [extractedText, setExtractedText] = useState('');
  const [isConverting, setIsConverting] = useState(false)
  const handleImageUpload = (url) => {
    setImageUrl(url);
    setExtractedText("")
  };

  const handleConvert = () => {
    if (imageUrl) {
      Tesseract.recognize(
        imageUrl,
        'eng', // You can change the language
        setIsConverting(true),
        { logger: (info) => console.log(info)}
      ).then(({ data: { text } }) => {
        setExtractedText(text);
        setIsConverting(false)
      });
    }
  };

  return (
    <>
      <h1 className='text-center display-6 mt-4'>Image to Text Converter</h1>
      <div className="container mt-4">
        <div className="row gx-4 gy-4">
          <div className="col-12 col-md-4">
            <div id='preview' className="d-flex align-items-center justify-content-center">
            <PreviewImage imageUrl={imageUrl} />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div id="file_upload" className="d-flex flex-column align-items-center justify-content-center">
            <FileUploadContainer onImageUpload={handleImageUpload} />
            <ConvertButton onConvert={handleConvert} />
              {isConverting && <p id='conversion_msg' className='display-6 text-center text-muted'>Converting...</p>}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div id="extracted_text" className="d-flex align-items-center justify-content-center">
            <ExtractedText text={extractedText} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
