nth-boilerplate
===============

## WHAT
- a simple boilerplate to start very fast using html5, jquery, respond, and compass. 
- uses a custom 960 grid system (media queries created for basic breakpoints).
- prepared for Mobile first

## WHY! 
Hell, everyone has their own boilerplate, right? 

## HOW
### The grid
For each media query you have to define a grid as in:
```
  $grid-columns: 8;
  $grid-gutter-width: 20px;
  $grid-total-width: 320px; 
  // this is calculated automatically:
  $grid-col-width: ( $grid-total-width / $grid-columns) - $grid-gutter-width;
```
In this example columns will measure 20px width (calculated by compass), and will have 10px space around them since we are using half the gutter for side margins. This way you dont have to care about first or last elements spanning to several rows, every block will accomodate accordingly. Total content space will be 300px although you can use 100% width as well.

### Semantics
Did I hear semantic grid system? It's pretty easy, instead of adding .col12 or .span4 classes to your markup, I prefer to set the measures/distances using a self-made compass mixin, as in: 
```
.wrapper { @include gridcol($grid-columns); } /* takes all space except the outer margins */
.box { @include gridcol(4); } /* spans 4 columns */
.menu { @include gridcol(4, 1); } /* spans 4 columns, leaving 1 column gap on the left */
.ul { @include gridcol(3, 0, 20px); } /* spans 3 columns, leaving 20px gap on the left */
```
This way my markup will be semantic since I'm not adding size-meaning to elements that will change measures with media queries. The mixin applied to `@include gridcol(4)` is:
```
@mixin gridcol($n, $colsgap:0, $offset:0) {
  $gap : $colsgap * ($grid-gutter-width + $grid-col-width);
  display: inline-block;
  float: left;
  margin-left: ( $grid-gutter-width / 2 ) + $offset + $gap;
  margin-right: ( $grid-gutter-width / 2 );
  width: ( ($grid-gutter-width + $grid-col-width) * $n ) - $grid-gutter-width;
} 
```
### Goodies
- There's a `debug` class applied to html element to show specific background colors that are ment to test boxes width/height.
- You can optionally test your layout using the grid.js that will paint columns for each media query.

## Dependencies
[Compass](http://compass-style.org/)

## Complaints?
Use the issue tracker, send pull requests, the usual polite manners. Thanx.

## License
Eat it, burn it, use it at your own risk. Or even better, dont use it! ^_^
