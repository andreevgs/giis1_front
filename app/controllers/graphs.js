const axios = require('axios');

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.getCDA = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/straight/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=CDA`
        );
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getBrez = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/straight/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=Brez`
        );

    res.json({ points: points, coordinates: coordinates.data });
};

exports.getVy = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/straight/add?firstPoint={"x":"${points.firstPoint.x}", "y":"${points.firstPoint.y}"}&secondPoint={"x":"${points.secondPoint.x}", "y":"${points.secondPoint.y}"}&straightMethod=VY`
        );

    res.json({ points: points, coordinates: coordinates.data });
};

exports.getCircle = async (req, res) => {
    const points = req.body;
    console.log(points);
    try {

        const coordinates =
            await axios.get(
                `http://localhost:3000/curv/circle?Xcenter=${points.x}&Ycenter=${points.x}&radius=${points.radius}`
            );

        res.json({points: points, coordinates: coordinates.data});
    } catch (e) {
        console.log(e);
        res.json('error');
    }
};

exports.getEllipse = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/ellipse?a=${points.a}&b=${points.b}&Xc=${points.Xc}&Yc=${points.Yc}`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};
