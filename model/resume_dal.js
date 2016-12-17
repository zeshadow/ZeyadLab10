var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM resumes group by account_id;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(resume_id, callback) {
    var query = 'SELECT * FROM resumes WHERE resume_id = ?';
    var queryData = [resume_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.delete = function(resume_id, callback) {
    var query = 'DELETE FROM resumes WHERE resumes_id = ?';
    var queryData = [resume_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.insert = function(params, callback) {
    console.log("test")
    var query = 'INSERT INTO resume (account_id,resume_name) VALUES (?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.account_id, params.resume_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}
