

This stack template project contains:
- docker, docker-compose
- django, django-rest-framework
- react, babel, webpack
- all the script to test it


Start
-----

- change name in file `front/package.json`
- change name in file `api/setup.py`
- (not mandatory) freeze versions
- (not mandatory) commit `front` and `api` in separate git repo


Dev
---

`docker-compose up`


Test
----

```
docker-compose run api make test
docker-compose run front npm test
```

