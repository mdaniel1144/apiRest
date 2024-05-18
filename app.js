const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '96869568d2mshf0c9200061cf01ap1d03adjsn2e877da38a04',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

app.get('/movie', async (req, res) => {

   try{
        const apiRes = await fetch(url , options)
   
        if (!apiRes.ok)
            throw new Error(`HTTP Error status:${apiRes.status}`)
        const data = await apiRes.json();
        res.json(data)
    }
    catch(error)
    {
        console.error(`fetch error ${error}`)
        res.status(500).send('internal server error')
    }
})

//app.get('/countries', async (req, res) => {

 //   try{
 //   const apiRes = await fetch('https://restcountries.com/v2/all?fields=name,flag,nativeName')
//
  //  if (!apiRes.ok)
 /////       throw new Error(`HTTP Error status:${apiRes.status}`)
 //   const data = await apiRes.json();

 //   res.json(data)
 //   }
  //  catch(error)
 //   {
  //      console.error(`fetch error ${error}`)
 //       res.status(500).send('internal server error')
  ////  }
//})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})