import React from "react";
import { useEffect, useState } from "react";
import Log from "./Log";
const API = import.meta.env.VITE_BASE_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/logs`)
      .then((response) => response.json())
      .then((logs) => setLogs(logs))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <Log key={index} log={log} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
