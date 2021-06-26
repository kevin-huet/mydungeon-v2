<template>
  <div id="body-pd">

    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" class="nav-link text-secondary">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg>
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  <header class="header" id="header">
    <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
    <div class="header_img"> <img src="@/assets/logo.png" alt=""> </div>
  </header>

  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div> <a href="#" class="nav_logo"><img style="max-width: 42px" src="@/assets/bimeo-logo.png"></a>
        <div class="nav_list">
          <a href="#" class="nav_link active"><i class='bx bx-grid-alt nav_icon'></i><span class="nav_name">Dashboard</span> </a>
          <a href="#" class="nav_link"><i class='bx bx-abacus nav_icon'></i><span class="nav_name">Gestion du projet</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Equipe</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Messagerie</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Jalon</span> </a>
          <a href="#" class="nav_link"> <i class='bx bxs-cube nav_icon'></i> <span class="nav_name">Visioneuse</span> </a>
          <a href="#" class="nav_link"> <i class='bx bxs-cube nav_icon'></i> <span class="nav_name">Stockage IFC</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Ged</span> </a>
          <a href="#" class="nav_link"><i class='bx bx-note nav_icon'></i><span class="nav_name">Créer Postit</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-notepad nav_icon'></i> <span class="nav_name">Tdb Postit</span> </a>
          <a href="#" class="nav_link"> <i class='bx bxs-book nav_icon'></i> <span class="nav_name">Convention Bim</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-check-square nav_icon'></i> <span class="nav_name">Visas</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-history nav_icon'></i> <span class="nav_name">Activité</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-share-alt nav_icon'></i> <span class="nav_name">Partage de fichiers</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Conso</span> </a>
        </div>
      </div>
      <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">Deconnexion</span> </a>
    </nav>
  </div>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    const bodypd = document.getElementById(bodyId)
    const headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('mouseover', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('nav-bar', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink () {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))

// Your code to run since DOM is loaded and ready
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 76px;
  --first-color: #0a2843;
  --first-color-light: #AFA5D9;
  --white-color: #F7F6FB;
  --body-font: 'Nunito', sans-serif;
  --normal-font-size: 0.7rem;
  --z-fixed: 100
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
*,
::before,
::after {
  box-sizing: border-box
}
a {
  color:white!important;
  text-decoration: none!important;
}

.header-link {
  color: var(--first-color)!important;
  font-size: 1.1rem!important;
}

body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 1rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: .5s
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--white-color);
  z-index: var(--z-fixed);
  transition: .4s
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden
}

.header_img img {
  width: 40px
}

.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  background-image: linear-gradient(180deg,#0b3b59 10%,#0f5b98);
  padding: .5rem 1rem 0 0;
  transition: .4s;
  z-index: var(--z-fixed)
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: .5rem 0 .5rem 1.5rem
}

.nav_logo {
  margin-bottom: 1.5rem;
  margin-left: -7px;
}

.nav_logo-icon {
  font-size: 1rem;
  color: var(--white-color)
}

.nav_logo-name {
  color: var(--white-color);
  font-weight: 700
}

.nav_link {
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 0.1rem;
  transition: .3s
}

.nav_link:hover {
  color: var(--white-color)
}

.nav_icon {
  font-size: 1.25rem
}

.show {
  left: 0
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem)
}

.active {
  color: var(--white-color)
}

.active::before {
  content: '';
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: var(--white-color)
}

.height-100 {
  height: 100vh
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem)
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem)
  }

  .header_img {
    width: 40px;
    height: 40px
  }

  .header_img img {
    width: 45px
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0
  }

  .show {
    width: calc(var(--nav-width) + 156px)
  }

  .body-pd {
    padding-left: calc(var(--nav-width) + 188px)
  }
}
</style>
