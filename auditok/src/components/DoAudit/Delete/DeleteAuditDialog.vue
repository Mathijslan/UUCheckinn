/**
*This file contains all the vue and vuetify code for the delete audit dialog component
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
      top
      small
      v-if= "this.$store.getters.userIsAdmin">Delete</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Are you sure you want to delete: {{ auditTitle }}?</v-card-title>
            <v-card-actions>
              <v-btn flat @click="onDeleteAudit" color="error">Delete</v-btn>
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
    data () {
      /**
       * Contains the data of the audit title and the delete dialog boolean
       */
      return {
        deleteDialog: false,
        auditTitle: this.audit.title
      }
    },
    methods: {
      /**
       * Dispatches a function in the store to delete an audit and closes the windows
       */
      onDeleteAudit () {
        this.deleteDialog = false
        this.$store.dispatch('deleteAudit', {
          id: this.audit.id
        })
      }
    }
  }
</script>
