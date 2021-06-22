<template>
  <div>
    <v-form>
      <v-text-field :counter="30" label="タイトル">{{ ntitle }}</v-text-field>
      <v-textarea label="本文">{{ text }}</v-textarea>
      <v-textarea label="説明文など">{{ nexplanation }}</v-textarea>
      <v-text-field :counter="30" label="タグ">{{ ntags }}</v-text-field>
    </v-form>
  </div>
</template>
<script type="ts">
import { defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({
    // propsで受け取る属性を定義
  name: 'NovelData',
  props: {
      ntitle:{
          type: String,
          default: '',
      },
      text:{
          type: String,
          default: '',
      },
      nexplanation:{
          type: String,
          default: '',
      },
      ntags:{
          type: String,
          default: '',
      },
  },
    setup(){
    }
})
</script>
