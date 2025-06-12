import React, {useState} from 'react';
export const ResponseView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for response - Incident response containment, eradication
  return <div><h2>RESPONSE - Incident response containment, eradicati</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: isolate host</p></div>
};
export default ResponseView;
