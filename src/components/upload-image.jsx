import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const apiRoot = "http://127.0.0:5000";

class UploadImage extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    // console.log(event);
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    // console.log(this.state.selectedFile);
    axios
      .post("http://127.0.0.1:5000/upload-image", formData, {
        headers: {
          "Content-Type": null,
        },
      })
      .then((res) => {
        // console.log(res.data);
        const file_loaction = res.data.location;
        // console.log(file_loaction);
      });
    const link = "/show-image";
    this.props.history.push(link);
    // window.location.href = link;
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Upload Image </h1>
          </div>
          <div className="row">
            <input type="file" onChange={this.onFileChange} />
            <button
              onClick={this.onFileUpload}
              className="btn btn-primary"
              defaultValue=""
            >
              Upload!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImage;
