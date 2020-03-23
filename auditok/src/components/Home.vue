<template>
  <v-layout fill-height>
    <v-flex xs12 sm6 offset-sm3>
      <v-container v-for="item in CardItems"
                   :key="item.title">
        <v-card>
          <v-card-media :src="item.pic" height="370px">
            <v-container fluid>
              <v-layout row>
                <v-flex xs6></v-flex>
                <v-flex xs6 order-lg2>
                  <v-card style="background: rgba(255,255,255,0.5)" :to="item.link">
                    <v-card-title class="headline">{{item.title}}</v-card-title>
                    <v-card-actions>
                      <v-btn style="background-color: rgb(255,205,0)" :to="item.link">See Availability</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      CardItems() {
        let CardItems = [
          {name: 'SignIn', title: 'Sign in', link: '/SignIn', pic: '/static/SignIn.png'}
        ]
        if (this.userIsAuthenticated) {
          CardItems = [
            {
              name: 'Individual Workplaces',
              title: 'Group Workplaces',
              link: '/DoAudit',
              pic: '/static/Groepswerkplekken.png'
            },
            {
              name: 'Group Workplaces', title: 'Individual Workplaces', link: '/CreateAudit', pic: '/static/indi.jpg'
            }
          ]
        }
        return CardItems
      },
      userIsAuthenticated() {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>
