//newpage.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
   
    "info":"hello world",
     arr: ["一", "二", "三"],
     bannerUrl:[
       '/images/s.png',
       '/images/s.png'
       
     ],
      newslist:[
        { title_1: "标题1", title_2: "内容1内容内容内容内容内容内容内容内容", imgurl:"/images/s.png"},
        { title_1: "标题2", title_2: "内容2内容内容内容内容内容内容内容内容", imgurl: "/images/s.png"},
        { title_1: "标题3", title_2: "内容3内容内容内容内容内容内容内容内容", imgurl: "/images/s.png"}

      ],
     news: [
       { title: '11111111', imgurl: "/images/s.png" },
       { title: '22222222', imgurl: "/images/s.png" },
       { title: '11111111', imgurl: "/images/s.png" },
       { title: '22222222', imgurl: "/images/s.png" }, 
       { title: '11111111', imgurl: "/images/s.png" },
       { title: '22222222', imgurl: "/images/s.png" }
     ],
  },
 
  scr: function () {
    console.log("scrooolll");
  },
 
  onLoad:function(){
    var that = this;
    //页面加载时初始化
    that.setData({
      "welcome":"微信小程序"
    });
  }


  
})