const spans = document.getElementsByTagName('span');
const vid = document.getElementsByTagName('video')[0];

vid.addEventListener('timeupdate', () => {
  for (let i = 12; i < spans.length; i++) {
    if (vid.currentTime >= spans[i].dataset.start && vid.currentTime <= spans[i].dataset.end) {
      spans[i].style.backgroundColor = "yellow";
    } else {
      spans[i].style.backgroundColor = "none";
    }
  }
});

 
 