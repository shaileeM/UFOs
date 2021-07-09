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

//function to filter data
function handleClick()
{
	let date = d3.select("#datetime").property("value");  //d3 looks for first datetime id in the html 
	let filteredData = tableData;
	
	if(date)  //if date is entered use that date to filter data or else use default
	{
		filteredData=filteredData.filter(row => row.datetime === date); //keep rows whose date equals selected date
	};
	
	buildTable(filteredData); //rebuild the table with filtered data
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData); //load table with original data first of all 