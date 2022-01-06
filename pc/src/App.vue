<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
const Header = defineAsyncComponent(() => import("@/components/Header.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue")); //组件懒加载
@Options({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {

}
</script>
<style lang="less">
@import "./style/index.less";
</style>
