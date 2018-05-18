const btsenselectConfig={
    content:[
        {
            title:"airPollutant",
            subtitle:"",
          checkbox:"radio",//单选框
        //  checkbox:"checkbox",//复选框
            content:[
              {
                title:"温度",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"Temperature",
              },
              {
                title:"湿度",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"Humidity",
              },
              {
                title:"光照度",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"Light",
              },
              {
                title:"噪声",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"Noise",
              },
              {
                title:"气压",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"Pressure",
              },
              {
                title:"PM2.5",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"PM2p5",
              },
              {
                title:"PM10",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"PM10",
              },
              {
                title:"风速",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"WindSpeed",
              },
              {
                title:"风向",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"WindDirection",
              },
              {
                title:"CO2",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"CO2",
              },
              {
                title:"CO1",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"CO",
              },
              // {
              //   title:"VOC",
              //   subtitle:"",
              //   key:"Sensor.UpdateInfo",
              //   value:"VOC",
              // },
              {
                title:"SO2",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"SO2",
              },
              {
                title:"NO2",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"NO2",
              },
              {
                title:"O3",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"O3",
              },
              {
                title:"紫外线指数",
                subtitle:"",
                key:"Sensor.UpdateInfo",
                value:"UV",
              },
              // {
              //   title:"甲醛",
              //   subtitle:"",
              //   key:"Sensor.UpdateInfo",
              //   value:"HCHO",
              // },
              // {
              //   title:"人流量",
              //   subtitle:"",
              //   key:"Sensor.UpdateInfo",
              //   value:"HumanFlow",
              // },
              // {
              //   title:"车流量",
              //   subtitle:"",
              //   key:"Sensor.UpdateInfo",
              //   value:"HumanFlow",
              // },
            ]
          },
          {
            title:"chartControl",
            subtitle:"",
            content:[
              {
                title:"扩展",
                subtitle:"",
                key:"WPTEnvi.ShowEnviAdditionChart",
                value:true,
                select:false,
              },
              {
                title:"全部隐藏",
                subtitle:"",
                key:"WPTEnvi.ShowEnviChart",
                value:true,
              },
            ]
          },
          {
            title:"mapbox",
            subtitle:"",
            content:[
              {
                title:"白塔寺环境传感器点",
                subtitle:"白塔寺环境传感器点",
                key:"",
                value:"",
                url:"http://47.92.6.177:8181//kylinController/findDevicesInfo",
              },
            ],
          },
    ]
  }
  export default btsenselectConfig;
