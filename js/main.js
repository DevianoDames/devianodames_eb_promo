(() => {
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    
    function modelLoaded() {
        console.log("Model loaded!")
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();

  (() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

        function onDown(){
            dragging = true;
            console.log("Set to false")
        }
        function onUp() {
            dragging = true;
            console.log("Set to false")
        }

        function onMove(event){
            //console.log("on move called");
            if(dragging===true){
                //console.log("dragging");
                let x = event.clientX - imageCon.getBoundingClientRect(). left;
                console.log(x);

                if(x < min){
                    x = min;
                  }  else if ( x > max) {
                        x = max-10;
                  }
                    
                

                drag.style.left = x + "px";
                left.style.width = x + "px";

            }
        }

        drag.addEventListener('mousedown',onDown);
        document.body.addEventListener('mouseup',onUp)
        document.body.addEventListener('mousemove',onMove);
})();

(() => {

  const canvas = document.querySelector("#earbuds");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 1940; //how many still frames do we have?
  const images = []; //array to hold all of our images

  //oject literal, that has a property of frame to hold the current frame
  const buds = {
      frame: 0
  }

  //run a for loop to populate our images array
  for(let i=0; i<frameCount; i++) {
      //console.log(i);
    const img = new Image();
    // string I am trying to create: images/explode_13.webp
  img.src = `images/earbuds${(i+1)}.jpg`;  
  images.push(img);
  }

  //console.table(images);

  //we are not actually animating a DOM element, but rather an object
  //which contains a frame count, as the user scrolls we increase the 
  //value by 1. We tell GreenSock there is a total of 449 frames to cycle
  //though,so it know when to stop. GreenSock scrolling uses decimals, so
  //we use "snap" to give us whole numbers 1 vs 0.0085.
  gsap.to(buds, {
      frame: 1940,
      snap: "frame",
      scrollTrigger: {
          trigger: "#earbuds",
          pin: true,
          scrub: 0.5,
          markers: true,
          start: "top top"
      },
      onUpdate: render
  })

  images[0].addEventListener("onload", render);

  function render() {
    console.log(buds.frame);
    console.log(images[buds.frame]);

    context.clearRect(0, 0, canvas.width, canvas.height);

    const currentImage = images[buds.frame];
    
    if (currentImage && currentImage instanceof HTMLImageElement) {
        context.drawImage(currentImage, 0, 0);
    } else {
        console.error("Invalid image type or missing image at index:", buds.frame);
    }
}

})();


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
