import React, {useState} from 'react';
export const VulnerabilitiesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  // Distinct UI for vulnerabilities - CVE CVSS scoring - NVD, threat 0-100, CPE exposure
  return <div><h2>VULNERABILITIES - CVE CVSS scoring - NVD, threat 0-100, CP</h2><button onClick={()=>setFilter('critical')}>{filter}</button><p>Details: CVSS 9.0 auto playbook</p></div>
};
export default VulnerabilitiesView;
