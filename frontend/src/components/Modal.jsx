
import "./Modal.css"

function Modal({ children, closeAllModal }) {
    return (
        <div className="modal" >
            <div className="modalBackground" onClick={() => closeAllModal()}></div>
            <div className="modalCenter">
                {children}
            </div>
        </div>
    )
}

export default Modal