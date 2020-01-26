var produce = ["banana", "apple", "pear"];
var localFridge = [];
var column = document.getElementById("list");
var local_column = document.getElementById("local_fridge");

function addToLocalFridge(t) {
  removeFood(t);
  localFridge.push(t);
  display();
  console.log(localFridge);
}

function removeFood(t) {
  for (i = 0; i < produce.length; i++){
    if (produce[i] == t){
      produce.splice(i, 1);
      break;
    }
  }
  display();
}

function addFood() {
  var new_food = document.getElementById("new_food").value;
  produce.push(new_food);
  display();
}

function display() {
  column.innerHTML = "<h1 id='your-fridge-title'>Your Fridge<button id='add-food-button' type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>add new food</button></h1><div class='accordion' id='accordionExample'>";
  for (i = 0; i < produce.length; i++){
    var f = new Food(produce[i]);
    column.innerHTML +=
    `<div class='card'>
    <div class='card-header justify-content-between' id='heading`+ i +`'>
    <h2 class='mb-0'>
    <button class='btn produce-button' type='button' data-toggle='collapse' data-target='#collapse`+ i +`' aria-expanded='true' aria-controls='collapse`+ i +`'>
    <h3>` + f.foodname + `</h3>
    </button>
    <button class='close-button' onClick='removeFood(this.parentNode.childNodes[1].innerText)'><svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"></path>
    </svg></button>
    </h2>
    </div>

    <div id='collapse`+ i +`' class='collapse' aria-labelledby='heading`+ i +`' data-parent='#accordionExample'>
    <div class='card-body'>
    Date of Purchase: `+ f.printPurchaseDate() +`<br> Estimated Expire Date: `+ f.printExpiryDate() +` <br> <button onClick='addToLocalFridge(this.parentNode.parentNode.parentNode.childNodes[1].innerText)'>add to local fridge</button>
    </div>
    </div>
    </div>`
  }
  column.innerHTML += '</div>';

  local_column.innerHTML = "<h1 id='your-fridge-title'>Local Fridge</h1><div class='accordion' id='accordionExample'>";
  for (j = 0; j < local_fridge.length; j++){
    var f = new Food(local_fridge[i]);
    local_column.innerHTML +=
    `<div class='card'>
    <div class='card-header justify-content-between' id='heading`+ i +`'>
    <h2 class='mb-0'>
    <button class='btn produce-button' type='button' data-toggle='collapse' data-target='#collapse`+ i +`' aria-expanded='true' aria-controls='collapse`+ i +`'>
    <h3>` + f.foodname + `</h3>
    </button>
    <button class='close-button' onClick='removeFood(this.parentNode.childNodes[1].innerText)'><svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"></path>
    </svg></button>
    </h2>
    </div>

    <div id='collapse`+ i +`' class='collapse' aria-labelledby='heading`+ i +`' data-parent='#accordionExample'>
    <div class='card-body'>
    Date of Purchase: `+ f.printPurchaseDate() +`<br> Estimated Expire Date: `+ f.printExpiryDate() +` <br> <button onClick='addToLocalFridge(this.parentNode.parentNode.parentNode.childNodes[1].innerText)'>add to local fridge</button>
    </div>
    </div>
    </div>`
  }
  local_column.innerHTML += '</div>';
}



display();
