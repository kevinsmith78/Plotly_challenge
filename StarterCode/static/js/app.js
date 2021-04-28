
//create the function that retrieves the data from the source
function buildCharts(sample) {
//Use D3 to fetch the data from the JSON file
d3.json("samples.json").then((Data) => {
   console.log(Data);
});
//create the promise
const dataPromise =d3.json("samples.json");
console.log("Data Promise:", dataPromise);

