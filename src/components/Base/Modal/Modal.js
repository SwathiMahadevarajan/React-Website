import "./style.css";
const Modal = ({ children, show, onClose, ...rest }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
