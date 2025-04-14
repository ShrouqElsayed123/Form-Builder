import styles from './Popup.module.css'

// eslint-disable-next-line react/prop-types
const Popup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.popupoverlay}>
      <div className={styles.popup}>
        <h4>{message}</h4>
        <div className={styles.popupactions}>
          <button onClick={onConfirm} className="btn btn-danger">نعم</button>
          <button onClick={onCancel} className="btn btn-secondary">لا</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
