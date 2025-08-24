import {useState} from "react";

interface EditProfileProps {
    close: () => void;
}
const EditProfile = ({close}: EditProfileProps) => {
    const [login, setLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleClickClear = () => {
        setLogin('')
        setFirstName('')
        setLastName('')
    }
    const handleClickSave = () => {
        // TODO save and close in edit profile
        alert(`Saved ${login}, ${firstName}, ${lastName}`)
        close();
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
            <label>First name:
                <input
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </label>
            <label>Last name:
                <input
                    type="text"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default EditProfile;