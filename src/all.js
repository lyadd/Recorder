const
    express = require('express'),
    router = express.Router(),
    routes = [
        { path: '/', view: '1', customMessage: false },
        { path: '/record', view: '2', customMessage: false }
    ];

routes.forEach(route => {
    router.get(route.path, (req, res) => {
        res.render(route.view, { showCustomMessage: route.customMessage });
    });
});

module.exports = router;
