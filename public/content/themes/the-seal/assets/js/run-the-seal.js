

addEventListener('DOMContentLoaded', function() {
  let seals = document.querySelectorAll('.the-seal');

  seals.forEach((item, index) => {
    console.log(item);
    const title = item.querySelector('.the-seal__title').textContent;
    const image = item.querySelector('.the-seal__image').getAttribute('src');
    const size = item.querySelector('.the-seal__size').value;
    
    var seal = new Seal(document.body, size, title, image);

    const sunburn = item.querySelector('.the-seal__sunburn').value;
    if(sunburn) {
      seal.enableSunburn();
    }

    const rotationSpeed = item.querySelector('.the-seal__rotation-speed').value;
    seal.setProperty('rotationSpeed', rotationSpeed);

    const oscillationSpeed = item.querySelector('.the-seal__oscillation-speed').value;
    seal.setProperty('oscillationSpeed', oscillationSpeed);
    // seal.setOscillationSpeed(oscillationSpeed);

    const crownColor = item.querySelector('.the-seal__crown-color').value;
    seal.setProperty('crownColor', crownColor);

    const borderSize = item.querySelector('.the-seal__border-size').value;
    seal.setProperty('borderSize', borderSize);
    

    const borderColor = item.querySelector('.the-seal__border-color').value;
    seal.setProperty('borderColor', borderColor);
  

    const textColor = item.querySelector('.the-seal__text-color').value;
    seal.setProperty('textColor', textColor);
    
    const gearSize = item.querySelector('.the-seal__gear-size').value;
    seal.setProperty('gearSize', parseInt(gearSize), true);

    const gearBorder = item.querySelector('.the-seal__gear-border').value;
    seal.setProperty('gearBorder', parseInt(gearBorder), true);

    seal.render();
    item.style.display = 'none';
  });
});
