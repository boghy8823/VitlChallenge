
**Vitl Challenge**

URL: https://boghy8823.github.io/VitlChallenge/


**Introduction**
  This is a basic implementation of the products and shopping basket screen.
  
  **Technologies used**
I used React, Redux, Styled components. Besides that I did not import any other libraries like Bootstrap. I opted to create my own generic elements like Typography, Button, etc.
 
**Available scripts**

To run the project:

`yarn install` 

To start the FE: `yarn start`

To run tests: `yarn test`

**Tests**

Implemented unit tests for each UI and parent components using JEST framework

**Folder Structure&mentions**

Normally, I would define routes for Home and different methods screen as well but for this demo I kept the Home  page as the default to access it easily. 
Inside `Pages` folder I have defined the parent component for this screen and inisde it there is another `Components` folder which holds different components like Shopping Basket. 

I also opted for having reusable components where applicable and ability to toggle between these  edit/view modes using a prop called `editable`. I avoided code repetition that way since some screens were similar. 

There are some improvements that I am aware and also some things to refactor. For example, I would like to add notifications component which could be used at different steps when user adds/removes items from the basket and display useful information about the nutritionatal limits reached. 

Also, I tried to follow the Vitl brand styles but designing in the browser is not ideal, so while the app looks somewhat ok it could be improved by a large margin with a proper design spec.

