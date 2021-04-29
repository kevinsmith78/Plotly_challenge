//1.Use the D3 library to read in samples.json.
d3.json("samples.json").then(function (data) {
    //check console
    console.log(data);
    var meta = data.metadata[0];
    console.log(Object.entries(meta));
    console.log(meta);
}
//2.Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
Plotly.newPlot("plot", data, layout);
//3.Create a bubble chart that displays each sample.

//4.Display the sample metadata, i.e., an individual's demographic information.

//5.Display each key-value pair from the metadata JSON object somewhere on the page.

//6.Update all of the plots any time that a new sample is selected.