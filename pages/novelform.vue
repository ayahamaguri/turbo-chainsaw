<template>
  <div>
    <div id="formsample">
      <v-form>
        <v-text-field
          v-model="newtitle"
          placeholder="タイトルを入力してください"
        ></v-text-field>
        <v-textarea
          v-model="newtext"
          placeholder="本文を入力してください"
        ></v-textarea>
        <v-btn @click="pushDataArrs(newData), log(newData)">sousin</v-btn>
      </v-form>
    </div>

    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(dataArr, index) in dataArrs"
          :key="index"
          cols="12"
          lg="2"
        >
          <div class="display">
            <Cards :title="dataArr.title" :text="dataArr.text"></Cards>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Cards from '~/components/Cards.vue'
export default defineComponent({
  components: { Cards },

  setup() {
    const link = '#'
    const newtitle = ref('')
    const newtext = ref('')
    const newData = ref({ title: newtitle, text: newtext })
    const dataArrs = ref([
      {
        title: '野田の日記',
        text: '「あれは漫才じゃない」と言われた。僕もそう思う。',
      },
      { title: '呪術廻戦', text: '記録ー2018年6月　宮城県仙台市杉沢第三高校' },
    ])
    const pushDataArrs = (newData: { title: string; text: string }) =>
      dataArrs.value.push(newData)
    // const pushTitleArrs = (newtitle: string) => titleArrs.value.push(newtitle)

    return {
      link,
      newtitle,
      newtext,
      newData,
      dataArrs,
      pushDataArrs,
      log: console.log,
    }
  },
})
</script>
