import React from "react";
import "../assets/css/modal.css";
import "../assets/css/form.css";

interface ModalProps {
  onClose: () => void;
}

const BookFormModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <form>
        <label>
            ID do Livro: <input type="text" required />
          </label>

          <label>
            Nome do Livro: <input type="text" required />
          </label>

          <label>
            ID do Autor: <input type="text" required />
          </label>

          <label>
            Número de Páginas &#40;Opcional&#41;: <input type="text" />
          </label>
        </form>

        <div className="button-container">
          <button className="save-button" type="submit">Salvar</button>
          <button className="close-button" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default BookFormModal;
