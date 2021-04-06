<template>

      <v-form fluid v-model="isFormValid" @submit.prevent="register">
        <v-file-input
      accept="image/*"
      label="Selecciona imagen"
      ></v-file-input>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Nombre(s)"
          value="Nombre(s)"
          required
          outlined
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="surname"
          :error-messages="nameErrors"
          label="Apellidos(s)"
          value="Apellidos(s)"
          required
          outlined
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
          <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Correo electrónico"
          value="Correo electrónico"
          type="email"
          outlined
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
      v-model="select"
      :items="areas"
      label="Área"
      outlined
    ></v-select>
<v-select
      v-model="select"
      :items="estatus"
      label="Estatus"
      outlined
    ></v-select>

        <v-alert v-show="error" type="error">
          {{ error }}
        </v-alert>
        <v-container fluid>
          <v-row>
             <v-btn class="mx-2" color="white" @click="clear">Cancelar</v-btn>
         <v-btn color="primary" :disabled="!isFormValid" type="submit" 
          >Agregar administrador</v-btn>
          </v-row>
        </v-container>
       
      </v-form>

</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(40) },
    password: { required },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password')
    },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data() {
    return {
      name: '',
      email: '',
      error: '',
      areas: ['area 1', 'area 2', 'area 3'],
      estatus: ['estatus 1', 'estatus 2', 'estatus 3'],
      isFormValid: false,
      checkbox: false,
      show: false,
      password: '',
      passwordConfirmation: '',
      passwordRules: [
        (password) => !!password || 'Password is required',
        (password) =>
          password.length >= 6 || 'Password must be at least 6 characters',
        (confirmation) =>
          confirmation === this.password || 'Passwords must match'
      ]
    }
  },

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 40 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    register() {
      this.error = ''
      this.$nuxt.$loading.start()
      this.$store
        .dispatch('calls/register', {
          // Enviamos un objeto, denotado por {}, que contiene el nombre, username, email y password
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch((err) => {
          this.$nuxt.$loading.fail()
          this.$nuxt.$loading.finish()
          // console.log(err.response)
          this.error = err.response.data.error
        })
    },
    clear() {
      this.$v.$reset()
      this.password = ''
      this.passwordConfirmation = ''
      this.error = ''
      this.name = ''
      this.email = ''
      this.checkbox = false
    }
  }
}
</script>
