const trafficTopic = {
  content: [
    {
      title: 'track',
      subtitle: '',
      content: [
        {
          title: '交通提示牌',
          subtitle: '',
          key: 'WPTTraffic.VMS',
          value: true,
        },
        {
          title: '共享单车轨迹',
          subtitle: '',
          key: 'WPTTraffic.biketarce',
          value: true,
        },
        {
          title: '出租车轨迹',
          subtitle: '',
          key: 'TargetMonitor.taximonitor',
          value: true,
        },
      ],
    },
    {
      title:"airPollutant",
      subtitle:"",
    checkbox:"radio",//单选框
  //  checkbox:"checkbox",//复选框
      content:[
        {
          title:"拥堵监测点1",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:1,
        },
        {
          title:"拥堵监测点2",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:2,
        },
        {
          title:"拥堵监测点3",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:3,
        },
        {
          title:"拥堵监测点4",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:4,
        },
        {
          title:"拥堵监测点5",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:5,
        },
        {
          title:"拥堵监测点6",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:6,
        },
        {
          title:"拥堵监测点7",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:7,
        },
        {
          title:"拥堵监测点8",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:8,
        },
        {
          title:"拥堵监测点9",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:9,
        },
        {
          title:"拥堵监测点10",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:10,
        },
      ]
    },
    // {
    //   title: 'timeAxis',
    //   subtitle: '',
    //   content: [
    //     {
    //       title: '时间轴',
    //       subtitle: '',
    //       key: '',
    //       value: '',
    //     },
    //     {
    //       title: '全部隐藏',
    //       subtitle: '',
    //       key: '',
    //       value: '',
    //     },
    //   ],
    // },
    {
      title: 'mapbox',
      subtitle: '地图标点',
      content: [
        {
          title: '实时交通拥堵点',
          subtitle: '实时交通拥堵点',
          key: '',
          value: '',
          url: 'http://jiaotong.baidu.com/trafficindex/city/roadrank?cityCode=131&roadtype=0',
        },
      ],
    },
    {
      title:"chartControl",
      subtitle:"",
      content:[
        {
          title:"扩展",
          subtitle:"",
          key:"",
          value:"",
          select:false,
        },
        {
          title:"全部隐藏",
          subtitle:"",
          key:"WPTPopulation.ShowDistrubutionChart",
          value:true,
        },
      ]
    },
  ],
};
export default trafficTopic;
