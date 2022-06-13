var ryu = document.getElementById('ryu');
var interval;

function clearClasses() {
  ryu.className = ""
  clearInterval(interval)
}

function jab() {

  if (!ryu.classList.contains('jab')) {
    
    ryu.classList.add('jab')
    interval = setInterval(clearClasses, 200)
  }
  
}

function hadouken() {
  if (!ryu.classList.contains('hadouken')) {
    ryu.classList.add('hadouken')
    interval = setInterval(clearClasses, 750)
  } 
}

document.getElementById('jab').addEventListener('click', jab)

document.getElementById('hadouken').addEventListener('click', hadouken)