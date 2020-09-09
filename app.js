document.addEventListener("DOMContentLoaded", function(event) {
  function listOfUsers() {
      const url = 'https://jsonplaceholder.typicode.com/users';

      fetch(url).then(req => {
        console.log('request: ', req);
        req.json();
      }).then(data => console.log(data));

  }

  listOfUsers();




});//End of DOMContentLoaded