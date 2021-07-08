//Import data.js into this file
const tableData = data;

//Reference html table using d3
var tbody=d3.select("tbody");  //js looks for tbody tags in html

//function to create table from the data in data.js
function buildTable(data)
{
    tbody.html(""); //create a blank canvas

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");  //js finds tbody tag in html and add table row
    
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); //variable to append data to a table
            cell.text(val); //adding values
            }
        );
    });
    
}


