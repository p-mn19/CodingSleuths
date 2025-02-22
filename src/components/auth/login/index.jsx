import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import './index.css';


const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (userLoggedIn) {
        return <Navigate to="/home" replace />;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isSigningIn) return;

        setIsSigningIn(true);
        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            setErrorMessage(error.code === "auth/user-not-found" ? "No account found with this email." : "Invalid credentials, please try again.");
            setIsSigningIn(false);
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (isSigningIn) return;

        setIsSigningIn(true);
        try {
            await doSignInWithGoogle();
        } catch (error) {
            setErrorMessage("Google Sign-In failed. Try again.");
        }
        setIsSigningIn(false);
    };

    return (
        <div>
            <main className="w-full h-screen flex items-center justify-center bg-cover bg-center">
                <div className="container">
                    <h3 className="text-gray-800 text-xl font-semibold text-center">Welcome Back</h3>
                    
                    {errorMessage && <span className='text-red-600 font-bold block text-center'>{errorMessage}</span>}
                    
                    <form onSubmit={onSubmit} className="space-y-5">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="w-full p-2 border rounded" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="w-full p-2 border rounded" />
                        <button 
                            type="submit" 
                            disabled={isSigningIn} 
                            className={`w-full p-2 rounded ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 text-white'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="font-bold">Sign up</Link></p>

                    <button 
                        disabled={isSigningIn} 
                        onClick={onGoogleSignIn} 
                        className="w-full p-2 border rounded bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Continue with Google
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
