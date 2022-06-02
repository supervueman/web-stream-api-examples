// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

window.addEventListener('load', () => {
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

  const constraints = {
    video: {
      width: { max: 640, ideal: 1920 },
      height: { min: 400, ideal: 1080 },
      aspectRatio: { ideal: 1.7777777778 }
    },
    audio: {
      sampleSize: 16,
      channelCount: 2
    }
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    console.log(devices)
  })

  console.log(supportedConstraints)

  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    console.log(stream.getVideoTracks()[0].getCapabilities())
    const videoElement = document.querySelector('#video')
    videoElement.srcObject = stream;
    videoElement.play()
  })
})