# UFO Sightings in United States
## The Truth is Out There!


**A Interactive Data Visualization exploring the correlation between the Spatial distribution and Temporal occurrences of UFO sightings across the USA**

https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/704ce1f2-d0b7-4629-8b43-2bb1ddfea772

<h2>Description</h2>

In our project, "UFO Sightings in United States: The Truth is out there" , we embarked on a journey to explore and visualize a comprehensive dataset compiled by the National UFO Reporting Center. This dataset, spanning over a century of reports from around the world, offers a unique window into the collective human experience with the unexplained aerial phenomena. We filtered the comprehensive dataset to provide us with information about UFO sightings in the United States, and used that to analyze the data and displayed it using a Leaflet map, along with 4 charts and a word cloud.

<h2>Video Presentation</h2>

https://youtu.be/_gbEaazZpM8

<h2>Check It Out</h2>

https://usa-ufo-sighting-viz.vercel.app/

<h2>Getting Started</h2>

Navigate to your folder. Eg: for home directory

```
cd ~
```

Clone the repository

```
git clone https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ
```

Run the Application locally with localhost or using the deployment

<h2>Data Source</h2>

This data is pulled from the [National UFO Reporting Center](https://nuforc.org/).

For this project, we have pulled the data together into a single file in ./data/ufo_sighting_NMV.csv and ./data/word_coordinates.csv

For the scope of the project we decided to focus on the USA UFO sightings which had maximum concerntration of sightings. We dropped the other points.

<details>
<summary><b>Following are the attributes used:</b></summary>

 
| Variable                    | Class        | Description                                       |
|-----------------------------|--------------|---------------------------------------------------|
| date_time                   | datetime     | Date time sighting occurred                       |
| city_area                   | character    | City or area of sighting                          |
| state                       | character    | State/region of sighting                          |
| country                     | character    | Country of sighting                               |
| ufo_shape                   | character    | UFO Shape                                         |
| encounter_length            | double       | Encounter length in seconds                       |
| described_encounter_length  | character    | Encounter length as described (e.g., 1 hour, etc) |
| description                 | character    | Description of encounter                          |
| date_documented             | character    | Date documented                                   |
| latitude                    | double       | Latitude                                          |
| longitude                   | double       | Longitude                                         |

</details>






 <details>
  <summary><b>Motivation of the Project</b></summary>

The motivation for this project was to contribute to the knowledge about the existance of Extraterrestrial activity
and contribute to the documentation and analysis of this cultural phenomenon, adding to the body of knowledge available for researchers, enthusiasts, and the curious alike. We also wanted to hone our data analysis skills in front-end frameworks like D3.Js and Leaflet.js along with using python to analyze and clean the dataset. This data also has first-hand encounters from real people via a reputable
website. 

</details>


<details><summary><b>Design Sketches and Specifications</b></summary>

<details><summary><b>Design Specification</b></summary>

* Used a linear page format (changed our original grid format) as we wanted a linear flow of selections instead of multiple views together
* Have a story-like feel to the selcted/ brushed plots and result is tracked on the top
* Intutive tool tips with brushing on all
* More info about design specifications to follow

</details>

**B Goals sketches**

<img width="894" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/61dcdac2-f43e-4d5e-a139-3a1d59fb032e">

**Word Cloud**

<img width="337" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/02bf269b-6351-4d76-b0d2-a4ed9edd8b20">

<img width="587" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/ea016774-bbfc-4b43-b6d5-b41ad44b4250">



**Sentiment Analysis**

<img width="428" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/797459a9-eed2-49ac-b57e-8a90f78110f9">



</details>


<h2>Visualization components</h2>

<details>
  <summary><b>1. Header with Data and Tools used</b> </summary>
  
  <b>Heading with Intro, Data source and Tools used with Links</b>

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/3efde11a-4d05-4f7a-aa00-3f6a416f085b)

</details>


<details>
  <summary><b>2. Reset Button</b> </summary>
  
  <b>Rest button to refresh the attributes and re align the page</b>
  

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/19194f13-6060-4ebb-8083-957541254925)

</details>


<details>
  <summary><b>3. Color Section (N) </b> </summary>
  
  <b>Following are the reasons to select the colors</b>

- Economics: Yellow/ orange color to signify money
  
- Environment: Cool colors to signify the nature

- Behavioral factors: Dark colors
  
- Demographics: Little colors to show bar chart difference

