import {Routes,Route} from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./administrationlogin.css";




function Administration() {

    const Navigate = useNavigate();


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
         Navigate("/Formulaire");
       
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="s'inscrire" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="home">
          <body>
        <ul class="menu">
              <li>
                <a href="#Administration"  class="actif">Administration</a>
              </li>
              <li>
               <a href="/Superviseurs"> Superviseurs</a>
              </li>
              <li>
                <a href="/Encadrant">Encadrants</a>
              </li>
              <li>
                <a href="/Jury">Jurys</a>
              </li>
        </ul>
    </body>
    
    <div id = "Administration">
      <div className="login-form">   
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div> 
  );
}

export default Administration;