import React, { lazy, Suspense, useState } from "react";
import Items from "./Items";
import "./Map.scss";
const Iframe = lazy(() => import("./Ifram"));

function Maps() {
  const [items, setItems] = useState(1);
  const [src, setSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.990376748657!2d75.92686772158078!3d10.925917303267843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b2271cc79311%3A0x46d9311aad9791e1!2sPayyanangadi%2C%20Tirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1627894617831!5m2!1sen!2sin"
  );
  const clickedMapSelecter = (item) => {
    setItems(item);
    if (item === 1) {
      setSrc(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.990376748657!2d75.92686772158078!3d10.925917303267843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b2271cc79311%3A0x46d9311aad9791e1!2sPayyanangadi%2C%20Tirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1627894617831!5m2!1sen!2sin"
      );
    } else if (item === 2) {
      setSrc(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926923!2d55.272187714470356!3d25.197196983896173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1641222385324!5m2!1sen!2sin"
      );
    } else {
      setSrc(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28853.716203847227!2d55.316228952112816!3d25.313793678834067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c0fdcf8c319%3A0xc1b5948ee66f3482!2sAl%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641223593333!5m2!1sen!2sin"
      );
    }
  };
  return (
    <section className="map">
      <div className="box">
        <div className="box-map-sec">
          <Suspense fallback={<h1 style={{width:"100%",height:"100%",display:"grid",placeItems:"center"}} >Loading.....</h1>}>
            <Iframe src={src} />
          </Suspense>
        </div>
        <div className="select-sections">
          <Items
            name="Australia"
            phone="+61 08 7200 6665"
            url="https://www.google.com/maps/@10.9816372,76.0043726,15z"
            address="Level 6, 241 Commonwealth Street, Surry Hills, NSW 2010"
            clickFun={clickedMapSelecter}
            num={1}
            active={items}
          />
          <Items
            name="Australia"
            phone="+61 08 7200 6665"
            url="https://www.google.com/maps/@10.9816372,76.0043726,15z"
            address="Level 6, 241 Commonwealth Street, Surry Hills, NSW 2010"
            clickFun={clickedMapSelecter}
            active={items}
            num={2}
          />
          <Items
            name="Australia"
            phone="+61 08 7200 6665"
            url="https://www.google.com/maps/@10.9816372,76.0043726,15z"
            address="Level 6, 241 Commonwealth Street, Surry Hills, NSW 2010"
            clickFun={clickedMapSelecter}
            active={items}
            num={3}
          />
        </div>
      </div>
    </section>
  );
}

export default Maps;
