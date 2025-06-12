import React, {useState} from 'react';
export const UebaView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for ueba - UEBA baseline deviation, risk scoring
  return <div><h2>UEBA - UEBA baseline deviation, risk scoring</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: 30d rolling</p></div>
};
export default UebaView;
