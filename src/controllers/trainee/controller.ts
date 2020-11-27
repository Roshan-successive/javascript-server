class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req, res, next) {
        try {
            // tslint:disable-next-line: prefer-const
            let console: Console;
            console.log('Inside get method of Trainee Controller');

            res.send({
                message: 'Trainee displayed successfully',
                data: [
                    {
                        name: 'Roshan',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }

    create(req, res, next) {
        try {
            // tslint:disable-next-line: prefer-const
            let console: Console;
            console.log('Inside post method of Trainee Controller');

            res.send({
                message: 'Trainee created  successfully',
                data: [
                    {
                        name: 'Roshan',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }

    update(req, res, next) {
        try {
            // tslint:disable-next-line: prefer-const
            let console: Console;
            console.log('Inside update method of Trainee Controller');

            res.send({
                message: 'Trainee updated successfully',
                data: [
                    {
                        name: 'Roshan',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req, res, next) {
        try {
            // tslint:disable-next-line: prefer-const
            let console: Console;
            console.log('Inside delete method of Trainee Controller');

            res.send({
                message: 'Trainee deleted successfully',
                data: [
                    {
                        name: 'Roshan',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
}

export default TraineeController.getInstance();
