# Backgrounds

## Background Image

    background-image: url("path/file.png");

    background-color
    background-image
    background-repeat
    background-attachment
    background-position

Don's use background short-hand as you will default other properties.

## Multiple Background Images

    background-image: url("path/file-1.png"),
                      url("path/file-2.png");

* Comma separated
* Layered back to front
* Include `background-color` in the case image fails to load
* Not printable
* Not accessible

Supported file types:
* png
* gif
* svg7
* base64

# Background Clip

    background-clip: border-box | padding-box | content-box

* `content-box` = only content
* `padding-box` = clip padding
* `border-box` = included in borders

# Background Origin

    background-clip: border-box | padding-box | content-box

* `content-box` = only content
* `padding-box` = clip padding
* `border-box` = included in borders

# Background Size

    background-size: auto | contain | cover | width height

* `contains` = grows/shrinks to fit
* `cover` = grows to min size that covers height & width
* These wont break aspect ratios

* Used for creating gradient backgrounds
* Needed for high dpi images
