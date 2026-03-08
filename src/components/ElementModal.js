import React from "react";
import "../styles/ElementModal.css"

const ElementModal = ({ element, onClose }) => {
    if (!element) return null
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="modal-header">
                    <div className="element-title">
                        <h2>{element.name}</h2>
                        <span className="category-badge">{element.category}</span>
                    </div>
                    <div className="element-symbol">{element.symbol}</div>
                </div>
                {/* modal body*/}
                <div className="modal-body">
                    <div className="info-section">
                        {/* Section 1 basic info */}
                        <h3>General Properties</h3>
                        <div className="details-grid">
                            <Details label="Atomic Number" value={element.atomicNumber} />
                            <Details label="Atomic Mass" value={element.atomicMass} />
                            <Details label="Molar Mass" value={element.molarMass} />
                            <Details label="group" value={element.group} />
                            <Details label="period" value={element.period} />
                            <Details label="Discovered By" value={element.discoveredBy} />
                        </div>
                    </div>
                    {/* section 2 chemistry */}
                    <div className="info-section">
                        <h3>Chemistry and Physics</h3>
                        <div className="details-grid">
                            <Details label="Electronic Configuration" value={element.electronicConfiguration} />
                            <Details label="Bonding Type" value={element.bondTypes ? element.bondTypes.join(", ") : "N/A"} />
                            <Details label="Melting Point" value={element.meltingPoint} />
                            <Details label="Boiling Point" value={element.boilingPoint} />
                        </div>

                        {/* full width items */}
                        <div className="full-width-item">
                            <strong>Isotopes:</strong>
                            <p>{Array.isArray(element.isotopes) ? element.isotopes.join(", ") : element.isotopes}</p>
                        </div>
                        <div className="full-width-item">
                            <strong>Chemical Propertice</strong>
                            <p>{element.chemicalProperties}</p>
                        </div>
                        <div className="full-width-item">
                            <strong>Physical Properties</strong>
                            <p>{element.physicalProperties}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Details = ({ label, value }) => (
    <div className="detail-item">
        <strong>{label}:</strong>
        <span>{value || "N/A"}</span>
    </div>
)



export default ElementModal