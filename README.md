# Pattern builder

### Installation & Usage

```js
 npm install pattern-builder
```


### Include the Component

```js
import React from 'react'
import PatternBuilder, {Canvas, Control} from 'pattern-builder'

const iconsArray = ['iconSrc']
const backgrounds = ['#FF6900','#FCB900','#7BDCB5',]

const Component = () => {
    return (
        <PatternBuilder
            icons={iconsArray}
            backgrounds={backgrounds}
            >
                <Canvas />
                <Control />
        </PatternBuilder>
    )
}
```
The Download Button initiates the download pattern.png file by default.
Also you can get base64 string by use onDownload handler.

```js
const Component = () => {
    const handleDownload = (value) => {
        // value = data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA.....
    }
    return <PatternBuilder onDonwload={handleDownload}>
            <Canvas />
            <Control />
        </PatternBuilder>
    )
}
```

You can wrap the components in different DOM nodes. Canvas takes the 100% sizes of its parent node by default.

Some classes of basics components are:
* App wrapper - `pb__wrapper`
    * Controls wrapper - `pb__controls`
        * Icons wrapper - `pb__icons-list`
        * Export wrapper - `pb__export`
        * BackgroundPicker wrapper - `pb__backgrounds`

### Props

| Property      | Type          |
| ------------- | ------------- |
| icons:        | string[]      |
| backgrounds:  | string[]      |
| onDownload?:  | (img: string) => void   |
| imageSize?:   | number   |
| imageOffset?: | number   |