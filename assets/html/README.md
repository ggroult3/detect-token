# How does it work ?

To detect a marker, I used first the HTML structure explained in [this article](https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf) written by Alexandra Etienne. The library [AR.js](https://github.com/jeromeetienne/AR.js) is based on [A-Frame](https://github.com/aframevr/aframe) library.

We have first to create a scene with a video source like a webcam :
`<a-scene embedded arjs="detectionMode: mono_and_matrix; matrixCodeType: 4x4; sourceType: webcam; debugUIEnabled: false;"></a-scene>`
Then we add the custom marker which it has to be detected with an `<a-marker>` element. In the `<a-marker>` element, we add a geometrical element with a color property to distinguish the marker from others.

A first test was realized on a [Glitch app](https://glitch.com/~luxurious-forest-bobolink) with 49 custom markers.