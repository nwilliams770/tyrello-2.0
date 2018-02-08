# Tyrello

[Visit the live site](http://www.tyrello.co/#/)

Tyrello is a full-stack project organization web application that allows users to compartmentalize large projects into meaningful lists and tasks. As collaboration is key to any successful project, Tyrello users can share project boards amongst users resulting in universal visibility and editability. Tyrello was inspired by and modeled after Trello, with some minor UI/UX modifications. 

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
  - Active Record models for database relationships
  - SASS
  
Demos
------
### CRUD Functionality

### Sharing A Board

Future Development
------
  - Incorporate [React DnD Library](https://github.com/react-dnd/react-dnd) to allow users to easily reassign cards to new lists
  - Replace current transition implementation with [React Transition Group](https://github.com/reactjs/react-transition-group) for more       dynamic in/out transitions


Users can organize projects via boards. Upon creation, boards will default to a personal board. Board page navigation is always accessible to the user from the menu bar on the left.

![board demo](http://res.cloudinary.com/nwilliams770/image/upload/q_30/v1512156465/Screen_Shot_2017-12-01_at_10.51.48_AM_tslckk.jpg)

### Lists & Cards
Board components contain list components which contain card components. Lists stack horizontally, allowing users to intuitively scroll through lists while modularizing their projects.

![board demo](http://res.cloudinary.com/nwilliams770/image/upload/q_30/v1512156480/Screen_Shot_2017-12-01_at_10.52.28_AM_sjidpt.jpg)

Future Directions 
------
With the knowledge gained from building this project, I plan to refactor and implement additional features.

### Drag & Drop
One of the core features of Trello is the ability to drag cards to different lists, providing the user with quick flexibility. I plan to implement this feature using the ReactDnD library.

### Board Sharing
Board sharing was considered and implemented on the backend but I'd like to implement board sharing components. This will encourage collaboration while working on projects and allow users to create 'microteams' via board sharing.

[Visit the live site](http://www.tyrello.co/#/)
