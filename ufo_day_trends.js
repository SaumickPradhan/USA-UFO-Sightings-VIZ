// Load data
d3.csv("ufo_sightings_NMV.csv").then(function(data) {
    // Parse date_time field as Date object
    data.forEach(function(d) {
        d.date_time = new Date(d.date_time);
    });
  
    // Call function to create hourly trends visualization
    createHourlyTrends(data);
}).catch(function(error) {
    console.log("Error loading the data: " + error);
});

// Function to create hourly trends visualization
function createHourlyTrends(data) {
    // Group sightings by hour of the day
    const sightingsByHour = d3.group(data, d => d.date_time.getHours());

    // Calculate counts for each hour
    const hourlyCounts = Array.from(sightingsByHour, ([hour, sightings]) => ({ hour, count: sightings.length }));

    // Set up SVG dimensions
    const margin = { top: 50, right: 30, bottom: 60, left: 60 }; // Adjusted margins
    const width = 1200 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom; // Adjusted height

    // Create SVG element
    const svg = d3.select("#hourly-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale (hours)
    const x = d3.scaleBand()
        .domain(hourlyCounts.map(d => d.hour))
        .range([0, width])
        .padding(0.1);

    // Y scale (count)
    const y = d3.scaleLinear()
        .domain([0, d3.max(hourlyCounts, d => d.count)])
        .nice()
        .range([height, 0]);

    // Draw bars
    svg.selectAll("rect")
        .data(hourlyCounts)
        .enter().append("rect")
        .attr("x", d => x(d.hour))
        .attr("y", d => y(d.count))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.count))
        .attr("fill", "steelblue");

    // Add X axis
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d => d + ":00"));

    // Add Y axis
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    // Add labels for axes
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 20)
        .attr("text-anchor", "middle")
        .text("Hour of the Day");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text("Sightings");

    // Tooltip
    const tooltip = d3.select("#tooltip");

    // Add event listeners for tooltips
    svg.selectAll("rect")
        .on("mouseover", handleMouseOver)
        .on("mousemove", handleMouseMove)
        .on("mouseout", handleMouseOut);

    // Tooltip functions
    function handleMouseOver(event, d) {
        tooltip.style("display", "block");
    }

    function handleMouseMove(event, d) {
        const [xPos, yPos] = d3.pointer(event);
        tooltip
            .style("left", xPos + 10 + "px")
            .style("top", yPos + 10 + "px")
            .html(`Hour: ${d.hour}<br>Count: ${d.count}`);
    }

    function handleMouseOut(event, d) {
        tooltip.style("display", "none");
    }
}
