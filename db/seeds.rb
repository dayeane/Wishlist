# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all

p "creating Items"
(0..20).each do
  Item.create(name: Faker::Movies::StarWars.character, price: 100, description: Faker::Movies::StarWars.quote, image_url: Faker::LoremFlickr.image(size: "320x240" , search_terms: ['Starwars']))
end
  

["Nicholas", "Ryan", "Dayeane"].each do |name|
  p "creating User #{name}"
  user = User.create(name: name, email_address: "#{name}@example.com", password: "1234567")

  p "Creating user #{name} List"
  list = user.lists.create(name: "User #{name} List")

  p "Adding Items to #{name} List"
  Item.all.each do |item|
    p "adding #{item.name} to user #{name} list"
    list.items << item
  end
end

p "Finish creating Seeds"
