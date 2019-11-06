# Pattern builder

### Installation & Usage

```js
 npm install react-background-pattern-generator
```


### Include the Component

```js
import React from 'react'
import {BackgroundPatternGenerator, Canvas, Controls} from 'react-background-pattern-generator'
const iconsArray = ['iconSrc']
const backgrounds = ['#FF6900','#FCB900','#7BDCB5',]

const Component = () => {
    return (
        <BackgroundPatternGenerator
    icons={iconsArray}
    backgrounds={backgrounds}
        >
        <Canvas />
        <Controls />
        </BackgroundPatternGenerator>
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
    return <BackgroundPatternGenerator onDonwload={handleDownload}>
            <Canvas />
            <Controls />
        </BackgroundPatternGenerator>
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