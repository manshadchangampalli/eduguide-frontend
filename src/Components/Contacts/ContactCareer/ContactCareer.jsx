import React, { useState } from "react";
import uploadImg from "../../../Assets/Images/ContactUs/form/upload.png";

function ContactCareer() {
  const [style, setStyle] = useState({});
  const [droppedText,setDroppedText]= useState("Drag and Drop Here")
  const [isdroped, setIsDroped] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
    setStyle({
      border: "2px solid #00e7ff",
    });
    setDroppedText("Release Here")
  };
  const dragLeave = (e) => {
    setStyle({});
    e.preventDefault();
    setDroppedText("Drag and Drop Here")
  };
  const droped = (e) => {
    var file=e.dataTransfer.files[0];
    e.preventDefault();
    setStyle({
        border: "2px dashed green",
    });
    setIsDroped(true);
    setDroppedText(file.name)
  };

  return (
    <div className="form-4-career">
      <div className="contact-form-wraper">
        <div className="main-container">
          <div className="main-details-cnt-career">
            <input className="name" placeholder="name*" type="text" />
            <input className="email" placeholder="email*" type="text" />
            <input className="phone" placeholder="phone*" type="text" />
          </div>
          <div className="main-details-cnt-career-2">
            <input className="services" placeholder="position*" type="text" />
            <input
              className="wheredidyoufind"
              placeholder="where did you find*"
              type="text"
            />
          </div>
          <div
            style={style}
            onDragOver={(e) => dragOver(e)}
            onDragLeave={(e) => dragLeave(e)}
            onDrop={(e) => droped(e)}
            className="drag-drop-file"
          >
            <div className="icons-input-box">
              <div className="icon">
                <img draggable="false" src={uploadImg} alt="" />
                <p className="droped-title">{droppedText}</p>
              </div>
              <input
                disabled={isdroped}
                type="file"
                className="custom-file-input"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="submit-button-container">
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCareer;
