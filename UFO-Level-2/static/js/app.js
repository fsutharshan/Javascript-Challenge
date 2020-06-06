// from data.js
var tableData = data;

showTable(tableData);
d3.select('button').on('click', handleClick);

function showTable(data) {
    d3.select('tbody').html('');

    data.forEach(tableRow => {
        var row = d3.select('tbody').append('tr');

        Object.values(tableRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        })
    });
};

function handleClick() {
    var filteredData = data;
    var datetimeval = d3.select('#datetime').property('value');
    if (datetimeval) {
        filteredData = filteredData.filter(obj => obj.datetime == datetimeval) 
    };

    var cityval = d3.select('#city').property('value');
    if (cityval) {
        filteredData = filteredData.filter(obj => obj.city == cityval) 
    };

    var stateval = d3.select('#state').property('value');
    if (stateval) {
        filteredData = filteredData.filter(obj => obj.state == stateval) 
    };

    var countryval = d3.select('#country').property('value');
    if (countryval) {
        filteredData = filteredData.filter(obj => obj.country == countryval) 
    };

    var shapeval = d3.select('#shape').property('value');
    if (shapeval) {
        filteredData = filteredData.filter(obj => obj.shape == shapeval) 
    };

    showTable(filteredData);
    d3.select('#datetime').property('value','');
    d3.select('#city').property('value','');
    d3.select('#state').property('value','');
    d3.select('#country').property('value','');
    d3.select('#shape').property('value','');
};