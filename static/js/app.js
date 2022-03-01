// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to fill a table with data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop throug each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Create a new button click function
function handleClick() {
    // Grab the datetime value form the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was enetered and filter the 
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the 
        // rows where the `datetime` value matches the filter valye
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // @NOTE: Of no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};