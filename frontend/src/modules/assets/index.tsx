import React, {useState} from 'react';
export const AssetsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for assets - Asset inventory CMDB - criticality, exposure, EDR staleness
  return <div><h2>ASSETS - Asset inventory CMDB - criticality, expo</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: tier0 DC</p></div>
};
export default AssetsView;
