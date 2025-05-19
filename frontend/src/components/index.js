import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure styles.css is correctly imported

const Index = () => {
    return (
        <div className="index-page"> {/* Added wrapper with unique class */}
            <div className="index-container"> {/* Changed container to index-container for specificity */}
                <h1>Welcome to Farmer's Market Portal</h1>
                <p>Know your market, costs, and yield predictions.</p>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/Register">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Index;
