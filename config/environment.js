'use strict';

function environment () {
    return {
        TEST_DB_URL : "mongodb://127.0.0.1:27017/user-microservice-test-db"
    }
}

module.exports = {
    environment : environment
};
