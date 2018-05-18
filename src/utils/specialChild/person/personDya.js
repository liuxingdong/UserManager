const personDya={
  content:[
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
    {
      title:"mapbox",
      subtitle:"地图标点",
      content:[
        {
          title:"动态人口OD点",
          subtitle:"动态人口OD点",
          key:"",
          value:"",
          url:"",
        },
      ]
    },
    {
      title:"trafficMonitoring",
      subtitle:"",
      checkbox:"radio",//单选框
      // checkbox:"checkbox",//复选框
      content:[
        {
          title:"人口分布",
          subtitle:"",
          z_index:1,
          display:false,
          content:[
            {
              title:"柱状图",
              subtitle:"",
              key:"WPTPopulation.ShowCube",
              value:true,
              index:0,
              display:false,
            },
            {
              title:"网格图",
              subtitle:"",
              key:"WPTPopulation.ShowGrid",
              value:true,
              index:1,
              display:false,
            },
            {
              title:"热力图",
              subtitle:"",
              key:"WPTPopulation.ShowHeatMap",
              value:true,
              index:2,
              display:false,
            },

          ]
        },
        {
          title:"通勤时空",
          subtitle:"",
          z_index:1,
          display:false,
          content:[
            {
              title:"通勤OD图",
              subtitle:"",
              key:"WPTPopulation.ShowOD",
              value:true,
              index:3,
              display:false,
            },
            {
              title:"通勤距离",
              subtitle:"",
              key:"WPTPopulation.ShowODGrid",
              value:true,
              index:4,
              display:false,
            },
            {
              title:"通勤时长",
              subtitle:"",
              key:"WPTPopulation.ShowODGrid",
              value:true,
              index:5,
              display:false,
            },

          ]
        },


      ]
    },
  ],
}
export default personDya;
