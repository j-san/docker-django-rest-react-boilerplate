FROM python:3

MAINTAINER jsanp

ENV PYTHONUNBUFFERED=1

RUN apt-get clean && apt-get update && \
    apt-get install -y gettext && \
    apt-get clean

RUN pip install gunicorn

VOLUME /data/media/
ENV MEDIA_ROOT /data/media/

COPY . /data/app/
WORKDIR /data/app/

RUN make install
# RUN make install translations collectstatic

# RUN chown -R daemon /data/app/
# USER daemon

CMD make run

