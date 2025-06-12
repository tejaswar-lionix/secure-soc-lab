import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for analytics - SOC analytics MTTD/MTTR, metrics
  return <div><h2>ANALYTICS - SOC analytics MTTD/MTTR, metrics</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: MTTD median</p></div>
};
export default AnalyticsView;
