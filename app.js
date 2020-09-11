document.addEventListener("DOMContentLoaded", function(event) {
  let tableParams = ['name', 'username', 'email', 'website'];
  

  function listOfUsers() {
      const url = 'https://jsonplaceholder.typicode.com/users';
		  fetch(url).then(req => {
			return req.json();
		  }).then(data =>  drawTable(data));
    }//End of listOfUsers	

	function drawTable(users){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let theadTr = document.createElement('tr');
    table.classList.add('table','col-6', 'col-sm-6', 'col-lg-8');
    thead.appendChild(theadTr);
    table.appendChild(thead);
    
    for(let j = 0; j<4; j++){
      let theadTd = document.createElement('td');
      theadTd.innerText = "sort";
      theadTd.classList.add('tdSort');
      theadTd.onclick = ()=>{
        sortTable()
      }
      theadTr.appendChild(theadTd);
    }
    
		  for(let i = 0; i<users.length; i++){
      let tr = document.createElement('tr');
      tr.classList.add('tr-style');
      tr.dataset.streeet = users[i].address.street;
      tr.dataset.city = users[i].address.city;
      tr.dataset.zipcode = users[i].address.zipcode;
      tr.onclick = ()=>{
        openModal(users[i].address.street, users[i].address.city, users[i].address.zipcode);
        }
		    for(name in users[i]){
          if(tableParams.indexOf(name)>=0){
            let td = document.createElement('td');
            td.innerText = users[i][name];
            td.classList.add('tdElement');
            tr.appendChild(td);
          }
        }
              
        table.appendChild(tr);
      }
			
      document.body.appendChild(table);

      
}//End of drawTable

function openModal(street, city, zip) {
  let modal = document.createElement('div');
  let closeModal = document.createElement('div');
  let overlayModal = document.createElement('div');
  let pZip = document.createElement('p');
  let pStreet = document.createElement('p');
  let pCity = document.createElement('p');
  modal.classList.add('modal-st');
  overlayModal.classList.add('overlayModal-st');
  closeModal.classList.add('close-modal-st');
  pZip.innerText = "ZIP Code: " + zip;
  pStreet.innerText = "Street: " + street;
  pCity.innerText = "City: " + city;
  closeModal.innerText = "закрыть";
  closeModal.onclick = ()=>{
    modal.style.display = "none";
    overlayModal.style.display = "none";
    document.body.style.background = "white";
    }

  modal.appendChild(closeModal);
  modal.appendChild(pZip);
  modal.appendChild(pStreet);
  modal.appendChild(pCity);
  document.body.appendChild(overlayModal);
  document.body.style.background = "grey";
  document.body.appendChild(modal);
}

function sortTable() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementsByClassName("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = document.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}










listOfUsers();


});//End of DOMContentLoaded