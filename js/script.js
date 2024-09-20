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
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newActivity() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else if (inputValue === ' ') {
    alert("You must write something!");
  }
   else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function newList() {
  var header = document.createElement("container");
  newDiv.classList.add('myClass', 'anotherClass');
  var header = document.createElement("div");
  newDiv.classList.add('myClass', 'anotherClass');
  var hText = document.createElement("h2");
  newDiv.classList.add('myClass', 'anotherClass');
  var titleInput = document.createElement("input");
  newDiv.classList.add('myClass', 'anotherClass');
  var fakeBtn = document.createElement("span");
  newDiv.classList.add('myClass', 'anotherClass');
  var listInput = document.getElementById("listInput").value;
  newDiv.classList.add('myClass', 'anotherClass');
  var l = document.createTextNode(listValue);

  header.appendChild(l);
  if (listValue === '') {
    alert("You must write something!");
  } else if (listValue === ' ') {
    alert("You must write something!");
  }
   else {
    document.getElementById("container").appendChild(header);
    document.getElementById("container").appendChild(hText);
    document.getElementById("container").appendChild(titleInput);
    document.getElementById("container").appendChild(fakeBtn);
    document.getElementById("container").appendChild(listInput);
  }
  document.getElementById("listValue").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
