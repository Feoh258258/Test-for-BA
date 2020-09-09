document.addEventListener("DOMContentLoaded", function(event) {
  //alert("check console.log");
  function listOfUsers() {
      const url = 'https://jsonplaceholder.typicode.com/users';


      fetch(url).then(req => {
        console.log('request: ', req);
        return req.json();
      }).then(data => {
    for(let i=0; i<data.length; i++){
      console.log(data[i]);
    }
  });

}//listOfUsers



  //listOfUsers();

});//End of DOMContentLoaded