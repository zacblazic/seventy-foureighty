"use strict";

(function() {

  // Data that will be tablularized
  var data = [{
    name: "Zac",
    age: 23,
    color: "#ccc"
  }, {
    name: "Carin",
    age: 26,
    color: "#ed5177"
  }];

  // Build a table using DOM interactions
  var tableContainer = document.getElementById("table-container");
  var table = document.createElement("table");
  tableContainer.appendChild(table);

  var header = document.createElement("thead");
  table.appendChild(header);

  var nameHeader = document.createElement("th");
  nameHeader.innerHTML = "Name";
  header.appendChild(nameHeader);

  var ageHeader = document.createElement("th");
  ageHeader.innerHTML = "Age"
  header.appendChild(ageHeader);

  var body = document.createElement("tbody");
  table.appendChild(body);

  data.forEach(function(row, index) {
    var tableRow = document.createElement("tr");

    Object.keys(row).forEach(function(key) {
      if (key == "color") {
        tableRow.style.backgroundColor = row[key];
      } else {
        var tableData = document.createElement("td");
        tableData.innerHTML = row[key];
        tableRow.appendChild(tableData);
      }
    });

    body.appendChild(tableRow);
  });

  // Change location of elements
  var container1 = document.getElementById("container-1");
  var container2 = document.getElementById("container-2");

  if (container1.hasChildNodes()) {
    var firstNode = container1.getElementsByTagName("span")[0];
    var secondNode = container2.getElementsByTagName("span")[0];

    container1.removeChild(firstNode);
    container2.removeChild(secondNode);

    container1.appendChild(secondNode);
    container2.appendChild(firstNode);
  }



})();
