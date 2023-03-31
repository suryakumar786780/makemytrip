import Link from "next/link";
// ! data
import { iconPositionClass, spans } from "@/data/Nav";
// styles
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className="navBar pt-2 flex justify-between items-center	mb-10">
      <div className="logo">
        <Link className="link" href={"/"}>
          <img
            src={
              "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
            }
            alt="logo"
            width={113}
            height={36}
          />
        </Link>
      </div>
      <ul className={`${styles.topnavRight} flex ml-auto items-center`}>
        {spans.map((e, index) => {
          return (
            <div
              key={index}
              className={`pe-2 ${index === 4 ? styles.flagBox : ""}`}
            >
              <Link className="link " href={"#"}>
                <li
                  className={`flex items-center px-2 py-1 ${
                    index === 4
                      ? `${styles.topnavRightNone}`
                      : `${styles.topnavRight}`
                  }`}
                >
                  <span className="me-2">
                    {index === 0 && (
                      <span className={`ps-0.5 pt-0.5 ${styles.iconSpan}`}>
                        %
                      </span>
                    )}
                    {index === 3 && (
                      <span
                        className={`ps-1 pt-0.5 text-sm ${styles.iconSpan}`}
                      >
                        S
                      </span>
                    )}
                    <span
                      className={` ${index === 0 ? `icon-img` : ""} 
                    ${index > 0 && index <= 2 ? `landing-icons` : ""}
                    ${index === 4 ? `flag-icons` : ""} 
                    ${`${styles[iconPositionClass[index]]} block`}
                    `}
                    ></span>
                  </span>
                  <div className="ms-2">
                    <p className="text-xs text-white font-medium	">{e.title}</p>
                    <p className="fs-10 text-slate-400">{e.content}</p>
                  </div>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
