const URL = 'mongodb://192.168.0.21:27017/test';
const BACKUP_URL = 'mongodb://localhost:27017/test';

module.exports = function (mongoose) {
    mongoose.connect(URL, function(err) {
        if (err) {
            console.log("mongoose connection failed! Using backup connection.");
            mongoose.connect(BACKUP_URL, function (err) {
                if (err) {
                    console.log("backup connection failed!");
                    console.error(err);
                } else {
                    console.log("connected to mongodb");
                }
            });
        } else {
            console.log("connected to mongodb");
        }
    });
};
