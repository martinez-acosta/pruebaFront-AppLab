<template >
  <v-container fluid ma-8>
    <v-row>
      <p>
        Inicio <v-icon small color="#4DB6AC">mdi-greater-than</v-icon>
        <span style="color: #4db6ac">Administradores</span>
      </p>
    </v-row>
    <v-row>
      <p class="font-weight-black">Administradores de la consola</p>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-toolbar flat>
          <v-text-field
            prepend-icon="mdi-magnify"
            label="Buscar"
          ></v-text-field>
        </v-toolbar>
      </v-col>
      <v-col cols="2"> <v-btn depressed> Buscar </v-btn> </v-col>
      <v-col cols="2">
        <v-icon color="primary"> mdi-filter-outline </v-icon>
      </v-col>
      <v-col cols="2">
        <v-btn depressed>Descargar</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn depressed color="primary" to="agregarAdministrador" nuxt>Agrergar nuevo admin</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-card width="100vw">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.estatus="{ item }">
            <v-chip :color="getColor(item.estatus)" dark>
              {{ item.estatus }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Administradores",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Área", value: "area" },
        { text: "Estatus", value: "estatus" },
        { text: "Detalles", value: "detalles" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          area: "recursos humanos",
          estatus: "activo",
          detalles: "detalles",
        },
      ],
    };
  },
   methods: {
      getColor (estatus) {
        if (estatus == "activo") return 'green'
        else return 'red'
      },
    }
};
</script>