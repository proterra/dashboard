<template>
<div class="container">
  <div class="bx--grid">
    <div class="bx--row">
      <div class="bx--col-xs-12 bx--col-md-6">
        <cv-tile  >
          <h3>Verse</h3>
          <cv-link :href="a_href">....</cv-link>
        </cv-tile>
      </div>
      <div class="bx--col-xs-12 bx--col-md-6"></div>
    </div>
    <div class="bx--row"></div>
  </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      a_href: 'https://mail.notes.na.collabserv.com/verse?'
    }
  },
  methods: {
    isSelected: function (evt) {
      console.log(evt)
    }
  },
  components: {

  }
}
</script>

<style>
</style>
