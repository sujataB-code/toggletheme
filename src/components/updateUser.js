import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../features/UserListSlice";
import { useNavigate, useParams } from "react-router-dom";
import './createupdateItem.css'

const UpdateUsers = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userList);
    const { mode } = useSelector((state) => state.darkMode)
    const existingUser = userList.find((user) => user.id == id)
    const [updateTitle, setTitle] = useState(existingUser.title);
    const [updateDescription, setDescription] = useState(existingUser.description);
    const [updateStatus, setStatus] = useState(existingUser.status);
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            title: updateTitle,
            description: updateDescription,
            status: updateStatus
        }))
        navigate("/");
    };
    console.log("existingUser",existingUser)
    return (
        <>
            <div className={mode ? 'darktheme landingmaindisplay' : 'lighttheme landingmaindisplay'}>
            <div className="create-user-form">
            <div className="add-new-user display-flex">UPDATE USER</div>
                <form onSubmit={handleUpdate}>
                    <div className="form-details">
                    <div className="user-label"> <label >Title:</label></div>
                        <input
                         className="user-input"
                            type="text"
                            name="title"
                            value={updateTitle}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="form-details">
                    <div className="user-label"> <label >Description:</label></div>
                        <input
                         className="user-input"
                            type="text"
                            name="description"
                            value={updateDescription}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="form-details">
                    <div className="user-label"> <label >Status:</label></div>
                            <select
                             className="user-input"
                                name="status"
                                value={updateStatus}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option>
                                    Pending
                                </option>
                                <option>
                                    Completed
                                </option>
                            </select>
                        </div>
                        <div className="display-flex">
                       <button className="user-button" type="submit">Update</button>
                       </div>
                </form>
            </div>
            </div>
        </>
    );
};
export default UpdateUsers;