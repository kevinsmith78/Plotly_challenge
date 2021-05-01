function horizontal(id) {
    //1.Use the D3 library to read in samples.json.
    d3.json("samples.json").then(data => {
        //check console
        //console.log(data);
        //Collect the values for the upcoming inputs for all of the charts using 0 as start point

        //Develop the ID's into an array
        var NewArray = data.samples.map(d => d.id);
        //Use the slice value to find the 10 top OTU's and place in reverse order to find top ten
        //for otu observations using the slice function and revesring
        var otd = data.samples[0].otu_ids.slice(0, 10).reverse();
        //2.a Use sample_values as the values for the bar chart.
        var values = data.samples[0].sample_values.slice(0, 10).reverse();
        //console.log(values)
        //2.b Use otu_ids as the labels for the bar chart.
        var ids = ids.otd.map(d => "otu" + d);
        //print out the console log with the values
        //console.log('Otu:${ids}')
        // filter the values contained within the data by an "index(id)"
        var index = data.samples.filter(d => d.id.toString() === id)[0];
        //new variable
        var dtable=d3.select("#sample_metadata");
        //2.c Use otu_labels as the hovertext for the chart.
        var label_otu = data.samples[0].otu_labels.slice(0, 10);
        //Create the trace
        var input = [trace];
        //create variables for the bubble chart
        var graph = {
            x: values,
            y: ids,
            text: labels,
            marker: {
                color: "green"
            },
            type: "bar",
            orientation: "h",
        };
        //refine the layout for the chart
        var plots = {
            title: "OTU by Rank top 10",
            yaxis: {
                tickmode: "linear",
            },
            margin: {
                l: 50,
                r: 50,
                t: 30,
                b: 20
            },
        };

        //2.Create a horizontal bar chart with the above parameters  
        Plotly.newPlot("bar", input, graph);
        //2.a dropdown menu to display the top 10 OTUs found in that individual.
        //create change
        function change(id) {
            getinfo(id);
            getdemo(id);
        }
        
        function hot() {
            //clear the previous Data
            resetData ();
            var choice = d3.select("#selDataset");
            //look through the data in the data file
            d3.json("samples.json").then(data => {
                //console.log(data)
                //get the id names to populate for the dropdown menu
                data.names.forEach(function (name) {
                    dropdown.append("option").text(name).property("value");
                });
            });

            //START BUBBLE CHART DEVELOPMENT//
            
            var graph_1 = {
                x: data.samples[0].otu_ids,
                y: data.samples[0].values,
                mode: "markers",
                marker: {
                    size: data.samples[0].values,
                    color: data.samples[0].values,
                },
                text: data.samples[0].otu_labels
            };
        };
        var bubble_lay = {
            title: 'ITU',
            //showlegend = false,
            height: 600,
            width: 600
        };
        
        //create variables for the bubble chart
            var bubble_1 = [graph_1];

        //3.Create a bubble chart that displays each sample.
        Plotly.newPlot("bubble", bubble_1, bubble_lay);
        });
}

        //4.Display the sample metadata, i.e., an individual's demographic information.
        function meta() {
            //1.Use the D3 library to read in samples.json.
            d3.json("samples.json").then(data => {
                var meta = data.metadata
                //console.log(metadata)
                //filter the metadata to pull only what id need
                var indMet = data.metadata.filter(part => part.id == id)[0];
                //run through each key value needed within the dataset
                Object.entries(indMet).forEach(([key,value]) =>) {
                //within the new list create the ul
                var_newul = dtable.append("ul");
                newList.attr("class", "list-group")
                }


                //5.Display each key-value pair from the metadata JSON object somewhere on the page.
                d3.select("#sample-metadata")
                    .selectAll("h3")
                    .data(data.metadata[0])
                    .enter()
                    .append("h3")
                    .html(function (d) 
                };
            };
        });
};
//6.Update all of the plots any time that a new sample is selected