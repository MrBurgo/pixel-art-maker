document.addEventListener('DOMContentLoaded', function (){
  // define variables
  var xInput = document.getElementById('x-input');
  var yInput = document.getElementById('y-input');
  var gridBody = document.getElementsByClassName('grid')[0];
  var gridRow = null;
  var pixel = null;
  var palette = document.getElementsByClassName('palette')[0];
  var currentColor;
  var submit = document.querySelector('button');
  // Create a function that takes the user's height and width inputs and generates a grid and on clicking the submit button, the grid generates
  submit.addEventListener('click', function (){
    if (xInput.value > 70 || yInput.value > 100 ){
      return alert('Please choose a smaller grid size');
    }
    for (var i = 0; i < yInput.value; i++){
      gridRow = document.createElement('div');
      gridRow.className = 'grid-row';
      gridBody.append(gridRow);
      for (var j = 0; j < xInput.value; j++){
        pixel = document.createElement('div');
        pixel.className = 'pixel'
        gridRow.append(pixel);
      }
    }
  })

  palette.addEventListener('click', function(event){
    currentColor = event.target.classList[0];
  });

  gridBody.addEventListener('click', function (event){
    event.target.classList.add(currentColor);
  })
});
