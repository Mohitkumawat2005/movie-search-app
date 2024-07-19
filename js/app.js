const moivesection = document.querySelector("#moive-section");

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchbox = document.querySelector("#search-box")

searchbox.addEventListener(
    "keyup",
    () =>{
        fetchmovie(searchbox.value);
    }
)
const fetchmovie = async (name= "") =>{
    moivesection.innerHTML = "";
    let response;
    if(name == ""){
         response = await fetch(APIURL);
    }
    else{
        response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`)
    }
    if(response.status == 200){
        const data = await response.json();
        for(d of data.results){
            const col = document.createElement("div");
            col.classList.add("col-lg-3" ,"col-md-4","col-6" )
            col.innerHTML = `
          <div class="position-relative overflow-hidden item">
            <img width="100%; height = "450px" 
            src="https://image.tmdb.org/t/p/w1280${d.poster_path}" alt="">
            <div class="position-absolute bg-white contant-box">
             <div class="d-flex justify-content-between">
              <h3>${d.title}</h3>
              <h4 class="text-warning">${d.vote_average}</h4>
             </div>
             <h5>overview</h5>
             <p>${d.overview}</p>
          </div>
            </div>
        `;
          moivesection.append(col);
        }
           
    }
}
fetchmovie();
