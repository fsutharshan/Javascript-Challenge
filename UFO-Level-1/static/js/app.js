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
    var value = d3.select('input').property('value');
    if (value) {
        filteredData = filteredData.filter(obj => obj.datetime == value)
    };

    showTable(filteredData);
    d3.select('input').property('value','');
};