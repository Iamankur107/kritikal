FROM python:3.8
EXPOSE 5005
WORKDIR /app
COPY ./Api/requirements.txt /app
COPY ./Databases/tdb.sqlite /app/Databases/tdb.sqlite
RUN pip3 install --no-cache-dir --upgrade -r requirements.txt
COPY ./Api/trazer.py /app

CMD [ "python3", "trazer.py"]