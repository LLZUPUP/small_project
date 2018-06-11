<template>
    <div class="content">
        <scroll-view scroll-y style="height:100%;" @scroll="scrollFn" @scrolltolower="toLow" @scrolltoupper="test">
            <a href="#" class="feed-li" v-for="(item,index) in list" :key="index">
                <div class="feed-title">
                    <type-block :item="item"></type-block>
                    <p>{{item.title}}</p>
                </div>
                <div class="feed-content">
                    <avatar :user="item.author"></avatar>
                    <div class="feed-right">
                        <div class="feed-right-top">
                            <div class="avatar-name">
                                {{item.author.loginname}}
                            </div>
                            <div class="count">
                                <span>{{item.reply_count}}</span>&nbsp;&nbsp;{{item.visit_count}}
                            </div>
                        </div>
                        <div class="feed-right-bottom">
                            <div class="feed-time">
                                {{item.createTime}}
                            </div>
                            <div class="feed-pass">
                                {{item.lastReplyTime}}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </scroll-view>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            articleList: [],
            page: 1,
        }
    },
    props: ['currentTab'],
    methods: {
        test() {
            console.log('test')
        },
        async getList(page=1) {
            wx.showLoading({
                title: '加载中',
            })
            let res = await fly.get('topics',{
                tab: this.currentTab.type,
                page,
                limit:20,
            })
            if(res.success) {
                this.articleList = this.articleList.concat(res.data);
            }
            wx.hideLoading()
        },
        goArticle(item) {
            wx.navigateTo({
                url: 'asdasda'
            })
        },
        scrollFn(e) {

        },
        async getA() {
            return 'a';
        },
        toLow(e) {
            this.page++;
            this.getList(this.page)
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss" scoped>

</style>


