nth-boilerplate
===============

## WHAT
- a simple boilerplate to start very fast using html5, jquery, respond, and compass. 
- uses a custom 960 grid system (media queries created for basic breakpoints)

## Dependencies
Compass

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

## Complaints?
Use the issue tracker, send pull requests, the usual manners. Thanx.