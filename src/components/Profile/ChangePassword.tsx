import {useState} from "react";

interface ChangePasswordProps {
    close: () => void;
}
const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            // TODO save in change password
            alert(`Change success ${oldPassword} ${newPassword} ${confirmPassword}`);
            close();
        } else {
            alert("Passwords do not match")
        }
    }
    const handleClickClear = () => {
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")
    }
    return (
        <>
            <label>Old Password:
                <input
                    type="password"
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                />
            </label>
            <label>New Password:
                <input
                    type="password"
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                />
            </label>
            <label>Confirm password:
                <input
                    type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;