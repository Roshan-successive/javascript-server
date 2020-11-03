"use strict";
exports.__esModule = true;
var TraineeController = /** @class */ (function () {
    function TraineeController() {
    }
    TraineeController.getInstance = function () {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    };
    TraineeController.prototype.get = function (req, res, next) {
        try {
            console.log("Insode Get route of Trainee Controller ");
            res.status(200).json({
                message: 'Trainee Displayed Successfully',
                data: {
                    name: 'Roshan',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log("Error occured " + err);
        }
    };
    TraineeController.prototype.post = function (req, res, next) {
        try {
            console.log("Inside Post/Create route of Trainee Controller ");
            res.status(200).json({
                message: 'Trainee Added Successfully',
                data: {
                    id: req.body.id,
                    name: req.body.name
                }
            });
        }
        catch (err) {
            console.log("Error occured " + err);
        }
    };
    TraineeController.prototype.put = function (req, res, next) {
        try {
            console.log("Insode put route of Trainee Controller ");
            res.status(200).json({
                message: 'Trainee Updated Successfully',
                data: {
                    name: 'Roshan',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log("Error occured " + err);
        }
    };
    TraineeController.prototype.Delete = function (req, res, next) {
        try {
            console.log("Insode delte route of Trainee Controller ");
            res.status(200).json({
                message: 'Trainee Deleted Successfully',
                data: {
                    name: 'Roshan',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log("Error occured " + err);
        }
    };
    return TraineeController;
}());
exports["default"] = TraineeController.getInstance();
