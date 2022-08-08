import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Pages/Index/index';
import Login from './Components/Pages/Login/login';
import Profile from './Components/Pages/Profile/profile';
import Admin from './Components/Pages/Admin/admin';
import Quiz from './Components/Pages/Quiz/quiz';
import Error from './Components/Error';
import Signup from './Components/Pages/Signup/signup';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
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
