const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os
    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear() 
    console.log("===== PC STATS =====")
    console.table(stats) // cria uma tabela com o ojeto
    log(`${JSON.stringify(stats)}\n`) //transforma um objeto em uma string

}, 1000);