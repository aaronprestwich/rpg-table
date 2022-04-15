let id = 0;
let output = document.querySelector('#table');
let race = document.querySelectorAll('input[name="race"]');
let career = document.querySelectorAll('input[name="favClass"]'); // career is class
var slider = document.getElementById('myRange');
var level = document.getElementById('demo');

// Add Character to table
document.getElementById('add').addEventListener('click', () => {
    
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    row.setAttribute('id', `character-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = selectBtn(race);    
    row.insertCell(2).innerHTML = selectBtn(career);
    row.insertCell(3).innerHTML = getCharacterLevel();
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-name').value ='';
})

// Radio button input 
function selectBtn(input){
    const radioButtons = input;
    let btn;
    for(const radioButton of radioButtons) {
        if (radioButton.checked){
            btn = radioButton.value;
            console.log(btn);
        }
    }     
    if(btn == undefined){
        btn ="";
    }
    return btn;
}

// Slider function input
function getCharacterLevel()
{
    level.innerHTML = slider.value;

    slider.oninput = function() {
        level.innerHTML = this.value;        
    }
    return level.innerHTML;
}

// Create Delete Button
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`deleteing row with character-${id}`);
        let elementToDelete = document.getElementById(`character-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}