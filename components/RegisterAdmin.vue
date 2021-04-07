<template>
  <v-form fluid v-model="isFormValid" @submit.prevent="register">
    <v-file-input  v-model="filename" accept="image/*" label="Selecciona imagen"></v-file-input>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Nombre(s)"
      required
      outlined
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="surname"
      :error-messages="surnameErrors"
      label="Apellidos(s)"
      required
      outlined
      @input="$v.surname.$touch()"
      @blur="$v.surname.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Correo electrónico"
      type="email"
      outlined
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="areaSelect"
      :items="areas"
      label="Área"
      outlined
    ></v-select>
    <v-select
      v-model="estatusSelect"
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
          >Agregar administrador</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(40) },
    surname: { required, maxLength: maxLength(40) },
    email: { required, email },
  },

  data() {
    return {
      name: "",
      surname: "",
      filename:"",
      email: "",
      error: "",
      areaSelect: '',
      estatusSelect: '',
      areas: ["Recursos Humanos", "area 2", "area 3"],
      estatus: ["Activo", "Inactivo"],
      isFormValid: false,
      checkbox: false,
      show: false,
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Nombres deben ser máximo 40 carácteres");
      !this.$v.name.required && errors.push("Nombre es obligatorio.");
      return errors;
    },
    surnameErrors() {
      const errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.maxLength &&
        errors.push("Apellidos deben ser máximo 40 carácteres");
      !this.$v.surname.required && errors.push("Apellidos son obligatorios.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required &&
        errors.push("Correo electrónico es obligatorio.");
      return errors;
    },
  },

  methods: {
    register() {
      this.error = "";
      this.$nuxt.$loading.start();
      this.$store
        .dispatch("calls/register", {
          // Enviamos un objeto, denotado por {}, que contiene el nombre, username, email y password
          image: this.filename,
          name: this.name,
          surname: this.surname,
          email: this.email,
          area: this.areaSelect,
          estatus: this.estatusSelect
        })
        .then(() => {
          this.$router.push({ name: 'index' })
        })
        .catch((err) => {
          this.$nuxt.$loading.fail();
          this.$nuxt.$loading.finish();
          // console.log(err.response)
          this.error = err.response.data.error;
        });
    },
    clear() {
      this.$v.$reset();
      this.error = "";
      this.name = "";
      this.surname = "";
      this.estatusSelect="";
      this.areaSelect="";
      this.email = "";
    },
  },
};
</script>
