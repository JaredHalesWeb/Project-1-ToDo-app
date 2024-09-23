var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('containerContainer');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newActivity(creation) {
  const prev = creation.previousElementSibling;
  const inputValue = prev.value
  if (inputValue === '') {
    alert("You must write something!");
  } else if (inputValue === ' ') {
    alert("You must write something!");
  }

  const next = creation.parentElement.nextElementSibling
  const li = document.createElement("li");
  li.textContent = inputValue;
  next.appendChild(li);
  prev.value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
function newList() {
  const listContainer = document.getElementById("containerContainer")
  var list = document.createElement("div");
  list.classList.add('container');
 var listValue = document.getElementById("listInput").value;
 

  
  list.innerHTML = `<div class="header">
        <h2 class="marge">${listValue}</h2>
        <input type="text"  placeholder="Title...">
        <span onclick="newActivity(this)" class="addBtn">Add</span>
      <button class="deleteBtn" onclick="deleteList(this)">X</button>
      </div>
      <ul>

      </ul>`;
    listContainer.appendChild(list);


    const deleteBtn = list.querySelector('.deleteBtn')
    deleteBtn.onclick = function() {
      console.log("click")
      deleteList(this);
    }
}

function deleteList(creation) {
  const confirmation = confirm("Are your sure you want to delete this?");
  if (confirmation) {
    const list = creation.closest('.container');
    list.remove();
  }
}

