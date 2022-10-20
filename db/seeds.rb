# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "fakeuser", password: "faker12", email:"fake@yahoo.com");
user2 = User.create(username: "not1", password: "123456", email: "test@test.com");
user3 = User.create(username: "doggy", password: "jjz3uu", email: "woofy@dog.com");
user4 = User.create(username: "cardman", password: "Awe123", email: "cardy@gmail.com");

Character.create(name: "Fighter", attack: 12, defense: 12, magic: 1, speed: 14, health: 80);
Character.create(name: "Knight", attack: 5, defense: 18, magic: 1, speed: 13, health: 85);
Character.create(name: "Barbarian", attack: 17, defense: 5, magic: 1, speed: 10, health: 100);
Character.create(name: "Archer", attack: 10, defense: 8, magic: 5, speed: 8, health: 65);
Character.create(name: "Wizard", attack: 4, defense: 7, magic: 18, speed: 7, health: 45);
Character.create(name: "Priest", attack: 4, defense: 14, magic: 12, speed: 5,  health: 60);
Character.create(name: "Rogue", attack: 13, defense: 9, magic: 5, speed: 16, health: 60);
Character.create(name: "Assassin", attack: 15, defense: 7, magic: 3, speed: 17, health: 50);
Character.create(name: "Paladin", attack: 10, defense: 15, magic: 15, speed: 12, health: 90);
Character.create(name: "Ranger", attack: 12, defense: 10, magic: 5, speed: 12, health: 50);
Character.create(name: "Dragoon", attack: 13, defense: 10, magic: 10, speed: 14, health: 75);
Character.create(name: "Blue Mage", attack: 8, defense: 9, magic: 13, speed: 11, health: 70);