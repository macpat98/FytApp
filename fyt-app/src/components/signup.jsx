import React, { Component } from "react";
import FormErrors from "./formErrors";
import "./signup.css";

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
  //e.preventDefault();
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let userNameValid = this.state.isUserNameValid;
    let emailValid = this.state.isEmailValid;
    let passwordValid = this.state.isPasswordValid;

    switch (fieldName) {
      case "userName":
        userNameValid = value.length >= 6;
        fieldValidationErrors.userName = userNameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = new RegExp(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
          "i"
        ).test(value);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        console.log("Email valid?", emailValid);
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is invalid";
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

  isInvalidClass() {
    return !this.state.isUserNameValid ? "is-invalid" : "";
  }

  render() {
    return (
      <form className="form-signup form-group">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Sign up!</h1>
        <input
          name="userName"
          type="text"
          id="inputUserName"
          className={`form-control ${this.isInvalidClass()}`}
          placeholder="Username"
          required="{true}"
          autoFocus=""
          value={this.state.userName}
          onChange={(userName) => this.handleUserInput(userName)}
        />
        <input
          name="email"
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required="{true}"
          autoFocus=""
          value={this.state.email}
          onChange={(email) => this.handleUserInput(email)}
        />
        <input
          name="password"
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required="{true}"
          value={this.state.password}
          onChange={(password) => this.handleUserInput(password)}
        />
        <button
          className="btn btn-lg btn-primary btn-block mt-3"
          type="submit"
          //</form>onClick={
          //(e) => this.checkIfPasswordConfirmed(e)
          //}
          disabled={!this.state.isFormValid}
        >
          Create Your Account
        </button>
        <p className="mt-5 mb-3 text-muted">© fyt.com</p>
        <FormErrors formErrors={this.state.formErrors} />
      </form>
    );
  }
}

export default SignUp;
