
<template>
  <div class="container">
    <div class="wrapper" style="background: white;">
      <h2>Change Requests</h2>
      <cv-form>
        <cv-form-item>
          <label for="release-select-id" class="bx--label">Release</label>
          <cv-select label="" @change="gerritpage" v-model="releaseSelected" id="release-select-id">
            <cv-select-option
              class="bx--select-option"
              v-bind:value="release"
              v-for="(release,index) in releases"
              :key="index"
            >{{ release }}</cv-select-option>
          </cv-select>
        </cv-form-item>

        <cv-form-item>
          <label for="project-select-id" class="bx--label">Project</label>
          <cv-select label="" @change="gerritpage" v-model="projectSelected" id="project-select-id">
            <cv-select-option
              class="bx--select-option"
              v-bind:value="project"
              v-for="(project,index) in projects"
              :key="index"
            >{{ project }}</cv-select-option>
          </cv-select>
        </cv-form-item>

        <cv-form-item>
          <label for="status-select-id" class="bx--label">State</label>
          <cv-select label="" @change="gerritpage" v-model="statusSelected" id="status-select-id">
            <cv-select-option
              class="bx--select-option"
              v-bind:value="status"
              v-for="(status,index) in status"
              :key="index"
            >{{ status }}</cv-select-option>
          </cv-select>
        </cv-form-item>
      </cv-form>
      <cv-tile>
      <cv-link v-bind:href="gerritlink">{{gerritlink}}</cv-link>
      </cv-tile>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      releases: ['all', 'master', 'release-1.4', 'release-1.3', 'release-1.2', 'release-1.1'],
      releaseSelected: 'all',
      projects: ['all', 'fabric-chaincode-node', 'fabric-chaincode-java', 'fabric-sdk-node', 'fabric-sdk-java'],
      projectSelected: 'all',
      status: ['all', 'open', 'merged', 'abandoned'],
      statusSelected: 'open',
      gerritlink: ''
    }
  },
  methods: {
    gerritpage: function (evt) {
      let root = 'https://gerrit.hyperledger.org/r/#/q/'
      let elements = []
      if (this.projectSelected !== 'all') {
        elements.push(`project:${this.projectSelected}`)
      }
      if (this.releaseSelected !== 'all') {
        elements.push(`branch:${this.releaseSelected}`)
      }
      if (this.statusSelected !== 'all') {
        elements.push(`status:${this.statusSelected}`)
      }

      this.gerritlink = `${root}${elements.join('+')}`
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>
