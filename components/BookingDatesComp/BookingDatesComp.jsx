// styles
import styles from "../../styles/Navbar.module.css";

function BookingDatesComp({ title, body, footer }) {
  return (
    <div className={`bg-white ${styles.bookingDatesComps}`}>
      <div className={`${styles.fromCity}  w-fit `}>
        <label htmlFor="Fromcity">
          <p className={`mb-2.5 text-sm head`}>{title}</p>
          <p className={`text-3xl font-extrabold content`}>{body}</p>
          <p className={`mb-1 text-sm foot`}>{footer}</p>
        </label>
      </div>
    </div>
  );
}

export default BookingDatesComp;
