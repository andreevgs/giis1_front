const axios = require('axios');

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

exports.getHypf = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/hyp/first?a=${points.a}&b=${points.b}`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getHyps = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/hyp/second?a=${points.a}`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getErmit = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/ermit?points=[{"x":"${points.point_1_x}","y":"${points.point_1_y}"}, {"x":"${points.point_2_x}","y":"${points.point_2_y}"}, {"x":"${points.point_3_x}","y":"${points.point_3_y}"}, {"x":"${points.point_4_x}","y":"${points.point_4_y}"}]`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getBezie = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/bezie?points=[{"x":"${points.point_1_x}","y":"${points.point_1_y}"}, {"x":"${points.point_2_x}","y":"${points.point_2_y}"}, {"x":"${points.point_3_x}","y":"${points.point_3_y}"}, {"x":"${points.point_4_x}","y":"${points.point_4_y}"}]`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};

exports.getSpline = async (req, res) => {
    const points = req.body;
    const coordinates =
        await axios.get(
            `http://localhost:3000/curv/spline?points=[{"x":"${points.point_1_x}","y":"${points.point_1_y}"}, {"x":"${points.point_2_x}","y":"${points.point_2_y}"}, {"x":"${points.point_3_x}","y":"${points.point_3_y}"}, {"x":"${points.point_4_x}","y":"${points.point_4_y}"}]`
        );
    console.log(points);
    res.json({ points: points, coordinates: coordinates.data });
};
