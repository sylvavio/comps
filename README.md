# Comps
**Comps is a set of frontend pre-build components.**

Right now it is composed of a **carousel** and a **navbar**.
It's a work in progress.

current version = 1.2

04/12/2020


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
| scss | $c_color-text | Color of the prev and next buttons | #000000 |
| scss | $c_color-bg-text | Background color of the inner slide texts | #000000 |
| scss | $c_color-primary | Color of the inner slide texts | #fffb0 |
| scss | @mixin c_box | predefined shadow for buttons and containers | see file |
| scss | @mixin c_hover | predefined over behaviour | see file |
| scss | $c_hover-speed | speed of over in and out transition | 1.5s |
| js | mobileBreakPoint | value in pixel under which carousel switches to mobile mode| 550 |


**'mobileBreakPoint' and '$mobile-breakpoint' have to contain the same value.**



### Carousel HOW TO :
- The carousel is made of slides. 
- Example file provides 3 slides but you can add as many as you want.
- All classes and ids have been prefixed with a "ccar_" standing for "Component Carousel" to avoid conflict.
#### HTML CODE : 

```    
<div id="ccar_carousel" class="ccar_slide1">
  <div id="ccar_prev__button" class="ccar_side">&lt;</div>
  <div class="ccar_slide__container">
    <div id="ccar_slide1" class="ccar_slide ccar__active">
      <div class="ccar_header__slide">
        <p class="ccar_title__slide">#1 : slide 1</p>
      </div>
      <div class="ccar_description__container">
        <span class="ccar_description__slide">description slide 1</span>
        <span class="ccar_details__slide">details slide 1</span>
      </div>
      <div class="ccar_button__container__slide">
        <a href="#"><button>Btn 1 slide 1</button> </a>
        <a href="#"><button>Btn 2 slide 1</button> </a>
      </div>
    </div>
  <div id="ccar_next__button" class="ccar_side">&gt;</div>
</div>
```
#### Carousel variables
prefix : "ccar_"

| document | name | purpose | default value |
| ------ | ------ | ------ | ------ |
| scss | $ccar_urlx | url of the background img of the slide number x |  |
| scss | $ccar_height-carousel | height of the carousel | 20rem |
| scss | $mask-color | Color of the linear-gradient that filters the background image of the slide | #FFFFFF |
| scss | $ccar_alpha-top | start opacity of the linear-gradient | 0.75 |
| scss | $ccar_alpha-bottm | end opacity of the linear-gradient | 0.5 |
| scss | $ccar_orientation | angle of the linear-gradient | 0deg |
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

#### HTML CODE :

```
<nav class="cnav_main" role="navigation">
  <div class="cnav_collapsed-content">
    <div class="cnav_toggler-content">
      <div id="cnav_toggler-icon" class=""></div>
    </div>
    <ul class="cnav_list">
      <a href="#"><li class="cnav_item">link1</li></a>
      <a href="#"><li class="cnav_item">link2</li></a>
      <a href="#"><li class="cnav_item">link3</li></a>
      <a href="#"><li class="cnav_item">link4</li></a>
    </ul>
  </div>
</nav>
```
#### Navbar variables
prefix : "cnav_"
| document | name | purpose | default value |
| ------ | ------ | ------ | ------ |
| scss | $cnav_navbar-dropdown-height | height of collapsed navbar when openend | 16rem |
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


## TODOS :

- Programmatic link between CSS and JS,
- More personnalization,
- More components
- ...

Feel free to contact me : sylvavio@gmail.com
