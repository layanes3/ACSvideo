/* eslint-disable */ 
api = '8a6c7fe283f2a91d936ae29cb5082fbf';

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=fr-FR`


fetch(url).then(function(response) {
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {

        genres = document.querySelectorAll('.lecteur-kind');
        genres2 = document.querySelectorAll('.genre');
        for (i=0; i < json.genres.length; i++){
            genres[i].textContent = json.genres[i].name;
            genres[i].href = 'liste.html?genre='+json.genres[i].name;
        }
        for (i=0; i < genres2.length; i++){
            genres2[i].textContent = json.genres[i].name;
            genres2[i].href = 'liste.html?genre='+json.genres[i].name;
        }
    });
} else {
  console.log("Attendu format JSON");
};
});