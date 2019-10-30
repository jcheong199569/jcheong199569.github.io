/* Loads the data and calls the processData function*/ 
function makeplot() {
	
	Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/Emissions%20Data.csv", function(data){
		processData(data) } );
};

/* This is the function you will modify. You can add more functions outside of it as well. */ 
function processData(allRows) {
  	console.log(allRows); // log all data to console
	
	/* An example showing how to fetch data from 1 column into an array*/
	var column_year = allRows.map(function(row) { return row["Year"]; })
	console.log(column_year);

	var data = [
		{
		  x: ['Afghanistan', 'Bermuda', 'Brazil', 'South Korea', 'Russian Federation'],
		  y: [0.158961558, 5.955019687, 1.990428942, 10.36983266, 12.01913064],
		  type: 'bar'
		}
	  ];
	  
	  Plotly.newPlot('myDiv', data);
	
	/*TODO: Fetch data from the columns you need as arrays/ an array of objects */
	
	/*TODO: Preprocess the fetched data to get arrays that plotly can take as input*/
	
	/*TODO: Use Plotly.js to display the Bar Charts*/
	
	
}

makeplot();