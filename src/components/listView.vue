<template>
  <div class="om-list-box">
    <audio id="notice" loop="loop">
        <source src="/src/assets/mp3/dian.mp3" type="audio/mpeg" />
    </audio>
      <div class="om-list om-list-img" v-for="item in list" :key="item.id" @click="toPath(item)">
          <div class="om-list-name om-list-src">{{item.name}}</div>
          <div class="om-list-name om-ellipsis">X{{item.count}}份</div>
          <div class="om-list-text om-ellipsis">桌{{item.desk}},{{item.spec}},{{item.remark}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'listView',
    data () {
      return {
        list: [
          {
            'id': '1',
            'name': '鱼香肉丝',
            'count': 1,
            'desk': '3',
            'spec': '不放鱼+不放葱花',
            'remark': '特殊要求',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 1,
          },
          {
            'id': '2',
            'name': '红烧茄子',
            'count': 1,
            'desk': '3',
            'spec': '不放葱花',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 1,
          },
          {
            'id': '3',
            'name': '水煮肉片',
            'count': 1,
            'desk': '3',
            'spec': '',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 1,
          },
          {
            'id': '4',
            'name': '蒜苔肉丝',
            'count': 1,
            'desk': '3',
            'spec': '不放肉',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': '5',
            'name': '大盘鸡',
            'count': 1,
            'desk': '3',
            'spec': '',
            'remark': '特殊要求',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': '6',
            'name': '铁板米饭',
            'count': 1,
            'desk': '3',
            'spec': '不要蒜',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          }
        ]
      }
    },
    created: function () {

    },
    methods: {
      toPath: function (item){
        this.list.splice(item.id,item.id)
        if (item.cuicai === 0){
        //  alert(item.name + '催菜了！')
          item.cuicai++
        }else {
          document.getElementById('notice').play();
        }
        if (item.zuocai === 0){
          alert(item.name + '开始做菜了！')
          item.zuocai++
        }
        if (item.tuicai === 0){
          this.list.pop(item)
        } else if (item.tuicai === 1){
          item.pop()
        }
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .om-ellipsis {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .om-list-box {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  .om-list {
    position:relative;
    padding:10px 20px 10px 10px;
    border-bottom:1px solid #45424f;
    text-align:left;
    background: -webkit-linear-gradient(top,#0086F3, #0086FF);
  }
  .om-list .om-list-name {
    height:30px;
    line-height:30px;
    font-size:16px;
  }
  .om-list .om-list-text {
    height:20px;
    line-height:20px;
    font-size:14px;
  }
  .om-list:after {
    position:absolute;
    right:20px;
    top:50%;
    content:'';
    width:10px;
    height:10px;
    margin-top:-5px;
    border-top:1px solid #ddd;
    border-right:1px solid #ddd;
    -webkit-transform:rotate(150deg);
    transform:rotate(150deg);
  }
  .om-list.om-list-img {
    padding:10px 20px 10px 70px;
  }
  .om-list.om-list-img .om-list-src {
    position:absolute;
    left:0;
    top:10px;
    width:100px;
    height:50px;
  }

</style>
