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
  product14 = Product(
    title='REVLON One-Step Volumizer Original 1.0 Hair Dryer and Hot Air Brush, Black  ',
    brand='REVLON',
    price=34.99,
    description="STYLE AND DRY IN ONE STEP: Style, Dry & Volumize Your Hair in One Step, Max Drying Power with 30% Less Frizz and helps reduce hair damage . IONIC plus CERAMIC TECHNOLOGY: Unique Non-Detachable Oval Brush Design for Smoothing the Hair, while the round edges create volume. Designed with Nylon Pin & Tufted Bristles for detangling, improved volume, and control . STYLING FLEXIBILITY: 3 Heat/Speed Settings with Cool option for styling flexibility . SAFETY PLUG: Volumizer 1.0 Original meets U.S. safety requirements and features the ETL Certification, unit is designed for 120 Volt USA outlets only. DO NOT use a voltage converter or adapter as it will damage it . CARE FOR YOUR VOLUMIZER: Clean air inlet regularly, remove hair from the brush after every use and do not wrap cord around the unit. To keep bristles in best condition let unit cool before storing . ",
    details="",
    stock=10,
    category="beauty&personal",
    img='https://m.media-amazon.com/images/I/71GIRogtyNL._SL1500_.jpg',
    user_id=1
  )
  product15 = Product(
    title='REVLON ColorStay 16 Hour Eyeshadow Quad with Dual-Ended Applicator Brush 0.16oz  ',
    brand='REVLON',
    price=10.99,
    description="SMOOTH, VIBRANT COLOR: This blendable powder eye shadow glides on smoothly and delivers intense color for fresh, beautiful eye makeup looks . DUAL-ENDED APPLICATOR: The dual-ended eye shadow applicator has a rounded tip for an allover wash of color and a narrow tip to define the crease . 16 HOUR LONG LASTING WEAR: Wear your eye shadow from morning to night. The long-wearing shadow formula lasts up to 16 hours . OPHTHALMOLOGIST TESTED: Our long-lasting eye shadow is tested by ophthalmologists, so you can feel good about wearing our eye makeup . 8 VERSATILE EYESHADOW PALETTES: Try all 8 artfully edited color palettes, whether you love nude, taupe, pink, purple, brown, blue, or gray shades, in both matte and shimmer finishes. There are a variety of day to night looks in every palette . ",
    details="",
    stock=10,
    category="beauty&personal",
    img='https://m.media-amazon.com/images/I/918IH26QX8L._SL1500_.jpg',
    user_id=1
  )
  product16 = Product(
    title="L'Oréal Paris Advanced Hairstyle Sleek It Iron Straight Heat Spray, 5.7 Ounce",
    brand="L'Oréal",
    price=10.99,
    description="Heat Protectant Spray: Get 3 day style with this lightweight heat protectant spray, specially formulated to offer 450 degree heat protection for any heat tool, calming frizz and sealing in shine . Thermal Protection: This lightweight spray blocks humidity to calm fly aways while conditioning for long lasting silky style; Spray it on damp or dry hair section by section as you style with your heat tool . Create Your Perfect Hairstyle: From classic sprays to the latest styling creams, we provide support for every hairstyle with products specially formulated for straightening, shine, volume, texture and curls. Aluminum-Free, Dye-Free . All Things Beauty: Keep your beauty stash stocked with the best; We have a variety of products to help you achieve any look, whether you need eye makeup for a killer cat eye or face makeup for a flawless complexion . L'Oreal Paris Beauty: A leading total beauty care company based in Paris, we offer innovative products and unique expertise from beauty experts in makeup, skin care, hair care, styling and hair color .",
    details="",
    stock=10,
    category="beauty&personal",
    img='https://m.media-amazon.com/images/I/813uTEEsrDL._SL1500_.jpg',
    user_id=1
  )
  product17 = Product(
    title="Mother's Shea by Eu'Genia Shea Butter (Rose, 2 Oz Tins - Set of 3) 100% Pure Raw Unrefined African Shea ",
    brand="Mother's Shea",
    price=16.99,
    description="NATURE'S WONDERBALM: Experience the natural moisturizing power of raw shea butter in a mini 2 oz tin. With a lightweight formula that soothes skin and keeps pores congestion-free, each butter is made from a sustainably sourced blend of all-natural ingredients. Give this 3-piece set as a gift or take the minis with you on-the-go . NOURISH FACE, HAIR & BODY: Pure shea butter can be used to restore dry, damaged skin and hair of all types. The light, sweet fragrance and soft creamy texture leaves parched skin smooth and dry hair conditioned. Warm a small amount in your palms and apply to the area needing treatment . SOOTHE SKIN CONDITIONS: The high concentration of vitamins and fatty acids in this whipped shea butter make it great to use as a natural lip balm, hand & body moisturizer, or even stretch mark cream. Its anti-inflammatory properties can also help treat the appearance of skin conditions, such as eczema, dermatitis and psoriasis . ANTIOXIDANT RICH & ANTI-AGING: Unrefined shea naturally boosts collagen and restores the balance of oils on your skin to help improve the appearance of fine lines, wrinkles, acne and scars. Use as a primer under your favorite concealer for an added glow and to minimize irritation from makeup and environmental factors. ",
    details="",
    stock=10,
    category="beauty&personal",
    img='https://m.media-amazon.com/images/I/81JHarYSCOL._SL1500_.jpg',
    user_id=1
  )
  product18 = Product(
    title="Ray-Ban Rb3447 Round Metal Sunglasses ",
    brand="Ray-Ban",
    price=163.99,
    description="metal . Imported . Metal frame . Crystal lens . Non-Polarized . UV Protection Coating coating . Lens width: 47 millimeters . CLASSIC ROUND SUNGLASSES: Ray-Ban Metal Round sunglasses are both luxurious and functional. Made with a durable metal frame, these round sunglasses are comfortable and protective. Made from high-quality glass, Ray-Ban lenses are prescription ready . 100% UV PROTECTION: Ray-Ban legendary crystal glass lenses produce a high level of clarity, comfort, and protection. With greater contrast in low light conditions, Ray-Ban lenses give you the power to see more clearly. By absorbing 85% of visible light and blocking out most of the blue light, green lenses provide . CASE & LENS CLOTH INCLUDED: Each pair of Ray-Ban sunglasses come with a case and lens cloth to clean and protect them from scratches and damage . ",
    details="",
    stock=10,
    category="fashion",
    img='https://m.media-amazon.com/images/I/61A7Lu8oelL._AC_UL1500_.jpg',
    user_id=1
  )
  product19 = Product(
    title="Bell Women's Lola Mini Dress (small) ",
    brand="Bell",
    price=189.00,
    description="Shell: 70% cotton, 30% silk . Imported . Pull On closure . Hand Wash Only . Fabric: Lightweight, non-stretch weave . V neck with beaded tassel ties , Ruffled flutter sleeves, Smocked elastic at waist . Length: 33.75in / 86cm, from shoulder . Lined .",
    details="",
    stock=10,
    category="fashion",
    img='https://m.media-amazon.com/images/I/A1-vKZpDvVL._AC_UY741_.jpg',
    user_id=1
  )
  product20 = Product(
    title="Twelve AM Co Womens style So Fab Fluffy Slippers  ",
    brand="Twelve AM Co.",
    price=55.00,
    description="Luxe and soft faux fur . Available in 2 colors, rust brown and sage blue . Sizes run 7, 8, 9, 10, 11 . These Slippers run true to size. If you are in between sizes go up to the next full size . Can be worn as an outdoor or indoor slipper .",
    details="",
    stock=10,
    category="fashion",
    img='https://m.media-amazon.com/images/I/7168JgJjOML._AC_UL1500_.jpg',
    user_id=1
  )
  product21 = Product(
    title="Ulla Johnson Women's Seaview Day Basket   ",
    brand="Ulla Johnson",
    price=375.00,
    description="Straw,Cowhide Leather . Imported . Fabric: Woven straw . Cowhide leather trim, Braided handles with tassel accents, Structured silhouette . Length: 9.75in / 25cm . Height: 9in / 23cm . Tie closure",
    details="",
    stock=10,
    category="fashion",
    img='https://m.media-amazon.com/images/I/71TD1xyLnZL._AC_UL1500_.jpg',
    user_id=1
  )
  product22 = Product(
    title="Rag & Bone Women's Mini Woven Belt (small)   ",
    brand="Rag & Bone",
    price=225.00,
    description="Imported . Fabric: Woven cowhide. Spot clean . Textured gold-tone buckle . Width: 1.25in / 3cm  . Fabric: Woven straw . Circumference: 22.5in / 57cm .",
    details="",
    stock=10,
    category="fashion",
    img='https://m.media-amazon.com/images/I/51VstdZfBnL._AC_UL1500_.jpg',
    user_id=1
  )
  product23 = Product(
    title="Lysol Disinfecting Wipes and Spray Value Pack Bundle ",
    brand="Lysol",
    price=26.94,
    description="Bundles Includes 4 Packs of 80 Wipes (Lemon & Lime Blossom) and 2 Cans of 19 oz Spray (Crisp Linen) . Lysol Disinfecting Wipes and Sprays kill 99.9% of germs including cold and flu viruses, MRSA, E.coli, Strep, and Salmonella . Lysol Disinfecting Wipes and Sprays kill antibiotic resistant and odor-causing bacteria * Lysol Disinfecting Spray kills over 100 germs and is germicidal, virucidal, fungicidal, tuberculocidal, bactericidal, and mildewcidal * Lysol Disinfecting Wipes are a convenient way to clean and disinfect your household surfaces and remove more than 95% of allergens  ",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/81is2yCYhBS._AC_SL1500_.jpg',
    user_id=1
  )
  product24 = Product(
    title="Clorox ToiletWand Disposable Toilet Cleaning System - ToiletWand, Storage Caddy and 6 Disinfecting ToiletWand Refill Heads",
    brand="Clorox",
    price=7.97,
    description="TOILET CLEANING SYSTEM: Add this toilet bowl cleaner to your cleaning supplies including 1 ToiletWand, 1 storage caddy and 6 disposable ToiletWand refills plus 3 bonus refills that kill 99.9% of bacteria and viruses; Packaging may vary . DISPOSABLE SPONGES: These toilet scrub pad refill heads click onto the ToiletWand to swish, scrub and clean the toilet bowl and conveniently pop off to throw in the trash.Bleach free . DISINFECTING CLEANER: Preloaded with Clorox cleaner, these disposable scrubbing pads deep clean and remove stains while eliminating germs to make your toilet bowl feel like new. Note: Physical and Chemical Hazards: Do not mix with bleach-containing products or with other bathroom or household cleaners . BATHROOM CLEANING PRODUCTS: Eliminate the need to store a dirty, germ-ridden toilet brush with the convenient caddy that stores your ToiletWand and refill heads for an all-in-one bathroom household cleaner . TOILET SCRUBBER: The hexagon shaped sponge heads clean in hard to reach places under the bowl rim and drain for a deeper and faster clean to remove rust, calcium and lime stains .",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/71CpkOwcbfL._AC_SL1500_.jpg',
    user_id=1
  )
  product25 = Product(
    title="Tide PODS Laundry Detergent Soap Pods, Spring Meadow, 81 count ",
    brand="Tide",
    price=18.27,
    description="Tide PODS consist of up to 90% active ingredients, so you can be sure that youre paying for clean not for water . 10x the cleaning power* (*Stain Removal of 1 dose vs. 10X doses of the leading liquid bargain brand) . Reveal our brightest clean yet for brighter brights and whiter whites . 3 in 1 technology: detergent, stain remover, color protector . Dissolves in both hot & cold water. Keep out of reach of children . Its Spring Meadow scent is infused with fresh floral notes to help keep your familys clothes smelling great ",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/81cJOYctBeL._AC_SL1500_.jpg',
    user_id=1
  )
  product26 = Product(
    title="Tide PODS Laundry Detergent Pods, Spring Meadow, 91 count ",
    brand="Tide",
    price=19.27,
    description="Tide PODS consist of up to 90% active ingredients, so you can be sure that youre paying for clean not for water . 10x the cleaning power* (*Stain Removal of 1 dose vs. 10X doses of the leading liquid bargain brand) . Reveal our brightest clean yet for brighter brights and whiter whites . 3 in 1 technology: detergent, stain remover, color protector . Dissolves in both hot & cold water. Keep out of reach of children . Its Spring Meadow scent is infused with fresh floral notes to help keep your family eatin' good ",
    details="",
    stock=10,
    category="groceries",
    img='https://m.media-amazon.com/images/I/81cJOYctBeL._AC_SL1500_.jpg',
    user_id=1
  )
  product27 = Product(
    title="Bounce Dryer Sheets Laundry Fabric Softener, Outdoor Fresh, 240 Count  ",
    brand="Bounce",
    price=8.64,
    description="Classic Bounce outdoor fresh scent . Helps Reduce Wrinkles . Controls static cling in fabrics . Helps repel lint and hair . Softens fabrics . Contains biodegradable cationic softeners . For use in all types of dryers (HE & Regular) .",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/71K6wrm8CIL._AC_SL1500_.jpg',
    user_id=1
  )
  product28 = Product(
    title="OxiClean White Revive Laundry Whitener Stain Remover, 5 Lbs ",
    brand="OxiClean",
    price=10.69,
    description="Includes: One 5 lb container of OxiClean White Revive Laundry Whitener and Stain Remover to maintain and revive dingy whites . Chlorine Bleach Alternative: OxiClean White Revive Laundry Whitener and Stain Remover for white clothes contains 40% more whitening power per load than chlorine bleach . Laundry Detergent Booster: Use with your regular detergent to gently lift away stains while brightening and restoring dingy whites . Add to Wash or Presoak: Add this whitener for clothes to every load of laundry or you can even dissolve in water to pre-soak . Chlorine-Free Clothes Whitener: Contains no chlorine bleach and is color safe; no chlorine smell or worrying about spills or splatters on colored clothing . ",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/71TnE5ZJAVL._AC_SL1500_.jpg',
    user_id=1
  )
  product29 = Product(
    title="Air Wick Essential Mist, Essential Oil Diffuser, Diffuser + 1 Refill, Lavender and Almond Blossom, Air Freshener, 2 Piece Set",
    brand="Air Wick",
    price=9.97,
    description="Transforms natural essential oils into gentle mist . Device does not mist continuously, it runs in 8 hour cycles, going on standby till next day, delivering optimal fragrance experience . Portable device, battery operated (3 AAA incl.). Adjustable duration and frequency of mist: low, medium and high settings. Adjustable duration and frequency of mist: Low 4 sec. Mist (17 min pause), Medium 5 sec. (12 min Pause), High 6 sec. Mist (10 min Pause) . Each refill provides up to 45 days fragrance based on low setting . Easy to change out the refills, each refill comes ready to use, no need to add water . ",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/81nhtfwoKkL._AC_SL1500_.jpg',
    user_id=1
  )
  product30 = Product(
    title="5 Pack Bamboo Charcoal Air Purifying Bags,Odor Eliminator,Closet Deodorizer, Car Air Freshener(5 Pack, 200g Each) ",
    brand="Comfy Mate",
    price=19.07,
    description="PACK OF 5 BAGS PLUS 4 FREE STEEL HOOKS - 5x200g The Purifying Bag have a breathable charcoal bag which makes adsorption more efficient,fills with bamboo charcoal that Remove unpleasant odors,makes home fresh . THE ULTIMATE BAMBOO CHARCOAL CREATE DOUBLE ADSORPTION - Your ultimate choice charcoal bags are made from bamboo charcoal,you can use it anywhere such as a living room, car, wardrobe, refrigerator, bathroom, shoe cabinet, pet room, sports bag etc.ridding your home of persistent smells including cigarette smoke or pet odors . PERFECT FOR ANY WHERE - The Charcoal Purifying Bag unlike other fresheners, it will continuously bring you fresh air.Perfect for whole family . REUSABLE AND LONG LASTING LIVE FOR 2 YEARS - Comparing with other brands, our charcoal purifying bag can use about 2 years, Please recharge them under direct sunlight for two hours every month or more Frequently and can be reused up to two years . ",
    details="",
    stock=10,
    category="household",
    img='https://m.media-amazon.com/images/I/81NyTDJqMbL._AC_SL1500_.jpg',
    user_id=1
  )

  db.session.add_all([echo_dot_4th_gen_clock_white,echo_dot_4th_gen_clock_blue,echo_show_8th_black,
                      echo_show_8th_sand,fire_stick_lite_latest, product6, product7, product8,
                      product9,product10,product11,product12,product13,product14,product15,product16,
                      product17,product18,product19,product20,product21,product22,product23,product24,
                      product25,product26,product27,product28,product29,product30])
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
