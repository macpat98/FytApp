import React, { Component } from "react";
import FormErrors from "../formErrors";
import "./signup.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    formErrors: { userName: "", email: "", password: "" },
    isPasswordValid: false,
    isUserNameValid: false,
    isEmailValid: false,
    isFormValid: false,
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let userNameValid = this.state.isUserNameValid;
    let emailValid = this.state.isEmailValid;
    let passwordValid = this.state.isPasswordValid;

    switch (fieldName) {
      case "userName":
        userNameValid = value.length >= 6;
        fieldValidationErrors.userName = userNameValid
          ? ""
          : "Username is invalid!";
        break;
      case "email":
        emailValid = new RegExp(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
          "i"
        ).test(value);
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid!";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password is invalid!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        isUserNameValid: userNameValid,
        isEmailValid: emailValid,
        isPasswordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      isFormValid:
        this.state.isUserNameValid &&
        this.state.isEmailValid &&
        this.state.isPasswordValid,
    });
  }

  registerUser(e) {
    e.preventDefault();
    if (this.state.isFormValid) {
      createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
        .then((res) => {
          console.log(res.user);
          alert("User was registered!");
        })
        .catch((err) => console.log("Error: " + err));
    } else console.log("??");
  }

  isInvalidClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.registerUser(e)}
        name="registration-form"
        className="form-signup form-group"
      >
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Sign up!</h1>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <label htmlFor="inputUserName">Username</label>
        <input
          name="userName"
          type="text"
          id="inputUserName"
          className={`form-control ${this.isInvalidClass(
            this.state.formErrors.userName
          )}`}
          placeholder="Username"
          required="{true}"
          autoFocus=""
          value={this.state.userName}
          onChange={(userName) => this.handleUserInput(userName)}
        />
        <label htmlFor="inputEmail">Email</label>
        <input
          name="email"
          type="email"
          id="inputEmail"
          className={`form-control ${this.isInvalidClass(
            this.state.formErrors.email
          )}`}
          placeholder="Email address"
          required="{true}"
          autoFocus=""
          value={this.state.email}
          onChange={(email) => this.handleUserInput(email)}
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          name="password"
          type="password"
          id="inputPassword"
          className={`form-control ${this.isInvalidClass(
            this.state.formErrors.password
          )}`}
          placeholder="Password"
          required="{true}"
          value={this.state.password}
          onChange={(password) => this.handleUserInput(password)}
        />
        <button
          className="btn btn-lg btn-primary btn-block mt-3"
          type="submit"
          disabled={!this.state.isFormValid}
        >
          Create Your Account
        </button>
        <p className="mt-5 mb-3 text-muted">© fyt.com</p>
      </form>
    );
  }
}

export default SignUp;
