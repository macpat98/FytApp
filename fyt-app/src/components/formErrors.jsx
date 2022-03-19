import React, { Component } from "react";

class FormErrors extends Component {
  render() {
    return <div className="formErrors">{this.props.formErrors.userName}</div>;
  }
}

export default FormErrors;
