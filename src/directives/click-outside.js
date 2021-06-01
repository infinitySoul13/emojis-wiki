export default {
  beforeMount (el, binding) {
    el.clickOutsideEvent = function(event) {
      const classes= ['emojis-wiki-emojipicker__pickvariation', 'emojis-wiki-emojipicker__emojibutton', 'emojis-wiki-emojipicker__autocomplete', 'emojis-wiki-emojipicker__input']
      if (classes.find(classe => event.target.classList.contains(classe))) {
        return
      }
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}