- Health care: Green colors for health care
  
- Health: Red colors 

</details>


<details>
  <summary><b>4. Select Attributes</b> </summary>
  <b> (C Goals) Buttons and drop down to select the set of 'color by' options for points on map and switch background </b>

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/fc20d8e9-fcbc-49e6-a7da-54f35ad7f38a)

<b> Reasons: </b>

* Geo: How the geography (boundaries, rivers etc.) affects sightings
* Topo: How the Topography (ridges and valleys etc.) affect sightings
* Street: Is it more common to sight near cities or rural areas with less street?
* Airport: More sightings near the airport?

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/dbffdf7d-a1f7-4290-bbed-ab4ae1b8f6ad)


</details>


<details>
  <summary><b>5. Map</b> </summary>
  <b> (C Goals) Default zoom and positoning of USA, color encoding for plots, highlights and word cloud, Details on Demand </b>

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/17bca443-00e5-4db4-a101-103bc73aad42)

</details>



<details>
  <summary><b>6. Timeline</b> </summary>
  <b> (C Goals) Timeline by Year and number of sightings </b>

  <b> Reasons: </b>
  * Small binned bars to show height and spikes
  * Sorted by year
  * Using it to brush the map
  * Consulted professor on not having tool tip on timeline as we think it provides less utility. We deprecated the tool tip feature.

![image](https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/17bca443-00e5-4db4-a101-103bc73aad42)

</details>




<details>
  <summary><b>7. New Views</b> </summary>
 <details>
  <summary><b> (B Goals) Bar chart for sightings by Months, depicting seasons</b></summary>

  **Reason:** We did not have different colors for seasons as different places have different seasons. Wanted to depict clear frequency change hence decided to go with bar chart.

<img width="737" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/cdc689d2-f753-442b-8041-b349f4986fa1">

</details>

 <details>
  <summary><b> (B Goals) Histogram chart for frequency of sightings different times during the day</b></summary>

  **Reason:** Histogram helps with coninuous time intervals throughout the day. 24 hour timing used as it is universal.

<img width="1083" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/80c649ab-f2f5-4ce0-bb9f-6dec58bd80cf">

</details>

 <details>
  <summary><b> (B Goals) Histogram chart for frequency of sightings by encounter length</b></summary>

  **Reason:** Handled very short durations by clubbing them into custom sections (bars) of intervals

<img width="1167" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/6c3a665f-594f-4ee1-b055-2e34d5188cf8">

</details>

 <details>
  <summary><b> (B Goals) Emoji based scatter plot to track frequency of occurance of different shapes</b></summary>

  **Reason:** We wanted the user to see the different shapes represented in the plot to be intuitive.

<img width="1066" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/14d3a6e7-75ec-4a8c-8b59-41a6e03f2f87">

</details>

</details>

<details>
<summary><b>8. Details on Demand using Tool Tip</b></summary>
<b>Hovering over the Map and Word Cloud will provide extra information about that data point</b>
 
<img width="560" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/531bcd7e-f162-4947-8d22-147d6fd02170">

<img width="255" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/b2882914-3370-4ca0-b919-345b9fa4494d">

<img width="205" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/54ed41ba-4e25-47c9-8b82-dd1e77c2650a">

</details>

<details>
<summary><b>9. Sliding Brushing and Linking Map</b></summary>
<b> (A Goals) Brushing Map by Selecting and dragging a section on the Time line or any of the 4 Plots will lead to focusing the data on only a certain section on Map</b>

<img width="1078" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/9e2254d3-9458-448a-a5fb-7d0dab87ac4f">

<img width="705" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/4c6ec01f-7661-438d-93f7-c26526791b17">

<img width="1119" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/c8ef1fa3-89a1-46bc-a967-35db0f53c1c1">

<img width="1186" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/16577899-7ab8-4b76-ae03-c38cf68e7d57">

<img width="1075" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/332a850c-666c-4480-854b-7e7f721ee489">

**Reason:** 
* Becasue of the large dataset of shapes, it is slow to load the data. Hence brushing here is slow.
* Professor said it is not easy to use the default brush with D3 hence we came up with alternatives to brush by timeline

<img width="343" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/cbb43c47-9e5a-4e4d-b293-d91282b4cd19">

<b> (A Goals) Word Cloud to brush the Map</b>

