"use client";

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const AgeDistributionChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard/age-distribution');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch age distribution data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div className="bg-white p-6 rounded-lg shadow">Loading...</div>;

  const option = {
    title: {
      text: '연령대별 회원 분포',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}명 ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle'
    },
    series: [
      {
        name: '연령대',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}: {c}명'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: data.data
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ReactECharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default AgeDistributionChart; 