import React from "react";
import ModalContainer from "./ModalContainer";
import styles from "./TransactionModal.module.css";

function TransactionModal(props) {

    return(
        <React.Fragment>
            <div className={styles.backdrop} onClick={props.onCloseModal} ></div>
            <ModalContainer selector="#modal-root">
                <div className={styles.modal} >
                    <p>{props.message}</p>
                    <button onClick={props.onCloseModal} >Ok</button>
                </div>
            </ModalContainer>
        </React.Fragment>
    );
}

export default TransactionModal;