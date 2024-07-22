<template>
    <v-app-bar>
      <v-toolbar-title>Expense Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/login" text>Login</v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  /* Add any additional styles here */
</style>
