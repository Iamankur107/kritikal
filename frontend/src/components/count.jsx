import React from 'react'
import { useState, useEffect } from "react";
import './count.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }  from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
// import data from './data'
import { Icon } from '@iconify/react';
// import data from './data';


const date=new Date();
var day=date.getDate()
const month=date.getMonth()+1
const year=date.getFullYear()

function Count(){
  const [labe, setdata] = useState({
    xaxis:[],
  });

  useEffect(() => {
    fetch("/vc").then(res =>
      res.json().then(data => {
        // Setting a data from api
        setdata({
          xaxis:[data[6].date,data[5].date,data[4].date,data[3].date,data[2].date,data[1].date,data[0].date]
        });
      })
    );
  }, []);
  const[LMVData,setdataset]=useState({
    label:" ",
    data:[]
  })
  useEffect(() => {
    fetch("/vc").then(res =>
      res.json().then(data => {
        setdataset({
          label:'lmv',
          data:[data[6].LMV,data[5].LMV,data[4].LMV,data[3].LMV,data[2].LMV,data[1].LMV,data[0].LMV]
        });
      })
    );
  }, []);
  const[pData,setp]=useState({
    label:" ",
    data:[]
  })
  useEffect(() => {
    fetch("/vc").then(res =>
      res.json().then(data => {
        setp({
          label:'total_count',
          data:[data[6].total_count,data[5].total_count,data[4].total_count,data[3].total_count,data[2].total_count,data[1].total_count,data[0].total_count]
        });
      })
    );
  }, []);

  var maindata={
  labels:labe.xaxis,
  datasets:[
    {
      label:LMVData.label,
      data:LMVData.data,
      borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label:pData.label,
      data:pData.data,
      borderColor:'rgb(0,250,154)',
            backgroundColor:'rgba(0,250,154,0.5)'
    }		
  ]
}




    return(
        <div>
<div className='count-title'>
    <h3>Count Analysis</h3>
        <div className='choose'>
        <label >choose options</label>
        <select name='analysis'>
          <option value='weekly'>weekly</option>
          <option value='daily'>Hour </option>
         
        </select>
        </div>
        </div>
        <div className='count-page-display'>
        <div className='count_attribute'>
          <p>total count:{pData.data[6]}</p>
          <p><Icon icon="el:person" inline={true} /> pedestrain:1</p>
          <p><Icon icon="healthicons:bike" inline={true} /> bike:2</p>
          <p><Icon icon="fa6-solid:motorcycle" inline={true} /> motarbike:3</p>
          <p><Icon icon="noto:auto-rickshaw" inline={true} /> auto:4</p>
          <p><Icon icon="mdi:rickshaw" inline={true} /> erickshaw:5</p>
          <p><Icon icon="mdi:van-utility" inline={true} /> lmv:{LMVData.data[6]}</p>
          <p><Icon icon="bxs:car" inline={true} /> lcv:7</p>
          <p><Icon icon="fontisto:bus" inline={true} /> bus:8</p>
          <p><Icon icon="fa6-solid:truck-front" inline={true} /> truck:9</p>
          <p><Icon icon="noto-v1:tractor" inline={true} /> tracktor:19</p>
        </div>
        <div className='linechart'>
           <Line data={maindata} />
        </div>
        </div>
        </div>);
        
}

export default Count

