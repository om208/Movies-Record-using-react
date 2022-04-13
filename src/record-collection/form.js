import { useState } from "react";

const initialEntryState = {
  recordName: "",
  artistName: "",
  description: "",
};

const Form = ({ onFormSubmit }) => {
  const [entry, setEntry] = useState(initialEntryState);

  const onChangehandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // sending to container master component
    onFormSubmit({ ...entry });
    //by using this we are sending data to the parent component
    // if we want to send the data to the paren component then take one parameter in child component 
    // at time of calling the child component give one callback function as input arrgument example.  this call-back is setstate function of useState HOOK
    //console.log(entry);
    setEntry(initialEntryState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      
      <label htmlFor="recordName">Record Name</label>
      <input
        id="recordName"
        name="recordName"
        value={entry.recordName}
        onChange={onChangehandler}
      />

      <label htmlFor="artistName">Artist Name</label>
      <input
        id="artistName"
        name="artistName"
        value={entry.artistName}
        onChange={onChangehandler}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={10}
        value={entry.description}
        onChange={onChangehandler}
      />

      <button type="submit">Add Records</button>
    </form>
  );
};

export default Form;
