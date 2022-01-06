<template lang="">
    <div class='footerdiv'>
        <div style="font-family: Vladimir Script;">
            © <span style="font-family: '华文行楷';" >来自</span> harry
        </div>
        <div>
            <div style="font-family: '华文行楷';" >
                请关注我的博客
            </div>
            <span style="font-family: Vladimir Script;" >Blog：</span>
            <a :href="url" target="_blank" style="font-family: Vladimir Script;">{{url}}</a>
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
  font-size: 20px;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  a{
      color:#0093e9;
  }
}
</style>