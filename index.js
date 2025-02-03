
const cameraInit = () => {
    const video = document.getElementById("camera");

    const cameraSetting = {
        audio: false,
        video: true
    }
    document.body.requestFullscreen();
    navigator.mediaDevices.getUserMedia(cameraSetting)
        .then((mediaStream) => {
            video.srcObject = mediaStream;
        })
        .catch((err) => {
            console.log(err.toString());
        });
}
