import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/security/register";
export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const newUser = { email: email, password: password };
            axios.post(url, newUser)
            .then(({data}) => {
                if (data.error) setError(data.error);
                else {
                    console.log(data, "User is successfully registered");
                    setError("");
                    setEmail("");
                    setPassword("");
                } 
            })
        } else setError("All fields are required");
    }
    
    return (
        <div className="container text-white">
            <div className="row text-center p-5">
                <h2 className="text-center mb-5">S'enregistrer</h2>
                <form className="col-lg-6 col-md-6 col-xs-12 mx-auto" onSubmit={handleSubmit}>
                    {error && <p className="alert alert-danger">{error}</p>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="button-65 m-auto">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}