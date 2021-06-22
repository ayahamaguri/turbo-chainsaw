<template>
  <div>
    <v-file-input accept="image/*" label="ファイルを選択" chips>{{
      img
    }}</v-file-input>
    <v-form>
      <v-text-field :counter="30" label="タイトル">{{ ititle }}</v-text-field>
      <v-textarea label="説明文など">{{ iexplanation }}</v-textarea>
      <v-text-field :counter="30" label="タグ">{{ itags }}</v-text-field>
    </v-form>
  </div>
</template>
<script type="ts">
import { defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ImgData',
  props: {
    img:{
          type: Image,
          default: '',
      },
      ititle:{
          type: String,
          default: '',
      },
      iexplanation:{
          type: String,
          default: '',
      },
      itags:{
          type: String,
          default: '',
      },
  },
    setup(){
    }
})
</script>
