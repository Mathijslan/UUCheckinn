<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-center">
            <v-progress-circular
              indeterminate
              color="primary"
              :width="7"
              :size="70"
              v-if="loading"></v-progress-circular>
          </v-flex>
        </v-layout>
        <h3>Individuele werkplekken:</h3>
        <v-card v-for="workplace in workplaces" :key="workplace.id" v-if="workplace.Availability===1">
          <v-card-title>{{workplace.id}}</v-card-title>
          <v-card-text>{{workplace.Availability}}</v-card-text>
        </v-card>
        <v-card v-for="workplace in workplaces" :key="workplace.id" v-if="workplace.Availability===0" color="red">
          <v-card-title>{{workplace.id}}</v-card-title>
          <v-card-text>{{workplace.Availability}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      workplaces () {
        this.$store.dispatch('loadCompAudits')
        return this.$store.getters.loadedCompAudits
      }
    },
    created () {
    },
  }
</script>
