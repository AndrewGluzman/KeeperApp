import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

const[condition, setCondition]=useState(false)
  function userclick(){
  setCondition(true)
  

  }

  return (
    <div>
      <form className="create-note">
       {condition? <input in ={false}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea onClick ={userclick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={condition?"5":"1"}
        />
        <Zoom in={condition}>
          <button onClick={submitNote}>
            <Add />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
