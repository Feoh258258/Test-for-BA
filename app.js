document.addEventListener("DOMContentLoaded", function(event) {
  let tableParams = ['name', 'username', 'email', 'website'];
  function listOfUsers() {
      const url = 'https://jsonplaceholder.typicode.com/users';
		  fetch(url).then(req => {
			console.log('request: ', req);
			return req.json();
		  }).then(data =>  drawTable(data));
    }//End of listOfUsers	

	function drawTable(users){
		let table = document.createElement('table');
		  for(let i = 0; i<users.length; i++){
      let tr = document.createElement('tr');
      tr.dataset.street = 
      console.log(tr.dataset.street);
		    for(name in users[i]){
          if(tableParams.indexOf(name)>=0){
            let td = document.createElement('td');
            td.innerText = users[i][name];
            tr.appendChild(td);
          }
        }
		          table.appendChild(tr);
      }
			
      document.body.appendChild(table);
}//End of drawTable


listOfUsers();
});//End of DOMContentLoaded