# Pelican Boilerplate Theme README

This is a skeleton boilerplate for pelican theme development. Is is
built on Gulp and includes Bower for rapid application development.

# Installing
I suggest forking this repo and checking out your fork so you can
hack away on your custom theme.

# Usage
Write your SASS files under `sass/` and compile them with
`gulp sass` (or `gulp sass:watch`) This compiles into `theme/css/`

Add your bower dependent paths to the `sassOpts` array in 
`Gulpfile.js` so the sass compiler knows where to pull other files
from. 

In your 'pelicanconf.py' add `THEME = boilerplate-theme/theme`

# License
Relased under the [MIT](LICENSE) license. 