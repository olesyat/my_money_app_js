from flask import Flask, url_for, send_from_directory, request, render_template, jsonify
import logging, os
from werkzeug import secure_filename
import sqlite3
from database import Database
from photo import Receipt
import time

app = Flask(__name__)
file_handler = logging.FileHandler('server.log')
app.logger.addHandler(file_handler)
app.logger.setLevel(logging.INFO)

PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '{}/uploads/'.format(PROJECT_HOME)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def create_new_folder(local_dir):
    newpath = local_dir
    if not os.path.exists(newpath):
        os.makedirs(newpath)
    return newpath

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('test.html')


@app.route('/ls')
def lst():
    db = Database('total.db')
    return jsonify(db.json_for_list())

@app.route('/db')
def get():
    db = Database('example.db')
    return jsonify(db.get_json())


@app.route('/s', methods = ['POST'])
def api_root():
    app.logger.info(PROJECT_HOME)
    if request.method == 'POST' and request.files['image']:
        app.logger.info(app.config['UPLOAD_FOLDER'])
        img = request.files['image']
        img_name = secure_filename(img.filename)
        create_new_folder(app.config['UPLOAD_FOLDER'])
        saved_path = os.path.join(app.config['UPLOAD_FOLDER'], img_name)
        app.logger.info("saving {}".format(saved_path))
        photo = img
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

    	#img.save(saved_path)

    	#return 'success'
    	#return render_template('a.html', img=img)
    	#return send_from_directory(app.config['UPLOAD_FOLDER'],img_name, as_attachment=True)
    else:
        return 'where is the picture'

if __name__ == '__main__':
    app.run(debug=True)
