<template>
  <div>
    <v-row>
      <v-col v-for="(imgdata, index) in ImgDatas" :key="index" cols="12" lg="3">
        <img-sheet
          :ititle="imgdata.ititle"
          :img="imgdata.img"
          :iexplanation="imgdata.iexplanation"
          :itags="imgdata.itags"
        >
        </img-sheet>
        <v-btn href="/display">投稿する！<v-icon>mdi-upload</v-icon> </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script type="ts">
import { defineComponent, ref} from '@nuxtjs/composition-api'
import ImgSheet from '~/components/ImgSheet.vue'
export default defineComponent({
  components: { ImgSheet },
    setup(){
      const ImgDatas = ref([
        {
         ititle:'',
         img: any,
         iexplanation:'',
         itags:'',
        }
      ])
      return {
        ImgDatas
      }
    }
})
</script>
