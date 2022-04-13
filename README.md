# The Wishlist App

The Wishlist app is a lightweight user friendly application designed to let users create and curate shopping lists.  A straightforward organizational tool at its core, The Wishlist's list functionality has the potential to be applied across a variety of use cases.

## Technologies
This project uses the following technologies:
- Frontend: React.js with Bootstrap v5 and custom CSS
- Backend: Ruby on Rails, Postgresql, ActiveRecord

## Launch

Deployed Version: https://fi-wishlist.herokuapp.com/

Or

After cloning repository:
Launch backend

```
$ bundle install
$ rails db:migrate
$ rails db:seed
$ rails s
```
Launch frontend
 - (In a seperate terminal)
```
$ cd client/
$ npm install
$ npm start
```
Navigate
 -In browser
```
localhost:3000/
```

## Features



### Login Page
- Wishlist has full user authentication using the Bcrypt Gem.  Users can login to existing accounts or create a new account on this page.

<img width="1680" alt="Wishlist Homepage" src="https://user-images.githubusercontent.com/42919853/162262604-2d9fe635-8f71-4698-a986-d7d1f5b46b94.png">


### Home Page
- Upon login users are brought to the Homepage.  Here the user can access the sites navigation.
- Navigation includes:
  - Home
  - My Wishlists (a collection of curated wishlists generated by the user)
  - Current Items (a collection of items generated from a mock e-commerce API, and user added items)
- Users may also logout at anytime using the logout feature.

<img width="1680" alt="WIshlist Homepage " src="https://user-images.githubusercontent.com/42919853/162264063-5153cda3-4fd6-41cd-ab64-e8b2e2c7964b.png">


### Items Page
- The Current Items page displays all the current items included in the Item inventory
- Users can:
  - View all Items currently in the app
  - Search all current items
  - Add Items to created wishlists
  - Delete Item from Items list
  - Edit Items
  - Create new items

<img width="1680" alt="Wishlist ItemPage Header" src="https://user-images.githubusercontent.com/42919853/163036577-778cd592-ef48-43f1-8a1e-dfb9c946bda8.png">

#### Full Item Card Display
<img width="1680" alt="WIshlist Item full display" src="https://user-images.githubusercontent.com/42919853/163036640-0b51e6a7-2407-4e90-9bcb-a113fa20c5f2.png">

#### Create new item form
<img width="1680" alt="Wishlist Item add form" src="https://user-images.githubusercontent.com/42919853/163037318-79e807c0-4143-4574-bc50-e14bf93a963f.png">





### My Wishlists Page
- The Wishlist page displays all current active Wishlists created by the user
- The user can:
  - Create new wishlists
  - Delete entire wishlists and associated items
  - View all current items in selected wishlist
  - Delete individual items from any selected wishlist

<img width="1680" alt="My Wishlists Page" src="https://user-images.githubusercontent.com/42919853/163038856-d7b4fba8-e925-4269-939a-75e0b7f6ae80.png">



## Created By

### Dayeane Cortes
- Github: <a href="https://github.com/dayeane">dayeane</a>
- LinkedIn: <a href='https://www.linkedin.com/in/dayeane-cortes-030612b4/'>Dayeane Cortes LinkedIn</a>

### Ryan Kotsovolos
- Github: <a href="https://github.com/Rkotsovolos">Rkotsovolos</a>
- LinkedIn: <a href="https://www.linkedin.com/in/rkotsovolos/">Ryan Kotsovolos' LinkedIn</a>

### Nicholas Fagner
- Github: <a href="https://github.com/geosynchro">geosynchro</a>
- LinkedIn: <a href="https://www.linkedin.com/in/nicholas-fagner/">Nicholas Fagner's LinkedIn</a>
