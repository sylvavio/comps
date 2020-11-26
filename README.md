# myComponents

myComponents is a set of frontend pre-build components I am building to save me some time programming.

| Component | Version |
| ------ | ------ |
| Carousel | 1.0 |
| Navbar | coming soon|
|Form | coming soon |
| Card | coming soon |

# How To :
  - Import HTML, SCSS and JS file into your project,
  - Set SCSS and JS variables to fit your needs,
  - Insert HTML Code on your page,
  - Copy CSS and JS links on your HTML page as well,
  - JS file uses JQUERY :<http://jquery.com>

### Carousel HOW TO :

- The carousel is made of slides. 
- Example file provides 3 slides but you can add as many as you want.
- All classes and ids have been prefixed with a "cc_" standing for "Component Carousel" to avoid conflict.

#### Carousel classes and ids :

| class / id | Role |
| ------ | ------ | ------ | ------ |
| ```#c_carousel``` | main container of the carousel |
|```.c_slide[x]```| Rotating class where x is the number of the slide. used in JS to display the background image in desktop mode |
|```#c_prev__button```| id of the div containing the previous button |
| ```.c_side``` | class that handles the side divs containing the prev and next buttons, not displayed in mobile mode.  |
| ```.c_description__slide``` | Container of description text |
| ```.c_title__slide``` | title of the slide is contained in an h2 tag,  |
| ```.c_description``` | description text of the slide |
| ```.c_details``` | detail text of the slide |
| ```c_button__container__slide``` | div containing the buttons of the slide |
| ```c_next__button``` | See ```c_prev__button``` |


It is RESPONSIVE : 
- In mobile mode slides explode into individual cards.

#### Carousel variables :

| File | Name | Effect | Default |
| ------ | ------ | ------ | ------ |
| carousel.scss | $urlx | url of the background img of the slide number x | "./carousel-img/img-test-1.png" |
| carousel.scss | $mobile-breakpoint | View Width under which carousel switches to mobile mode | 550px
| carousel.scss | $height-carousel | height of the carousel | 20rem |
| carousel.scss | $color-prev-next | Color of the prev and next buttons | #000000 |
| carousel.scss | $color-slide-text | Color of the inner slide texts | #fffb0 |
| carousel.scss | $color-bg-text | Background color of the inner slide texts | #000000 |
| carousel.scss | $mask-color | Color of the linear-gradient that filters the background image of the slide | #FFFFFF |
| carousel.scss | $alpha-top | start opacity of the linear-gradient | 0.75 |
| carousel.scss | $alpha-bottm | end opacity of the linear-gradient | 0.5 |
| carousel.scss | $orientation | angle of the linear-gradient | 0deg |
| carousel.scss | @mixin box | predefined shadow for buttons and containers | see file |
| carousel.js | numberOfSlides | number of slides in the carousel | 3 |
| carousel.scss | mobileBreakPoint | value in pixel under which carousel switches to mobile mode| 550 |

**'mobileBreakPoint' and '$mobile-breakpoint' have to contain the same value.**

# TODOS :

- Programmatic link between CSS and JS,
- More personnamization,
- More components
- ...

# ENJOY !