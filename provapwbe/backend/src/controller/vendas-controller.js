const con = require("../dao/connect")
const VendedorModel = require("../models/comissao");

const list = (req, res) => {
  const query = `SELECT * FROM vendas`
  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao buscar dados na tabela vendas."
      }).end()
    } else {
      res.status(200).json(result).end()
    }
  })
}

const create = (req, res) => {
  const { vendata, quantidade, produtoid, vendedorid } = req.body
  const query = `INSERT INTO vendas (vendata, quantidade, produtoid, vendedorid) VALUES ('${vendata}', ${quantidade}, ${produtoid}, ${vendedorid})`
  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao inserir os dados na tabela vendas."
      }).end()
    } else {
      const id = result.insertId
      const data = { id, vendata, quantidade, produtoid, vendedorid }
      res.status(200).json(data).end()
    }
  })
}

const update = (req, res) => {
  const { id, vendata, quantidade, produtoid, vendedorid } = req.body
  const query = `UPDATE vendas SET vendata='${vendata}', quantidade=${quantidade}, produtoid=${produtoid}, vendedorid=${vendedorid} WHERE id=${id}`
  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao atualizar dados na tabela vendas."
      }).end()
    } else {
      const data = { id, vendata, quantidade, produtoid, vendedorid }
      res.status(200).json(data).end()
    }
  })
}

const deleteRecord = (req, res) => {
  const id = req.params.id
  const query = `DELETE FROM vendas WHERE id = ${id}`
  con.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Erro ao deletar registro na tabela vendas."
      }).end()
    } else {
      res.status(200).json({
        message: "Registro deletado com sucesso na tabela vendas."
      }).end()
    }
  })
}


const commission = async (req, res) => {
  try {
    const id = req.params.id;
    const commission = new VendedorModel();
    const vendedorInfo = await commission.getVendedorInfo(id);
    res.status(200).json(vendedorInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


const total = async (req, res) => {
  try {
    const vendaModel = new VendedorModel();
    const totalSales = await vendaModel.getTotalSales();
    res.status(200).json({ totalSales });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  list,
  create,
  update,
  deleteRecord,
  commission,
  total
}
