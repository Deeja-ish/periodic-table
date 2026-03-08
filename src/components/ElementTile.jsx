import React from "react";
import "../styles/ElementTile.css"

const ElementTile = ({ data, onSelect }) => {
    const categoryClass = data.category ? data.category.replace(/\s+/g, "-").toLowerCase() : "unknown";

    return (
        <div className={`element-tile ${categoryClass}`}
            onClick={() => onSelect(data)}
            style={{
                gridColumn: data.group,
                gridRow: data.period
            }}>

            <span className="atomic-number">{data.atomicNumber}</span>
            <span className="symbol">{data.symbol}</span>
            <span className="name">{data.name}</span>

        </div>
    );
};

export default ElementTile