const graphs = require('../controllers/graphs');

module.exports = app => {
    const router = require('express').Router();

    router.post(
        '/cda',
        graphs.getCDA
    );

    router.post(
        '/brez',
        graphs.getBrez
    );

    router.post(
        '/vy',
        graphs.getVy
    );

    router.post(
        '/circle',
        graphs.getCircle
    );

    router.post(
        '/ellipse',
        graphs.getEllipse
    );

    router.post(
        '/hypf',
        graphs.getHypf
    );

    router.post(
        '/hyps',
        graphs.getHyps
    );

    router.post(
        '/ermit',
        graphs.getErmit
    );

    router.post(
        '/bezie',
        graphs.getBezie
    );

    router.post(
        '/spline',
        graphs.getSpline
    );

    app.use('/api/graphs', router)
};
