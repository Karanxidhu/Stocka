const express = require('express');
const router = express.Router();

var home_data = {}

router.get('/home_stocks', async (req, res) => {
    try {
        const URL = 'https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC,INFY:NSE&interval=1h&apikey=demo'
        const data = await fetch(URL)
        const json = await data.json();
        home_data = json
        console.log(home_data)
        res.send({home_data})
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const companies = req.body.companies
        const URL = 'https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC,INFY:NSE&interval=1month&apikey=demo'
        const data = await fetch(URL)
        const json = await data.json();
        // console.log(companies)
        home_data = json
        console.log(home_data)
        res.send({ data: 'set' })
    } catch (error) {
        console.log(error)
    }
})
router.post('/get_stock/', async (req, res) => {
    try {
        const company = req.body.stock
        const time_gap = req.body.time
        const URL = `https://api.twelvedata.com/time_series?symbol=${company}&interval=${time_gap}&apikey=PLACE-YOUR-API-KEY`
        const data = await fetch(URL)
        const json = await data.json();
        res.send(json)
    } catch (error) {
        console.log(error)
    }
})

router.get('/sample_data', (req, res) => {
    res.send({ home_data })
})

router.get('/get_values', async (req, res) => {
    let values = []
    try {
        // console.log(home_data.AAPL.values)
        for (stock of home_data.AAPL.values) {
            let data = {}
            data.open = stock.open
            data.datetime = stock.datetime
            values.push(data)
        }
        res.send(values)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router