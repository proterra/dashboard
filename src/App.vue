<template>
  <div id="app" class="wrapper">
    <cv-button
      v-for="{name,active} in pages"
      :key="name"
      kind="primary"
      :disabled="active"
      @click="actionClick(name)"
    >{{name}}</cv-button>

    <div class="wrapper">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      pages: [{ name: 'gerrit', active: false }, { name: 'home', active: false }]
    }
  },
  methods: {
    actionClick: function (evt) {
      console.log(this.$router.currentRoute.name)
      this.$router.push(evt)
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
