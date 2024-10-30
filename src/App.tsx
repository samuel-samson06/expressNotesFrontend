import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotesApp from './NotesApp';
import CreateNote from './pages/CreateNote';
import Note from './pages/Note';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Auth from './pages/auth/Auth';
import Forgot from './pages/auth/Forgot';
import Account from './pages/Account';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesApp/>}/>
          <Route path='/create' element={<CreateNote/>}/>
          <Route path='/:id' element={<Note/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path="/auth" element={<Auth/>}>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='forgot-password' element={<Forgot/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App

