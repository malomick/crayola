# crayola
Crayola color library for Sass

A color library built from the list of Crayola standard crayon colors on [Wikipedia](https://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors#Standard_colors).

The easiest way to include this in your project is to import it into your existing Sass as a partial:

```Sass
@import 'crayola';
```

## Install

### Bower

1.  Install the Bower package from the command line:
  ```Shell
  bower install crayola
  ```

2.  Import the color library partial into your Sass file:
  ```Sass
  @import 'bower_components/crayola/crayola';
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
