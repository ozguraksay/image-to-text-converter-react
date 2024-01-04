import React from 'react';
import languageCodes from './languageCodes'
import "bootstrap/dist/css/bootstrap.min.css";
const Dropdown = ({ selectedLanguage, onLanguageChange }) => {

  return (
<div className="mb-3 mt-4 text-center">
      <label id='language_label' className="text-black text-lg font-medium truncate form-label">
        Select Language
      </label>
      <select
        id="languageDropdown"
        className="form-select"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {Object.keys(languageCodes).map((langCode) => (
          <option key={langCode} value={langCode}>
            {languageCodes[langCode]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
