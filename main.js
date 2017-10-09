// Renders an error message
function showError(msg) {
  const html = `<li><p class="error">${msg}</p></li>`;
  document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
function searchForBooks(term) {
  let btn = document.getElementById('search-btn');
  btn.onclick = function() {
    var searcher = document.getElementById('search-bar').value;
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + searcher)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        for (var i = 0; i < json.items.length; i++) {
          var li = document.createElement("li");
          li.setAttribute("class", "book")
          li.setAttribute("id", json.items[i].id);
          li.setAttribute("title", json.items[i].volumeInfo.title);
          document.getElementById('results').appendChild(li);
          if (json.items[i].volumeInfo.imageLinks) {
            document.getElementById(json.items[i].id).style.backgroundImage = `url("${json.items[i].volumeInfo.imageLinks.thumbnail}")`
          } else {
            document.getElementById(json.items[i].id).style.backgroundImage = `url("https://bookstore.uwo.ca/sites/all/themes/wrs/images/no-photo.png")`
          }

          var modal = document.createElement("div");
          modal.setAttribute("id", "modal-" + json.items[i].id);
          modal.setAttribute("class", "modal");
          modal.setAttribute("style", "display: none");
          document.getElementById(json.items[i].id).appendChild(modal);
          var modalContent = document.createElement("span");
          modalContent.setAttribute("id", "modalContent-" + json.items[i].id);
          modalContent.setAttribute("class", "modalContent")
          document.getElementById("modal-" + json.items[i].id).appendChild(modalContent)
          document.getElementById("modalContent-" + json.items[i].id).innerHTML = (`${json.items[i].volumeInfo.title}` + "... Written By: " + `${json.items[i].volumeInfo.authors}` + "." + '<a href = "' + `${json.items[i].volumeInfo.previewLink}` + '"> CLICK FOR MORE INFO </a>');
        }
        var books = document.getElementsByClassName("book");
        for (var i = 0; i < books.length; i++) {
          books[i].addEventListener("click", function(event) {
            var currentModal = event.target.querySelector(".modal");
            currentModal.style.display = "block";
            currentModal.addEventListener("click", function(event) {
              currentModal.style.display = "none";
            })
          })
        }
      });
  }
}

searchForBooks();
