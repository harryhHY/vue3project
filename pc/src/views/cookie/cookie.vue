<template>
    <div class="cookie">
        <div class="cookielist">
            <div v-for="(item,index) in dataList" :key="item.id + index" class="cookie_div">
                <div class="cookielist_div" @click="gotoDetail(item)">
                    <img :src="item.img" />
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
interface cookListReg {
    dataList: {
        id: number,
        name: string,
        img: any
    }[],
    gotoDetail: (item: {
        id: number,
        name: string,
        img: any
    }) => void
}

export default {
    setup() {
        const router = useRouter()
        const cookList: cookListReg = reactive({
            dataList: [
                {
                    id: 1,
                    name: "红烧肉",
                    img: require("../../assets/images/hsr.jpg")
                },
                {
                    id: 2,
                    name: "洋葱炒肥牛",
                    img: require("../../assets/images/ychfn.jpg")
                },
                {
                    id: 3,
                    name: "洋葱炒肥牛",
                    img: require("../../assets/images/ychfn.jpg")
                },
                {
                    id: 4,
                    name: "洋葱炒肥牛",
                    img: require("../../assets/images/ychfn.jpg")
                },
                {
                    id: 5,
                    name: "洋葱炒肥牛",
                    img: require("../../assets/images/ychfn.jpg")
                },
                {
                    id: 6,
                    name: "洋葱炒肥牛",
                    img: require("../../assets/images/ychfn.jpg")
                },
            ],
            gotoDetail: (item: {
                id: number,
                name: string,
                img: any
            }) => {
                router.push({
                    name: 'Cookiedetail',
                    params: {
                        data: JSON.stringify(item)
                    }
                })
            }
        })

        const cookListRef = toRefs(cookList)
        return {
            ...cookListRef
        }

    }
}
</script>
<style lang="less" scoped>
.cookielist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .cookie_div {
        width: 20%;
        .cookielist_div {
            position: relative;
            cursor: pointer;

            img {
                width: 100%;
            }
            p {
                display: none;
                position: absolute;
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                padding: 0 10px;
                color: #fff;
                bottom: 0;
                width: calc(100% - 20px);
                background: rgba(000, 000, 000, 0.8);
            }
        }
        .cookielist_div:hover p {
            display: block;
        }
    }
}
</style>