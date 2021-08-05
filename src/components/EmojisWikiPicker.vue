<template>
    <div class="emojis-wiki p-0 w-100 h-100 m-auto position-relative tw-fixed tw-bottom-0 md:tw-static">
        <div id="snack" class="snackbar-container snackbar-pos top-center" :class="` ${snack ? 'show' : 'hide'}`">
            <p style="margin: 0px; padding: 0px; font-size: 14px; font-weight: 700; line-height: 1.6em;">{{copy_text}}</p>
            <button class="action" style="color: rgb(66, 121, 81);" @click="closeSnackbar">
                <img v-lazy="'./icons/close_2.svg'" alt="Dismiss" class="copy-close-btn">
            </button>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center" style="height: 15vh;">
            <div class="col-12 h-100 tw-relative px-sm-0 pt-2 pt-md-0">
                <textarea class="emojis-wiki-textarea w-100 h-100 border-0 tw-outline-none tw-pr-5 tw-text-blue-100"
                          :placeholder="textarea_placeholder"
                          v-model="text"
                          rows="3"
                          style="font-size: 24px;"
                          ref="emojis_textarea"
                ></textarea>
                <div style="width: 24px; height: 24px; border-radius: 50%; padding: 7px"
                     class="tw-absolute tw-bg-grey-20 tw-right-2 tw-top-2 sm:tw-right-0 md:tw-right-2 sm:tw--top-0.5 tw-cursor-pointer"
                     @click="text=''"
                     v-if="text.trim() != ''"
                >
                    <img class="tw-w-4" v-lazy="'./icons/cancel.svg'" alt="">
                </div>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center"  style="height: 15vh;">
            <div class="col-6 px-md-0">
                <div class="tw-w-11 ml-2 tw-py-2.5 tw-relative z-1">
                    <div class="row tw-absolute tw-bg-white tw-border tw-border-grey-30 tw-left-3 -z-1 pt-10 text-center"
                         :class="`tw-transform ${hovered ? '' : 'tw-pointer-events-none tw--translate-y-3 tw-hidden'} tw-transition tw-duration-300`"
                         style="width: 242px; height: 44px; border-radius: 4px; top: -44px"
                    >
                            <div v-for="(emj, index) in 6" :key="emj" @click="setVariation(index - 1)"
                                 class="tw-relative tw-flex tw-h-full p-2 tw-transition tw-pointer-events-auto tw-duration-200 tw-cursor-pointer emojis-wiki-emojipicker__pickvariation"
                                 style="width: 40px"
                            >
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
            <div class="col-6 px-sm-0 tw-relative">
                <p style="font-size: 12px; font-weight: 400"
                   class="mb-1 tw-text-primary-100 tw-text-right text-truncate tw-absolute px-sm-0 px-md-2 tw-right-2 tw--top-6 sm:tw--top-5 md:tw--top-8"
                   v-if="selected!=null"
                >
                    {{selected.name}}
                </p>
                <button class="btn btn-primary btn-copy" style="float: right; width: 117px; height: 44px; font-size: 16px !important;" @click="copyToBuffer">{{copy_btn}}</button>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center" style="height: 50vh;">
            <div class="col-12 h-100 px-0 px-sm-0">
                <div class="emojis-wiki__container tw-bg-grey-20 " style="border-radius: 8px;">
                    <div class="emojis-wiki-emojipicker__tabs tw-overflow-x-hidden tw-relative px-2 mb-2 tw-uppercase tw-text-grey-50 tw-h-auto tw-flex">
                        <span class="px-2 tw-py-3.5 tw-transition tw-duration-200 z-1 noselect"
                              :class="{ 'tw-text-primary-100 tw-border-b-2 tw-border-primary-50': search_tab === true }"
                              @click="search_tab = true"
                              style="font-size: 12px"
                        >
                            {{search_text}}
                        </span>
                        <div class="tw-overflow-x-auto tw-flex emojis-wiki-scrollbar-hidden w-100 m-auto justify-content-between">
                            <span v-for="(category, c) in categories"
                                  :key="c" :class="{ 'tw-text-primary-100 tw-border-b-2 tw-border-primary-50': c === active&&!search_tab }"
                                  class="tw-flex tw-flex-none px-2 tw-py-3.5 tw-transition tw-duration-300 z-1 noselect"
                                  style="font-size: 12px"
                                  :id="'category'+c"
                                  @click="goToCategory(c)"
                            >
                                {{category}}
                            </span>
                        </div>
                        <div class="tw-w-full tw-border-b-2 tw-border-grey-30 tw-absolute tw-left-0 tw-bottom-0"></div>
                    </div>
                    <div class="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-y-hidden tw-bg-grey-20 pb-2" style="height: calc(50vh - 50px);border-radius: 8px;">
