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
  product31 = Product(
    title="Dragon Ball Super Goku Version 2 - Dragon Stars 6.5 Action Figure, Series 17 (36774) ",
    brand="Bandai",
    price=19.99,
    description="DESIGN INSPIRED BY POPULAR ANIME TV SERIES: Bandais Dragon Ball Super Evolve figure is so authentic and realistic you can recreate the epic battles and favorite moments from the TV show . ANIME INSPIRED PACKAGING: Figure comes packaged with impressive and cool Japanese inspired design . AMAZING ARTICULATION AND IMPRESSIVE DETAILS: The amazingly articulated 6.5-inch scale figure allows you to recreate your favorite characters epic moments with impressive 16 points of articulation. This figure is perfect for both play and display . AWESOME ANIME INSPIRED ACCESSORIES: The Dragon Ball Super Dragon Stars figure comes with additional two sets of switchable hands and character-specific accessories making it an amazing addition to the world of Dragon Ball Super . A WHOLE WORLD OF DRAGON BALL SUPER: Fans can find more Dragon Ball Dragon Stars figures and collect them all to stage battles from the show and build their own complete Dragon ball world, exclusively from Bandai. (Each figure sold separately) ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/713cD+qyYNL._AC_SL1500_.jpg',
    user_id=1
  )
  product32 = Product(
    title="Dragon Ball Super - Dragon Stars Vegeta Figure (Series 1) ",
    brand="Bandai",
    price=19.99,
    description="DESIGN INSPIRED BY POPULAR ANIME TV SERIES: Bandais Dragon Ball Super Evolve figure is so authentic and realistic you can recreate the epic battles and favorite moments from the TV show . ANIME INSPIRED PACKAGING: Figure comes packaged with impressive and cool Japanese inspired design . AMAZING ARTICULATION AND IMPRESSIVE DETAILS: The amazingly articulated 6.5-inch scale figure allows you to recreate your favorite characters epic moments with impressive 16 points of articulation. This figure is perfect for both play and display . AWESOME ANIME INSPIRED ACCESSORIES: The Dragon Ball Super Dragon Stars figure comes with additional two sets of switchable hands and character-specific accessories making it an amazing addition to the world of Dragon Ball Super . A WHOLE WORLD OF DRAGON BALL SUPER: Fans can find more Dragon Ball Dragon Stars figures and collect them all to stage battles from the show and build their own complete Dragon ball world, exclusively from Bandai. d separately)  ",
    details="",
    stock=10,
    category="toys",
    img=' https://m.media-amazon.com/images/I/71MsJm44GgL._AC_SL1500_.jpg',
    user_id=1
  )
  product33 = Product(
    title="UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly, Makes a Great Gift for 7 Year Olds and Up [Amazon Exclusive]  ",
    brand="Mattel",
    price=9.99,
    description="UNO is the classic family card game that's easy to learn and so much fun to play!  . In a race to deplete your hand, match one of your cards with the current card shown on top of the deck by either color or number . Strategize to defeat your competition with special action cards like Skips, Reverses, Draw Twos and color-changing Wild cards . When you're down to one card, don't forget to shout 'UNO!' . This fun family card game is perfect for adults, teens and kids 7 years old and up.  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71dSl3Q0rEL._AC_SL1500_.jpg ',
    user_id=1
  )
  product34 = Product(
    title="Play-Doh Modeling Compound 10-Pack Case of Colors, Non-Toxic, Assorted, 2 oz. Cans, Ages 2 and up, Multicolor (Amazon Exclusive)  ",
    brand="Play-Doh",
    price=7.99,
    description="10 cans of creative fun  kids can get creative with just the right colors They need in this Play-Doh 10-pack of 2-ounce cans! . Just the right colors to start - shape, squish, mix, and make it all. Great for lots of uses like Play-Doh refills, as a Play-Doh Starter set, or as an add-on to any Play-Doh toy (sold separately) . Shape your imagination squishy, bright, non-toxic Play-Doh compound sparks imaginations For kids 2 and up who love arts and crafts like Modeling clay. . Easy-open, recyclable package - SHIPS in simple recyclable packaging that's easy to open and frustration free, and the Play-Doh cans and lids are also recyclable to help build a more sustainable world!  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81xV+D1OkGL._AC_SL1500_.jpg',
    user_id=1
  )
  product35 = Product(
    title="LEGO Star Wars at-at 75288 Building Kit, Fun Building Toy for Kids to Role-Play Exciting Missions in The Star Wars Universe and Recreate Classic Star Wars Trilogy Scenes (1,267 Pieces)  ",
    brand="Lego ",
    price=159.95,
    description="Fans of the classic Star Wars trilogy and the LEGO Star Wars: The Skywalker Saga video game will love recreating Battle of Hoth action with this detailed, posable LEGO brick version of the iconic AT-AT (75288) Walker . This fun, creative building toy for kids includes 6 LEGO Star Wars minifigures – Luke Skywalker, General Veers, 2 AT-AT Drivers and 2 Snowtroopers, all with weapons to role-play the Empire vs. Rebel Alliance battles . The AT-AT has a cockpit for 3 LEGO minifigures, foldout panels, spring-loaded shooters, a speeder bike, winch, bottom hatch so Luke can throw in the thermal detonator element, and more for realistic, creative play . This 1,267-piece set makes a super birthday present, holiday gift or special treat for boys and girls aged 10+ who can look forward to a rewarding building challenge and hours of fun solo or social play .  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81JgiiU+57L._AC_SL1500_.jpg ',
    user_id=1
  )
  product36 = Product(
    title="LEGO DC Batman Batmobile Tumbler: Scarecrow Showdown 76239 (422 Pieces)   ",
    brand="Lego ",
    price=39.95,
    description="LEGO DC Batman The Tumbler: Scarecrow Showdown (76239) puts high-octane, super-hero style and action into kids hands with the awesome, armored Tumbler Batmobile . Includes a buildable Tumbler Batmobile, plus Batman and the Scarecrow minifigures with weapons. An alternative nightmare head for Batman inspires even more play possibilities . Young action heroes can roar through GOTHAM CITY in the ultimate, armored crime-fighting machine and battle an iconic villain from the Batmanmovies . This buildable Tumbler toy makes a spectacular birthday or holiday gift for fans of Batman and cool cars aged 8 and up . The vehicle measures over 2.5 in. (7 cm) high, 7.5 in. (19 cm) long and 4.5 in. (12 cm) wide and combines easily with other LEGO DC Batman sets  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/819-i1Sy7ML._AC_SL1500_.jpg',
    user_id=1
  )
  product37 = Product(
    title="LEGO Harry Potter Hogwarts Castle 71043 Castle Model Building Kit with Harry Potter Figures Gryffindor, Hufflepuff, and More (6,020 Pieces)   ",
    brand="Lego ",
    price=399.95,
    description="Children can build a Hogwarts Castle Replica complete with a host of Harry Potter characters including 4 Harry Potter figures, 27 microfigures, the Chamber Of Secrets, the Whomping Willow and more from the wizarding world . The LEGO Harry Potter Hogwarts Castle replica includes a complete Harry Potter set of characters including the founders of the Harry Potter Houses themselves -- Godric Gryffindor, Helga Hufflepuff Salazar Slytherin, and Rowena Ravenclaw . This advanced buildings set is the perfect Harry Potter collectible for teens and adults, with a number of Harry Potter figures and sets including Dementors, the Chamber of Secrets, Aragog, the Basilisk and more - perfect for imaginative play . This Harry Potter set captures the magic of the wizarding world thanks to its intricate towers, buildable sets like Hagrid's Hut, and Harry Potter characters, It can be enjoyed on its own or in conjunction with other Harry Potter toys . This Harry Potter Hogwarts Castle model measures over 22 inches (58cm) high, 27 inches (69cm) wide and 16 inches (43cm) deep, comprising 6,020 individual toy castle pieces, This Harry Potter collectible toy castle is great for fans aged 16 and up ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71hpsrm6rKL._AC_SL1000_.jpg',
    user_id=1
  )
  product38 = Product(
    title="LEGO Super Mario Bowsers Airship Expansion Set 71391 Building Kit; Collectible Build-Display-and-Play Toy for Kids, New 2021 (1,152 Pieces) ",
    brand="Lego ",
    price=99.95,
    description="Children can build and display a brilliant brick-built model of Bowsers Airship and use it to create another unique level in their LEGO Super Mario universe with this cool Expansion Set (71391) . Includes LEGO figures of 3 Super Mario characters, Kamek, a Rocky Wrench and a Goomba, plus a POW Block and a Cannon Start Pipe to begin the level and enhance digital-coin-collecting potential . The Airship unfolds to reveal a detailed interior, and there are lots of challenges for players, including using Kameks broom to knock over Bowsers Mecha Hand and a plank to topple the mast . This 1,152-piece toy playset makes a wonderful birthday or holiday gift for kids aged 8 and up who own a LEGO Super Mario Starter Course (71360 or 71387), which is required for play . Great for solo play or connect via Bluetooth to a friends LEGO Mario or LEGO Luigi figure (extra figures not included) for 2-player social fun where teamwork earns bonus coins ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81Q2gSuGu8S._AC_SL1500_.jpg',
    user_id=1
  )
  product39 = Product(
    title="LEGO The Friends Apartments 10292 Building Kit; Build a Displayable Model with Details from The Iconic TV Show (2,048 Pieces)  ",
    brand="Lego ",
    price=149.95,
    description="Build and display an authentic LEGO version of Joey and Chandlers apartment and Monica and Rachels apartment, plus the adjoining hallway, with this Friends TV show LEGO set . Packed with authentic details and references to classic Friends episodes, this LEGO The Friends Apartments (10292) building kit for adults will make the day, month and year of any Friends fan . With 7 minifigures and tons of delightful accessories referencing best-loved moments from the hit TV show, this set looks amazing on display . Offering an immersive build for adults, this set is the perfect way to celebrate your love of the Friends TV show. It also makes a top gift for anyone who loves Friends collectibles . Measures over 4 in. (10 cm) high, 25 in. (64 cm) wide and 12 in. (31 cm) deep. For a smaller display, the carpets lift out to create fun mini models ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81DEZqGb-OL._AC_SL1500_.jpg',
    user_id=1
  )
  product40 = Product(
    title="Barbie Cutie Reveal Doll with Bunny Plush Costume & 10 Surprises Including Mini Pet & Color Change, Gift for Kids 3 Years & Older  ",
    brand="Barbie ",
    price= 17.84,
    description="With 10 surprises in 1 package, the Barbie Cutie Reveal dolls deliver the cutest unboxing experience with soft, plush animal friends and fashions, surprises and transforming fun! . Unbox the package to find a soft, plush animal with a Barbie doll inside. Choose from an adorable bunny, kitten, puppy or panda! Which doll will you reveal? . Lift the costume head to reveal a posable Barbie doll with long, colorful hair and twinkle-shine face details. . Open the 4 surprise bags to find fashions and accessories -- a super-shimmery skirt, pair of cool shoes, sponge-comb, animal-ear headband and matching mini pet. . Kids can dress and accessorize Barbie doll by reversing the costume top to find a super-soft fleece jacket with a cute fashion print  like mini rainbows or hearts. The costume head turns into a bed for the mini pet friend, too! . Surprises continue with color-change cuteness -- use ice cold water to transform Barbie dolls face with animal face paint and to “open and close” the mini pets eyes. Change back with warm water. Repeat again and again! ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81za1N+FCxL._AC_SL1500_.jpg ',
    user_id=1
  )
  product41 = Product(
    title="Barbie Cutie Reveal Doll with Kitty Plush Costume & 10 Surprises Including Mini Pet & Color Change, Gift for Kids 3 Years & Older  ",
    brand="Barbie ",
    price= 17.84,
    description="With 10 surprises in 1 package, the Barbie Cutie Reveal dolls deliver the cutest unboxing experience with soft, plush animal friends and fashions, surprises and transforming fun! . Unbox the package to find a soft, plush animal with a Barbie doll inside. Choose from an adorable bunny, kitten, puppy or panda! Which doll will you reveal? . Lift the costume head to reveal a posable Barbie doll with long, colorful hair and twinkle-shine face details. . Open the 4 surprise bags to find fashions and accessories -- a super-shimmery skirt, pair of cool shoes, sponge-comb, animal-ear headband and matching mini pet. . Kids can dress and accessorize Barbie doll by reversing the costume top to find a super-soft fleece jacket with a cute fashion print  like mini rainbows or hearts. The costume head turns into a bed for the mini pet friend, too! . Surprises continue with color-change cuteness -- use ice cold water to transform Barbie dolls face with animal face paint and to “open and close” the mini pets eyes. Change back with warm water. Repeat again and again! ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81nh8tFQMlL._AC_SL1500_.jpg',
    user_id=1
  )
  product42 = Product(
    title="Barbie Cutie Reveal Doll with Panda Plush Costume & 10 Surprises Including Mini Pet & Color Change, Gift for Kids 3 Years & Older  ",
    brand="Barbie ",
    price= 17.84,
    description="With 10 surprises in 1 package, the Barbie Cutie Reveal dolls deliver the cutest unboxing experience with soft, plush animal friends and fashions, surprises and transforming fun! . Unbox the package to find a soft, plush animal with a Barbie doll inside. Choose from an adorable bunny, kitten, puppy or panda! Which doll will you reveal? . Lift the costume head to reveal a posable Barbie doll with long, colorful hair and twinkle-shine face details. . Open the 4 surprise bags to find fashions and accessories -- a super-shimmery skirt, pair of cool shoes, sponge-comb, animal-ear headband and matching mini pet. . Kids can dress and accessorize Barbie doll by reversing the costume top to find a super-soft fleece jacket with a cute fashion print  like mini rainbows or hearts. The costume head turns into a bed for the mini pet friend, too! . Surprises continue with color-change cuteness -- use ice cold water to transform Barbie dolls face with animal face paint and to “open and close” the mini pets eyes. Change back with warm water. Repeat again and again! ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81SHQd1LPgL._AC_SL1500_.jpg',
    user_id=1
  )
  product43 = Product(
    title="Barbie Cutie Reveal Doll with Puppy Plush Costume & 10 Surprises Including Mini Pet & Color Change, Gift for Kids 3 Years & Older  ",
    brand="Barbie ",
    price= 17.84,
    description="With 10 surprises in 1 package, the Barbie Cutie Reveal dolls deliver the cutest unboxing experience with soft, plush animal friends and fashions, surprises and transforming fun! . Unbox the package to find a soft, plush animal with a Barbie doll inside. Choose from an adorable bunny, kitten, puppy or panda! Which doll will you reveal? . Lift the costume head to reveal a posable Barbie doll with long, colorful hair and twinkle-shine face details. . Open the 4 surprise bags to find fashions and accessories -- a super-shimmery skirt, pair of cool shoes, sponge-comb, animal-ear headband and matching mini pet. . Kids can dress and accessorize Barbie doll by reversing the costume top to find a super-soft fleece jacket with a cute fashion print  like mini rainbows or hearts. The costume head turns into a bed for the mini pet friend, too! . Surprises continue with color-change cuteness -- use ice cold water to transform Barbie dolls face with animal face paint and to “open and close” the mini pets eyes. Change back with warm water. Repeat again and again! ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/81Yr7J5ICoL._AC_SL1500_.jpg',
    user_id=1
  )
  product44 = Product(
    title="WINNIE THE POOH and Tigger Mini Bean Bag Plush Set   ",
    brand="Disney ",
    price= 58.48,
    description="Genuine, Original, Authentic Disney Store . Embroidered features . Detailed plush sculpturing . Soft stuffing . Fuzzy velour fabrics  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/51sgFDCce0L._AC_.jpg',
    user_id=1
  )
  product45 = Product(
    title="69 Hole Bubble Machine, 69 Hole Bazooka Bubble Machine, Colorful Light Strong Wind Bubble Machine, Summer Outdoor Children's Toys - Good Things for Boys and Girls Party (Blue)  ",
    brand="WASZSEZ ",
    price= 22.89,
    description="【Product Design】The 69-hole bazooka is full of power, power and fun. 69-hole design, crazy bubbles, full of power. The ergonomic grip is rounded and doesn't hurt your hand. Bubbles, you can enjoy a colorful night . 【Bring joy】Interesting bubble toys can let children put down the screen electronic products, feel the childlike innocence in vision, grasping, sensory, hand-eye coordination, interactive toys, parent-child communication, etc., and bring happy time to the family. It can also be used as a small fan when the baby is tired. . 【Product use】Please use a special bubble solution, do not use DIY soap, the former will produce a lot of bubbles, because the effect is not the same as the soap; charge for 4 hours; the bubble solution should not stick too much, so as to avoid a small amount of solution sticking to the bubbles. With 69 bubble holes, thousands of colorful bubbles can be ejected in the sky every minute. . 【Product Composition】Product; 24*14*24cm Bazooka Glowing Bubble Gun Contrasting Color/Pink/Purple Green Material and Electronic Components Lithium Battery and Charging Cable, ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71E-oZIkmNL._AC_SL1500_.jpg ',
    user_id=1
  )
  product46 = Product(
    title="69 Hole Bubble Machine, 69 Hole Bazooka Bubble Machine, Colorful Light Strong Wind Bubble Machine, Summer Outdoor Children's Toys - Good Things for Boys and Girls Party (Pink)   ",
    brand="WASZSEZ ",
    price= 25.89,
    description="【Product Design】The 69-hole bazooka is full of power, power and fun. 69-hole design, crazy bubbles, full of power. The ergonomic grip is rounded and doesn't hurt your hand. Bubbles, you can enjoy a colorful night . 【Bring joy】Interesting bubble toys can let children put down the screen electronic products, feel the childlike innocence in vision, grasping, sensory, hand-eye coordination, interactive toys, parent-child communication, etc., and bring happy time to the family. It can also be used as a small fan when the baby is tired. . 【Product use】Please use a special bubble solution, do not use DIY soap, the former will produce a lot of bubbles, because the effect is not the same as the soap; charge for 4 hours; the bubble solution should not stick too much, so as to avoid a small amount of solution sticking to the bubbles. With 69 bubble holes, thousands of colorful bubbles can be ejected in the sky every minute. . 【Product Composition】Product; 24*14*24cm Bazooka ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71yUyDP3yTL._AC_SL1500_.jpg',
    user_id=1
  )
  product47 = Product(
    title="69 Hole Bubble Machine, 69 Hole Bazooka Bubble Machine, Colorful Light Strong Wind Bubble Machine, Summer Outdoor Children's Toys - Good Things for Boys and Girls Party (Blue)   ",
    brand="WASZSEZ ",
    price= 25.89,
    description="【Product Design】The 69-hole bazooka is full of power, power and fun. 69-hole design, crazy bubbles, full of power. The ergonomic grip is rounded and doesn't hurt your hand. Bubbles, you can enjoy a colorful night . 【Bring joy】Interesting bubble toys can let children put down the screen electronic products, feel the childlike innocence in vision, grasping, sensory, hand-eye coordination, interactive toys, parent-child communication, etc., and bring happy time to the family. It can also be used as a small fan when the baby is tired. . 【Product use】Please use a special bubble solution, do not use DIY soap, the former will produce a lot of bubbles, because the effect is not the same as the soap; charge for 4 hours; the bubble solution should not stick too much, so as to avoid a small amount of solution sticking to the bubbles. With 69 bubble holes, thousands of colorful bubbles can be ejected in the sky every minute. . 【Product Composition】Product; 24*14*24cm",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71qIpGqHGSL._AC_SL1500_.jpg',
    user_id=1
  )
  product48 = Product(
    title="Pokemon Sun & Moon Crimson Invasion Clanging Thunder Theme Deck  ",
    brand="Pokemon ",
    price=36.97,
    description="Includes a 60-card deck . Collectible coin . Damage counters . Deck box . A code card for the Pokémon TCG online  ",
    details="",
    stock=10,
    category="toys",
    img=' https://m.media-amazon.com/images/I/81TFoLyDt2L._AC_SL1500_.jpg',
    user_id=1
  )
  product49 = Product(
    title="Pokemon Both TCG Sun & Moon Burning Shadows Theme Decks - Ninetales & Lycanroc   ",
    brand="Pokemon ",
    price=56.97,
    description="Includes a 60-card deck . Collectible coin . Damage counters . Deck box . A code card for the Pokémon TCG online  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/A1x-GlM9MlL._AC_SL1500_.jpg',
    user_id=1
  )
  product50 = Product(
    title="Sonic the Hedgehog 2 The Movie 4inch Articulated Action Figure Collection (Knuckles)  ",
    brand="Sonic The Hedgehog ",
    price=19.99,
    description="Your favorite characters from the Sonic the Hedgehog 2 movie! . Assortment features Sonic, Tails, Knuckles, and Robotnik. (Additional figures each sold separately. Subject to availability.) . Each figure has multiple points of articulation for posing. . Includes a figure and movie-inspired accessory piece for play and display. ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/41WtgKk16sL._AC_.jpg ',
    user_id=1
  )
  product51 = Product(
    title="Sonic the Hedgehog 2 The Movie 4inch Articulated Action Figure Collection (Sonic)  ",
    brand="Sonic The Hedgehog ",
    price=19.99,
    description="Your favorite characters from the Sonic the Hedgehog 2 movie! . Assortment features Sonic, Tails, Knuckles, and Robotnik. (Additional figures each sold separately. Subject to availability.) . Each figure has multiple points of articulation for posing. . Includes a figure and movie-inspired accessory piece for play and display. ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/61z3EXVGgeL._AC_SL1080_.jpg ',
    user_id=1
  )
  product52 = Product(
    title="Sonic the Hedgehog 2 The Movie 4inch Articulated Action Figure Collection (Tails)  ",
    brand="Sonic The Hedgehog ",
    price=19.99,
    description="Your favorite characters from the Sonic the Hedgehog 2 movie! . Assortment features Sonic, Tails, Knuckles, and Robotnik. (Additional figures each sold separately. Subject to availability.) . Each figure has multiple points of articulation for posing. . Includes a figure and movie-inspired accessory piece for play and display. ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/61TcwT3ekCL._AC_SL1080_.jpg ',
    user_id=1
  )
  product53 = Product(
    title="Demon Slayer Figure Action Figure Tanjirou Kamado 6.7inch (Tanjiro Kamado)  ",
    brand="Banpresto ",
    price= 17.89,
    description="Material: PVC . Puppet type: modelAnime Characters: Demon SlayerAnime doll: Kimetsu no Yaiba FigureSize: about 6.7in . Surprise gift: The Demon Slayer Puppet is the perfect gift choice for your children, friends or other important people. This anime puppet will become a surprise gift. . Anime fan collection: You can order an action figure for yourself or an anime lover friend. They must really like this figure. Our anime statue is also a great choice for birthdays, Christmas, holidays, graduations, and special occasions! Our animation action figures can be used as party gifts, cake decorations, demon killer party supplies, and can also decorate children's rooms or even offices to add a fun atmosphere.  ",
    details="",
    stock=10,
    category="toys",
    img=' https://m.media-amazon.com/images/I/71V4NBPEGDL._AC_SL1500_.jpg',
    user_id=1
  )
  product54 = Product(
    title="Club Mocchi-Mocchi- Nintendo Super Mario Mega Luigi Hat Plush Stuffed Toy  ",
    brand="Club Mocchi ",
    price= 19.89,
    description="SUPER SOFT: Huggable Luigi Hat 15 Inch Mega Plush Stuffed Toy for kids has a unique squishy texture and is super soft to touch . COLLECTIBLE TOY: Collectible stuffed toys featuring fan-favorite characters from Nintendo . SUITABLE FOR: Ages 3 years and up . Officially licensed Nintendo product . Designed in Japan ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/7193PDiRv8L._AC_SL1500_.jpg',
    user_id=1
  )
  product55 = Product(
    title="Club Mocchi-Mocchi- Nintendo Super Mario Mega Mario Hat Plush Stuffed Toy   ",
    brand="Club Mocchi ",
    price= 19.89,
    description="SUPER SOFT: Huggable Luigi Hat 15 Inch Mega Plush Stuffed Toy for kids has a unique squishy texture and is super soft to touch . COLLECTIBLE TOY: Collectible stuffed toys featuring fan-favorite characters from Nintendo . SUITABLE FOR: Ages 3 years and up . Officially licensed Nintendo product . Designed in Japan ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/710Ws5uCPAL._AC_SL1500_.jpg',
    user_id=1
  )
  product56 = Product(
    title="Club Mocchi-Mocchi- Nintendo Super Mario Mega Bowser Hat Plush Stuffed Toy   ",
    brand="Club Mocchi ",
    price= 19.89,
    description="SUPER SOFT: Huggable Luigi Hat 15 Inch Mega Plush Stuffed Toy for kids has a unique squishy texture and is super soft to touch . COLLECTIBLE TOY: Collectible stuffed toys featuring fan-favorite characters from Nintendo . SUITABLE FOR: Ages 3 years and up . Officially licensed Nintendo product . Designed in Japan ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71ya7h7ugaL._AC_SL1500_.jpg',
    user_id=1
  )
  product57 = Product(
    title="Club Mocchi-Mocchi- Nintendo Super Mario Mega Shy GuyPlush Stuffed Toy   ",
    brand="Club Mocchi ",
    price= 19.89,
    description="SUPER SOFT: Huggable Luigi Hat 15 Inch Mega Plush Stuffed Toy for kids has a unique squishy texture and is super soft to touch . COLLECTIBLE TOY: Collectible stuffed toys featuring fan-favorite characters from Nintendo . SUITABLE FOR: Ages 3 years and up . Officially licensed Nintendo product . Designed in Japan ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71EyKUJ3ZeL._AC_SL1500_.jpg',
    user_id=1
  )
  product58 = Product(
    title="Creeper Plush Toys Baby Pig Baby Mooshroom Plushand Enderman Plush Toys Game Plush Stuffed Toys for GIF  ",
    brand="MineCraft ",
    price= 23.99,
    description="1x Creeper . 1x Enderman . 1xBaby Pig . 1xBaby Mooshroom Plush . Scale plush.Recreate your favorite moments from the game with this cuddly plush toy.Soft and cuddly construction makes it great for fans of all ages!  ",
    details="",
    stock=10,
    category="toys",
    img='https://m.media-amazon.com/images/I/71ZJNtgGmWL._AC_SL1500_.jpg',
    user_id=1
  )
  product59 = Product(
    title="COMOWARE Titanium Twist Drill Bit Set - 13 Pcs Hex Shank High Speed Steel for Wood Plastic Aluminum Alloy, Quick Change, 1/16-1/4'  ",
    brand="Comoware ",
    price= 15.99,
    description="HSS Titanium Coating - Classic HSS construction with titanium coating for capability and durability. The cutting edge is hardened and honed for sharpness, chatter-free design with staggered cutting teeth ensure the precise countersinking and hole smooth clean. . Flutes Form - 2 flutes form helps clear chips and debris away from the bit, decreasing friction and heat for a faster, cooler drilling process. . Quick Change - 1/4 inch hex shank fits into all power tools more easily and securely, specially for locking into quick change chuck. . Meet Your Demands - Great drill bits set for metal/wood/plastic countersink. Suitable for Home DIY, and General Building/Engineering Use. . Organized Holder - A drill bits holder with size index is included in the set for easy storage and organizing. The drill bits set fits the majority of brands currently on the market. ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71RlRyKtZLL._SL1500_.jpg',
    user_id=1
  )
  product60 = Product(
    title="COMOWARE Impact Drill Bit Set - 21 Pcs Hex Drill Bit Set, Titanium Drill Bit Set, HSS Quick Change Impact Driver Drill Bit Set for Wood, Plastic, Aluminum Alloy, Metal, 1/16'-1/2'   ",
    brand="Comoware ",
    price= 24.99,
    description="HSS Titanium Coating - Classic HSS construction with titanium coating for capability and durability. The cutting edge is hardened and honed for sharpness, chatter-free design with staggered cutting teeth ensure the precise countersinking and hole smooth clean. . Flutes Form - 2 flutes form helps clear chips and debris away from the bit, decreasing friction and heat for a faster, cooler drilling process. . Quick Change - 1/4 inch hex shank fits into all power tools more easily and securely, specially for locking into quick change chuck. . Meet Your Demands - Great drill bits set for metal/wood/plastic countersink. Suitable for Home DIY, and General Building/Engineering Use. . Organized Holder - A drill bits holder with size index is included in the set for easy storage and organizing. The drill bits set fits the majority of brands currently on the market. ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71uuLULkWTL._SL1500_.jpg',
    user_id=1
  )
  product61 = Product(
    title="COMOWARE Titanium Impact Drill Bit Set - 30 Pcs Hex Shank HSS, Quick Change Design, 1/16'-1/2'   ",
    brand="Comoware ",
    price= 29.99,
    description="HSS Titanium Coating - Classic HSS construction with titanium coating for capability and durability. The cutting edge is hardened and honed for sharpness, chatter-free design with staggered cutting teeth ensure the precise countersinking and hole smooth clean. . Flutes Form - 2 flutes form helps clear chips and debris away from the bit, decreasing friction and heat for a faster, cooler drilling process. . Quick Change - 1/4 inch hex shank fits into all power tools more easily and securely, specially for locking into quick change chuck. . Meet Your Demands - Great drill bits set for metal/wood/plastic countersink. Suitable for Home DIY, and General Building/Engineering Use. . Organized Holder - A drill bits holder with size index is included in the set for easy storage and organizing. The drill bits set fits the majority of brands currently on the market. ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61dxDkxzSpL._SL1001_.jpg',
    user_id=1
  )
  product62 = Product(
    title="DEWALT 12V/20V MAX Work Light, LED, Compact, Tool Only (DCL077B)   ",
    brand="DEWALT ",
    price= 78.69,
    description="360-degree handle of the portable work light is designed for multiple orientation use . DEWALT work light has powerful brightness at 2,000 lumen output . The rechargeable work light has natural daylight hue . IP54 Rated - Water and Dust Ingress Protection . Compact and lightweight at only 2.8 lbs. (tool only) . Tripod Mountable- 5/8 inch-11 and 1/4 inch-20 ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/81PenSroeFL._AC_SL1500_.jpg',
    user_id=1
  )
  product63 = Product(
    title="DEWALT 12V MAX LED Work Light, Hand Held (DCL510) , Yellow    ",
    brand="DEWALT ",
    price= 42.69,
    description="360-degree handle of the portable work light is designed for multiple orientation use . DEWALT work light has powerful brightness at 2,000 lumen output . The rechargeable work light has natural daylight hue . IP54 Rated - Water and Dust Ingress Protection . Compact and lightweight at only 2.8 lbs. (tool only) . Tripod Mountable- 5/8 inch-11 and 1/4 inch-20 ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/710h46aFHGL._AC_SL1500_.jpg',
    user_id=1
  )
  product64 = Product(
    title="First Aid Only 57 Piece 10 Person First Aid Kit (6060)  ",
    brand="First Aid Only ",
    price= 12.94,
    description="Kit Includes: Adhesive fabric and plastic bandages, antibiotic ointments, BZK antiseptic towelettes, burn cream packets, gauze roll and pads, gloves, scissors, tweezers, and other multi-use items for any potential emergency . Convenient Packaging: Durable plastic storage case with easy-to-carry handle for transporting first aid supplies in an emergency . Compact and Spacious: Individual compartments keep supplies organized and make retrieval easy and quick . First Aid Ideal For: small offices, vehicles, home, and job sites ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61N0L8xCZ1L._AC_SL1200_.jpg',
    user_id=1
  )
  product65 = Product(
    title="Mini First Aid Kit, 100 Pieces Water-Resistant Hard Shell Small Case - Perfect for Travel, Outdoor, Home, Office, Camping, Hiking, Car (Red) ",
    brand="First Aid Only ",
    price= 15.94,
    description="Kit Includes: Adhesive fabric and plastic bandages, antibiotic ointments, BZK antiseptic towelettes, burn cream packets, gauze roll and pads, gloves, scissors, tweezers, and other multi-use items for any potential emergency . Convenient Packaging: Durable plastic storage case with easy-to-carry handle for transporting first aid supplies in an emergency . Compact and Spacious: Individual compartments keep supplies organized and make retrieval easy and quick . First Aid Ideal For: small offices, vehicles, home, and job sites ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71qcb3u47-L._AC_SL1500_.jpg',
    user_id=1
  )
  product66 = Product(
    title="Nomzaa Basics Fire Resistant Security Safe with Programmable Electronic Keypad - 1.24 Cubic Feet, 14.17 x 13.8 x 19.67 inches ",
    brand="Nomzaa ",
    price= 209.94,
    description="1.2-cubic-foot fire-resistant safe for protecting important documents and other valuables from theft and fire . Complies with modified UL 72 Standard for Safety Tests for Fire Resistance of Record Protection Equipment for 20 minutes at 1200 degrees Fahrenheit tested by Intertek . Durable 14-gauge heavy-duty steel body construction; 5 large 0.75-inch bolts for superior security . Programmable electronic keypad provides quick and easy access; includes back-up key for emergency use . Adjustable shelf optimizes storage space; backed by an Amazon Basics limited 1-year warranty . Note: Please refer the user manual below for better use ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71WLOomn1oL._AC_SL1500_.jpg',
    user_id=1
  )
  product67 = Product(
    title="Nomzaa Basics Steel Security Safe with Programmable Electronic Keypad - Secure Cash, Jewelry, ID Documents - Black, 16.93 x 14.57 x 10.63 Inches, 1.2 Cubic Feet, Keypad Lock  ",
    brand="Nomzaa ",
    price= 119.44,
    description="1.2-cubic-foot fire-resistant safe for protecting important documents and other valuables from theft and fire . Complies with modified UL 72 Standard for Safety Tests for Fire Resistance of Record Protection Equipment for 20 minutes at 1200 degrees Fahrenheit tested by Intertek . Durable 14-gauge heavy-duty steel body construction; 5 large 0.75-inch bolts for superior security . Programmable electronic keypad provides quick and easy access; includes back-up key for emergency use . Adjustable shelf optimizes storage space; backed by an Amazon Basics limited 1-year warranty . Note: Please refer the user manual below for better use ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/81DQj9Rs5dL._AC_SL1500_.jpg',
    user_id=1
  )
  product68 = Product(
    title="Widespread Bathroom Faucet Polished Chrome Silver 3 Holes Deck Mounted Basin Mixer Tap with Pop Up Drain Assembly with Overflow Victorian Style Dual Cross Knobs Hot and Cold Water ",
    brand="Gotonovo ",
    price= 60.17,
    description=" You can install used with confidence, knowing this faucet backed by gotonovo Faucet's Lifetime Limited Warrantyvictorian three hole bathroom sink faucet . 【Durable Design】: The entire faucet is resistant to corrosion and wear. The tap works smoothly and quietly, it also has a good lubricating capacity and stability and does not easily dissolve the splashing phenomenon . 【Beautiful and Elegant Style】: The faucet is Victorian style, which looks fabulous and generous, the faucet is easy to use and also allows you to adjust the water temperature very precisely and quickly . 【Material】: Faucet body constructed of brass with double cross knobs, prevent to be discolored, rusty. Sleek European inspired modern contemporary design . 【Widespread installation】: 3 holes deck mounted installation. Very easy to install with instruction included. Standard America pipe and connect place, Including mounting hardware, 2 Connect hoses and Pop Up Drain with Overflow ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61vXvwsek3L._AC_SL1500_.jpg',
    user_id=1
  )
  product69 = Product(
    title="Widespread Bathroom Faucet Polished Black Onyx 3 Holes Deck Mounted Basin Mixer Tap with Pop Up Drain Assembly with Overflow Victorian Style Dual Cross Knobs Hot and Cold Water ",
    brand="Gotonovo ",
    price= 60.17,
    description=" You can install used with confidence, knowing this faucet backed by gotonovo Faucet's Lifetime Limited Warrantyvictorian three hole bathroom sink faucet . 【Durable Design】: The entire faucet is resistant to corrosion and wear. The tap works smoothly and quietly, it also has a good lubricating capacity and stability and does not easily dissolve the splashing phenomenon . 【Beautiful and Elegant Style】: The faucet is Victorian style, which looks fabulous and generous, the faucet is easy to use and also allows you to adjust the water temperature very precisely and quickly . 【Material】: Faucet body constructed of brass with double cross knobs, prevent to be discolored, rusty. Sleek European inspired modern contemporary design . 【Widespread installation】: 3 holes deck mounted installation. Very easy to install with instruction included. Standard America pipe and connect place, Including mounting hardware, 2 Connect hoses and Pop Up Drain with Overflow ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61xk39JACjL._AC_SL1500_.jpg',
    user_id=1
  )
  product70 = Product(
    title="AquaCare AS-SEEN-ON-TV High Pressure 8-mode Handheld Shower Head - Anti-clog Nozzles, Built-in Power Wash to Clean Tub, Tile & Pets, Extra Long 6 ft ",
    brand="Hotel Spa Store",
    price= 34.99,
    description="MORE WATER PRESSURE, LESS CLEANING - Revolutionary AquaCare hand shower features advanced 8-setting 5-zone Powerhead with Self-clean Anti-clog Nozzles that prevent accumulation of grime inside. So while other showerheads clog and loose water pressure over time, AquaCare nozzles remain clean and clog-free for years of flawless performance. Designed in USA by top American shower experts. Patent pending. . PURE-CLEAN PROTECTION - Studies show that ordinary shower heads are often infested with grime that rapidly grows overnight, then gets flashed out in your face with the morning shower. That's why keeping your showerhead clean is essential for good shower hygiene. AquaCare nozzles are made with special revolutionary material that works 24/7 on molecular level to protect from degradation. This protection is 100% safe and effective for the life of the product and can never wear off . PREMIUM CONVENIENCE PACKAGE - Enjoy added mobility and reach with Extra-long 72-inch Heavy-duty Stainless Steel Hose, Angle-adjustable Overhead Bracket, and an additional Low-reach Wall Bracket that mounts instantly and securely on any surface with power adhesive back. Ideal for Child Care, Senior Care, Pet Care, Bathing and Cleaning applications, AquaCare is your TOTAL SHOWER CARE system that create ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/91Lr056h7VL._AC_SL1500_.jpg',
    user_id=1
  )
  product71 = Product(
    title="AquaCare AS-SEEN-ON-TV High Pressure 8-mode Handheld Shower Head - Anti-clog Nozzles, Built-in Power Wash to Clean Tub, Tile & Pets, Extra Long 6 ft Black ",
    brand="Hotel Spa Store",
    price= 34.99,
    description="MORE WATER PRESSURE, LESS CLEANING - Revolutionary AquaCare hand shower features advanced 8-setting 5-zone Powerhead with Self-clean Anti-clog Nozzles that prevent accumulation of grime inside. So while other showerheads clog and loose water pressure over time, AquaCare nozzles remain clean and clog-free for years of flawless performance. Designed in USA by top American shower experts. Patent pending. . PURE-CLEAN PROTECTION - Studies show that ordinary shower heads are often infested with grime that rapidly grows overnight, then gets flashed out in your face with the morning shower. That's why keeping your showerhead clean is essential for good shower hygiene. AquaCare nozzles are made with special revolutionary material that works 24/7 on molecular level to protect from degradation. This protection is 100% safe and effective for the life of the product and can never wear off . PREMIUM CONVENIENCE PACKAGE - Enjoy added mobility and reach with Extra-long 72-inch Heavy-duty Stainless Steel Hose, Angle-adjustable Overhead Bracke",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/81B0DSM4BGL._AC_SL1500_.jpg',
    user_id=1
  )
  product72 = Product(
    title="Komelon SL2825 Self Lock 25-Foot Power Tape  ",
    brand="Komelon",
    price= 9.99,
    description="Self locking mechanism allows blade to be extended smoothly . Push button allows blade to be retracted smoothly . Nylon coated blade for maximum durability . Impact resistant rubberized case",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71EaD-AZy9S._AC_SL1500_.jpg',
    user_id=1
  )
  product73 = Product(
    title="Komelon SLSS125; 25ft x 1inch Stainless Steel Self-Locking Tape Measure ",
    brand="Komelon",
    price= 17.99,
    description="Self locking mechanism allows blade to be extended smoothly . Push button allows blade to be retracted smoothly . Nylon coated blade for maximum durability . Impact resistant rubberized case",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71dRt2c2BVL._AC_SL1500_.jpg',
    user_id=1
  )
  product74 = Product(
    title="U-MAX 6.6 FT Sliding Barn Wood Door Basic Sliding Track Hardware Kit  ",
    brand="U-Max",
    price= 39.99,
    description="Brand: U-MAX; Condition: Brand New; Material: High Quality Steel. . Door weight capacity: 200 lb; Fit door panel width: 36-40; Door panel thickness: 1 3/8 and 1 3/4. . Package Include: 6.6ft(2x3.3ft) Rail,5xRail Spacer,2xRoller,2xDoor Stop,2xEnd Cap,1xFloor Guide,1xHex Key;All other necessary hardware is included as you see in the pictures. For 16 inch stud. . Support: We are the manufacture of the sliding door hardware. If there is any part missed or defectived during shipping, please let us know, we will send replacement at no charge for missing/defect parts at first time. ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71DAs3kw1gL._AC_SL1200_.jpg',
    user_id=1
  )
  product75 = Product(
    title="U-MAX 13 FT Heavy Duty Sturdy Sliding Barn Door Hardware Kit -Sliding Smoothly and Quietly -Easy to Install -Includes Step-by-Step Installation Instruction (J Shape)  ",
    brand="U-Max",
    price= 82.99,
    description="Brand: U-MAX; Condition: Brand New; Material: High Quality Steel. . Door weight capacity: 200 lb; Fit door panel width: 36-40; Door panel thickness: 1 3/8 and 1 3/4. . Package Include: 6.6ft(2x3.3ft) Rail,5xRail Spacer,2xRoller,2xDoor Stop,2xEnd Cap,1xFloor Guide,1xHex Key;All other necessary hardware is included as you see in the pictures. For 16 inch stud. . Support: We are the manufacture of the sliding door hardware. If there is any part missed or defectived during shipping, please let us know, we will send replacement at no charge for missing/defect parts at first time. ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/71hVZxQjnOL._AC_SL1500_.jpg',
    user_id=1
  )
  product76 = Product(
    title="Etekcity Infrared Thermometer 1080, Heat Temperature Temp Gun for Cooking, Laser IR Surface Tool for Pizza, Blackstone Griddle, Grill, HVAC, Accessories, -58°F to 1022°F, Yellow ",
    brand="Etekcity",
    price= 20.99,
    description="NOT FOR HUMAN: The thermometer can't measure the internal temperature of an object; Temperature readings from this devices are inanimate objects, the measured temperature for humans or animals will not be correct; Class 2 laser, optical power 0.5-0.9Mw . BETTER ACCURACY: 12:1 D:S, lasergrip 1080 can accurately measure targets at greater distances compared to most other IR thermometers; For best accuracy, the distance between the thermometer and object of measurement should approximately be 14.17 in(36cm) . TARGET QUICKER: Measure surface temperature ranging from -58℉ to 1022℉/-50℃ to 550℃, you can choose the unit from ℉/℃; Response time: ≤500Ms; A built in laser gives you the precision to hone in on the exact space you want to measure . ADDED FUNCTIONS: The LCD screen is backlit, also has an auto-off function to extend the battery life, and features a low battery indicator so you never accidentally run out of juice (battery included) . VERSATILE DESIGN: Infrared technology makes it to measure the surface temperature of various objects especially temperatures above boiling points and below freezing points; Use it for cooking, ovens; A/C, refrigerators; or soapmaking cats toy etc ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61vHBOc4HpL._SL1500_.jpg',
    user_id=1
  )
  product77 = Product(
    title="Etekcity Infrared Thermometer 1080 (Not for Human) Temperature Gun Non-Contact Digital Laser Thermometer-58℉~1022℉ (-50℃-550℃) Blue & Gray, Standard Size  ",
    brand="Etekcity",
    price= 20.99,
    description="NOT FOR HUMAN: The thermometer can't measure the internal temperature of an object; Temperature readings from this devices are inanimate objects, the measured temperature for humans or animals will not be correct; Class 2 laser, optical power 0.5-0.9Mw . BETTER ACCURACY: 12:1 D:S, lasergrip 1080 can accurately measure targets at greater distances compared to most other IR thermometers; For best accuracy, the distance between the thermometer and object of measurement should approximately be 14.17 in(36cm) . TARGET QUICKER: Measure surface temperature ranging from -58℉ to 1022℉/-50℃ to 550℃, you can choose the unit from ℉/℃; Response time: ≤500Ms; A built in laser gives you the precision to hone in on the exact space you want to measure . ADDED FUNCTIONS: The LCD screen is backlit, also has an auto-off function to extend the battery life, and features a low battery indicator so you never accidentally run out of juice (battery included) . VERSATILE DESIGN: Infrared technology makes it to measure the surface temperature of various objects especially temperatures above boiling points and below freezing points; Use it for cooking, ovens; A/C, refrigerators; or soapmaking cats toy etc ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61kwaq0l3fL._SL1500_.jpg',
    user_id=1
  )
  product78 = Product(
    title="Philips Hue 2-Pack White and Color A19 Medium Lumen Smart Bulb, 1100 Lumens, Bluetooth & Zigbee Compatible (Hue Hub Optional), Compatible with Alexa & Google Assistant  ",
    brand="Philips",
    price= 88.99,
    description="Use preset light scenes to get the best light in which to Read, Relax, Concentrate, or Energize throughout your day. . Easily control your smart lights with the touch of a button, the sound of your voice or smart light accessories. . Seamlessly create the perfect ambiance for any occasion throughout your entire home. . Pair with any compatible Amazon Echo or Google Home device to use simple voice commands to control your Hue lights, hands free. . Add a Hue Bridge to your Bluetooth-controlled setup to tap into upgraded features such as away-from-home control & Sync with Music ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61tBWcMl1EL._AC_SL1500_.jpg',
    user_id=1
  )
  product79 = Product(
    title="Philips Hue 2-Pack White Ambiance A19 Medium Lumen Smart Bulb, 1100 Lumens, Bluetooth & Zigbee Compatible (Hue Hub Optional), Compatible with Alexa & Google Assistant ",
    brand="Philips",
    price= 45.99,
    description="Use preset light scenes to get the best light in which to Read, Relax, Concentrate, or Energize throughout your day. . Easily control your smart lights with the touch of a button, the sound of your voice or smart light accessories. . Seamlessly create the perfect ambiance for any occasion throughout your entire home. . Pair with any compatible Amazon Echo or Google Home device to use simple voice commands to control your Hue lights, hands free. . Add a Hue Bridge to your Bluetooth-controlled setup to tap into upgraded features such as away-from-home control & Sync with Music ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/611whOsnUqS._AC_SL1500_.jpg',
    user_id=1
  )
  product80 = Product(
    title="Philips Hue 2-Pack White A19 Medium Lumen Smart Bulb, 1100 Lumens, Bluetooth & Zigbee Compatible (Hue Hub Optional), Works with Alexa & Google Assistant, White (Dimmable Only) ",
    brand="Philips",
    price= 29.99,
    description="Use preset light scenes to get the best light in which to Read, Relax, Concentrate, or Energize throughout your day. . Easily control your smart lights with the touch of a button, the sound of your voice or smart light accessories. . Seamlessly create the perfect ambiance for any occasion throughout your entire home. . Pair with any compatible Amazon Echo or Google Home device to use simple voice commands to control your Hue lights, hands free. . Add a Hue Bridge to your Bluetooth-controlled setup to tap into upgraded features such as away-from-home control & Sync with Music ",
    details="",
    stock=10,
    category="home-improvement",
    img='https://m.media-amazon.com/images/I/61bi4s98+oS._AC_SL1500_.jpg',
    user_id=1
  )


  db.session.add_all([echo_dot_4th_gen_clock_white,echo_dot_4th_gen_clock_blue,echo_show_8th_black,
                      echo_show_8th_sand,fire_stick_lite_latest, product6, product7, product8,
                      product9,product10,product11,product12,product13,product14,product15,product16,
                      product17,product18,product19,product20,product21,product22,product23,product24,
                      product25,product26,product27,product28,product29,product30,product31,product32,product33,product34,
                      product35,product36,product37,product38,product39,product40,product41,product42,product43,product44,
                      product45,product46,product47,product48,product49,product50,product51,product52,product53,product54,
                      product55,product56,product57,product58,product59,product60,product61,product62,product63,product64,
                      product65,product66,product67,product68,product69,product70,product71,product72,product73,product74,
                      product75,product76,product77,product78,product79,product80])
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
