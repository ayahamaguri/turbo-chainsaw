<template>
  <div>
    <v-row>
      <v-col
        v-for="(noveldata, index) in NovelDatas"
        :key="index"
        cols="12"
        lg="6"
      >
        <div id="novelform">
          <novel-sheet
            :ntitle="noveldata.ntitle"
            :text="noveldata.text"
            :nexplanation="noveldata.nexplanation"
            :ntags="noveldata.ntags"
            :sample="noveldata.sample"
          ></novel-sheet>
        </div>
      </v-col>
    </v-row>
    <v-btn href="/display">投稿する！<v-icon>mdi-upload</v-icon> </v-btn>
  </div>
</template>
<script type="ts">
import { defineComponent, ref} from '@nuxtjs/composition-api'
import NovelSheet from '~/components/NovelSheet.vue'
export default defineComponent({
  components: { NovelSheet },
    setup(){
      const NovelDatas = ref([
        {
         ntitle:'',
         text:'',
         nexplanation:'',
         ntags:'',
         sample:0,
        }
      ])
      return{
        NovelDatas
      }
    }
})
</script>
