<template>
  <div>
    <h1>管理人へのお問い合わせ</h1>
    <h3>あなたが使っていて感じたこと、見つけた問題をお寄せください。</h3>
    <v-form>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="お名前"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-textarea label="お問い合わせ内容" class="ma-5"></v-textarea>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> 送信 </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>
