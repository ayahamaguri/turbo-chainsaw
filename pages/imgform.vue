<template>
  <div>
    <img-sheet></img-sheet>
    <v-btn href="/display">投稿する！<v-icon>mdi-upload</v-icon> </v-btn>
  </div>
</template>
<script type="ts">
import { defineComponent, ref} from '@nuxtjs/composition-api'
import ImgSheet from '~/components/ImgSheet.vue'
export default defineComponent({
  components: { ImgSheet },
    setup(){
      const ImgData = ref([
        {
         ititle:'',
         img:'',
         iexplanation:'',
         itags:'',
        }
      ])
      return {
        ImgData
      }
    }
})
</script>
