import React from 'react';
import { useState, useEffect, useParams } from 'react'
const API = import.meta.env.VITE_BASE_URL

const ShowLog = () => {
    let {index} = useParams();
    const [log, setLog] = useState([]);

    useEffect(() => {
        fetch(`${API}/logs/${index}`)
        .then ((response) => response.json())
        .then((log) => setLog(log));
    }, [idl]);

    return (
        <div>
            
        </div>
    );
}

export default ShowLog;
