// Load the data
d3.csv("ufo_sightings_NMV.csv").then(function(data) {
    // Parse dates
    const parseDate = d3.timeParse("%m/%d/%Y %H:%M");

    // Extract min and max dates from the dataset
    const minDate = d3.min(data, d => parseDate(d.date_time));
    const maxDate = d3.max(data, d => parseDate(d.date_time));

    // Pre-process data - aggregate sightings by month
    const sightingsByMonth = d3.rollup(data, 
        v => v.length, 
        d => d3.timeMonth(parseDate(d.date_time))
    );

    // Convert map to array for easier manipulation
    const timelineData = Array.from(sightingsByMonth, ([key, value]) => ({ date: key, sightings: value }));

    // Set up SVG and margins
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 1200 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#timeline")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define scales
    const xScale = d3.scaleTime()
        .domain([minDate, maxDate])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(timelineData, d => d.sightings)])
        .nice()
        .range([height, 0]);

    // Define axes
    const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear.every(10));
    const yAxis = d3.axisLeft(yScale);

    // Draw axes
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("x", width / 2)
        .attr("y", 40)
        .attr("fill", "black")
        .style("text-anchor", "middle")
        .text("Year");

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("fill", "black")
        .style("text-anchor", "middle")
        .text("Number of UFO Sightings");

    // Draw bars
    svg.selectAll(".bar")
        .data(timelineData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.date))
        .attr("y", d => yScale(d.sightings))
        .attr("width", width / timelineData.length)
        .attr("height", d => height - yScale(d.sightings))
        .style("fill", "blue") 
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    // Tooltip functions
    function handleMouseOver(event, d) {
        const [x, y] = d3.pointer(event);
        d3.select("#tooltip-timeline")
            .style("left", x + "px")
            .style("top", y + "px")
            .style("display", "block")
            .html(`<strong>Date:</strong> ${d.date.toLocaleDateString()}<br><strong>Number of Sightings:</strong> ${d.sightings}`);
    }

    function handleMouseOut() {
        d3.select("#tooltip-timeline").style("display", "none");
    }
}).catch(function(error) {
    console.log("Error loading the data: " + error);
});
