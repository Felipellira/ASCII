const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '

let preImg;

function preload(){
  preImg = loadImage("image.png")
}

function setup() {
  noCanvas();

  background(0);
  //image(preImg,0,0,width,height)
  preImg.loadPixels();
  let w = width / preImg.width;
  let h = height / preImg.height;

  for (let j = 0; j < preImg.height; j++) {
    let row = '';
    for (let i = 0; i < preImg.width; i++) {
      let pixelIndex = (i + j * preImg.width) * 4
      const r = preImg.pixels[pixelIndex + 0];
      const g = preImg.pixels[pixelIndex + 1];
      const b = preImg.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3

      noStroke();
      fill(255);
      //square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      const c = density.charAt(charIndex);
      console.log(c)
      if (!c) row += '&nbsp;'
      else row += c;
    }
    createDiv(row)
  }
}
