const trafficforecastTopic = {
  content: [
    {
      title: 'chartSwitch',
      subtitle: '',
      content: [
        {
          title: '明日拥堵路段预测',
          subtitle: '',
          content: [
            {
              title: '早高峰',
              subtitle: '',
              key: 'WPTTraffic.forecastlist',
              value: 'am',
            },
            {
              title: '晚高峰',
              subtitle: '',
              key: 'WPTTraffic.forecastlist',
              value: 'pm',
            },

          ],
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
          title:"拥堵预测点1",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:1,
        },
        {
          title:"拥堵预测点2",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:2,
        },
        {
          title:"拥堵预测点3",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:3,
        },
        {
          title:"拥堵预测点4",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:4,
        },
        {
          title:"拥堵预测点5",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:5,
        },
        {
          title:"拥堵预测点6",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:6,
        },
        {
          title:"拥堵预测点7",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:7,
        },
        {
          title:"拥堵预测点8",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:8,
        },
        {
          title:"拥堵预测点9",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:9,
        },
        {
          title:"拥堵预测点10",
          subtitle:"",
          key:"WPTTraffic.OpenInfoWindow",
          value:10,
        },
      ]
    },
    {
      title: 'mapbox',
      subtitle: '地图标点',
      content: [
        {
          title: '预测交通拥堵点',
          subtitle: '预测交通拥堵点',
          key: '',
          value: '',
          url: 'http://jiaotong.baidu.com/trafficindex/predict/road?citycode=131',
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
export default trafficforecastTopic;
