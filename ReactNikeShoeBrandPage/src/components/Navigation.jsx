const Navigation =({ onLoginClick })=>{
    return(
        <nav className="container">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <div className="Navigation-btn">
                <button onClick={onLoginClick}>login</button>
            </div>
        </nav>
    );
};

export default Navigation;