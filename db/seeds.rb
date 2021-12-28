# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(name: "jane", email_address: "jane@example.com",password: "1234567")

item = Item.create(name: "lamp", description:"shine very iluminate" , image_url: Faker::LoremFlickr.image(size: “320x240” ,search_terms: ['sports', 'fitness']))

user.lists.create(name: "home")

list.items << item