<!--                        overscroll-behavior: contain ;-->
                        <div id="emojis-wiki" class="tw-overflow-auto tw-relative tw-h-full tw-w-full pb-2">
                            <div v-if="search_tab">
                                <div class="px-3 py-2">
                                    <div class="row mt-2 w-100 m-auto tw-relative">
                                        <input v-model="search"
                                               @input="runSearch"
                                               class="w-100 tw-outline-none tw-text-sm py-2 px-3 tw-rounded w-ring tw-ring-4 tw-ring-grey-10"
                                               style="font-size: 16px;line-height: 147%;"
                                               :placeholder="search_text"
                                        />
                                        <div style="width: 24px; height: 24px; border-radius: 50%;padding: 7px;"
                                             class="tw-absolute tw-bg-grey-20 tw-right-1.5 tw-top-1.5 tw-cursor-pointer"
                                             @click="search=''"
                                             v-if="search.trim() !== ''"
                                        >
                                            <img class="tw-w-4" v-lazy="'./icons/cancel.svg'" alt="">
                                        </div>
                                        <p style="font-size: 12px; font-weight: 400"
                                           class="mt-3 mb-1 p-0 tw-text-grey-50 tw-text-left text-truncate"
                                           v-if="search_results.length<=0"
                                        >
                                            {{search_notes}}
                                        </p>
                                    </div>
                                </div>
                                <div class="emojis-grid px-3 tw-center tw-grid tw-justify-items-start tw-overflow-x-hidden">
                                    <div
                                            v-for="(result, e) in search_results"
                                            :key="`emoji_${e}`"
                                            class="emoji-cell d-flex tw-items-center tw-overflow-hidden tw-cursor-pointer tw-transition tw-duration-200 tw-rounded-md align-items-center hover:tw-bg-grey-10"
                                            @mouseenter="selected = { ...result.item }"
                                            @mouseleave="selected = ''"
                                            @click="chooseEmoji(result.item)"
                                    >
                                        <div class="emoji d-flex tw-justify-center align-items-center m-auto">
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
                                        <div class="emojis-grid px-3 tw-center tw-grid tw-justify-items-start tw-overflow-x-hidden">
<!--                                           tw-grid tw-grid-cols-8 md:tw-grid-cols-12 gap-2  tw-flex tw-flex-items tw-flex-wrap sm:-->
                                           <div
                                                   v-for="(emoji, e) in $data[category]"
                                                   :key="`emoji_${e}`"
                                                   class="emoji-cell d-flex tw-items-center tw-overflow-hidden tw-cursor-pointer tw-transition tw-duration-200 tw-rounded-md align-items-center hover:tw-bg-grey-10"
                                                   @mouseenter="selected = { ...emoji }"
                                                   @mouseleave="selected = ''"
                                                   @click="chooseEmoji(emoji)"
                                           >
