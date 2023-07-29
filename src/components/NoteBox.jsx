import "./styles/NoteBox.css";

const NoteBox = ({ handleChangeNote, note }) => {
  return (
    <section className="notebox">
      <h1 className="title">Fortune cookie</h1>
      <button onClick={handleChangeNote} className="Btn">
        🥠Try your luck🥠
      </button>
      <section>
        <article className="phrase">
          <p>{note.phrase}</p>
        </article>
      </section>
      <footer>
        <h4>author: {note.author}</h4>
      </footer>
    </section>
  );
};
export default NoteBox;
