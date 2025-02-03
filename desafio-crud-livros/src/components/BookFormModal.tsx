import React from "react";
import "../assets/css/modal.css";

interface ModalProps {
  onClose: () => void;
}

const BookFormModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <form>
          <label>
            Nome do Livro: <input type="text" required />
          </label>

          <label>
            ID do Autor: <input type="text" required />
          </label>

          <label>
            Número de Páginas: &#40;Opcional&#41; <input type="text" />
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

export default BookFormModal;
