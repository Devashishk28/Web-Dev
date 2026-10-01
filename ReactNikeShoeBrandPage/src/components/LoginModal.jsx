export default function LoginModal({isOpen,onClose}){
    if(!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="login-modal">
                <button className="close-btn" onClick={onClose}>
                     ✕
                </button>

                <img src = "/images/brand_logo.png" alt="Nike" className="login-logo"/>

                <h1>Login</h1>
                <p>Welcome back! Please login to your account.</p>

                <input type="email" placeholder="Email address" className="input-field"/>

                <input type="password" placeholder="Password" className="input-field"/>

                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>

                <button className="login-btn">
                    Login
                </button>

                <div className="divider">
                    <span>or</span>
                </div>

                <button className="google-btn">
                      🌐 Continue with Google
                </button>

                <p className="signup-text">
                    Don't have an account? <a href="#">Sign Up</a>
                </p>
            </div>
        </div>
    );
}