import React from 'react';
import Tesseract from 'tesseract.js';

const Dropdown = ({ selectedLanguage, onLanguageChange }) => {
  const languageCodes = Object.values(Tesseract.languages)
  console.log(Tesseract);
  return (
    <div className="mb-3">
      <label htmlFor="languageDropdown" className="form-label">
        Select Language:
      </label>
      <select
        id="languageDropdown"
        className="form-select"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languageCodes.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
