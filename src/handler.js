exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Permite solicitudes desde cualquier origen
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Métodos permitidos
      "Access-Control-Allow-Headers": "Content-Type", // Encabezados permitidos
    },
    body: JSON.stringify({
      message: "Hola mundo!",
      input: event,
    }),
  };
};