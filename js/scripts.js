const spans = document.getElementsByTagName('span');
const vid = document.getElementsByTagName('video')[0];

vid.addEventListener('timeupdate', function(){
  for (let i = 12; i < spans.length; i++) {
    if (vid.currentTime >= spans[i].dataset.start && vid.currentTime <= spans[i].dataset.end) {
      spans[i].style.color = "red";
    } else {
      spans[i].style.color = "black";
    }
  }
});

console.log(spans[13]);

// Works in Chrome and Firefox but not IE:

/*for (let i = 0; i < spans.length; i++) {
  if (spans[i].hasAttribute('data-start')) {
      spans[i].addEventListener('click', function() {
        vid.currentTime = spans[i].dataset.start;
      });
  }; 
};*/


// Works in Chrome, Firefox, and IE:

for (let i = 0; i < spans.length; i++) {
  if (spans[i].hasAttribute('data-start')) {
      (function(x) {
        spans[x].addEventListener('click', function() {
          vid.currentTime = spans[x].dataset.start;
      })})(i);
  }; 
};
 
 