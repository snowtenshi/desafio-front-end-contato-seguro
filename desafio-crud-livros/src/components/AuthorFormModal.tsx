import React, { useState } from "react";
import { Author } from "../types";
import "../assets/css/modal.css";
import "../assets/css/form.css";

interface ModalProps {
  onClose: () => void;
}

const AuthorFormModal: React.FC<ModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAuthor: Author = {
      id: authorId,
      name: name,
      email: email,
    };

    const storedAuthors = localStorage.getItem("authors");
    const authors: Author[] = storedAuthors ? JSON.parse(storedAuthors) : [];

    authors.push(newAuthor);
    localStorage.setItem("authors", JSON.stringify(authors));

    setName("");
    setAuthorId("");
    setEmail("");
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Autor:
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
            Email do Autor: &#40;Opcional&#41;
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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

export default AuthorFormModal;
