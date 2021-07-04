class Seal
{

  target = null;
  radius = null;
  background = null;

  seal = null;
  crown = null;
  background = null;

  size = null;
  itemSize = null;
  hypotenuse = null;

  borderSize = 10;

  top =   null;
  left = null;
  rotationSpeed = 0;


  constructor(target, radius, sentence, backgroundImage, left = null, top = null) {

    
    this.target = target;
    this.radius = parseInt(radius);
    this.sentence = sentence;
    this.backgroundImage = backgroundImage;

    this.gearSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--the-seal-gearSize'));

    this.size = this.radius * 2;
    
    this.hypotenuse = Math.sqrt(
      Math.pow(this.radius,2) * 2
    );

    this.top = 'calc(50% - ' + this.radius + 'px)';
    this.left = 'calc(50% - ' + this.radius + 'px)';

    if(top !==null) {
      this.top = top;
    }
    if(left !== null) {
      this.left = left;
    }


    this.initialize();
    this.drawCrown();
    this.drawBackground();
    this.drawTitle();
    this.render();
  }

  enableSunburn() {
    this.seal.classList.add('the-seal-sunburn');
  }

  setProperty(propertyName, value, isSize = false) {
    this[propertyName] = value;

    if(isSize) {
      value += 'px';
    }
    document.documentElement.style.setProperty('--the-seal-' + propertyName, value);

    this.drawCrown();
    this.drawBackground();
    this.drawTitle();
  }

  setOscillationSpeed(speed) {
    this.oscillationSpeed = speed;
    this.drawBackground();
  }


  render() {
    this.target.appendChild(this.seal);
  }


  initialize() {

    this.seal = document.createElement('div');
    this.seal.classList.add('the-seal');

    this.seal.style.width = this.size + 'px';
    this.seal.style.height = this.size + 'px';

    this.seal.style.top = this.top;
    this.seal.style.left = this.left;

    return this.seal;
  }

  drawCrown() {
 
    if(this.crown) {
      this.crown.innerHTML = '';
    }

    let number = Math.ceil(this.radius / (this.gearSize / 5));
  
    this.crown = document.createElement('div');
    this.crown.classList.add('crown');
    this.crown.style.position = 'absolute';
        
    this.crown.style.top = 0 + 'px';
    this.crown.style.left = 0 + 'px';
    this.crown.style.width = this.size + 'px';
    this.crown.style.height = this.size + 'px';


    // NOTICE DEBUG STYLE
    // this.crown.style.outline = 'solid 1px #f00';
    // this.crown.style.zIndex = 100;
    // this.crown.style.opacity = 0.3;
     

    for(let i = 0; i < number; i++) {
  
      let angle = 360 / number * i;

      const length = this.radius - this.borderSize / 2 ;

      let x = Math.cos(angle * Math.PI / 180) * length;
      let y = Math.sin(angle * Math.PI / 180) * length;
  
      let gear = document.createElement('div');
      gear.classList.add('the-seal__gear');

      gear.style.width = 'var(--the-seal-gearSize)';
      gear.style.height = 'var(--the-seal-gearSize)';
      gear.style.backgroundColor = 'var(--the-seal-crownColor)'
      
      gear.style.marginTop = 'calc((' + this.size +'px - var(--the-seal-gearSize)) / 2)';
      gear.style.marginLeft = 'calc((' + this.size +'px - var(--the-seal-gearSize)) / 2)';

      // NOTICE DEBUG STYLE
      // gear.style.outline = 'solid 1px #000';
  
      gear.style.left = x + 'px';
      gear.style.top = y + 'px';
      gear.style.transform = 'rotate(' + (angle + 90 + 45) + 'deg)';

      this.crown.appendChild(gear);
    }


    if(this.rotationSpeed) {
      const speed = 60 / this.rotationSpeed;
      this.crown.style.animation = 'the-seal-rotating ' + speed + 's linear infinite';
    }


    this.seal.appendChild(this.crown);
  }
  
  drawBackground() {
  
    this.background = document.createElement('div');
    this.background.classList.add('background');
    this.background.style.width = this.size + 'px';
    this.background.style.height =  this.size + 'px';
  
    this.background.style.top = 0 + 'px';
    this.background.style.left = 0 + 'px';
    this.background.style.borderWidth = this.borderSize + 'px';

    this.background.style.background = "radial-gradient(circle, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%), url(" + this.backgroundImage + ") 50% 50%, radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)";
    this.background.style.backgroundSize = 'cover';
    
    this.seal.appendChild(this.background);

    if(this.oscillationSpeed) {
      const speed = 60 / this.oscillationSpeed;
      this.background.style.animation = 'the-seal-oscillate ' + speed + 's linear infinite';
    }
    else {
      this.background.style.animation = '';
    }

  }

  drawTitle() {
    const fontSize = Math.min(
      (this.radius / this.sentence.length * 3),
      this.radius / 5
    );

    if(this.title) {
      this.title.innerHTML = '';
    }
    

    this.title = document.createElement('div');
    this.title.style.position = 'absolute'
    this.title.style.width = this.size + 'px';
    this.title.style.height = this.size + 'px';
    // this.title.style.outline = 'solid 1px #0ff';
    
    const length = this.radius - fontSize;

    for(let i = 0; i < this.sentence.length ; i++) {
      let span = document.createElement('span');
      span.classList.add('letter');
      span.innerHTML = this.sentence[i];

      let angle = 180 / this.sentence.length * i + 0 + (180 / this.sentence.length) + 180 - (fontSize / this.sentence.length);

      let x = Math.cos(angle * Math.PI / 180) * length;
      let y = Math.sin(angle * Math.PI / 180) * length;
 
      span.style.fontSize = fontSize + 'px';
  
      span.style.left = x + 'px';
      span.style.top = y + 'px';

      span.style.marginTop = 'calc((' + this.size +'px - var(--the-seal-gearSize)) / 2)';
      span.style.marginLeft = 'calc((' + this.size +'px - var(--the-seal-gearSize)) / 2)';

      span.style.transform = 'rotate(' + (angle + 90) + 'deg)';
      // span.style.outline = 'solid 1px #f0f';

      this.title.append(span);

      
    }

    this.seal.appendChild(this.title);
  }

}



