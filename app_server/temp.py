import sqlite3
conn = sqlite3.connect('total.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE data
             (category text, dates text, place text, total real)''')

conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
conn.close()
