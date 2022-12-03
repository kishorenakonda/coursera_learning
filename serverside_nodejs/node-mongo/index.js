const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbName = "conFusion";

mongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log("<-- Connected Correctly to Server -->");

    const db = client.db(dbName);

    // Static way to connect to DB and perform DB Operations
    // const collection = db.collection('dishes');

    // collection.insertOne(
    //     { "name": "Name 1", "description": "Description 1" },
    //     (err, result) => {
    //         assert.equal(err, null);

    //         console.log("<-- After Insert --> \n");
    //         console.log(result.ops);

    //         collection.find({}).toArray((err, docs) => {
    //             assert.equal(err, null);

    //             console.log("Found: \n");
    //             console.log(docs);

    //             console.log("<-- Dropping the Collection -->");
    //             db.dropCollection("dishes", (err, result) => {
    //                 assert.equal(err, null);

    //                 client.close();
    //                 console.log("<-- Closed the DB Connection -->");
    //             });
    //         });
    //     })

    // File Based / External Way of performation DB Operations
    dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(db, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            db.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            });
        });
});