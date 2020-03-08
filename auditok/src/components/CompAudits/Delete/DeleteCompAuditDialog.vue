/**
*This file contains all the vue and vuetify code for the delete complete audit dialog component
*This component will show a button which opens a dialog which asks if the user wants to delete the completed audit
*@author Mathijs Langezaal
*/
<template>
  <v-dialog
    v-model="deleteDialog"
    hide-overlay
    max-width="500">
    <v-btn
      flat
      slot="activator"
      small
      v-if= "this.$store.getters.userIsAdmin">Delete</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Are you sure you want to delete: {{ auditTitle }}?</v-card-title>
            <v-card-actions>
              <v-btn flat @click="onDeleteCompAudit" color="error">Delete</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat @click="deleteDialog = false">Cancel</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['audit'],
    /**
     * Contains the data for the page
     */
    data () {
      return {
        deleteDialog: false,
        auditTitle: this.audit.title
      }
    },
    methods: {
      /**
       * dispatches the method in the store to delete a completed audit and closes the dialog
       */
      onDeleteCompAudit () {
        this.deleteDialog = false
        this.$store.dispatch('deleteCompAudit', {
          id: this.audit.id
        })
      }
    }
  }
</script>
