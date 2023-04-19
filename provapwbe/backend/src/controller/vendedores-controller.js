const con = require("../dao/connect")
const VendedorModel = require("../models/comissao");


const list = (req, res) => {
  const query = `SELECT * FROM vendedores`
  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao listar as vendedores."
      }).end()
    } else {
      res.status(200).json(result).end()
    }
  })
}

const create = (req, res) => {
  const { nome, matricula } = req.body;
  const query = `INSERT INTO vendedores (nome, matricula) VALUES ('${nome}', '${matricula}')`;

  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao inserir os dados na tabela vendedores."
      }).end()
    } else {
      const data = {
        id: result.insertId,
        nome: nome,
        matricula: matricula
      }
      res.status(200).json(data).end()
    }
  })
}

  
const update = (req, res) => {
  const id = req.params.id;
  const { nome, matricula } = req.body;
  const query = `UPDATE vendedores SET nome = '${nome}', matricula = '${matricula}' WHERE id = ${id}`;

  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao atualizar os dados do vendedor."
      }).end()
    } else {
      res.status(200).json({
        id,
        nome,
        matricula
      }).end()
    }
  })
}


const deleteRecord = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM vendedores WHERE id = ${id}`;
  
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
  
  const sales = async (req, res) => {
    try {
      const id = req.params.id;
      const total = new VendedorModel();
      const vendedorInfo = await total.getAllSalesByVendedor(id);
      res.status(200).json(vendedorInfo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  module.exports = {
list,
create,
update,
deleteRecord,
sales
}