import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Pages/Index/index';
import Login from './Components/Pages/Login/index';
import Profile from './Components/Pages/Profile/index';
import Admin from './Components/Pages/Admin/index';
import Quiz from './Components/Pages/Quiz/index';
import Error from './Components/Error';
import Signup from './Components/Pages/Signup/index';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="error" element={<Error />} />
          <Route path="admin" element={<Admin />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
