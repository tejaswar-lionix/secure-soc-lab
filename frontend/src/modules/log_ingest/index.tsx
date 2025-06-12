import React, {useState} from 'react';
export const Log_ingestView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for log_ingest - Log ingestion pipeline - CEF, syslog, JSON, EPS 10k
  return <div><h2>LOG_INGEST - Log ingestion pipeline - CEF, syslog, JS</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: CEF header</p></div>
};
export default Log_ingestView;
