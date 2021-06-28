<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="2">
          <v-bottom-sheet v-model="sheet">
            <template #activator="{ on, attrs }">
              <v-btn color="orange" dark v-bind="attrs" v-on="on"
                >作品を投稿する</v-btn
              >
            </template>
            <v-sheet class="text-center">
              <v-btn
                color="purple"
                dark
                href="/novelform"
                v-bind="attrs"
                v-on="on"
                >小説を投稿する</v-btn
              >
              <v-btn
                color="orange"
                dark
                href="/imgform"
                v-bind="attrs"
                v-on="on"
                >イラストを投稿する</v-btn
              >
            </v-sheet>
          </v-bottom-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <!-- <v-col
          v-for="(noveldata, index) in NovelData"
          :key="index"
          cols="12"
          lg="2"
        > -->
        <div class="display">
          <cards></cards>
        </div>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script type="ts">
import { defineComponent, } from '@vue/composition-api'
import Cards from '~/components/Cards.vue'

export default defineComponent({
  components: { Cards },
  setup(){
      // const NovelDatas = ref([
      //   {
      //    sample:'',
      //   }
      // ])
      // return{
      //   NovelDatas
      // }
    }
})
</script>
