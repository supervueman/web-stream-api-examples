// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

window.addEventListener('load', () => {
  const btnRecord = $('.btn-record')
  // const btnStop = $('.btn-stop')

  btnRecord.on('click', () => {
    let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

    const constraints = {
      video: {
        width: { max: 1200, ideal: 1920 },
        height: { max: 600, ideal: 1080 },
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
})