<template>
  <div class="about">
    <Header></Header>
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {defineAsyncComponent} from 'vue'
const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue")); //组件懒加载
@Options({
  components: {
    Header,
    Footer
  },
})
export default class About extends Vue {}
</script>