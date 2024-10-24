import React from 'react'
import './App.css'

const App = () => {
  const fetchUser = () => {
    const img = document.getElementById("userImg");
const email = document.getElementById("email");
const name = document.getElementById("name");


    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        name.textContent = `${user.name.first} ${user.name.last}`; 
        email.textContent = user.email; 
        img.src = user.picture.large; 
    })
    .catch(error => console.log(error));
};

  return (
    <div className="container">
  <h1>Random User Generator</h1>
  <button onClick={fetchUser}>Get Random User</button>
  <img id="userImg" alt="" />
  <p id="name" />
  <p id="email" />
</div>

    
  )
}

export default App