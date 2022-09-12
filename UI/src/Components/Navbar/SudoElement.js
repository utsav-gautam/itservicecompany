import React from "react";
import './Navbar.css'

function SudoElement() {
    return (
        <div className="sudo-element">
            <img src="./Images/mlImage.jpg" />
            <div className='text-holder'>
                <h2 className="items">Machine Leaning</h2>
                <h2 className="items">Cloud Computing</h2>
                <h2 className="items">Internet of Things</h2>
                <h2 className="items">Blockchain</h2>
            </div>
        </div>
    )
}

export default SudoElement