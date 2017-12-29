<template>
  <div class="om-list-box">
    <audio id="notice" loop="loop">
        <source src="/src/assets/mp3/dian.mp3" type="audio/mpeg" />
    </audio>
      <div class="om-list " draggable="true"
       v-bind:class="{'istuicai':item.tuicai === 1,'iscuncai':item.cuicai ===1,'iszuocai':item.zuocai ===1,'iszuocaifinished':item.zuocai === 2}"  v-for="item in list" :key="item.id"
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
    data () {
      return {
        startX:0,   //触摸位置
        endX:0,     //结束位置
        moveX: 0,   //滑动时的位置
        disX: 0,    //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider"
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
            'zuocai': 0,
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
            'zuocai': 0,
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
            'zuocai': 0,
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
            'id': '8',
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
            'id': '7',
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
            'id': '11',
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
            'id': '10',
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
            'id': '9',
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
          alert(item.name + '开始做菜了！')
          item.zuocai++
        }else if (item.zuocai ===1){
          alert(item.name + '做完了！')
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
          //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
          let wd=100;
          if(ev.touches.length == 1) {
            // 滑动时距离浏览器左侧实时距离
            this.moveX = ev.touches[0].clientX
            //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
            this.disX = this.startX - this.moveX;
            console.log(this.disX)
            // 如果是向右滑动或者不滑动，不改变滑块的位置
            if(this.disX < 0 || this.disX == 0) {
              this.deleteSlider = "transform:translateX(0px)";
              // 大于0，表示左滑了，此时滑块开始滑动 
            }else if (this.disX > 0) {
              //具体滑动距离我取的是 手指偏移距离*5。
              this.deleteSlider = "transform:translateX(-" + this.disX*5 + "px)";
            // 最大也只能等于删除按钮宽度 
              if (this.disX*5 >=wd) {
                this.deleteSlider = "transform:translateX(-" +wd+ "px)";
              }
            }
          }
        },
        touchEnd(ev){
        ev = ev || event;
        let wd=10;
        if (ev.changedTouches.length == 1) {
              let endX = ev.changedTouches[0].clientX;
                
                  this.disX = this.startX - endX;
                  console.log(this.disX)
                  //如果距离小于删除按钮一半,强行回到起点
                  
                  if ((this.disX*5) < (wd/2)) {
                    
                      this.deleteSlider = "transform:translateX(0px)";
                  }else{
                      //大于一半 滑动到最大值
                        this.deleteSlider = "transform:translateX(-"+wd+ "px)";
                  }
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
    background: red;
  }
  .iszuocai{
    background: yellowgreen;
  }
  .iszuocaifinished{
    background: red;
    text-decoration: line-through;
    text-decoration-line: li
  }

</style>
