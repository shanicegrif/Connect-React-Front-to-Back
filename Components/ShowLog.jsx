import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function ShowLog() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((response) => response.json())
      .then((log) => {
        console.log(log);
        setLog(log);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [index, navigate]);

  const handleDelete = () => {
    const httpsOptions = { "method": "DELETE" };

    fetch(`${API}/logs/${index}`, httpsOptions)
      .then((res) => {
        console.log(res)
        alert("Log was deleted!");
        navigate("/logs");
      })
      .catch((err) => console.error(err));
  };

  return (
    <article>
      <h2>
        {log.title} - {log.captainName}
      </h2>
      <h4>{log.post}</h4>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          <Link to={"/logs"}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default ShowLog;
