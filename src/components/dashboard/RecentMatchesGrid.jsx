"use client";

import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const RecentMatchesGrid = () => {
  const [rowData, setRowData] = useState([]);

  const columnDefs = [
    { field: 'date', headerName: '날짜' },
    { field: 'male', headerName: '남성 회원' },
    { field: 'female', headerName: '여성 회원' },
    { field: 'status', headerName: '상태' },
    { field: 'location', headerName: '지역' },
    { field: 'matchType', headerName: '매칭 타입' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/dashboard/recent-matches');
      setRowData(response.data.matches);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">최근 매칭 현황</h2>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
}; 