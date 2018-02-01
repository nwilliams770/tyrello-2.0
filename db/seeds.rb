User.destroy_all
Board.destroy_all
BoardShare.destroy_all
List.destroy_all
Card.destroy_all

user1 = User.create(username: "Sansa-Stark", email: "SansaStark@me.com", password: "password")
user2 = User.create(username: "Arya-Stark", email: "AryaStark@me.com", password: "password2")

board1 = Board.create(name: "Revenge List", author_id: user2.id, shared:true)
board2 = Board.create(name: "White Walkers 101", author_id: user1.id)
board3 = Board.create(name: "Emotional Assistance for Wights", author_id: user1.id)
board4 = Board.create(name: "Shared Testing", author_id: user1.id, shared: true)


list1 = List.create(title: "Frost-Resistant Weapons", board_id: board2.id)
list3 = List.create(title: "Undead Dragon Recipes", board_id: board2.id)
list4 = List.create(title: "Undead Dragon Recipes200", board_id: board2.id)

# list4 = List.create(title: "where the lady whitewalkers at?", board_id: board2.id)
# list5 = List.create(title: "the Night King", board_id: board2.id)
# list6 = List.create(title: "wights and how to make them work FOR YOU", board_id: board2.id)
card1= Card.create(title: "Dragon Glass", list_id: list1.id)
card2 = Card.create(title: "Valyrian Steel", list_id: list1.id)
card6 = Card.create(title: "Dragon Fire!", list_id: list1.id)

card3 = Card.create(title: "Dead Dragon Bone", list_id: list3.id)
card4 = Card.create(title: "Fermented Dragon Paté", list_id: list3.id)
card5 = Card.create(title: "Dragon Eye Schmear", list_id: list3.id)

list2 = List.create(title: "Those Who Have Been Dealt With", board_id: board1.id)
list4 = List.create(title: "Those Needing A Smackdown", board_id: board1.id)

card7 = Card.create(title: "Joffrey", list_id: list2.id)
card8 = Card.create(title: "Meryn Trant", list_id: list2.id)
card9 = Card.create(title: "Walder Frey", list_id: list2.id)
card10 = Card.create(title: "Cersei", list_id: list4.id)
card11 = Card.create(title: "Ilyn Payne", list_id: list4.id)
card12 = Card.create(title: "The Red Woman", list_id: list4.id)

BoardShare.create(board_id: board1.id, contributor_id: user1.id)