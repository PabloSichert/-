const {
    symlink
} = require('fs');

const {
    resolve
} = require('path');

const rmrf = require('rimraf'); // rm -rf

rmrf(__dirname, err => {
    if (err) {
        throw err;
    }

    symlink('../', __dirname, err => {
        if (err) {
            throw err;
        }
    })
});
