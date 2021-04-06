<template>
  <div class="nav">
    <!--El atributo app es para que Vuetify automaticamente se encargue del escalado del elemento-->
    <v-app-bar app   color="#4DB6AC"
  flat>

       <v-container fluid>
       <v-row> 
        <v-spacer></v-spacer>
         <v-col cols="6">
         </v-col>
         <v-icon  color="white">mdi-magnify</v-icon>
        <v-divider color="white" vertical></v-divider>
         <v-col cols="2">
            <v-list-item>
            <v-list-item-avatar class="pa-0">
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
         </v-col>
         <v-col cols="2">
             <v-list-item dark class="pa-0">
            <v-list-item-content>
              <v-list-item-title class="title">
                Adrian Stefan
              </v-list-item-title>
              <v-list-item-subtitle>Recursos Humanos</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
         </v-col>
          <v-icon medium color="white">mdi-logout</v-icon>
       </v-row>
     </v-container> 
    </v-app-bar>
  </div>
</template>
<!--Recibimos todos los links de layout/default.vue-->
<!--Es el arreglo "links" el props que pasa los links-->
<script>
import { mapGetters } from 'vuex'
export default {
   data() {
    return {
      links: [
        { label: 'Iniciar sesión', url: '/login' }
      ]
          }
  },
  methods: {
    
  }
}
</script>

<style></style>
