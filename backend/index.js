import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//   res.send("Server is ready");
// })

// get a list of 10 jokes
app.get('/api/jokes', (req, res) =>{
  const jokes = [
    {
      id: 1,
      titil: "first joke",
      content: "Roses are red, the world is a mess. And worst of all, you're ignoring my texts."
    },
    {
      id: 2,
      title: "second joke",
      content: 'I don’t want to be corn-y ...but I miss you.'
    },
    {
      id: 3,
      title: "third joke",
      content: "Are you a phone? Because I’m addicted to you"
    },
    {
      id: 4,
      title: "fourth joke",
      content: "are  you pencil? because i want to erase your no from my life."
    },
    {
      id: 5,
      title: "fifth joke",
      content: "Do you belive in devils how they look like? yes, 'the President' "
    }
  ];
  res.send(jokes);
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> {
  console.log(`server at http://localhost:${port}`);
})
