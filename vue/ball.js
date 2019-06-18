var Movable = function(x,y) {
  this.pos = {
    x: x,
    y: y
  };
  this.move = function(x,y) {
    this.pos.x += x;
    this.pos.y += y;
  };
}

var ball = [];

for (var i=0; i<=100; i++){
  ball[i] = new Movable(
    Math.floor(Math.random()*window.innerWidth),
    Math.floor(Math.random()*window.innerHeight)
  );
}
for (var i=0; i<=100; i++) {
  document.write('<div class="ball" style="top:' + ball[i].pos.y +'px;left:' + ball[i].pos.x+ 'px;">●</div>');
}
