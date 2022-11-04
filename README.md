<h1 align="center"> Nomzaa </h1>

![nomzaahome](https://user-images.githubusercontent.com/93230276/172439003-cbd0c2f0-b668-4f30-acbf-163fe3d5cb50.jpg)

<h5 align="center">  By:  <a href="https://jdvien.github.io/">Jason Vien</a> - <i><a href="https://nomzaa.herokuapp.com/">Live site</a></i></h5>

### Table of Contents
- [Main](#main)
- [Product](#product)
- [Cart](#cart)
- [Reviews](#reviews)
- [Order History](#orders)
- [Conclusion](#conclusion)

## Main
Nomzaa is a full-stack application created based on Amazon.com. Built on technologies such as React, Redux, Python, SQLAlchemy-Flask, Nomzaa aims to be as close an homage to its source as possible and is still a work-in-progress. Upon visiting the site, the main page will invite you to view the many product categories available for your perusal in the top-mounted navigation-bar, which acts as the main hub for site navigation, product search, and user controls. Being a facsimile of Amazon.com, Nomzaa's suite of features allows a customer to view, add, update quantity, and remove products from their shopping cart. If the customer wishes to buy an item at a later date, they can use the "Save for later" feature and store the item in a wishlist for another time. Upon checkout, purchased items will be grouped into an individual order and stored in the customer's order history, where they can view, update, or cancel their orders. 

#### Key Features
- Products: As a customer, products are available to view, search for, add to cart, save for later. Once purchased, those purchased products can be accessed in a personal order history.
- Cart: A customer can add products to their shopping cart, and within that cart they have access to controls that allow for modifying item quantity, shipping speed, deleting from cart, and saving the item for later, which will remove the item from the cart and store it in a separate wishlist that can be accessed separately. Once a customer is ready for complete their purchase, they can do so via the checkout button.
- Orders History: Customer purchases will be grouped and sorted together and populated in their orders history list, where they can update item quantity, change shipping speed, buy specific items again, and cancel their order.
- Reviews: Customers can review items they have purchased or browse other customer product reviews. After leaving a review, a user can then edit their review or delete it entirely.

#### Technology used

<img src="react-app/public/static/images/techs_used.jpg"></img>

#### How to use this application

## Products
- View products, either by clicking on individual product carts on the main page or via visiting the myriad product categories, where users will be treated to pages rendering a filtered list of products based on type. Once in a product's details page, uesrs have access to add-to-cart controls, item quantity select, and product reviews controls.
![GifMaker_20220607092708206](https://user-images.githubusercontent.com/93230276/172439747-e8b53266-9873-42b0-927e-ee7d356f4bd5.gif)


## Cart
- Once items are added to a customer's shopping, cart, items are populated in two distinct ways, as a traditional shopping cart on a dedicated page, and in a vertically mounted slide-in cart that renders as a component on products list and product details pages! This side cart has all the same controls as the standard cart page but presents it in a window-shopping-friendly manner. A customer can save an item for a later date, removing it from the cart and storing it in a separate wishlist.
![GifMaker_20220607092333395](https://user-images.githubusercontent.com/93230276/172442280-60b6d932-a2d7-4d66-a4c4-7ba7afaf3311.gif)

## Reviews
- A customer can view other customer product reviews of a specific product, and write a review themselves. Once posted, the user can edit or delete their product review and rating.
![GifMaker_20220607101708367](https://user-images.githubusercontent.com/93230276/172443790-94973257-e7a0-438e-8cd6-9ccb8b69fb30.gif)

## Order History
- Upon checkout, a customer can view their order in their personal order history page, which will populate and group products into individual orders sorted by date purchased. Here, a customer can update order item quantity, buy specific items again, update shipping speed, or cancel and order outright.
![Screenshot 2022-06-07 102045](https://user-images.githubusercontent.com/93230276/172444343-09d26735-25ac-4703-ae34-0ac35a5fef22.jpg)

## Features: 
### Product
  - View a product.
  - Create a product (WIP)
  - Edit a product.
  - Delete a product.

### Cart
  - View cart contents.
  - Add product to cart.
  - Edit cart (amount of products, save for later, etc).
  - Delete cart contents.

### Save For Later
  - View Saved For Later list contents
  - Add product to Saved For Later list
  - Delete product from Saved For Later
  - Add product from Saved For Later to Cart

### Reviews
  - View product reviews.
  - Create a product review
  - Edit product review
  - Delete product review

### Orders History
  - View order history list
  - change order details
  - hide order from view

### Search
  - Search for item in navbar-mounted searchbar
  - upon user input, auto-completed list renders and matches characters in user input
  - upon submission or user-selection from auto-complete list item, user is redirected to select item's product details page

## Conclusion
Nomzaa presented an interesting challenge, as it was the first time I was tasked to build a full-stack application separating backend and frontend responsibilities solo and within a tight deadline of 10 days. Going beyond the two-feature requirement by the end of the time allotment I ended up doubling that number with a few extra bells and whistles in the form of Save Item For Later, Orders History, and Search. This happened as a natural progression of bulding the app with the priority intention of providing a realistic user experience. Nomzaa was a fulfilling and enlightening build experience and will be actively improved throughout the weeks after submission.


