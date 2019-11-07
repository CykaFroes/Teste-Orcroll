<template>
  <div class="menu">
    <nav class="menu__nav">
      <ul class="r-list menu__list">
        <li class="menu__group">
          <a href="#history" class="r-link menu__link" onclick="MenuBtn();">Historia da Banda</a>
        </li>
        <li class="menu__group">
          <a href="#discograph" class="r-link menu__link" onclick="MenuBtn();">Discografia</a>
        </li>
        <li class="menu__group">
          <a href="#musicas" class="r-link menu__link" onclick="MenuBtn();">Top Musicas</a>
        </li>
      </ul>
    </nav>
    <div class="menu__toggle">
      <button class="r-button menu__hamburger">
        <span class="m-hamburger">
          <span class="m-hamburger__label">Abrir menu</span>
        </span>
      </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "Navbar"
};


</script>