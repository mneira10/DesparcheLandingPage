import React, { Component } from 'react';
import "./mailingList.css";

export default class MailingList extends Component {
  constructor(props) {
    super(props);
    
    this.inputEmail = React.createRef();
  }
  
  postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }
  sendEmail(){
    const emailToSend = this.inputEmail.current.value;
    const data = {};
    data['email'] = emailToSend;
    console.log("Email stored");

    this.inputEmail.current.value = "";
  }

  render() {
    return (
      <div className="registerContainer" style={{
        height:"25%",
        // display:"flex",
        }}>
        <br/><br/>
       <div style={{margin:"auto 0"}}>         
          <h3     >Registra tu correo para mantenerte al tanto!</h3>
          <input ref={this.inputEmail} type="email"/>
          <button onClick={this.sendEmail.bind(this)}>Registrar</button>
       </div>
      </div>
    )
  }
}
