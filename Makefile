build:
	docker build -t sentinel-soc .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
