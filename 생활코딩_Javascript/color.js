function nightDayHandler(self){
  if (self.value === 'night') {
    BodySetColor('black', 'white');
    self.value = 'day';
    LinksSetColor('orange');
  } else {
    BodySetColor('white', 'black');
    self.value = 'night';
    LinksSetColor('ForestGreen');
  }
};
function LinksSetColor(color) {
  var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length) {
      console.log(alist[i]);
      alist[i].style.color = color;
      i = i + 1;
  }
}
function BodySetColor(x, y) {
  document.querySelector('body').style.backgroundColor = x;
  document.querySelector('body').style.color = y;
}