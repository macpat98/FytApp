import React, { Component } from "react";

class FormErrors extends Component {
  render() {
    return (
      <div className="formErrors">
        {Object.keys(this.props.formErrors).map((fieldName) => {
          if (this.props.formErrors[fieldName].length > 0) {
            return <li key={fieldName}>{this.props.formErrors[fieldName]}</li>;
          }
          return null;
        })}
      </div>
    );
  }
}

export default FormErrors;
