import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    NovelDatas: {
      ntitle: '',
      text: '',
      nexplanation: '',
      ntags: '',
      sample: 0,
    },
  },
  mutations: {
    increment(state) {
      state.NovelDatas.sample++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
})
Vue.use(Vue)
Vue({
  el: '#display',
  computed: {
    sample() {
      return store.NovelDatas.sample
    },
  },
  methods: {
    increment() {
      store.commit('increment')
    },
  },
})

// Vue({
//   el: '#novelform',
//   store,
//   components: { NovelSheet },
//   template: `
//   <div id="novelform">
//   <novel-sheet></novel-sheet>
// </div>
//   `,
// })

// const moduleIMG = {
//   state: {},
// }
// const store = new Vuex.Store({
//   modules: {
//     text: moduleTEXT,
//     img: moduleIMG,
//   },
// })
