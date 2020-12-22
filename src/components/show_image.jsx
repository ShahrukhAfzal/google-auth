import React, { Component } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import axios from "axios";

class ShowImage extends Component {
  state = {};

  onFileDownload = () => {
    axios
      .get("http://127.0.0.1:5000/upload-image", {
        headers: {
          "Content-Type": null,
        },
      })
      .then((res) => {
        console.log(res);
        const base64Image = res.data;

        return base64Image;

        // const file_loaction = res.data.location;
        // console.log(file_loaction);
      });
  };

  render() {
    const d = this.onFileDownload();
    return (
      <div>
        <h1>Show image page!</h1>

        <img src="data:image/jpeg;base64,{d}" />
      </div>
    );
  }
}

export default ShowImage;
