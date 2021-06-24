<template>
  <v-card elevation="2">
    <div class="ncard">
      <v-list-item-title>{{ ititle }}</v-list-item-title>
      <v-list-item>{{ sample }}</v-list-item>
      <v-list-item>{{ iexplanation }}</v-list-item>
      <v-list-item>{{ itags }}</v-list-item>
    </div>
    <v-btn fab color="pink" dark small><v-icon dark>mdi-heart</v-icon></v-btn>
  </v-card>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // propsで受け取る属性を定義
  name: 'NovelDatas',
  props: {
    ntitle: {
      type: String,
      default: '',
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
