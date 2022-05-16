from app.models import db, User
from app.models.product import Product

def seed_products():
  #1
  echo_dot_4th_gen_clock_white = Product(
    title='Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White',
    brand='Amazon',
    price=59.99,
    description="Meet Echo Dot with clock - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound. Perfect for your nightstand - See the time, alarms, and timers on the LED display. Tap the top to snooze an alarm. Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more. Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices. Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room. Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner's ready. Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.",
    details="",
    stock=10,
    category="Electronics",
    img='https://m.media-amazon.com/images/I/51MzOVciT3L._AC_SL1000_.jpg',
    user_id=1
  )
  echo_dot_4th_gen_clock_blue = Product(
    title='Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue',
    brand='Amazon',
    price=59.99,
    description="Meet Echo Dot with clock - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound. Perfect for your nightstand - See the time, alarms, and timers on the LED display. Tap the top to snooze an alarm. Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more. Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices. Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room. Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner's ready. Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.",
    details="",
    stock=10,
    category="Electronics",
    img='https://m.media-amazon.com/images/I/51k+icoF1vL._AC_SL1000_.jpg',
    user_id=1
  )
  echo_show_8th_black = Product(
    title='Echo Show 8 -- HD smart display with Alexa | stay connected with video calling | Charcoal',
    brand='Amazon',
    price=109.99,
    description="Alexa can show you more - With an 8 inch HD screen and stereo sound, Alexa can help manage your day at a glance. Connect with video calling and messaging - Call friends and family who have the Alexa app or an Echo device with a screen. Make announcements to other devices in your home. Be entertained - Ask Alexa to show you movie trailers, TV shows, movies, or the news. Or listen to radio stations, podcasts, and audiobooks. Control your smart home - Voice control compatible devices or manage them on the easy-to-use display. Ask Alexa to show you security cameras, control lights, and adjust thermostats. Create morning routines to start your day. Made to fit your life - Get daily recipes and cook along hands-free with step-by-step instructions. Easily update to-do lists and calendars. Glance at weather and traffic on your way out.",
    details="",
    stock=10,
    category="Electronics",
    img='https://m.media-amazon.com/images/I/51tDwmmaSKL._AC_SL1000_.jpg',
    user_id=1
  )
  echo_show_8th_sand = Product(
    title='Echo Show 8 -- HD smart display with Alexa | stay connected with video calling | Sandstone',
    brand='Amazon',
    price=109.99,
    description="Alexa can show you more - With an 8 inch HD screen and stereo sound, Alexa can help manage your day at a glance. Connect with video calling and messaging - Call friends and family who have the Alexa app or an Echo device with a screen. Make announcements to other devices in your home. Be entertained - Ask Alexa to show you movie trailers, TV shows, movies, or the news. Or listen to radio stations, podcasts, and audiobooks. Control your smart home - Voice control compatible devices or manage them on the easy-to-use display. Ask Alexa to show you security cameras, control lights, and adjust thermostats. Create morning routines to start your day. Made to fit your life - Get daily recipes and cook along hands-free with step-by-step instructions. Easily update to-do lists and calendars. Glance at weather and traffic on your way out.",
    details="",
    stock=10,
    category="Electronics",
    img='https://m.media-amazon.com/images/I/51-HyYbQceL._AC_SL1000_.jpg',
    user_id=1
  )
  fire_stick_lite_latest = Product(
    title='Fire TV Stick Lite with latest Alexa Voice Remote Lite (no TV controls), HD streaming device ',
    brand='Amazon',
    price=29.99,
    description="Our most affordable Fire TV Stick - Enjoy fast streaming in Full HD. Comes with Alexa Voice Remote Lite. Great for new users - Start streaming with access to over 200,000 free movies and TV episodes from ad-supported streaming apps like IMDb TV, Tubi, Pluto TV, and more.   Easy to set up, stays hidden - Plug in behind your TV, turn on the TV, and connect to the internet to get set up. Press and ask Alexa - Use your voice to easily search and launch shows across multiple apps. Endless entertainment - Stream more than 1 million movies and TV episodes from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to millions of songs. Live TV - Watch your favorite live TV, news, and sports with subscriptions to SLING TV, YouTube TV, and others.  Listen to music - Stream on Amazon Music, Spotify, Pandora, and others.Control your smart home - Ask Alexa to check weather, dim the lights, view live camera feeds, stream music and more.   ",
    details="",
    stock=10,
    category="Electronics",
    img='https://m.media-amazon.com/images/I/41pGFbSrrRL._AC_SL1000_.jpg',
    user_id=1
  )

  db.session.add_all([echo_dot_4th_gen_clock_white,echo_dot_4th_gen_clock_blue,echo_show_8th_black,echo_show_8th_sand,fire_stick_lite_latest])
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
