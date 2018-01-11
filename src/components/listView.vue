<template>
  <div class="om-list-box">
    <audio id="notice" loop="loop">
        <source src="/src/assets/mp3/dian.mp3" type="audio/mpeg" />
    </audio>
      <div class="om-list"
       v-bind:class="{'istuicai':item.tuicai === 1,'iscuicai':item.cuicai ===1,'iszuocai':item.zuocai ===1,'iszuocaifinished':item.zuocai === 2,'iszuocaifinishedconfirm':item.zuocai === 3 }"  v-for="item in mergeList" :key="item.id"  @click="toDo(item)" >
        <div class="om-list-front" >
          <div class="om-list-header">
            <div class="om-list-name om-list-ellipsis">{{item.name}}</div>
            <div class="om-list-name ">X{{item.count}}份</div>
          </div>
          <div class="om-list-text om-ellipsis">{{item.desk}} {{item.spec}} {{item.remark}}</div>
        </div>
        <div class="om-list-back" v-bind:class="{'om-list-button':item.zuocai === 0}" @click ="unDo(item, $event)" >回退</div>
      </div>
  </div>
</template>

<script>
import { baseUrl } from "../config/env";
import { getCookie, setCookie } from "../util/utils";
const debug = process.env.NODE_ENV === "production";
const ERR_OK = 0;
// 获取做菜列表
let orderUrl = debug
  ? "/src/assets/data.json"
  : baseUrl + "/dishzine/api/billDetail/list";
//  做菜
let doDish = baseUrl + "/dishzine/api/billDetail/doDish";
//  做完
let finishDish = baseUrl + "/dishzine/api/billDetail/finishDish";
//  确定做完
let finishDished = baseUrl + "/dishzine/api/billDetail/finishDished";
//  回退
let backDished = baseUrl + "/dishzine/api/billDetail/backDished";
//console.log(urgedDish+"\n"+backDish+"\n"+doDish+"\n"+finishDish)
//const orderUrl="http://200.200.200.60:8080/dishzine/api/billDetail/list/DN2017111612345678001"
console.log(orderUrl);
let intervalid1;
export default {
  name: "listView",
  data: function() {
    return {
      baseUrl,
      list: []
    };
  },
  created: function() {
    if (getCookie("dinnerId") != null) {
      let dinnerId = getCookie("dinnerId");
      console.log(dinnerId);
      orderUrl = orderUrl + "/" + dinnerId;
      this.updata();
    } else {
      console.log(orderUrl);
      console.log("no login");
      setCookie("dinnerId", "DN001", 1);
    }
  },
  mounted: function() {
    this.intervalid1 = setInterval(this.updata, 30000);
  },
  beforeDestroy: function() {
    clearInterval(intervalid1);
  },
  methods: {
    change: function(url, bdid) {
      let arr = bdid.split(",");
      arr.forEach(element => {
        let newurl = url + "/" + element;
        console.log(newurl);
        this.$http.get(newurl, { params: {} }).then(response => {
          response = response.body;
          if (response.errno === ERR_OK) {
            response.data;
            console.log(response.data);
          } else {
            console.log(response.errno);
          }
        });
      });
    },
    updata: function() {
      this.$http
        .get(orderUrl, { params: { dinnerId: this.dinnerId } })
        .then(response => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.list = response.data;
            console.log(this.list);
          } else {
            console.log(response.errno);
          }
        });
    },
    toDo: function(item) {
      //  催菜判断
      if (item.cuicai === 1) {
        //document.getElementById("notice").play();
      }
      //  做菜
      if (item.zuocai === 0) {
        //发送做菜请求
        this.change(doDish, item.id);
        //  alert(item.name + '开始做菜了！')
        item.zuocai++;
      } else if (item.zuocai === 1) {
        //  alert(item.name + '做完了！')
        this.change(finishDish, item.id);
        //this.updata();
        item.zuocai++;
      } else if (item.zuocai === 2) {
        this.change(finishDished, item.id);
        item.zuocai++;
      }
    },
    unDo: function(item, $event) {
      event.stopPropagation();
      if (item.zuocai > 0) {
        item.zuocai--;
        this.change(backDished, item.id);
        //this.updata();
      }
    }
  },
  computed: {
    // 合并相同菜品
    mergeList: function() {
      let newList = [];
      for (let i = 0; i < this.list.length; i++) {
        if (newList.length === 0) {
          newList.push(this.list[i]);
        } else {
          let flag = true;
          for (let index = 0; index < newList.length; index++) {
            if (
              newList[index].name === this.list[i].name &&
              newList[index].spec === this.list[i].spec
            ) {
              // 合并份数
              newList[index].count = newList[index].count + this.list[i].count;
              // 合并桌号
              newList[index].desk =
                newList[index].desk + "," + this.list[i].count;
              // 合并id
              newList[index].id = newList[index].id + "," + this.list[i].id;
              flag = false;
              break;
            }
          }
          if (flag) {
            newList.push(this.list[i]);
          }
        }
      }
      return newList;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.om-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.om-list-box {
  position: relative;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.om-list {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  transform: 0.3s;
  position: relative;
  padding: 10px 20px 10px 10px;
  border-bottom: 1px solid #45424f;
  text-align: left;
  background: -webkit-linear-gradient(top, #0086f3, #0086ff);
}
.om-list {
  padding: 10px 0px 10px 20px;
}
.om-list-front {
  justify-content: space-between;
}
.om-list-name {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
.om-list .om-list-text {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
}
.om-list-header {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.om-list-button {
  display: none;
}
.om-list-back {
  padding: 10px 10px 10px 10px;
  border-radius: 1px;
  text-align: center;
  text-decoration: none;
  background: hotpink;
}
/*退菜不显示*/
.istuicai {
  display: none;
}
/*催菜闪一闪*/
.iscuicai {
  -webkit-animation: twinkling 1s infinite ease-in-out;
}
/*正在做菜*/
.iszuocai {
  background: yellowgreen;
}
/*做完菜*/
.iszuocaifinished {
  background: red;
  text-decoration: line-through;
  text-decoration-line: li;
}
/* 做完菜确定*/
.iszuocaifinishedconfirm {
  display: none;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
/*闪一闪动画*/
@-webkit-keyframes twinkling {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkling {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
