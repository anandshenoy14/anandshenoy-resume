import React from "react"
import "./card.css"

const Card = ({ before, after }) => (
    <div class="cards-container">
        <div class="card">
            <div class="date-banner" data-before={before} data-after={after}>
            </div>
            <div class="life-events">
                <ul>
                    <li>Architecting UI Flows for various projects across teams</li>
                    <li>Building reusable and testable UI node modules which can be driven through backend.</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Card