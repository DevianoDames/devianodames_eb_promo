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
  
  