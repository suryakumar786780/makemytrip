import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";

// data
import { flightType } from "../../data/RadioBtnData";

export default function FlightDetails() {
  console.log(flightType);
  //*TODO: using callback i have to send the selected is true or not to the index.js
  //Then from root i have to send the selected details to this component

  // let valueExtra = "";
  // const wordLength = value.length;
  // if (wordLength > 10) {
  //   const extra = value.slice(0, 10);
  //   valueExtra = extra + "...";
  // } else {
  //   valueExtra = value;
  // }
  const [active, setActive] = useState({ id: 0, isSelected: true });
  console.log(active);
  return (
    <div className={`bg-white ${styles.flightDetails} flex justify-between`}>
      <div className="selectTrip">
        <ul className="flex items-center mt-1">
          {flightType.map((e, index) => {
            return (
              <li
                key={index}
                onClick={() => setActive({ id: index, isSelected: true })}
                className={`flex  m-1 cursor-pointer  ${
                  active.isSelected && active.id === index
                    ? styles.activeComp
                    : ""
                } `}
              >
                <span
                  className={`cursor-pointer rounded-full me-1 ${
                    styles.roundDiv
                  } ${
                    active.isSelected && active.id === index
                      ? styles.activeRoundDiv
                      : ""
                  }`}
                ></span>
                <span className={`cursor-pointer text-xs ${styles.spanWidth}`}>
                  {e}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
