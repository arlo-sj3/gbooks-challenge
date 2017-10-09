// Renders an error message
function showError(msg) {
  const html = `<li><p class="error">${msg}</p></li>`;
  document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
function searchForBooks(term) {
  console.log(document.getElementById('results'))

  let btn = document.getElementById('search-btn');
btn.onclick = function(){
  // alert(document.getElementById('search-bar').value)
  var searcher = document.getElementById('search-bar').value;
  console.log(searcher)
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + searcher)
.then(function (response){
    return response.json();

})
.then(function (json){
  for (var i = 0; i < json.items.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("id",json.items[i].id);
    li.setAttribute("title",json.items[i].volumeInfo.title);
    document.getElementById('results').appendChild(li);
    if(json.items[i].volumeInfo.imageLinks){
    document.getElementById(json.items[i].id).style.backgroundImage = `url("${json.items[i].volumeInfo.imageLinks.thumbnail}")`
  } else {
    document.getElementById(json.items[i].id).append( `${json.items[i].volumeInfo.title}`)
  }

    console.log(json.items[i].volumeInfo)
  }
//     console.log(json);
//     var li = document.createElement("li");
//     li.setAttribute("id","first")
//     document.getElementById('results').appendChild(li)
//     document.getElementById('first').append( `${json.items[0].volumeInfo.authors[0]}`)
// console.log(document.getElementById('results'))
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
render();
