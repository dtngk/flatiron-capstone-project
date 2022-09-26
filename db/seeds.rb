# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "fakeuser", password: "faker12");
user2 = User.create(username: "not1", password: "123456");
user3 = User.create(username: "doggy", password: "jjz3uu");
user4 = User.create(username: "cardman", password: "Awe123");

character1 = Character.create(name: "Fighter", photo: "", attack: 5, defense: 5, magic: 1, speed: 3, health: 6)
character2 = Character.create(name: "Knight", photo: "", attack: 2, defense: 8, magic: 1, speed: 3, health: 9)
character3 = Character.create(name: "Barbarian", photo: "", attack: 7, defense: 2, magic: 1, speed: 4, health: 4)
character4 = Character.create(name: "Archer", photo: "", attack: 4, defense: 3, magic: 1, speed: 4, health: 4)
character5 = Character.create(name: "Mage", photo: "", attack: 1, defense: 5, magic: 8, speed: 2, health: 3)
character6 = Character.create(name: "Cleric", photo: "", attack: 1, defense: 4, magic: 6, speed: 5,  health: 3)
character7 = Character.create(name: "Rogue", photo: "", attack: 3, defense: 2, magic: 1, speed: 8, health: 4)

Comment.create(comment: "Don't need defense if you can one-shot everything!", user_id: user2.id, character_id: character3.id)

Comment.create(comment: "Magic owns!", user_id: user3.id, character_id: character5.id)

Comment.create(comment: "Pew Pew goes the bow", user_id: user3.id, character_id: character4.id)

Team.create(team_name: "Test Team", user_id: user2.id, char1_id: character1.id, char2_id: character2.id, char3_id: character3.id)

Team.create(team_name: "Fake Team", user_id: user1.id, char1_id: character4.id, char2_id: character5.id, char3_id: character6.id)

Team.create(team_name: "No Tears", user_id: user4.id, char1_id: character2.id, char2_id: character6.id, char3_id: character7.id)



