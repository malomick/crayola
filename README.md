# crayola
Crayola color library for Sass

![Crayola crayons](http://hype.my/wp-content/uploads/2015/01/Crayola.jpg)

A color library built from the list of Crayola standard crayon colors on [Wikipedia](https://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors#Standard_colors).

The easiest way to include this in your project is to copy ```_crayola.scss``` into your styles directory and import it into your existing Sass as a partial:

```Sass
@import 'crayola';
```

I don't foresee the list being expanded very often, so you won't miss out on much if you just download the one file and put it wherever you want in your project.

### Naming convention

All of the variable names were derived from the names in the Wikipedia list using a Regex find and replace.  Feel free to browse the source for the variable names, or find the color you want on the Wikipedia list and use the following formula:

1.  Delete all apostrophes and parens;
2.  Convert all roman numerals to numbers (for example, III becomes 3);
3.  Replace all spaces with dashes;
4.  Make everything lowercase.

Now throw a dollar sign up front, and you're off to the races.

For example, Robin's Egg Blue becomes ```$robins-egg-blue```, and Violet (II) becomes ```$violet-2```.


## Install

### Bower

1.  Install the Bower package from the command line:
  ```Shell
  bower install crayola
  ```

2.  Import the color library partial into your Sass file:
  ```Sass
  @import '/bower_components/crayola/crayola';
  ```



### Meteor

1.  Add the package from your Meteor project root directory:
  ```Shell
  meteor add mickm:crayola
  ```

2.  Add ```scss.json``` to your root directory:
  ```JSON
  {
    "includePaths": [
      ".meteor/local/build/programs/server/assets/packages/mickm_crayola"
    ]
  }
  ```

3.  Import the color library partial into your Sass file:
  ```Sass
  @import 'crayola';
  ```
