var nums = [1, 2, 3, 4, 5, 6, 7];
var items = ["Almond Milk", "Quinoa", "Kale", "Chia Seeds", "Black Beans", "Hummus", "Avocado"];
var prices = [45, 32.68, 28.12, 7.5, 3, 5.99, 12];
var quantities = [0, 0, 0, 0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

document.getElementById("checkout").addEventListener("click", displayTotal);

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}


function remove_selection(x) { 
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
  
    }
    

    display_all();
}


function displayTotal() {

    document.getElementById("total").innerHTML = "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}


function display_all() {



    var myTable = "<table><th style='width: 100px; color: r#566573; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: #566573; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}