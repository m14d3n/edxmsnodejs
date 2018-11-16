const fs=require('fs')
const path=require('path')
var csvjson = require('csvjson');

const fName = 'customer-data'

fs.readFile(fName+'.csv', (err,dataCsv) => {
    if (err) throw err
    let dataJson = csvjson.toObject(dataCsv.toString())
    console.log()
    fs.writeFile(fName+'.json',JSON.stringify(dataJson,null,'\t'), (err) => {
        if (err) throw err
        console.log('Conversion done.')
    })
})