# Comps

current version = 1.1

27/11/2020

Comps is a set of frontend pre-build components I am building to save me some time programming.

| Component | Integrated in version |
| ------ | ------ |
| Carousel | 1.0 |
| Navbar | 1.1 |
|Form | coming soon |
| Card | coming soon |



# How To :
  - Import HTML, SCSS and JS file into your project,
  - Set SCSS and JS variables to fit your needs,
  - Insert HTML Code on your page,
  - Copy CSS and JS links on your HTML page as well,
  - JS file uses JQUERY :<http://jquery.com>
#### Common variables :
prefix : "c_"

| File | Name | Effect | Default |
| ------ | ------ | ------ | ------ |
| scss | $c_mobile-breakpoint | View Width under which carousel switches to mobile mode | 550px
| scss | $c_color-text | Color of the prev and next buttons | #000000 |
| scss | $c_color-bg-text | Background color of the inner slide texts | #000000 |
| scss | $c_color-primary | Color of the inner slide texts | #fffb0 |
| scss | @mixin c_box | predefined shadow for buttons and containers | see file |
| scss | @mixin c_hover | predefined over behaviour | see file |
| scss | $c_hover-speed | speed of over in and out transition | 1.5s |
|  |  |  |  |
| js | mobileBreakPoint | value in pixel under which carousel switches to mobile mode| 550 |
|  |  |  |  |
**'mobileBreakPoint' and '$mobile-breakpoint' have to contain the same value.**



### Carousel HOW TO :
- The carousel is made of slides. 
- Example file provides 3 slides but you can add as many as you want.
- All classes and ids have been prefixed with a "ccar_" standing for "Component Carousel" to avoid conflict.
#### Carousel variables
prefix : "ccar_"

| scss | $ccar_urlx | url of the background img of the slide number x | "./carousel-img/img-test-1.png" |
| scss | $ccar_height-carousel | height of the carousel | 20rem |
| scss | $mask-color | Color of the linear-gradient that filters the background image of the slide | #FFFFFF |
| scss | $ccar_alpha-top | start opacity of the linear-gradient | 0.75 |
| scss | $ccar_alpha-bottm | end opacity of the linear-gradient | 0.5 |
| scss | $ccar_orientation | angle of the linear-gradient | 0deg |
| ------ | ------ | ------ | ------ |
| js | numberOfSlides | number of slides in the carousel | 3 |

#### Carousel classes and ids :
| class / id | Role |
| ------ | ------ |
| ```#ccar_carousel``` | main container of the carousel |
|```.ccar_slide[x]```| Rotating class where x is the number of the slide. used in JS to display the background image in desktop mode |
|```#ccar_prev__button```| id of the div containing the previous button |
| ```.ccar_side``` | class that handles the side divs containing the prev and next buttons, not displayed in mobile mode.  |
| ```.ccar_description__slide``` | Container of description text |
| ```.ccar_title__slide``` | title of the slide is contained in an h2 tag,  |
| ```.ccar_description``` | description text of the slide |
| ```.ccar_details``` | detail text of the slide |
| ```ccar_button__container__slide``` | div containing the buttons of the slide |
| ```ccar_next__button``` | See ```ccar_prev__button``` |
It is RESPONSIVE : 
- In mobile mode slides explode into individual cards.

### NAVBAR How To :

Simple collapsable navbar.
#### Navbar variables
prefix : "cnav_"
| scss | $cnav_navbar-dropdown-height | height of collapsed navbar when openend |
| scss | $cnav_icon-rotation | Rotation angle of the collapsed menu icon | 45deg |
| scss | $cnav_animation_speed: | Speed of the dropdown menu | 0.4s |

#### NAVBAR classes and ids :
| class / id | Role |
| ------ | ------ |
| ```#cnav_navbar``` | main container of the navbar |
|```.cnav_collapsed-content```| container of the elements to collapse |
|```.cnav_toggler-content```| container of the toggler |
|```#cnav_toggler-icon```| icon menu default is a recangle |
|```.cnav_list```| menu container |
|```.cnav_item```| each link in menu container |
|```.cnav_faded```| JS controled : enables slide anim for dropdown |
|```.cnav_list-opened```| JS controled : set new max-height of navbar list |
|```.cnav_rotate```| JS controled : rotation of toggler icon |


# TODOS :

- Programmatic link between CSS and JS,
- More personnamization,
- More components
- ...

# ENJOY !