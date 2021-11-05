<template lang="">
    <div class='footerdiv'>
        <div>
            ©来自harry
        </div>
        <div>
            <div>
                请关注我的博客
            </div>
            <span>Blog：</span>
            <a :href="url" target="_blank" >{{url}}</a>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs, watch } from "vue";
interface urlReg{
    url:string
}
export default {
  setup(){
      const urlList:urlReg = reactive({
          url:"https://blog.csdn.net/HarryHY"
      })
      const refsurlList = toRefs(urlList)
      return {
          ...refsurlList
      }
  }
};
</script>
<style lang="less" scoped>
.footerdiv {
  width: 80%;
  padding: 0 10%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color:#0093e9;
  font-size: 16px;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  a{
      color:#0093e9;
  }
}
</style>