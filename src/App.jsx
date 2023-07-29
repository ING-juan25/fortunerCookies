import { useState } from "react";
import "./App.css";
import notes from "./db/phreses.json";
import { getRandom } from "./utils/random";
import NoteBox from "./components/NoteBox";

const arrayBg = ["model1", "model2", "model3", "model4"];

function App() {
  const [note, setNote] = useState(getRandom(notes));
  const [currentBg, setCurrentBg] = useState(getRandom(arrayBg));
  const handleChangeNote = () => {
    setNote(getRandom(notes));
    setCurrentBg(getRandom(arrayBg));
  };
  return (
    <>
      <main className={`App ${currentBg}`}>
        <NoteBox handleChangeNote={handleChangeNote} note={note} />
      </main>
    </>
  );
}

export default App;
