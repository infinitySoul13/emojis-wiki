<template>
    <div class="emojis-wiki">
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-12 tw-relative px-0 px-sm-0 px-md-2">
                <textarea class="w-100 border-0 tw-outline-none tw-pr-5"
                          placeholder="Select emoji and copy"
                          v-model="text"
                          rows="3"
                          style="font-size: 14px"
                ></textarea>
                <div style="width: 24px; height: 24px; border-radius: 50%;"
                     class="tw-absolute tw-bg-grey-20 p-1 tw-right-0 sm:tw-right-0 md:tw-right-2 tw--top-0.5 tw-cursor-pointer"
                     @click="text=''"
                     v-if="text.trim() != ''"
                >
                    <img class="tw-w-4 p-1" src="\icons\cancel.svg" alt="">
                </div>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-6 p-0 px-sm-0 px-md-2">
                <div class="tw-w-11 ml-2 tw-py-2.5 tw-relative z-1">
                    <div class="row tw-absolute tw-bg-white tw-border tw-border-grey-30 tw--top-11 tw-left-3 -z-1 pt-10 text-center"
                         :class="`tw-transform ${hovered ? '' : 'tw-pointer-events-none tw--translate-y-3 tw-hidden'} tw-transition tw-duration-300`"
                         style="width: 242px; height: 44px; border-radius: 4px"
                    >
                            <div v-for="(emj, index) in 6" :key="emj" @click="setVariation(index - 1)"
                                 class=" tw-relative tw-flex tw-w-10 tw-h-full p-2 tw-transition tw-pointer-events-auto tw-duration-200 tw-cursor-pointer emojis-wiki-emojipicker__pickvariation"
                            >
<!--                                    <img :src="`https://en-zo.dev/vue-discord-emojipicker/variations/variation_${emj - 1}.svg`" @click="setVariation(emj - 1)"/>-->
<!--                                    <div style="width: 12px; height: 12px; border-radius: 50%;" :class="`tw-bg-skin-${emj - 1}`"></div>-->

                                    <div style="width: 12px; height: 12px; border-radius: 50%; top: 37%; left: 37%;"
                                         :class="`tw-absolute tw-hover:tw-ring tw-hover:tw-ring-3 tw-hover:tw-border-primary-50 tw-bg-skin-${emj - 1} ${ variation==(index - 1) ? 'tw-ring tw-ring-3 tw-ring-grey-0' : ''}`"
                                         @click="setVariation(index - 1)"
                                    >
                                    </div>

                            </div>
                    </div>
