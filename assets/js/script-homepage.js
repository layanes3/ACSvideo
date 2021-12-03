/* eslint-disable */ 
let api = '8a6c7fe283f2a91d936ae29cb5082fbf';
let media = 'movie';

let url = `https://api.themoviedb.org/3/trending/${media}/day?api_key=${api}&language=fr-FR`;
let url2 = `https://api.themoviedb.org/3/${media}/top_rated?api_key=${api}&language=fr-FR&page=1`;
let url3 = `https://api.themoviedb.org/3/${media}/popular?api_key=${api}&language=fr-FR&page=1`;
let url4 = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${api}&language=fr-FR`;
let url5 = `https://api.themoviedb.org/3/person/popular?api_key=${api}&language=fr-FR&page=1`;

switchinput = document.querySelector('.homepage-tendances-switchon');
switchinput.addEventListener('click', switchtoggle);

function switchtoggle(){
    if (media =="movie") {
        media ="tv";
        switchinput.setAttribute("src", "assets/images/btn-film-serie.svg");
        url = `https://api.themoviedb.org/3/trending/${media}/day?api_key=${api}&language=fr-FR`;
        url2 = `https://api.themoviedb.org/3/${media}/top_rated?api_key=${api}&language=fr-FR&page=1`;
        url3 = `https://api.themoviedb.org/3/${media}/popular?api_key=${api}&language=fr-FR&page=1`;
        url4 = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${api}&language=fr-FR`;
        
    }
    else {
        media ="movie";
        switchinput.setAttribute("src", "assets/images/btn-serie-mobile.svg");
        url = `https://api.themoviedb.org/3/trending/${media}/day?api_key=${api}&language=fr-FR`;
        url2 = `https://api.themoviedb.org/3/${media}/top_rated?api_key=${api}&language=fr-FR&page=1`;
        url3 = `https://api.themoviedb.org/3/${media}/popular?api_key=${api}&language=fr-FR&page=1`;
        url4 = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${api}&language=fr-FR`;
    }
    requete();
}

window.onload = function() {

requete();
};

function requete() {


    fetch(url).then(function(response) {
        let contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
          let titles = document.querySelectorAll(".original_title");
          // let views = document.querySelectorAll(".views");
          let posters = document.querySelectorAll(".homepage-tendances-images");
          // let links = document.querySelectorAll(".movie_link");
          let linksimg = document.querySelectorAll(".movie_linkimg");
          for (i=0; i < titles.length; i++) {
              // links[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;
              linksimg[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;
              // views[i].textContent = json.results[i].popularity;
              posters[i].src = "https://image.tmdb.org/t/p/w500/"+json.results[i].poster_path;
              titles[i].textContent = json.results[i].title??json.results[i].name;
          }
          });
      } else {
        console.log("Attendu format JSON");
      };
      
      });
      
      fetch(url2).then(function(response) {
          let contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json) {
              let titles = document.querySelectorAll('.original_titlerank');
              // let ranks = document.querySelectorAll('.rank');
              let posters = document.querySelectorAll(".homepage-rank-images");
              let links2 = document.querySelectorAll(".movie_link2");
              let linksimg2 = document.querySelectorAll(".movie_link2img");
            for (i=0; i < titles.length; i++) {
              titles[i].textContent = json.results[i].title;
              // ranks[i].textContent = json.results[i].vote_average+"/10";
              posters[i].src = "https://image.tmdb.org/t/p/original/"+json.results[i].poster_path;
              links2[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;
              linksimg2[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;
           }
            });
        } else {
          console.log("Attendu format JSON");
        };
        
        });
      
      
        fetch(url3).then(function(response) {
          let contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json) {
            let titles = document.querySelectorAll(".original_titlepopularity");
            // let popularity = document.querySelectorAll('.popularity');
            let posters = document.querySelectorAll(".homepage-popularity-images");
            let links3 = document.querySelectorAll(".movie_link3");
            let linksimg3 = document.querySelectorAll(".movie_link3img");
            for (i=0; i < titles.length; i++) {
                titles[i].textContent = json.results[i].title;
                // popularity[i].textContent = json.results[i].popularity;
                posters[i].src = "https://image.tmdb.org/t/p/original/"+json.results[i].poster_path;
                links3[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;;
                linksimg3[i].href = "lecteur.html?id="+json.results[i].id+"&media="+media;;
            }
            });
        } else {
          console.log("Attendu format JSON");
        };
        
        });
      
      
      
      
      fetch(url4).then(function(response) {
        let contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
      
              genres = document.querySelectorAll('.lecteur-kind');
              genres2 = document.querySelectorAll('.genres');
              for (i=0; i < json.genres.length; i++){
                  genres[i].textContent = json.genres[i].name;
                  genres[i].href = 'genre.html';
              }
              for (i=0; i < genres2.length; i++){
                  genres2[i].textContent = json.genres[i].name;
                  genres2[i].href = 'genre.html';
              }
          });
      } else {
        console.log("Attendu format JSON");
      };
      
      });
      
      fetch(url5).then(function(response) {
          let contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json) {
                  actorName = document.querySelectorAll('.actor_name');  
                  actorImg = document.querySelectorAll('.actor_img');
                for (i=0; i < actorName.length; i++){
                    actorName[i].href = "acteur.html?id="+json.results[i].id;
                    actorName[i].textContent = json.results[i].name;
      
                    if (json.results[i].profile_path == '' || json.results[i].profile_path == null){
                      actorImg[i].src = actorImg[i].src;
                    }else {
                      actorImg[i].src = "https://image.tmdb.org/t/p/w500/"+json.results[i].profile_path;
                    }
                }
        
            });
        } else {
          console.log("Attendu format JSON");
        };
        
        });

}
