// ConvertButton.js
const ConvertButton = ({ onConvert }) => {

  return (
    <div className="text-center mt-3 me-2">
      <button className="buttons" id='convert_btn' onClick={onConvert}>
        Convert
      </button>
    
    </div>
  );
};

export default ConvertButton;
