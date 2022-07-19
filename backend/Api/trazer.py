from distutils.log import debug
import sqlite3
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
# from db import mysql
# import pymysql

app = Flask(__name__)
api = Api(app)
# config = {
#         # 'user': 'root',
#         # 'password': 'root',
#         'host': 'mydb',
#         'port': '3306',
#         'database': 'main'
#     }
# connection = mysql.connector.connect(**config)
def db_conn():
    conn = None
    # conn = mysql.connect()
    # cursor = conn.cursor(pymysql.cursors.DictCursor)
    # try:
    #     conn= sqlite3.connect(**config)
    # except sqlite3.error as e:
    #     # print(e)
    #     print("connection not established")

    try:
        conn= sqlite3.connect("./Databases/tdb.sqlite")
    except sqlite3.error as e:
        print(e)
    # print("connection not established")
    return conn


class display(Resource):
    def get(self):
        conn = db_conn()
        cursor = conn.cursor()
        cursor = conn.execute("select * from vehicles order by Id desc limit 7")
        count = [dict(date=r[1], pedestain=r[2],LMV=r[7], total_count=r[12]) for r in cursor.fetchall()]
        return count

class datecnt(Resource):
    def get(self, dte):
        conn = db_conn()
        cursor = conn.cursor()
        cursor = conn.execute("select * from vehicles ")
        count = [dict(date=r[1], pedestain=r[2],LMV=r[7],total_count=r[4]) for r in cursor.fetchall() if r[1]==dte]
        return count

api.add_resource(display, '/vc')
api.add_resource(datecnt, '/vc/<string:dte>')


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5005)
