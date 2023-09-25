import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from "../features/darkModeSlice";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
    const { mode } = useSelector((state) => state.darkMode)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div className={mode ? 'darktheme' : 'lighttheme'}>
                    <div className="headerbackground box-shadow">
                        <div className="headerdisplay">
                            <div className="headercontent">
                                <div className="toggleapplication">Toggle Theme</div>
                                <div><Link className="homelink" to="/">Home</Link></div>
                            </div>

                            <div className="toggle-button">
                                <label className="switch">
                                    <input className="checkboxtoggle" style={{ width: '90px', borderRadius: '25px' }} type="checkbox" onChange={(() => dispatch(toggleDarkMode()))}
                                    /><span className="slider round"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;