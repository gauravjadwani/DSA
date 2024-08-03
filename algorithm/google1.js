/*

A satellite image of the Ocean consists of green and blue pixels, representing land and waters
The ocean is large, and mostly blue; but contains islands, which are green.
Islands themselves may contain blue pixels, which are lakes.

As an example, consider an image (20 pixels wide by 8 tall) that is mostly blue(.); but contains 3 green rectangles(x):

On the left of the image there is a horizontal line of three green pixels, from coordinates (2, 2) to (2, 4). This is an island with no lakes
In the middle is a 3x3 square of green pixels (coordinates (4, 5) to (6, 7)) where the center pixel (5, 6) is water. This is an island with 1 lake
On the right is a green rectangle (coordinates (3, 11) to (5, 16)) where three internal pixels are water: (4, 12), (4, 14), and (4, 15). This forms an island with two lakes.

                       1 1 1 1 1 1 1 1 1 1 2
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
0 |.|.|x|.|.|.|.|x|x|x|.|.|x|x|x|x|x|x|x|.|.
1 |x|x|x|.|.|.|.|x|.|x|.|.|x|.|.|x|.|.|x|.|.
2 |.|.|x|x|x|.|.|.|x|.|.|.|x|.|.|x|.|.|x|x|x
3 |.|.|.|.|.|.|.|.|.|.|.|x|x|x|x|x|x|.|x|.|x
4 |.|.|.|.|.|x|x|x|.|.|.|x|.|x|.|.|x|.|x|.|x
5 |.|.|.|.|.|x|.|x|.|.|.|x|x|x|x|x|x|x|x|.|x
6 |.|.|.|.|.|x|x|x|.|.|.|.|.|.|.|.|.|.|x|x|x
7 |.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.

Write a function to return the number of lakes in the island when the user clicks on a green pixel.


to find the cordinates of the island





*/