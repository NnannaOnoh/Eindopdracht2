log = console.log

let ftr = document.getElementById("footer");
let cntnt = document.getElementById("content");
let ull = document.getElementById("content").getElementsByTagName("ul")[0];
let ull1 = document.getElementsByTagName("ul");
let grd = document.getElementById("grid");
/* let li = document.getElementById("li"); */
let rad = document.getElementsByName("radiobutton");

let li = document.createElement("li")
let a = document.createElement("a");
let img = document.createElement("img");

const srchYear = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]

  ftr.addEventListener('click', function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  log(ftr);
  log(ull);
  /* log(lii[0]); */

  /* ftr.addEventListener('click', function(){
  cntnt.removeChild(ull);
  }); */

  for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
    /* alert("change " + (this.value).toUpperCase()) */
    var radvalue = (this.value).toUpperCase()
    alert(radvalue)
    log(radvalue)
    filteredMovies = getMoviesFilteredByTitle(movies, radvalue)
    });
  }

  const getMoviesFilteredByTitle = (movies, radvalue) => {
    const filteredMovies = movies.filter(movie => {
      const movieTitle = movie.Title.toUpperCase();
      return movieTitle.includes(radvalue);
    }); 
    if (radvalue == "DEFAULT") {
      log(movies)
      addMoviesToDom(movies)
    } else if (radvalue == "NEW") {
      const filteredMovies = movies.filter(movie => {
      const movieTitle = movie.Year;
      /* alert(movieTitle) */
      return srchYear.includes(movieTitle);
      });
      addMoviesToDom(movies); 
    } else {
      addMoviesToDom(filteredMovies);      
    } 
    return(filteredMovies)    
  }
    


   /*  createNewContent(filteredMovies) */
  



  log(movies[1].Title)

  const createNewContent = movie => {
      

    li.classList.add = ("li")
    a.href = `https://www.imdb.com/title/${movie.imdbID}/`;
    img.src = (movie.Poster) + (" alt= Nothing to see here");

      li.appendChild(a);
      a.appendChild(img);

      
  /*     alert("wait") */
      log(ul)
      return li;
    
    } 
  
    
  

  

  
  const addMoviesToDom = moviesToShow => {
    // selecteer de UL
    const list = document.getElementById("ul");
    // Om te voorkomen dat de gefilterde films aan de huidige films worden geplakt: leeg de ul;
    list.innerHTML = "";
    const listItems = moviesToShow.map(createNewContent);

    log("toShow ", moviesToShow)
    
    listItems.forEach(listItem => {
      list.appendChild(listItem);
    });
   // Het onderstaande werkt ook, maar met een spread operator. Dat komt nog.
    // list.append(...listItems);
  };

  /* addMoviesToDom(Movies); */

  

  /* console.log(getMovieByTitle)
  
  //console.dir(document);
  
  
  for (let i = 0; i < arrayLength; i++){
  
    poster[i].setAttribute("href", "scr")
  }
  

function func() {
  var val = document.getElementsByName("radiobutton");
  if (type[0].checked) {
    var val = type[0].value;
    alert(val);
  }
  else if (type[1].checked) {
    var val = type[1].value;
    alert(val);
  }
  else if (type[2].checked) {
    var val = type[2].value;
    alert(val);
  }
} */

/* function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} */
