import sqlite3
import json
class Database:
    def __init__(self, dbname):
        '''

        Initialize new database
        '''
        self.dbname = dbname

    def new_fill(self, catg, total):
        '''
        Update total value of certain category
        '''
        conn = sqlite3.connect(self.dbname)
        c = conn.cursor()
        c.execute('SELECT total FROM categories WHERE category=?', (catg,))
        old = c.fetchone()

        new = old[0] + total
        c.execute('''UPDATE categories SET total = ? WHERE category = ?''', (new, catg))
        conn.commit()
        conn.close()

    def new_entry(self, lst):
        '''
        Add new item to db
        '''
        conn = sqlite3.connect(self.dbname)
        c = conn.cursor()
        c.executemany('INSERT INTO data VALUES (?,?,?,?)', (lst,))
        conn.commit()

    def get_json(self):
        conn = sqlite3.connect(self.dbname)
        c = conn.cursor()
        catg = ["food", "clothes", "transportation", "fun", "health", "housing", "other"]
        dicts = {}
        for i in range(7):
            c.execute('SELECT total FROM categories WHERE category=?', (catg[i],))
            dicts[catg[i]] = c.fetchone()[0]
        conn.commit()

        temp = {}
        temp["dataset"] = dicts
        temp["legend_list"] = catg
        temp1 = {}
        temp1["detail"] = temp
        temp2 = {}
        temp2["pie"] = temp1
        return temp2


    def json_for_list(self):
        resp = {}
        resp["data"] = []
        conn = sqlite3.connect(self.dbname)
        c = conn.cursor()
        c.execute("SELECT * FROM data")
        rows = c.fetchall()
        for row in rows:
            temp = {}
            temp["category"] = row[0]
            temp["date"] = row[1]
            temp["total"] = row[3]
            resp["data"].append(temp)
        return resp
