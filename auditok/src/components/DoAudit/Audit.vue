/**
*This file contains all the vue and vuetify code for the delete complete audit dialog component
*@author Mathijs Langezaal
*/
<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <form @submit.prevent="onSaveAudit">
            <v-card>
              <v-card-title>
                <h3>{{audit.title}}</h3>
                <template>
                  <v-spacer></v-spacer>
                  <app-edit-audit-details-dialog :audit="audit"></app-edit-audit-details-dialog>
                </template>
              </v-card-title>
              <v-card-text>{{audit.subtitle}}</v-card-text>
              <v-card-actions>
                <v-text-field
                  v-model="auditTaker"
                  label="Audit afnemer (Alleen voornaam)"
                  required></v-text-field>
              </v-card-actions>
            </v-card>
            <v-container
              v-for="question, i in audit.questions"
              :key = "i">
              <v-card>
                <v-card-title>
                  {{question.question}}
                  <template>
                    <v-spacer></v-spacer>
                    <question-dialog :question="question"></question-dialog>
                  </template>
                </v-card-title>
                <v-card-actions>
                  <scale-component :question="question" required></scale-component>
                </v-card-actions>
              </v-card>
            </v-container>
            <v-btn type="submit">Save Answers</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  let date = new Date()
  export default {
    data () {
      /**
       * Contains all the data for a completed audit, provided by the user
       */
      return {
        dialog: false,
        auditTitle: '',
        auditSubtitle: '',
        auditTaker: '',
        auditDate: date.toLocaleDateString('en-GB'),
        answeredQuestions: []
      }
    },
    props: ['id'],
    /**
     * Returns the loaded audit
     */
    computed: {
      audit () {
        return this.$store.getters.loadedAudit(this.id)
      }
    },
    methods: {
      /**
       * Dispatches a method in the store to create acompleted audit using the data provided by the user and routes back
       * to the completed audits page
       */
      onSaveAudit () {
        const completedAuditData = {
          auditTitle: this.audit.title,
          auditSubtitle: this.audit.subtitle,
          auditTaker: this.auditTaker,
          auditDate: this.auditDate,
          answeredQuestions: this.audit.questions
        }
        this.$store.dispatch('createAnsweredAudit', completedAuditData)
        this.$router.push('/CompAudits')
      }
    }
  }
</script>
