"use client";

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const DailyMatchingChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard/daily-matching');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch daily matching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div className="bg-white p-6 rounded-lg shadow">Loading...</div>;

  const option = {
    title: {
      text: '일별 매칭 현황',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['매칭 수', '성공률'],
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: data.dates,
      axisPointer: {
        type: 'shadow'
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '매칭 수',
        min: 0,
        position: 'left'
      },
      {
        type: 'value',
        name: '성공률 (%)',
        min: 0,
        max: 100,
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: '매칭 수',
        type: 'bar',
        data: data.matches,
        itemStyle: {
          color: '#4F46E5'
        }
      },
      {
        name: '성공률',
        type: 'line',
        yAxisIndex: 1,
        data: data.successRate,
        itemStyle: {
          color: '#10B981'
        }
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ReactECharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default DailyMatchingChart; 