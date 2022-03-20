import React, { Component } from "react";

class FormErrors extends Component {
  render() {
    return (
      <div className="formErrors">
        {Object.keys(this.props.formErrors).map((fieldName, i) => {
          if (this.props.formErrors[fieldName].length > 0) {
            return <p>{this.props.formErrors[fieldName]}</p>;
          }
        })}
      </div>
    );
  }
}

export default FormErrors;
