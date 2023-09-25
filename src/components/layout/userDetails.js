import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './userDetails.css';
import UserDetailsFormat from "./userdetailsformat/userDetailformat";

const UserList = () => {
    const userList = useSelector((state) => state.userList)
    const [filterBy, setFilterBy] = useState('all');

    const filteredTasks =
        filterBy === 'all' ? userList : (filterBy === 'pending' ? userList.filter((user) => user.status === 'Pending') : filterBy === 'completed' ? userList.filter((user) => user.status === 'Completed') : '')

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };
    return (
        <>
            <div className="userDetailsMain alltasks">
                <select className="selecteddropdown" value={filterBy} onChange={handleFilterChange}>
                    <option value="all">
                        All
                    </option>
                    <option value="completed">
                        Completed
                    </option>
                    <option value="pending">
                        Pending
                    </option>
                </select>
                <Link
                    to="/createuser"
                    className="create-user"
                >
                    Add New User
                </Link>
                <div className="listItem"  >
                    {filteredTasks && filteredTasks.map((user,index) => (
                        <div key={index} className="eachwidth" >
                            <UserDetailsFormat user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default UserList;