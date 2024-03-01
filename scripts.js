let booth = document.querySelector(.photobooth);
let control = document.querySelector(.controls);


const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContex("2d");
const strip = document.querySelector(".strip");
const sanp = document.querySelector(".snap");

function getVideo(){
    navigator.mediaDevices
  .getUserMedia(video: true, audio: false})
  .then(localMediaStream => {
    console.log(localMediaStream); /* this accesses the user video data so we can use it on the page) */
video.srcObject = localMediaStream;
video.play();
  })
  .catch(err => {
    console.error(`OH NO!!!`, err);
  });
