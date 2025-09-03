import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useChangePasswordMutation, useFetchUserQuery} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";
import {setToken} from "../../features/token/tokenSlice.ts";

interface ChangePasswordProps {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useAppDispatch();
    const [changePassword] = useChangePasswordMutation();
    const token = useAppSelector(state => state.token);
    const {data} = useFetchUserQuery(token);
    const handleClickSave = async () => {
        if (newPassword === confirmPassword) {
            const token = createToken(data!.login, oldPassword)
            try {
                await changePassword({newPassword, token}).unwrap();
                dispatch(setToken(createToken(data!.login, newPassword)));
            } catch (e) {
                console.log(`change password error: `, e)
            }
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