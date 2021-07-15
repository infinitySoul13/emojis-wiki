<template>
  <div id="app" class="emojis-wiki h-100 w-100">
<!--      <nav class="navbar navbar-dark tw-bg-primary-50">-->
<!--          <div class="container-sm container-fluid">-->
<!--              <div class="row w-100 m-auto align-items-center justify-content-center">-->
<!--                  <div class="col-sm-11 col-12 p-0 p-sm-2">-->
<!--                      <div class="row w-100 m-auto align-items-center">-->
<!--                          <div class="col-4 p-0">-->
<!--                              <a class="navbar-brand d-flex" style="margin-right: auto" href="#">-->
<!--                                  <img src="https://emojis.wiki/wp-content/themes/emoji-v4/images/emojiswiki_logo.svg"-->
<!--                                       class="d-inline-block align-text-top"-->
<!--                                       alt="logo"-->
<!--                                  />-->
<!--                              </a>-->
<!--                          </div>-->
<!--                          <div class="col-8 p-0">-->
<!--                              <div class="row m-auto w-100 justify-content-end">-->
<!--                                  <form class="d-flex w-75 d-none d-md-flex">-->
<!--                                      <input class="emojis-wiki-search-input w-100 tw-outline-none tw-text-sm py-2 px-3 tw-rounded "-->
<!--                                             style="border-radius: 8px" type="search" aria-label="Search"-->
<!--                                             placeholder="Search Emojis..." name="s"-->
<!--                                      />-->
<!--                                      <input type="hidden" value="1" name="sentence" />-->
<!--                                      <button aria-label="Favorite" class="search-button-wrap">-->
<!--                                          <span class="search-button"></span>-->
<!--                                      </button>-->
<!--                                  </form>-->
<!--                                  <button class="navbar-toggler p-1"-->
<!--                                          title="English"-->
<!--                                          style="height: 44px; width: 44px; border-color: rgba(255,255,255,0.40)"-->
<!--                                          id="dropdownMenu2" data-bs-toggle="dropdown"-->
<!--                                  >-->
<!--                                      <img class="m-auto"-->
<!--                                           src="/icons/lang.svg"-->
<!--                                           alt="English"-->
<!--                                      />-->
<!--                                  </button>-->
<!--                                  <ul class="tw-border-none tw-absolute mt-2 dropdown-menu mx-auto mx-sm-0 tw-w-11/12 tw-right-0 tw-left-0 sm:tw-w-80 sm:tw-right-auto sm:tw-left-auto tw-rounded-md tw-shadow-lg tw-bg-white"-->
<!--                                      aria-labelledby="dropdownMenu2"-->
<!--                                  >-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='en' }" type="button" @click="chooseLocal('en')">English</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='ru' }" type="button" @click="chooseLocal('ru')">Русский</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='fr' }" type="button" @click="chooseLocal('fr')">Français</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='de' }" type="button" @click="chooseLocal('de')">Deutsch</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='es' }" type="button" @click="chooseLocal('es')">Español</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='it' }" type="button" @click="chooseLocal('it')">Italiano</button></li>-->
<!--                                      <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='pt' }" type="button" @click="chooseLocal('pt')">Português</button></li>-->
<!--                                  </ul>-->
<!--                                  <button class="navbar-toggler d-block d-md-none p-1 tw-ml-2"-->
<!--                                          style="height: 44px; width: 44px; color: white; border-color: rgba(255,255,255,0.40)"-->
<!--                                          type="button"-->
<!--                                          id="dropdownMenu1" data-bs-toggle="dropdown"  aria-expanded="false"-->
<!--                                  >-->
<!--                                      <span class="navbar-toggler-icon m-auto"  style="color: white"></span>-->
<!--                                  </button>-->
<!--                                  <div class="text-center tw-border-none tw-absolute mt-2 dropdown-menu mx-auto mx-sm-0 tw-w-11/12 tw-right-0 tw-left-0 sm:tw-w-80 sm:tw-right-auto sm:tw-left-auto tw-rounded-md tw-shadow-lg tw-bg-white"-->
<!--                                      aria-labelledby="dropdownMenu1"-->
<!--                                  >-->
<!--                                      <div class="category-grid tw-grid tw-justify-items-start align-items-start p-2">-->
<!--                                          <a v-for="(category, index) in categories_names"-->
<!--                                             :key="index"-->
<!--                                             :href="categories_urls[index]"-->
<!--                                             class="link-light-bg d-flex tw-justify-center align-items-center"-->
<!--                                          >-->
<!--                                              {{categories_smiles[index]}}-->
<!--                                              <span>{{category}}</span>-->
<!--                                          </a>-->
<!--                                      </div>-->
<!--                                  </div>-->
<!--                              </div>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </nav>-->
      <header class="header-extend">
        <nav class="navbar navbar-dark emojis-wiki-nav tw-bg-primary-50">
            <div class="mdc-top-app-bar__row row-top">
                <div class="row w-100 m-auto align-items-center">
                    <div class="col-7 col-md-4 p-0">
                        <a class="navbar-brand d-flex" style="margin-right: auto" href="/">
                            <img src="https://emojis.wiki/wp-content/themes/emoji-v4/images/emojiswiki_logo.svg"
                                 class="d-inline-block align-text-top"
                                 style="width: 17.5rem;"
                                 alt="logo"
                            />
                        </a>
                    </div>
                    <div class="col-5 col-md-8 p-0">
                        <div class="row m-auto w-100 justify-content-end">
                            <form class="search test" :action="'/'+search_path">
                                <label class="d-block">
                                    <span class="sr-only">search field</span>
                                    <input class="search__field" :placeholder="search_text" name="s">
                                    <input type="hidden" value="1" name="sentence">
                                    <button aria-label="Favorite" class="search-button-wrap">
                                        <img class="search-button" src="\icons\search_blue_2.svg" alt="menu">
                                    </button>
                                </label>
                            </form>
                            <button class="navbar-toggler p-1 lang-btn emojis-wiki-nav-btn" title="English"  id="dropdownMenu2" data-bs-toggle="dropdown">
                                <span class="sr-only">language</span>
                                <img src="\icons\lang-icon.png" alt="English" class="ezlazyloaded">
                            </button>
                            <ul class="tw-border-none tw-absolute mt-2 dropdown-menu mx-auto mx-sm-0 tw-w-11/12 tw-right-0 tw-left-0 sm:tw-w-80 sm:tw-right-auto sm:tw-left-auto tw-rounded-md tw-shadow-lg tw-bg-white"
                                aria-labelledby="dropdownMenu2"
                                style="font-size: 16px"
                            >
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='en' }" type="button" @click="chooseLocal('en')">English</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='ru' }" type="button" @click="chooseLocal('ru')">Русский</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='fr' }" type="button" @click="chooseLocal('fr')">Français</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='de' }" type="button" @click="chooseLocal('de')">Deutsch</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='es' }" type="button" @click="chooseLocal('es')">Español</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='it' }" type="button" @click="chooseLocal('it')">Italiano</button></li>
                                <li><button class="dropdown-item hover:tw-bg-grey-10" :class="{ 'tw-text-primary-50': local !=='pt' }" type="button" @click="chooseLocal('pt')">Português</button></li>
                            </ul>
                            <button class="navbar-toggler d-block d-md-none p-1 tw-ml-2 emojis-wiki-nav-btn"
                                    id="dropdownMenu1" data-bs-toggle="dropdown"
                            >
                                <span class="sr-only">menu</span>
                                <img src="\icons\hamburger.svg" class="hamburger mx-auto" alt="menu">
                            </button>
                            <div class="text-center tw-border-none tw-absolute mt-2 dropdown-menu mx-auto mx-sm-0 tw-w-11/12 tw-right-0 tw-left-0 sm:tw-w-80 sm:tw-right-auto sm:tw-left-auto tw-rounded-md tw-shadow-lg tw-bg-white"
                                aria-labelledby="dropdownMenu1"
                            >
                                <div class="category-grid tw-grid tw-justify-items-start align-items-start p-2">
                                    <a v-for="(category, index) in categories_names"
                                       :key="index"
                                       :href="'/'+search_path+categories_urls[index]"
                                       class="link-light-bg d-flex tw-justify-center align-items-center"
                                    >
                                        {{categories_smiles[index]}}
                                        <span>{{category}}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="search-mobile">
            <form class="search test"  :action="'/'+search_path">
                <label class="d-block">
                    <span class="sr-only">search field</span>
                    <input class="search__field" :placeholder="search_text" name="s">
                    <input type="hidden" value="1" name="sentence">
                    <button aria-label="Favorite" class="search-button-wrap">
                        <img class="search-button" src="\icons\search_blue_2.svg" alt="menu">
                    </button>
                </label>
            </form>
        </div>
      </header>
      <div class="category">
          <div class="category__content">
              <a v-for="(category, index) in categories_names"
                 :key="index"
                 :href="'/'+search_path+categories_urls[index]"
                 class="link-light-bg"
              >
                  {{categories_smiles[index]}}
                  <span>{{category}}</span>
              </a>
          </div>
      </div>
      <div class="container p-0 p-sm-2 m-sm-auto">
          <div class="row w-100 m-auto align-items-center justify-content-center">
              <div class="col-sm-11 col-12 p-0 p-sm-2">
                  <div class="row w-100 m-auto d-none d-sm-block" style="margin-top: 3.6rem !important;">
                      <h1 class="p-0 text-start" style="font-size: 50px; color:black; font-weight:700; line-height: 57.5px; margin-bottom: 40px">{{page_name}}</h1>
                  </div>
                  <div class="row w-100 m-auto align-items-center justify-content-center bg-white tw-relative p-sm-3 p-0" style="border-radius: 8px;">
                      <EmojisWikiPicker :local="local"></EmojisWikiPicker>
                  </div>
              </div>
          </div>
      </div>
