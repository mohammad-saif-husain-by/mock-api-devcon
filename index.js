const express = require('express');
const app = express();
const data  = require('./kpi-mock');

app.get('/kpi', (req, res) => {
    res.status(200).send(data.kpis);
});

app.get('/orders-due', (req, res) => {
    res.status(200).send(data.orders);
});

app.get('/sales', (req, res) => {
    res.status(200).send(data.sales);
});

app.get('/stores', (req, res) => {
    res.status(200).send(data.stores);
});

app.listen(
    8000,
    () => console.log(`
        Mock API running on http://localhost:8000/ \n
        KPI: http://localhost:8000/kpi\n
        Order Due: http://localhost:8000/orders-due\n
        Sales: http://localhost:8000/sales\n
        Stores: http://localhost:8000/stores
    `)
);