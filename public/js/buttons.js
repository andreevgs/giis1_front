$('body').on('click', '#cda', (e) => {
    const body = {
        firstPoint: {
            x: $('#first_x').val(),
            y: $('#first_y').val()
        },
        secondPoint: {
            x: $('#second_x').val(),
            y: $('#second_y').val()
        }
    }
    getGraphs('http://localhost:3001/api/graphs/cda', 'CDA', body);
});

$('body').on('click', '#brez', (e) => {
    const body = {
        firstPoint: {
            x: $('#first_x').val(),
            y: $('#first_y').val()
        },
        secondPoint: {
            x: $('#second_x').val(),
            y: $('#second_y').val()
        }
    }
    getGraphs('http://localhost:3001/api/graphs/brez', 'Brez', body);
});

$('body').on('click', '#vy', (e) => {
    const body = {
        firstPoint: {
            x: $('#first_x').val(),
            y: $('#first_y').val()
        },
        secondPoint: {
            x: $('#second_x').val(),
            y: $('#second_y').val()
        }
    }
    getGraphs('http://localhost:3001/api/graphs/vy', 'Vy', body);
});

$('body').on('click', '#circle', (e) => {
    const body = {
        x: $('#circle_x').val(),
        y: $('#circle_y').val(),
        radius: $('#radius').val()
    }
    getGraphs('http://localhost:3001/api/graphs/circle', '', body);
});

$('body').on('click', '#ellipse', (e) => {
    const body = {
        a: $('#a').val(),
        b: $('#b').val(),
        Xc: $('#circle_x').val(),
        Yc: $('#circle_y').val()
    }
    getGraphs('http://localhost:3001/api/graphs/ellipse', '', body);
});

$('body').on('click', '#hypf', (e) => {
    const body = {
        a: $('#a').val(),
        b: $('#b').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/hypf', '', body);
});

$('body').on('click', '#hyps', (e) => {
    const body = {
        a: $('#a').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/hyps', '', body);
});

$('body').on('click', '#hypt', (e) => {
    const body = {
        p: $('#p').val(),
        start: $('#start').val(),
        end: $('#end').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/hypt', '', body);
});

$('body').on('click', '#ermit', (e) => {
    const body = {
        point_1_x: $('#point_1_x').val(),
        point_1_y: $('#point_1_y').val(),
        point_2_x: $('#point_2_x').val(),
        point_2_y: $('#point_2_y').val(),
        point_3_x: $('#point_3_x').val(),
        point_3_y: $('#point_3_y').val(),
        point_4_x: $('#point_4_x').val(),
        point_4_y: $('#point_4_y').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/ermit', '', body);
});

$('body').on('click', '#bezie', (e) => {
    const body = {
        point_1_x: $('#point_1_x').val(),
        point_1_y: $('#point_1_y').val(),
        point_2_x: $('#point_2_x').val(),
        point_2_y: $('#point_2_y').val(),
        point_3_x: $('#point_3_x').val(),
        point_3_y: $('#point_3_y').val(),
        point_4_x: $('#point_4_x').val(),
        point_4_y: $('#point_4_y').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/bezie', '', body);
});

$('body').on('click', '#spline', (e) => {
    const body = {
        point_1_x: $('#point_1_x').val(),
        point_1_y: $('#point_1_y').val(),
        point_2_x: $('#point_2_x').val(),
        point_2_y: $('#point_2_y').val(),
        point_3_x: $('#point_3_x').val(),
        point_3_y: $('#point_3_y').val(),
        point_4_x: $('#point_4_x').val(),
        point_4_y: $('#point_4_y').val(),
    }
    getGraphs('http://localhost:3001/api/graphs/spline', '', body);
});

$('body').on('click', '#debug', (e) => {
    e.target.classList.toggle('active');
    debugMode = !debugMode;
});