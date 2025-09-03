import {useState} from "react";
import {useUpdateUserMutation} from "../../features/api/accountApi.ts";

interface EditProfileProps {
    close: () => void;
    login: string;
}

const EditProfile = ({close, login}: EditProfileProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [updateUser] = useUpdateUserMutation();


    const handleClickClear = () => {
        setFirstName('')
        setLastName('')
    }
    const handleClickSave = async () => {
        try {
            await updateUser({user: {firstName, lastName}, login}).unwrap();
        } catch (e) {
            console.log(`update user error: `, e)
        }
        close();
    }
    return (
        <>
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
        </>
    );
};

export default EditProfile;