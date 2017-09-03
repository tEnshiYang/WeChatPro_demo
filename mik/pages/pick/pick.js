var app = getApp();
Page({
  data:{
    inputVal:"",
    array:['1','2','3','4'],
    
    msgData:[]
  },
  changIndex:function(e){
    console.log(e);
   this.setData({

     index:e.detail.value
   })
  },
  // 每次输入存入inputVal中
  inp(e){
    this.setData({
      inputVal:e.detail.value
    });
  },
  del(e){
    var n = e.target.dataset.index
    var list = this.data.msgData;
    list.splice(n,1);
    this.setData({
      msgData: list,

    });
  },
  // 点击确定时利用中间列表list将数据存入msgData中
  add(){
    var list = this.data.msgData;
    list.push({
      msg:this.data.inputVal
    
    });
    console.log(this.data.msgData);
    this.setData({
      msgData:list,
      inputVal:""
    });
  }
})