const AWS = require("aws-sdk");

exports.deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  await dynamodb
  .delete({
    TableName: "TaskTable",
    Key: { id },
  })
  .promise();
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Permite solicitudes desde cualquier origen
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Métodos permitidos
      "Access-Control-Allow-Headers": "Content-Type", // Encabezados permitidos
    },
    body: {
        message: "Tarea eliminada",
    },
  };
};