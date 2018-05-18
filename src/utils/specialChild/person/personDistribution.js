const personDistribution={
  content:[
  // {
  //   title:"chartSwitch",
  //   subtitle:"",
  //   content:[
  //     {
  //       title:"人口平均受教育程度",
  //       subtitle:"",
  //       content:[
  //         {
  //           title:"柱状图",
  //           subtitle:"",
  //           key:"WPTPopulation.ChangeToBarChart",
  //           value:null,
  //         },
  //         {
  //           title:"南丁格尔图",
  //           subtitle:"",
  //           key:"WPTPopulation.ChangeToRoseChart",
  //           value:null,
  //         },
  //
  //       ]
  //     },
  //
  //
  //   ]
  // },
  {
    title:"chartViewRight",
    subtitle:"常住人口右侧图表统计",
    url:"",
    content:[
      {
        title:"人口年龄结构统计",
        subtitle:"人口年龄结构统计",
        key:"",
        value:"",
        select:false,
        url:"national_regionalism/people/getage"
      },
      {
        title:"人口平均受教育程度",
        subtitle:"人口平均受教育程度",
        key:"",
        value:true,
        url:"http://47.92.6.177/national_regionalism/people/getpeopleeducation?code=30:30:01"
      },
      {
        title:"户籍人口结构及来源",
        subtitle:"户籍人口结构及来源",
        key:"",
        value:true,
        url:"http://47.92.6.177/national_regionalism/people/getpeoplepopulation?code=30:30:01"
      },
    ]
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
        key:"http://47.92.6.177/WPTPopulation.ShowDistrubutionChart?code=30:30:01",
        value:true,
      },
    ]
  },
  {
    title:"mapbox",
    subtitle:"点击地图获取坐标",
    content:[
      {
        title:"获取地图经纬度",
        subtitle:"实时交通拥堵点",
        key:"",
        value:"",
        url:"",
      },
    ]
  }

]
}
export default personDistribution;
