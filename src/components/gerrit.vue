<template>
  <div class="bx--grid">
    <div class="bx--row">
      <div class="bx--col-xs-12 bx--col-md-6">
        <ChangeRequest/>
      </div>
      <div class="bx--col-xs-12 bx--col-md-6">
        <Projects/>
      </div>
    </div>
    <div class="bx--row">

    </div>

  </div>
</template>

<script>
import ChangeRequest from './ChangeRequests'
import Projects from './Projects'
export default {
  data () {
    return {
      releases: ['all', 'master', 'release-1.4', 'release-1.3', 'release-1.2', 'release-1.1'],
      actionSelected: 'all'
    }
  },
  methods: {
    isSelected: function (evt) {
      console.log(evt)
    }
  },
  components: {
    ChangeRequest,
    Projects
  }
}
</script>

<style>
</style>
