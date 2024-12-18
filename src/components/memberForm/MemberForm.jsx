import { useState } from "react";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";
import styles from "./memberForm.module.css";

const Subscribers = () => {
  const [responsName, setResponsName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inputEmail,
          name: inputName,
          message: inputMessage,
        }),
      });
      const result = await response.json();
      console.log(result);
      setResponsName(result.name);
      openModal();
      setIsLoading(false);
    } catch (error) {
      console.error("Error when registering:", error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.subscribers}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              placeholder="Fulde navn"
              type="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Hvem køber du legetøj til?"
              name="message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <Button buttonText="Bliv medlem nu!" type="submit" />
          </form>
        </section>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Tak! {responsName}</h2>
          <p>Vi er så glade for at du vil være en del af vores kundeklub </p>
          <p>
            Tag et kig på din indbakke. Vi har givet dig fri fragt på din næste
            ordre.
          </p>
          <Button buttonText="TIL FORSIDEN" />
        </Modal>
      )}
    </>
  );
};

export default Subscribers;
