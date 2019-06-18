const fs = require('fs')
const path = require('path')
const { FILES_PATH } = require('../config/path')
const { FILE_MIME_TYPE } = require('../config/config')

const getFile = async(req, res) => { 
    const { filePath } = req

    console.info('File Path:', filePath)

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err, fileStream){
            if(!err){
                const data = JSON.parse(fileStream)
                console.log('fileJson', data)
                res.send({
                    status: true,
                    data: data
                  })
            }else{
                res.status(500).send({
                    status: false,
                    error: err
                })
            }       
        })
    } else {
      res.status(404).send({
        status: false,
        error: 'File does not exist'
      })
    }
}


const update = async(req, res) => {

    const {filePath} = req

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err, fileStream){
            if(!err){
                const fileJson = JSON.parse(fileStream)
                console.log('fileJson', fileJson)
            }else{
                res.status(500).send({
                    status: false,
                    error: err
                  })
            }
            
        })
    } else {
        const scoreId = req.params.scoreId
        const editData = req.body
        let jsonStudentData = {
            "courses": {
                "calculus":{
                    "quizzes":{
                    }
                }
            }
        }

        console.log("scoreId", scoreId)
        console.log("editData", editData)
        jsonStudentData["courses"]["calculus"]["quizzes"][scoreId] = {}
        for (let key in editData) {
            jsonStudentData["courses"]["calculus"]["quizzes"][scoreId][key] = editData[key]
          }
        
          console.log('jsonStudentData', jsonStudentData)
        const strStudentData = JSON.stringify(jsonStudentData)
        // write to a new file named 2pac.txt
        fs.writeFile(filePath, strStudentData, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('Data saved!');
        res.send({
            status: true,
          })
        });
    }
}

const remove = async(req, res) => {
    const filePath = req.filePath
    
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        res.send({
            status: true,
          })
    }else {
        res.status(404).send({
        status: false,
        error: 'File does not exist'
        })
    }
}

const queryFilter = async(req, res, next) =>{
    const fileName = req.params.id
    const filePath = path.join(FILES_PATH + fileName + '.' + FILE_MIME_TYPE)

    req.filePath = filePath
    next()
}

module.exports = {
    getFile,
    update,
    remove,
    queryFilter
}