<template>
  <v-app class="pa-0">
    <!--Inicio v-nav-bar-->
    <v-navigation-drawer      
      app
      permanent
    >
    
      <v-list>
         <v-list-item>
              <v-img src="/logo.png"
               max-height="150"
              max-width="250"
              contain
              ></v-img>
          </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          dense
          router
          exact
        >
          <v-list-item-action>
            <v-icon   small>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    <v-footer
      :absolute="!fixed"
      app
    >

      <span>&copy; Copyright GLI {{ new Date().getFullYear() }}</span>
    </v-footer>
    </v-navigation-drawer>
    <!--Fin v-nav-bar-->
    <!-- Inicio v-app bar-->
    <NavBar/>
    <!-- Fin v-app bar-->
    <v-main>
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account-outline',
          title: 'Administradores',
          to: '/'
        },
        {
          icon: 'mdi-view-list-outline',
          title: 'Catálogos',
          to: '/catalogos'
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Líderes',
          to: '/lideres'
        },
        {
          icon: 'mdi-bag-personal-outline',
          title: 'Usuarios',
          to: '/usuarios'
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Mi empresa',
          to: '/empresa'
        },
        {
          icon: 'mdi-food-apple-outline',
          title: 'Cursos',
          to: '/cursos'
        },
        {
          icon: 'mdi-bag-personal-outline',
          title: 'Recompensas',
          to: '/recompensas'
        },
        {
          icon: 'mdi-calendar-multiselect',
          title: 'Eventos',
          to: '/eventos'
        },
        {
          icon: 'mdi-alert-outline',
          title: 'Notificaciones',
          to: '/notificaciones'
        },
        {
          icon: 'mdi-chart-timeline-variant',
          title: 'Reportes',
          to: '/reportes'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      overlay: false,
      
    }
  },
}
</script>
<style scoped>
i.v-icon.v-icon {
  color: #4DB6AC
;
}

</style>
