<template>
    <div class="home">
        <NavBar />
    <v-container>
      <h1>Welcome to Expense Tracker</h1>
      <p>This is the home page.</p>
    </v-container>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 20px;
}
</style>
