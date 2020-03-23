<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" app temporary>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated"
                     @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar style="background-color: rgb(255,205,0)">
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">UU Check-In</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems"
               :key="item.title"
               router
               :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated"
               @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer absolute height="50px" style="background: #EFEFEF">
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems() {
        let menuItems = [
          {icon: 'perm_identity', title: 'Sign in', link: '/SignIn'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'people', title: 'Group workplaces', link: '/DoAudit'},
            {icon: 'person', title: 'Individual workplaces', link: '/CreateAudit'}]
          return menuItems
        }
      },
      userIsAuthenticated() {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
        this.$router.push('/SignIn')
      }
    }
  }
</script>
