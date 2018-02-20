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
  var selectedColor = document.getElementsByClassName('current-color')[0];
  var classLength = null;
  // Create a function that takes the user's height and width inputs and generates a grid and on clicking the submit button, the grid populates
  submit.addEventListener('click', function (){
    gridBody.classList.add('grid-border')
    if (xInput.value > 70 || yInput.value > 100 ){
      return alert('Please choose a grid size of 70 x 100 or smaller.');
    }
    for (var i = 0; i < xInput.value; i++){
      gridRow = document.createElement('div');
      gridRow.className = 'grid-row';
      gridBody.append(gridRow);
      for (var j = 0; j < yInput.value; j++){
        pixel = document.createElement('div');
        pixel.className = 'pixel'
        gridRow.append(pixel);
      }
    }
  })
// Event listener to choose a color from the palette and assign to 'currentColor' variable. Also updates the current-color div element to selected color
  palette.addEventListener('click', function(event){
    currentColor = event.target.classList[0];
    if (selectedColor.classList.length > 1){
      classLength = selectedColor.classList.length;
      selectedColor.classList.remove(selectedColor.classList[classLength - 1])
    }
    selectedColor.classList.add(event.target.classList[0]);
  });

  gridBody.addEventListener('click', function (event){
    if (event.target.classList.length > 1){
      classLength = event.target.classList.length;
      for (var i = classLength - 1; i > 0; i--){
        event.target.classList.remove(event.target.classList[i])
      }
    }
    event.target.classList.add(currentColor);
    console.log('Class List: ', event.target.classList)
  })
});
