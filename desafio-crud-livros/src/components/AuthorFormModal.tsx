import React from "react";
import "../assets/css/modal.css";

interface ModalProps {
  onClose: () => void;
}

const AuthorFormModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <form>
          <label>
            Nome do Autor: <input type="text" required />
          </label>

          <label>
            ID do Autor: <input type="text" required />
          </label>

          <label>
            Email do Autor: &#40;Opcional&#41; <input type="text" />
          </label>

          <button type="submit">Salvar</button>
        </form>

        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default AuthorFormModal;
