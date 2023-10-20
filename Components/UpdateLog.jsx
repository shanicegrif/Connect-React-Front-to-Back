import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function UpdateLog() {
  let { index } = useParams();

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

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((response) => response.json())
      .then((log) => {
        console.log(log);
        setLog(log);
      })
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const updateLog = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/logs/${index}`, httpOptions)
      .then(() => {
        alert(`${log.captainName} has been updated!`);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  return (
    <div className="updateLog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName"> Captain's Name:</label>
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
      <Link to={`/logs/${index}`}>
        <button>Cancel!</button>
      </Link>
    </div>
  );
}

export default UpdateLog;
