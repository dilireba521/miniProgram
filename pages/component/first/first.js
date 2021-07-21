Component({

  attached: function () {
    console.log("attached ");
  },
  detached: function () {
    console.log("detached ");
  },
  behaviors: {
    
  },
  options: {
    multipleSlots: true,
    styleIsolation:"isolated",
    pureDataPattern:/^_/    //指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    a:true, //普通数据字段
    _b:true,  //纯数据字段
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    //
    onTap: function () {
      const myEventDetail = "sasdfafsesklu dfasd"
      const myEventOption = { "asdas": "dgf" }
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})