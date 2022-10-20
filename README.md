# Capstone Project

## Info

- YouTube link for Demo: https://youtu.be/FKfBUJ5XC8o


- This project uses Ruby version 3.1.2
- Run "rake db:seed" to seed all the Characters. If command is not ran then Users will not have any characters to comment on, rank or create teams.


- To switch Ruby version: rvm use <verison number> (Ex: rvm use 3.1.2) 
- Run the frontend on http://localhost:4000: npm start --prefix client
- Run the backend on http://localhost:3000: rails s
- To start the SQL: sudo service postgresql start 

## Description

This project contains 6 different Models (user, team, character, comment, team_comments and ranking).

The User Model contains:
  - username
  - password
  - email

The Character Model contains:
  - name
  - health
  - attack
  - defense
  - magic
  - speed 

The Comment Model contains:
  - comment
  - user_id (FK to User)
  - char_id (FK to Character)

The Team Model contains:
  - name
  - characters (array of Characters)
  - user_id (FK to User)

The Team_comments Model contains:
  - comment
  - user_id (FK to User)
  - team_id (FK to Team)

The Ranking Model contains:
  - rank (array of Characters, ranked from most favorited Character to least favorited Character)
  - user_id (FK to User)

## How to Use

As a User:
  - I need to log into my account. If I don't have an account, then I can make one.
  - Once logged in, I can:
    - create/edit/delete a comment to a Character (User can make multiple comments on a Character)
    - create/edit/delete a Team (User can create multiple teams)
    - See other user's teams and my own teams
    - create/edit/delete a comment to another User's Team (User can create multiple comment on a single Team)
    - See all User's username
    - Rank the characters and edit the ranking (Other users cannot see the ranking)
    - Log out of my account
    - Delete my account


## Stretch

- Add an admin account
- Add the ability for drap and drop on creating a Team
- Add picture to each Character
- Add Regex for email validation