var express = require('express');
var router = express.Router();
const app = express();
const user = require('./schema');

//1. Get Api:

router.get('/read', function (req, res, next) {
    res.status(200).json({
        message: ` Hello from server `
    });
});



//2. Post Api:

router.post('/add', function (req, res, next) {

    user.findOne({ username: req.body.username })
        .exec((error, result) => {
            if (result) {
                res.status(400).json({
                    message: 'User already registered'
                });
            } else {
                const { username, email, mobile, password } = req.body;

                const _user = new user({ username, email, mobile, password });

                _user.save((error, data) => {
                    if (error) {
                        res.status(400).json({
                            message: 'Something went wrong'
                        });
                        console.log(error);

                    }

                    if (data) {
                        res.status(201).json({
                            message: 'registered Succesfully',
                            result: data
                        });

                    }

                });
            }
        });

});


//3. Put Api:

router.put('/:userId', function (req, res, next) {

    user.updateOne(
        { _id: req.params.userId },

        {
            $set: { username, password } = req.body,
        }
    )
        .then((result) => {
            res.status(200).json(result)
            console.log(result);
        }).catch((err) => { console.log(err) })

});

//4. Delete Api:

router.delete('/:userId', function (req, res, next) {

    user.remove({ _id: req.params.userId })
        .exec()
        .then(result => {
            res.status(200).json({ user: 'deleted Successfully' })
        })

        .catch(err => {
            console.log("error");
            res.status(500).json({ error: err });
        });

});

module.exports = router;


