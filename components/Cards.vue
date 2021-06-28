<template>
  <v-card elevation="2">
    <div class="data">
      <p>{{ sample }}</p>
    </div>
    <v-btn fab color="pink" dark small><v-icon dark>mdi-heart</v-icon></v-btn>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // propsで受け取る属性を定義
  name: 'NovelDatas',
  props: {
    sample: {
      type: String,
      default: 'card data',
    },
  },
  setup() {},
})
</script>
