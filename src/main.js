import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
// menu mobile



setTimeout(function(){
  (function(){
      'use strict';
    
      class Menu {
        constructor(settings) {
          this.menuNode = settings.menuNode;
        }
        
        toggleMenuState(className) {      
          if (typeof className !== 'string' || className.length === 0) {
            return console.log('you did not give the class for toggleState function');
          } 
          return  this.menuNode.classList.toggle(className);
        }
      }
    
      const jsMenuNode = document.querySelector('.menu');
      const demoMenu = new Menu ({
        menuNode: jsMenuNode
      });
      
      function callMenuToggle(event) {
        demoMenu.toggleMenuState('menu_activated');
      }
      
      jsMenuNode.querySelector('.menu__hamburger').addEventListener('click', callMenuToggle);
    })();



}, 1000);

// Requests de ALbuns e Musicas



const Discografia = document.querySelector('#discograph');
const Music = document.querySelector('#musicas');



setTimeout(function () {
  // console.log(MusicasList);
  MusicasList.forEach(result => {
    console.log(result);
    if (result.trackName == undefined) {
      console.log("Bugado");
    } else {
      Music.insertAdjacentHTML('beforeend', `
      <div class="music-area row col-12 col-md-12 col-sm-12 col-lg-4">
        <div class="music-img col-4">
          <img src="${result.artworkUrl100}" />
        </div>
        <div class="music-name col-8">
          <h4 class="text-center">${result.trackName}</h4>
          <video controls name="media" class="video-setup">
            <source src="${result.previewUrl}" type="audio/x-m4a">
          </video>
        </div>
      </div>`)
    }
  });
  // console.log(AlbunsList);
  AlbunsList.forEach(result => {
    console.log(result);
    if (result.collectionName == undefined) {
      console.log("Bugado");
    } else {
      Discografia.insertAdjacentHTML('beforeend', `    
      <div class="album-area row col-12 col-md-12 col-sm-12 col-lg-4">
        <div class="album-img  col-4 ">
          <img src="${result.artworkUrl100}"/>
        </div>
        <div class="album-name col-8">
          <h4 class="text-center">${result.collectionName}</h4>
          <p class="text-center"><a class="link-album text-center" href="${result.collectionViewUrl}" target='_blank'>Acesse o album</a></p>
          <p class="text-center">${result.trackCount} Musicas</p>
        </div>
      </div>`)
    }
  });

}, 1)






