const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "	Shéyaa Bin Abraham-Joseph",
    birthLocation: "Plaistow, London, England",
  },

  "chance the rapper": {
    age: 29,
    birthName: "		Chancelor Bennett",
    birthLocation: "Chicago, Illinois, U.S.",
  },

  'raftar': {
    age: 34,
    birthName: "	Dilin Nair",
    birthLocation: "Kerala India",
  },

  "honey singh": {
    age: 39,
    birthName: "hirdesh singh",
    birthLocation: "karampura New Delhi India",
  },

  'Unknown': {
    age: NaN,
    birthName: 'Dont have this data',
    birthLocation: 'Dont know' 
  }
};

app.get("/", (request, responce) => {
  responce.sendFile(__dirname + "/index.html");
});

app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase()
  // responce.json(rappers)
  if(rappers[rappersName]){
    response.JSON(rappers[rappersName])
  }
  else{
    response.JSON(rappers['Unknown'])
  }
});

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}! You better go catch it!`);
});