<img width="1169" alt="image" src="https://github.com/SaumickPradhan/USA-UFO-Sightings-VIZ/assets/85262444/9ddaaee5-0e6b-4425-bc0b-f503eddd0f8d">

 
</details>
</details>



<h2>Interesting Findings from the Application</h2>

<details>
<summary><b>Relation between High school completion and smoking percent</b></summary>
<b>It is interesting to note that higher that counties with higher number of High school dropouts have a relative higher number of smoking percent</b>
<img width="681" alt="image" src="https://github.com/SaumickPradhan/Interactive-USA-County-Health-Data-Viz/assets/85262444/9f8f7ff4-b72c-415d-87fa-84e4eb149591">
</details>

<details>
<summary><b>Less Health Insurances in Texas</b></summary>
  
<b>Counties in Texas have less number of health insuraces as compared to other counties</b>
  
<img width="573" alt="image" src="https://github.com/SaumickPradhan/Interactive-USA-County-Health-Data-Viz/assets/85262444/6e5d9d25-b291-4235-96d4-12b7dad80c13">
</details>

<details>
<summary><b>Majority Rural counties</b></summary>
<b>Majority of the counties are rural, especially in Central USA</b>
  
<img width="559" alt="image" src="https://github.com/SaumickPradhan/Interactive-USA-County-Health-Data-Viz/assets/85262444/ed2d689b-023d-40b6-be4e-2c281ab58cdf">
  <img width="614" alt="image" src="https://github.com/SaumickPradhan/Interactive-USA-County-Health-Data-Viz/assets/85262444/fe69bbb1-405b-4a4f-a7cf-75cda321ded7">

</details>


<details>
<summary><b>Park access Index</b></summary>
<b>The western part of USA has a lot of Park access index. This sounds correct, given the vast open land and national parks in this area.</b>
  
<img width="573" alt="image" src="https://github.com/SaumickPradhan/Interactive-USA-County-Health-Data-Viz/assets/85262444/6c030b71-1881-405a-9cdf-9d45617e5106">

</details>



<h2>Application Architecture (N) </h2>

<details>
<summary><b>Libraries Used</b></summary>
- [Javascript D3](https://d3js.org/)
- [TopoJson](https://github.com/topojson/us-atlas)
- Counties-10m.json for Choropleth maps
</details>

<details>
<summary><b>Directory Structure</b></summary>

<b>Every .js file has class that we instantiate in main.js</b>
  
- CSS

  - style.css: ALl the styling for index.html
    
- data

  - attributes.json: All feature attributes stored here with color and label in json format
 
  - counties-10m.json: Used in choropleth, from online resource.
 
  - national_health_data.csv: Pre processed dataset
    
- js
  
  - choropleth.js: File with choropleth class and all its brushing and tooltip functions
    
  - d3.v6.min.js: D3 file
    
  - histoBarChart.js : File with class for combinedChart which helps create distribution charts based on attribute chart type and all its brushing and tooltip functions
    
  - main.js: The runner file for all .js classes. It does all the data preprocessing and object instantiation of classes. It also have error handling capabilities.
    
  - scatterplot.js: File with scatterplot class and all its brushing and tooltip functions
    
  - topojson.v3.js: Used for choropleth
    
index.html: Runner page

README.md



</details>



<details>
<summary><b>Future works</b></summary>
<b>1. </b> Tracking changes in attributes for each type of county category

<b>2. </b> Creating functions for brushing and tool tip for code resuability 

<b>3. </b> Improve styling and spacing in the page
  
</details>




 <details>
  <summary><b>Task Distribution</b></summary>

  <b> All the sketches show above with their assigned creator. Here are the pages worked on by the Team:</b>
  
  *  Login Page: Nehang
  *  Linking Pages with Router: Nachiket
  *  Dashboard Page: Saumick
  *  Rewards Center: Saumick
  *  Announcement Page: Nachiket
  *  Progress Page: Saumick
  *  Entire Framework and Navigation: Nachiket
  *  Syllabus Page: Saumick
  *  Module Page with levels: Nehang
  *  Preview and Download feature: Nehang
  *  Grades Page: Saumick
  *  Assignment Page: Nehang
  *  Zoom Page: Saumick
  *  To do List Page: Nehang
  *  Calendar Page: Nehang
  *  Error handling: Nachiket
  *  To the Future Button: Samuel
  *  Three mock users array: Samuel
  
  <b> Saumick, Nachiket, Nehang worked on the document work. Samuel provided the A Goal sketches</b>
 </details>
