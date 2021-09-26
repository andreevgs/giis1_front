const axios = require('axios');

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.getCDA = async (req, res) => {
    const points = {
        firstPoint: {
            x: getRandom(0, 10),
            y: getRandom(0, 10)
        },
        secondPoint: {
            x: getRandom(15, 25),
            y: getRandom(15, 25)
        }
    }
    const coordinates =
        await axios.get(
            `http://localhost:3000/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=CDA`
        );
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getBrez = async (req, res) => {
    const points = {
        firstPoint: {
            x: getRandom(0, 10),
            y: getRandom(0, 10)
        },
        secondPoint: {
            x: getRandom(15, 25),
            y: getRandom(15, 25)
        }
    }
    const coordinates =
        await axios.get(
            `http://localhost:3000/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=Brez`
        );

    res.json({ points: points, coordinates: coordinates.data });
};

exports.getVy = async (req, res) => {
    const points = {
        firstPoint: {
            x: getRandom(0, 10),
            y: getRandom(0, 10)
        },
        secondPoint: {
            x: getRandom(15, 25),
            y: getRandom(15, 25)
        }
    }
    const coordinates =
        await axios.get(
            `http://localhost:3000/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=VY`
        );

    res.json({ points: points, coordinates: coordinates.data });
};
