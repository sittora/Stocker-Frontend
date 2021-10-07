import React from "react";
 
const Popup = ({ content, handleClose }) => {
    console.log('we popped up!')
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        {content}
      </div>
    </div>
  );
};
 
export default Popup;