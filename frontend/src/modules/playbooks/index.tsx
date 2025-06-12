import React, {useState} from 'react';
export const PlaybooksView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for playbooks - SOAR playbooks - enrich, contain, ticket, dry-run
  return <div><h2>PLAYBOOKS - SOAR playbooks - enrich, contain, ticket</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: enrich</p></div>
};
export default PlaybooksView;
