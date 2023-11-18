---
layout: page
title: "References"
permalink: /references/
---

<table id="referencesTable">
  <thead>
    <tr>
      <th onclick="sortTable(0)">Topic</th>
      <th onclick="sortTable(1)">Resource Name</th>
      <th onclick="sortTable(2)">URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data Science</td>
      <td>Pandas</td>
      <td><a href="https://pandas.pydata.org/">pandas.pydata.org</a></td>
    </tr>
    <tr>
      <td>Machine Learning</td>
      <td>Scikit-Learn</td>
      <td><a href="https://scikit-learn.org/">scikit-learn.org</a></td>
    </tr>
    <tr>
      <td>Visualization</td>
      <td>Plotly</td>
      <td><a href="https://plotly.com/">plotly.com</a></td>
    </tr>
    <!-- Add more rows as needed -->
  </tbody>
</table>


<script>
function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("referencesTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[columnIndex];
      y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
</script>


<style>
#referencesTable {
  width: 100%;
  border-collapse: collapse;
}

#referencesTable th, #referencesTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#referencesTable th {
  cursor: pointer;
  background-color: #f2f2f2;
}
</style>
