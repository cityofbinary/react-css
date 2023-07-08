# react-css-injector

react-css-injector is a Javascript library used for injecting CSS styles into React components with the use of css-loader.

Now this package contains loader to inject global css styles.

## Installation

    npm i react-css-injector --save

## Usage

Webpack configuration:

You have to name your global css file as it ends with `.global.css`.
Then add `react-css-injector/loader` for global css files.
Then inlcude exclude option in css-loader configuration as shown below.
Thus, it will be excluded from parsing by css-loader.

```javascript

{
    test: /\.css$/i,
    exclude: /\.global.css$/i,
    rules: [
        {
            loader: 'css-loader'
        }
    ]
},
{
    test: /\.global.css$/i,
    rules: [
        {
            loader: 'react-css-injector/loader'
        }
    ]
},

```

Let's say you have a CSS file like this:

```css
/*foo.css*/

.foo {
  color: red;
}
```

Then your global css file:

```css
/*styles.global.css*/

.body {
    color: red;
}
```

Your component:

```javascript
import styles from './foo.css';
import withCss from 'react-css-injector';
import './styles.global.css';

// just by importing this it will be available globally.
// No changes will be applied to your classnames or tags It will be injected as it is in the file.

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

```jsx
import { CSSProvider } from 'react-css-injector';

// ...
const cssSet = new Set();

// wrap your App component with CSSProvider
<CSSProvider value={cssSet}>
<App>
</CSSProvider>

const styleString = [...cssSet].join('')

// use the `styleString` in style tag with id 'css'

```

Share your feedbacks to: <cityofbinary@gmail.com>
