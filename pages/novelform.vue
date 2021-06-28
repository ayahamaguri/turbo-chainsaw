<template>
  <div>
    <!-- <v-row>
      <v-col
        v-for="(noveldata, index) in NovelDatas"
        :key="index"
        cols="12"
        lg="6"
      > -->
    <!-- <div id="novelform">
          <v-form id="nform">
            <v-text-field :counter="30" label="タイトル"></v-text-field>
            <v-textarea label="本文"></v-textarea>
            <v-textarea label="説明文など"></v-textarea>
            <v-text-field :counter="30" label="タグ"></v-text-field>
            <v-text-field label="サンプル数字"></v-text-field>
            <v-btn @click="increment">+</v-btn>
          </v-form>
        </div> -->
    <!-- <div id="sampleform">
      <v-form id="sampleform"> -->
    <!-- <input v-model="newTitle" /> -->
    <!-- <v-text-field :id="taitle" v-model="newTitle"></v-text-field>
      </v-form>
    </div>
    <v-btn id="sampleform" type="submit" @click="hyouji(), log()"
      >samplesubmit</v-btn
    >
    <p>bind:{{ taitle }}</p> -->
    <!-- <p>nyuryoku:{{ newTitle }}</p> -->
    <!-- <p>syuturyoku:{{ syuturyoku.value }}</p> -->
    <!-- <p v-for="title in syuturyoku" id="hl" :key="title">title:{{ title }}</p> -->
    <div id="app1">
      <a :href="link">{{ link }}</a>
      <v-btn value="" @click="link = 'https://google.com/'"
        >リンクをグーグルに変更</v-btn
      >
      <v-btn value="" @click="link = 'https://yahoo.co.jp/'"
        >リンクをyahooに変更</v-btn
      >
    </div>
    <div id="formsample">
      <v-form>
        <v-text-field :v-model="newtitle">title nyu-ryoku</v-text-field>
        <v-btn @click="pushTitleArrs(newtitle)">sousin</v-btn>
      </v-form>
    </div>
    <v-row justify="center">
      <v-col
        v-for="(titleArr, index) in titleArrs"
        :key="index"
        cols="12"
        lg="3"
      >
        <v-card>
          <v-card-text>title:{{ title.titleArrs }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    title:{{ title }},<br /><br />
    newtitle:{{ newtitle }} <br /><br />
    titlearrs:{{ titleArrs }}

    <!-- HYOUJI:
    <p v-for="hyoujiArr in hyoujiArrs" id="hyouji" :key="hyoujiArr">
      {{ hyoujiArr }}
    </p> -->

    <!-- </v-col>
    </v-row> -->
    <!-- <v-btn id="nform" type="submit" href="/display"
      >投稿する！<v-icon>mdi-upload</v-icon>
    </v-btn> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
// import NovelSheet from '~/components/NovelSheet.vue'
export default defineComponent({
  // components: { NovelSheet },
  name: 'TitleArrs',
  props: {
    title: {
      type: String,
      default: 'form data',
    },
  },
  setup() {
    const link = '#'
    // const NovelDatas = ref([
    //   {
    //    ntitle:'',
    //    text:'',
    //    nexplanation:'',
    //    ntags:'',
    //    sample:0,
    //   }
    // ])
    // const newTitle = ref('')
    // const syuturyoku = ref([])
    // const hyouji = (newTitle: string) => syuturyoku.value.push(newTitle)
    // const log = () => console.log(syuturyoku.value)
    // watch(newTitle, () => console.log(newTitle.value))
    // watch(syuturyoku, () => console.log(syuturyoku.value))
    // const show = computed(() => syuturyoku.value.map((title) => title + ','))
    // const taitle = ref()
    const newtitle = ref([{ title: '' }])
    const titleArrs = ref([{ title: '野田の日記' }, { title: '呪術廻戦' }])
    // const titleArrs = ref(['野田の日記', '呪術廻戦'])
    const pushTitleArrs = (newtitle: { title: string }) =>
      titleArrs.value.push(newtitle)
    // const hyoujiArrs = computed(() =>
    //   titleArrs.value.map((hyoujiArr) => 'newtitle:' + hyoujiArr)
    // )
    return {
      link,
      newtitle,
      // syuturyoku,
      // hyoujiArrs,
      // log,
      // show,
      // newtitle,
      // taitle,
      titleArrs,
      pushTitleArrs,
    }
  },
})
</script>
