from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        fullname='Demo Demoson', email='demo@aa.io', password='password', city='Night City', zipcode='01010' )
    damian = User(
        fullname='Damian Rojas', email='damian@damian.com', password='juan', city='Albuquerque', zipcode='87101')
    jason = User(
        fullname='Jason Vien', email='jason@jason.com', password='jason', city='Sacramento', zipcode='95831')
    chris = User(
        fullname='Chris Mizell', email='chris@chris.com', password='chris', city='San Francisco', zipcode='94016' )
    jared = User(
        fullname='Jared Kunhart', email='jared@jared.com', password='jared', city='Chicago', zipcode='60176')


    db.session.add_all([demo,damian,jason,chris,jared])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
