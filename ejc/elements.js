function makeUL(array) {
  var list = document.createElement("ul");

  for (var i = 0; i < array.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));
    list.appendChild(item);
  }
  return list;
}
