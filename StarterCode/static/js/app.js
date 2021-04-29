//Use D3 to fetch the data from the JSON file
d3.json("samples.json").then((importedData) => {
    //console.log(importedData);
 
    //Map the metadata and create by bbtype
    var bbtype=importedData.metadata.map(types => types.bbtype)
    console.log('Belly Button: $(bbtype')

    //filter sample values by type per assignment
    var samples = importedData.samples.filter(samp => samp.id.toString() === id)[0];
    //console.log(samples)


}


