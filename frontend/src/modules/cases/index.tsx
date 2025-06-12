import React, {useState} from 'react';
export const CasesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for cases - Case investigation workflow - linking, assignment, review
  return <div><h2>CASES - Case investigation workflow - linking, a</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: link case-incident-evidence</p></div>
};
export default CasesView;
