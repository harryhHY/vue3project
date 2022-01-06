<template>
  <div class="home">
    <div class="table_form">
      <el-input v-model="inputmsg" placeholder="请输入您要的文本"  size="mini" />
      <el-button type="primary" @click="confirmMsgfn()" size="mini">确定修改</el-button>
    </div>
  </div>
</template>

<script lang="ts">
// import { Vue } from "vue-class-component";
import _ from 'lodash';
import {
  onMounted,
  onRenderTriggered,
  ref,
} from "vue"; //



export default {
  setup() {
    const inputmsg = ref(""); //绑定的input值
    const confirmMsg = () => {//button确定点击的值
      console.log(inputmsg.value);
    };
    const _debounce = _.debounce(confirmMsg, 5000);//引入lodash功能
    const confirmMsgfn = () => {//使用lodash
      _debounce()
    }
    onMounted(() => {
      console.log(_)
    });
    onRenderTriggered((event) => {
      //查看修改的值
      console.log(event);
    });
    return {
      inputmsg,
      confirmMsgfn,
    };
  },
  components: {},
};
</script>
<style>
.home {
  height: 100%;
  overflow: hidden;
}
.table_form{
  width: 230px;
  display: flex;
  align-items: center;
  margin:20px auto 0;
}
</style>
