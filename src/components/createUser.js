import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/UserListSlice";
import './createupdateItem.css'
const CreateUser = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const { mode } = useSelector((state) => state.darkMode)
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userList);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: userList[userList.length - 1].id + 1, title, description, status }));
        navigate("/");
    };



    return (
        <>
            <div className={mode ? 'darktheme landingmaindisplay' : 'lighttheme landingmaindisplay'}>
                <div className="create-user-form">
                    <div className="add-new-user display-flex">ADD NEW USER</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-details">
                            <div className="user-label"> <label >Title:</label></div>
                            <input
                                className="user-input"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                          />
                        </div>
                        <div className="form-details">
                        <div className="user-label"> <label >Description:</label></div>
                            <input
                            className="user-input"
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-details">
                        <div className="user-label"> <label >Status:</label></div>
                            <select
                            className="user-select"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="Pending">
                                    Pending
                                </option>
                                <option value="Completed">
                                    Completed
                                </option>
                            </select>
                        </div>
                       <div className="display-flex">
                       <button className="user-button" type="submit">Submit</button>
                       </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default CreateUser;