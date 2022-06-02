// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

window.addEventListener('load', () => {
  const btnRecord = $('.btn-record')
  const btnStop = $('.btn-stop')

  let mediaRecorder
  let chunks = []
  const videoElement = document.querySelector('#video')

  btnRecord.on('click', () => {
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

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      mediaRecorder = new MediaRecorder(stream)
      mediaRecorder.start()

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data)
      }

      videoElement.srcObject = stream;
      videoElement.play()
    })
  })

  btnStop.on('click', () => {
    videoElement.pause()
    mediaRecorder.stop()

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { 'type': 'video/mp4;' })

      const recordedVideoUrl = URL.createObjectURL(blob)

      const a = document.createElement('a')

      a.setAttribute('href', recordedVideoUrl)
      a.setAttribute('download', 'record')

      a.click()

      chunks = []
    }
  })
})
