require  'faker'

# Trip.destroy_all
User.destroy_all

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", profile_img: Faker::Avatar.image)
kevin = User.create(username: "kevin", password: "12345678", first_name: "Kevin", last_name: "P", profile_img: Faker::Avatar.image)
john = User.create(username: "john", password: "12345678", first_name: "John", last_name: "M", profile_img: Faker::Avatar.image)

# puts "Seeding Trips 🚘"
# la = Trip.create(destination: "Santa Monica Pier", start_date: "2023-06-01", end_date: "2023-06-14", dest_img: Faker::LoremFlickr.image, user_id: liv.id)
# pa = Trip.create(destination: "Paris, France", start_date: "2023-09-01", end_date: "2023-06-21", dest_img:  Faker::LoremFlickr.image, user_id: liv.id)
# co = Trip.create(destination: "Rocky Mountain National Park", start_date: "2023-07-01", end_date: "2023-07-23", dest_img: Faker::LoremFlickr.image, user_id: kevin.id)
# bb = Trip.create(destination: "Bora Bora, French Polynesia", start_date: "2023-07-01", end_date: "2023-07-23", dest_img:  Faker::LoremFlickr.image, user_id: kevin.id)
# az = Trip.create(destination: "Saguro National Park", start_date: "2023-05-23", end_date: "2023-06-05", dest_img: Faker::LoremFlickr.image, user_id: john.id)
# ba = Trip.create(destination: "Bali, Indonesia", start_date: "2023-05-23", end_date: "2023-06-05", dest_img:  Faker::LoremFlickr.image, user_id: john.id)

puts "Done Seeding 🌱"