import React, { useState } from "react";
import { Book } from "../types";
import "../assets/css/modal.css";
import "../assets/css/form.css";

interface ModalProps {
  onClose: () => void;
}

const BookFormModal: React.FC<ModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      id: Date.now().toString(),
      name: name,
      authorId: String(authorId),
      pages: String(pages),
    };

    const storedBooks = localStorage.getItem("books");
    const books: Book[] = storedBooks ? JSON.parse(storedBooks) : [];

    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));

    setName("");
    setAuthorId("");
    setPages("");
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Livro:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            ID do Autor:
            <input
              type="text"
              value={authorId}
              onChange={(event) => setAuthorId(event.target.value)}
              required
            />
          </label>

          <label>
            Número de Páginas &#40;Opcional&#41;:
            <input
              type="text"
              value={pages}
              onChange={(event) => setPages(event.target.value)}
            />
          </label>
          <div className="button-container">
            <button className="save-button" type="submit">
              Salvar
            </button>
            <button className="close-button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFormModal;
