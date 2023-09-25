import React from "react";
import { Link } from "react-router-dom";
import { removeUser } from "../../../features/UserListSlice";
import { useDispatch } from "react-redux";
import './userdetailformat.css';

const UserDetailsFormat = ({ user }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeUser({ id: id }));
    };
    return (
        <>
                <div key={user?.id} className="divcontainers">
                    <div className="tasktitle">
                        {user?.title}
                    </div>
                    <div className="taskdescription">
                        {user?.description}
                    </div>
                    <div className="taskstatus">
                        {user?.status}
                    </div>
                    <div>
                        <div className="user-detail-buttons">
                            <Link to={`updateuser/${user.id}`}>
                                <button className="updateuser"> EDIT</button>
                            </Link>
                        </div>
                        <button className="deleteuser" onClick={(() => handleDelete(user.id))}>
                            DELETE
                        </button>
                    </div>
                </div>
        </>
    );
}
export default UserDetailsFormat;