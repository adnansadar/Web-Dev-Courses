// Controlled Forms
import React, { Component } from "react";
import FormComponent from "./FormComponent";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { type, name, checked, value } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <FormComponent
        handleInputChange={this.handleInputChange}
        {...this.state}
      />
    );
  }
}

export default Form;
