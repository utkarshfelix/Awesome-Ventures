import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import axios from "axios";
import './SignUp.css'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    window.location = 'http://localhost:3000/';

    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });

    alert("Form submitted successfully!");
  }


  render() {
    return (
      <div>
        <div className="container">
          {/* <image src='/images/sign-up.jpeg'/> */}
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <div className="Sign-title">
                Sign-Up
              </div>
              <div className="name">
                <input
                  label for="name"
                  type="text"
                  placeholder="Full Name"
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className="form-control form-group" required
                />
              </div>

              <div className="uname">
                <input
                  type="text"
                  label for="name"
                  placeholder="Username"
                  onChange={this.changeUsername}
                  value={this.state.username}
                  className="form-control form-group" required
                />
              </div>

              {/* <div className="icon-1">
              <i class="fa-solid fa-envelope-dot"></i>
              </div> */}
              <div className="email">
                <input
                  type="text"
                  label for="name"
                  placeholder="Email"
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control form-group" required
                />
              </div>

              <div className="password">
                <input
                  type="password"
                  label for="name"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control form-group" required
                />
              </div>

              <div className="submit">
                <input
                  type="submit"
                  className="btn btn-success btn-block"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
// export default function SignUp() {
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }