nth-boilerplate
===============

## WHAT
- a simple boilerplate to start very fast using html5, jquery, respond, and compass. 
- uses a custom 960 grid system (media queries created for basic breakpoints).
- prepared for Mobile first

## WHY! 
Hell, everyone has their own boilerplate, right? 

## HOW
Did I hear grid system? It's pretty easy, instead of adding .col12 or .span4 classes to your markup, I prefer to set the measures/distances using a self-made compass mixin, as in: 
```
.wrapper { @include gridcol($grid-columns); } /* takes all space except the outer margins */
.box { @include gridcol(4); } /* spans 4 columns */
.menu { @include gridcol(4, 1); } /* spans 4 columns, leaving 1 column gap on the left */
.ul { @include gridcol(3, 0, 20px); } /* spans 3 columns, leaving 20px gap on the left */
```
For each media query you have to define a grid as in:
```
  $grid-columns: 8;
  $grid-gutter-width: 20px;
  $grid-total-width: 320px; 
```
In this example columns will measure 20px width, and will have 10px space around them (total content space will be 300px although you can use 100% width as well). This way you dont have to care about first or last elements spanning to several rows, every block will accomodate accordingly.

## Dependencies
[Compass](http://compass-style.org/)

## Complaints?
Use the issue tracker, send pull requests, the usual polite manners. Thanx.

## License
Eat it, burn it, use it at your own risk. Or even better, dont use it! ^_^
