// ConvertButton.js
const ConvertButton = ({ onConvert }) => {

  return (
    <div className="text-center mt-3">
      <button id='convert_btn' onClick={onConvert}>
        Convert
      </button>
    
    </div>
  );
};

export default ConvertButton;
