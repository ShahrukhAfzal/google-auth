import axios from 'axios'; 
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class UploadImage extends Component {
  state = { 
    selectedFile: null
  }; 
 
   onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 
   
  // On file upload (click the upload button) 
  onFileUpload = () => { 
   
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    // formData.append( 
    //   "myFile", 
    //   this.state.selectedFile, 
    //   this.state.selectedFile.name 
    // ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
    const link = '/show-image';
    window.location.href = link; 

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
                  <button onClick={this.onFileUpload} className="btn btn-primary"> 
                    Upload! 
                  </button> 
              </div> 
          </div>
        </div>
    );
  }
}

export default UploadImage;
