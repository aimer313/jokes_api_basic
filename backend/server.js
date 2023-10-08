import express from  'express'; // async but require sync

const app = express()


app.get('/' , (req,res) => {

    res.send('Hello Backend Saquib Abbas')

})


app.get('/api/jokes' , (req,res) => {
    const jokes = [

        
            {
              "id": "1",
              "title": "A Tom",
              "content": "Cruise"
            },
            {
              "id": "2",
              "title": "Maria",
              "content": "Sharapova"
            },
            {
              "id": "3",
              "title": "Robert",
              "content": "Downey Jr."
            }
        ]
        res.send(jokes)

    
})

// port = 3000;

app.listen(3000 , () => {
    console.log('Server running at port : ' , 3000)
}) 

