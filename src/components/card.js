import React from "react"
import "./card.css"

const Card = ({ beforeYear,afterYear,title,lines }) => (
    <div class="cards-container">
        <div class="card">
            <div class="date-banner" data-before={beforeYear} data-after={afterYear}>
            </div>
            <div class="life-events">
                <h3>{title}</h3>
                <ul>
                {lines.map((line) => (
                    <li>{line}</li>
                ))}
                </ul>
            </div>
        </div>
    </div>
)

export default Card