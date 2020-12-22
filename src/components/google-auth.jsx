import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

class GoogleAuth extends Component {
  state = {};

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="637275850380-iksg20cl5ln4g71umrgq5s97il7lmp8f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }

  responseGoogle(response) {
    if (response.getAuthResponse()) {
      console.log(response);
      const link = "/upload";
      window.location.href = link;
    }
  }
}

export default GoogleAuth;