<!--                        @mouseenter="hovered = true" @mouseleave="hovered = false"-->
                    <div class="tw-border tw-border-grey-30 tw-relative" style="width: 44px; height: 44px; border-radius: 4px" @click="hovered = !hovered">
                        <div style="width: 12px; height: 12px; border-radius: 50%; top: 37%; left: 37%;" :class="`tw-absolute tw-bg-skin-${variation+1}`"></div>
                    </div>
               </div>
            </div>
            <div class="col-6 px-0 px-sm-0 px-md-2 tw-relative">
                <p style="font-size: 12px; font-weight: 400"
                   class="mb-1 tw-text-primary-100 tw-text-right text-truncate tw-absolute  px-0 px-sm-0 px-md-2 tw-right-0 tw--top-5"
                   v-if="selected!=null"
                >
                    {{selected.name}}
                </p>
                <button class="btn btn-primary" style="float: right; width: 117px; height: 44px" @click="copyToBuffer">Copy</button>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-12 px-0 px-sm-0 px-md-2">
                <div class="emojis-wiki__container tw-bg-grey-20 " style="height: 400px; border-radius: 8px;">
                    <div class="emojis-wiki-emojipicker__tabs tw-overflow-x-hidden tw-relative px-2 mb-2 tw-uppercase tw-text-grey-50 tw-h-auto tw-flex">
                        <span class="px-2 tw-py-3.5 tw-transition tw-duration-200 z-1"
                              :class="{ 'tw-text-primary-100 tw-border-b-2 tw-border-primary-50': search_tab === true }"
                              @click="search_tab = true"
                              style="font-size: 12px"
                        >
                            Search
                        </span>

                        <div class="tw-overflow-x-auto tw-flex emojis-wiki-scrollbar-hidden w-100 m-auto">
                            <span v-for="(category, c) in categories"
                                  :key="c" :class="{ 'tw-text-primary-100 tw-border-b-2 tw-border-primary-50': c === active&&!search_tab }"
                                  class="tw-flex tw-flex-none px-2 tw-py-3.5 tw-transition tw-duration-200 z-1"
                                  style="font-size: 12px"
                                  :id="'category'+c"
                                  @click="goToCategory(c)"
                            >
                                {{category}}
                            </span>
                        </div>
                        <div class="tw-w-full tw-border-b-2 tw-border-grey-30 tw-absolute tw-left-0 tw-bottom-0"></div>
                    </div>
                    <div class="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-y-hidden tw-bg-grey-20 pb-2" style="height: calc(400px - 44px); border-radius: 8px;">
                        <div id="emojis-wiki" class="tw-overflow-auto tw-relative tw-h-full tw-w-full pb-2">
                            <div v-if="search_tab">
                                <div class="container">
                                    <div class="row mt-2 w-100 m-auto tw-relative">
                                        <input v-model="search"
                                               @input="runSearch"
                                               class="w-100 tw-outline-none tw-text-sm py-2 px-3 tw-rounded w-ring tw-ring-4 tw-ring-grey-10"
                                               placeholder="e.g. earth day, apple or orange"
                                        />
                                        <div style="width: 24px; height: 24px; border-radius: 50%;"
                                             class="tw-absolute tw-bg-grey-20 p-1 tw-right-1.5 tw-top-1.5 tw-cursor-pointer"
                                             @click="search=''"
                                             v-if="search.trim() != ''"
                                        >
                                            <img class="tw-w-4 p-1" src="\icons\cancel.svg" alt="">
                                        </div>
                                        <p style="font-size: 12px; font-weight: 400"
                                           class="mt-3 mb-1 p-0 tw-text-grey-50 tw-text-left text-truncate"
                                           v-if="search_results.length<=0"
                                        >
                                            Start writing the name of the emoji
                                        </p>
                                    </div>

                                    <div class="pt-3 pb-2 tw-flex tw-flex-items tw-center tw-justify-start tw-flex-wrap tw-overflow-x-hidden">
                                        <div v-for="(result, e) in search_results"
                                             :key="`s_emoji_${e}`"
                                             class="tw-text-2xl tw-overflow-hidden tw-cursor-pointer tw-transition tw-duration-200 tw-ease-in-out tw-rounded-md tw-w-8 tw-h-full tw-flex-full tw-items-center tw-justify-center"
                                             @mouseenter="selected = { ...result.item }"
                                             @click="chooseEmoji(result.item)"
                                        >
                                            <template v-if="result.item.variations && variation >= 0 && result.item.variations[variation]">
                                                {{ result.item.variations[variation] }}
                                            </template>
                                            <template v-else>
                                                {{ result.item.emoji }}
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <template v-if="categories.length > 0 && search_tab===false">
                                <template v-for="(category, c) in categories">
                                    <div v-if="$data[category] && $data[category].length > 0"
                                         :key="`category_${c}`"
                                         :class="{ 'mt-2': c > 0 }"
                                         class="emojis-wiki__observer"
                                    >
                                        <div class="tw-uppercase px-4 py-2 tw-text-left tw-bg-grey-20 tw-text-xs tw-text-grey-50 tw-font-semibold tw-top-0"
                                            style="font-size: 12px"
                                        >
                                            {{ category }}
                                        </div>
                                        <div class="px-3 tw-flex tw-flex-items tw-center tw-justify-start tw-flex-wrap tw-overflow-x-hidden">
                                            <div v-for="(emoji, e) in $data[category]"
                                                 :key="`emoji_${e}`"
                                                 class="tw-text-2xl tw-overflow-hidden tw-cursor-pointer tw-transition tw-duration-200 tw-hover:bg-grey-200 tw-hover:bg-opacity-50 tw-rounded-md tw-w-8 tw-h-full tw-flex-full tw-items-center tw-justify-center"
                                                 @mouseenter="selected = { ...emoji }"
                                                 @click="chooseEmoji(emoji)"
                                            >
                                                <template v-if="emoji.variations && variation >= 0 && emoji.variations[variation]">
                                                    {{ emoji.variations[variation] }}
                                                </template>
                                                <template v-else>
                                                    {{ emoji.emoji }}
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </template>
                            <p v-if="categories.length <= 0 && search_tab===false" class="tw-text-grey-100 text-center py-4">No results found :-(</p>
                        </div>
                        <!--        <div v-if="selected" class="bg-grey-700 w-full px-5 py-2 border-t border-grey-600 items-center justify-start hidden md:flex">-->
                        <!--          <p class="text-3xl">{{ selected.emoji}}</p>-->
                        <!--          <p class="text-white font-semibold text-sm ml-2">-->
                        <!--            {{ `:${selected.name.replace(/\s/g, '')}:` }}-->
                        <!--          </p>-->
                        <!--        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import clickOutside from '@/directives/click-outside.js'
    // import emojis from '@/assets/emojis.json'
    import _ from 'lodash';
    export default {
        name: "EmojisWikiPicker",
        directives: {
            clickOutside,
        },
        props: {
            local : {
                type: String,
                default: 'en',
                // required: true
            }
        },
        data () {
            return {
                text:'',
                variation:-1,
                search:'',
                hovered:false,
                active: 0,
                selected: null,
                offsetTop: [],
                categories:['people','animals','foods','travel','activities','objects','symbols','flags'],
                // ...this.categories.map(cat => this[`$${cat}`] = []),
                search_tab:false,
                emojis: [],
                search_options: {
                    // minMatchCharLength: 1,
                    shouldSort: false,
                    threshold: 0.2,
                    keys: ['name',
                        'tags'
                    ]
                },
                search_results: []
            }
        },
        created () {
            var data = require(`@/assets/emojis_data/${this.local}/emojis.json`);
            this.emojis = data;
            this.categories = data.categories;
            // this.categories = {...this.categories.map(cat => this[`$${cat}`] = [])}
            this.categories.forEach(category => {
                const index = this.emojis.categories.findIndex(cat => cat === category);
                if (index >= 0) {
                    this.$data[category] = this.emojis.list.filter(emoji => emoji.category === index);
                }
            })
        },
        mounted () {
            this.createScrollEvent();
            this.eachCategoriesHTML();
            this.createResizeEvent();
        },
        beforeDestroy () {
            const container_emojis = document.getElementById('emojis-wiki');
            if (container_emojis) {
                container_emojis.removeEventListener('scroll', this.scrollEvent);
            }
            window.removeEventListener('resize', this.eachCategoriesHTML);
        },
        watch: {
            search: 'runSearch',
            local: 'changeLocal'
            // variation: 'onSearch'
        },
        methods: {
            changeLocal() {
                var data = require(`@/assets/emojis_data/${this.local}/emojis.json`);
                this.emojis = data;
                this.categories = data.categories;
                this.categories.forEach(category => {
                    const index = this.emojis.categories.findIndex(cat => cat === category);
                    if (index >= 0) {
                        this.$data[category] = this.emojis.list.filter(emoji => emoji.category === index);
                    }
                })
            },
            copyToBuffer() {
                this.$copyText(this.text).then(function (e) {
                    console.log(e)
                }, function (e) {
                    console.log(e)
                })
            },
            createScrollEvent () {
                const container_emojis = document.getElementById('emojis-wiki');
                if (container_emojis) {
                    container_emojis.addEventListener('scroll', this.scrollEvent);
                }
            },
            createResizeEvent () {
                window.addEventListener('resize', this.eachCategoriesHTML);
            },
            // onSearch () {
            //     this.categories.forEach(category => {
            //         const index = this.emojis.categories.findIndex(cat => cat === category);
            //         if (index >= 0) {
            //             this.$data[category] = this.emojis.list.filter(emoji => this.search ? emoji.category === index && emoji.name.includes(this.search) : emoji.category === index)
            //             this.$nextTick(() => {
            //                 this.eachCategoriesHTML();
            //                 this.createScrollEvent();
            //             })
            //         }
            //     })
            // },
            eachCategoriesHTML () {
                this.offsetTop = [];
                const categories = document.querySelectorAll('.emojis-wiki__observer');
                categories.forEach(category => {
                    this.offsetTop.push(category.offsetTop);
                })
            },
            scrollEvent ({ target }) {
                const { scrollTop } = target;
                const item = this.getClosest(scrollTop);
                const index = this.offsetTop.findIndex(o => o === item);
                if (index >= 0) {
                    this.active = index;
                    document.getElementById('category'+index).scrollIntoView();
                }
            },
            setVariation (index) {
                this.hovered = false;
                this.variation = index;
            },
            goToCategory (index) {
                this.search_tab = false;
                this.$nextTick(function () {
                    const container_emojis = document.getElementById('emojis-wiki');
                    const categories = document.querySelectorAll('.emojis-wiki__observer');
                    container_emojis.scrollTop = categories[index].offsetTop;
                    document.getElementById('category'+index).scrollIntoView();
                    // this.active = index
                })

            },
            getClosest (goal) {
                const closest = this.offsetTop.reduce(function(prev, curr) {
                    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
                })
                return closest;
            },
            chooseEmoji (value) {
                value = (value.variations && this.variation >= 0) ? value.variations[this.variation] : value.emoji;
                this.text += value;
            },
            runSearch: _.debounce(function(e)  {
                if(this.search.trim()=='')
                {
                    this.search_results = [];
                }
                else {
                    this.$search(this.search, this.emojis.list, this.search_options).then(result => {
                        this.search_results = result;
                    })
                }
            }, 500)
        }
    }
</script>

<style scoped>
    .emojis-wiki {
        font-family: Arial;
        font-size: 12px;
        font-weight: 400;
    }
    .emojis-wiki-emojipicker {
        height: 454px;
        width: 444px;
    }
    @media (max-width: 768px) {
        .emojis-wiki-emojipicker {
            width: 300px;
            height: 400px;
        }
    }
    .emojis-wiki-emojipicker__tabs {
        min-width: 50px;
    }
    .emojis-wiki-emojipicker__tabs::-webkit-scrollbar {
        display: none !important;
    }
    .emojis-wiki__container {
        height: calc(100% - 111px);
    }
    @media (max-width: 768px) {
        .emojis-wiki__container {
            height: 100%;
        }
    }
    .emojis-wiki__container ::-webkit-scrollbar {
        width: 6px;
    }
    .emojis-wiki__container ::-webkit-scrollbar-track {
        background: transparent;
        right: 5px;
    }
    .emojis-wiki__container ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #D4DCE8;
    }
    #emojis-wiki {
        scroll-behavior: smooth;
    }
    .emojibutton__active .emojis-wiki-emojipicker__emojibutton {
        width: 28px;
    }
    .emojis-wiki-emojipicker__emojibutton {
        background-image: url('https://en-zo.dev/vue-discord-emojipicker/sprite_emojis.png');
        background-position: -22px 0;
        background-size: 242px 88px;
        background-repeat: no-repeat;
        width: 23px;
        height: 22px;
        display: block;
    }

    .-z-1 {
        z-index: -1;
    }
    .z-1 {
        z-index: 1;
    }

    .emojis-wiki-scrollbar-hidden::-webkit-scrollbar-track
    {
        display: none;
        -webkit-box-shadow: none;
        border-radius: 0px;
        background-color: transparent;
    }

    .emojis-wiki-scrollbar-hidden {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }

    .emojis-wiki-scrollbar-hidden::-webkit-scrollbar
    {
        width: 0px !important;
        height: 0px !important;
        background: transparent !important;
        -webkit-appearance: none !important;
        display: none;
    }

    .emojis-wiki-scrollbar-hidden::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: none;
        background-color: transparent;
    }

</style>