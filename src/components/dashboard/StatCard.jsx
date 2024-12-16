"use client";

import React from 'react';

export function StatCard(props) {
  console.log(props);
  const { title, value, trend } = props;
  
  if (!title || !value) return null;
  
  const isPositive = trend?.startsWith('+');

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex items-baseline mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <span
            className={`ml-2 text-sm font-medium ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
