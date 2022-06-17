import p5 from 'p5'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_43')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

    let s = 2;
    let y = 0;
    let a = 2;
    let back = 100;

  let sketch = (p) => {
    p.setup = () => {
      let canvas = p.createCanvas(700, 700, p.WEBGL)
      canvas.parent('frame')


      p.frameRate(60)
      p.background(back)
    }

    p.draw = () => {
      p.fill(250);
      p.rotateY(y)
      p.scale(s);
      p.sphere()
      

      y += 0.01
      s = p.cos(a) * 2;


    }
  }

  let myp5 = new p5(sketch)
})
