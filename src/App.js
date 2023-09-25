import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './components/createUser';
import UpdateUsers from './components/updateUser';
import { useSelector } from 'react-redux';
import Header from './components/header/header';
import UserList from './components/layout/userDetails';

function App() {
  const { mode } = useSelector((state) => state.darkMode)
  return (
    <>
      <BrowserRouter>
        <div className={mode ? 'darktheme' : 'lighttheme'} style={{ height: '100%', width: '100%' }}>
          <Header />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="updateuser/:id" element={<UpdateUsers />} />
          </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