<!--      <footer class="tw-bg-primary-50 mt-4 tw-text-white d-none d-md-flex">-->
<!--          <div class="container">-->
<!--              <div class="row w-100 pt-5 pb-3 mx-auto text-start justify-content-center">-->
<!--                  <div class="col-3">-->
<!--                      <h4 style="font-size: 16px; font-weight: 700">Emoji Versions</h4>-->
<!--                      <ul class="my-4">-->
<!--                          <li>Emoji 14.0</li>-->
<!--                          <li>Emoji 13.1</li>-->
<!--                          <li>Emoji 13.0</li>-->
<!--                          <li>Emoji 12.1</li>-->
<!--                          <li>Emoji 12.0</li>-->
<!--                          <li>Emoji 11.0</li>-->
<!--                          <li>Emoji 5.0</li>-->
<!--                          <li>Emoji 4.0</li>-->
<!--                          <li>Emoji 3.0</li>-->
<!--                          <li>Emoji 2.0</li>-->
<!--                          <li>Emoji 1.0</li>-->
<!--                      </ul>-->

<!--                  </div>-->
<!--                  <div class="col-3">-->
<!--                      <h4 style="font-size: 16px; font-weight: 700">Platforms</h4>-->
<!--                      <ul class="my-4">-->
<!--                          <li>Apple</li>-->
<!--                          <li>au by KDDI</li>-->
<!--                          <li>Nintendo</li>-->
<!--                          <li>OpenMoji</li>-->
<!--                          <li>Roblox</li>-->
<!--                          <li>Samsung</li>-->
<!--                          <li>Skype</li>-->
<!--                          <li>Slack</li>-->
<!--                          <li>Snapchat</li>-->
<!--                          <li>SoftBank</li>-->
<!--                          <li>Sponsored</li>-->
<!--                          <li>Telegram</li>-->
<!--                          <li>TikTok</li>-->
<!--                      </ul>-->
<!--                  </div>-->
<!--                  <div class="col-3">-->
<!--                      <h4 style="font-size: 16px; font-weight: 700">More</h4>-->
<!--                      <ul class="my-4">-->
<!--                          <li>Adopt An Emoji FAQ</li>-->
<!--                          <li>Ads</li>-->
<!--                          <li>Animoji</li>-->
<!--                          <li>Apple Watch</li>-->
<!--                          <li>Botmoji</li>-->
<!--                          <li>Contact</li>-->
<!--                          <li>Emoji Flag Sequence</li>-->
<!--                          <li>Emoji Keycap Sequence</li>-->
<!--                          <li>Emojipedia API</li>-->
<!--                          <li>Emojipedia Apps</li>-->
<!--                          <li>Emoji Proposals</li>-->
<!--                          <li>Emoji Requests</li>-->
<!--                          <li>Emoji Sequence</li>-->
<!--                          <li>Emoji Shortcodes</li>-->
<!--                      </ul>-->
<!--                  </div>-->
<!--                  <div class="col-3">-->
<!--                      <h4 style="font-size: 16px; font-weight: 700">About</h4>-->
<!--                      <ul class="my-4">-->
<!--                          <li>Privacy Policy</li>-->
<!--                          <li>Contacts</li>-->
<!--                          <li>All right reserved</li>-->
<!--                      </ul>-->
<!--                  </div>-->
<!--                  <div class="col-12 tw-relative">-->
<!--                      <button class="tw-border-2 py-2 px-4 mb-3 tw-border-white float-start" style="width: 230px; height: 82px; border-radius:4px; text-align: left">-->
<!--                          <p style="font-weight: 700; font-size: 14px">Add to home screen</p>-->
<!--                          <img-->
<!--                                  src="https://emojis.wiki/wp-content/themes/emoji-v4/images/emojiswiki_logo.svg"-->
<!--                                  class="d-inline-block align-text-top"-->
<!--                                  alt="logo"-->
<!--                                  width="145"-->
<!--                                  height="34"-->
<!--                          />-->
<!--                      </button>-->
<!--                  </div>-->
<!--                  <div class="col-12">-->
<!--                      <div class="tw-w-full my-4 tw-border-b-2 tw-border-white"></div>-->
<!--                  </div>-->
<!--                  <div class="col-12">-->
<!--                      <div class="row w-100 mx-auto align-items-center">-->
<!--                          <div class="col-6">-->
<!--                              <h4 style="font-size: 16px">Made with ❤️, 🥛 and 🐹 in 2017-2020.</h4>-->
<!--                          </div>-->
<!--                          <div class="col-6">-->
<!--                              <div class="row w-100 mx-auto">-->
<!--                                  <button class="tw-ml-auto p-0" style="width: 36px; height: 36px; margin-right: 20px;">-->
<!--                                      <img src="/icons/facebook.svg"-->
<!--                                           class="align-text-top"-->
<!--                                           width="36"-->
<!--                                           height="36"-->
<!--                                      />-->
<!--                                  </button>-->
<!--                                  <button class="p-0" style="width: 36px; height: 36px; margin-right: 20px;">-->
<!--                                      <img src="/icons/twitter.svg"-->
<!--                                           class="align-text-top"-->
<!--                                           width="36"-->
<!--                                           height="36"-->
<!--                                      />-->
<!--                                  </button>-->
<!--                                  <button class="p-0" style="width: 36px; height: 36px; margin-right: 40px;">-->
<!--                                      <img src="/icons/pinterest.svg"-->
<!--                                           class="align-text-top"-->
<!--                                           width="36"-->
<!--                                           height="36"-->
<!--                                      />-->
<!--                                  </button>-->
<!--                                  <button class="p-0" style="width: 36px; height: 36px;">-->
<!--                                      <img src="/icons/moon_emoji.svg"-->
<!--                                           class="align-text-top"-->
<!--                                           width="36"-->
<!--                                           height="36"-->
<!--                                      />-->
<!--                                  </button>-->
<!--                              </div>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </footer>-->
      <footer id="colophon" class="site-footer mt-4" role="contentinfo">
          <div class="content">
              <div class="site-info">
                  <div class="accordion-item">
                      <button class="accordion-item__title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          {{accordions[0]}} <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/arrow.svg" class="arrow" alt="open">
                          <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/close.svg" class="close" alt="close">
                      </button>
                      <ul class="accordion-collapse collapse md:tw-block" id="collapseOne">
                          <li><a class="link-dark-bg" href="https://emojis.wiki/apple/">Apple</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/google/">Google</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/microsoft/">Microsoft</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/facebook/">Facebook</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/messenger/">Messenger</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/twitter/">Twitter</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/whatsapp/">WhatsApp</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/samsung/">Samsung</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/lg/">LG</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/htc/">HTC</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/mozilla/">Mozilla</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/softbank/">SoftBank</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/au-by-kddi/">au by KDDI</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/docomo/">Docomo</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/openmoji/">Openmoji</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/youtube/">Youtube</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/telegram/">Telegram</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/skype/">Skype</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/discord/">Discord</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/tiktok/">TikTok</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/reddit/">Reddit</a></li>
                          <li><a class="link-dark-bg" href="https://emojis.wiki/animoji/">Animoji</a></li>
                      </ul>
                  </div>
                  <div class="accordion-item">
                      <button class="accordion-item__title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                          {{accordions[1]}} <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/arrow.svg" class="arrow" alt="open">
                          <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/close.svg" class="close" alt="close">
                      </button>
                      <ul class="accordion-collapse collapse md:tw-block" id="collapseTwo">
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-1-0/'">{{accordions[1]}} 1.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-2-0/'">{{accordions[1]}} 2.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-3-0/'">{{accordions[1]}} 3.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-4-0/'">{{accordions[1]}} 4.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-5-0/'">{{accordions[1]}} 5.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-11-0/'">{{accordions[1]}} 11.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-12-0/'">{{accordions[1]}} 12.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-12-1/'">{{accordions[1]}} 12.1</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-13-0/'">{{accordions[1]}} 13.0</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'emoji-version-13-1/'">{{accordions[1]}} 13.1</a></li>
                      </ul>
                  </div>
                  <div class="accordion-item">
                      <button class="accordion-item__title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                          {{accordions[2]}}  <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/arrow.svg" class="arrow" alt="open">
                          <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/close.svg" class="close" alt="close">
                      </button>
                      <ul class="accordion-collapse collapse md:tw-block" id="collapseThree">
                          <li><a class="link-dark-bg" :href="'/'+search_path+'help/'">{{accordion3[0]}}</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'privacy-policy/'">{{accordion3[1]}}</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'trademarks/'">{{accordion3[2]}}</a></li>
                          <li><a class="link-dark-bg" :href="'/'+search_path+'about/'">{{accordion3[3]}}</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="content">
                  <div class="footer-copyright">
                      <div class="logo-wrap">
                          <a href="https://emojis.wiki/" class="logo"><span class="sr-only">site logo</span>
                              <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/emojiswiki_logo.svg" alt="logo">
                          </a>
                         {{footer_text}}
                      </div>
                      <div class="footer-legal">
                          <a href="https://www.facebook.com/emojiswiki/" target="_blank">
                              <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/facebook.svg" alt="facebook">
                          </a>
                          <a href="https://twitter.com/emojiswiki/" target="_blank">
                              <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/twitter.svg" alt="twitter">
                          </a>
                          <a href="https://www.pinterest.com/emojiswiki/" target="_blank">
                              <img src="https://cdn-0.emojis.wiki/wp-content/themes/emoji-v4/images/pinterest.svg" alt="pinterest">
                          </a>
                          <div class="moon">🌚</div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
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
          local: 'en',
          menu:false,
          page_name:'Emoji Keyboard',
          page_names: {
              en:'Emoji Keyboard',
              ru:'Клавиатура эмодзи',
              de:'Emoji-Tastatur',
              it:'Tastiera Emoji',
              es:'Teclado Emoji',
              pt:'Teclado Emoji',
              fr:'Clavier Emoji',
          },
          categories_names:[],
          categories: {
              en:[ "Smileys & Emotion", "People & Body", "Animals & Nature", "Food & Drink",
                   "Symbols", "Travel & Places", "Objects", "Activities",
                  "Flags", 'Thematic emojis', 'Holidays', 'Random emoji'
              ],
              ru:["Смайлики и эмоции", "Люди и части тела", "Животные и растения", "Еда и напитки",
                  "Символы", "Путешествия и местности", "Предметы", "Активность",
                  "Флаги", "Тематические смайлы", "Праздники","Случайные смайлы"
              ],
              de:[
                  "Smileys und Emotionen", "Menschen und Körper", "Tiere und Natur", "Essen und Trinken",
                  "Symbole", "Reisen und Orte", "Objekte", "Aktivitäten",
                  "Flaggen", "Thematische Emojis", 'Ferien', 'Zufälliges Emoji'
              ],
              it:[
                  "Sorrisi ed emozioni", "Persone e corpo", "Animali e natura", "Cibo e bevanda",
                  "Simboli", "Viaggio e Luoghi", "Oggetti", "Attività",
                  "Bandiere", "Emoji a tema", 'Vacanze', "Emoji casuali"
              ],
              es:[
                  "Smileys y emociónes", "Personas y cuerpo", "Animales y naturaleza", "Comida y bebida",
                  "Símbolos", "Viajes y lugares", "Objetos", "Actividades",
                  "Banderas", 'Emojis temáticos', 'Vacaciones', 'Emoji aleatorio'
              ],
              pt:[
                  "Smileys e Emoções", "Pessoas e Corpo", "Animais e Natureza", "Comida e Bebida",
                  "Símbolo", "Viagens e Lugares", "Objetos", "Atividades",
                  "Bandeiras",'Emojis temáticos','Feriados', 'Emoji aleatório'
              ],
              fr:[
                  "Smileys et émotions", "Personnes & corps", "Animaux & nature", "Nourriture et boissons",
                  "Symboles", "Voyages & lieux", "Objets", "Activités",
                  "Drapeaux",'Emojis thématiques', 'Vacances', 'Emoji aléatoire'
              ],
          },
          categories_urls: [
              'smileys-and-emotion-category/',
              "people-and-body-category/" ,"animals-and-nature-category/" ,"food-and-drink-category/",
              "symbols-category/","travel-and-places-category/", "objects-category/", "activities-category/",
              "flags-category/", "themes/", "holidays/", "?redirect_to=random"
          ],
          categories_smiles: [
              '🤣', '🤷', '🐼', '🍕',
              '💯', '🌇', '📮', '🎈',
              '🇺🇸', '🌈', '🎉', '🎲'
          ],
          search_path:'',
          search_text:'Search Emojis',
          accordions:'',
        accordion3:'',
        footer_text:'',
      }
    },
      mounted() {
          // window.locale = document.documentElement.lang;
          // let lang = window.locale;
          // if(!lang) {
          //     lang = 'en'
          // }

          const url = window.location.pathname;
          const regex = /.*\/([^/]+)\/[^/]+/;

          const matches = regex.exec(url);

          let lang = 'en';
          if(matches !== null && matches[1] !=='emojis.wiki' && matches[1].length == 2) {
              lang = matches[1];
              this.search_path = lang + '/';
          }

          this.local = lang;
          this.page_name = this.page_names[lang];
          this.categories_names = this.categories[lang];
          let data = require(`@/assets/emojis_data/${this.local}/emojis.json`);
          this.search_text = data.search;
          this.accordions = data.accordions;
          this.accordion3 = data.accordion3;
          this.footer_text = data.footer_text;
          this.search_text = data.search;
      },
      methods:{
        chooseLocal(lang) {
            this.local = lang;
            this.page_name = this.page_names[lang];
            this.categories_names = this.categories[lang];
            let data = require(`@/assets/emojis_data/${this.local}/emojis.json`);
            this.search_text = data.search;
            this.accordions = data.accordions;
            this.accordion3 = data.accordion3;
            this.footer_text = data.footer_text;
            this.search_path = lang + '/';
            if(lang ==='') {
                this.search_path = '';
            }
        }
      }
  }
