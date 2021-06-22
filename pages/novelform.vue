<template>
  <div>
    <novel-sheet></novel-sheet>
    <v-btn href="/display">投稿する！<v-icon>mdi-upload</v-icon> </v-btn>
  </div>
</template>
<script type="ts">
import { defineComponent, ref} from '@nuxtjs/composition-api'
import NovelSheet from '~/components/NovelSheet.vue'
export default defineComponent({
  components: { NovelSheet },
    setup(){
      const NovelData = ref([
        {
         ntitle:'',
         text:'',
         nexplanation:'',
         ntags:'',
        }
      ])
      return{
        NovelData
      }
    }
})
</script>
