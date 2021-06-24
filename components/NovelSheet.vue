<template>
  <div id="novelsheet">
    <v-form>
      <v-text-field :counter="30" label="タイトル"></v-text-field>
      <v-textarea label="本文"></v-textarea>
      <v-textarea label="説明文など"></v-textarea>
      <v-text-field :counter="30" label="タグ"></v-text-field>
      <v-text-field label="サンプル数字"></v-text-field>
      <v-btn @click="increment">+</v-btn>
    </v-form>
  </div>
</template>
<script type="ts">
import { defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({

})
</script>
