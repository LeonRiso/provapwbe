const express = require('express');

const vendedores = require('../controller/vendedores-controller.js');
const vendas = require('../controller/vendas-controller.js');
const produtos = require('../controller/produtos-controller.js');


const router = express.Router();

router.get('/vendedores', vendedores.list);
router.post('/vendedoresadd', vendedores.create)
router.put('/vendedoresalt/:id', vendedores.update)
router.delete('/vendedoresdel/:id', vendedores.deleteRecord)
router.get('/sales/:id', vendedores.sales);

router.get('/vendas', vendas.list);
router.post('/vendasadd', vendas.create)
router.put('/vendasalt/:id', vendas.update)
router.delete('/vendasdel/:id', vendas.deleteRecord)
router.get('/comissao/:id', vendas.commission);
router.get('/total/', vendas.total);


router.get('/produtos', produtos.list);
router.post('/produtosadd', produtos.create)
router.put('/produtosalt/:id', produtos.update)
router.delete('/produtosdel/:id', produtos.deleteRecord)


module.exports = router;