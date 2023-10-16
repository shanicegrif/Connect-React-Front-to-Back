import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💣</span>
        ) : (
          <span> {null} </span>
        )}
      </td>
      <td>
        <p>{log.captainName}</p>
      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
