<template >
    <v-container fluid ma-8>
        <v-row>
            <p>
        Inicio <v-icon small color="#4DB6AC">mdi-greater-than</v-icon> <span style="color:#4DB6AC">Administradores</span> 
             </p>
        </v-row>
        <v-row>
            <p class="font-weight-black">
      Agregar administrador
        </p>
        </v-row>
        <v-row>
           <p>Sube tu fotografía con un peso menor a 2MB</p> 
        </v-row>
        <v-row>
            <v-col
          cols="12"
          sm="6"
        >
            <RegisterAdmin />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RegisterAdmin from '@/components/RegisterAdmin.vue'
 
export default {
  components: {
      RegisterAdmin
  }
}
</script>