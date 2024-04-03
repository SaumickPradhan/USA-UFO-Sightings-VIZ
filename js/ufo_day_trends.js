// Load data
d3.csv("data/ufo_sightings_NMV.csv").then(function(data) {
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
  const x = d3.scaleLinear()
      .domain([0, 23]) // 24 hours in a day
      .range([0, width]);

  // Y scale (count)
  const y = d3.scaleLinear()
      .domain([0, d3.max(hourlyCounts, d => d.count)])
      .nice()
      .range([height, 0]);

  // Line generator
  const line = d3.line()
      .x(d => x(d.hour))
      .y(d => y(d.count));

  // Draw line
  svg.append("path")
      .datum(hourlyCounts)
      .attr("class", "line")
      .attr("d", line);

  // Add X axis
  svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(24).tickFormat(d => d + ":00"));

  // Add Y axis
  svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

  // Tooltip
  const tooltip = d3.select("#tooltip");

  // Add event listeners for tooltips
  svg.selectAll("circle")
      .data(hourlyCounts)
      .enter().append("circle")
      .attr("cx", d => x(d.hour))
      .attr("cy", d => y(d.count))
      .attr("r", 5)
      .attr("fill", "steelblue")
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
