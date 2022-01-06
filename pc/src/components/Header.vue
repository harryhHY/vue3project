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
import { reactive, toRefs, watchEffect } from "vue";
import { useRouter } from "vue-router";
interface dataListReg {
  //头部接口规定
  HeaderList: any[];
  personSelected: number;
  changePerson: (item: {
    id: number;
    name: string;
    path: string;
    age: number;
    sex: string;
  }) => void;
}
export default {
  setup() {
    const router = useRouter();
    const dataList: dataListReg = reactive({
      //头部的数据
      HeaderList: [
        {
          id: 1,
          name: "首页",
          path: "/",
        },
        {
          id: 2,
          name: "个人中心",
          path: "/user",
          age: 25,
          sex: "man",
        },
        {
          id: 3,
          name: "厨艺爱好",
          path: "/cookie"
        },
      ],
      personSelected: 1, //当前选中的页面
      //切换当前选中的页面
      /**
       * params
       */
      changePerson: (item: {
        id: number;
        name: string;
        path: string;
        age: number;
        sex: string;
      }) => {
        dataList.personSelected = item.id; //切换头部高亮
        //跳转路由
        router.push({
          path: item.path,
          query: {
            data: item.age,
            sex: item.sex,
          },
        });
      },
    });
    watchEffect(() => {
      router.getRoutes().map((item, index) => {
        if (item.path === router.currentRoute.value.path) {
          dataList.personSelected = index * 1 + 1
        }
      })
    })
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
  font-size: 18px;
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