// data
import { pagesComp, pageCompCss } from "@/data/Nav";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function MidNav() {
  return (
    <div className={`${styles.midNav}`}>
      <div className={styles.midNavul}>
        <ul className={`flex items-center justify-center w-full`}>
          {pagesComp.map((e, index) => {
            return (
              <li key={index} className="text-sm p-3 bg-white text-black">
                <Link href={"/"} className="link">
                  <span
                    className={`mx-auto icon-img block mb-2 ${
                      styles.iconSize
                    } ${styles[pageCompCss[index]]}`}
                  ></span>

                  <span className="p-2">{e}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
