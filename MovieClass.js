class MovieClass{

#title
#image
#year
#rating

constructor(title , image , year , rating){
    this.#title = title;
    this.#image = image;
    this.#year = year;
    this.#rating = rating;
}

get title()
{return this.#title}
get image()
{return this.#image}
get year()
{return this.#year}
get rating()
{return this.#rating}

set title(newTitle)
{this.#title = newTitle}
set image(newImage)
{this.#image = newImage}
set year(newYear)
{this.#year = newYear}
set rating(newRating)
{this.#rating = newRating}
}

//export default CountryClass;