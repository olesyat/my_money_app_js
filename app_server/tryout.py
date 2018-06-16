from flask import Flask, request, jsonify
import sqlite3
from database import Database
from photo import Receipt
import time
app = Flask(__name__)

@app.route('/db')
def get():
    db = Database('example.db')
    return jsonify(db.get_json())

@app.route('/ls')
def lst():
    db = Database('total.db')
    return jsonify(db.json_for_list())

@app.route('/tm')
def temp():
    photo = 'lviv.jpg'
    rc = Receipt(photo)
    print(rc.data)
    location = rc.location()
    total = rc.total()
    category = rc.category()
    db = Database('example.db')
    db.new_fill(category, total)
    db = Database('total.db')
    db.new_entry([category, time.strftime("%d/%m/%Y"), location, total])
    return 'successfully added'

if __name__ == '__main__':
     app.run(debug=True)
