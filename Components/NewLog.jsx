import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function NewLog() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const addLog = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/logs`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${log.captainName} was added to the database!`);
        navigate("/logs");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <div className="newLog">
      <h1>Create New Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
        />
        <label htmlFor="daysSinceLastCrisis">Days since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="crisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default NewLog;
