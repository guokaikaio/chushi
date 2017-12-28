<template>
  <div class="om-list-box">

      <div class="om-list om-list-img" v-for="item in list" :key="item.id" @click="toPath(item.id)">
          <div class="om-list-name om-list-src">{{item.name}}</div>
          <div class="om-list-name om-ellipsis">X{{item.count}}份</div>
          <div class="om-list-text om-ellipsis">桌{{item.desk}}</div>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'listView',
    data(){
      return {
        list: [
          {
            'count': 1,
            'desk': '3',
            'name': '鱼香肉丝',
            'id':1
          },
          {
            'count': 1,
            'desk': '3',
            'name': '香菇鸡丁',
            'id': 2
          },
          {
            'count': 1,
            'desk': '4',
            'name': '炖白菜',
            'id': 3
          },
          {
            'count': 1,
            'desk': '4',
            'name': '花生米',
            'id': 4
          },
          {
            'count': 1,
            'desk': '5',
            'name': '大盘鸡',
            'id': 5
          },
          {
            'count':1,  
            'desk':'5',
            'name':'小羊腿',
            'id':6
          }
        ]
      }
    },
    created: function () {

    },
    methods: {
      toPath: function (id) {
       
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
  .om-list {
    position:relative;
    padding:10px 20px 10px 10px;
    border-bottom:1px solid #45424f;
    text-align:left;
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
    -webkit-transform:rotate(45deg);
    transform:rotate(45deg);
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
