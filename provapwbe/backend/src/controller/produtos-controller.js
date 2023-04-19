const con = require("../dao/connect")


const list = (req, res) => {
    const query = `SELECT * FROM produtos`;
    con.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: "Erro ao listar produtos"
        }).end();
      } else {
        res.status(200).json(result).end();
      }
    });
  };

  const create = (req, res) => {
    let data = req.body
    const query = `INSERT INTO produtos (nome, valor) VALUES ('${data.nome}', '${data.valor}')`
  
    con.query(query, (err, result) => {
      if (err) {
        res.status(500).json({
          error: "Erro ao inserir os dados na tabela produto."
        }).end()
      } else {
        data.id = result.insertId
  
        res.status(200).json(data).end()
      }
    })
  }
  const update = (req, res) => {
    const { nome, valor } = req.body;
    const id = req.params.id;
  
    const query = `UPDATE produtos SET nome = '${nome}', valor = ${valor} WHERE id = ${id}`;
  
    con.query(query, (err,result) => {
        if(err){
            res.status(500).json({
                error: "Erro ao atualizar dados na tabela produtos."
            }).end()
        } else {            
            const data = { id, nome, valor };
            res.status(200).json(data).end();
        }
    });
  }
  

const deleteRecord = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM produtos WHERE id = ${id}`;
  
    con.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: "Erro ao deletar registro"
        }).end();
      } else {
        res.status(200).json({
          message: "Registro deletado com sucesso"
        }).end();
      }
    });
  }
  

  module.exports = {
list,
create,
update,
deleteRecord
}