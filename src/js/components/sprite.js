
// const canvas = document.getElementById("hero-lightpass");
// const context = canvas.getContext("2d");
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.hero__images')
  const frameCount = 400;
  const currentFrame = index => (
    `./img/animation/pic_${index.toString().padStart(5, '0')}.webp`
  )

  const arrImages = []

  for(let i = 0; i < frameCount; i++){
    arrImages.push(`./img/animation/pic_${i.toString().padStart(5, '0')}.webp`)

  }
  async function preloadImages(){
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = arrImages[i];
    }
  };
  let frameIndex = 0;

  function draw(){
    if (frameIndex === frameCount) frameIndex = 0;
    container.src = arrImages[frameIndex++]
  }


  preloadImages().then(() => setInterval(() => {
    draw();
  }, 40))

  // var interval = setInterval(() => {
  //   draw();
  // }, 40);
})
