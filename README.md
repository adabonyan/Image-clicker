# Cat Clicker 

## Managing changing expectations in project
- Start with one cat. When clicked, click counter is updated
- Increase to two cats. Display all two cats
- Increase to five cats. Display all five cats
- Now display only one cat at a time, as selected by the user.
- Allow for changes in cat population
- Apply Model Octopus View method.
- Consider displaying names of Images in Option list in alphabetical order for ease of reference
- Allow for any type of image. Not necessarily cat alone.

##Implementation
Each expectation was achieved using MOV. Key implementations are:
- Created data array. each image is an object of the data array. Hence more images can be added without effect on the scripts
- Created octopus. This object holds the function objects to select image, process selection for display and update image property (count).
- Created view object. It hold the function to render the selected image and counter
- User can change the name and alternative (alt) attribute of selected image.
