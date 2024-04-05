import React from "react";
import "./index.css";
import NavBar from './Components/NavBar.jsx';
import Post from './Components/Post.jsx';
import Contacts from './Components/Contacts.jsx'
import UserProfile from './Components/UserProfile.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <UserProfile/>
        <Contacts/>
        <Post/>
      </div>
    </>
  );
}

export default App;
