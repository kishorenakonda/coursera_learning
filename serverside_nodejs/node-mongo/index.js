const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbName = "conFusion";

mongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log("<-- Connected Correctly to Server -->");

    const db = client.db(dbName);
    const collection = db.collection('dishes');

    collection.insertOne(
        { "name": "Name 1", "description": "Description 1" },
        (err, result) => {
            assert.equal(err, null);

            console.log("<-- After Insert --> \n");
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);

                console.log("Found: \n");
                console.log(docs);

                console.log("<-- Dropping the Collection -->");
                db.dropCollection("dishes", (err, result) => {
                    assert.equal(err, null);

                    client.close();
                    console.log("<-- Closed the DB Connection -->");
                });
            });
        })
});