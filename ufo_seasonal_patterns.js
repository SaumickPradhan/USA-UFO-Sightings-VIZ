// Load the data
d3.csv("ufo_sightings_NMV.csv").then(function(data) {
    // Parse dates
    const parseDate = d3.timeParse("%m/%d/%Y %H:%M");

    // Pre-process data - aggregate sightings by month
    const sightingsByMonth = d3.rollup(data, 
        v => v.length, 
        d => d3.timeMonth(parseDate(d.date_time)).getMonth()
    );

    // Convert map to array for easier manipulation
    const timelineData = Array.from(sightingsByMonth, ([key, value]) => ({ month: key, sightings: value }));

    // Sort timelineData by month
    timelineData.sort((a, b) => a.month - b.month);

    // Set up SVG and margins for bar graph
    const marginBarGraph = { top: 20, right: 20, bottom: 50, left: 50 };
    const widthBarGraph = 800 - marginBarGraph.left - marginBarGraph.right;
    const heightBarGraph = 400 - marginBarGraph.top - marginBarGraph.bottom;

    const svgBarGraph = d3.select("#scatter-plot")
        .attr("width", widthBarGraph + marginBarGraph.left + marginBarGraph.right)
        .attr("height", heightBarGraph + marginBarGraph.top + marginBarGraph.bottom)
        .append("g")
        .attr("transform", "translate(" + marginBarGraph.left + "," + marginBarGraph.top + ")");

    // Define scales for bar graph
    const xScaleBarGraph = d3.scaleBand()
        .domain(timelineData.map(d => d.month))
        .range([0, widthBarGraph])
        .padding(0.1);

    const yScaleBarGraph = d3.scaleLinear()
        .domain([0, d3.max(timelineData, d => d.sightings)])
        .nice()
        .range([heightBarGraph, 0]);

    // Draw bars for bar graph
    svgBarGraph.selectAll("rect")
        .data(timelineData)
        .enter().append("rect")
        .attr("x", d => xScaleBarGraph(d.month))
        .attr("y", d => yScaleBarGraph(d.sightings))
        .attr("width", xScaleBarGraph.bandwidth())
        .attr("height", d => heightBarGraph - yScaleBarGraph(d.sightings))
        .attr("fill", "steelblue");

    // Draw x-axis for bar graph
    svgBarGraph.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + heightBarGraph + ")")
        .call(d3.axisBottom(xScaleBarGraph));

    // Draw y-axis for bar graph
    svgBarGraph.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScaleBarGraph));

    // Add labels for bar graph
    svgBarGraph.append("text")
        .attr("x", widthBarGraph / 2)
        .attr("y", heightBarGraph + marginBarGraph.top + 20)
        .attr("text-anchor", "middle")
        .text("Month");

    svgBarGraph.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -heightBarGraph / 2)
        .attr("y", -marginBarGraph.left)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text("Sightings");

}).catch(function(error) {
    console.log("Error loading the data: " + error);
});
