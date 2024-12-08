const AWS = require("aws-sdk");

exports.getTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb
    .scan({
      TableName: "TaskTable",
    })
    .promise();
  const tasks = result.Items;
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Permite solicitudes desde cualquier origen
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Métodos permitidos
      "Access-Control-Allow-Headers": "Content-Type", // Encabezados permitidos
    },
    body: {
      tasks,
    },
  };
};