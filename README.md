# react-css-injector

CSS Injector for react components to use with css-loader

#### Installation

    $ npm i react-css-injector --save
    
#### Usage

Webpack configuration:

```javascript

{
	test: /\.css$/i,
		rules: [
			{
				loader: 'css-loader',
			},
		]
},

```

Let's say you have a CSS file like this:

```css
/* foo.css */

.foo {
  color: red;
}
```

Your component:

```javascript
import styles from './foo.css';
import withCss from 'react-css-injector';
// Foo.js
class Foo extends Component {
    render(){
        return <div className={'foo'}>React CSS Injector</div>
    }
}

export default withCss(styles)(Foo);

// hooks

import styles from './foo.css';
import { useCss } from 'react-css-injector';

// Foo.js

function Foo(){
    const cssModule = useCss(styles);
    return <div className={'foo'}>React CSS Injector</div>;
}

export default Foo;

```

If you use `localIdentName` option with css-loader classNames will available on `styles.locals` 

If you want to import styles from multiple files, then import another style file and pass it as next arguement

```javascript
import styles1 from './foo1.css'
import styles2 from './foo2.css'

// in component 
const cssModule = useCss(styles1, styles2);

// withCss
withCss(styles1, styles2)(Foo);
```
For server-side-rendering

```javascript
import {CSSProvider} from 'react-css-injector';

// ...
const cssSet = new Set();

// wrap your App component with CSSProvider

<CSSProvider value={cssSet}>
<App>
</CSSProvider>

const styleString = [...cssSet].join('')

// use the `styleString` on style tag with id 'css'

```
Share your feedbacks to: cityofbinary@gmail.com
