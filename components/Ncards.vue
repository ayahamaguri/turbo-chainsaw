<template>
  <v-card elevation="2">
    <div class="data">
      <v-list-item-title>{{ ntitle }}</v-list-item-title>
      <v-list-item>{{ sample }}</v-list-item>
      <v-list-item>{{ nexplanation }}</v-list-item>
      <v-list-item>{{ ntags }}</v-list-item>
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
    ntitle: {
      type: String,
      default: 'Ncards data',
    },
    text: {
      type: String,
      default: '',
    },
    nexplanation: {
      type: String,
      default: '',
    },
    ntags: {
      type: String,
      default: '',
    },
    sample: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
})
</script>
