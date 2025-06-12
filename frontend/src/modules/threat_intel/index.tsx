import React, {useState} from 'react';
export const Threat_intelView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for threat_intel - Threat intel STIX/TAXII - IOC validation, expiry, bundle
  return <div><h2>THREAT_INTEL - Threat intel STIX/TAXII - IOC validation</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: ipv4</p></div>
};
export default Threat_intelView;
