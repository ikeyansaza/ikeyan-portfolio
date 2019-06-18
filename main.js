//モーダルウィンドウの導入
Vue.component('modal', {
    template: '#modal-template'
})

new Vue({
    el: '#modal',
    data: {
        showModal: false,
    }
})

//アコーディオンの導入
Vue.component('vue-slide-up-down', VueSlideUpDown)

new Vue({
  el: '#contact',

  data: () => ({
    active: false,
  }),
  methods: {
    toggle () {
      this.active = !this.active;
    }
  }
})

//ライブラリの呼び出し
//ページトップの実装（PCのみ）
Vue.use(GoTop);

new Vue({
  el: '#app',
  data: {
    List: []
  }
});
