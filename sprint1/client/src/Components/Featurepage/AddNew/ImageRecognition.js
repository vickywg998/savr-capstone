import React, { Component } from 'react'
import { SelectList } from 'react-widgets'
import axios from "axios";

class ImageRecognition extends Component {
  state = {
    labels: [],
  };

  videoRef = React.createRef()
  canvasRef = React.createRef()
  snapshotRef = React.createRef()

  captureAndRequest = event => {
    event.preventDefault();

    const ctx = this.snapshotRef.current.getContext("2d");
    ctx.drawImage(this.videoRef.current, 0, 0, ctx.canvas.width, ctx.canvas.height);
    var dataURI = ctx.canvas.toDataURL('image/jpeg');

    axios.post("/webcam", {
        image: dataURI
      }).then(response => {
        var labels = response.data.labels;
        var labelNames = [];
        for (var i = 0; i < labels.length; i++) {
          var prediction = labels[i];
          var description = prediction.description;
          labelNames.push(description);
        }
        this.setState(
          {
            labels: labels,
            labelNames: labelNames
          }
        );

        this.renderPredictionsVisionAPI(labels);
      });
  };

  componentDidMount() { 
   
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user"
          }
        })
        .then(stream => {
          window.stream = stream
          this.videoRef.current.srcObject = stream
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve()
            }
          })
        })
    }
  }

  renderPredictionsVisionAPI = predictions => {
    const ctx = this.canvasRef.current.getContext("2d")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // Font options.
    const font = "15px sans-serif"
    ctx.font = font
    ctx.textBaseline = "top"
    for (var i = 0; i < predictions.length; i++) {
      var prediction = predictions[i];
      var description = prediction.description 
      // + ", confidence: " + prediction.score;

      // Draw the label background.
      ctx.fillStyle = "#E5E5EA"
      const textWidth = ctx.measureText(description).width
      const textHeight = parseInt(font, 10) // base 10

      var x = 0, y = 20 * i;
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000"
      ctx.fillText(description, x, y)
    }
  }

  render() {

    return (

      <div className="webcam__container">
      <div className="webcam__wrapper">
      <canvas 
          className="canvas__size--predictions"
          ref={this.canvasRef} 
        />
        <video
          className="canvas__size--video"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
        />
        <button 
        className="capture__button--container"
         onClick={this.captureAndRequest}>
        <img className="capture__button"/>
        </button>
        
       </div>
       <div className="webcam__wrapper2">
      
      
        <canvas 
          className="canvas__size--snapshot"
          ref={this.snapshotRef}
        />
        <SelectList 
          className="imgrec__selectList"
          data={this.state.labelNames}
          onChange={this.props.sendToAddItems}
        />
       </div>
      </div>
    )
  }
}

export default ImageRecognition;