'use strict';

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'https://add-your-endpoint',
  log: 'error'
});

module.exports.es = async(event, context) => {
  for (var i = 0; i < event.Records.length; i++) {
    var record = event.Records[i];
    try {
      if (record.eventName === "INSERT") {
        var result = await client.create({
          index: 'ebuy',
          type: 'products',
          id: record.dynamodb.NewImage.id.S,
          body: {
            id: record.dynamodb.NewImage.id.S,
            title: record.dynamodb.NewImage.name.S,
            published: record.dynamodb.NewImage.published.S
          }
        });
        console.log("==== completed ====");
        console.log(result);
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  return `Successfully processed: ${event.Records.length} records.`;
};
