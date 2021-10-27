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

    app.use('/api/graphs', router)
};
