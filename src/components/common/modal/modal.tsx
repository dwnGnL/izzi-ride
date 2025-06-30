import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

type ModalProps = {
  children: ReactNode | string;
  close: () => void;
  className?: string;
};

const Modal: FC<ModalProps> = ({ children, close, className }) => {
  return createPortal(
    <ModalContent close={close} className={className}>
      {children}
    </ModalContent>,
    document.body,
  );
};

const ModalContent: FC<ModalProps> = ({ children, close, className }) => {
  return (
    <div className={`${styles.modal} ${className} modal`} onClick={close}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_close} onClick={close}></div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
