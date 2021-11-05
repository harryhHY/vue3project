<template>
  <div class="home">
    <Header></Header>
    <div>
      <el-input v-model="inputmsg" placeholder="请输入您要的文本" />
      <el-button type="primary"  @click="confirmMsg()">确定修改</el-button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  defineAsyncComponent,
  onMounted,
  onRenderTriggered,
  reactive,
  ref,
} from "vue"; //
const Header = defineAsyncComponent(() => import("@/components/Header.vue")); //组件懒加载
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue")); //组件懒加载

export default {
  setup() {
    const inputmsg = ref("");//绑定的input值
    const confirmMsg = () => {//button确定点击的值
      console.log(inputmsg.value);
    };
    onMounted(() => {
      console.log("getdata");
    });
    onRenderTriggered((event) => {//查看修改的值
      console.log(event);
    });

    return {
      inputmsg,
      confirmMsg,
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
.home {
  height: 100%;
}
</style>
