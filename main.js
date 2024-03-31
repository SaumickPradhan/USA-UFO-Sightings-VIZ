d3.csv('ufo_sightings_NMV.csv')
.then(data => {
    console.log(data[0]);
    console.log(data.length);
    data.forEach(d => {
      console.log(d);
      d.latitude = +d.latitude; //make sure these are not strings
      d.longitude = +d.longitude; //make sure these are not strings
    });

    // Initialize chart and then show it
    leafletMap = new LeafletMap({ parentElement: '#my-map'}, data);

    attributes = ["Geo","Topo","Street","Airport"];

    // Resource: W3 schools innerHTML
    const GlobalAttribute1 = document.getElementById("select-attribute-1");
    const GlobalAttribute2 = document.getElementById("select-attribute-2");
  
    let optionsHTML = "";
    Object.entries(attributes).forEach((attribute) => {
        // Generate HTML for option menu
        optionsHTML += `<option>${attribute[1]}</option>`;
    });
  
    // Set innerHTML of select menu
    GlobalAttribute1.innerHTML = optionsHTML;
    // GlobalAttribute2.innerHTML = optionsHTML;
    //GlobalAttribute2.selectedIndex = 1;


    GlobalAttribute1.addEventListener('change', function() {
        const selectedAttribute = this.value;
        // Update dot colors based on the selected attribute
        leafletMap.updateVis(selectedAttribute);
    });


  })
  .catch(error => console.error(error));

  // Load the CSV file
d3.csv("most_common_words.csv").then(function(data) {
  // Log the loaded data
  console.log(data);

  // // You can manipulate the data here, for example, display it in a table
  // var table = d3.select("body").append("table");
  // var thead = table.append("thead");
  // var tbody = table.append("tbody");

  // // Append the header row
  // thead.append("tr")
  //     .selectAll("th")
  //     .data(["Word", "Frequency"])
  //     .enter()
  //     .append("th")
  //     .text(function(column) { return column; });

  // // Append the data rows
  // var rows = tbody.selectAll("tr")
  //     .data(data)
  //     .enter()
  //     .append("tr");

  // // Append cells in each row
  // var cells = rows.selectAll("td")
  //     .data(function(row) {
  //         return ["Word", "Frequency"].map(function(column) {
  //             return {column: column, value: row[column]};
  //         });
  //     })
  //     .enter()
  //     .append("td")
  //     .text(function(d) { return d.value; });
  var wordCloudData = data.map(function(d) {
    return {
        "x": d.Word,
        "value": parseInt(d.Frequency), // Assuming "Frequency" is the column containing word frequencies
        // You may add a category if needed
        //"category": "YourCategoryHere"
    };
});

// Create a tag (word) cloud chart
var chart = anychart.tagCloud(wordCloudData);

// Set a chart title
chart.title('Most Common Words');

// Set an array of angles at which the words will be laid out
chart.angles(0, -45, 90);

// Enable a color range
chart.colorRange(true);

// Set the color range length
chart.colorRange().length('80%');

// Display the word cloud chart
chart.container("container");
chart.draw();



});