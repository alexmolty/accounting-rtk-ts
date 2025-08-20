import {useState} from "react";

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleClickSignIn = () => {
        //TODO SIGN IN
    }
    const handleClickClear = () => {
        setLogin('')
        setPassword('')
    }
    return (
        <div>
            <label>Login:
                <input
                    type="text"
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button onClick={handleClickSignIn}>Sign in</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default SignIn;