<!--                                               tw-w-8 sm:tw-w-full tw-h-full-->
                                               <div class="emoji d-flex tw-justify-center align-items-center m-auto">
                                                   <template v-if="emoji.variations && variation >= 0 && emoji.variations[variation]">
                                                       {{ emoji.variations[variation] }}
                                                   </template>
                                                   <template v-else>
                                                       {{ emoji.emoji }}
                                                   </template>
                                               </div>
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
                search_results: [],
                snack:false,
                timeout:null,
                search_text:'Search',
                copy_btn:'Copy',
                copy_text:'Copied',
                textarea_placeholder: "Select emoji and copy",
                page_name: "Emoji Keyboard",
                search_notes: "Start writing the name of the emoji"
            }
        },
        created () {
            let data = require(`@/assets/emojis_data/${this.local}/emojis.json`);
            this.emojis = data;
            this.categories = data.categories;
            this.search_text = data.search;
            this.copy_btn = data.copy_btn;
            this.copy_text = data.copy_text;
            this.textarea_placeholder = data.textarea_placeholder;
            this.page_name = data.page_name;
            this.search_notes = data.search_notes;
            // this.copy_text = data.copy_text;
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
                this.search_text = data.search;
                this.copy_btn = data.copy_btn;
                this.copy_text = data.copy_text;
                this.textarea_placeholder = data.textarea_placeholder;
                this.page_name = data.page_name;
                this.search_notes = data.search_notes;
                this.categories = data.categories;
                this.categories.forEach(category => {
                    const index = this.emojis.categories.findIndex(cat => cat === category);
                    if (index >= 0) {
                        this.$data[category] = this.emojis.list.filter(emoji => emoji.category === index);
                    }
                })
            },
            copyToBuffer() {
                if(this.text.trim() !==''){
                    let t = this;
                    const emojis_snack = document.getElementById('snack');
                    this.$copyText(this.text).then(function (e) {
                        if( t.snack === true) {
                            emojis_snack.style.visibility = 'hidden';
                            t.closeSnackbar();
                            setTimeout(() => {
                                emojis_snack.style.visibility = 'visible';
                                t.snack = true;
                            }, 150)
                        }
                        else {
                            t.snack = true;
                        }

                        t.timeout = setTimeout(() => {
                            t.snack = false;
                        }, 5000)

                        console.log(e)
                    }, function (e) {
                        console.log(e)
                    })
                }
            },
            closeSnackbar() {
                this.snack = false;
                clearTimeout(this.timeout)
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
                    document.getElementById('category'+index).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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
                    document.getElementById('category'+index).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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
                let textarea = this.$refs.emojis_textarea;

                //Methods 2
                // let cursorPosition = textarea.selectionStart;
                // value = (value.variations && this.variation >= 0) ? value.variations[this.variation] : value.emoji;
                // let output = [this.text.slice(0, cursorPosition), value, this.text.slice(cursorPosition)].join('');
                // this.text = output;
                // this.$nextTick(() => textarea.setSelectionRange(cursorPosition+value.length, cursorPosition+value.length));

                //Methods 1
                value = (value.variations && this.variation >= 0) ? value.variations[this.variation] : value.emoji;
                this.text += value;
                textarea.scrollTop = textarea.scrollHeight ;
                const active = document.activeElement;
                if(active !== textarea) {
                    textarea.blur()
                }
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
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }
    .emojis-wiki-textarea::placeholder {
        opacity: 1 !important;
        color:#606D9B !important;
    }
    .emojis-wiki input::placeholder {
        opacity: 1 !important;
        color:#606D9B !important;
    }
    .emojis-wiki-textarea::-moz-placeholder,
    .emojis-wiki-textarea::-webkit-input-placeholder,
    .emojis-wiki-textarea::-ms-input-placeholder {
        color:#606D9B !important;
        opacity: 1;
    }
    .emojis-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 72px);
        justify-content: space-between;
    }
    .emoji-cell {
        height: 72px;
        width: 72px;
    }
    .emoji {
        height: 44px;
        width: 44px;
        /*font-size: 2.4rem;*/
        font-size: 38.4px;
    }
    .copy-close-btn {
        /*width:1.256rem;*/
        width:20.096px;
        height:auto;
        /*-webkit-transform:translateY(-.1rem);*/
        /*-ms-transform:translateY(-.1rem);*/
        /*transform:translateY(-.1rem);*/
        -webkit-transform:translateY(-1.6px);
        -ms-transform:translateY(-1.6px);
        transform:translateY(-1.6px);
    }
    .snackbar-container p {
        font-weight:700!important;
        /*font-size:1rem!important;*/
        font-size:16px!important;
        /*line-height:147%!important;*/
        color:#427951!important
    }
    @media(max-width:768px) {
        .snackbar-container p {
            /*font-size:1.8rem!important*/
        }
        .snackbar-container {
            /*border-radius:.4rem!important;*/
            border-radius:6.4px !important;
            /*padding:1.5rem 2rem!important;*/
            /*left:2rem!important;*/
            /*max-width:calc(100% - 8rem)*/
        }
    }
    .snackbar-container {
        -webkit-text-size-adjust: 100%;
        transition: all 400ms ease-in-out;
        transition-property: top, right, bottom, left, opacity;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        min-height: 14px;
        background-color: #caff96;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        line-height: 22px;
        padding: 18px 24px;
        bottom: -100px;
        top: -100px;
        opacity: 0;
        z-index: 9999;
        /*border-radius:.8rem!important;*/
        border-radius: 12.8px !important;
        /*padding:1.8rem 2.2rem 1.5rem!important;*/
    }
    .snackbar-container .action {
        background: inherit;
        /*display: inline-block;*/
        border: none;
        font-size: inherit;
        text-transform: uppercase;
        color: #4caf50;
        margin: 0 0 0 24px;
        padding: 0;
        min-width: min-content;
        cursor: pointer;

        display:-webkit-flex!important;
        display:-ms-flexbox!important;
        display:flex!important;
        -webkit-align-items:center;
        -ms-flex-align:center;
        align-items:center;
        -webkit-justify-content:center;
        -ms-flex-pack:center;
        justify-content:center;
        outline:0
    }

    @media (min-width: 640px) {
        .snackbar-container {
            min-width: 288px;
            max-width: 568px;
            display: inline-flex;
            border-radius: 2px;
            margin: 24px; }
    }

    @media (max-width: 640px) {
        .snackbar-container {
            left: 0;
            right: 0;
            width: 98%;
            margin: auto;
        }
        .emojis-wiki {
            height: 79vh !important;
        }
        .emojis-grid {
            grid-template-columns: repeat(auto-fill, 44px);
        }
        .emoji-cell {
            height: 44px;
            width: 44px;
        }
        .emoji {
            height: 28px;
            width: 28px;
            /*font-size: 1.5rem;*/
            font-size: 24px;
        }
    }

    .snackbar-pos.top-center {
        bottom: auto !important;
        top: 10px;
        left: 50%;
        transform: translate(-50%, 0); }

    @media (max-width: 640px) {
        .snackbar-pos.top-center {
            left: 0;
            transform: none;
        }
    }
    .snackbar-container.hide {
        bottom: auto !important;
        top: -200px !important;
        opacity: 0 !important;
    }
    .snackbar-container.show {
       visibility: visible !important;
        bottom: auto !important;
        top:10px !important;
        opacity:1 !important;
    }

    .emojis-wiki {
        font-family: Arial,sans-serif;
        font-size: 12px;
        font-weight: 400;
        height: 100%;
    }
    .emojis-wiki .btn-copy {
        transition: all 150ms ease-out;
        background-color: #3d6eff!important;
    }
    .emojis-wiki .btn-copy:hover {
        background-color: #3a65e3!important;
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