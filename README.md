# d3-force-boundary


<a name="forceBoundary" href="#forceBoundary">#</a> <b>forceBoundary</b>(<i>x0</i>, <i>y0</i>, <i>x1</i>, <i>x1</i>) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

[<img alt="Boundary Force" src="https://raw.githubusercontent.com/john-guerra/d3-force/master/img/boundaryBorder.gif" width="420" height="219">](http://bl.ocks.org/john-guerra/784de2b8b15590f7e568029142075ad3/b61279c87e92bfe2ab6fd56371a1301a6d2f47ad)

Creates a new positioning force that tries to keep elements inside a defined boundary defined by [*x0*](#boundary_x0),[*y0*](#boundary_y0) and [*x1*](#boundary_x1),[*y1*](#boundary_y1). This is useful when you want to guarantee that all nodes remain visible inside the visualization.

<a name="boundary_strength" href="#boundary_strength">#</a> <i>boundary</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The *strength* determines how much to increment the node’s *x*- and *y*-velocity. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current position to the closest point on the circle with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.

If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength() {
  return 0.1;
}
```

The strength accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

<a name="boundary_x0" href="#boundary_x0">#</a> <i>boundary</i>.<b>x0</b>([<i>x0</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *x0* is specified, sets the starting *x*-coordinate of the boundary as an accessor (can be a function). If *x0* is not specified, returns the current starting *x*-coordinate of the boundary.

<a name="boundary_y0" href="#boundary_y0">#</a> <i>boundary</i>.<b>y0</b>([<i>y0</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *y0* is specified, sets the starting *y*-coordinate of the boundary as an accessor (can be a function). If *y0* is not specified, returns the current starting *y*-coordinate of the boundary.

<a name="boundary_x1" href="#boundary_x1">#</a> <i>boundary</i>.<b>x1</b>([<i>x1</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *x1* is specified, sets the ending *x*-coordinate of the boundary as an accessor (can be a function). If *x* is not specified, returns the current ending *x*-coordinate of the boundary.

<a name="boundary_y1" href="#boundary_y1">#</a> <i>boundary</i>.<b>y1</b>([<i>y1</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *y1* is specified, sets the ending *y*-coordinate of the boundary as an accessor (can be a function). If *y1* is not specified, returns the current ending *y*-coordinate of the boundary.

<a name="boundary_border" href="#boundary_border">#</a> <i>boundary</i>.<b>border</b>([<i>border</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *border* is specified, the force would work only at a *border* distance from the boundary. If *border* is not specified, returns the current *border* that defaults to the middle point of the border. Setting a border is useful when you only want to apply the force on the nodes that are reaching the boundary.

Boundary Forces with a border of 100 pixels

[<img alt="Boundary Forces with Border" src="https://raw.githubusercontent.com/john-guerra/d3-force/master/img/boundaryForcesWithBorder.png" width="420" height="219">](http://bl.ocks.org/john-guerra/a7cb6691ab063726ffc1c7f29b9a6578)

Boundary Forces with default border

[<img alt="Boundary Forces without Border" src="https://raw.githubusercontent.com/john-guerra/d3-force/master/img/boundaryForcesWithoutBorder.png" width="420" height="219">](http://bl.ocks.org/john-guerra/9268633948b4e826e16c02a2e6858094)

<a name="boundary_hardBoundary" href="#boundary_hardBoundary">#</a> <i>boundary</i>.<b>hardBoundary</b>([<i>hardBoundary</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/boundary.js "Source")

If *hardBoundary* is specified and is a falsifiable value it will determine if the nodes are going to be forced to be inside the boundary. A false value will try to send the nodes inside the boundary, but won't force them. If *hardBoundary* is not specified, returns the current *hardBoundary* that defaults to true.