import React, { useState } from 'react';
import Garden from "./Garden";

export default function GenerateGarden() {
    const [listeGarden, setlisteGarden] = useState([<Garden />])
    function handleClick(e) {
        e.preventDefault();
        let Gardens = [...listeGarden, <Garden />]
        setlisteGarden(Gardens);
    }

    return (
        <div>
            <div>
                {listeGarden.map((garden, index) => {
                    return <div key={index}>{garden}</div>
                })}
            </div>
            <button className="btn btn-primary mt-5" onClick={handleClick}>
                Add a garden
            </button>
        </div>
    );
}