# Transforms

You apply both 2-D and 3-D transforms to an element by using the transform
property, which contains a list of transform functions.

## 2D Transforms

    translate(length[,length])
    translateX(length)
    translateY(length)
    scale(number[,number]) (one value = proportional)
    scaleX(number)
    scaleY(number)
    rotate(angle)
    rotateX(angle) (left/right)
    rotateY(angle) (top/bottom)
    skew(angle[, angle]) (one value = skew x)
    skewX(angle) (keeps top & bottom parallel, skews left/right)
    skewY(angle) (keeps left & right parallel, skews top/bottom)
    matrix(num, num, num, num, num, num)

When you want multiple transforms, space separate them:

    background-image:
      translate(10px, 10px) skew (5px);

* Vendor prefix transforms
* Transforms create a new stacking context (text will flow over depending
  on z-index)

## Transform Origin

Specifies x and y position of origin, relative to transform object.

* Keyword positions: `left`, `right`, `bottom`, `top`, `center`
* Length values
* Percentage values
* Default is 50% 50% (center center)

## 3D Transforms

During animation, will use hardware acceleration.

    translate3d(length, length, length)
    translateZ(length)
    scale3d(number, number, number)
    scaleZ(number)
    rotate3d(number, number, number, angle)
    rotateZ(angle)
    matrix3d(number{15})
    perspective(number) (larger = further away)

## Backface Visibility

The backface-visibility property indicates whether the "back face"
(reverse side) of a transformed element is visible when facing the viewer.
With an element that is not transformed, the front side of the element faces
the viewer.

Values:
*  `visible`
*  `hidden`

## IE10 Stuff



Remember that order matters! Transform functions are applied in the order they
are listed within the transform property.

## Perspective

    perspective(<length>)

The perspective function changes the perspective through which an element is
viewed, giving an illusion of depth. As the value supplied to the perspective
function increases, the further away from the viewer the element will appear.
The value must be greater than 0 and is given in pixels.

## 3D Matrix

    matrix3d(<number>{16})

The matrix3d function specifies a 3-D transformation as a 4×4 homogeneous
matrix of sixteen values in column-major order. All other transformation
functions are based on the matrix3d function.

## 3D Translate

    translate3d(<x-value>, <y-value>, <z-value>)

The translate3D function specifies a 3-D translation by the vector [tx,ty,tz],
where tx, ty, and tz are the first, second, and third translation-value
parameters respectively.  

## Z Direction Translate

    translateZ(<z-value>)

The translateZ function specifies a translation by a given amount in the
z-direction. Percentage values are not allowed.


## 3D Scale

    scale3d(<number>, <number>, <number>)

The scale3d function specifies a 3-D scale operation by the [sx,sy,sz] scaling
vector described by the three parameters.

## Z Vector Scale

    scaleZ(<number>)

The scaleZ function specifies a scale operation using the [1,1,sz] scaling
vector, where sz is given as the parameter. The effect of the scaleZ function
is most evident when used in combination with functions such as the rotate and
perspective functions

## 3D Rotate

    rotate3d(<number>, <number>, <number>, <angle>)

The rotate3d function specifies a clockwise 3-D rotation. The element rotates
by the angle specified in the last parameter, and about the [x,y,z] direction
vector described by the first three parameters. If the direction vector is not
of unit length, it will be normalized. A direction vector that cannot be
normalized, such as [0, 0, 0], results in no rotation.

## Z Direction Rotate

    rotateZ(<angle>)

The rotateZ function specifies a clockwise rotation by the given angle about
the z-axis.


## The `transform-origin` property

The transform-origin property establishes the origin of transformation for
an element.

For instance, if you specified the rotate3d function in the transform property,
this property would define the point around which the element would rotate.
The default value of this property is "50% 50% 0px" (the middle of the element).

## The `transform-style` property

Defines how nested elements are rendered in 3-D space. If you set this property
to flat for an element, all of its child elements are rendered flattened into
the 2-D plane of the element. Rotating the element about the x- or y-axes will
cause children positioned at positive or negative z-positions to appear on the
element's plane, rather than in front of or behind it.
