// Load data
d3.csv("data/ufo_sightings_NMV.csv").then(function(data) {
    // Parse encounter_length as numbers
    data.forEach(function(d) {
        d.encounter_length = +d.encounter_length;
    });

    // Define encounter length ranges (in seconds)
    window.lengthRanges = [
        { range: [0, 60], label: "0-60s" },
        { range: [61, 300], label: "1-5m" },
        { range: [301, 600], label: "5-10m" },
        { range: [601, 1800], label: "10-30m" },
        { range: [1801, 3600], label: "30m-1h" },
        { range: [3601, 7200], label: "1-2h" },
        { range: [7201, 10800], label: "2-3h" },
        { range: [10801, 21600], label: "3-6h" },
        { range: [21601, 43200], label: "6-12h" },
        { range: [43201, 86400], label: "12-24h" },
        { range: [86401, Infinity], label: "24h+" }
    ];

    // Count sightings within each range
    const counts = lengthRanges.map(range => ({
        label: range.label,
        count: data.filter(d => d.encounter_length >= range.range[0] && d.encounter_length <= range.range[1]).length
    }));

    // Set up SVG dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const width = 1200 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3.select("#encounter-length-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale (length ranges)
    const x = d3.scaleBand()
        .domain(counts.map(d => d.label))
        .range([0, width])
        .padding(0.1);

    // Y scale (counts)
    const y = d3.scaleLinear()
        .domain([0, d3.max(counts, d => d.count)])
        .nice()
        .range([height, 0]);

    // Draw bars with red color
    svg.selectAll(".bar")
        .data(counts)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.label))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.count))
        .attr("height", d => height - y(d.count))
        .attr("fill", "magenta"); // Change the fill color here

    // Add X axis
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    // Add X axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 10)
        .style("text-anchor", "middle")
        .text("Encounter Length Ranges");

    // Add Y axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Frequency");

    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Frequency of UFO Sightings by Encounter Length");
}).catch(function(error) {
    console.log("Error loading the data: " + error);
});
