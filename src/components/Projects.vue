<template>
  <div class="container">
    <div class="wrapper" style="background: white;">
      <h2>Projects</h2>
      <div class="bx--form-item">
        <div class="bx--select">
          <select
            @change="gerritpage"
            v-model="projectSelected"
            id="select-id"
            class="bx--select-input"
          >
            <option
              class="bx--select-option"
              v-bind:value="project"
              v-for="(project,index) in projects"
              :key="index"
            >{{ project }}</option>
          </select>
          <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
            <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd"></path>
          </svg>
          <label for="select-id" class="bx--label">Project</label>
        </div>
      </div>
      <cv-tile>
       <cv-link v-bind:href="gerritlink">{{gerritlink}}</cv-link>
        </cv-tile>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: ['all', 'fabric-chaincode-node', 'fabric-chaincode-java', 'fabric-sdk-node', 'fabric-sdk-java'],
      projectSelected: 'all',
      gerritlink: ''
    }
  },
  methods: {
    gerritpage: function (evt) {
      let root = 'https://gerrit.hyperledger.org/r/#/admin/projects/'
      this.gerritlink = `${root}${this.projectSelected}`
    }
  }
}
</script>

<style>
</style>
