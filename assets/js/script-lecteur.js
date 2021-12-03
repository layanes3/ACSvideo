/* eslint-disable */ 
let api = '8a6c7fe283f2a91d936ae29cb5082fbf';
let lien = new URL(location.href);
let film= lien.searchParams.get("id");
let media= lien.searchParams.get("media");
let saisonep = lien.searchParams.get("s")+lien.searchParams.get("e");;

let url = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${api}&language=fr-FR`
let url2 = `https://api.themoviedb.org/3/${media}/${film}?api_key=${api}&language=fr-FR`;
let url3 = `https://api.themoviedb.org/3/${media}/${film}/credits?api_key=${api}&language=fr-FR`;
let url4 = `https://api.themoviedb.org/3/movie/${film}/watch/providers?api_key=${api}`;
let url5 = `https://api.themoviedb.org/3/movie/${film}/videos?api_key=${api}&language=fr-FR`;




fetch(url).then(function(response) {
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {

        genres = document.querySelectorAll('.lecteur-kind');

        for (i=0; i < json.genres.length; i++){
            genres[i].textContent = json.genres[i].name;
            genres[i].href = 'genre.html';
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
        titre = document.querySelector('.lecteur-movietitle');
        synopsis = document.querySelector('.lecteur-synopsispara');
        producteur = document.querySelector('.lecteur-producteur');
        genre = document.querySelector('.lecteur-genre');
        annee = document.querySelector('.lecteur-annee');
        langueo = document.querySelector('.lecteur-langueo');
        duree = document.querySelector('.lecteur-duree');
        notemoy = document.querySelector('.lecteur-notemoy');
        noteimg = document.querySelector('.noteimg');
        note = document.querySelector('.lecteur-note');
        commentaires = document.querySelector('.lecteur-commentaires');
        background = document.querySelector('.lecteur-bg');
        background.style.background = "url('https://image.tmdb.org/t/p/original/"+json.backdrop_path+"') no-repeat scroll top / 60%";
        background.style.backgroundSize = "contain";
        titre.textContent = "Titre : "+json.title;
        synopsis.textContent = "Synopsis : "+json.overview;
        for (i=0; i <json.production_companies.length ; i++) {
          producteur.textContent += " - "+json.production_companies[i].name;
        }
        for (i=0; i <json.genres.length ; i++) {
          genre.textContent +=  " - "+json.genres[i].name+" ";
        }
        if (json.release_date == null) {
          date = json.first_air_date.split('-');
        } 
        else {
          date = json.release_date.split('-');
        }
        annee.textContent = "Date de sortie : "+date[2]+"/"+date[1]+"/"+date[0];
        langueo.textContent = "Langue originale : "+json.original_language;
        duree.textContent = "Durée : "+json.runtime+" min";
        notemoy.textContent = "Note moyenne : "+json.vote_average+"/10";
        if (json.vote_average >= 9) {
          noteimg.innerHTML = "♥♥♥♥♥";
        } else if (json.vote_average >= 7){
          noteimg.textContent = "♥♥♥♥";
        }else if (json.vote_average > 5){
          noteimg.textContent = "♥♥♥";
        }else if (json.vote_average >= 3){
          noteimg.textContent = "♥♥";
        }else if (json.vote_average > 1){
          noteimg.textContent = "♥";
        }else if (json.vote_average >= 0){
          noteimg.textContent = "";
        }
        note.textContent = "Nombres de notes : "+json.vote_count;
        commentaires.textContent = "Commentaires : "+json.title;

        idserie = film;
        saison = json.seasons.length;
        episodes = json.seasons[0].episode_count;
        urlsaisonep = `https://api.themoviedb.org/3/tv/${idserie}/season/${saison}?api_key=${api}&language=fr-FR`;

        let imgepisode = document.querySelectorAll('.lecteur-episodescard');
        let titleepisode = document.querySelectorAll('.lecteur-episodestitle');
        let linkepisodeimg = document.querySelectorAll('.episodelinkimg');
        let linkepisodetitle = document.querySelectorAll('.episodelinktitle');


        fetch( urlsaisonep).then(function(response) {
          let contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json2) {
              console.log(json2);
              for (i=0; i < episodes; i++) {
                imgepisode[i].src = "https://image.tmdb.org/t/p/original/"+json2.episodes[i].still_path;
                titleepisode[i].textContent = json2.episodes[i].name;
                linkepisodeimg[i].href = "lecteur.html?id="+json2.episodes[i].id;
                linkepisodetitle[i].href = "lecteur.html?id="+json2.episodes[i].id;
              }
            });
        } else {
          console.log("Attendu format JSON");
        };
        });


      
    });
  } else {
    console.log("Attendu format JSON");
  };
});

fetch(url3).then(function(response) {
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
    json.crew.forEach(data => {
      if (data.job == "Producer") {
        realisateur = document.querySelector('.lecteur-realisateur');
        realisateur.textContent += " - "+data.name;
      }
        castingimg = document.querySelectorAll('.lecteur-castingcard');
        castingname = document.querySelectorAll('.lecteur-castingcardname');
        castingchar = document.querySelectorAll('.lecteur-castingcardchar');
        castinglink = document.querySelectorAll('.acteurlink');
        castinglink2 = document.querySelectorAll('.acteurlink2');
        for (i=0; i < castingimg.length; i++) {
          castingname[i].textContent = json.cast[i].name;
          castingchar[i].textContent = json.cast[i].character;
          castinglink[i].href = "acteur.html?id="+json.cast[i].id;
          castinglink2[i].href = "acteur.html?id="+json.cast[i].id;
          if (json.cast[i].profile_path == null){
            castingimg[i].src ="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
          } else{
            castingimg[i].src = "https://image.tmdb.org/t/p/original/"+json.cast[i].profile_path;
          }
        }
    });
    });
} else {
  console.log("Attendu format JSON");
};
});


fetch(url5).then(function(response) {
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      let key = json.results[0].key

      let container = document.querySelector('.lecteur-titlezone');
      let urlyt = `https://www.youtube.com/embed/${key}`;

      console.log(urlyt);
      container.innerHTML += `<iframe class="player2"  src="${urlyt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });
} else {
  console.log("Attendu format JSON");
};
});

episodetitle = document.querySelector(".lecteur-movieepisode");
episodezone = document.querySelector(".lecteur-episodes-scroll");
if (media == "movie") {
  episodetitle.style.display = "none";
  episodezone.style.display = "none";
}
