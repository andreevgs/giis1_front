$('body').on('click', '#cda', (e) => {
    getGraphs('http://localhost:3001/api/graphs/cda', 'CDA');
});

$('body').on('click', '#brez', (e) => {
    getGraphs('http://localhost:3001/api/graphs/brez', 'Brez');
});

$('body').on('click', '#vy', (e) => {
    getGraphs('http://localhost:3001/api/graphs/vy', 'Vy');
});