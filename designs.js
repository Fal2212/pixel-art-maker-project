
// define constant variable
const canvasBox = document.getElementById('pixelCanvas');
const canvasForm = document.querySelector('form')[2];

function makeGrid(){
  let canvasHeight = document.getElementById('inputHeight').value;
  let canvasWidth = document.getElementById('inputWidth').value;

    //creating table cloumns and rows based on user input
    for(var col = 0; col < canvasHeight; col++){
        let createdColumn = document.createElement('tr');
        canvasBox.appendChild(createdColumn);
        for (var row = 0; row < canvasWidth; row++){
            let createdRow = document.createElement('td');
            createdColumn.appendChild(createdRow);
        }
    }
}

// cleanGrid fuction clears grid if it exists
function cleanGrid(){
  while (canvasBox.hasChildNodes()){
      canvasBox.removeChild(canvasBox.firstChild);
  }
}

//prevents submit button from submitting form 
canvasForm.addEventListener('click', function(ev){
    ev.preventDefault();
 cleanGrid();
 makeGrid();
});

// colors a specific cell chosen by the user
canvasBox.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'TD') {
        let canvasColor =  document.getElementById('colorPicker').value;
        evt.target.style.backgroundColor = canvasColor;
    }
});
