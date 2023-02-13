import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn ({logIn}) {
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        logIn(name);
        navigate("/books")
    }

    return (
        <main className="login-page">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_118_266)">
                <path d="M20 96.7V100H26.7V96.7H20ZM73.3 96.7V100H80V96.7H73.3ZM26.7 96.7V83.3H20V96.6H26.7V96.7ZM43.3 66.7H56.6V60H43.3V66.7ZM73.3 83.3V96.6H80V83.3H73.3ZM56.7 66.7C65.9 66.7 73.4 74.2 73.4 83.4H80C80 70.4 69.6 60 56.7 60V66.7ZM26.7 83.3C26.7 74.1 34.2 66.6 43.4 66.6V60C30.4 60 20 70.4 20 83.3H26.7ZM50 20C40.8 20 33.3 27.5 33.3 36.7H40C40 31.2 44.5 26.7 50 26.7V20ZM66.7 36.7C66.7 27.5 59.2 20 50 20V26.7C55.5 26.7 60 31.2 60 36.7H66.7ZM50 53.3C59.2 53.3 66.7 45.8 66.7 36.6H60C60 42.1 55.5 46.6 50 46.6V53.3ZM50 46.7C44.5 46.7 40 42.2 40 36.7H33.3C33.3 45.9 40.8 53.4 50 53.4V46.7ZM10 6.7H90V0H10V6.7ZM93.3 10V90H100V10H93.3ZM90 93.3H10V100H90V93.3ZM6.7 90V10H0V90H6.7ZM10 93.3C8.2 93.3 6.7 91.8 6.7 90H0C0 95.5 4.5 100 10 100V93.3ZM93.3 90C93.3 91.8 91.8 93.3 90 93.3V100C95.5 100 100 95.5 100 90H93.3ZM90 6.7C91.8 6.7 93.3 8.2 93.3 10H100C100 4.5 95.5 0 90 0V6.7ZM10 0C4.5 0 0 4.5 0 10H6.7C6.7 8.2 8.2 6.7 10 6.7V0Z" fill="#01AAA7"/>
                </g>
                <defs>
                <clipPath id="clip0_118_266">
                <rect width="100" height="100" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className="login-page__login-block">
                <form method="post" className="login-page__signin-form" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="text" id="username" value = {name} onChange={e => setName(e.target.value)} minLength="4" maxLength="16" required placeholder="type Username" />
                        <button className="login-page__login-button" type="submit">Sign-in</button>  
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SignIn;