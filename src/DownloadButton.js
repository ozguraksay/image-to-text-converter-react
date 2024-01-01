import React from 'react';

const DownloadButton = ({ extractedText }) => {
  const handleDownload = () => {
    const fileName = window.prompt('Enter file name', 'downloaded_text');
    if (fileName !== null) {
      const blob = new Blob([extractedText], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${fileName}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
  <div className="text-center mt-3 ms-2">

    <button className='buttons' onClick={handleDownload} hidden={!extractedText}>
      Download Text
    </button>
    </div>

  );
};
export default DownloadButton;