function changeMonth() {
  var count = 1;
  switch (count) {
    case 1:
      document.getElementById("showMonth").innerHTML = "<h2>January</h2>";
      break;
    case 2: 
      document.getElementById("showMonth").innerHTML = "<h2>Febuary</h2>";
      break;
    case 3: 
      document.getElementById("showMonth").innerHTML = "<h2>March</h2>";
      break;
    case 4: 
      document.getElementById("showMonth").innerHTML = "<h2>April</h2>";
      break;
    case 5: 
      document.getElementById("showMonth").innerHTML = "<h2>May</h2>";
      break;
    case 6: 
      document.getElementById("showMonth").innerHTML = "<h2>June</h2>";
      break;
    case 7: 
      document.getElementById("showMonth").innerHTML = "<h2>July</h2>";
      break;
    case 8: 
      document.getElementById("showMonth").innerHTML = "<h2>August</h2>";
      break;
    case 9: 
      document.getElementById("showMonth").innerHTML = "<h2>September</h2>";
      break;
    case 10: 
      document.getElementById("showMonth").innerHTML = "<h2>October</h2>";
      break;
    case 11: 
      document.getElementById("showMonth").innerHTML = "<h2>November</h2>";
      break;
    case 12: 
      document.getElementById("showMonth").innerHTML = "<h2>December</h2>";
      break;
      count+=1;
  }
}