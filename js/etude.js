let baseEtude = document.querySelector('.base-etude');

let rectEetudesCollection = baseEtude.children;

let rectEetudes = Array.from(rectEetudesCollection);

let length = rectEetudes.length;
let idx = 0;
let interval = 300;
let intervalId;

function toggleOpacity(elem) {
  elem.style.opacity = elem.style.opacity === "1" ? 0 : 1;
}

function moveNext(elem) {
  return elem.style.opacity === '0';
}

function start(timing) {
  let id = setInterval(() => {
    let element = rectEetudes[idx];
  
    toggleOpacity(element);
  
    if(moveNext(element)) {
      idx++;
    }
  
    if(idx >= length) {
      idx = 0;
    }
    // rectEetudes[0].style.opacity =
    // rectEetudes[0].style.opacity === "0" ? 1 : 0;
  
    // rectEetudes[0].style.visibility =
    //   rectEetudes[0].style.visibility !== "hidden" ? "hidden" : "visible";
    
  }, timing); 

  return id;
}

function stop(id) {
  clearInterval(id);
}

function run(t) {
  setInterval(() => {
    if(intervalId) {
      stop(intervalId);
    }
  
    intervalId = start(interval);
    if(interval < 1) {
      interval = 300;
    } else {
      interval-=10;
    }
  }, t);
}

// run(500);




// (function() {
//   // Start off at the first element.
//   var idx = 0;
//   var len = rectEetudes.length;

//   // Do the next link
//   function doNext() {
//     var entry = rectEetudes[idx];

//     console.log(idx + ":" + entry);

//     idx++;
//     console.log([idx, len]);
//     if (idx < len) {
//       toggleOpacity(rectEetudes[idx]);
//     }  else {
//       idx = 0;
//     }
//     setTimeout(doNext, 1000);      
//   }

//   doNext();

// }());