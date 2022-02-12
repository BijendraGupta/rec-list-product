import React, { Component } from "react";
import "../style.css";
import CustomInput from "./CustomInput";
import Button from "./Button";
import axios from "axios";
import { setCookie } from "../cookies";

export const api = axios.create({
  baseURL: `https://hoodwink.medkomtek.net/api/`,
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleLogin = () => {
    api
      .post("/auth/login", this.state)
      .then((res) => {
        if (res.status == 200) {
          setCookie("token", res["data"]["token"], res["data"]["expiresIn"]);
          this.history.push("/productTile");
        }
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
            onClick={this.handleLogin}
          >
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
