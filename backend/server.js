import express from 'express';
import cors from 'cors'

const app = express();
//app.use(express.json())

app.use(cors())
// app.get('/',(req,res)=>{
//     res.status(200).send(`Server Ready`)
// })


//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third Joke',
            content: 'This is the third joke'
        },
        {
            id: 4,
            title: 'A Fourth Joke',
            content: 'This is the fourth joke'
        },
        {
            id: 5,
            title: 'A Fifth Joke',
            content: 'This is the fifth joke'
        }
    ];
    res.json(jokes);
})



const PORT = process.env.PORT || 3000

app.listen(PORT , ()=>{
    console.log(`Server running on Port : ${PORT}`);
})