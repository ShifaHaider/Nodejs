var formidable = require('formidable');

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(err, fields, files);
    });


//un-complete work....!