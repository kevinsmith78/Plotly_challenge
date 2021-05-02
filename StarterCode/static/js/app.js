// 1.Use the D3 library to read in samples.json.
    //d3.json("samples.json").then(data => {
        //check console
        //console.log(data)
// Create ID Selector                
function init() {
    var selector = d3.select("#selDataset");
    // Use the list of sample names to populate the select options  
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector.append("option").text(sample).property("value", sample);
        });
    });
    charting(data.names[0]);
    meta(data.names[0]);
}
init();    

//2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function charting(id) {
    //read in the data
    d3.json("samples.json").then((data) => {
    //check console
    //console.log(data)
    //2.a Use sample_values as the values for the bar chart. (top 10 in reverse)    
        var sampleV = data.samples[0].sample_values.slice(0,10).reverse();
    //2.b Use otu_ids as the labels for the bar chart.
        var otulabel = data.samples[0].otu_ids;
    //2.c Use otu_labels as the hovertext for the chart.
        var otuhov = data.samples [0].otu_labels.slice(0,10);
    // Isolate the top 10 
        var Totulabel = (data.samples[0].otu_ids.slice(0,10)).reverse();
    // Modify the data to fit the desired outcome
        var Totuid = Totulabel.map(d => "OTU" + d)
        var graph = {
            x: sampleV,
            y: Totuid,
            text: otuhov,
            marker: {
            color: "green"},
            type: "bar",
            orientation: "h",
    };   
    //develop the trace for the data
        var hdata = [graph];
    //create the design of the chart
        var hdesign ={
        title: "OTU by Rank top 10",
        yaxis: {tickmode: "linear",},
        margin: {
            l: 50,
            r: 50,
            t: 30,
            b: 20
    }
};
    //create the horiztonal bar chart
    Plotly.newPlot("bar", input, graph);
    //3. Create a bubble chart that displays each sample.
    //Begin doing the same for the bubble chart using the data variables above with a different trace
        var bdata = {
        //3.a Use otu_ids for the x values.
            x: data.samples[0].otu_ids,
        //3.b Use sample_values for the y values.
            y: data.samples[0].sample_values,
            mode: "markers",
            marker: {
        //3.c Use sample_values for the marker size.
                size: data.samples[0].sample_values,
        //3.d Use otu_ids for the marker colors.
                color: data.samples[0].otu_ids,
        },
        //3.e Use otu_labels for the text values.
            text: data.samples[0].otu_labels
        };

        var bubble_lay = {
            title: 'ITU',
            height: 600,
            width: 600
        };
        var bdata = [circle]; 
    Plotly.newPlot("bubble,circle,bubble_lay");
    });
}
    //4.Display the sample metadata, i.e., an individual's demographic information.
function meta(id) {
        //1.Use the D3 library to read in samples.json.
    d3.json("samples.json").then(data => {
        var meta = data.metadata;
        var selector = d3.select("#sample-metadata");
            //console.log(metadata)
            //filter the metadata to pull only what id need
        var indMet = meta.filter(part => part.id == id)[0];
            //clear the data upon selection
        selector.html("");
        Object.entries (indmet).ForEach(([key, value]) => {
            selector.append("h6").text(`${key}.toUppercase()}: ${value}`);
        });
    });
}    
//develop function for the change in the data and plotting
function change(id) {
    charting(id);
    meta(id);
}

init();
