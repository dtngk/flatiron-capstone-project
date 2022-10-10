# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "fakeuser", password_digest: "faker12");
user2 = User.create(username: "not1", password_digest: "123456");
user3 = User.create(username: "doggy", password_digest: "jjz3uu");
user4 = User.create(username: "cardman", password_digest: "Awe123");

character1 = Character.create(name: "Fighter", attack: 12, defense: 12, magic: 1, speed: 14, health: 80)
character2 = Character.create(name: "Knight", attack: 5, defense: 18, magic: 1, speed: 13, health: 85)
character3 = Character.create(name: "Barbarian", attack: 17, defense: 5, magic: 1, speed: 10, health: 100)
character4 = Character.create(name: "Archer", attack: 10, defense: 8, magic: 5, speed: 8, health: 65)
character5 = Character.create(name: "Wizard", attack: 4, defense: 7, magic: 18, speed: 7, health: 45)
character6 = Character.create(name: "Priest", attack: 4, defense: 14, magic: 12, speed: 5,  health: 60)
character7 = Character.create(name: "Rogue", attack: 13, defense: 9, magic: 5, speed: 18, health: 50)
character8 = Character.create(name: "Assassin", attack: 15, defense: 9, magic: 5, speed: 16, health: 65)
character9 = Character.create(name: "Paladin", attack: 10, defense: 15, magic: 15, speed: 12, health: 90)
character10 = Character.create(name: "Ranger", attack: 12, defense: 10, magic: 5, speed: 12, health: 50)
character11 = Character.create(name: "Dragoon", attack: 13, defense: 10, magic: 10, speed: 14, health: 75)
character12 = Character.create(name: "Blue Mage", attack: 8, defense: 9, magic: 13, speed: 11, health: 70)

Comment.create(comment: "Don't need defense if you can one-shot everything!", user_id: user2.id, character_id: character3.id)
Comment.create(comment: "Magic owns!", user_id: user3.id, character_id: character5.id)
Comment.create(comment: "Pew Pew goes the bow", user_id: user3.id, character_id: character4.id)

#team1 = Team.create(team_name: "Test Team", user_id: user2.id, characters: [[character1], [character2], [character3]]);

#Team.create(team_name: "Test Team", user_id: user4.id, hero: [{character: character1},{character: character2}, {character: character3}])

#team1 = Team.create(team_name: "Test Team", user_id: user2.id, character_id: character1.id)
#team2 = Team.create(team_name: "Dream Team", user_id: user1.id, character_id: character4.id)
#team3 = Team.create(team_name: "One Team", user_id: user4.id, character_id: character7.id)
#team4 = Team.create(team_name: "The Real Team", user_id: user3.id, character_id: character7.id)

#TeamComment.create(comment: "Nice Team!", team_id: team1.id, user_id: user4.id)
#TeamComment.create(comment: "Not Bad!", team_id: team2.id, user_id: user3.id)
#TeamComment.create(comment: "Decent", team_id: team3.id, user_id: user2.id)
#TeamComment.create(comment: "Meh", team_id: team4.id, user_id: user1.id)


