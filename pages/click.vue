<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="log">@click="log"</v-btn>
        <v-btn @click="(event) => log(event)"
          >@click="(event) => log(event)"</v-btn
        >
        <v-btn @click="log('aaa')">@click="log('aaa')"</v-btn>
        <v-btn @click="() => log('aaa')">@click="() => log('aaa')"</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {
      log: console.log,
    }
  },
})
</script>
