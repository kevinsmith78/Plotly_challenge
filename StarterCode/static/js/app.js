function horizontal(id) {
//1.Use the D3 library to read in samples.json.
d3.json("samples.json").then(function (data) {
    //check console
    //console.log(data);
    //Collect the values for the upcoming inputs for all of the charts using 0 as start point
    
    //Develop the ID's into an array
    var NewArray = data.samples.map(d => d.id);
    //Use the slice value to find the 10 top OTU's and place in reverse order to find top ten
    //for otu observations using the slice function and revesring
    var otd = data.samples[0].otu_ids.slice(0,10).reverse();
    //2.a Use sample_values as the values for the bar chart.
    var values=data.samples[0].sample_values.slice(0,10).reverse();
    //console.log(values)
    //2.b Use otu_ids as the labels for the bar chart.
    var ids = ids.map(d=> "otu" + d);
    //print out the console log with the values
    //console.log('Otu:${ids}')
    //2.c Use otu_labels as the hovertext for the chart.
    var label_otu = data.samples[0].otu_labels.slice(0,10);
    var trace ={
        x:
    }

}
//2.Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Plotly.newPlot("plot", data, layout);

//2b.Create dropdown Menu
d3.selectAll("#selDataset).on("change",updatePlotly);
//2b.i Create a function when the dropdown is selected
function updatePlotly() {
    //2b.ii Using D3 to select the dropdown menu
    var dropdownMenu=d3.select("#selDataset");

    
    var dataset
}

//3.Create a bubble chart that displays each sample.
Plotly.newPlot("bubble", databubble,layout);

//4.Display the sample metadata, i.e., an individual's demographic information.
var indMet = data.metadata.filter(subject => subject.id ==id)[0];

//5.Display each key-value pair from the metadata JSON object somewhere on the page.
d3.select("#sample-metadata")
    .selectAll("h3")
    .data(data.metadata[0])
    .enter()
    .append("h3")
    .hmtyl(function (d) )
//6.Update all of the plots any time that a new sample is selected.