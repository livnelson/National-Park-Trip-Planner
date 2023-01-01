Trip.destroy_all
User.destroy_all

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N")
kevin = User.create(username: "kevin", password: "12345678", first_name: "Kevin", last_name: "P")
john = User.create(username: "john", password: "12345678", first_name: "John", last_name: "M")

puts "Seeding Trips 🚘"
la = Trip.create(destination: "Santa Monica Pier", lat: 34.00834606839637, lng: -118.4987939321287, start_date: "2023-06-01", end_date: "2023-06-14", user_id: liv.id)
pa = Trip.create(destination: "Paris, France", lat: 48.876582544132276, lng: 2.294824853396597, start_date: "2023-09-01", end_date: "2023-06-21", user_id: liv.id)
co = Trip.create(destination: "Rocky Mountain National Park", lat: 40.36628407558661, lng: -105.56059203081091, start_date: "2023-07-01", end_date: "2023-07-23", user_id: kevin.id)
bb = Trip.create(destination: "Bora Bora, French Polynesia", lat:-16.494475535268755, lng:  -151.74149247874928, start_date: "2023-07-01", end_date: "2023-07-23", user_id: kevin.id)
az = Trip.create(destination: "Saguro National Park", lat: 32.18045105826065, lng: -110.73628847330414, start_date: "2023-05-23", end_date: "2023-06-05", user_id: john.id)
ba = Trip.create(destination: "Bali, Indonesia", lat: -8.332226767094552, lng: 115.09358232060993, start_date: "2023-05-23", end_date: "2023-06-05", user_id: john.id)

puts "Done Seeding 🌱"