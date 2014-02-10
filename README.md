Capital Letter
==============

A simple, lightweight jQuery plugin for creating **awesome** Capital Letters

[Working exaple here] (http://arcanio.com.ar/share/capital/sample/index.html)

### Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/capital.min.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.


### Usage

```javascript
	// Apply the pluging to any paragraph in the page
	$('p').CapitalLetter();

	// Apply it to all <p> inside <article>
	$('article p').CapitalLetter();
```

### Customization

You can pass in any CSS you like to be applied to the capital letter

```javascript
	$('p').CapitalLetter({color: "#02AD08"});
```

### Authors

[Laureano Arcanio] (https://github.com/laureanoarcanio)
