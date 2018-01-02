<template>
  <div class="om-list-box">
    <audio id="notice" loop="loop">
        <source src="/src/assets/mp3/dian.mp3" type="audio/mpeg" />
    </audio>
      <div class="om-list "
       v-bind:class="{'istuicai':item.tuicai === 1,'iscuicai':item.cuicai ===1,'iszuocai':item.zuocai ===1,'iszuocaifinished':item.zuocai === 2,'iszuocaifinishedconfirm':item.zuocai === 3 }"  v-for="item in list" :key="item.id"
        @touchstart='touchStart'
        @touchmove='touchMove'
        @touchend='touchEnd'
        :style="deleteSlider"
        @click="toPath(item)">
          <div class="om-list-header">
            <div class="om-list-name om-list-ellipsis">{{item.name}}</div>
            <div class="om-list-name ">X{{item.count}}份</div>
          </div>
          <div class="om-list-text om-ellipsis">桌{{item.desk}} {{item.spec}} {{item.remark}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'listView',
    data:function() {
      return {
        startX:0,   //触摸位置
        endX:0,     //结束位置
        moveX: 0,   //滑动时的位置
        disX: 0,    //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider"
        list: [
          {
            'id': 'd1',
            'name': '鱼香肉丝',
            'count': 1,
            'desk': '3',
            'spec': '不放鱼+不放葱花',
            'remark': '特殊要求',
            'timestamp': 1514449795,
            'cuicai': 1,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': 'd2',
            'name': '红烧茄子',
            'count': 1,
            'desk': '3',
            'spec': '不放葱花',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': 'd3',
            'name': '水煮肉片',
            'count': 1,
            'desk': '3',
            'spec': '',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': 'd4',
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
            'id': 'd5',
            'name': '大盘鸡',
            'count': 1,
            'desk': '3',
            'spec': '',
            'remark': '特殊要求',
            'timestamp': 1514449795,
            'cuicai': 1,
            'tuicai': 0,
            'zuocai': 0,
          },
          {
            'id': 'd6',
            'name': '超级干煸铁板米饭',
            'count': 1,
            'desk': '3',
            'spec': '不要蒜',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          }, 
          {
            'id': 'd8',
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
            'id': 'd7',
            'name': '大盘鸡',
            'count': 1,
            'desk': '3',
            'spec': '',
            'remark': '特殊要求',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          },  {
            'id': 'd11',
            'name': '超级干煸铁板米饭',
            'count': 1,
            'desk': '3',
            'spec': '不要蒜',
            'remark': '',
            'timestamp': 1514449795,
            'cuicai': 0,
            'tuicai': 0,
            'zuocai': 0,
          }, 
          {
            'id': 'd10',
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
            'id': 'd9',
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
        ]
      }
    },
    created: function () {

    },
    methods: {
      toPath: function (item) {
        //催菜判断
        if (item.cuicai ===1) {
          document.getElementById('notice').play()
        }
        //做菜
        if (item.zuocai ===0){
         // alert(item.name + '开始做菜了！')
          item.zuocai++
        }else if (item.zuocai ===1){
         // alert(item.name + '做完了！')
          item.zuocai++
        }else if (item.zuocai ===2){
          item.zuocai++
        }
      },
      touchStart(ev){
        ev= ev || event
        //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
        if(ev.touches.length == 1){
          // 记录开始位置
          this.startX = ev.touches[0].clientX;
          }
        },
        touchMove(ev){
          ev = ev || event;

        },
        touchEnd(ev){
        ev = ev || event;

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
    position: relative;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  .om-list {
    z-index: 100;
    transform: 0.3s;
    position: relative;
    padding:10px 20px 10px 10px;
    border-bottom:1px solid #45424f;
    text-align:left;
    background: -webkit-linear-gradient(top,#0086F3, #0086FF);
  }
  .om-list-name {
    height:30px;
    line-height:30px;
    font-size:16px;
    /*占有比例*/
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
  }
  .om-list .om-list-text {
    height:20px;
    line-height:20px;
    font-size:14px;
  }
  .om-list {
    padding:10px 20px 10px 10px;
  }
  .om-list-header{
    /*盒模型*/
    display: -webkit-box;
    display: -moz-box;
    display: box;
    /*横向or纵向*/
    -webkit-box-orient: horizontal;   /*属性值：[horizontal]横向/[vertical]纵向*/
    -moz-box-orient: horizontal;
    box-orient: horizontal;
  }
  .istuicai{
    display: none;
  }
  .iscuicai{
       -webkit-animation: twinkling 1s infinite ease-in-out  
  }
  .iszuocai{
    background: yellowgreen;
  }
  .iszuocaifinished{
    background: red;
    text-decoration: line-through;
    text-decoration-line: li
  }
  .iszuocaifinishedconfirm{
    display: none;
  }
  .animated{  
    -webkit-animation-duration: 1s;  
    animation-duration: 1s;  
    -webkit-animation-fill-mode: both;  
    animation-fill-mode: both  
} 
/*闪一闪动画*/
@-webkit-keyframes twinkling{  
    0%{  
        opacity: 0.5;  
    }  
    100%{  
        opacity: 1;  
    }  
}  
@keyframes twinkling{  
    0%{  
        opacity: 0.5;  
    }  
    100%{  
        opacity: 1;  
    }  
}  


</style>
