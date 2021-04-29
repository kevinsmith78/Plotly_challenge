function buildmetadata(id) {
    //Select the element for selecting Data
    var dropdown = d3.selectAll("#selDataset");
    //Populate the dropdown menu
    d3.json("samples.json").then((importedData) => {
        var subjectIds = importedData.names;
        subjectIds.forEach((id) => {
            selector
                .append("option")
                .text(id)
                .property("value", id);
        });

        //use the Subject ID from the names to build inital polts
        const firstSubject = subjectIds[0];
        updatecharts(firstSubject);
        updateMetaData(firstSubject);
    });
}

function meta(sample) {
    d3.json("samples.json").then((importedData) => {
        var metadata = importedData.metadata;
        var filterArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = filterArray[0]
        var metaPanel = d3.select("#sample-metadata");
        metaPanel.html("");
        Object.entires(result).forEach(([key, value]) => {
            metaPanel.append("h6").text('$key.toUpperCase()]: ${value}')
        });

        //Create a horizontal bar chart 


        //Use sample_values as the values for the bar chart.


        //Use otu_ids as the labels for the bar chart.


        //Use otu_labels as the hovertext for the chart.

    });
}

function initaldata() {
    //Select the element for selecting Data
    var dropdown = d3.selectAll("#selDataset");
    //Populate the dropdown menu
    d3.json("samples.json").then((importedData) => {
        var subjectIds = importedData.names;
        subjectIds.forEach((id) => {
            selector
                .append("option")
                .text(id)
                .property("value", id);
        });

        //use the Subject ID from the names to build inital polts
        const firstSubject = subjectIds[0];
        //updatecharts(firstSubject);
        //updateMetaData(firstSubject);
    });
}

initaldata();