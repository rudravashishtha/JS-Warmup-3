const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    // Make a div usinng javascript
    let newDiv = document.createElement("div");

    newDiv.classList.add("imageDiv");
    newDiv.style.left = dets.clientX + "px";
    newDiv.style.top = dets.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200/300");
    newDiv.appendChild(img);

    gsap.to (img, {
      y: "0",
      ease: Power2,
      duration: 0.5,
    });
    gsap.to (img, {
      y: "100%",
      delay: 0.7,
      ease: Power2,
    });

    document.body.appendChild(newDiv);
    setTimeout(() => {
      newDiv.remove();
    }, 1000);
  }, 500)
);
