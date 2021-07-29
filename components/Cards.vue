<template>
  <v-card elevation="2">
    <div class="data"></div>
    <p>{{ title }}</p>
    <p>{{ text }}</p>
    <v-btn icon color="pink" small><v-icon>mdi-heart-outline</v-icon></v-btn>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // propsで受け取る属性を定義
  name: 'DataArrs',
  props: {
    title: {
      type: String,
      default: 'card data',
    },
    text: {
      type: String,
      default: 'card data',
    },
  },
})
</script>