</script>

<style>
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
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
  .dropdown-item.active, .dropdown-item:active {
      color: #fff !important;
      text-decoration: none;
      background-color: #3D6EFF !important;
  }
  .category-grid .link-light-bg {
      /*font-size: 1.8rem;*/
      font-size: 28.8px;
      color: #3d6eff;
      /*width: 4.9rem;*/
      width: 78.4px;
      /*margin-right: 2rem;*/
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      text-decoration: none;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: 1px;
  }
  .category-grid .link-light-bg span{
      /*font-size: .8rem;*/
      font-size: 12.8px;
      flex-grow: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      line-height: 147%;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      text-align: center;
  }
    .category-grid {
        display: grid;
        /*grid-template-columns: repeat(auto-fill, 4.9rem);*/
        grid-template-columns: repeat(auto-fill, 78.4px);
        justify-content: space-between;
    }
  .accordion-item {
      background-color: transparent !important;
      border: none !important;
  }
  .emojis-wiki-nav .emojis-wiki-nav-btn {
      display:none;
      margin-left:0;
      padding:0;
      width:4.4rem;
      /*width:70.4px;*/
      height:4.4rem;
      /*height:70.4px;*/
      border-radius:.8rem;
      /*border-radius:12.8px;*/
      min-width:unset;
      background:#e4e9f0;
      color:#fff;
      -webkit-flex-shrink:0;
      -ms-flex-negative:0;
      flex-shrink:0;
      -webkit-align-items:center;
      -ms-flex-align:center;
      align-items:center;
      -webkit-justify-content:center;
      -ms-flex-pack:center;
      justify-content:center;
      font-size:1.4rem;
      /*font-size:22.4px;*/
  }
  .emojis-wiki-nav .emojis-wiki-nav-btn.lang-btn {
      display:-webkit-flex;
      display:-ms-flexbox;
      display:flex;
      font-size:2.5rem;
      /*font-size: 40px;*/
  }

  .emojis-wiki-nav .emojis-wiki-nav-btn:before {
      opacity:0!important
  }
  .emojis-wiki-nav .emojis-wiki-nav-btn .hamburger {
      width:2.4rem;
      /*width:38.4px;*/
      height:auto;
      -webkit-flex-shrink:0;
      -ms-flex-negative:0;
      flex-shrink:0
  }
  @media only screen and (min-width:320px) and (max-width:768px) {
      .emojis-wiki-nav .emojis-wiki-nav-btn {
          display:-webkit-flex;
          display:-ms-flexbox;
          display:flex;
          border-radius:.4rem
          /*border-radius:6.4px;*/
      }
  }
  .emojis-wiki-nav .emojis-wiki-nav-btn:before {
      opacity:0!important
  }
  .emojis-wiki-nav-btn::after,
  .emojis-wiki-nav-btn::before {
      position:absolute;
      border-radius:50%;
      opacity:0;
      pointer-events:none;
      content:""
  }
  .emojis-wiki-nav-btn::before {
      transition:opacity 15ms linear,background-color 15ms linear;
      z-index:1
  }
  .emojis-wiki-nav-btn::after,
  .emojis-wiki-nav-btn::before {
      top:calc(50% - 100%);
      left:calc(50% - 100%);
      width:200%;
      height:200%
  }
  .emojis-wiki-nav-btn::after,
  .emojis-wiki-nav-btn::before {
      background-color:#6200ee
  }
  .emojis-wiki-nav-btn {
      font-family: Roboto,sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: .875rem;
      /*font-size: 14px;*/
      line-height: 2.25rem;
      /*line-height: 36px;*/
      font-weight: 500;
      letter-spacing: .08929em;
      text-decoration: none;
      text-transform: uppercase;
      --mdc-ripple-fg-size: 0;
      --mdc-ripple-left: 0;
      --mdc-ripple-top: 0;
      --mdc-ripple-fg-scale: 1;
      --mdc-ripple-fg-translate-end: 0;
      --mdc-ripple-fg-translate-start: 0;
      -webkit-tap-highlight-color: transparent;
      will-change: transform,opacity;
      padding: 0 8px;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: relative;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      box-sizing: border-box;
      min-width: 64px;
      height: 36px;
      border: none;
      outline: 0;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-appearance: none;
      overflow: hidden;
      vertical-align: middle;
      border-radius: 4px;
  }
  .emojis-wiki-nav {
      background-color:#3d6eff;
      transition:all .5s;
      padding:0 2rem;
      /*padding:0 32px;*/
      left:0;
      position:static;
  }
  @media only screen and (min-width:320px) and (max-width:768px) {
      .emojis-wiki-nav {
          padding:0
      }
  }
</style>
