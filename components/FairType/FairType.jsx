import { useState } from "react";
// data
import { fairType } from "../../data/RadioBtnData";
// styles
import styles from "../../styles/Navbar.module.css";

export default function FairType() {
  const [active, setActive] = useState({ id: 0, isSelected: true });
  return (
    <div className="flex justify-between items-center pb-5">
      <div className={` flex items-center `}>
        <span className="leading-none text-xs ">
          Select A <br />
          Fair Type:
        </span>
        <div className={`${styles.fairTypeList}`}>
          <ul className={`${styles.fairTypeList} flex items-center`}>
            {fairType.map((e, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActive({ id: index, isSelected: true })}
                  className={`flex cursor-pointer  ${
                    active.isSelected && active.id === index
                      ? styles.selectedDiv
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
                  <span
                    className={`cursor-pointer text-xs ${styles.spanWidth}`}
                  >
                    {e}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className="trendingSearch">
          <span className="text-xs">Trending Searches: </span>
          <span className="text-xs p-2 bg-gray-100 me-1">
            Mumbai {"->"} Goa
          </span>
          <span className="text-xs p-2 bg-gray-100 ">Chennai {`->`} Goa</span>
        </div>
      </div>
    </div>
  );
}
