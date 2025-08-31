import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";

interface ChangePasswordProps {
    close: () => void;
}
const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useAppDispatch();
    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            dispatch(changePassword({newPassword, oldPassword}))
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