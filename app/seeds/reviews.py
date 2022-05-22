from app.models import db
from app.models.review import Review




def seed_reviews():

    review1 = Review(
        review_title = "Black device, white cable?",
        content = "Device is great, but beware... the black ones come with a white cable... unlike the previous model. No idea why they did this.",
        rating = 5,
        product_id = 2,
        user_id = 2,
    )
    review2 = Review(
        review_title = "Disappointing",
        content = "This is one of the most infuriating purchases I have made. I recently bought a echo dot 3rd generation on prime day special but couldn't help wonder if the sound quality was different. The 4th generation device's sound is much better. It is a clear and less muffled. Which is great if I didn't need to connect it to anything or what to use any Alexa features. I've spent 4 hours going through every troubleshoot information I can find and no matter what this thing will not connect to my mobile hotspot wifi. I had some similar issues with the 3rd generation but it just took a few extra tries. I even tried to get assistance and they sent me the instructions already included then switched me over to someone else who wanted to start me over again with the same basic help links.",
        rating = 1,
        product_id = 1,
        user_id = 1,
    )
    review3 = Review(
        review_title = "I thought it would be better",
        content = "I have had an Echo Show 5 for over a month in my work office and like it a great deal. I ESPECIALLY like the ability to customize the clock. I received the new Echo Show 8 as a gift this past weekend and like it for most of the same reasons I like the Echo Show 5: great connectivity; good diversity of content and skills; and great as a sound speaker and photo display. But I found that the ES8 does not have the same options for clock faces as the ES5. There is no apparent reason for this, nor is it highlighted in the marketing for the ES8. Amazon, please update the ES8 software to permit at least the same range of clockfaces as the ES5. ",
        rating = 4,
        product_id = 3,
        user_id = 3,
    )
    review4 = Review (
        review_title = "Infuriating",
        content = "I had the echo 5 and I can't stand the `try Alexa` phrases at the bottom. From all the reviews I read on the 5 I wasn't the only one. I hope Amazon realized that people didn't like this. I will be returning this. At least make it a option. ",
        rating = 2,
        product_id = 3,
        user_id = 2,
    )
    review5 = Review (
        review_title = "Great, but for one fatal flaw",
        content = "I really do enjoy this device and am impressed at the abilities of Alexa. That said, until they add the option to disable the “Try Alexa” suggestions on the bottom of the home screen I can’t recommend it and will not be buying addition units. Looking online I am far from the only person driven crazy by this so I hope Amazon listens to the feedback and makes this possible in a future update.",
        rating = 3,
        product_id = 4,
        user_id = 1,
    )
    review6 = Review (
        review_title = "Spotty performance",
        content = "We have had 5 of these FireSticks for two TVs..... over the past year. We stream video via an Eero system(4 routers) at 140Mb D, 16 U.Our previous FireStick exhibited the same problem as others, i.e., would not sign into any network. After a cold reboot, it would work(unplugging power to the stick and re-plugging it in.) A new Firestick showed no anomaly. I suspect that the buffering ability of our previous Firesticks has gone down the tubes, but cannot determine this. Early attempts to contact & Query Amazon QA proved useless, so weve fallen back to throwing the malfunctioning unit and buying a new unit. C'est la guerre. ",
        rating = 4,
        product_id = 5,
        user_id = 5,
    )
    review7 = Review(
        review_title = "Awesome, but...",
        content = "I enjoy this product greatly, but not enough free prime shows. The cost of movies is high . ",
        rating = 4,
        product_id = 5,
        user_id = 1,
    )
    review8 = Review(
        review_title = "It's going back asap",
        content = "Bought this last week. Just got covid and I'm really sick. The remote isnt working. In 6 years I never had this problem with my Roku. I will be returning it as soon as I feel better. I'm so angry right now I'll probably never buy another Amazon device ",
        rating = 1,
        product_id = 5,
        user_id = 2,
    )


    db.session.add_all([review1, review2, review3,review4,review5,review6,review7,
                        review8
                        ])
    # db.session.add(review)
    db.session.commit()

def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()
