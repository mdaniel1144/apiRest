//import CountryClass from './CountryClass.js';

document.getElementById('fetchButton').addEventListener('click' , async ()=>{

const response = await fetch('http://localhost:3000/movie')

try{
    if(!response.ok)
    {
        throw new Error(`HTTP Error status:${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    const titles = data.map(country => country.title).join("\n")
    const images = data.map(country => country.image).join("\n")
    const years = data.map(country => country.year).join("\n")
    const ratings = data.map(country => country.rating).join("\n")


    const arrTitles = titles.split("\n")
    const arrImages = images.split("\n")
    const arrYears = years.split("\n")
    const arrRatings = ratings.split("\n")

    const arrMovies = []

    for (let i=0 ; i<arrTitles.length ; i++)
    {
        arrMovies.push(new MovieClass(arrTitles[i] ,arrImages[i] , arrYears[i] , arrRatings[i]))
    }
    console.log(arrMovies)


    const tableMovies = document.createElement('div');
    arrMovies.forEach(movie =>{
    
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')

        const imgElement = document.createElement('img')
        imgElement.classList.add('imgMovie')
        imgElement.src = movie.image;
        imgElement.alt = "Svg Image"

        const h3name = document.createElement('h3')
        h3name.innerText = movie.title

        const h3native = document.createElement('h3')
        h3native.innerText = ` Years: ${movie.year}\nRating: ${movie.rating}`

        cardContainer.appendChild(imgElement)
        cardContainer.appendChild(h3name)
        cardContainer.appendChild(h3native)

        tableMovies.appendChild(cardContainer)
    })
    showMovies(tableMovies)
    //document.getElementById('FinderMovies').style.display = "none";
   // document.getElementById('svgContainer').style.display = "block";
    }
    catch(error)
    {
        console.log(`fetch Error ${error}`)
    }
})

function showMovies(tableMovies)
{
    const spinner = document.createElement('div')
    spinner.classList.add('spinner')
    spinner.setAttribute("id", "spinner");

    document.getElementById('FinderMovies').remove();
    document.body.appendChild(spinner)
    setTimeout(v=>{
        document.getElementById('spinner').remove();
        document.getElementById('svgContainer').appendChild(tableMovies);
    } , 6000)
    
    
}