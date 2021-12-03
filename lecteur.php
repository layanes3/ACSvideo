<?php
    header('X-Frame-Options: GOFORIT'); 
?>
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ACS Vidéo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="./assets/css/lecteur-style.css">
    <!-- <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> -->
    <script src="./assets/js/script.js" defer></script>
    <script src="./assets/js/script-lecteur.js" defer></script>
  </head>
  <body class="lecteur-body">
    <!-- Top Navigation Menu -->
    <nav class="lecteur-topnav">
      <img id="logo" src="assets/images/logo.png" alt="" srcset="">

      <!--menu drop apparait quand on appuit sur le bouton-->
      <div class="lecteur-menu">
        <div class="lecteur-menu-content">
          <a href="compte.html">
            <img class="lecteur-menu-picture" src="assets/images/avatar.png" alt="">
          </a>
          <h3>Identifiant</h3>
          <div class="lecteur-menu-search-inside">
            <img class="search_bar" src="assets/images/barre_derecherche.svg" alt="search bar">
            <input type="text" name="search" class="search-input1">
          </div>
          <h3>Favoris</h3>
          <a href="#" class="lecteur-kind">Action</a>
          <a href="#" class="lecteur-kind">Aventure</a>
          <a href="#" class="lecteur-kind">Animation</a>
          <a href="#" class="lecteur-kind">Comedie</a>
          <a href="#" class="lecteur-kind">Crime</a>
          <a href="#" class="lecteur-kind">Documentaire</a>
          <a href="#" class="lecteur-kind">Drame</a>
          <a href="#" class="lecteur-kind">Familiale</a>
          <a href="#" class="lecteur-kind">Fantastique</a>
          <a href="#" class="lecteur-kind">Guerre</a>
          <a href="#" class="lecteur-kind">Histoire</a>
          <a href="#" class="lecteur-kind">Horreur</a>
          <a href="#" class="lecteur-kind">Musique</a>
          <a href="#" class="lecteur-kind">Mystère</a>
          <a href="#" class="lecteur-kind">Romance</a>
          <a href="#" class="lecteur-kind">Science-fiction</a>
          <a href="#" class="lecteur-kind">Téléfilm</a>
          <a href="#" class="lecteur-kind">Thriller</a>
          <a href="#" class="lecteur-kind">Western</a>
        </div>
      </div>
        <div class="lecteur-menu-search-outside">
          <img class="search-bar" src="assets/images/barre_derecherche.svg" alt="search bar">
          <input type="text" name="search" class="search-input2">
        </div>
      <!--message d'alerte-->
      <div class="lecteur-menu-alert lecteur-none">
        <span class="lecteur-closebtn">&times;</span> 
        <strong>Erreur !</strong> Aucun résultat trouvé
      </div>
      <a href="#" class="lecteur-icon">
          <div class="div-btn-genre">
            <img class="btn-genre" src="assets/images/btn-genre.svg" alt="button genre">
          </div>
          <img class="btn_burger" src="assets/images/btn_burger_ssbar.svg" alt="button burger">
          <div class="icon-bars">
            <div class="lecteur-bar1"></div>
            <div class="lecteur-bar2"></div>
            <div class="lecteur-bar3"></div>
          </div>
      </a>
    </nav> <!--fin de la nav-->
    <main class="contenu">
    <header class="lecteur-bg">
      <div class="lecteur-contenu">
        <div class="lecteur-titlezone">
          <h1 class="lecteur-movietitle">Titre</h1>
          <h2 class="lecteur-movieepisode">Episode#</h2>
          <iframe width="1500" height="300" src="" class="player2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="lecteur-parazone">
          <h1>X</h1>
          <p>Paramètres</p>
        </div>
      </div>
      <div class="lecteur-playzone">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 lecteur-playicon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </header>
    <section class="lecteur-synopsis">
      <div class="lecteur-synopsisleft">
        <h2>Synopsis</h2>
        <p class="lecteur-synopsispara">
          Synopsis : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam cum laborum deleniti. Placeat, ipsa aspernatur. Eaque iste obcaecati nobis sit animi accusantium qui commodi mollitia, earum ipsa libero inventore!
        </p>
        <p class="lecteur-realisateur">Réalisateurs : </p>
        <p class="lecteur-producteur">Productions : </p>
      </div>
      <div class="lecteur-synopsisright">
        <p class="lecteur-genre">Genre : </p>
        <p class="lecteur-annee">2003</p>
        <p class="lecteur-langueo">Langue originale</p>
        <p class="lecteur-duree">Durée</p>
        <p class="lecteur-notemoy">Note moyenne</p>
        <p> </p>
        <p class="lecteur-note">Notation</p>
        <p class="noteimg">****</p>
        <p  class="lecteur-commentaires">Commentaire</p>
      </div>
    </section>
    <section class="lecteur-casting">
      <h2>Casting</h2>
      <div class="lecteur-castingcontainer">
        <div class="lecteur-castingcards">
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a> 
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">.
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a> 
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
          <div>
            <a href="#" class="acteurlink">
              <img class="lecteur-castingcard">
            </a>
            <a href="#" class="acteurlink2">
              <p class="lecteur-castingcardname">Nom de l'acteur</p>
              <p class="lecteur-castingcardchar">Rôle de l'acteur</p>
            </a>
          </div>
        </div>
      </div>  
    </section>
      <section class="lecteur-episodes lecteur-episodes-scroll">
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 2</p>
          </a>
        </div>
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 3</p>
          </a>
        </div>
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 4</p>
          </a>
        </div>
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 5</p>
          </a>
        </div>
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 6</p>
          </a>
        </div>
        <div class="lecteur-episodescontent">
          <a href="#" class="episodelinkimg">
            <img class="lecteur-episodescard">
          </a>
          <a href="#" class="episodelinktitle">
            <p class="lecteur-episodestitle">Episode 7</p>
          </a>
        </div>
      </section>
    </main>
    <footer class="lecteur-footer">
      <p>&copy copyright</p>
      <a href="#">Mentions légales</a>
      <a href="#">C.G.V.</a>
    </footer>
  </body>
</html>
        