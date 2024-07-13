let rotationAngle = 0;

document.addEventListener('rotate-image', (event) => {
  const action = event.detail;
  const images = document.querySelectorAll('img');

  if (action === 'rotate-left') {
    rotationAngle -= 90;
  } else if (action === 'rotate-right') {
    rotationAngle += 90;
  }

  images.foreach((image) => {
    image.style.transform = `rotate(${rotationAngle}deg)`;
  });
  
});
