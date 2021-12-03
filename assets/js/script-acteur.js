/* eslint-disable */ 
let api = '8a6c7fe283f2a91d936ae29cb5082fbf';
let lien = new URL(location.href);
let acteur = lien.searchParams.get("id");
let media= lien.searchParams.get("media")??'movie';
let url = `https://api.themoviedb.org/3/person/${acteur}?api_key=${api}&language=fr-FR`; //recuperer les info de l acteur//
let url2 = `https://api.themoviedb.org/3/person/${acteur}/movie_credits?api_key=${api}&language=en-US`; //recuperer la filmographie//
let url3 = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${api}&language=fr-FR`;

fetch(url).then(function(response) {
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
        
        // Modification du nom de l'acteur
        title = document.querySelector('.acteur-header-h1');
        title.textContent = json.name;//json pourrait s'appeler autrement//

        //Modification de la biographie
        para = document.querySelector('.acteur-header-p');
        if (json.biography == "") {
            para.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sunt aspernatur architecto asperiores possimus, excepturi magni natus, iure nesciunt perspiciatis odit deleniti fuga amet vero, laudantium ea quo odio minima?";
        }
        else {
            
            para.textContent = json.biography;
        }

        //Modification de la photo
        photo = document.querySelector('.acteur-header-img');
        photo.src = "https://image.tmdb.org/t/p/w500/"+json.profile_path;
    });
} else {
  console.log("Attendu format JSON");
};
});


fetch(url2).then(function(response) {
    let contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) {
        cards = document.querySelector(".acteur-filmo-card");
        for (i=0; i< json.cast.length; i++) {
            if (json.cast[i].poster_path == null) {
                source = "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ;

            }
            else {
                source = "https://image.tmdb.org/t/p/original/"+json.cast[i].poster_path;
            }
            cards.innerHTML += '<div class="acteur-filmo-card-background">'+
            '<a href="lecteur.html?id='+json.cast[i].id+'&media='+media+'" class="filmographie">'+
            '<img src="'+source+'" class="acteur-filmo-card-row" alt="Film1">'+
            '</a>'+
            '</div>';
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