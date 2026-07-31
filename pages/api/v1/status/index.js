function status(request, response) {
  response.status(200).json({ chave: "testando a API" });
}

export default status;
