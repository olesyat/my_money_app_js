# DBtoJSON.py
# Author: Vasudev Ram - http://www.dancingbison.com
# Copyright 2014 Vasudev Ram
# DBtoJSON.py is a program to DEMOnstrate how to read
# SQLite database data and convert it to JSON.

import sys
import sqlite3
import json

try:

    conn = sqlite3.connect('example.db')

    # This enables column access by name: row['column_name']
    conn.row_factory = sqlite3.Row

    curs = conn.cursor()
    curs.execute("SELECT * FROM categories")
    recs = curs.fetchall()
    rows = {'data':[ dict(rec) for rec in recs ]}
    rows_json = json.dumps(rows)
    print(rows_json)

except Exception as e:
    print("ERROR: Caught exception:" + repr(e))
    raise e
    sys.exit(1)
