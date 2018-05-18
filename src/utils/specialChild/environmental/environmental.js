const environmentalTopic={
  content:[
    // {
    //   title:"track",
    //   subtitle:"",
    //   content:[
    //     {
    //       title:"微环境舒适度网格图",
    //       subtitle:"",
    //       key:"",
    //       value:"",
    //     },
    //     {
    //       title:"空气质量指数网格",
    //       subtitle:"",
    //       key:"",
    //       value:"",
    //     },
    //   ]
    // },
    // {
    //   title:"timeAxis",
    //   subtitle:"",
    //   content:[
    //     {
    //       title:"时间轴",
    //       subtitle:"",
    //       key:"",
    //       value:"",
    //     },
    //   ]
    // },
    {
      title:"chartControl",
      subtitle:"",
      content:[
        {
          title:"扩展",
          subtitle:"",
          key:"WPTEnvi.ShowEnviAdditionChart",
          value:true,
          select:true,
        },
        {
          title:"全部隐藏",
          subtitle:"",
          key:"WPTEnvi.ShowEnviChart",
          value:true,
        },
      ]
    },
  //   {
  //     title:"airPollutant",
  //     subtitle:"",
  //   checkbox:"radio",//单选框
  // //  checkbox:"checkbox",//复选框
  //     content:[
  //       {
  //         title:"温度",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"湿度",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"光照度",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"噪声",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"气压",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"PM2.5",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"PM10",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"风速",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"风向",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"CO2",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"CO1",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"VOC",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"SO2",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"NO2",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"O3",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"紫外线指数",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //       {
  //         title:"甲醛",
  //         subtitle:"",
  //         key:"",
  //         value:"",
  //       },
  //     ]
  //   },
  {
    title:"mapbox",
    subtitle:"",
    content:[
      {
        title:"城市环境数据平均值",
        subtitle:"城市环境数据平均值",
        key:"",
        value:"",
        url:"http://47.92.6.177/national_regionalism/cityPmInfo/getAvgCityInfo",
      },
    ]
  }
    ],
}
export default environmentalTopic;
