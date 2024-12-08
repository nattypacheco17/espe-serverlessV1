const { v4 } = require("uuid");
const AWS = require("aws-sdk");

exports.addTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { title, description } = JSON.parse(event.body);
  const createAT = new Date();
  const id = v4();

  const newTask = {
    id,
    title,
    description,
    createAT,
    done:true,
  };
  await dynamodb
    .put({
      TableName: "TaskTable",
      Item: newTask,
    })
    .promise();
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Permite solicitudes desde cualquier origen
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Métodos permitidos
      "Access-Control-Allow-Headers": "Content-Type", // Encabezados permitidos
    },
    body: JSON.stringify(newTask),
  };
};