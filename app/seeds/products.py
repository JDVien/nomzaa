from app.models import db, User
from app.models.product import Product

def seed_products():
  #1
  echo_dot_4th_gen_clock_white = Product(
    title='Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White',
    brand='Nomzaa',
    price=59.99,
    description="Meet Echo Dot with clock - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound. Perfect for your nightstand - See the time, alarms, and timers on the LED display. Tap the top to snooze an alarm. Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more. Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices. Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room. Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner's ready. Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.",
    details="",
    stock=10,
    category="electronics",
    img='https://m.media-amazon.com/images/I/51MzOVciT3L._AC_SL1000_.jpg',
    user_id=1
  )
  echo_dot_4th_gen_clock_blue = Product(
    title='Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue',
    brand='Nomzaa',
    price=59.99,
    description="Meet Echo Dot with clock - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound. Perfect for your nightstand - See the time, alarms, and timers on the LED display. Tap the top to snooze an alarm. Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more. Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices. Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room. Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner's ready. Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.",
    details="",
    stock=10,
    category="electronics",
    img='https://m.media-amazon.com/images/I/51k+icoF1vL._AC_SL1000_.jpg',
    user_id=1
  )
  echo_show_8th_black = Product(
    title='Echo Show 8 -- HD smart display with Alexa | stay connected with video calling | Charcoal',
    brand='Nomzaa',
    price=109.99,
    description="Alexa can show you more - With an 8 inch HD screen and stereo sound, Alexa can help manage your day at a glance. Connect with video calling and messaging - Call friends and family who have the Alexa app or an Echo device with a screen. Make announcements to other devices in your home. Be entertained - Ask Alexa to show you movie trailers, TV shows, movies, or the news. Or listen to radio stations, podcasts, and audiobooks. Control your smart home - Voice control compatible devices or manage them on the easy-to-use display. Ask Alexa to show you security cameras, control lights, and adjust thermostats. Create morning routines to start your day. Made to fit your life - Get daily recipes and cook along hands-free with step-by-step instructions. Easily update to-do lists and calendars. Glance at weather and traffic on your way out.",
    details="",
    stock=10,
    category="electronics",
    img='https://m.media-amazon.com/images/I/51tDwmmaSKL._AC_SL1000_.jpg',
    user_id=1
  )
  echo_show_8th_sand = Product(
    title='Echo Show 8 -- HD smart display with Alexa | stay connected with video calling | Sandstone',
    brand='Nomzaa',
    price=109.99,
    description="Alexa can show you more - With an 8 inch HD screen and stereo sound, Alexa can help manage your day at a glance. Connect with video calling and messaging - Call friends and family who have the Alexa app or an Echo device with a screen. Make announcements to other devices in your home. Be entertained - Ask Alexa to show you movie trailers, TV shows, movies, or the news. Or listen to radio stations, podcasts, and audiobooks. Control your smart home - Voice control compatible devices or manage them on the easy-to-use display. Ask Alexa to show you security cameras, control lights, and adjust thermostats. Create morning routines to start your day. Made to fit your life - Get daily recipes and cook along hands-free with step-by-step instructions. Easily update to-do lists and calendars. Glance at weather and traffic on your way out.",
    details="",
    stock=10,
    category="electronics",
    img='https://m.media-amazon.com/images/I/51-HyYbQceL._AC_SL1000_.jpg',
    user_id=1
  )
  fire_stick_lite_latest = Product(
    title='Fire TV Stick Lite with latest Alexa Voice Remote Lite (no TV controls), HD streaming device ',
    brand='Nomzaa',
    price=29.99,
    description="Our most affordable Fire TV Stick - Enjoy fast streaming in Full HD. Comes with Alexa Voice Remote Lite. Great for new users - Start streaming with access to over 200,000 free movies and TV episodes from ad-supported streaming apps like IMDb TV, Tubi, Pluto TV, and more.   Easy to set up, stays hidden - Plug in behind your TV, turn on the TV, and connect to the internet to get set up. Press and ask Alexa - Use your voice to easily search and launch shows across multiple apps. Endless entertainment - Stream more than 1 million movies and TV episodes from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to millions of songs. Live TV - Watch your favorite live TV, news, and sports with subscriptions to SLING TV, YouTube TV, and others.  Listen to music - Stream on Amazon Music, Spotify, Pandora, and others.Control your smart home - Ask Alexa to check weather, dim the lights, view live camera feeds, stream music and more.   ",
    details="",
    stock=10,
    category="electronics",
    img='https://m.media-amazon.com/images/I/41pGFbSrrRL._AC_SL1000_.jpg',
    user_id=1
  )
  product6 = Product(
    title='Heinz Ketchup, 32 oz',
    brand='Heinz',
    price=3.69,
    description="One 32 oz. bottle of Heinz Tomato Ketchup. Heinz Tomato Ketchup uses sweet, juicy, red ripe tomatoes for the signature thick and rich taste of America’s Favorite Ketchup..Thick & Rich ketchup made from red ripe tomatoes.This tomato ketchup has a thick and rich texture.Contains gluten free ketchup to fit your preferences.Perfect for sandwiches, burgers and hot dogs or as a dipping sauce for fries and other favorite food.America's Favorite Ketchup comes in a squeezable ketchup bottle for convenient dispensing",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/71szc59Y0aL._SL1500_.jpg',
    user_id=1
  )
  product7 = Product(
    title='Strawberries, 1 lb',
    brand='Nomzaa Fresh',
    price=3.69,
    description="Wash before consuming . Grown in the United States, Chile, or Mexico. Delicious on their own as a healthy snack or as part of a recipe . Store in the refrigerator for maximum shelf life . Prepackaged ",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/8143FLAy6GL._SL1500_.jpg',
    user_id=1
  )
  product8 = Product(
    title='Aquafina Water, 16.9 Fl Oz (Pack of 24)',
    brand='Aquafina',
    price=6.49,
    description="16.9oz bottles, pack of 24 . Sodium free - Pure Water, Perfect Taste . 7 step purification system takes out the stuff other bottled waters leave in . Fresh and pure, Aquafina is the perfect companion for happy bodies everywhere . Eco-Fina bottle uses 50% less plastic  ",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/91WM2xm6RZL._SL1500_.jpg',
    user_id=1
  )
  product9 = Product(
    title='Nomzaa Brand - Cage Free Large White Eggs, Grade AA, 18 Count ',
    brand='Nomzaa Fresh',
    price=4.49,
    description="18 large, Grade AA, white eggs . 100% vegetarian feed, cage free and free to roam . ertified humanely raised . Hormone* and antibiotic free . An Nomzaa Brand ",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/71SH04l8u1L._SL1500_.jpg',
    user_id=1
  )
  product10 = Product(
    title='Kona Big Wave Golden Ale, 6 pk, 12 oz bottles, 4.4% ABV  ',
    brand='Kona Brewing Co.',
    price=10.29,
    description="6 pack of 12 fl oz bottles of Kona Brewing Co. Big Wave Golden Ale Beer . Smooth, easy drinking golden craft beer . Light bodied lager beer with a quenching and refreshing finish . Has a 4.4% ABV and 132 calories per 12 oz serving . Golden Ale beer brewed with a special blend of hops and caramel malt  ",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/91j8k01cUeL._AC_SL1500_.jpg',
    user_id=1
  )
  product11 = Product(
    title='Seresto Flea and Tick Collar for Dogs, 8-Month Flea and Tick Collar for Large Dogs Over 18 Pounds   ',
    brand='Seresto',
    price=55.00,
    description="Provides 8-months of continuous flea and tick prevention . Seresto flea and tick collar for large dogs works through contact, so fleas and ticks do not have to bite your dog to die . Veterinarian-recommended flea and tick prevention for dogs in a convenient, odorless and non-greasy collar; No need for messy monthly treatments . Veterinarian-recommended flea and tick prevention for dogs in a convenient, odorless and non-greasy collar; No need for messy monthly treatments . Flea and tick collar for large dogs also helps treat and control sarcoptic mange and kills lice ",
    details="",
    stock=10,
    category="pet supplies",
    img='https://m.media-amazon.com/images/I/81yNb81DgbL._AC_SL1500_.jpg',
    user_id=1
  )

  product12 = Product(
    title='Milk-Bone MaroSnacks Dog Treats for Dogs of 40 Ounces    ',
    brand='Milk-Bone',
    price=10.33,
    description="Contains one (1) 40 ounce package of small dog treats with real bone marrow (packaging may vary) . The dog biscuit shell encases a real bone marrow center, delicious treats that you can feel good about giving . Crunchy on the outside and meaty on the inside, our MaroSnacks dog snacks are a satisfying combo of texture and mouthwatering flavor . Savory treats with calcium, perfect for dogs of all sizes . Baked with love in Buffalo, New York, USA, with colors from natural ingredients only ",
    details="",
    stock=10,
    category="pet supplies",
    img='https://m.media-amazon.com/images/I/81KnsQPUiTL._AC_SL1500_.jpg',
    user_id=1
  )
  product13 = Product(
    title='MON2SUN Dog Rawhide Twist Chicken Hide Sticks 5 Inch for Puppy and Small Dogs (5 inch (40Count))  ',
    brand='MON2SUN',
    price=19.99,
    description="5 inches in length. Best for puppy and small dogs. 40 count.Value pack . hicken wrapped rawhide sticks, made with real chicken breast, wrapped around a rawhide stick. High-protein, low-fat twists. 100% natural. No preservatives . Chicken rawhides are manufactured under strict food safety guidelines. Roasted chicken sticks, no harmful ingredients . Chicken dog rawhides provide fun chewing enjoyments for your dogs and promote dogs' teeth healthy. Have less plaque and tartar.  ",
    details="",
    stock=10,
    category="pet supplies",
    img='https://m.media-amazon.com/images/I/71Wcn+J8zAL._AC_SL1500_.jpg',
    user_id=1
  )

  db.session.add_all([echo_dot_4th_gen_clock_white,echo_dot_4th_gen_clock_blue,echo_show_8th_black,
                      echo_show_8th_sand,fire_stick_lite_latest, product6, product7, product8,
                      product9,product10,product11,product12,product13])
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
