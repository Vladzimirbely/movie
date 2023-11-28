function Header() {  
    async function asyncCall() {
        const mainTitle = document.querySelector('.main__title');
        const mainYear = document.querySelector('.main__year');
        const imgBlock = document.querySelector('.main__img-block');
        const input = document.querySelector('.header__input');
        const mainGenre = document.querySelector('.main__genre');
        const mainActors = document.querySelector('.main__actors');

        const url = `https://www.omdbapi.com/?apikey=7133a9eb&t=${input.value}`;
        const res = await fetch(url);
        const data = await res.json(); 

        if (input.value === '') {
            mainTitle.textContent = 'Please, enter the movie title';
            mainYear.textContent = '';
            imgBlock.innerHTML = '';
            mainGenre.textContent = '';
            mainActors.textContent = '';
        } else if (data.Error === 'Movie not found!') {
            mainTitle.textContent = 'Movie not found!';
            mainYear.textContent = '';
            imgBlock.innerHTML = '';
            mainGenre.textContent = '';
            mainActors.textContent = '';
        } else {
            mainTitle.textContent = `Title: ${data.Title}`;
            mainYear.textContent = `Year: ${data.Year}`;
            imgBlock.innerHTML = `<img src="${data.Poster} alt="movie"></img>`;
            mainGenre.textContent = `Genre: ${data.Genre}`;
            mainActors.textContent = `Actors: ${data.Actors}`;
        }
    }

    window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            asyncCall();
        }
    })

    return(
        <div className="container">
            <header className="header">
                <h1 className="header__title">Search for a movie:</h1>
            </header>
            <div className="header__search">
                <input className="header__input"></input>
                <button onClick={asyncCall} className="header__btn-search">Search</button>
            </div>
        </div>
    )
}

export default Header;
