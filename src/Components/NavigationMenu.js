import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                This is the menu
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={() => props.setShowMenu(false)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={() => props.setShowMenu(false)}
                    >
                        About
                    </Link>
                </li>
            </ul>
       </div>
    )
}

export default NavigationMenu