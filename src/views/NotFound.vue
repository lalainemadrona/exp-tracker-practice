<template>
    <v-container>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <v-btn color="primary" @click="$router.push('/')">Go to Home</v-btn>
    </v-container>
  </template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
  h1 {
    color: red;
}
</style>
