const drawChart = (coordinates, type, points) => {
    for (point of coordinates) {
        let opacity = 1;
        if (point.c) {
            opacity = point.c;
        }

        point.color = `rgba(166, 0, 0, ${opacity})`;
    }

    const options = {
        animationEnabled: true,
        zoomEnabled: true,
        colorSet: "colorSet2",
        title: {
            text: `Type: ${type}; points: (${points.firstPoint.x}, ${points.firstPoint.y}), (${points.secondPoint.x}, ${points.secondPoint.y})`
        },
        axisX: {
            title: "X",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY:{
            title: "Y",
            gridThickness: 0,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        data: [{
            type: "scatter",
            toolTipContent: "<b>X: </b>{x}<br/><b>Y: </b>{y}",
            dataPoints: coordinates
        }]
    };

    $("#graph_container").CanvasJSChart(options);
}

const getGraphs = (url, sectionType) => {
    $.ajax({
        url: url,
        type: "POST",
        success: function(response) {
            drawChart(response.coordinates, sectionType, response.points);
        },
        error: function() {
            alert('Error getting data has occurred. Please, try again');
        }
    });
}

window.onload = function () {
    getGraphs('http://localhost:3001/api/graphs/cda', 'CDA');
}