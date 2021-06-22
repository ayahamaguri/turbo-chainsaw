<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="2">
          <v-bottom-sheet v-model="sheet">
            <template #activator="{ on, attrs }">
              <v-btn color="orange" dark v-bind="attrs" v-on="on"
                >作品を投稿する</v-btn
              >
            </template>
            <v-sheet class="text-center">
              <v-breadcrumbs :items="categories" large></v-breadcrumbs>
            </v-sheet>
          </v-bottom-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="2">
          <Cards />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script type="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const categories = ref([
      {
        text: 'イラストを投稿する',
        to: '/imgform',
      },
      {
        text: '小説を投稿する',
        to: '/novelform',
      },
    ])
    return {
      categories,
    }
  },
})
</script>
