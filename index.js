 const express = require('express');

 const app = express();

  const data =[
    {"id" : 1,
      "name" :"hajar"
    },
    {"id" : 2,
      "name" :"Temi"
    },
    {"id" : 3,
      "name" :"John"
    },
    {"id" : 4,
      "name" :"Olamide"
    },
    {"id" : 5,
      "name" :" Lanre"
    }
];

app.get('/',function(req,res){
  res.send('Hi Hajar!');
})
app.get('/api/data',(req,res) =>{
  res.send(data);
})
app.get('/api/data/:id',(req,res)=>{
  const person = data.find(b=>
      b.id == req.params.id
  )
  if(!person){
      return res.send('not found');
  }
  
  res.send(person);
})
app.post('/api/numbers',(req,res)=>{
  const newNumber = req.body;
  numbers.push();
})
app.listen(5000,function(){
  console.log('listening on port 5000');
})