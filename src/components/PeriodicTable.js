import React, { useState } from "react";
import { elements } from '../data/element'
import ElementTile from "../components/ElementTile"
import ElementModal from "../components/ElementModal"
import '../styles/PeriodicTable.css'

const PeriodicTable = () => {
    const [selectedElement, setSelectedElement] = useState(null)

    return (
        <div className="app-container">
            <div className="periodic-header">
                <h1>The Periodic table Elements</h1>
                <p>Total Elements: {elements.length}</p>
            </div>

            {/* The elements grid */}
            <div className="periodic-grid">
                {elements.map((element) => (
                    <ElementTile
                        key={element.atomicNumber}
                        data={element}
                        onSelect={setSelectedElement}
                    />
                ))}
                {/* When an elements is selected */}
                {selectedElement && (
                    <ElementModal
                        element={selectedElement}
                        onClick={() => { setSelectedElement(null) }}
                    />
                )}
            </div>
        </div>
    )
}

export default PeriodicTable