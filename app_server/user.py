class User:
    def __init__(self):
        self.name = input('Your name: ')
        self.age = input('Your age: ')
        self.spendings =
        {'food': 0,
        'transportation': 0,
        'presents': 0,
        'clothes': 0,
        'health': 0,
        'sport': 0,
        'education': 0,
        'travel': 0}

    def add(self, catg, n):
        self.spendings[catg] = n

    def change(self, catg, n):
        self.spendings[catg] = n
