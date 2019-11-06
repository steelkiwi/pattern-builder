/* eslint-disable */
import React, { createContext, createRef, Component, useContext, useState, useEffect } from 'react';
import { Image, Group, Stage, Layer, Rect } from 'react-konva';
import useImage from 'use-image';
import { TwitterPicker, AlphaPicker } from 'react-color';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var DEFAULT_BACKGROUNDS_PALETTE = [
    '#FF6900',
    '#FCB900',
    '#7BDCB5',
    '#00D084',
    '#8ED1FC',
    '#0693E3',
    '#ABB8C3',
    '#EB144C',
    '#F78DA7',
    '#9900EF',
    '#000000'
];

var initialState = {
    icons: [],
    backgrounds: DEFAULT_BACKGROUNDS_PALETTE
};
// TODO: Create AppContext interface
var AppContext = createContext(initialState);

var getRGBAString = function (color) {
    var r = color.r, g = color.g, b = color.b, _a = color.a, a = _a === void 0 ? 1 : _a;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
};
// TODO: Add SSR Support
var downloadURI = function (uri, name) {
    try {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    catch (err) {
        throw new Error('React-background-pattern-generator: We cannot support SSR yet');
    }
};
var handleCursorOverIcon = function () {
    document.body.style.cursor = 'move';
};
var handleCursorOutIcon = function () {
    document.body.style.cursor = 'default';
};

var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            patternIcons: [],
            selectedBackground: 'green',
            imageSize: _this.props.imageSize || 55
        };
        _this.canvasRef = createRef();
        _this.addPatternIcon = function (icon) {
            _this.setState(function (state) { return (__assign(__assign({}, state), { patternIcons: __spreadArrays(state.patternIcons, [icon]) })); });
        };
        _this.changeBackground = function (background) {
            var rgb = background.rgb;
            _this.setState({ selectedBackground: getRGBAString(rgb) });
        };
        _this.changeImageSize = function (value) {
            _this.setState(function (state) { return (__assign(__assign({}, state), { imageSize: value })); });
        };
        return _this;
    }
    App.prototype.render = function () {
        var _a = this.props, onDownload = _a.onDownload, icons = _a.icons, backgrounds = _a.backgrounds, imageOffset = _a.imageOffset, children = _a.children;
        return (React.createElement(AppContext.Provider, { value: {
                state: this.state,
                icons: icons,
                backgrounds: backgrounds,
                imageOffset: imageOffset,
                canvasRef: this.canvasRef,
                handlers: {
                    addPatternIcon: this.addPatternIcon,
                    changeBackground: this.changeBackground,
                    changeImageSize: this.changeImageSize,
                },
                callbacks: {
                    onDownload: onDownload
                }
            } },
            React.createElement("div", { className: "pb__wrapper" }, children)));
    };
    return App;
}(Component));

var Img = function (props) {
    var image = useImage(props.link, 'Anonymous')[0];
    return (React.createElement(Image, __assign({}, props, { image: image })));
};

var PatternGroup = function (_a) {
    var image = _a.image, index = _a.index, imageSize = _a.imageSize, imageOffset = _a.imageOffset;
    var elementsInGrid = 20;
    var imagesAmount = 150;
    var getImagePosition = function (index) {
        return {
            x: index % elementsInGrid * imageOffset,
            y: Math.floor(index / elementsInGrid) * imageOffset
        };
    };
    var getImagesGrid = function () {
        var arr = [];
        for (var i = 0, l = imagesAmount; i < l; i++) {
            var _a = getImagePosition(i), x = _a.x, y = _a.y;
            arr.push(React.createElement(Img, { width: imageSize, height: imageSize, onMouseOver: handleCursorOverIcon, onMouseOut: handleCursorOutIcon, x: x, y: y, link: image }));
        }
        return arr;
    };
    var imagesGrid = getImagesGrid();
    return (React.createElement(Group, { y: index * imageSize, draggable: true }, imagesGrid));
};

var Canvas = function () {
    var _a = useContext(AppContext), _b = _a.state, selectedBackground = _b.selectedBackground, patternIcons = _b.patternIcons, imageSize = _b.imageSize, imageOffset = _a.imageOffset, canvasRef = _a.canvasRef;
    var _c = useState({
        canvasWidth: 0,
        canvasHeight: 0,
    }), canvasSizes = _c[0], setCanvasSizes = _c[1];
    var canvasWidth = canvasSizes.canvasWidth, canvasHeight = canvasSizes.canvasHeight;
    useEffect(function () {
        // TODO: Get sizes with another algorithm
        var canvasWrapper = canvasRef.current.content.parentNode.parentNode;
        var canvasWidth = canvasWrapper.offsetWidth;
        var canvasHeight = canvasWrapper.offsetHeight;
        setCanvasSizes({
            canvasWidth: canvasWidth,
            canvasHeight: canvasHeight,
        });
    }, [canvasRef]);
    return (React.createElement(Stage, { ref: canvasRef, width: canvasWidth, height: canvasHeight },
        React.createElement(Layer, null,
            React.createElement(Rect, { width: canvasWidth, height: canvasHeight, fill: selectedBackground }),
            patternIcons.map(function (item, index) { return React.createElement(PatternGroup, { imageSize: imageSize, imageOffset: imageOffset || imageSize, image: item, key: index, index: index }); }))));
};

