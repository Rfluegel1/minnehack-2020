var personalFridge = [new Food("banana"), new Food("apple"), new Food("pear")];
var localFridge = [new Food("eggs"), new Food("celery")];
var column = document.getElementById("list");
fridge = [];
document.cookie = ""
var db = firebase.database();

function addToLocalFridge(t) {
  removeFood(t);
  localFridge.push(t);
  display();
  console.log(localFridge);
}

function removeFood(t) {
  for (i = 0; i < personalFridge.length; i++){
    if (personalFridge[i].foodname == t){
      personalFridge.splice(i, 1);
      break;
    }
  }
  display();
}

function addFood() {
  var new_food = new Food(document.getElementById("new_food").value);
  new_food.setPurchaseDate(document.getElementById("pur_date").value.split("-"));
  new_food.setExpiryDate(document.getElementById("exp_date").value.split("-"));
  personalFridge.push(new_food);
  db.ref().child("personal-fridge").child(new_food.foodname).child("expiration-date").set(new_food.printExpiryDate());
  db.red().child("personal-fridge").child(new_food.foodname).child("purchase-date").set(new_food.printPurchaseDate());

  display();
}


function display() {
  var fridge = []
  var headerStr = "<div class='container' style='margin-bottom:20px;'><div class='row' id='your-fridge-title'>"
    if (document.getElementById("fridge_name")) {
      fridge = personalFridge
      headerStr += "<h1 class='col-md-8' style='padding-top:5px;'>Your Fridge</h1><button id='add-food-button' type='button' class='btn btn-primary col-md-4' data-toggle='modal' data-target='#exampleModal'>Add Food</button>"
  } else {
      fridge = localFridge
      headerStr += "<h1 class='col-md-8' style='font-size:32px; padding-top:10px;'>Community Fridge</h1>"
  }
  headerStr += "</div></div><div class='accordion' id='accordionExample'>"
  column.innerHTML = headerStr

  var dbjson;
  personal_fridge_ref = db.ref().child('personal-fridge');
  personal_fridge_ref.on('value', snap =>
      {
        console.log(snap.val());
      });

  for (i = 0; i < fridge.length; i++){
    var bodyStr = `<div class='card'>
    <div class='card-header justify-content-between' id='heading`+ i +`'>
    <h2 class='mb-0'>
    <button class='btn fridge-button' type='button' data-toggle='collapse' data-target='#collapse`+ i +`' aria-expanded='true' aria-controls='collapse`+ i +`'>
    <span>
    <h3><img src="`
    f = fridge[i]
    imgurl = "img/green_circle.png"
    console.log(f.foodname)
    console.log(f.daysTilExpiry())
    if (f.daysTilExpiry() <= 0) {
        imgurl = "img/red_circle.png"
    } else if (f.daysTilExpiry() <= 1) {
        imgurl = "img/orange_circle.png"
    } else if (f.daysTilExpiry() <= 2) {
        imgurl = "img/yellow_circle.png"
    }
    bodyStr += imgurl
    bodyStr += `" height="40" style="margin-right:10px;">` + f.foodname + `</h3>
    </span>
    </button>
    <button class='close-button' onClick='removeFood(this.parentNode.childNodes[1].innerText)'><svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"></path>
    </svg></button>
    </h2>
    </div>

    <div id='collapse`+ i +`' class='collapse' aria-labelledby='heading`+ i +`' data-parent='#accordionExample'>
      <div class='container'>
        <div class='row'>
            <div class="col-sm-8"><b style="margin-top: 20px">Purchase Date</b>:<br>`+ f.printPurchaseDate() +`<br><b>Expiry Date</b>:<br>`+ f.printExpiryDate() +`</div>
            <div class = "col-sm-4">
              <button style="margin-top:20px;" class="btn btn-success" onClick='addToLocalFridge(this.parentNode.parentNode.parentNode.childNodes[1].innerText)'>Send to Local Fridge</button>
          </div>
        </div>
      </div>
    </div>`
    column.innerHTML += bodyStr;
  }
  column.innerHTML += '</div>';

  // local_column.innerHTML = "<h1 id='your-fridge-title'>Local Fridge</h1><div class='accordion' id='accordionExample'>";
  // for (j = 0; j < local_fridge.length; j++){
  //   var f = new Food(local_fridge[i]);
  //   local_column.innerHTML +=
  //   `<div class='card'>
  //   <div class='card-header justify-content-between' id='heading`+ i +`'>
  //   <h2 class='mb-0'>
  //   <button class='btn personalFridge-button' type='button' data-toggle='collapse' data-target='#collapse`+ i +`' aria-expanded='true' aria-controls='collapse`+ i +`'>
  //   <h3>` + f.foodname + `</h3>
  //   </button>
  //   <button class='close-button' onClick='removeFood(this.parentNode.childNodes[1].innerText)'><svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  //   <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"></path>
  //   </svg></button>
  //   </h2>
  //   </div>
  //
  //   <div id='collapse`+ i +`' class='collapse' aria-labelledby='heading`+ i +`' data-parent='#accordionExample'>
  //   <div class='card-body'>
  //   Date of Purchase: `+ f.printPurchaseDate() +`<br> Estimated Expire Date: `+ f.printExpiryDate() +` <br> <button onClick='addToLocalFridge(this.parentNode.parentNode.parentNode.childNodes[1].innerText)'>add to local fridge</button>
  //   </div>
  //   </div>
  //   </div>`
  // }
  // local_column.innerHTML += '</div>';
}



display();
