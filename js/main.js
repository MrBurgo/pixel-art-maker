document.addEventListener('DOMContentLoaded', function (){
  var body = document.querySelector('body');
  var gridBody = document.getElementsByClassName('grid')[0];
  var gridRow = null;
  var pixel = null;
  var palette = document.getElementsByClassName('palette')[0];
  var currentColor;

  var createPixels = function (x, y){
    for (var i = 0; i < y; i++){
      gridRow = document.createElement('div');
      gridRow.className = 'grid-row';
      gridBody.append(gridRow);
      for (var j = 0; j < x; j++){
        pixel = document.createElement('div');
        pixel.className = 'pixel'
        gridRow.append(pixel);
      }
    }
  }

  createPixels(10, 100);

  palette.addEventListener('click', function(event){
    currentColor = event.target.classList[0];
  });

  gridBody.addEventListener('click', function (event){
    event.target.classList.add(currentColor);
  })
});
