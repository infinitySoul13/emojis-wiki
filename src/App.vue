<template>
  <div id="app" class="h-100">
      <nav class="navbar navbar-dark bg-primary">
          <div class="container-sm container-fluid">
              <div class="row w-100 m-auto align-items-center justify-content-center">
                  <div class="col-sm-11 col-12 p-0 p-sm-2">
                      <div class="row w-100 m-auto align-items-center">
                          <div class="col-4 p-0">
                              <a class="navbar-brand d-flex" style="margin-right: auto" href="#">
                                  <img
                                          src="https://emojis.wiki/wp-content/themes/emoji-v4/images/emojiswiki_logo.svg"
                                          class="d-inline-block align-text-top"
                                          alt="logo"
                                  />
                              </a>
                          </div>
                          <div class="col-8 p-0">
                              <div class="row m-auto w-100 justify-content-end">
                                  <form class="d-flex w-75 d-none d-md-flex">
                                      <input class="emojis-wiki-search-input w-100 tw-outline-none tw-text-sm py-2 px-3 tw-rounded " style="border-radius: 8px" type="search" aria-label="Search"
                                             placeholder="Search Emojis..." name="s"
                                      />
                                      <input type="hidden" value="1" name="sentence" />
                                      <button aria-label="Favorite" class="search-button-wrap">
                                          <span class="search-button"></span>
                                      </button>
                                  </form>
                                  <button
                                          class="navbar-toggler p-1 my-auto mx-2"
                                          title="English"
                                          style="height: 44px; width: 44px; border-color: rgba(255,255,255,0.40)"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#navbarLang" aria-controls="navbarLang"
                                  >
                                      <img
                                              class="m-auto"
                                              src="/icons/lang.svg"
                                              alt="English"
                                      />
                                  </button>
                                  <button class="navbar-toggler d-block d-md-none p-1 tw-ml-2"
                                          style="height: 44px; width: 44px; color: white; border-color: rgba(255,255,255,0.40)"
                                          type="button" data-bs-toggle="collapse"
                                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                          aria-expanded="false" aria-label="Toggle navigation"
                                  >
                                      <span class="navbar-toggler-icon m-auto"  style="color: white"></span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="collapse navbar-collapse" id="navbarLang">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0" aria-labelledby="dropdownMenuButton1">
                      <li class="nav-link"><div @click="local='en'">English</div></li>
                      <li class="nav-link"><div @click="local='ru'">Русский</div></li>
                      <li class="nav-link"><div @click="local='fr'">Français</div></li>
                      <li class="nav-link"><div @click="local='de'">Deutsch</div></li>
                      <li class="nav-link"><div @click="local='es'">Español</div></li>
                      <li class="nav-link"><div @click="local='it'">Italiano</div></li>
                      <li class="nav-link"><div @click="local='pt'">Português</div></li>
                  </ul>
              </div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="d-flex mx-auto my-2 px-2">
                      <input class="emojis-wiki-search-input w-100 tw-outline-none tw-text-sm py-2 px-3 tw-rounded" style="border-radius: 8px" type="search" aria-label="Search"
                             placeholder="Search Emojis..." name="s"
                      />
                      <input type="hidden" value="1" name="sentence" />
                      <button aria-label="Favorite" class="search-button-wrap">
                          <span class="search-button"></span>
                      </button>
                  </form>
              </div>
          </div>
      </nav>
      <div class="container p-0 p-sm-2 m-sm-auto">
          <div class="row w-100 m-auto align-items-center justify-content-center">
              <div class="col-sm-11 col-12 p-0 p-sm-2">
                  <div class="row w-100 m-auto d-none d-sm-block">
                      <h1 class="p-0 text-start" style="font-size: 50px; color:black; font-weight:700; line-height: 57.5px; margin-bottom: 40px">Emoji Keyboard</h1>
                  </div>
                  <div class="row w-100 m-auto align-items-center justify-content-center bg-white tw-relative p-sm-3 p-0" style="border-radius: 8px;">
                      <EmojisWikiPicker :local="local"></EmojisWikiPicker>
                  </div>
              </div>
          </div>
      </div>
  </div>


</template>

<script>
  import EmojisWikiPicker from './components/EmojisWikiPicker.vue'

  export default {
    name: 'App',
    components: {
      EmojisWikiPicker
    },
    data () {
      return {
          local: 'en'
      }
    }
  }
</script>

<style>
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
      background: #F3F6FA;
    /*margin-top: 60px;*/
  }
  .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
    .emojis-wiki-search-input::placeholder {
        opacity: 1 !important;
        color:#606D9B !important;
    }
</style>
