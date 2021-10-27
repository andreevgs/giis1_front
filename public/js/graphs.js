let debugMode = false;

const drawChart = (coordinates, type, points) => {
    //elements creation
    const canvas = document.querySelector(`.project`);
    const fragment = document.createDocumentFragment();

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (i = 1; i <= 900; i++){
        const cube = document.createElement(`DIV`);
        cube.classList.add(`innactive`);
        cube.addEventListener(`click`, ()=>{cube.classList.toggle(`active`)});

        fragment.appendChild(cube);
    }

    canvas.appendChild(fragment);

//draw the alien
    const allCubes = document.querySelectorAll(`.innactive`);
    const alienDraw = [];
    console.log(coordinates);
    for (coordinate of coordinates){
        const opacity = coordinate.c ? 1 - coordinate.c : 1;
        console.log({ number: Math.round(coordinate.x) * Math.round(coordinate.y), opacity });
        alienDraw.push({ number: Math.round(coordinate.x) + (Math.round(coordinate.y)-1) * 30, opacity});
    }

    // for (let i = 0; i < alienDraw.length; i++) {
    //     if (alienDraw[i].opacity !== 1) {
    //         allCubes[alienDraw[i].number].setAttribute('style', `opacity: ${alienDraw[i].opacity}`);
    //     }
    //     else {
    //         allCubes[alienDraw[i].number].classList.add(`active`);
    //     }
    // }

    let j = 0, howManyTimes = alienDraw.length, timeout = debugMode ? 300 : 0;
    const f = () => {
        console.log('current point: ', alienDraw[j]);
        if(alienDraw[j].number > 0) {
            if (alienDraw[j].opacity !== 1) {
                allCubes[alienDraw[j].number].setAttribute('style', `opacity: ${alienDraw[j].opacity}`);
            } else {
                allCubes[alienDraw[j].number].classList.add(`active`);
            }
        }
        j++;

        if( j < howManyTimes ){
            setTimeout( f, timeout );
        }
    }
    f();
}

const getGraphs = (url, sectionType, body) => {
    console.log(body);
    $.ajax({
        url: url,
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(body),
        success: function(response) {
            drawChart(response.coordinates, sectionType, response.points);
        },
        error: function() {
            alert('Error getting data has occurred. Please, try again');
        }
    });
}

window.onload = function () {
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
}