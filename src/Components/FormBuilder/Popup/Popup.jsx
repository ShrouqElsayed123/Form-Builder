import styles from './Popup.module.css'

// eslint-disable-next-line react/prop-types
const Popup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.popupoverlay}>
      <div className={styles.parent}>
        <h3 className='p-3'>Delete Element?</h3>
        <hr />
       <div className={styles.popup}>
       <h4>{message}</h4>
        <div className={styles.popupactions}>
        <button onClick={onCancel} className="btn btn-outline-secondary">لا</button>

          <button onClick={onConfirm} className="btn btn-danger">نعم</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Popup;
