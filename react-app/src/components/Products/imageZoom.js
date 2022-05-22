function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);

  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
  var pos, x, y;
  e.preventDefault();
  pos = getCursorPos(e);

  x = pos.x - (lens.offsetWidth / 2);
  y = pos.y - (lens.offsetHeight / 2);
  if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
  if (x < 0) {x = 0;}
  if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
  if (y < 0) {y = 0;}
  /* Set the position of the lens: */
  lens.style.left = x + "px";
  lens.style.top = y + "px";
  /* Display what the lens "sees": */
  result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
  var a, x = 0, y = 0;
  e = e || window.event;
  /* Get the x and y positions of the image: */
  a = img.getBoundingClientRect();
  /* Calculate the cursor's x and y coordinates, relative to the image: */
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  /* Consider any page scrolling: */
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return {x : x, y : y};
  }
  }
