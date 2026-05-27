export async function json(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    // Converte para JSON
    req.body = JSON.parse(Buffer.concat(buffers).toString());

    // Deste modo está vindo como texto, vamos converter para JSON
    // Aí sim podemos acessar o objeto já convertido
    // console.log(body.name);
  } catch {
    req.body = null;
  }

  // já está devolvendo em JSON
  res.setHeader("Content-type", "application/json");
}
