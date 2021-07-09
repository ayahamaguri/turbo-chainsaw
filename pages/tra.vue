<template>
  <div>
    <!-- <v-card class="mx-auto" max-width="600">
      <v-card-title class="blue-grey white--text">
        <span class="text-h6">Logs</span>
        <v-spacer></v-spacer>
        <v-btn
          :outlined="interval == null"
          :color="interval == null ? 'white' : 'primary'"
          dark
          depressed
          @click="interval == null ? start() : stop()"
        >
          Realtime Logging
        </v-btn>
      </v-card-title>
      <v-card-text class="py-0">
        <v-timeline dense>
          <v-slide-x-reverse-transition group hide-on-leave>
            <v-timeline-item
              v-for="item in items"
              :key="item.id"
              :color="item.color"
              small
              fill-dot
            >
              <v-alert
                :value="true"
                :color="item.color"
                :icon="item.icon"
                class="white--text"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-alert>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-card-text>
    </v-card> 
    <div>
      <v-btn @click="aaa = !aaa">demo</v-btn>
      <v-slide-x-reverse-transition>
        <p v-if="aaa">ozwald</p>
      </v-slide-x-reverse-transition>
    </div>
    -->
    <v-spacer></v-spacer>
    <div>
      <v-sheet class="mx-auto" elevation="8" max-width="600">
        <v-slide-group v-model="model" class="pa-4" center-active>
          <v-slide-item
            v-for="(novel, index) in novels"
            :key="index"
            cols="12"
            lg="2"
          >
            <v-slide-x-transition>
              <v-card class="mx-auto" max-width="200"
                ><p>{{ novel.title }}</p>
                <p>{{ novel.text }}</p></v-card
              >
            </v-slide-x-transition>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>
<!--
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

const COLORS = ['info', 'warning', 'error', 'success'] as const
const ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle',
}

export default defineComponent({
  setup() {
    const aaa = ref(true)
    // const hihyouji = () => false
    const interval = ref<number>()
    const items = ref([
      {
        id: 1,
        color: 'info',
        icon: ICONS.info,
      },
    ])
    const nonce = ref(2)
    const genIcon = (color: keyof typeof ICONS) => ICONS[color]
    const genColor = () => COLORS[Math.floor(Math.random() * 3)]
    const genAlert = () => {
      const color = genColor()

      return {
        color,
        icon: genIcon(color),
      }
    }
    const addEvent = () => {
      // このへん色設定
      let { color, icon } = genAlert()

      const previousColor = items.value[0].color

      while (previousColor === color) {
        color = genColor()
      }

      // 配列の最初に要素追加
      // idはnonceを＋＋したやつ
      items.value.unshift({
        id: nonce.value++,
        color,
        icon,
      })

      // nonce（id）が6を超えると
      // 配列の最後の要素削除
      if (nonce.value > 6) {
        items.value.pop()
      }
    }
    const start = () => (interval.value = window.setInterval(addEvent, 3000))
    const stop = () => {
      clearInterval(interval.value)
      interval.value = undefined
    }
    return {
      interval,
      items,
      nonce,
      start,
      stop,
      aaa,
    }
  },
  // data: () => ({
  //   interval: null,
  //   items: [
  //     {
  //       id: 1,
  //       color: 'info',
  //       icon: ICONS.info,
  //     },
  //   ],
  //   nonce: 2,
  //   // number used once、1回だけ使われる番号
  // }),

  // beforeDestroy() {
  //   this.stop()
  // },

  // methods: {
  //   addEvent() {
  //     // このへん色設定
  //     let { color, icon } = this.genAlert()

  //     const previousColor = this.items[0].color

  //     while (previousColor === color) {
  //       color = this.genColor()
  //     }

  //     // 配列の最初に要素追加
  //     // idはnonceを＋＋したやつ
  //     this.items.unshift({
  //       id: this.nonce++,
  //       color,
  //       icon,
  //     })

  //     // nonce（id）が6を超えると
  //     // 配列の最後の要素削除
  //     if (this.nonce > 6) {
  //       this.items.pop()
  //     }
  //   },
  //   genAlert() {
  //     const color = this.genColor()

  //     return {
  //       color,
  //       icon: this.genIcon(color),
  //     }
  //   },
  //   genColor() {
  //     return COLORS[Math.floor(Math.random() * 3)]
  //   },
  //   genIcon(color) {
  //     return ICONS[color]
  //   },
  //   // 3秒のインターバルの後、addEvent関数動く
  //   start() {
  //     this.interval = setInterval(this.addEvent, 3000)
  //   },
  //   stop() {
  //     clearInterval(this.interval)
  //     this.interval = null
  //   },
  // },
})
</script> -->

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
interface Novel {
  title: string
  text: string
}
export default defineComponent({
  setup() {
    const model = ref()
    const novels = ref<Novel[]>([])
    const novelsOrigin = ref<Novel[]>([
      {
        title: '野田の日記',
        text: '「あれは漫才じゃない」と言われた。僕もそう思う。',
      },
      { title: '呪術廻戦', text: '記録ー2018年6月 宮城県仙台市杉沢第三高校' },
      {
        title: 'aa',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
      },
      {
        title: 'ii',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
      },
      {
        title: 'uu',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
      },
      {
        title: 'ee',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
      },
    ])
    setInterval(() => {
      const novel = novelsOrigin.value.pop()
      if (novel) novels.value.push(novel)
    }, 1000)
    return {
      novels,
      model,
    }
  },
})
</script>
