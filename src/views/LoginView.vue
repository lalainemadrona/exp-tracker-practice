<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          rounded="lg"
        >
          <div class="text-h6 mb-8 font-weight-bold d-flex align-center justify-center">
            Sign in to your account
          </div>

          <!-- <div class="text-subtitle-1 text-medium-emphasis">
            Account
          </div> -->

          <v-text-field
            class="custom-input"
            append-inner-icon="mdi-email-outline"
            label="Email Address"
            density="compact"
            variant="outlined"
            color="#4CAF50"
          ></v-text-field>

          <v-text-field
            class="custom-input"
            label="Password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            variant="outlined"
            @click:append-inner="visible = !visible"
            color="#4CAF50"
          ></v-text-field>
          <a
            class="text-subtitle-1 d-flex justify-end align-end text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot password?
          </a>

          <v-btn class="login-btn mb-10 mt-3"  size="large" variant="tonal" block>
            Login
          </v-btn>

          <!-- <v-card
            class="mb-12"
            color="surface-variant"
            variant="tonal"
          >
            <v-card-text class="text-medium-emphasis text-caption">
              Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
            </v-card-text>
          </v-card> -->

          <v-card-text class="text-center mb-1">
            <span class="text-medium-emphasis"> Don't have an account yet?</span>
            <a
              class="text-blue text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Create account
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      visible: false
    }
  },
  methods: {
    handleLogin () {
      // Handle login logic
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.custom-input .v-input__control .v-field__input {
  border-color: #4CAF50 !important;
  border-width: 1px !important;
}

.login-btn {
  background-color: #4CAF50 !important;
  color: #fdfedf;
}

.login-btn:hover {
  background-color: red;
}

</style>
