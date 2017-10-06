// Renders an error message
function showError(msg) {
  const html = `<li><p class="error">${msg}</p></li>`;
  document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
function searchForBooks(term) {

  let btn = document.getElementById('search-btn');
btn.onclick = function(){
  // alert(document.getElementById('search-bar').value)
  var searcher = document.getElementById('search-bar').value;
  console.log(searcher)
  fetch('https://www.googleapis.com/books/v1/volumes?q='+searcher)
.then(function (response){
    return response.json();
})
.then(function (json){
    console.log(json);
});
}

  // let searcher = document.getElementById('search-bar').value;
  // console.log(searcher)
  // TODO
//   fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
// .then(function (response){
//     return response.json();
// })
// .then(function (json){
//     console.log(json);
// });
}

// Generate HTML and sets #results's contents to it
function render() {
  // TODO
}

searchForBooks();