var IconsList = function (_a) {
    var icons = _a.icons, onIconClick = _a.onIconClick;
    return (React.createElement("ul", { className: "pb__icons-list" }, icons.map(function (icon, index) {
        var handleClick = function () {
            onIconClick(icon);
        };
        return (React.createElement("li", { key: icon, className: "pb__icons-item" },
            React.createElement("img", { className: "pb__icons-image", onClick: handleClick, src: icon, alt: "icon-" + index })));
    })));
};

var BackgroundPicker = function (_a) {
    var backgrounds = _a.backgrounds, onChange = _a.onChange, selectedBackground = _a.selectedBackground;
    return (React.createElement("div", { className: "pb__backgrounds" },
        React.createElement(TwitterPicker, { color: selectedBackground, colors: backgrounds, onChangeComplete: onChange }),
        React.createElement(AlphaPicker, { onChange: onChange, color: selectedBackground })));
};

var Export = function (_a) {
    var canvasRef = _a.canvasRef, onDownload = _a.onDownload, canvasSize = _a.canvasSize;
    var canvas = canvasRef.current;
    var _b = useState(__assign({}, canvasSize)), imageSize = _b[0], setImageSize = _b[1];
    var width = imageSize.width, height = imageSize.height;
    useEffect(function () {
        setImageSize(__assign({}, canvasSize));
    }, [canvasSize]);
    var downloadImage = function () {
        var dataURL = canvas.getStage().toDataURL({
            x: 0,
            y: 0,
            width: width,
            height: height
        });
        if (onDownload) {
            onDownload(dataURL);
        }
        else {
            downloadURI(dataURL, 'pattern.png');
        }
    };
    var handleSizeChange = function (_a) {
        var _b;
        var _c = _a.target, name = _c.name, value = _c.value;
        setImageSize(__assign(__assign({}, imageSize), (_b = {}, _b[name] = Number(value), _b)));
    };
    return (React.createElement("div", { className: "pb__export" },
        React.createElement("input", { type: "number", value: width, name: "width", onChange: handleSizeChange }),
        React.createElement("input", { type: "number", name: "height", value: height, onChange: handleSizeChange }),
        React.createElement("button", { type: "button", onClick: downloadImage }, "Download")));
};

var ImagesSize = function (_a) {
    var imageSize = _a.imageSize, changeImageSize = _a.changeImageSize;
    var setValueHandler = function (e) {
        changeImageSize(Number(e.target.value));
    };
    return (React.createElement("div", null,
        React.createElement("input", { value: imageSize, onChange: setValueHandler, type: "number" })));
};

var Controls = function () {
    var _a = useState({
        width: 0,
        height: 0,
    }), canvasSize = _a[0], setCanvasSize = _a[1];
    var _b = React.useContext(AppContext), _c = _b.state, selectedBackground = _c.selectedBackground, imageSize = _c.imageSize, icons = _b.icons, backgrounds = _b.backgrounds, canvasRef = _b.canvasRef, onDownload = _b.callbacks.onDownload, _d = _b.handlers, addPatternIcon = _d.addPatternIcon, changeBackground = _d.changeBackground, changeImageSize = _d.changeImageSize;
    // TODO: Make normal canvasRef interface
    var handleCanvasResize = function (canvasRef) {
        setTimeout(function () {
            var _a = canvasRef.current.attrs, width = _a.width, height = _a.height;
            setCanvasSize({
                width: width,
                height: height
            });
        }, 0);
    };
    useEffect(function () {
        handleCanvasResize(canvasRef);
    }, [canvasRef]);
    return (React.createElement("div", { className: "pb__controls" },
        React.createElement(IconsList, { onIconClick: addPatternIcon, icons: icons }),
        React.createElement(BackgroundPicker, { selectedBackground: selectedBackground, onChange: changeBackground, backgrounds: backgrounds }),
        canvasRef && React.createElement(Export, { canvasSize: canvasSize, canvasRef: canvasRef, onDownload: onDownload }),
        React.createElement(ImagesSize, { imageSize: imageSize, changeImageSize: changeImageSize })));
};

export { App as BackgroundPatternGenerator, Canvas, Controls };
