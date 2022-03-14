<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img src="https://fakeimg.pl/50x50/" class="sidebar-logo sidebar-logo-vertical">
        <!-- <h1 v-else class="sidebar-title">{{ title }} </h1> -->
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="https://fakeimg.pl/112x26/" class="sidebar-logo">
        <span class="sidebar-title">{{ title }} </span>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '后台管理系统'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 66px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 1px 0px 0px #CCCCCC;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;

    & .sidebar-logo {
      width: 112px;
      height:26px;
      display: block;
      margin: 0 auto;
      margin-top: 14px;
    }

    & .sidebar-logo-vertical{
       width: 50px;
       height:50px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #666666;
      font-weight: 600;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
