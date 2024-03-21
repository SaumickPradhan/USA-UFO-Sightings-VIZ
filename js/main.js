d3.csv('data/ufo_sightings_NMV.csv')
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
