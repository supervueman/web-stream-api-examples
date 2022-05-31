// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

window.addEventListener('load', () => {
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

  console.log(supportedConstraints)

  navigator.mediaDevices.getUserMedia({
    video: {
      width: { min: 640, ideal: 1920 },
      height: { min: 400, ideal: 1080 },
      aspectRatio: { ideal: 1.7777777778 }
    },
    audio: {
      sampleSize: 16,
      channelCount: 2
    }
  }).then(stream => {
    console.log(stream)
    videoElement.srcObject = stream;
  })
})