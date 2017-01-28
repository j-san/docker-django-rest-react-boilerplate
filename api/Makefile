.PHONY        = clean collectstatic install test
APP_NAME      =
PYTHON        = python
RPM_RELEASE   = dev


### INSTALL ###

# Install project without dev tools
install:
	pip install -e . --upgrade


# Prepare static assests for production
collectstatic:
	$(PYTHON) manage.py collectstatic --noinput


# Apply database migrations
migrate:
	$(PYTHON) manage.py migrate --noinput


# Compile mo translation files
translations:
	$(PYTHON) manage.py compilemessages


### DEVELOP ###

# Install project with dev tools
develop: migrate dev-data
	$(PYTHON) manage.py runserver 0.0.0.0:8000


# Install development datas
dev-data:
	# $(PYTHON) manage.py loaddata dev_data


# Generate database migrations
makemigrations:
	$(PYTHON) manage.py makemigrations


# Update po translation files
messages:
	$(PYTHON) manage.py makemessages -a


### RUN ###

# Run server
run: migrate
	gunicorn main.wsgi --bind 0.0.0.0:80 --workers 4 --name api --statsd-host dd-agent:8125


### TESTS ###

# Run all the tests and validations
test: translations
	$(MAKE) test-migrations test-lint test-django


# Validate for uncommited migrations
test-migrations:
	$(PYTHON) manage.py makemigrations --test

# Run Django unit tests
test-django:
	$(PYTHON) manage.py test $(APP_NAME) --noinput


# Validate code with flake8
test-lint:
	flake8 . --exclude env,**/migrations,~* --ignore E501


### CLEAN ###

# Clean generated files
clean:
	rm -rf *.egg-info
