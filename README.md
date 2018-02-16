# Tyrello

[Visit the live site](http://www.tyrello.co/#/)

Tyrello is a full-stack project organization web application that allows users to compartmentalize large projects into meaningful lists and tasks. User to user collaboration is the crux to any successful project and following that ideology, Tyrello users can share project boards amongst users resulting in universal visibility and editability. Tyrello was inspired by and modeled after Trello.

### Features

 - Organize projects through boards
 - Breakdown daunting board projects through lists and cards
 - Search for users to collaborate on your boards
 - CRUD functionality on boards, lists, and cards
 - Navigate through your boards with real-time updated dropdown navigation
 - Review and remove users from your boards in real-time with members dropdown

### Technologies
  - Ruby on Rails backend
  - React/Redux frontend
  - PostgreSQL database
  - [React DnD](https://github.com/react-dnd/react-dnd) (React Drag and Drop)
  - SASS
  
Demos
------
### Board Flow
All relevant lists and cards are displayed on the board show page. Adds, edits, and deletions to either lists, cards, or the board itself, are sent to the database and updated on the frontend in real time. 

Users also have the ability to bring collaborators onto their boards. This is achieved via a simple dropdown and live search interface. The database query is updated as the user types in the search parameters and adding collaborators to your boards is one-click away.

![BoardShare](https://github.com/nwilliams770/tyrello-2.0/blob/master/app/assets/images/BoardShare.gif)

### Drag and Drop
Integrating drag and drop functionality into Card and List components permits the user flexibility for card re-assignment. When a card has been successfully dropped to a new list, the database is updated to maintain the necessary Active Record associations. To prevent unnecessary calls to the backend, an API call is made only when a card is dropped into a new list.

![DragAndDrop](https://github.com/nwilliams770/tyrello-2.0/blob/master/app/assets/images/DragAndDrop.gif)


Select Code Snippets
------
**`BoardShare`**

To enable users to review all collaborators as well as ownership of a specific board, these database queries are handled by the `BoardShare` class. 

When a board is shared, the action is stored in the database as a `BoardShare`; effectively joining the board with the newly added colalborator. This relationship is leveraged when users review board collaborators.

```ruby
  def index
    @board = Board.find(params[:id])
    @owner = @board.user
    @shares = BoardShare.where(board_id: params[:id]).all
    @collaborators = [@owner]
    if !(@shares[0].nil?)
      @shares.each {|board_share| @collaborators << board_share.user }
    else
      @shares = []
    end
    render :index
  end
```

Future Development
------
  - Improve upon drag and drop functionality to allow users to reorder cards and lists
  - Replace current transition implementation with [React Transition Group](https://github.com/reactjs/react-transition-group) for more       dynamic in/out transitions

[Visit the live site](http://www.tyrello.co/#/)
