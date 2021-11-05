<template lang="">
    <div class='header_box'>
        <div 
        v-for="(item) in HeaderList" 
        :key="item.id" @click="changePerson(item)" 
        :class="['headerdiv ',item.id==personSelected?'headerclick':'']"
        >
            {{item.name}}
        </div>
    </div>
</template>
<script lang= 'ts'>
import { reactive, toRefs, watch } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
interface dataListReg {
  //头部接口规定
  HeaderList: any[];
  personSelected: number;
  changePerson: (item: { id: number; name: string; path: string }) => void;
}
export default {
  setup() {
    const router = useRouter();
    const dataList: dataListReg = reactive({
      HeaderList: [
        //头部的数据
        {
          id: 1,
          name: "首页",
          path: "/",
        },
        {
          id: 2,
          name: "个人中心",
          path: "/user",
        },
      ],
      personSelected: 1, //当前选中的页面

      changePerson: (item: { id: number; name: string; path: string }) => {
        //切换当前选中的页面
        dataList.personSelected = item.id; //切换头部高亮
        router.push({
          //跳转路由
          path: item.path,
        });
      },
    });
    const getRouter = reactive({
      getRouterChangePersonSelected: () => {
        //切换header高亮
        switch (
          router.currentRoute.value.path //当前路由地址
        ) {
          case "/":
            dataList.personSelected = 1;
            break;
          case "/user":
            dataList.personSelected = 2;
            break;
        }
      },
    });
    getRouter.getRouterChangePersonSelected();
    const DataListRef = toRefs(dataList);
    return {
      ...DataListRef,
    };
  },
};
</script>
<style lang="less" scoped>
.header_box {
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
  line-height: 50px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  padding: 0 10%;
  .headerdiv {
    color: #fff;
    min-width: 100px;
    text-align: center;
    border-radius: 5px;
    margin-right: 30px;
    cursor: pointer;
  }
  .headerclick {
    background-color: #96c24e;
  }
}
</style>