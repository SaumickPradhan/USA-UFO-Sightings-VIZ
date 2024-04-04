// Load the data
d3.csv("data/ufo_sightings_NMV.csv").then(function(data) {
    // Parse dates
    const parseDate = d3.timeParse("%m/%d/%Y %H:%M");

    // Pre-process data - aggregate sightings by month
    const sightingsByMonth = d3.rollup(data, 
        v => v.length, 
        d => d3.timeMonth(parseDate(d.date_time)).getMonth()
    );
    console.log("Sightings by month:", sightingsByMonth);

    // Convert map to array for easier manipulation
    const timelineData = Array.from(sightingsByMonth, ([key, value]) => ({ month: key, sightings: value }));

    // Sort timelineData by month
    timelineData.sort((a, b) => a.month - b.month);

    // Set up SVG and margins for scatter plot
    const marginScatterPlot = { top: 20, right: 20, bottom: 50, left: 50 };
    const widthScatterPlot = 800 - marginScatterPlot.left - marginScatterPlot.right;
    const heightScatterPlot = 400 - marginScatterPlot.top - marginScatterPlot.bottom;

    const svgScatterPlot = d3.select("#scatter-plot")
        .attr("width", widthScatterPlot + marginScatterPlot.left + marginScatterPlot.right)
        .attr("height", heightScatterPlot + marginScatterPlot.top + marginScatterPlot.bottom)
        .append("g")
        .attr("transform", "translate(" + marginScatterPlot.left + "," + marginScatterPlot.top + ")");

    // Define scales for scatter plot
    const xScaleScatterPlot = d3.scaleBand()
        .domain(timelineData.map(d => d.month))
        .range([0, widthScatterPlot])
        .padding(0.1);

    const yScaleScatterPlot = d3.scaleLinear()
        .domain([0, d3.max(timelineData, d => d.sightings)])
        .nice()
        .range([heightScatterPlot, 0]);

    // Draw circles for scatter plot
    svgScatterPlot.selectAll("circle")
        .data(timelineData)
        .enter().append("circle")
        .attr("cx", d => xScaleScatterPlot(d.month) + xScaleScatterPlot.bandwidth() / 2)
        .attr("cy", d => yScaleScatterPlot(d.sightings))
        .attr("r", 5)
        .attr("fill", "steelblue")
        .attr("opacity", 0.7);

    // Draw x-axis for scatter plot
    svgScatterPlot.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + heightScatterPlot + ")")
        .call(d3.axisBottom(xScaleScatterPlot));

    // Draw y-axis for scatter plot
    svgScatterPlot.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScaleScatterPlot));

    // Add labels for scatter plot
    svgScatterPlot.append("text")
        .attr("x", widthScatterPlot / 2)
        .attr("y", heightScatterPlot + marginScatterPlot.top + 20)
        .attr("text-anchor", "middle")
        .text("Month");

    svgScatterPlot.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -heightScatterPlot / 2)
        .attr("y", -marginScatterPlot.left)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text("Sightings");

}).catch(function(error) {
    console.log("Error loading the data: " + error);
});
