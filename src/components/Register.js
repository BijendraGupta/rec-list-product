import React, { Component } from "react";
import "../style.css";
import CustomInput from "./CustomInput";
import Button from "./Button";
import axios from "axios";

export const api = axios.create({
  baseURL: `https://hoodwink.medkomtek.net/api/`,
});
export default class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };
  handleRegister = () => {
    api
      .post("/register", this.state)
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {});
  };
  render() {
    return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button
            type="button"
            color="primary"
            className="form__custom-button"
            onClick={this.handleRegister}
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}
