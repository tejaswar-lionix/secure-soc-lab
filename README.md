# Sentinel SOC Lab — Security Operations Center Platform

SIEM correlation, incident lifecycle, threat intel STIX/TAXII, CVE scoring, asset CMDB, SOAR playbooks, forensic chain-of-custody, compliance, hunting, log ingestion, UEBA — Django monolith + React Vite.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + TanStack Query + Chart.js
- **15 Apps:** siem, incidents, threat_intel, vulnerabilities, assets, playbooks, forensics, compliance, hunting, log_ingest, cases, integrations, analytics, ueba, response

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t sentinel-soc .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A sentinel worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=vigilant --cov-report=xml
npm test
npm run test:coverage
```

## Features
- **SIEM correlation** 200+ rules, MITRE ATT&CK mapping, dedup 5min, severity ranking
- **Incident SLA** critical 4h/high 24h, timeline immutable, escalation
- **STIX/TAXII** IOC validation, expiry 30d IP/90d hash, bundle
- **CVE CVSS** 0-10 → 0-100 threat, ≥9.0 auto playbook
- **Asset CMDB** tier0, exposure, EDR staleness 7d
- **SOAR** enrich→contain→ticket, dry-run flag
- **Forensics** sha256 chain, custody, clock skew
- **Compliance** NIST 80/CIS 60/PCI 40
- **Hunting** hypotheses, KQL
- **UEBA** 30d baseline, z-score >3 anomaly

## License
Proprietary — All rights reserved (Vigilant Labs).
