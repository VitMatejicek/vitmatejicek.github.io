(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-core-modules-landing-landing-module"],{

/***/ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-gridster2/fesm5/angular-gridster2.js ***!
  \*******************************************************************/
/*! exports provided: GridsterComponent, GridsterItemComponent, GridsterItemComponentInterface, GridsterComponentInterface, GridType, DisplayGrid, CompactType, GridsterConfigService, GridsterModule, GridsterPush, GridsterPushResize, GridsterSwap, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterComponent", function() { return GridsterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterItemComponent", function() { return GridsterItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterItemComponentInterface", function() { return GridsterItemComponentInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterComponentInterface", function() { return GridsterComponentInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridType", function() { return GridType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayGrid", function() { return DisplayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactType", function() { return CompactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterConfigService", function() { return GridsterConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterModule", function() { return GridsterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterPush", function() { return GridsterPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterPushResize", function() { return GridsterPushResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterSwap", function() { return GridsterSwap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridsterPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GridType = {
    Fit: 'fit',
    ScrollVertical: 'scrollVertical',
    ScrollHorizontal: 'scrollHorizontal',
    Fixed: 'fixed',
    VerticalFixed: 'verticalFixed',
    HorizontalFixed: 'horizontalFixed',
};
/** @enum {string} */
var DisplayGrid = {
    Always: 'always',
    OnDragAndResize: 'onDrag&Resize',
    None: 'none',
};
/** @enum {string} */
var CompactType = {
    None: 'none',
    CompactUp: 'compactUp',
    CompactLeft: 'compactLeft',
    CompactUpAndLeft: 'compactUp&Left',
    CompactLeftAndUp: 'compactLeft&Up',
    CompactRight: 'compactRight',
    CompactUpAndRight: 'compactUp&Right',
    CompactRightAndUp: 'compactRight&Up',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GridsterConfigService = {
    gridType: GridType.Fit,
    // 'fit' will fit the items in the container without scroll;
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    // fixed col width for gridType: 'fixed'
    fixedRowHeight: 250,
    // fixed row height for gridType: 'fixed'
    keepFixedHeightInMobile: false,
    // keep the height from fixed gridType in mobile layout
    keepFixedWidthInMobile: false,
    // keep the width from fixed gridType in mobile layout
    setGridSize: false,
    // sets grid size depending on content
    compactType: CompactType.None,
    // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
    mobileBreakpoint: 640,
    // if the screen is not wider that this, remove the grid layout and stack the items
    minCols: 1,
    // minimum amount of columns in the grid
    maxCols: 100,
    // maximum amount of columns in the grid
    minRows: 1,
    // minimum amount of rows in the grid
    maxRows: 100,
    // maximum amount of rows in the grid
    defaultItemCols: 1,
    // default width of an item in columns
    defaultItemRows: 1,
    // default height of an item in rows
    maxItemCols: 50,
    // max item number of cols
    maxItemRows: 50,
    // max item number of rows
    minItemCols: 1,
    // min item number of columns
    minItemRows: 1,
    // min item number of rows
    minItemArea: 1,
    // min item area: cols * rows
    maxItemArea: 2500,
    // max item area: cols * rows
    margin: 10,
    // margin between grid items
    outerMargin: true,
    // if margins will apply to the sides of the container
    outerMarginTop: null,
    // override outer margin for grid
    outerMarginRight: null,
    // override outer margin for grid
    outerMarginBottom: null,
    // override outer margin for grid
    outerMarginLeft: null,
    // override outer margin for grid
    useTransformPositioning: true,
    // toggle between transform or top/left positioning of items
    scrollSensitivity: 10,
    // margin of the dashboard where to start scrolling
    scrollSpeed: 20,
    // how much to scroll each mouse move when in the scrollSensitivity zone
    initCallback: undefined,
    // callback to call after grid has initialized. Arguments: gridsterComponent
    destroyCallback: undefined,
    // callback to call after grid has destroyed. Arguments: gridsterComponent
    gridSizeChangedCallback: undefined,
    // callback to call after grid has changed size. Arguments: gridsterComponent
    itemChangeCallback: undefined,
    // callback to call for each item when is changes x, y, rows, cols.
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // callback to call for each item when width/height changes.
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemValidateCallback: undefined,
    // callback to call to validate item position/size. Return true if valid.
    // Arguments: gridsterItem
    enableEmptyCellClick: false,
    // enable empty cell click events
    enableEmptyCellContextMenu: false,
    // enable empty cell context menu (right click) events
    enableEmptyCellDrop: false,
    // enable empty cell drop events
    enableEmptyCellDrag: false,
    // enable empty cell drag events
    emptyCellClickCallback: undefined,
    // empty cell click callback
    emptyCellContextMenuCallback: undefined,
    // empty cell context menu (right click) callback
    emptyCellDropCallback: undefined,
    // empty cell drag drop callback. HTML5 Drag & Drop
    emptyCellDragCallback: undefined,
    // empty cell drag and create item like excel cell selection
    emptyCellDragMaxCols: 50,
    // limit empty cell drag max cols
    emptyCellDragMaxRows: 50,
    // limit empty cell drag max rows
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    ignoreMarginInRow: false,
    // ignore the gap between rows for items which span multiple rows (see #162, #224)
    draggable: {
        delayStart: 0,
        // milliseconds to delay the start of drag, useful for touch interaction
        enabled: false,
        // enable/disable draggable items
        ignoreContentClass: 'gridster-item-content',
        // default content class to ignore the drag event from
        ignoreContent: false,
        // if true drag will start only from elements from `dragHandleClass`
        dragHandleClass: 'drag-handler',
        // drag event only from this class. If `ignoreContent` is true.
        stop: undefined,
        // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
        start: undefined,
        // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
        dropOverItems: false,
        // enable drop items on top other item
        dropOverItemsCallback: undefined // callback on drop over another item
        // Arguments: source, target, gridComponent
    },
    resizable: {
        delayStart: 0,
        // milliseconds to delay the start of resize, useful for touch interaction
        enabled: false,
        // enable/disable resizable items
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        // resizable edges of an item
        stop: undefined,
        // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
    },
    swap: true,
    // allow items to switch position if drop on top of another
    pushItems: false,
    // push items when resizing and dragging
    disablePushOnDrag: false,
    // disable push on drag
    disablePushOnResize: false,
    // disable push on resize
    pushDirections: { north: true, east: true, south: true, west: true },
    // control the directions items are pushed
    pushResizeItems: false,
    // on resize of item will shrink adjacent items
    displayGrid: DisplayGrid.OnDragAndResize,
    // display background grid of rows and columns
    disableWindowResize: false,
    // disable the window on resize listener. This will stop grid to recalculate on window resize.
    disableWarnings: false,
    // disable console log warnings about misplacement of grid items
    scrollToNewItems: false,
    // scroll to new items placed in a scrollable view
    disableAutoPositionOnConflict: false // disable auto-position of items on conflict state
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterUtils = /** @class */ (function () {
    function GridsterUtils() {
    }
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} properties
     * @return {?}
     */
    GridsterUtils.merge = /**
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} properties
     * @return {?}
     */
    function (obj1, obj2, properties) {
        for (var p in obj2) {
            if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
                if (typeof obj2[p] === 'object') {
                    obj1[p] = GridsterUtils.merge(obj1[p], obj2[p], properties[p]);
                }
                else {
                    obj1[p] = obj2[p];
                }
            }
        }
        return obj1;
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    GridsterUtils.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        /** @type {?} */
        var timeout;
        return function () {
            /** @type {?} */
            var context = this;
            /** @type {?} */
            var args = arguments;
            /** @type {?} */
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkTouchEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.clientX === undefined && e.touches) {
            if (e.touches && e.touches.length) {
                e.clientX = e.touches[0].clientX;
                e.clientY = e.touches[0].clientY;
            }
            else if (e.changedTouches && e.changedTouches.length) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
            }
        }
    };
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkContentClassForEvent = /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    function (gridster, e) {
        if (gridster.$options.draggable.ignoreContent) {
            if (!GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass)) {
                return true;
            }
        }
        else {
            if (GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkContentClassForEmptyCellClickEvent = /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    function (gridster, e) {
        return GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)
            || GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass);
    };
    /**
     * @param {?} target
     * @param {?} current
     * @param {?} contentClass
     * @return {?}
     */
    GridsterUtils.checkContentClass = /**
     * @param {?} target
     * @param {?} current
     * @param {?} contentClass
     * @return {?}
     */
    function (target, current, contentClass) {
        if (!target || target === current) {
            return false;
        }
        if (target.hasAttribute('class') && target.getAttribute('class').split(' ').indexOf(contentClass) > -1) {
            return true;
        }
        else {
            return GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
        }
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    GridsterUtils.compareItems = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a.y > b.y) {
            return -1;
        }
        else if (a.y < b.y) {
            return 1;
        }
        else if (a.x > b.x) {
            return -1;
        }
        else {
            return 1;
        }
    };
    GridsterUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return GridsterUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
GridsterComponentInterface = /** @class */ (function () {
    function GridsterComponentInterface() {
    }
    return GridsterComponentInterface;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterEmptyCell = /** @class */ (function () {
    function GridsterEmptyCell(gridster) {
        this.gridster = gridster;
    }
    /**
     * @return {?}
     */
    GridsterEmptyCell.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.initialItem;
        delete this.gridster.movingItem;
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle();
        }
        delete this.gridster;
        if (this.emptyCellExit) {
            this.emptyCellExit();
            this.emptyCellExit = null;
        }
    };
    /**
     * @return {?}
     */
    GridsterEmptyCell.prototype.updateOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.gridster.$options.enableEmptyCellClick && !this.emptyCellClick && this.gridster.options.emptyCellClickCallback) {
            this.emptyCellClick = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb.bind(this));
            this.emptyCellClickTouch = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellClick && this.emptyCellClick && this.emptyCellClickTouch) {
            this.emptyCellClick();
            this.emptyCellClickTouch();
            this.emptyCellClick = null;
            this.emptyCellClickTouch = null;
        }
        if (this.gridster.$options.enableEmptyCellContextMenu && !this.emptyCellContextMenu &&
            this.gridster.options.emptyCellContextMenuCallback) {
            this.emptyCellContextMenu = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellContextMenu && this.emptyCellContextMenu) {
            this.emptyCellContextMenu();
            this.emptyCellContextMenu = null;
        }
        if (this.gridster.$options.enableEmptyCellDrop && !this.emptyCellDrop && this.gridster.options.emptyCellDropCallback) {
            this.emptyCellDrop = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop.bind(this));
            this.gridster.zone.runOutsideAngular(function () {
                _this.emptyCellMove = _this.gridster.renderer.listen(_this.gridster.el, 'dragover', _this.emptyCellDragOver.bind(_this));
            });
            this.emptyCellExit = this.gridster.renderer.listen('document', 'dragend', function () {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            });
        }
        else if (!this.gridster.$options.enableEmptyCellDrop && this.emptyCellDrop && this.emptyCellMove && this.emptyCellExit) {
            this.emptyCellDrop();
            this.emptyCellMove();
            this.emptyCellExit();
            this.emptyCellMove = null;
            this.emptyCellDrop = null;
            this.emptyCellExit = null;
        }
        if (this.gridster.$options.enableEmptyCellDrag && !this.emptyCellDrag && this.gridster.options.emptyCellDragCallback) {
            this.emptyCellDrag = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown.bind(this));
            this.emptyCellDragTouch = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellDrag && this.emptyCellDrag && this.emptyCellDragTouch) {
            this.emptyCellDrag();
            this.emptyCellDragTouch();
            this.emptyCellDrag = null;
            this.emptyCellDragTouch = null;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellClickCb = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellClickCallback) {
            this.gridster.options.emptyCellClickCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellContextMenuCb = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellContextMenuCallback) {
            this.gridster.options.emptyCellContextMenuCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellDropCallback) {
            this.gridster.options.emptyCellDropCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (item) {
            e.dataTransfer.dropEffect = 'move';
            this.gridster.movingItem = item;
        }
        else {
            e.dataTransfer.dropEffect = 'none';
            this.gridster.movingItem = null;
        }
        this.gridster.previewStyle();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        /** @type {?} */
        var leftMouseButtonCode = 1;
        if (!item || e.buttons !== leftMouseButtonCode) {
            return;
        }
        this.initialItem = item;
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
        this.gridster.zone.runOutsideAngular(function () {
            _this.emptyCellMMove = _this.gridster.renderer.listen('window', 'mousemove', _this.emptyCellMouseMove.bind(_this));
            _this.emptyCellMMoveTouch = _this.gridster.renderer.listen('window', 'touchmove', _this.emptyCellMouseMove.bind(_this));
        });
        this.emptyCellUp = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp.bind(this));
        this.emptyCellUpTouch = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp.bind(this));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (!item) {
            return;
        }
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.emptyCellMMove();
        this.emptyCellMMoveTouch();
        this.emptyCellUp();
        this.emptyCellUpTouch();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (item) {
            this.gridster.movingItem = item;
        }
        if (this.gridster.options.emptyCellDragCallback && this.gridster.movingItem) {
            this.gridster.options.emptyCellDragCallback(e, this.gridster.movingItem);
        }
        setTimeout(function () {
            _this.initialItem = null;
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            }
        });
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @param {?=} oldItem
     * @return {?}
     */
    GridsterEmptyCell.prototype.getValidItemFromEvent = /**
     * @param {?} e
     * @param {?=} oldItem
     * @return {?}
     */
    function (e, oldItem) {
        e.preventDefault();
        e.stopPropagation();
        GridsterUtils.checkTouchEvent(e);
        /** @type {?} */
        var rect = this.gridster.el.getBoundingClientRect();
        /** @type {?} */
        var x = e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.$options.margin;
        /** @type {?} */
        var y = e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.$options.margin;
        /** @type {?} */
        var item = {
            x: this.gridster.pixelsToPositionX(x, Math.floor, true),
            y: this.gridster.pixelsToPositionY(y, Math.floor, true),
            cols: this.gridster.$options.defaultItemCols,
            rows: this.gridster.$options.defaultItemRows
        };
        if (oldItem) {
            item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
            item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
            if (oldItem.x < item.x) {
                item.x = oldItem.x;
            }
            else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
                item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
            }
            if (oldItem.y < item.y) {
                item.y = oldItem.y;
            }
            else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
                item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
            }
        }
        if (this.gridster.checkCollision(item)) {
            return;
        }
        return item;
    };
    GridsterEmptyCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterEmptyCell.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterEmptyCell;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterCompact = /** @class */ (function () {
    function GridsterCompact(gridster) {
        this.gridster = gridster;
    }
    /**
     * @return {?}
     */
    GridsterCompact.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompact = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.compactType !== CompactType.None) {
            if (this.gridster.$options.compactType === CompactType.CompactUp) {
                this.checkCompactUp();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                this.checkCompactUp();
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                this.checkCompactLeft();
                this.checkCompactUp();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactRight) {
                this.checkCompactRight();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                this.checkCompactUp();
                this.checkCompactRight();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactRightAndUp) {
                this.checkCompactRight();
                this.checkCompactUp();
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.gridster.$options.compactType !== CompactType.None) {
            if (this.gridster.$options.compactType === CompactType.CompactUp) {
                this.moveUpTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                this.moveLeftTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                this.moveUpTillCollision(item);
                this.moveLeftTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                this.moveLeftTillCollision(item);
                this.moveUpTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                this.moveUpTillCollision(item);
                this.moveRightTillCollision(item);
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactUp = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveUpTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.y = widget.$item.y;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.moveUpTillCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.y -= 1;
        if (this.gridster.checkCollision(item)) {
            item.y += 1;
            return false;
        }
        else {
            this.moveUpTillCollision(item);
            return true;
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveLeftTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.x = widget.$item.x;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveRightTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.x = widget.$item.x;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.moveLeftTillCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.x -= 1;
        if (this.gridster.checkCollision(item)) {
            item.x += 1;
            return false;
        }
        else {
            this.moveLeftTillCollision(item);
            return true;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.moveRightTillCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.x += 1;
        if (this.gridster.checkCollision(item)) {
            item.x -= 1;
            return false;
        }
        else {
            this.moveRightTillCollision(item);
            return true;
        }
    };
    GridsterCompact.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterCompact.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterCompact;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterRenderer = /** @class */ (function () {
    function GridsterRenderer(gridster) {
        this.gridster = gridster;
    }
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
    };
    /**
     * @param {?} el
     * @param {?} item
     * @param {?} renderer
     * @return {?}
     */
    GridsterRenderer.prototype.updateItem = /**
     * @param {?} el
     * @param {?} item
     * @param {?} renderer
     * @return {?}
     */
    function (el, item, renderer) {
        if (this.gridster.mobile) {
            this.clearCellPosition(renderer, el);
            if (this.gridster.$options.keepFixedHeightInMobile) {
                renderer.setStyle(el, 'height', (item.rows * this.gridster.$options.fixedRowHeight) + 'px');
            }
            else {
                renderer.setStyle(el, 'height', (this.gridster.curWidth / 2 * item.rows) + 'px');
            }
            if (this.gridster.$options.keepFixedWidthInMobile) {
                renderer.setStyle(el, 'width', this.gridster.$options.fixedColWidth + 'px');
            }
            else {
                renderer.setStyle(el, 'width', '');
            }
            renderer.setStyle(el, 'margin-bottom', this.gridster.$options.margin + 'px');
            renderer.setStyle(el, 'margin-right', '');
        }
        else {
            /** @type {?} */
            var x = Math.round(this.gridster.curColWidth * item.x);
            /** @type {?} */
            var y = Math.round(this.gridster.curRowHeight * item.y);
            /** @type {?} */
            var width = this.gridster.curColWidth * item.cols - this.gridster.$options.margin;
            /** @type {?} */
            var height = (this.gridster.curRowHeight * item.rows - this.gridster.$options.margin);
            // set the cell style
            this.setCellPosition(renderer, el, x, y);
            renderer.setStyle(el, 'width', width + 'px');
            renderer.setStyle(el, 'height', height + 'px');
            /** @type {?} */
            var marginBottom = null;
            /** @type {?} */
            var marginRight = null;
            if (this.gridster.$options.outerMargin) {
                if (this.gridster.rows === item.rows + item.y) {
                    if (this.gridster.$options.outerMarginBottom !== null) {
                        marginBottom = this.gridster.$options.outerMarginBottom + 'px';
                    }
                    else {
                        marginBottom = this.gridster.$options.margin + 'px';
                    }
                }
                if (this.gridster.columns === item.cols + item.x) {
                    if (this.gridster.$options.outerMarginBottom !== null) {
                        marginRight = this.gridster.$options.outerMarginRight + 'px';
                    }
                    else {
                        marginRight = this.gridster.$options.margin + 'px';
                    }
                }
            }
            renderer.setStyle(el, 'margin-bottom', marginBottom);
            renderer.setStyle(el, 'margin-right', marginRight);
        }
    };
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.updateGridster = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var addClass = '';
        /** @type {?} */
        var removeClass1 = '';
        /** @type {?} */
        var removeClass2 = '';
        /** @type {?} */
        var removeClass3 = '';
        if (this.gridster.$options.gridType === GridType.Fit) {
            addClass = GridType.Fit;
            removeClass1 = GridType.ScrollVertical;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.ScrollVertical) {
            this.gridster.curRowHeight = this.gridster.curColWidth;
            addClass = GridType.ScrollVertical;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.ScrollHorizontal) {
            this.gridster.curColWidth = this.gridster.curRowHeight;
            addClass = GridType.ScrollHorizontal;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.Fixed) {
            this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.Fixed;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.ScrollHorizontal;
        }
        else if (this.gridster.$options.gridType === GridType.VerticalFixed) {
            this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.ScrollVertical;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.HorizontalFixed) {
            this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.ScrollHorizontal;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.Fixed;
        }
        if (this.gridster.mobile) {
            this.gridster.renderer.removeClass(this.gridster.el, addClass);
        }
        else {
            this.gridster.renderer.addClass(this.gridster.el, addClass);
        }
        this.gridster.renderer.removeClass(this.gridster.el, removeClass1);
        this.gridster.renderer.removeClass(this.gridster.el, removeClass2);
        this.gridster.renderer.removeClass(this.gridster.el, removeClass3);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterRenderer.prototype.getGridColumnStyle = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.getLeftPosition(this.gridster.curColWidth * i), { width: this.gridster.curColWidth - this.gridster.$options.margin + 'px', height: this.gridster.gridRows.length * this.gridster.curRowHeight - this.gridster.$options.margin + 'px' });
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterRenderer.prototype.getGridRowStyle = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.getTopPosition(this.gridster.curRowHeight * i), { width: this.gridster.gridColumns.length * this.gridster.curColWidth - this.gridster.$options.margin + 'px', height: this.gridster.curRowHeight - this.gridster.$options.margin + 'px' });
    };
    /**
     * @param {?} d
     * @return {?}
     */
    GridsterRenderer.prototype.getLeftPosition = /**
     * @param {?} d
     * @return {?}
     */
    function (d) {
        if (this.gridster.$options.useTransformPositioning) {
            return {
                transform: 'translateX(' + d + 'px)',
            };
        }
        else {
            return {
                left: (this.getLeftMargin() + d) + 'px'
            };
        }
    };
    /**
     * @param {?} d
     * @return {?}
     */
    GridsterRenderer.prototype.getTopPosition = /**
     * @param {?} d
     * @return {?}
     */
    function (d) {
        if (this.gridster.$options.useTransformPositioning) {
            return {
                transform: 'translateY(' + d + 'px)',
            };
        }
        else {
            return {
                top: this.getTopMargin() + d + 'px'
            };
        }
    };
    /**
     * @param {?} renderer
     * @param {?} el
     * @return {?}
     */
    GridsterRenderer.prototype.clearCellPosition = /**
     * @param {?} renderer
     * @param {?} el
     * @return {?}
     */
    function (renderer, el) {
        if (this.gridster.$options.useTransformPositioning) {
            renderer.setStyle(el, 'transform', '');
        }
        else {
            renderer.setStyle(el, 'top', '');
            renderer.setStyle(el, 'left', '');
        }
    };
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    GridsterRenderer.prototype.setCellPosition = /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (renderer, el, x, y) {
        if (this.gridster.$options.useTransformPositioning) {
            /** @type {?} */
            var transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            renderer.setStyle(el, 'transform', transform);
        }
        else {
            renderer.setStyle(el, 'left', this.getLeftMargin() + x + 'px');
            renderer.setStyle(el, 'top', this.getTopMargin() + y + 'px');
        }
    };
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.getLeftMargin = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.outerMargin) {
            if (this.gridster.$options.outerMarginLeft !== null) {
                return this.gridster.$options.outerMarginLeft;
            }
            else {
                return this.gridster.$options.margin;
            }
        }
        else {
            return 0;
        }
    };
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.outerMargin) {
            if (this.gridster.$options.outerMarginTop !== null) {
                return this.gridster.$options.outerMarginTop;
            }
            else {
                return this.gridster.$options.margin;
            }
        }
        else {
            return 0;
        }
    };
    GridsterRenderer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterRenderer.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterRenderer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterComponent = /** @class */ (function () {
    function GridsterComponent(el, renderer, cdRef, zone) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.zone = zone;
        this.gridColumns = [];
        this.gridRows = [];
        this.el = el.nativeElement;
        this.$options = JSON.parse(JSON.stringify(GridsterConfigService));
        this.calculateLayoutDebounce = GridsterUtils.debounce(this.calculateLayout.bind(this), 0);
        this.mobile = false;
        this.curWidth = 0;
        this.curHeight = 0;
        this.grid = [];
        this.curColWidth = 0;
        this.curRowHeight = 0;
        this.dragInProgress = false;
        this.emptyCell = new GridsterEmptyCell(this);
        this.compact = new GridsterCompact(this);
        this.gridRenderer = new GridsterRenderer(this);
    }
    /**
     * @param {?} item
     * @param {?} item2
     * @return {?}
     */
    GridsterComponent.checkCollisionTwoItems = /**
     * @param {?} item
     * @param {?} item2
     * @return {?}
     */
    function (item, item2) {
        return item.x < item2.x + item2.cols
            && item.x + item.cols > item2.x
            && item.y < item2.y + item2.rows
            && item.y + item.rows > item2.y;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options.initCallback) {
            this.options.initCallback(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GridsterComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.options) {
            this.setOptions();
            this.options.api = {
                optionsChanged: this.optionsChanged.bind(this),
                resize: this.onResize.bind(this),
                getNextPossiblePosition: this.getNextPossiblePosition.bind(this),
                getFirstPossiblePosition: this.getFirstPossiblePosition.bind(this),
                getLastPossiblePosition: this.getLastPossiblePosition.bind(this),
            };
            this.columns = this.$options.minCols;
            this.rows = this.$options.minRows;
            this.setGridSize();
            this.calculateLayout();
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height;
        /** @type {?} */
        var width;
        if (this.$options.gridType === 'fit' && !this.mobile) {
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
        }
        else {
            width = this.el.clientWidth;
            height = this.el.clientHeight;
        }
        if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
            this.onResize();
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setOptions = /**
     * @return {?}
     */
    function () {
        this.$options = GridsterUtils.merge(this.$options, this.options, this.$options);
        if (!this.$options.disableWindowResize && !this.windowResize) {
            this.windowResize = this.renderer.listen('window', 'resize', this.onResize.bind(this));
        }
        else if (this.$options.disableWindowResize && this.windowResize) {
            this.windowResize();
            this.windowResize = null;
        }
        this.emptyCell.updateOptions();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.optionsChanged = /**
     * @return {?}
     */
    function () {
        this.setOptions();
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.updateOptions();
        }
        this.calculateLayout();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.windowResize) {
            this.windowResize();
        }
        if (this.options.destroyCallback) {
            this.options.destroyCallback(this);
        }
        if (this.options.api) {
            this.options.api.resize = undefined;
            this.options.api.optionsChanged = undefined;
            this.options.api.getNextPossiblePosition = undefined;
            this.options.api = undefined;
        }
        this.emptyCell.destroy();
        delete this.emptyCell;
        this.compact.destroy();
        delete this.compact;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.setGridSize();
        this.calculateLayout();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.checkIfToResize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clientWidth = this.el.clientWidth;
        /** @type {?} */
        var offsetWidth = this.el.offsetWidth;
        /** @type {?} */
        var scrollWidth = this.el.scrollWidth;
        /** @type {?} */
        var clientHeight = this.el.clientHeight;
        /** @type {?} */
        var offsetHeight = this.el.offsetHeight;
        /** @type {?} */
        var scrollHeight = this.el.scrollHeight;
        /** @type {?} */
        var verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight
            && scrollHeight - offsetHeight < offsetWidth - clientWidth;
        /** @type {?} */
        var horizontalScrollPresent = clientHeight < offsetHeight
            && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
        if (verticalScrollPresent) {
            return false;
        }
        return !horizontalScrollPresent;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setGridSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.el;
        /** @type {?} */
        var width = el.clientWidth;
        /** @type {?} */
        var height = el.clientHeight;
        if (this.$options.setGridSize || this.$options.gridType === 'fit' && !this.mobile) {
            width = el.offsetWidth;
            height = el.offsetHeight;
        }
        else {
            width = el.clientWidth;
            height = el.clientHeight;
        }
        this.curWidth = width;
        this.curHeight = height;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setGridDimensions = /**
     * @return {?}
     */
    function () {
        this.setGridSize();
        if (!this.mobile && this.$options.mobileBreakpoint > this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.addClass(this.el, 'mobile');
        }
        else if (this.mobile && this.$options.mobileBreakpoint < this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.removeClass(this.el, 'mobile');
        }
        /** @type {?} */
        var rows = this.$options.minRows;
        /** @type {?} */
        var columns = this.$options.minCols;
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (!widget.notPlaced) {
                rows = Math.max(rows, widget.$item.y + widget.$item.rows);
                columns = Math.max(columns, widget.$item.x + widget.$item.cols);
            }
        }
        if (this.columns !== columns || this.rows !== rows) {
            this.columns = columns;
            this.rows = rows;
            if (this.options.gridSizeChangedCallback) {
                this.options.gridSizeChangedCallback(this);
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.calculateLayout = /**
     * @return {?}
     */
    function () {
        if (this.compact) {
            this.compact.checkCompact();
        }
        this.setGridDimensions();
        if (this.$options.outerMargin) {
            /** @type {?} */
            var marginWidth = -this.$options.margin;
            if (this.$options.outerMarginLeft !== null) {
                marginWidth += this.$options.outerMarginLeft;
                this.renderer.setStyle(this.el, 'padding-left', this.$options.outerMarginLeft + 'px');
            }
            else {
                marginWidth += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-left', this.$options.margin + 'px');
            }
            if (this.$options.outerMarginRight !== null) {
                marginWidth += this.$options.outerMarginRight;
                this.renderer.setStyle(this.el, 'padding-right', this.$options.outerMarginRight + 'px');
            }
            else {
                marginWidth += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-right', this.$options.margin + 'px');
            }
            this.curColWidth = (this.curWidth - marginWidth) / this.columns;
            /** @type {?} */
            var marginHeight = -this.$options.margin;
            if (this.$options.outerMarginTop !== null) {
                marginHeight += this.$options.outerMarginTop;
                this.renderer.setStyle(this.el, 'padding-top', this.$options.outerMarginTop + 'px');
            }
            else {
                marginHeight += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-top', this.$options.margin + 'px');
            }
            if (this.$options.outerMarginBottom !== null) {
                marginHeight += this.$options.outerMarginBottom;
                this.renderer.setStyle(this.el, 'padding-bottom', this.$options.outerMarginBottom + 'px');
            }
            else {
                marginHeight += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-bottom', this.$options.margin + 'px');
            }
            this.curRowHeight = (this.curHeight - marginHeight) / this.rows;
        }
        else {
            this.curColWidth = (this.curWidth + this.$options.margin) / this.columns;
            this.curRowHeight = (this.curHeight + this.$options.margin) / this.rows;
            this.renderer.setStyle(this.el, 'padding-left', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-right', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-top', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-bottom', 0 + 'px');
        }
        this.gridRenderer.updateGridster();
        this.updateGrid();
        if (this.$options.setGridSize) {
            this.renderer.setStyle(this.el, 'width', (this.columns * this.curColWidth + this.$options.margin) + 'px');
            this.renderer.setStyle(this.el, 'height', (this.rows * this.curRowHeight + this.$options.margin) + 'px');
        }
        else {
            this.renderer.setStyle(this.el, 'width', '');
            this.renderer.setStyle(this.el, 'height', '');
        }
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.setSize();
            widget.drag.toggle();
            widget.resize.toggle();
        }
        setTimeout(this.resize.bind(this), 100);
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.updateGrid = /**
     * @return {?}
     */
    function () {
        if (this.$options.displayGrid === 'always' && !this.mobile) {
            this.renderer.addClass(this.el, 'display-grid');
        }
        else if (this.$options.displayGrid === 'onDrag&Resize' && this.dragInProgress) {
            this.renderer.addClass(this.el, 'display-grid');
        }
        else if (this.$options.displayGrid === 'none' || !this.dragInProgress || this.mobile) {
            this.renderer.removeClass(this.el, 'display-grid');
        }
        this.setGridDimensions();
        this.gridColumns.length = Math.max(this.columns, Math.floor(this.curWidth / this.curColWidth)) || 0;
        this.gridRows.length = Math.max(this.rows, Math.floor(this.curHeight / this.curRowHeight)) || 0;
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.addItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        if (itemComponent.$item.cols === undefined) {
            itemComponent.$item.cols = this.$options.defaultItemCols;
            itemComponent.item.cols = itemComponent.$item.cols;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.rows === undefined) {
            itemComponent.$item.rows = this.$options.defaultItemRows;
            itemComponent.item.rows = itemComponent.$item.rows;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.x === -1 || itemComponent.$item.y === -1) {
            this.autoPositionItem(itemComponent);
        }
        else if (this.checkCollision(itemComponent.$item)) {
            if (!this.$options.disableWarnings) {
                itemComponent.notPlaced = true;
                console.warn('Can\'t be placed in the bounds of the dashboard, trying to auto position!/n' +
                    JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
            }
            if (!this.$options.disableAutoPositionOnConflict) {
                this.autoPositionItem(itemComponent);
            }
            else {
                itemComponent.notPlaced = true;
            }
        }
        this.grid.push(itemComponent);
        this.calculateLayoutDebounce();
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.removeItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        this.grid.splice(this.grid.indexOf(itemComponent), 1);
        this.calculateLayoutDebounce();
        if (this.options.itemRemovedCallback) {
            this.options.itemRemovedCallback(itemComponent.item, itemComponent);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.checkCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var collision = false;
        if (this.options.itemValidateCallback) {
            collision = !this.options.itemValidateCallback(item);
        }
        if (!collision && this.checkGridCollision(item)) {
            collision = true;
        }
        if (!collision) {
            /** @type {?} */
            var c = this.findItemWithItem(item);
            if (c) {
                collision = c;
            }
        }
        return collision;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.checkGridCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var noNegativePosition = item.y > -1 && item.x > -1;
        /** @type {?} */
        var maxGridCols = item.cols + item.x <= this.$options.maxCols;
        /** @type {?} */
        var maxGridRows = item.rows + item.y <= this.$options.maxRows;
        /** @type {?} */
        var maxItemCols = item.maxItemCols === undefined ? this.$options.maxItemCols : item.maxItemCols;
        /** @type {?} */
        var minItemCols = item.minItemCols === undefined ? this.$options.minItemCols : item.minItemCols;
        /** @type {?} */
        var maxItemRows = item.maxItemRows === undefined ? this.$options.maxItemRows : item.maxItemRows;
        /** @type {?} */
        var minItemRows = item.minItemRows === undefined ? this.$options.minItemRows : item.minItemRows;
        /** @type {?} */
        var inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
        /** @type {?} */
        var inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
        /** @type {?} */
        var minAreaLimit = item.minItemArea === undefined ? this.$options.minItemArea : item.minItemArea;
        /** @type {?} */
        var maxAreaLimit = item.maxItemArea === undefined ? this.$options.maxItemArea : item.maxItemArea;
        /** @type {?} */
        var area = item.cols * item.rows;
        /** @type {?} */
        var inMinArea = minAreaLimit <= area;
        /** @type {?} */
        var inMaxArea = maxAreaLimit >= area;
        return !(noNegativePosition && maxGridCols && maxGridRows && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.findItemWithItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                return widget;
            }
        }
        return false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.findItemsWithItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var a = [];
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                a.push(widget);
            }
        }
        return a;
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.autoPositionItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        if (this.getNextPossiblePosition(itemComponent.$item)) {
            itemComponent.notPlaced = false;
            itemComponent.item.x = itemComponent.$item.x;
            itemComponent.item.y = itemComponent.$item.y;
            itemComponent.itemChanged();
        }
        else {
            itemComponent.notPlaced = true;
            if (!this.$options.disableWarnings) {
                console.warn('Can\'t be placed in the bounds of the dashboard!/n' +
                    JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
            }
        }
    };
    /**
     * @param {?} newItem
     * @param {?=} startingFrom
     * @return {?}
     */
    GridsterComponent.prototype.getNextPossiblePosition = /**
     * @param {?} newItem
     * @param {?=} startingFrom
     * @return {?}
     */
    function (newItem, startingFrom) {
        if (startingFrom === void 0) { startingFrom = {}; }
        if (newItem.cols === -1) {
            newItem.cols = this.$options.defaultItemCols;
        }
        if (newItem.rows === -1) {
            newItem.rows = this.$options.defaultItemRows;
        }
        this.setGridDimensions();
        /** @type {?} */
        var rowsIndex = startingFrom.y || 0;
        /** @type {?} */
        var colsIndex;
        for (; rowsIndex < this.rows; rowsIndex++) {
            newItem.y = rowsIndex;
            colsIndex = startingFrom.x || 0;
            for (; colsIndex < this.columns; colsIndex++) {
                newItem.x = colsIndex;
                if (!this.checkCollision(newItem)) {
                    return true;
                }
            }
        }
        /** @type {?} */
        var canAddToRows = this.$options.maxRows >= this.rows + newItem.rows;
        /** @type {?} */
        var canAddToColumns = this.$options.maxCols >= this.columns + newItem.cols;
        /** @type {?} */
        var addToRows = this.rows <= this.columns && canAddToRows;
        if (!addToRows && canAddToColumns) {
            newItem.x = this.columns;
            newItem.y = 0;
            return true;
        }
        else if (canAddToRows) {
            newItem.y = this.rows;
            newItem.x = 0;
            return true;
        }
        return false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.getFirstPossiblePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var tmpItem = Object.assign({}, item);
        this.getNextPossiblePosition(tmpItem);
        return tmpItem;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.getLastPossiblePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var farthestItem = { y: 0, x: 0 };
        farthestItem = this.grid.reduce(function (prev, curr) {
            /** @type {?} */
            var currCoords = { y: curr.$item.y + curr.$item.rows - 1, x: curr.$item.x + curr.$item.cols - 1 };
            if (GridsterUtils.compareItems(prev, currCoords) === 1) {
                return currCoords;
            }
            else {
                return prev;
            }
        }, farthestItem);
        /** @type {?} */
        var tmpItem = Object.assign({}, item);
        this.getNextPossiblePosition(tmpItem, farthestItem);
        return tmpItem;
    };
    /**
     * @param {?} x
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    GridsterComponent.prototype.pixelsToPositionX = /**
     * @param {?} x
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    function (x, roundingMethod, noLimit) {
        /** @type {?} */
        var position = roundingMethod(x / this.curColWidth);
        if (noLimit) {
            return position;
        }
        else {
            return Math.max(position, 0);
        }
    };
    /**
     * @param {?} y
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    GridsterComponent.prototype.pixelsToPositionY = /**
     * @param {?} y
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    function (y, roundingMethod, noLimit) {
        /** @type {?} */
        var position = roundingMethod(y / this.curRowHeight);
        if (noLimit) {
            return position;
        }
        else {
            return Math.max(position, 0);
        }
    };
    /**
     * @param {?} x
     * @return {?}
     */
    GridsterComponent.prototype.positionXToPixels = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        return x * this.curColWidth;
    };
    /**
     * @param {?} y
     * @return {?}
     */
    GridsterComponent.prototype.positionYToPixels = /**
     * @param {?} y
     * @return {?}
     */
    function (y) {
        return y * this.curRowHeight;
    };
    GridsterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster',
                    template: "<div class=\"gridster-column\" *ngFor=\"let column of gridColumns; let i = index;\"\n     [ngStyle]=\"gridRenderer.getGridColumnStyle(i)\"></div>\n<div class=\"gridster-row\" *ngFor=\"let row of gridRows; let i = index;\"\n     [ngStyle]=\"gridRenderer.getGridRowStyle(i)\"></div>\n<ng-content></ng-content>\n<gridster-preview class=\"gridster-preview\"></gridster-preview>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster{position:relative;box-sizing:border-box;background:grey;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}gridster.fit{overflow-x:hidden;overflow-y:hidden}gridster.scrollVertical{overflow-x:hidden;overflow-y:auto}gridster.scrollHorizontal{overflow-x:auto;overflow-y:hidden}gridster.fixed{overflow:auto}gridster.mobile{overflow-x:hidden;overflow-y:auto}gridster.mobile gridster-item{position:relative}gridster .gridster-column,gridster .gridster-row{position:absolute;display:none;transition:.3s;box-sizing:border-box}gridster.display-grid .gridster-column,gridster.display-grid .gridster-row{display:block}gridster .gridster-column{border-left:1px solid #fff;border-right:1px solid #fff}gridster .gridster-row{border-top:1px solid #fff;border-bottom:1px solid #fff}"]
                }] }
    ];
    /** @nocollapse */
    GridsterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    GridsterComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GridsterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
GridsterItemComponentInterface = /** @class */ (function () {
    function GridsterItemComponentInterface() {
    }
    return GridsterItemComponentInterface;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterSwap = /** @class */ (function () {
    function GridsterSwap(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    /**
     * @return {?}
     */
    GridsterSwap.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
        delete this.swapedItem;
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.swapItems = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.checkSwapBack = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            /** @type {?} */
            var x = this.swapedItem.$item.x;
            /** @type {?} */
            var y = this.swapedItem.$item.y;
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            if (this.gridster.checkCollision(this.swapedItem.$item)) {
                this.swapedItem.$item.x = x;
                this.swapedItem.$item.y = y;
            }
            else {
                this.swapedItem.setSize();
                this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                this.swapedItem = undefined;
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.restoreSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize();
            this.swapedItem = undefined;
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.setSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    };
    /**
     * @param {?} pushedBy
     * @return {?}
     */
    GridsterSwap.prototype.checkSwap = /**
     * @param {?} pushedBy
     * @return {?}
     */
    function (pushedBy) {
        /** @type {?} */
        var gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            /** @type {?} */
            var gridsterItemCollide = gridsterItemCollision;
            /** @type {?} */
            var copyCollisionX = gridsterItemCollide.$item.x;
            /** @type {?} */
            var copyCollisionY = gridsterItemCollide.$item.y;
            /** @type {?} */
            var copyX = pushedBy.$item.x;
            /** @type {?} */
            var copyY = pushedBy.$item.y;
            gridsterItemCollide.$item.x = pushedBy.item.x || 0;
            gridsterItemCollide.$item.y = pushedBy.item.y || 0;
            pushedBy.$item.x = gridsterItemCollide.item.x || 0;
            pushedBy.$item.y = gridsterItemCollide.item.y || 0;
            if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                pushedBy.$item.x = copyX;
                pushedBy.$item.y = copyY;
                gridsterItemCollide.$item.x = copyCollisionX;
                gridsterItemCollide.$item.y = copyCollisionY;
            }
            else {
                gridsterItemCollide.setSize();
                this.swapedItem = gridsterItemCollide;
            }
        }
    };
    GridsterSwap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterSwap.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterSwap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var scrollSensitivity;
/** @type {?} */
var scrollSpeed;
/** @type {?} */
var intervalDuration = 50;
/** @type {?} */
var gridsterElement;
/** @type {?} */
var resizeEvent;
/** @type {?} */
var resizeEventType;
/** @type {?} */
var intervalE;
/** @type {?} */
var intervalW;
/** @type {?} */
var intervalN;
/** @type {?} */
var intervalS;
/**
 * @param {?} gridster
 * @param {?} left
 * @param {?} top
 * @param {?} width
 * @param {?} height
 * @param {?} e
 * @param {?} lastMouse
 * @param {?} calculateItemPosition
 * @param {?=} resize
 * @param {?=} resizeEventScrollType
 * @return {?}
 */
function scroll(gridster, left, top, width, height, e, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
    scrollSensitivity = gridster.$options.scrollSensitivity;
    scrollSpeed = gridster.$options.scrollSpeed;
    gridsterElement = gridster.el;
    resizeEvent = resize;
    resizeEventType = resizeEventScrollType;
    /** @type {?} */
    var offsetWidth = gridsterElement.offsetWidth;
    /** @type {?} */
    var offsetHeight = gridsterElement.offsetHeight;
    /** @type {?} */
    var offsetLeft = gridsterElement.scrollLeft;
    /** @type {?} */
    var offsetTop = gridsterElement.scrollTop;
    /** @type {?} */
    var elemTopOffset = top - offsetTop;
    /** @type {?} */
    var elemBottomOffset = offsetHeight + offsetTop - top - height;
    if (lastMouse.clientY < e.clientY && elemBottomOffset < scrollSensitivity) {
        cancelN();
        if ((resizeEvent && resizeEventType && !resizeEventType.s) || intervalS) {
            return;
        }
        intervalS = startVertical(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY > e.clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
        cancelS();
        if ((resizeEvent && resizeEventType && !resizeEventType.n) || intervalN) {
            return;
        }
        intervalN = startVertical(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY !== e.clientY) {
        cancelVertical();
    }
    /** @type {?} */
    var elemRightOffset = offsetLeft + offsetWidth - left - width;
    /** @type {?} */
    var elemLeftOffset = left - offsetLeft;
    if (lastMouse.clientX < e.clientX && elemRightOffset <= scrollSensitivity) {
        cancelW();
        if ((resizeEvent && resizeEventType && !resizeEventType.e) || intervalE) {
            return;
        }
        intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX > e.clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
        cancelE();
        if ((resizeEvent && resizeEventType && !resizeEventType.w) || intervalW) {
            return;
        }
        intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX !== e.clientX) {
        cancelHorizontal();
    }
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startVertical(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    var clientY = lastMouse.clientY;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
            cancelVertical();
        }
        gridsterElement.scrollTop += sign * scrollSpeed;
        clientY += sign * scrollSpeed;
        calculateItemPosition({ clientX: lastMouse.clientX, clientY: clientY });
    }, intervalDuration);
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startHorizontal(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    var clientX = lastMouse.clientX;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
            cancelHorizontal();
        }
        gridsterElement.scrollLeft += sign * scrollSpeed;
        clientX += sign * scrollSpeed;
        calculateItemPosition({ clientX: clientX, clientY: lastMouse.clientY });
    }, intervalDuration);
}
/**
 * @return {?}
 */
function cancelScroll() {
    cancelHorizontal();
    cancelVertical();
    gridsterElement = undefined;
}
/**
 * @return {?}
 */
function cancelHorizontal() {
    cancelE();
    cancelW();
}
/**
 * @return {?}
 */
function cancelVertical() {
    cancelN();
    cancelS();
}
/**
 * @return {?}
 */
function cancelE() {
    if (intervalE) {
        clearInterval(intervalE);
        intervalE = 0;
    }
}
/**
 * @return {?}
 */
function cancelW() {
    if (intervalW) {
        clearInterval(intervalW);
        intervalW = 0;
    }
}
/**
 * @return {?}
 */
function cancelS() {
    if (intervalS) {
        clearInterval(intervalS);
        intervalS = 0;
    }
}
/**
 * @return {?}
 */
function cancelN() {
    if (intervalN) {
        clearInterval(intervalN);
        intervalN = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterPush = /** @class */ (function () {
    function GridsterPush(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsTemp = [];
        this.pushedItemsTempPath = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
            fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
            fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
            fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    /**
     * @return {?}
     */
    GridsterPush.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
    };
    /**
     * @param {?} direction
     * @param {?=} disable
     * @return {?}
     */
    GridsterPush.prototype.pushItems = /**
     * @param {?} direction
     * @param {?=} disable
     * @return {?}
     */
    function (direction, disable) {
        if (this.gridster.$options.pushItems && !disable) {
            this.pushedItemsOrder = [];
            /** @type {?} */
            var pushed = this.push(this.gridsterItem, direction);
            if (!pushed) {
                this.restoreTempItems();
            }
            this.pushedItemsOrder = [];
            this.pushedItemsTemp = [];
            this.pushedItemsTempPath = [];
            return pushed;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.restoreTempItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItemsTemp.length - 1;
        for (; i > -1; i--) {
            this.removeFromTempPushed(this.pushedItemsTemp[i]);
        }
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.restoreItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.setSize();
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.setPushedItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.checkPushBack = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItems.length - 1;
        /** @type {?} */
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPush.prototype.push = /**
     * @private
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItem, direction) {
        if (this.gridster.checkGridCollision(gridsterItem.$item)) {
            return false;
        }
        if (direction === '') {
            return false;
        }
        /** @type {?} */
        var a = this.gridster.findItemsWithItem(gridsterItem.$item);
        /** @type {?} */
        var i = a.length - 1;
        /** @type {?} */
        var itemCollision;
        /** @type {?} */
        var makePush = true;
        /** @type {?} */
        var b = [];
        for (; i > -1; i--) {
            itemCollision = a[i];
            if (itemCollision === this.gridsterItem) {
                makePush = false;
                break;
            }
            if (!itemCollision.canBeDragged()) {
                makePush = false;
                break;
            }
            /** @type {?} */
            var compare = this.pushedItemsTemp.find(function (el) {
                return el.$item.x === itemCollision.$item.x && el.$item.y === itemCollision.$item.y;
            });
            if (compare) {
                makePush = false;
                break;
            }
            if (this.tryPattern[direction][0].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][1].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][2].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][3].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else {
                makePush = false;
                break;
            }
        }
        if (!makePush) {
            i = this.pushedItemsOrder.lastIndexOf(b[0]);
            if (i > -1) {
                /** @type {?} */
                var j = this.pushedItemsOrder.length - 1;
                for (; j >= i; j--) {
                    itemCollision = this.pushedItemsOrder[j];
                    this.pushedItemsOrder.pop();
                    this.removeFromTempPushed(itemCollision);
                    this.removeFromPushedItem(itemCollision);
                }
            }
        }
        return makePush;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.trySouth = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.south) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        if (this.push(gridsterItemCollide, this.fromNorth)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryNorth = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.north) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.y = gridsterItem.$item.y - gridsterItemCollide.$item.rows;
        if (this.push(gridsterItemCollide, this.fromSouth)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryEast = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.east) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        if (this.push(gridsterItemCollide, this.fromWest)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryWest = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.west) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.x = gridsterItem.$item.x - gridsterItemCollide.$item.cols;
        if (this.push(gridsterItemCollide, this.fromEast)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.addToTempPushed = /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItemsTemp.indexOf(gridsterItem);
        if (i === -1) {
            i = this.pushedItemsTemp.push(gridsterItem) - 1;
            this.pushedItemsTempPath[i] = [];
        }
        this.pushedItemsTempPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.removeFromTempPushed = /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItemsTemp.indexOf(gridsterItem);
        /** @type {?} */
        var tempPosition = this.pushedItemsTempPath[i].pop();
        if (!tempPosition) {
            return;
        }
        gridsterItem.$item.x = tempPosition.x;
        gridsterItem.$item.y = tempPosition.y;
        gridsterItem.setSize();
        if (!this.pushedItemsTempPath[i].length) {
            this.pushedItemsTemp.splice(i, 1);
            this.pushedItemsTempPath.splice(i, 1);
        }
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.addToPushed = /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([{ x: gridsterItem.item.x || 0, y: gridsterItem.item.y || 0 },
                { x: gridsterItem.$item.x, y: gridsterItem.$item.y }]);
        }
        else {
            /** @type {?} */
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
        }
    };
    /**
     * @private
     * @param {?} i
     * @return {?}
     */
    GridsterPush.prototype.removeFromPushed = /**
     * @private
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.removeFromPushedItem = /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItems.indexOf(gridsterItem);
        if (i > -1) {
            this.pushedItemsPath[i].pop();
            if (!this.pushedItemsPath.length) {
                this.pushedItems.splice(i, 1);
                this.pushedItemsPath.splice(i, 1);
            }
        }
    };
    /**
     * @private
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    GridsterPush.prototype.checkPushedItem = /**
     * @private
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    function (pushedItem, i) {
        /** @type {?} */
        var path = this.pushedItemsPath[i];
        /** @type {?} */
        var j = path.length - 2;
        /** @type {?} */
        var lastPosition;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var change = false;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize();
                path.splice(j + 1, path.length - j - 1);
                change = true;
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
        }
        return change;
    };
    GridsterPush.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterPush.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPush;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterDraggable = /** @class */ (function () {
    function GridsterDraggable(gridsterItem, gridster, zone) {
        this.zone = zone;
        this.collision = false;
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.path = [];
    }
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle(true);
        }
        delete this.gridsterItem;
        delete this.gridster;
        delete this.collision;
        if (this.mousedown) {
            this.mousedown();
            this.touchstart();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.options.draggable && this.gridster.options.draggable.start) {
            this.gridster.options.draggable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.zone.runOutsideAngular(function () {
            _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
            _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
        });
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-moving');
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.left = this.gridsterItem.left - this.margin;
        this.top = this.gridsterItem.top - this.margin;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
        this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle(true);
        this.push = new GridsterPush(this.gridsterItem);
        this.swap = new GridsterSwap(this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.updateGrid();
        this.path.push({ x: this.gridsterItem.item.x || 0, y: this.gridsterItem.item.y || 0 });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        GridsterUtils.checkTouchEvent(e);
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.calculateItemPositionFromMousePosition.bind(this));
        this.calculateItemPositionFromMousePosition(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.calculateItemPositionFromMousePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.left = e.clientX + this.offsetLeft - this.diffLeft;
        this.top = e.clientY + this.offsetTop - this.diffTop;
        this.calculateItemPosition();
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.zone.run(function () {
            _this.gridster.updateGrid();
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        cancelScroll();
        this.cancelOnBlur();
        this.mousemove();
        this.mouseup();
        this.mouseleave();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-moving');
        this.gridster.dragInProgress = false;
        this.gridster.updateGrid();
        this.path = [];
        if (this.gridster.options.draggable && this.gridster.options.draggable.stop) {
            Promise.resolve(this.gridster.options.draggable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeDrag.bind(this), this.cancelDrag.bind(this));
        }
        else {
            this.makeDrag();
        }
        setTimeout(function () {
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle(true);
            }
        });
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.cancelDrag = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize();
        if (this.push) {
            this.push.restoreItems();
        }
        if (this.swap) {
            this.swap.restoreSwapItem();
        }
        if (this.push) {
            this.push.destroy();
            delete this.push;
        }
        if (this.swap) {
            this.swap.destroy();
            delete this.swap;
        }
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.makeDrag = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.draggable.dropOverItems && this.gridster.options.draggable
            && this.gridster.options.draggable.dropOverItemsCallback
            && this.collision && this.collision !== true && this.collision.$item) {
            this.gridster.options.draggable.dropOverItemsCallback(this.gridsterItem.item, this.collision.item, this.gridster);
        }
        this.collision = false;
        this.gridsterItem.setSize();
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        if (this.push) {
            this.push.setPushedItems();
        }
        if (this.swap) {
            this.swap.setSwapItem();
        }
        if (this.push) {
            this.push.destroy();
            delete this.push;
        }
        if (this.swap) {
            this.swap.destroy();
            delete this.swap;
        }
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.calculateItemPosition = /**
     * @return {?}
     */
    function () {
        this.gridster.movingItem = this.gridsterItem.$item;
        this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
        this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
        this.positionXBackup = this.gridsterItem.$item.x;
        this.positionYBackup = this.gridsterItem.$item.y;
        this.gridsterItem.$item.x = this.positionX;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.x = this.positionXBackup;
        }
        this.gridsterItem.$item.y = this.positionY;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.y = this.positionYBackup;
        }
        this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, this.top);
        if (this.positionXBackup !== this.gridsterItem.$item.x || this.positionYBackup !== this.gridsterItem.$item.y) {
            /** @type {?} */
            var lastPosition = this.path[this.path.length - 1];
            /** @type {?} */
            var direction = '';
            if (lastPosition.x < this.gridsterItem.$item.x) {
                direction = this.push.fromWest;
            }
            else if (lastPosition.x > this.gridsterItem.$item.x) {
                direction = this.push.fromEast;
            }
            else if (lastPosition.y < this.gridsterItem.$item.y) {
                direction = this.push.fromNorth;
            }
            else if (lastPosition.y > this.gridsterItem.$item.y) {
                direction = this.push.fromSouth;
            }
            this.push.pushItems(direction, this.gridster.$options.disablePushOnDrag);
            this.swap.swapItems();
            this.collision = this.gridster.checkCollision(this.gridsterItem.$item);
            if (this.collision) {
                this.gridsterItem.$item.x = this.positionXBackup;
                this.gridsterItem.$item.y = this.positionYBackup;
                if (this.gridster.$options.draggable.dropOverItems && this.collision !== true && this.collision.$item) {
                    this.gridster.movingItem = null;
                }
            }
            else {
                this.path.push({ x: this.gridsterItem.$item.x, y: this.gridsterItem.$item.y });
            }
            this.push.checkPushBack();
        }
        this.gridster.previewStyle(true);
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.toggle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var enableDrag = this.gridsterItem.canBeDragged();
        if (!this.enabled && enableDrag) {
            this.enabled = !this.enabled;
            this.dragStartFunction = this.dragStartDelay.bind(this);
            this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'mousedown', this.dragStartFunction);
            this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'touchstart', this.dragStartFunction);
        }
        else if (this.enabled && !enableDrag) {
            this.enabled = !this.enabled;
            this.mousedown();
            this.touchstart();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStartDelay = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('gridster-item-resizable-handler') > -1) {
            return;
        }
        if (GridsterUtils.checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        GridsterUtils.checkTouchEvent(e);
        if (!this.gridster.$options.draggable.delayStart) {
            this.dragStart(e);
            return;
        }
        /** @type {?} */
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.draggable.delayStart);
        /** @type {?} */
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        /** @type {?} */
        var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
        /** @type {?} */
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        /** @type {?} */
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        /** @type {?} */
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        /** @type {?} */
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        /**
         * @param {?} eventMove
         * @return {?}
         */
        function cancelMove(eventMove) {
            GridsterUtils.checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        /**
         * @return {?}
         */
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelMouseLeave();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    GridsterDraggable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterDraggable.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface },
        { type: GridsterComponentInterface },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return GridsterDraggable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterPushResize = /** @class */ (function () {
    function GridsterPushResize(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: this.tryWest,
            fromWest: this.tryEast,
            fromNorth: this.trySouth,
            fromSouth: this.tryNorth
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.pushItems = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (this.gridster.$options.pushResizeItems) {
            return this.push(this.gridsterItem, direction);
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.restoreItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.$item.cols = pushedItem.item.cols || 1;
            pushedItem.$item.row = pushedItem.item.row || 1;
            pushedItem.setSize();
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.setPushedItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.checkPushBack = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItems.length - 1;
        /** @type {?} */
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.push = /**
     * @private
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItem, direction) {
        /** @type {?} */
        var gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true &&
            gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
            if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
                return true;
            }
        }
        else if (gridsterItemCollision === false) {
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.trySouth = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpY = gridsterItemCollide.$item.y;
        /** @type {?} */
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        gridsterItemCollide.$item.rows = backUpRows + backUpY - gridsterItemCollide.$item.y;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.y = backUpY;
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryNorth = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.rows = gridsterItem.$item.y - gridsterItemCollide.$item.y;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryEast = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpX = gridsterItemCollide.$item.x;
        /** @type {?} */
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        gridsterItemCollide.$item.cols = backUpCols + backUpX - gridsterItemCollide.$item.x;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.x = backUpX;
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryWest = /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.cols = gridsterItem.$item.x - gridsterItemCollide.$item.x;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPushResize.prototype.addToPushed = /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([
                {
                    x: gridsterItem.item.x || 0,
                    y: gridsterItem.item.y || 0,
                    cols: gridsterItem.item.cols || 0,
                    rows: gridsterItem.item.rows || 0
                },
                {
                    x: gridsterItem.$item.x,
                    y: gridsterItem.$item.y,
                    cols: gridsterItem.$item.cols,
                    rows: gridsterItem.$item.rows
                }
            ]);
        }
        else {
            /** @type {?} */
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({
                x: gridsterItem.$item.x,
                y: gridsterItem.$item.y,
                cols: gridsterItem.$item.cols,
                rows: gridsterItem.$item.rows
            });
        }
    };
    /**
     * @private
     * @param {?} i
     * @return {?}
     */
    GridsterPushResize.prototype.removeFromPushed = /**
     * @private
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    /**
     * @private
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    GridsterPushResize.prototype.checkPushedItem = /**
     * @private
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    function (pushedItem, i) {
        /** @type {?} */
        var path = this.pushedItemsPath[i];
        /** @type {?} */
        var j = path.length - 2;
        /** @type {?} */
        var lastPosition;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var cols;
        /** @type {?} */
        var rows;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            cols = pushedItem.$item.cols;
            rows = pushedItem.$item.rows;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            pushedItem.$item.cols = lastPosition.cols;
            pushedItem.$item.rows = lastPosition.rows;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize();
                path.splice(j + 1, path.length - 1 - j);
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
                pushedItem.$item.cols = cols;
                pushedItem.$item.rows = rows;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
            return true;
        }
        return false;
    };
    GridsterPushResize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterPushResize.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPushResize;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterResizable = /** @class */ (function () {
    function GridsterResizable(gridsterItem, gridster, zone) {
        this.zone = zone;
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.itemBackup = [0, 0, 0, 0];
        this.resizeEventScrollType = { w: false, e: false, n: false, s: false };
    }
    /**
     * @return {?}
     */
    GridsterResizable.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle();
        }
        delete this.gridsterItem;
        delete this.gridster;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.options.resizable && this.gridster.options.resizable.start) {
            this.gridster.options.resizable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.zone.runOutsideAngular(function () {
            _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
            _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
        });
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-resizing');
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.left = this.gridsterItem.left;
        this.top = this.gridsterItem.top;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.bottom = this.gridsterItem.top + this.gridsterItem.height;
        this.right = this.gridsterItem.left + this.gridsterItem.width;
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.diffLeft = e.clientX + this.offsetLeft - this.left;
        this.diffRight = e.clientX + this.offsetLeft - this.right;
        this.diffTop = e.clientY + this.offsetTop - this.top;
        this.diffBottom = e.clientY + this.offsetTop - this.bottom;
        this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item.minItemRows || this.gridster.$options.minItemRows)
            - this.margin;
        this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item.minItemCols || this.gridster.$options.minItemCols)
            - this.margin;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle();
        this.push = new GridsterPush(this.gridsterItem);
        this.pushResize = new GridsterPushResize(this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.updateGrid();
        if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-n') > -1) {
            this.resizeEventScrollType.n = true;
            this.directionFunction = this.handleN;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-w') > -1) {
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-s') > -1) {
            this.resizeEventScrollType.s = true;
            this.directionFunction = this.handleS;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-e') > -1) {
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleE;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-nw') > -1) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleNW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-ne') > -1) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleNE;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-sw') > -1) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleSW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-se') > -1) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleSE;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        GridsterUtils.checkTouchEvent(e);
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.directionFunction.bind(this), true, this.resizeEventScrollType);
        this.directionFunction(e);
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.zone.run(function () {
            _this.gridster.updateGrid();
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        cancelScroll();
        this.mousemove();
        this.mouseup();
        this.mouseleave();
        this.cancelOnBlur();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridster.dragInProgress = false;
        this.gridster.updateGrid();
        if (this.gridster.options.resizable && this.gridster.options.resizable.stop) {
            Promise.resolve(this.gridster.options.resizable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeResize.bind(this), this.cancelResize.bind(this));
        }
        else {
            this.makeResize();
        }
        setTimeout(function () {
            _this.gridsterItem.renderer.removeClass(_this.gridsterItem.el, 'gridster-item-resizing');
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            }
        });
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.cancelResize = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.$item.cols = this.gridsterItem.item.cols || 1;
        this.gridsterItem.$item.rows = this.gridsterItem.item.rows || 1;
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize();
        this.push.restoreItems();
        this.pushResize.restoreItems();
        this.push.destroy();
        delete this.push;
        this.pushResize.destroy();
        delete this.pushResize;
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.makeResize = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.setSize();
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        this.push.setPushedItems();
        this.pushResize.setPushedItems();
        this.push.destroy();
        delete this.push;
        this.pushResize.destroy();
        delete this.pushResize;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleN = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.top = e.clientY + this.offsetTop - this.diffTop;
        this.height = this.bottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
            this.top = this.bottom - this.minHeight;
        }
        this.newPosition = this.gridster.pixelsToPositionY(this.top + this.margin, Math.floor);
        if (this.gridsterItem.$item.y !== this.newPosition) {
            this.itemBackup[1] = this.gridsterItem.$item.y;
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows += this.gridsterItem.$item.y - this.newPosition;
            this.gridsterItem.$item.y = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromSouth);
            this.push.pushItems(this.push.fromSouth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.y = this.itemBackup[1];
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.setItemTop(this.gridster.positionYToPixels(this.gridsterItem.$item.y));
                this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemTop(this.top);
        this.setItemHeight(this.height);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.left = e.clientX + this.offsetLeft - this.diffLeft;
        this.width = this.right - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
            this.left = this.right - this.minWidth;
        }
        this.newPosition = this.gridster.pixelsToPositionX(this.left + this.margin, Math.floor);
        if (this.gridsterItem.$item.x !== this.newPosition) {
            this.itemBackup[0] = this.gridsterItem.$item.x;
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols += this.gridsterItem.$item.x - this.newPosition;
            this.gridsterItem.$item.x = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromEast);
            this.push.pushItems(this.push.fromEast, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.x = this.itemBackup[0];
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.setItemLeft(this.gridster.positionXToPixels(this.gridsterItem.$item.x));
                this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemLeft(this.left);
        this.setItemWidth(this.width);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleS = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.height = e.clientY + this.offsetTop - this.diffBottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
        }
        this.bottom = this.top + this.height;
        this.newPosition = this.gridster.pixelsToPositionY(this.bottom, Math.ceil);
        if ((this.gridsterItem.$item.y + this.gridsterItem.$item.rows) !== this.newPosition) {
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows = this.newPosition - this.gridsterItem.$item.y;
            this.pushResize.pushItems(this.pushResize.fromNorth);
            this.push.pushItems(this.push.fromNorth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemHeight(this.height);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.width = e.clientX + this.offsetLeft - this.diffRight - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
        }
        this.right = this.left + this.width;
        this.newPosition = this.gridster.pixelsToPositionX(this.right, Math.ceil);
        if ((this.gridsterItem.$item.x + this.gridsterItem.$item.cols) !== this.newPosition) {
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols = this.newPosition - this.gridsterItem.$item.x;
            this.pushResize.pushItems(this.pushResize.fromWest);
            this.push.pushItems(this.push.fromWest, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemWidth(this.width);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleNW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleN(e);
        this.handleW(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleNE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleN(e);
        this.handleE(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleSW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleS(e);
        this.handleW(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleSE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleS(e);
        this.handleE(e);
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.resizeEnabled = this.gridsterItem.canBeResized();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStartDelay = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        GridsterUtils.checkTouchEvent(e);
        if (!this.gridster.$options.resizable.delayStart) {
            this.dragStart(e);
            return;
        }
        /** @type {?} */
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.resizable.delayStart);
        /** @type {?} */
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        /** @type {?} */
        var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
        /** @type {?} */
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        /** @type {?} */
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        /** @type {?} */
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        /** @type {?} */
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        /**
         * @param {?} eventMove
         * @return {?}
         */
        function cancelMove(eventMove) {
            GridsterUtils.checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        /**
         * @return {?}
         */
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelMouseLeave();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    /**
     * @param {?} top
     * @return {?}
     */
    GridsterResizable.prototype.setItemTop = /**
     * @param {?} top
     * @return {?}
     */
    function (top) {
        this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, top);
    };
    /**
     * @param {?} left
     * @return {?}
     */
    GridsterResizable.prototype.setItemLeft = /**
     * @param {?} left
     * @return {?}
     */
    function (left) {
        this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, left, this.top);
    };
    /**
     * @param {?} height
     * @return {?}
     */
    GridsterResizable.prototype.setItemHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', height + 'px');
    };
    /**
     * @param {?} width
     * @return {?}
     */
    GridsterResizable.prototype.setItemWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', width + 'px');
    };
    GridsterResizable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterResizable.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface },
        { type: GridsterComponentInterface },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return GridsterResizable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterItemComponent = /** @class */ (function () {
    function GridsterItemComponent(el, gridster, renderer, zone) {
        this.renderer = renderer;
        this.zone = zone;
        this.el = el.nativeElement;
        this.$item = {
            cols: -1,
            rows: -1,
            x: -1,
            y: -1,
        };
        this.gridster = gridster;
        this.drag = new GridsterDraggable(this, gridster, this.zone);
        this.resize = new GridsterResizable(this, gridster, this.zone);
    }
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateOptions();
        this.gridster.addItem(this);
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.updateOptions = /**
     * @return {?}
     */
    function () {
        this.$item = GridsterUtils.merge(this.$item, this.item, {
            cols: undefined,
            rows: undefined,
            x: undefined,
            y: undefined,
            dragEnabled: undefined,
            resizeEnabled: undefined,
            compactEnabled: undefined,
            maxItemRows: undefined,
            minItemRows: undefined,
            maxItemCols: undefined,
            minItemCols: undefined,
            maxItemArea: undefined,
            minItemArea: undefined,
        });
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridster.removeItem(this);
        delete this.gridster;
        this.drag.destroy();
        delete this.drag;
        this.resize.destroy();
        delete this.resize;
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.setSize = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'display', this.notPlaced ? '' : 'block');
        this.gridster.gridRenderer.updateItem(this.el, this.$item, this.renderer);
        this.updateItemSize();
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.updateItemSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var top = this.$item.y * this.gridster.curRowHeight;
        /** @type {?} */
        var left = this.$item.x * this.gridster.curColWidth;
        /** @type {?} */
        var width = this.$item.cols * this.gridster.curColWidth - this.gridster.$options.margin;
        /** @type {?} */
        var height = this.$item.rows * this.gridster.curRowHeight - this.gridster.$options.margin;
        if (!this.init && width > 0 && height > 0) {
            this.init = true;
            if (this.item.initCallback) {
                this.item.initCallback(this.item, this);
            }
            if (this.gridster.options.itemInitCallback) {
                this.gridster.options.itemInitCallback(this.item, this);
            }
            if (this.gridster.$options.scrollToNewItems) {
                this.el.scrollIntoView(false);
            }
        }
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            if (this.gridster.options.itemResizeCallback) {
                this.gridster.options.itemResizeCallback(this.item, this);
            }
        }
        this.top = top;
        this.left = left;
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.itemChanged = /**
     * @return {?}
     */
    function () {
        if (this.gridster.options.itemChangeCallback) {
            this.gridster.options.itemChangeCallback(this.item, this);
        }
    };
    /**
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    GridsterItemComponent.prototype.checkItemChanges = /**
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    function (newValue, oldValue) {
        if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
            return;
        }
        if (this.gridster.checkCollision(this.$item)) {
            this.$item.x = oldValue.x || 0;
            this.$item.y = oldValue.y || 0;
            this.$item.cols = oldValue.cols || 1;
            this.$item.rows = oldValue.rows || 1;
            this.setSize();
        }
        else {
            this.item.cols = this.$item.cols;
            this.item.rows = this.$item.rows;
            this.item.x = this.$item.x;
            this.item.y = this.$item.y;
            this.gridster.calculateLayoutDebounce();
            this.itemChanged();
        }
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.canBeDragged = /**
     * @return {?}
     */
    function () {
        return !this.gridster.mobile &&
            (this.$item.dragEnabled === undefined ? this.gridster.$options.draggable.enabled : this.$item.dragEnabled);
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.canBeResized = /**
     * @return {?}
     */
    function () {
        return !this.gridster.mobile &&
            (this.$item.resizeEnabled === undefined ? this.gridster.$options.resizable.enabled : this.$item.resizeEnabled);
    };
    GridsterItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster-item',
                    template: "<ng-content></ng-content>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.s || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-s\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.e || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-e\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.n || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-n\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.w || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-w\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.se || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-se\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.ne || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-ne\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.sw || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-sw\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.nw || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-nw\"></div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-moving,gridster-item.gridster-item-resizing{transition:none;z-index:2;box-shadow:0 0 5px 5px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:n-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:e-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:s-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:w-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}"]
                }] }
    ];
    /** @nocollapse */
    GridsterItemComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: GridsterComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    GridsterItemComponent.propDecorators = {
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GridsterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterPreviewComponent = /** @class */ (function () {
    function GridsterPreviewComponent(el, gridster, renderer) {
        this.renderer = renderer;
        this.el = el.nativeElement;
        this.gridster = gridster;
        this.gridster.previewStyle = this.previewStyle.bind(this);
    }
    /**
     * @return {?}
     */
    GridsterPreviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        delete this.el;
        delete this.gridster.previewStyle;
        delete this.gridster;
    };
    /**
     * @param {?=} drag
     * @return {?}
     */
    GridsterPreviewComponent.prototype.previewStyle = /**
     * @param {?=} drag
     * @return {?}
     */
    function (drag) {
        if (!this.gridster.movingItem) {
            this.renderer.setStyle(this.el, 'display', '');
        }
        else {
            if (this.gridster.compact && drag) {
                this.gridster.compact.checkCompactItem(this.gridster.movingItem);
            }
            this.renderer.setStyle(this.el, 'display', 'block');
            this.gridster.gridRenderer.updateItem(this.el, this.gridster.movingItem, this.renderer);
        }
    };
    GridsterPreviewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster-preview',
                    template: '',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster-preview{position:absolute;display:none;background:rgba(0,0,0,.15)}"]
                }] }
    ];
    /** @nocollapse */
    GridsterPreviewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: GridsterComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return GridsterPreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridsterModule = /** @class */ (function () {
    function GridsterModule() {
    }
    GridsterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        GridsterComponent,
                        GridsterItemComponent,
                        GridsterPreviewComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [GridsterComponent, GridsterItemComponent],
                    providers: [],
                    bootstrap: []
                },] }
    ];
    return GridsterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ncmlkc3RlcjIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbmZpZy5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbmZpZy5jb25zdGFudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyVXRpbHMuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyRW1wdHlDZWxsLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbXBhY3Quc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyUmVuZGVyZXIuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclN3YXAuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyU2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclB1c2guc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyRHJhZ2dhYmxlLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclB1c2hSZXNpemUuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3Rlckl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi9saWIvZ3JpZHN0ZXJQcmV2aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgdHlwZSBncmlkVHlwZXMgPSAnZml0JyB8ICdzY3JvbGxWZXJ0aWNhbCcgfCAnc2Nyb2xsSG9yaXpvbnRhbCcgfCAnZml4ZWQnIHwgJ3ZlcnRpY2FsRml4ZWQnIHwgJ2hvcml6b250YWxGaXhlZCc7XG5leHBvcnQgdHlwZSBkaXNwbGF5R3JpZHMgPSAnYWx3YXlzJyB8ICdvbkRyYWcmUmVzaXplJyB8ICdub25lJztcbmV4cG9ydCB0eXBlIGNvbXBhY3RUeXBlcyA9XG4gICdub25lJ1xuICB8ICdjb21wYWN0VXAnXG4gIHwgJ2NvbXBhY3RMZWZ0J1xuICB8ICdjb21wYWN0VXAmTGVmdCdcbiAgfCAnY29tcGFjdExlZnQmVXAnXG4gIHwgJ2NvbXBhY3RSaWdodCdcbiAgfCAnY29tcGFjdFVwJlJpZ2h0J1xuICB8ICdjb21wYWN0UmlnaHQmVXAnO1xuXG5leHBvcnQgZW51bSBHcmlkVHlwZSB7XG4gIEZpdCA9ICdmaXQnLFxuICBTY3JvbGxWZXJ0aWNhbCA9ICdzY3JvbGxWZXJ0aWNhbCcsXG4gIFNjcm9sbEhvcml6b250YWwgPSAnc2Nyb2xsSG9yaXpvbnRhbCcsXG4gIEZpeGVkID0gJ2ZpeGVkJyxcbiAgVmVydGljYWxGaXhlZCA9ICd2ZXJ0aWNhbEZpeGVkJyxcbiAgSG9yaXpvbnRhbEZpeGVkID0gJ2hvcml6b250YWxGaXhlZCdcbn1cblxuZXhwb3J0IGVudW0gRGlzcGxheUdyaWQge1xuICBBbHdheXMgPSAnYWx3YXlzJyxcbiAgT25EcmFnQW5kUmVzaXplID0gJ29uRHJhZyZSZXNpemUnLFxuICBOb25lID0gJ25vbmUnXG59XG5cbmV4cG9ydCBlbnVtIENvbXBhY3RUeXBlIHtcbiAgTm9uZSA9ICdub25lJyxcbiAgQ29tcGFjdFVwID0gJ2NvbXBhY3RVcCcsXG4gIENvbXBhY3RMZWZ0ID0gJ2NvbXBhY3RMZWZ0JyxcbiAgQ29tcGFjdFVwQW5kTGVmdCA9ICdjb21wYWN0VXAmTGVmdCcsXG4gIENvbXBhY3RMZWZ0QW5kVXAgPSAnY29tcGFjdExlZnQmVXAnLFxuICBDb21wYWN0UmlnaHQgPSAnY29tcGFjdFJpZ2h0JyxcbiAgQ29tcGFjdFVwQW5kUmlnaHQgPSAnY29tcGFjdFVwJlJpZ2h0JyxcbiAgQ29tcGFjdFJpZ2h0QW5kVXAgPSAnY29tcGFjdFJpZ2h0JlVwJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmlkc3RlckNvbmZpZyB7XG4gIGdyaWRUeXBlPzogZ3JpZFR5cGVzO1xuICBmaXhlZENvbFdpZHRoPzogbnVtYmVyO1xuICBmaXhlZFJvd0hlaWdodD86IG51bWJlcjtcbiAga2VlcEZpeGVkSGVpZ2h0SW5Nb2JpbGU/OiBib29sZWFuO1xuICBrZWVwRml4ZWRXaWR0aEluTW9iaWxlPzogYm9vbGVhbjtcbiAgc2V0R3JpZFNpemU/OiBib29sZWFuO1xuICBjb21wYWN0VHlwZT86IGNvbXBhY3RUeXBlcztcbiAgbW9iaWxlQnJlYWtwb2ludD86IG51bWJlcjtcbiAgbWluQ29scz86IG51bWJlcjtcbiAgbWF4Q29scz86IG51bWJlcjtcbiAgbWluUm93cz86IG51bWJlcjtcbiAgbWF4Um93cz86IG51bWJlcjtcbiAgZGVmYXVsdEl0ZW1Db2xzPzogbnVtYmVyO1xuICBkZWZhdWx0SXRlbVJvd3M/OiBudW1iZXI7XG4gIG1heEl0ZW1Db2xzPzogbnVtYmVyO1xuICBtYXhJdGVtUm93cz86IG51bWJlcjtcbiAgbWluSXRlbUNvbHM/OiBudW1iZXI7XG4gIG1pbkl0ZW1Sb3dzPzogbnVtYmVyO1xuICBtaW5JdGVtQXJlYT86IG51bWJlcjtcbiAgbWF4SXRlbUFyZWE/OiBudW1iZXI7XG4gIG1hcmdpbj86IG51bWJlcjtcbiAgb3V0ZXJNYXJnaW4/OiBib29sZWFuO1xuICBvdXRlck1hcmdpblRvcD86IG51bWJlciB8IG51bGw7XG4gIG91dGVyTWFyZ2luUmlnaHQ/OiBudW1iZXIgfCBudWxsO1xuICBvdXRlck1hcmdpbkJvdHRvbT86IG51bWJlciB8IG51bGw7XG4gIG91dGVyTWFyZ2luTGVmdD86IG51bWJlciB8IG51bGw7XG4gIHVzZVRyYW5zZm9ybVBvc2l0aW9uaW5nPzogYm9vbGVhbjtcbiAgc2Nyb2xsU2Vuc2l0aXZpdHk/OiBudW1iZXIgfCBudWxsO1xuICBzY3JvbGxTcGVlZD86IG51bWJlcjtcbiAgaW5pdENhbGxiYWNrPzogKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgZGVzdHJveUNhbGxiYWNrPzogKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2s/OiAoZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xuICBpdGVtQ2hhbmdlQ2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGl0ZW1SZXNpemVDYWxsYmFjaz86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgaXRlbUluaXRDYWxsYmFjaz86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgaXRlbVJlbW92ZWRDYWxsYmFjaz86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgaXRlbVZhbGlkYXRlQ2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBEcmFnZ2FibGU7XG4gIHJlc2l6YWJsZT86IFJlc2l6YWJsZTtcbiAgc3dhcD86IGJvb2xlYW47XG4gIHB1c2hJdGVtcz86IGJvb2xlYW47XG4gIGRpc2FibGVQdXNoT25EcmFnPzogYm9vbGVhbjtcbiAgZGlzYWJsZVB1c2hPblJlc2l6ZT86IGJvb2xlYW47XG4gIGRpc2FibGVBdXRvUG9zaXRpb25PbkNvbmZsaWN0PzogYm9vbGVhbjtcbiAgcHVzaERpcmVjdGlvbnM/OiBQdXNoRGlyZWN0aW9ucztcbiAgcHVzaFJlc2l6ZUl0ZW1zPzogYm9vbGVhbjtcbiAgZGlzcGxheUdyaWQ/OiBkaXNwbGF5R3JpZHM7XG4gIGRpc2FibGVXaW5kb3dSZXNpemU/OiBib29sZWFuO1xuICBkaXNhYmxlV2FybmluZ3M/OiBib29sZWFuO1xuICBzY3JvbGxUb05ld0l0ZW1zPzogYm9vbGVhbjtcbiAgZW5hYmxlRW1wdHlDZWxsQ2xpY2s/OiBib29sZWFuO1xuICBlbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudT86IGJvb2xlYW47XG4gIGVuYWJsZUVtcHR5Q2VsbERyb3A/OiBib29sZWFuO1xuICBlbmFibGVFbXB0eUNlbGxEcmFnPzogYm9vbGVhbjtcbiAgZW1wdHlDZWxsQ2xpY2tDYWxsYmFjaz86IChldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiB2b2lkO1xuICBlbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IHZvaWQ7XG4gIGVtcHR5Q2VsbERyb3BDYWxsYmFjaz86IChldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiB2b2lkO1xuICBlbXB0eUNlbGxEcmFnQ2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcbiAgZW1wdHlDZWxsRHJhZ01heENvbHM/OiBudW1iZXI7XG4gIGVtcHR5Q2VsbERyYWdNYXhSb3dzPzogbnVtYmVyO1xuICBpZ25vcmVNYXJnaW5JblJvdz86IGJvb2xlYW47XG4gIGFwaT86IHtcbiAgICByZXNpemU/OiAoKSA9PiB2b2lkLFxuICAgIG9wdGlvbnNDaGFuZ2VkPzogKCkgPT4gdm9pZCxcbiAgICBnZXROZXh0UG9zc2libGVQb3NpdGlvbj86IChuZXdJdGVtOiBHcmlkc3Rlckl0ZW0pID0+IGJvb2xlYW4sXG4gICAgZ2V0Rmlyc3RQb3NzaWJsZVBvc2l0aW9uPzogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtLFxuICAgIGdldExhc3RQb3NzaWJsZVBvc2l0aW9uPzogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtLFxuICB9O1xuXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdCYXNlIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHN0b3A/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGV2ZW50OiBNb3VzZUV2ZW50KSA9PiBQcm9taXNlPGFueT4gfCB2b2lkO1xuICBzdGFydD86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gIGRlbGF5U3RhcnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ2dhYmxlIGV4dGVuZHMgRHJhZ0Jhc2Uge1xuICBpZ25vcmVDb250ZW50Q2xhc3M/OiBzdHJpbmc7XG4gIGlnbm9yZUNvbnRlbnQ/OiBib29sZWFuO1xuICBkcmFnSGFuZGxlQ2xhc3M/OiBzdHJpbmc7XG4gIGRyb3BPdmVySXRlbXM/OiBib29sZWFuO1xuICBkcm9wT3Zlckl0ZW1zQ2FsbGJhY2s/OiAoc291cmNlOiBHcmlkc3Rlckl0ZW0sIHRhcmdldDogR3JpZHN0ZXJJdGVtLCBncmlkPzogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXphYmxlIGV4dGVuZHMgRHJhZ0Jhc2Uge1xuICBoYW5kbGVzPzoge1xuICAgIHM6IGJvb2xlYW4sXG4gICAgZTogYm9vbGVhbixcbiAgICBuOiBib29sZWFuLFxuICAgIHc6IGJvb2xlYW4sXG4gICAgc2U6IGJvb2xlYW4sXG4gICAgbmU6IGJvb2xlYW4sXG4gICAgc3c6IGJvb2xlYW4sXG4gICAgbnc6IGJvb2xlYW5cbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoRGlyZWN0aW9ucyB7XG4gIG5vcnRoOiBib29sZWFuO1xuICBlYXN0OiBib29sZWFuO1xuICBzb3V0aDogYm9vbGVhbjtcbiAgd2VzdDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7Q29tcGFjdFR5cGUsIERpc3BsYXlHcmlkLCBHcmlkc3RlckNvbmZpZywgR3JpZFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IEdyaWRzdGVyQ29uZmlnU2VydmljZTogR3JpZHN0ZXJDb25maWcgPSB7XG4gIGdyaWRUeXBlOiBHcmlkVHlwZS5GaXQsIC8vICdmaXQnIHdpbGwgZml0IHRoZSBpdGVtcyBpbiB0aGUgY29udGFpbmVyIHdpdGhvdXQgc2Nyb2xsO1xuICAvLyAnc2Nyb2xsVmVydGljYWwnIHdpbGwgZml0IG9uIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGl0ZW1zIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlIHdpZHRoXG4gIC8vICdzY3JvbGxIb3Jpem9udGFsJyB3aWxsIGZpdCBvbiBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBpdGVtcyB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSBoZWlnaHRcbiAgLy8gJ2ZpeGVkJyB3aWxsIHNldCB0aGUgcm93cyBhbmQgY29sdW1ucyBkaW1lbnNpb25zIGJhc2VkIG9uIGZpeGVkQ29sV2lkdGggYW5kIGZpeGVkUm93SGVpZ2h0IG9wdGlvbnNcbiAgLy8gJ3ZlcnRpY2FsRml4ZWQnIHdpbGwgc2V0IHRoZSByb3dzIHRvIGZpeGVkUm93SGVpZ2h0IGFuZCBjb2x1bW5zIHdpZHRoIHdpbGwgZml0IHRoZSBzcGFjZSBhdmFpbGFibGVcbiAgLy8gJ2hvcml6b250YWxGaXhlZCcgd2lsbCBzZXQgdGhlIGNvbHVtbnMgdG8gZml4ZWRDb2xXaWR0aCBhbmQgcm93cyBoZWlnaHQgd2lsbCBmaXQgdGhlIHNwYWNlIGF2YWlsYWJsZVxuICBmaXhlZENvbFdpZHRoOiAyNTAsIC8vIGZpeGVkIGNvbCB3aWR0aCBmb3IgZ3JpZFR5cGU6ICdmaXhlZCdcbiAgZml4ZWRSb3dIZWlnaHQ6IDI1MCwgLy8gZml4ZWQgcm93IGhlaWdodCBmb3IgZ3JpZFR5cGU6ICdmaXhlZCdcbiAga2VlcEZpeGVkSGVpZ2h0SW5Nb2JpbGU6IGZhbHNlLCAvLyBrZWVwIHRoZSBoZWlnaHQgZnJvbSBmaXhlZCBncmlkVHlwZSBpbiBtb2JpbGUgbGF5b3V0XG4gIGtlZXBGaXhlZFdpZHRoSW5Nb2JpbGU6IGZhbHNlLCAvLyBrZWVwIHRoZSB3aWR0aCBmcm9tIGZpeGVkIGdyaWRUeXBlIGluIG1vYmlsZSBsYXlvdXRcbiAgc2V0R3JpZFNpemU6IGZhbHNlLCAvLyBzZXRzIGdyaWQgc2l6ZSBkZXBlbmRpbmcgb24gY29udGVudFxuICBjb21wYWN0VHlwZTogQ29tcGFjdFR5cGUuTm9uZSwgLy8gY29tcGFjdCBpdGVtczogJ25vbmUnIHwgJ2NvbXBhY3RVcCcgfCAnY29tcGFjdExlZnQnIHwgJ2NvbXBhY3RVcCZMZWZ0JyB8ICdjb21wYWN0TGVmdCZVcCdcbiAgbW9iaWxlQnJlYWtwb2ludDogNjQwLCAvLyBpZiB0aGUgc2NyZWVuIGlzIG5vdCB3aWRlciB0aGF0IHRoaXMsIHJlbW92ZSB0aGUgZ3JpZCBsYXlvdXQgYW5kIHN0YWNrIHRoZSBpdGVtc1xuICBtaW5Db2xzOiAxLCAvLyBtaW5pbXVtIGFtb3VudCBvZiBjb2x1bW5zIGluIHRoZSBncmlkXG4gIG1heENvbHM6IDEwMCwgLy8gbWF4aW11bSBhbW91bnQgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZFxuICBtaW5Sb3dzOiAxLCAvLyBtaW5pbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSBncmlkXG4gIG1heFJvd3M6IDEwMCwgLy8gbWF4aW11bSBhbW91bnQgb2Ygcm93cyBpbiB0aGUgZ3JpZFxuICBkZWZhdWx0SXRlbUNvbHM6IDEsIC8vIGRlZmF1bHQgd2lkdGggb2YgYW4gaXRlbSBpbiBjb2x1bW5zXG4gIGRlZmF1bHRJdGVtUm93czogMSwgLy8gZGVmYXVsdCBoZWlnaHQgb2YgYW4gaXRlbSBpbiByb3dzXG4gIG1heEl0ZW1Db2xzOiA1MCwgLy8gbWF4IGl0ZW0gbnVtYmVyIG9mIGNvbHNcbiAgbWF4SXRlbVJvd3M6IDUwLCAvLyBtYXggaXRlbSBudW1iZXIgb2Ygcm93c1xuICBtaW5JdGVtQ29sczogMSwgLy8gbWluIGl0ZW0gbnVtYmVyIG9mIGNvbHVtbnNcbiAgbWluSXRlbVJvd3M6IDEsIC8vIG1pbiBpdGVtIG51bWJlciBvZiByb3dzXG4gIG1pbkl0ZW1BcmVhOiAxLCAvLyBtaW4gaXRlbSBhcmVhOiBjb2xzICogcm93c1xuICBtYXhJdGVtQXJlYTogMjUwMCwgLy8gbWF4IGl0ZW0gYXJlYTogY29scyAqIHJvd3NcbiAgbWFyZ2luOiAxMCwgIC8vIG1hcmdpbiBiZXR3ZWVuIGdyaWQgaXRlbXNcbiAgb3V0ZXJNYXJnaW46IHRydWUsICAvLyBpZiBtYXJnaW5zIHdpbGwgYXBwbHkgdG8gdGhlIHNpZGVzIG9mIHRoZSBjb250YWluZXJcbiAgb3V0ZXJNYXJnaW5Ub3A6IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxuICBvdXRlck1hcmdpblJpZ2h0OiBudWxsLCAvLyBvdmVycmlkZSBvdXRlciBtYXJnaW4gZm9yIGdyaWRcbiAgb3V0ZXJNYXJnaW5Cb3R0b206IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxuICBvdXRlck1hcmdpbkxlZnQ6IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxuICB1c2VUcmFuc2Zvcm1Qb3NpdGlvbmluZzogdHJ1ZSwgLy8gdG9nZ2xlIGJldHdlZW4gdHJhbnNmb3JtIG9yIHRvcC9sZWZ0IHBvc2l0aW9uaW5nIG9mIGl0ZW1zXG4gIHNjcm9sbFNlbnNpdGl2aXR5OiAxMCwgIC8vIG1hcmdpbiBvZiB0aGUgZGFzaGJvYXJkIHdoZXJlIHRvIHN0YXJ0IHNjcm9sbGluZ1xuICBzY3JvbGxTcGVlZDogMjAsICAvLyBob3cgbXVjaCB0byBzY3JvbGwgZWFjaCBtb3VzZSBtb3ZlIHdoZW4gaW4gdGhlIHNjcm9sbFNlbnNpdGl2aXR5IHpvbmVcbiAgaW5pdENhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGNhbGxiYWNrIHRvIGNhbGwgYWZ0ZXIgZ3JpZCBoYXMgaW5pdGlhbGl6ZWQuIEFyZ3VtZW50czogZ3JpZHN0ZXJDb21wb25lbnRcbiAgZGVzdHJveUNhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGNhbGxiYWNrIHRvIGNhbGwgYWZ0ZXIgZ3JpZCBoYXMgZGVzdHJveWVkLiBBcmd1bWVudHM6IGdyaWRzdGVyQ29tcG9uZW50XG4gIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGNhbGxiYWNrIHRvIGNhbGwgYWZ0ZXIgZ3JpZCBoYXMgY2hhbmdlZCBzaXplLiBBcmd1bWVudHM6IGdyaWRzdGVyQ29tcG9uZW50XG4gIGl0ZW1DaGFuZ2VDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBpdGVtIHdoZW4gaXMgY2hhbmdlcyB4LCB5LCByb3dzLCBjb2xzLlxuICAvLyBBcmd1bWVudHM6IGdyaWRzdGVySXRlbSwgZ3JpZHN0ZXJJdGVtQ29tcG9uZW50XG4gIGl0ZW1SZXNpemVDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBpdGVtIHdoZW4gd2lkdGgvaGVpZ2h0IGNoYW5nZXMuXG4gIC8vIEFyZ3VtZW50czogZ3JpZHN0ZXJJdGVtLCBncmlkc3Rlckl0ZW1Db21wb25lbnRcbiAgaXRlbUluaXRDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBpdGVtIHdoZW4gaXMgaW5pdGlhbGl6ZWQuXG4gIC8vIEFyZ3VtZW50czogZ3JpZHN0ZXJJdGVtLCBncmlkc3Rlckl0ZW1Db21wb25lbnRcbiAgaXRlbVJlbW92ZWRDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBpdGVtIHdoZW4gaXMgaW5pdGlhbGl6ZWQuXG4gIC8vIEFyZ3VtZW50czogZ3JpZHN0ZXJJdGVtLCBncmlkc3Rlckl0ZW1Db21wb25lbnRcbiAgaXRlbVZhbGlkYXRlQ2FsbGJhY2s6IHVuZGVmaW5lZCwgIC8vIGNhbGxiYWNrIHRvIGNhbGwgdG8gdmFsaWRhdGUgaXRlbSBwb3NpdGlvbi9zaXplLiBSZXR1cm4gdHJ1ZSBpZiB2YWxpZC5cbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW1cbiAgZW5hYmxlRW1wdHlDZWxsQ2xpY2s6IGZhbHNlLCAvLyBlbmFibGUgZW1wdHkgY2VsbCBjbGljayBldmVudHNcbiAgZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IGZhbHNlLCAvLyBlbmFibGUgZW1wdHkgY2VsbCBjb250ZXh0IG1lbnUgKHJpZ2h0IGNsaWNrKSBldmVudHNcbiAgZW5hYmxlRW1wdHlDZWxsRHJvcDogZmFsc2UsIC8vIGVuYWJsZSBlbXB0eSBjZWxsIGRyb3AgZXZlbnRzXG4gIGVuYWJsZUVtcHR5Q2VsbERyYWc6IGZhbHNlLCAvLyBlbmFibGUgZW1wdHkgY2VsbCBkcmFnIGV2ZW50c1xuICBlbXB0eUNlbGxDbGlja0NhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgY2xpY2sgY2FsbGJhY2tcbiAgZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjazogdW5kZWZpbmVkLCAvLyBlbXB0eSBjZWxsIGNvbnRleHQgbWVudSAocmlnaHQgY2xpY2spIGNhbGxiYWNrXG4gIGVtcHR5Q2VsbERyb3BDYWxsYmFjazogdW5kZWZpbmVkLCAvLyBlbXB0eSBjZWxsIGRyYWcgZHJvcCBjYWxsYmFjay4gSFRNTDUgRHJhZyAmIERyb3BcbiAgZW1wdHlDZWxsRHJhZ0NhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgZHJhZyBhbmQgY3JlYXRlIGl0ZW0gbGlrZSBleGNlbCBjZWxsIHNlbGVjdGlvblxuICBlbXB0eUNlbGxEcmFnTWF4Q29sczogNTAsIC8vIGxpbWl0IGVtcHR5IGNlbGwgZHJhZyBtYXggY29sc1xuICBlbXB0eUNlbGxEcmFnTWF4Um93czogNTAsIC8vIGxpbWl0IGVtcHR5IGNlbGwgZHJhZyBtYXggcm93c1xuICAvLyBBcmd1bWVudHM6IGV2ZW50LCBncmlkc3Rlckl0ZW17eCwgeSwgcm93czogZGVmYXVsdEl0ZW1Sb3dzLCBjb2xzOiBkZWZhdWx0SXRlbUNvbHN9XG4gIGlnbm9yZU1hcmdpbkluUm93OiBmYWxzZSwgLy8gaWdub3JlIHRoZSBnYXAgYmV0d2VlbiByb3dzIGZvciBpdGVtcyB3aGljaCBzcGFuIG11bHRpcGxlIHJvd3MgKHNlZSAjMTYyLCAjMjI0KVxuICBkcmFnZ2FibGU6IHtcbiAgICBkZWxheVN0YXJ0OiAwLCAvLyBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHN0YXJ0IG9mIGRyYWcsIHVzZWZ1bCBmb3IgdG91Y2ggaW50ZXJhY3Rpb25cbiAgICBlbmFibGVkOiBmYWxzZSwgLy8gZW5hYmxlL2Rpc2FibGUgZHJhZ2dhYmxlIGl0ZW1zXG4gICAgaWdub3JlQ29udGVudENsYXNzOiAnZ3JpZHN0ZXItaXRlbS1jb250ZW50JywgLy8gZGVmYXVsdCBjb250ZW50IGNsYXNzIHRvIGlnbm9yZSB0aGUgZHJhZyBldmVudCBmcm9tXG4gICAgaWdub3JlQ29udGVudDogZmFsc2UsIC8vIGlmIHRydWUgZHJhZyB3aWxsIHN0YXJ0IG9ubHkgZnJvbSBlbGVtZW50cyBmcm9tIGBkcmFnSGFuZGxlQ2xhc3NgXG4gICAgZHJhZ0hhbmRsZUNsYXNzOiAnZHJhZy1oYW5kbGVyJywgLy8gZHJhZyBldmVudCBvbmx5IGZyb20gdGhpcyBjbGFzcy4gSWYgYGlnbm9yZUNvbnRlbnRgIGlzIHRydWUuXG4gICAgc3RvcDogdW5kZWZpbmVkLCAvLyBjYWxsYmFjayB3aGVuIGRyYWdnaW5nIGFuIGl0ZW0gc3RvcHMuICBBY2NlcHRzIFByb21pc2UgcmV0dXJuIHRvIGNhbmNlbC9hcHByb3ZlIGRyYWcuXG4gICAgc3RhcnQ6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgd2hlbiBkcmFnZ2luZyBhbiBpdGVtIHN0YXJ0cy5cbiAgICAvLyBBcmd1bWVudHM6IGl0ZW0sIGdyaWRzdGVySXRlbSwgZXZlbnRcbiAgICBkcm9wT3Zlckl0ZW1zOiBmYWxzZSwgLy8gZW5hYmxlIGRyb3AgaXRlbXMgb24gdG9wIG90aGVyIGl0ZW1cbiAgICBkcm9wT3Zlckl0ZW1zQ2FsbGJhY2s6IHVuZGVmaW5lZCAvLyBjYWxsYmFjayBvbiBkcm9wIG92ZXIgYW5vdGhlciBpdGVtXG4gICAgLy8gQXJndW1lbnRzOiBzb3VyY2UsIHRhcmdldCwgZ3JpZENvbXBvbmVudFxuICB9LFxuICByZXNpemFibGU6IHtcbiAgICBkZWxheVN0YXJ0OiAwLCAvLyBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHN0YXJ0IG9mIHJlc2l6ZSwgdXNlZnVsIGZvciB0b3VjaCBpbnRlcmFjdGlvblxuICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBlbmFibGUvZGlzYWJsZSByZXNpemFibGUgaXRlbXNcbiAgICBoYW5kbGVzOiB7XG4gICAgICBzOiB0cnVlLFxuICAgICAgZTogdHJ1ZSxcbiAgICAgIG46IHRydWUsXG4gICAgICB3OiB0cnVlLFxuICAgICAgc2U6IHRydWUsXG4gICAgICBuZTogdHJ1ZSxcbiAgICAgIHN3OiB0cnVlLFxuICAgICAgbnc6IHRydWVcbiAgICB9LCAvLyByZXNpemFibGUgZWRnZXMgb2YgYW4gaXRlbVxuICAgIHN0b3A6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgd2hlbiByZXNpemluZyBhbiBpdGVtIHN0b3BzLiBBY2NlcHRzIFByb21pc2UgcmV0dXJuIHRvIGNhbmNlbC9hcHByb3ZlIHJlc2l6ZS5cbiAgICBzdGFydDogdW5kZWZpbmVkIC8vIGNhbGxiYWNrIHdoZW4gcmVzaXppbmcgYW4gaXRlbSBzdGFydHMuXG4gICAgLy8gQXJndW1lbnRzOiBpdGVtLCBncmlkc3Rlckl0ZW0sIGV2ZW50XG4gIH0sXG4gIHN3YXA6IHRydWUsIC8vIGFsbG93IGl0ZW1zIHRvIHN3aXRjaCBwb3NpdGlvbiBpZiBkcm9wIG9uIHRvcCBvZiBhbm90aGVyXG4gIHB1c2hJdGVtczogZmFsc2UsIC8vIHB1c2ggaXRlbXMgd2hlbiByZXNpemluZyBhbmQgZHJhZ2dpbmdcbiAgZGlzYWJsZVB1c2hPbkRyYWc6IGZhbHNlLCAvLyBkaXNhYmxlIHB1c2ggb24gZHJhZ1xuICBkaXNhYmxlUHVzaE9uUmVzaXplOiBmYWxzZSwgLy8gZGlzYWJsZSBwdXNoIG9uIHJlc2l6ZVxuICBwdXNoRGlyZWN0aW9uczoge25vcnRoOiB0cnVlLCBlYXN0OiB0cnVlLCBzb3V0aDogdHJ1ZSwgd2VzdDogdHJ1ZX0sIC8vIGNvbnRyb2wgdGhlIGRpcmVjdGlvbnMgaXRlbXMgYXJlIHB1c2hlZFxuICBwdXNoUmVzaXplSXRlbXM6IGZhbHNlLCAvLyBvbiByZXNpemUgb2YgaXRlbSB3aWxsIHNocmluayBhZGphY2VudCBpdGVtc1xuICBkaXNwbGF5R3JpZDogRGlzcGxheUdyaWQuT25EcmFnQW5kUmVzaXplLCAvLyBkaXNwbGF5IGJhY2tncm91bmQgZ3JpZCBvZiByb3dzIGFuZCBjb2x1bW5zXG4gIGRpc2FibGVXaW5kb3dSZXNpemU6IGZhbHNlLCAvLyBkaXNhYmxlIHRoZSB3aW5kb3cgb24gcmVzaXplIGxpc3RlbmVyLiBUaGlzIHdpbGwgc3RvcCBncmlkIHRvIHJlY2FsY3VsYXRlIG9uIHdpbmRvdyByZXNpemUuXG4gIGRpc2FibGVXYXJuaW5nczogZmFsc2UsIC8vIGRpc2FibGUgY29uc29sZSBsb2cgd2FybmluZ3MgYWJvdXQgbWlzcGxhY2VtZW50IG9mIGdyaWQgaXRlbXNcbiAgc2Nyb2xsVG9OZXdJdGVtczogZmFsc2UsIC8vIHNjcm9sbCB0byBuZXcgaXRlbXMgcGxhY2VkIGluIGEgc2Nyb2xsYWJsZSB2aWV3XG4gIGRpc2FibGVBdXRvUG9zaXRpb25PbkNvbmZsaWN0OiBmYWxzZSAgLy8gZGlzYWJsZSBhdXRvLXBvc2l0aW9uIG9mIGl0ZW1zIG9uIGNvbmZsaWN0IHN0YXRlXG59O1xuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJVdGlscyB7XG5cbiAgc3RhdGljIG1lcmdlKG9iajE6IGFueSwgb2JqMjogYW55LCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHAgaW4gb2JqMikge1xuICAgICAgaWYgKG9iajJbcF0gIT09IHZvaWQgMCAmJiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqMltwXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBvYmoxW3BdID0gR3JpZHN0ZXJVdGlscy5tZXJnZShvYmoxW3BdLCBvYmoyW3BdLCBwcm9wZXJ0aWVzW3BdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmoxW3BdID0gb2JqMltwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmoxO1xuICB9XG5cbiAgc3RhdGljIGRlYm91bmNlKGZ1bmM6IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcbiAgICBsZXQgdGltZW91dDogYW55O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH07XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja1RvdWNoRXZlbnQoZTogYW55KTogdm9pZCB7XG4gICAgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkICYmIGUudG91Y2hlcykge1xuICAgICAgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGUuY2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBlLmNsaWVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBlLmNsaWVudFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGUuY2xpZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2hlY2tDb250ZW50Q2xhc3NGb3JFdmVudChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UsIGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuaWdub3JlQ29udGVudCkge1xuICAgICAgaWYgKCFHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKGUudGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQsIGdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5kcmFnSGFuZGxlQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzcyhlLnRhcmdldCwgZS5jdXJyZW50VGFyZ2V0LCBncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuaWdub3JlQ29udGVudENsYXNzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UsIGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKGUudGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQsIGdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5pZ25vcmVDb250ZW50Q2xhc3MpXG4gICAgICB8fCBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKGUudGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQsIGdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5kcmFnSGFuZGxlQ2xhc3MpO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzKHRhcmdldDogYW55LCBjdXJyZW50OiBhbnksIGNvbnRlbnRDbGFzczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdjbGFzcycpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKGNvbnRlbnRDbGFzcykgPiAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKHRhcmdldC5wYXJlbnROb2RlLCBjdXJyZW50LCBjb250ZW50Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjb21wYXJlSXRlbXMoYTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pOiBudW1iZXIge1xuICAgIGlmIChhLnkgPiBiLnkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEueSA8IGIueSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhLnggPiBiLngpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0dyaWRzdGVyQ29uZmlnU30gZnJvbSAnLi9ncmlkc3RlckNvbmZpZ1MuaW50ZXJmYWNlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R3JpZHN0ZXJFbXB0eUNlbGx9IGZyb20gJy4vZ3JpZHN0ZXJFbXB0eUNlbGwuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcGFjdH0gZnJvbSAnLi9ncmlkc3RlckNvbXBhY3Quc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29uZmlnfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlclJlbmRlcmVyfSBmcm9tICcuL2dyaWRzdGVyUmVuZGVyZXIuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSB7XG4gICRvcHRpb25zOiBHcmlkc3RlckNvbmZpZ1M7XG4gIGdyaWQ6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XG4gIGNoZWNrQ29sbGlzaW9uOiAoaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuO1xuICBwb3NpdGlvblhUb1BpeGVsczogKHg6IG51bWJlcikgPT4gbnVtYmVyO1xuICBwaXhlbHNUb1Bvc2l0aW9uWDogKHg6IG51bWJlciwgcm91bmRpbmdNZXRob2Q6ICh4OiBudW1iZXIpID0+IG51bWJlciwgbm9MaW1pdD86IGJvb2xlYW4pID0+IG51bWJlcjtcbiAgcG9zaXRpb25ZVG9QaXhlbHM6ICh5OiBudW1iZXIpID0+IG51bWJlcjtcbiAgcGl4ZWxzVG9Qb3NpdGlvblk6ICh5OiBudW1iZXIsIHJvdW5kaW5nTWV0aG9kOiAoeDogbnVtYmVyKSA9PiBudW1iZXIsIG5vTGltaXQ/OiBib29sZWFuKSA9PiBudW1iZXI7XG4gIGZpbmRJdGVtV2l0aEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW47XG4gIGZpbmRJdGVtc1dpdGhJdGVtOiAoaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBjaGVja0dyaWRDb2xsaXNpb246IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IGJvb2xlYW47XG4gIGVsOiBhbnk7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGdyaWRSZW5kZXJlcjogR3JpZHN0ZXJSZW5kZXJlcjtcbiAgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcbiAgY2FsY3VsYXRlTGF5b3V0RGVib3VuY2U6ICgpID0+IHZvaWQ7XG4gIHVwZGF0ZUdyaWQ6ICgpID0+IHZvaWQ7XG4gIG1vdmluZ0l0ZW06IEdyaWRzdGVySXRlbSB8IG51bGw7XG4gIGFkZEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIHJlbW92ZUl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIHByZXZpZXdTdHlsZTogKGRyYWc/OiBib29sZWFuKSA9PiB2b2lkO1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIGN1cldpZHRoOiBudW1iZXI7XG4gIGN1ckhlaWdodDogbnVtYmVyO1xuICBjb2x1bW5zOiBudW1iZXI7XG4gIHJvd3M6IG51bWJlcjtcbiAgY3VyQ29sV2lkdGg6IG51bWJlcjtcbiAgY3VyUm93SGVpZ2h0OiBudW1iZXI7XG4gIHdpbmRvd1Jlc2l6ZTogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgc2V0R3JpZERpbWVuc2lvbnM6ICgoKSA9PiB2b2lkKTtcbiAgZHJhZ0luUHJvZ3Jlc3M6IGJvb2xlYW47XG4gIGVtcHR5Q2VsbDogR3JpZHN0ZXJFbXB0eUNlbGw7XG4gIGNvbXBhY3Q6IEdyaWRzdGVyQ29tcGFjdDtcbiAgem9uZTogTmdab25lO1xuICBncmlkUm93czogQXJyYXk8bnVtYmVyPjtcbiAgZ3JpZENvbHVtbnM6IEFycmF5PG51bWJlcj47XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyVXRpbHN9IGZyb20gJy4vZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJFbXB0eUNlbGwge1xuICBpbml0aWFsSXRlbTogR3JpZHN0ZXJJdGVtIHwgbnVsbDtcbiAgZW1wdHlDZWxsQ2xpY2s6IEZ1bmN0aW9uIHwgbnVsbDtcbiAgZW1wdHlDZWxsQ2xpY2tUb3VjaDogRnVuY3Rpb24gfCBudWxsO1xuICBlbXB0eUNlbGxDb250ZXh0TWVudTogRnVuY3Rpb24gfCBudWxsO1xuICBlbXB0eUNlbGxEcm9wOiBGdW5jdGlvbiB8IG51bGw7XG4gIGVtcHR5Q2VsbERyYWc6IEZ1bmN0aW9uIHwgbnVsbDtcbiAgZW1wdHlDZWxsRHJhZ1RvdWNoOiBGdW5jdGlvbiB8IG51bGw7XG4gIGVtcHR5Q2VsbE1Nb3ZlOiBGdW5jdGlvbjtcbiAgZW1wdHlDZWxsTU1vdmVUb3VjaDogRnVuY3Rpb247XG4gIGVtcHR5Q2VsbFVwOiBGdW5jdGlvbjtcbiAgZW1wdHlDZWxsVXBUb3VjaDogRnVuY3Rpb247XG4gIGVtcHR5Q2VsbE1vdmU6IEZ1bmN0aW9uIHwgbnVsbDtcbiAgZW1wdHlDZWxsRXhpdDogRnVuY3Rpb24gfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSB7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmluaXRpYWxJdGVtO1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW07XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBpZiAodGhpcy5lbXB0eUNlbGxFeGl0KSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbEV4aXQoKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljayAmJiAhdGhpcy5lbXB0eUNlbGxDbGljayAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjaykge1xuICAgICAgdGhpcy5lbXB0eUNlbGxDbGljayA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICdjbGljaycsIHRoaXMuZW1wdHlDZWxsQ2xpY2tDYi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ2xpY2tUb3VjaCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICd0b3VjaGVuZCcsIHRoaXMuZW1wdHlDZWxsQ2xpY2tDYi5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrICYmIHRoaXMuZW1wdHlDZWxsQ2xpY2sgJiYgdGhpcy5lbXB0eUNlbGxDbGlja1RvdWNoKSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrKCk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrVG91Y2goKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ2xpY2sgPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eUNlbGxDbGlja1RvdWNoID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnUgJiYgIXRoaXMuZW1wdHlDZWxsQ29udGV4dE1lbnUgJiZcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51ID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ2NvbnRleHRtZW51JywgdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudUNiLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnUgJiYgdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudSkge1xuICAgICAgdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudSgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudSA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyb3AgJiYgIXRoaXMuZW1wdHlDZWxsRHJvcCAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrKSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyb3AgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnZHJvcCcsIHRoaXMuZW1wdHlDZWxsRHJhZ0Ryb3AuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmdyaWRzdGVyLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5Q2VsbE1vdmUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnZHJhZ292ZXInLCB0aGlzLmVtcHR5Q2VsbERyYWdPdmVyLmJpbmQodGhpcykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbEV4aXQgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJvcCAmJiB0aGlzLmVtcHR5Q2VsbERyb3AgJiYgdGhpcy5lbXB0eUNlbGxNb3ZlICYmIHRoaXMuZW1wdHlDZWxsRXhpdCkge1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcm9wKCk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbE1vdmUoKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxNb3ZlID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJvcCA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5Q2VsbEV4aXQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnICYmICF0aGlzLmVtcHR5Q2VsbERyYWcgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjaykge1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ21vdXNlZG93bicsIHRoaXMuZW1wdHlDZWxsTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnVG91Y2ggPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAndG91Y2hzdGFydCcsIHRoaXMuZW1wdHlDZWxsTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZyAmJiB0aGlzLmVtcHR5Q2VsbERyYWcgJiYgdGhpcy5lbXB0eUNlbGxEcmFnVG91Y2gpIHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJhZygpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnVG91Y2goKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJhZyA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZW1wdHlDZWxsQ2xpY2tDYihlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtIHx8IEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3NGb3JFbXB0eUNlbGxDbGlja0V2ZW50KHRoaXMuZ3JpZHN0ZXIsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayhlLCBpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5ncmlkc3Rlci5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVtcHR5Q2VsbENvbnRleHRNZW51Q2IoZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSB8fCBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudCh0aGlzLmdyaWRzdGVyLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjaykge1xuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2soZSwgaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuZ3JpZHN0ZXIuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlbXB0eUNlbGxEcmFnRHJvcChlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrKGUsIGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVyLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZW1wdHlDZWxsRHJhZ092ZXIoZTogYW55KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGUpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcbiAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gIH1cblxuICBlbXB0eUNlbGxNb3VzZURvd24oZTogYW55KTogdm9pZCB7XG4gICAgaWYgKEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3NGb3JFbXB0eUNlbGxDbGlja0V2ZW50KHRoaXMuZ3JpZHN0ZXIsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcbiAgICBjb25zdCBsZWZ0TW91c2VCdXR0b25Db2RlID0gMTtcbiAgICBpZiAoIWl0ZW0gfHwgZS5idXR0b25zICE9PSBsZWZ0TW91c2VCdXR0b25Db2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICB0aGlzLmdyaWRzdGVyLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5lbXB0eUNlbGxNTW92ZSA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnbW91c2Vtb3ZlJywgdGhpcy5lbXB0eUNlbGxNb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbE1Nb3ZlVG91Y2ggPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3RvdWNobW92ZScsIHRoaXMuZW1wdHlDZWxsTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1wdHlDZWxsVXAgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ21vdXNldXAnLCB0aGlzLmVtcHR5Q2VsbE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lbXB0eUNlbGxVcFRvdWNoID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICd0b3VjaGVuZCcsIHRoaXMuZW1wdHlDZWxsTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGVtcHR5Q2VsbE1vdXNlTW92ZShlOiBhbnkpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSwgdGhpcy5pbml0aWFsSXRlbSk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gaXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICB9XG5cbiAgZW1wdHlDZWxsTW91c2VVcChlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmVtcHR5Q2VsbE1Nb3ZlKCk7XG4gICAgdGhpcy5lbXB0eUNlbGxNTW92ZVRvdWNoKCk7XG4gICAgdGhpcy5lbXB0eUNlbGxVcCgpO1xuICAgIHRoaXMuZW1wdHlDZWxsVXBUb3VjaCgpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlLCB0aGlzLmluaXRpYWxJdGVtKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gaXRlbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcmFnQ2FsbGJhY2sgJiYgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrKGUsIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsSXRlbSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlcikge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ3JpZHN0ZXIuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZTogYW55LCBvbGRJdGVtPzogR3JpZHN0ZXJJdGVtIHwgbnVsbCk6IEdyaWRzdGVySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZ3JpZHN0ZXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCArIHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsTGVmdCAtIHJlY3QubGVmdCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgKyB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbFRvcCAtIHJlY3QudG9wIC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW47XG4gICAgY29uc3QgaXRlbTogR3JpZHN0ZXJJdGVtID0ge1xuICAgICAgeDogdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWCh4LCBNYXRoLmZsb29yLCB0cnVlKSxcbiAgICAgIHk6IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblkoeSwgTWF0aC5mbG9vciwgdHJ1ZSksXG4gICAgICBjb2xzOiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRlZmF1bHRJdGVtQ29scyxcbiAgICAgIHJvd3M6IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZGVmYXVsdEl0ZW1Sb3dzXG4gICAgfTtcbiAgICBpZiAob2xkSXRlbSkge1xuICAgICAgaXRlbS5jb2xzID0gTWF0aC5taW4oTWF0aC5hYnMob2xkSXRlbS54IC0gaXRlbS54KSArIDEsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW1wdHlDZWxsRHJhZ01heENvbHMpO1xuICAgICAgaXRlbS5yb3dzID0gTWF0aC5taW4oTWF0aC5hYnMob2xkSXRlbS55IC0gaXRlbS55KSArIDEsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW1wdHlDZWxsRHJhZ01heFJvd3MpO1xuICAgICAgaWYgKG9sZEl0ZW0ueCA8IGl0ZW0ueCkge1xuICAgICAgICBpdGVtLnggPSBvbGRJdGVtLng7XG4gICAgICB9IGVsc2UgaWYgKG9sZEl0ZW0ueCAtIGl0ZW0ueCA+IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW1wdHlDZWxsRHJhZ01heENvbHMgLSAxKSB7XG4gICAgICAgIGl0ZW0ueCA9IHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA/IHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbS54IDogMDtcbiAgICAgIH1cbiAgICAgIGlmIChvbGRJdGVtLnkgPCBpdGVtLnkpIHtcbiAgICAgICAgaXRlbS55ID0gb2xkSXRlbS55O1xuICAgICAgfSBlbHNlIGlmIChvbGRJdGVtLnkgLSBpdGVtLnkgPiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVtcHR5Q2VsbERyYWdNYXhSb3dzIC0gMSkge1xuICAgICAgICBpdGVtLnkgPSB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPyB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0ueSA6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtDb21wYWN0VHlwZX0gZnJvbSAnLi9ncmlkc3RlckNvbmZpZy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJDb21wYWN0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkge1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgfVxuXG4gIGNoZWNrQ29tcGFjdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSAhPT0gQ29tcGFjdFR5cGUuTm9uZSkge1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RVcCkge1xuICAgICAgICB0aGlzLmNoZWNrQ29tcGFjdFVwKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RMZWZ0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0TGVmdCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0VXBBbmRMZWZ0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0VXAoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RMZWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RMZWZ0QW5kVXApIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RMZWZ0KCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0VXAoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdFJpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0UmlnaHQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdFVwQW5kUmlnaHQpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RVcCgpO1xuICAgICAgICB0aGlzLmNoZWNrQ29tcGFjdFJpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RSaWdodEFuZFVwKSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0UmlnaHQoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RVcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29tcGFjdEl0ZW0oaXRlbTogR3JpZHN0ZXJJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgIT09IENvbXBhY3RUeXBlLk5vbmUpIHtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0VXApIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0TGVmdCkge1xuICAgICAgICB0aGlzLm1vdmVMZWZ0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdFVwQW5kTGVmdCkge1xuICAgICAgICB0aGlzLm1vdmVVcFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICAgIHRoaXMubW92ZUxlZnRUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0TGVmdEFuZFVwKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnRUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgICB0aGlzLm1vdmVVcFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RVcEFuZFJpZ2h0KSB7XG4gICAgICAgIHRoaXMubW92ZVVwVGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHRUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29tcGFjdFVwKCk6IHZvaWQge1xuICAgIGxldCB3aWRnZXRNb3ZlZFVwID0gZmFsc2UsIHdpZGdldDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBtb3ZlZDogYm9vbGVhbjtcbiAgICBjb25zdCBsID0gdGhpcy5ncmlkc3Rlci5ncmlkLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5ncmlkc3Rlci5ncmlkW2ldO1xuICAgICAgaWYgKHdpZGdldC4kaXRlbS5jb21wYWN0RW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBtb3ZlZCA9IHRoaXMubW92ZVVwVGlsbENvbGxpc2lvbih3aWRnZXQuJGl0ZW0pO1xuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIHdpZGdldE1vdmVkVXAgPSB0cnVlO1xuICAgICAgICB3aWRnZXQuaXRlbS55ID0gd2lkZ2V0LiRpdGVtLnk7XG4gICAgICAgIHdpZGdldC5pdGVtQ2hhbmdlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2lkZ2V0TW92ZWRVcCkge1xuICAgICAgdGhpcy5jaGVja0NvbXBhY3QoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlVXBUaWxsQ29sbGlzaW9uKGl0ZW06IEdyaWRzdGVySXRlbSk6IGJvb2xlYW4ge1xuICAgIGl0ZW0ueSAtPSAxO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGl0ZW0pKSB7XG4gICAgICBpdGVtLnkgKz0gMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlVXBUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb21wYWN0TGVmdCgpOiB2b2lkIHtcbiAgICBsZXQgd2lkZ2V0TW92ZWRVcCA9IGZhbHNlLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgbW92ZWQ6IGJvb2xlYW47XG4gICAgY29uc3QgbCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZFtpXTtcbiAgICAgIGlmICh3aWRnZXQuJGl0ZW0uY29tcGFjdEVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbW92ZWQgPSB0aGlzLm1vdmVMZWZ0VGlsbENvbGxpc2lvbih3aWRnZXQuJGl0ZW0pO1xuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIHdpZGdldE1vdmVkVXAgPSB0cnVlO1xuICAgICAgICB3aWRnZXQuaXRlbS54ID0gd2lkZ2V0LiRpdGVtLng7XG4gICAgICAgIHdpZGdldC5pdGVtQ2hhbmdlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2lkZ2V0TW92ZWRVcCkge1xuICAgICAgdGhpcy5jaGVja0NvbXBhY3QoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbXBhY3RSaWdodCgpOiB2b2lkIHtcbiAgICBsZXQgd2lkZ2V0TW92ZWRVcCA9IGZhbHNlLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgbW92ZWQ6IGJvb2xlYW47XG4gICAgY29uc3QgbCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZFtpXTtcbiAgICAgIGlmICh3aWRnZXQuJGl0ZW0uY29tcGFjdEVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbW92ZWQgPSB0aGlzLm1vdmVSaWdodFRpbGxDb2xsaXNpb24od2lkZ2V0LiRpdGVtKTtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICB3aWRnZXRNb3ZlZFVwID0gdHJ1ZTtcbiAgICAgICAgd2lkZ2V0Lml0ZW0ueCA9IHdpZGdldC4kaXRlbS54O1xuICAgICAgICB3aWRnZXQuaXRlbUNoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpZGdldE1vdmVkVXApIHtcbiAgICAgIHRoaXMuY2hlY2tDb21wYWN0KCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZUxlZnRUaWxsQ29sbGlzaW9uKGl0ZW06IEdyaWRzdGVySXRlbSk6IGJvb2xlYW4ge1xuICAgIGl0ZW0ueCAtPSAxO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGl0ZW0pKSB7XG4gICAgICBpdGVtLnggKz0gMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlTGVmdFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBtb3ZlUmlnaHRUaWxsQ29sbGlzaW9uKGl0ZW0pIHtcbiAgICBpdGVtLnggKz0gMTtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihpdGVtKSkge1xuICAgICAgaXRlbS54IC09IDE7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVJpZ2h0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRUeXBlfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSB7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICB9XG5cbiAgdXBkYXRlSXRlbShlbDogYW55LCBpdGVtOiBHcmlkc3Rlckl0ZW0sIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5tb2JpbGUpIHtcbiAgICAgIHRoaXMuY2xlYXJDZWxsUG9zaXRpb24ocmVuZGVyZXIsIGVsKTtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmtlZXBGaXhlZEhlaWdodEluTW9iaWxlKSB7XG4gICAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnaGVpZ2h0JywgKGl0ZW0ucm93cyAqIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZml4ZWRSb3dIZWlnaHQpICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ2hlaWdodCcsICh0aGlzLmdyaWRzdGVyLmN1cldpZHRoIC8gMiAqIGl0ZW0ucm93cykgKyAncHgnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmtlZXBGaXhlZFdpZHRoSW5Nb2JpbGUpIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd3aWR0aCcsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZml4ZWRDb2xXaWR0aCArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd3aWR0aCcsICcnKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdtYXJnaW4tYm90dG9tJywgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4gKyAncHgnKTtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnbWFyZ2luLXJpZ2h0JywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoICogaXRlbS54KTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ICogaXRlbS55KTtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAqIGl0ZW0uY29scyAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ICogaXRlbS5yb3dzIC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4pO1xuICAgICAgLy8gc2V0IHRoZSBjZWxsIHN0eWxlXG4gICAgICB0aGlzLnNldENlbGxQb3NpdGlvbihyZW5kZXJlciwgZWwsIHgsIHkpO1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG4gICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgbGV0IG1hcmdpbkJvdHRvbTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgbWFyZ2luUmlnaHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIucm93cyA9PT0gaXRlbS5yb3dzICsgaXRlbS55KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW5Cb3R0b20gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW5Cb3R0b20gKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbiArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNvbHVtbnMgPT09IGl0ZW0uY29scyArIGl0ZW0ueCkge1xuICAgICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luQm90dG9tICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodCA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW5SaWdodCArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4gKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ21hcmdpbi1ib3R0b20nLCBtYXJnaW5Cb3R0b20pO1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdtYXJnaW4tcmlnaHQnLCBtYXJnaW5SaWdodCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlR3JpZHN0ZXIoKSB7XG4gICAgbGV0IGFkZENsYXNzID0gJyc7XG4gICAgbGV0IHJlbW92ZUNsYXNzMSA9ICcnO1xuICAgIGxldCByZW1vdmVDbGFzczIgPSAnJztcbiAgICBsZXQgcmVtb3ZlQ2xhc3MzID0gJyc7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZ3JpZFR5cGUgPT09IEdyaWRUeXBlLkZpdCkge1xuICAgICAgYWRkQ2xhc3MgPSBHcmlkVHlwZS5GaXQ7XG4gICAgICByZW1vdmVDbGFzczEgPSBHcmlkVHlwZS5TY3JvbGxWZXJ0aWNhbDtcbiAgICAgIHJlbW92ZUNsYXNzMiA9IEdyaWRUeXBlLlNjcm9sbEhvcml6b250YWw7XG4gICAgICByZW1vdmVDbGFzczMgPSBHcmlkVHlwZS5GaXhlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZ3JpZFR5cGUgPT09IEdyaWRUeXBlLlNjcm9sbFZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCA9IHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGg7XG4gICAgICBhZGRDbGFzcyA9IEdyaWRUeXBlLlNjcm9sbFZlcnRpY2FsO1xuICAgICAgcmVtb3ZlQ2xhc3MxID0gR3JpZFR5cGUuRml0O1xuICAgICAgcmVtb3ZlQ2xhc3MyID0gR3JpZFR5cGUuU2Nyb2xsSG9yaXpvbnRhbDtcbiAgICAgIHJlbW92ZUNsYXNzMyA9IEdyaWRUeXBlLkZpeGVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5ncmlkVHlwZSA9PT0gR3JpZFR5cGUuU2Nyb2xsSG9yaXpvbnRhbCkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCA9IHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0O1xuICAgICAgYWRkQ2xhc3MgPSBHcmlkVHlwZS5TY3JvbGxIb3Jpem9udGFsO1xuICAgICAgcmVtb3ZlQ2xhc3MxID0gR3JpZFR5cGUuRml0O1xuICAgICAgcmVtb3ZlQ2xhc3MyID0gR3JpZFR5cGUuU2Nyb2xsVmVydGljYWw7XG4gICAgICByZW1vdmVDbGFzczMgPSBHcmlkVHlwZS5GaXhlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZ3JpZFR5cGUgPT09IEdyaWRUeXBlLkZpeGVkKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5maXhlZENvbFdpZHRoICtcbiAgICAgICAgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuaWdub3JlTWFyZ2luSW5Sb3cgPyAwIDogdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4pO1xuICAgICAgdGhpcy5ncmlkc3Rlci5jdXJSb3dIZWlnaHQgPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmZpeGVkUm93SGVpZ2h0ICtcbiAgICAgICAgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuaWdub3JlTWFyZ2luSW5Sb3cgPyAwIDogdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4pO1xuICAgICAgYWRkQ2xhc3MgPSBHcmlkVHlwZS5GaXhlZDtcbiAgICAgIHJlbW92ZUNsYXNzMSA9IEdyaWRUeXBlLkZpdDtcbiAgICAgIHJlbW92ZUNsYXNzMiA9IEdyaWRUeXBlLlNjcm9sbFZlcnRpY2FsO1xuICAgICAgcmVtb3ZlQ2xhc3MzID0gR3JpZFR5cGUuU2Nyb2xsSG9yaXpvbnRhbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZ3JpZFR5cGUgPT09IEdyaWRUeXBlLlZlcnRpY2FsRml4ZWQpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5maXhlZFJvd0hlaWdodCArXG4gICAgICAgICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmlnbm9yZU1hcmdpbkluUm93ID8gMCA6IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luKTtcbiAgICAgIGFkZENsYXNzID0gR3JpZFR5cGUuU2Nyb2xsVmVydGljYWw7XG4gICAgICByZW1vdmVDbGFzczEgPSBHcmlkVHlwZS5GaXQ7XG4gICAgICByZW1vdmVDbGFzczIgPSBHcmlkVHlwZS5TY3JvbGxIb3Jpem9udGFsO1xuICAgICAgcmVtb3ZlQ2xhc3MzID0gR3JpZFR5cGUuRml4ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmdyaWRUeXBlID09PSBHcmlkVHlwZS5Ib3Jpem9udGFsRml4ZWQpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmZpeGVkQ29sV2lkdGggK1xuICAgICAgICAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5pZ25vcmVNYXJnaW5JblJvdyA/IDAgOiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbik7XG4gICAgICBhZGRDbGFzcyA9IEdyaWRUeXBlLlNjcm9sbEhvcml6b250YWw7XG4gICAgICByZW1vdmVDbGFzczEgPSBHcmlkVHlwZS5GaXQ7XG4gICAgICByZW1vdmVDbGFzczIgPSBHcmlkVHlwZS5TY3JvbGxWZXJ0aWNhbDtcbiAgICAgIHJlbW92ZUNsYXNzMyA9IEdyaWRUeXBlLkZpeGVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdyaWRzdGVyLm1vYmlsZSkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVyLmVsLCBhZGRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ncmlkc3Rlci5lbCwgYWRkQ2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZ3JpZHN0ZXIuZWwsIHJlbW92ZUNsYXNzMSk7XG4gICAgdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVyLmVsLCByZW1vdmVDbGFzczIpO1xuICAgIHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ncmlkc3Rlci5lbCwgcmVtb3ZlQ2xhc3MzKTtcbiAgfVxuXG4gIGdldEdyaWRDb2x1bW5TdHlsZShpOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5nZXRMZWZ0UG9zaXRpb24odGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAqIGkpLFxuICAgICAgd2lkdGg6IHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbiArICdweCcsXG4gICAgICBoZWlnaHQ6IHRoaXMuZ3JpZHN0ZXIuZ3JpZFJvd3MubGVuZ3RoICogdGhpcy5ncmlkc3Rlci5jdXJSb3dIZWlnaHQgLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbiArICdweCdcbiAgICB9O1xuICB9XG5cbiAgZ2V0R3JpZFJvd1N0eWxlKGk6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmdldFRvcFBvc2l0aW9uKHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ICogaSksXG4gICAgICB3aWR0aDogdGhpcy5ncmlkc3Rlci5ncmlkQ29sdW1ucy5sZW5ndGggKiB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoIC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4gKyAncHgnLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4J1xuICAgIH07XG4gIH1cblxuICBnZXRMZWZ0UG9zaXRpb24oZDogbnVtYmVyKTogT2JqZWN0IHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy51c2VUcmFuc2Zvcm1Qb3NpdGlvbmluZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgZCArICdweCknLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKHRoaXMuZ2V0TGVmdE1hcmdpbigpICsgZCkgKyAncHgnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGdldFRvcFBvc2l0aW9uKGQ6IG51bWJlcik6IE9iamVjdCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMudXNlVHJhbnNmb3JtUG9zaXRpb25pbmcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIGQgKyAncHgpJyxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy5nZXRUb3BNYXJnaW4oKSArIGQgKyAncHgnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ2VsbFBvc2l0aW9uKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy51c2VUcmFuc2Zvcm1Qb3NpdGlvbmluZykge1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAndG9wJywgJycpO1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdsZWZ0JywgJycpO1xuICAgIH1cbiAgfVxuXG4gIHNldENlbGxQb3NpdGlvbihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbDogYW55LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnVzZVRyYW5zZm9ybVBvc2l0aW9uaW5nKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAwKSc7XG4gICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnbGVmdCcsIHRoaXMuZ2V0TGVmdE1hcmdpbigpICsgeCArICdweCcpO1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0b3AnLCB0aGlzLmdldFRvcE1hcmdpbigpICsgeSArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldExlZnRNYXJnaW4oKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5vdXRlck1hcmdpbikge1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luTGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMub3V0ZXJNYXJnaW4pIHtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luVG9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJDb25maWdTZXJ2aWNlfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmNvbnN0YW50JztcbmltcG9ydCB7R3JpZHN0ZXJDb25maWd9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJVdGlsc30gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3RlckVtcHR5Q2VsbH0gZnJvbSAnLi9ncmlkc3RlckVtcHR5Q2VsbC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wYWN0fSBmcm9tICcuL2dyaWRzdGVyQ29tcGFjdC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb25maWdTfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnUy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyUmVuZGVyZXJ9IGZyb20gJy4vZ3JpZHN0ZXJSZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkc3Rlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZHN0ZXIuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xuICBjYWxjdWxhdGVMYXlvdXREZWJvdW5jZTogKCkgPT4gdm9pZDtcbiAgbW92aW5nSXRlbTogR3JpZHN0ZXJJdGVtIHwgbnVsbDtcbiAgcHJldmlld1N0eWxlOiAoKSA9PiB2b2lkO1xuICBlbDogYW55O1xuICAkb3B0aW9uczogR3JpZHN0ZXJDb25maWdTO1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIGN1cldpZHRoOiBudW1iZXI7XG4gIGN1ckhlaWdodDogbnVtYmVyO1xuICBncmlkOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBjb2x1bW5zOiBudW1iZXI7XG4gIHJvd3M6IG51bWJlcjtcbiAgY3VyQ29sV2lkdGg6IG51bWJlcjtcbiAgY3VyUm93SGVpZ2h0OiBudW1iZXI7XG4gIGdyaWRDb2x1bW5zID0gW107XG4gIGdyaWRSb3dzID0gW107XG4gIHdpbmRvd1Jlc2l6ZTogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgZHJhZ0luUHJvZ3Jlc3M6IGJvb2xlYW47XG4gIGVtcHR5Q2VsbDogR3JpZHN0ZXJFbXB0eUNlbGw7XG4gIGNvbXBhY3Q6IEdyaWRzdGVyQ29tcGFjdDtcbiAgZ3JpZFJlbmRlcmVyOiBHcmlkc3RlclJlbmRlcmVyO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuJG9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KEdyaWRzdGVyQ29uZmlnU2VydmljZSkpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0RGVib3VuY2UgPSBHcmlkc3RlclV0aWxzLmRlYm91bmNlKHRoaXMuY2FsY3VsYXRlTGF5b3V0LmJpbmQodGhpcyksIDApO1xuICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgdGhpcy5jdXJXaWR0aCA9IDA7XG4gICAgdGhpcy5jdXJIZWlnaHQgPSAwO1xuICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgIHRoaXMuY3VyQ29sV2lkdGggPSAwO1xuICAgIHRoaXMuY3VyUm93SGVpZ2h0ID0gMDtcbiAgICB0aGlzLmRyYWdJblByb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbXB0eUNlbGwgPSBuZXcgR3JpZHN0ZXJFbXB0eUNlbGwodGhpcyk7XG4gICAgdGhpcy5jb21wYWN0ID0gbmV3IEdyaWRzdGVyQ29tcGFjdCh0aGlzKTtcbiAgICB0aGlzLmdyaWRSZW5kZXJlciA9IG5ldyBHcmlkc3RlclJlbmRlcmVyKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtMjogR3JpZHN0ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ueCA8IGl0ZW0yLnggKyBpdGVtMi5jb2xzXG4gICAgICAmJiBpdGVtLnggKyBpdGVtLmNvbHMgPiBpdGVtMi54XG4gICAgICAmJiBpdGVtLnkgPCBpdGVtMi55ICsgaXRlbTIucm93c1xuICAgICAgJiYgaXRlbS55ICsgaXRlbS5yb3dzID4gaXRlbTIueTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5pdENhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaW5pdENhbGxiYWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgIHRoaXMub3B0aW9ucy5hcGkgPSB7XG4gICAgICAgIG9wdGlvbnNDaGFuZ2VkOiB0aGlzLm9wdGlvbnNDaGFuZ2VkLmJpbmQodGhpcyksXG4gICAgICAgIHJlc2l6ZTogdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLFxuICAgICAgICBnZXROZXh0UG9zc2libGVQb3NpdGlvbjogdGhpcy5nZXROZXh0UG9zc2libGVQb3NpdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICBnZXRGaXJzdFBvc3NpYmxlUG9zaXRpb246IHRoaXMuZ2V0Rmlyc3RQb3NzaWJsZVBvc2l0aW9uLmJpbmQodGhpcyksXG4gICAgICAgIGdldExhc3RQb3NzaWJsZVBvc2l0aW9uOiB0aGlzLmdldExhc3RQb3NzaWJsZVBvc2l0aW9uLmJpbmQodGhpcyksXG4gICAgICB9O1xuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy4kb3B0aW9ucy5taW5Db2xzO1xuICAgICAgdGhpcy5yb3dzID0gdGhpcy4kb3B0aW9ucy5taW5Sb3dzO1xuICAgICAgdGhpcy5zZXRHcmlkU2l6ZSgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKTogdm9pZCB7XG4gICAgbGV0IGhlaWdodDtcbiAgICBsZXQgd2lkdGg7XG4gICAgaWYgKHRoaXMuJG9wdGlvbnMuZ3JpZFR5cGUgPT09ICdmaXQnICYmICF0aGlzLm1vYmlsZSkge1xuICAgICAgd2lkdGggPSB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgaGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gdGhpcy5lbC5jbGllbnRXaWR0aDtcbiAgICAgIGhlaWdodCA9IHRoaXMuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoKHdpZHRoICE9PSB0aGlzLmN1cldpZHRoIHx8IGhlaWdodCAhPT0gdGhpcy5jdXJIZWlnaHQpICYmIHRoaXMuY2hlY2tJZlRvUmVzaXplKCkpIHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuJG9wdGlvbnMgPSBHcmlkc3RlclV0aWxzLm1lcmdlKHRoaXMuJG9wdGlvbnMsIHRoaXMub3B0aW9ucywgdGhpcy4kb3B0aW9ucyk7XG4gICAgaWYgKCF0aGlzLiRvcHRpb25zLmRpc2FibGVXaW5kb3dSZXNpemUgJiYgIXRoaXMud2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJG9wdGlvbnMuZGlzYWJsZVdpbmRvd1Jlc2l6ZSAmJiB0aGlzLndpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemUoKTtcbiAgICAgIHRoaXMud2luZG93UmVzaXplID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5lbXB0eUNlbGwudXBkYXRlT3B0aW9ucygpO1xuICB9XG5cbiAgb3B0aW9uc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgbGV0IHdpZGdldHNJbmRleDogbnVtYmVyID0gdGhpcy5ncmlkLmxlbmd0aCAtIDEsIHdpZGdldDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICAgIGZvciAoOyB3aWRnZXRzSW5kZXggPj0gMDsgd2lkZ2V0c0luZGV4LS0pIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZFt3aWRnZXRzSW5kZXhdO1xuICAgICAgd2lkZ2V0LnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy5jYWxjdWxhdGVMYXlvdXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLndpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZXN0cm95Q2FsbGJhY2spIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95Q2FsbGJhY2sodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXBpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuYXBpLnJlc2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm9wdGlvbnMuYXBpLmdldE5leHRQb3NzaWJsZVBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vcHRpb25zLmFwaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5lbXB0eUNlbGwuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLmVtcHR5Q2VsbDtcbiAgICB0aGlzLmNvbXBhY3QuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbXBhY3Q7XG4gIH1cblxuICBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEdyaWRTaXplKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXlvdXQoKTtcbiAgfVxuXG4gIGNoZWNrSWZUb1Jlc2l6ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuZWwuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5lbC5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmVsLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLmVsLnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbFByZXNlbnQgPSBjbGllbnRXaWR0aCA8IG9mZnNldFdpZHRoICYmIHNjcm9sbEhlaWdodCA+IG9mZnNldEhlaWdodFxuICAgICAgJiYgc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0SGVpZ2h0IDwgb2Zmc2V0V2lkdGggLSBjbGllbnRXaWR0aDtcbiAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsUHJlc2VudCA9IGNsaWVudEhlaWdodCA8IG9mZnNldEhlaWdodFxuICAgICAgJiYgc2Nyb2xsV2lkdGggPiBvZmZzZXRXaWR0aCAmJiBzY3JvbGxXaWR0aCAtIG9mZnNldFdpZHRoIDwgb2Zmc2V0SGVpZ2h0IC0gY2xpZW50SGVpZ2h0O1xuICAgIGlmICh2ZXJ0aWNhbFNjcm9sbFByZXNlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICFob3Jpem9udGFsU2Nyb2xsUHJlc2VudDtcbiAgfVxuXG4gIHNldEdyaWRTaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICBsZXQgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLiRvcHRpb25zLnNldEdyaWRTaXplIHx8IHRoaXMuJG9wdGlvbnMuZ3JpZFR5cGUgPT09ICdmaXQnICYmICF0aGlzLm1vYmlsZSkge1xuICAgICAgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbiAgICAgIGhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5jdXJXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3VySGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgc2V0R3JpZERpbWVuc2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRHcmlkU2l6ZSgpO1xuICAgIGlmICghdGhpcy5tb2JpbGUgJiYgdGhpcy4kb3B0aW9ucy5tb2JpbGVCcmVha3BvaW50ID4gdGhpcy5jdXJXaWR0aCkge1xuICAgICAgdGhpcy5tb2JpbGUgPSAhdGhpcy5tb2JpbGU7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdtb2JpbGUnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9iaWxlICYmIHRoaXMuJG9wdGlvbnMubW9iaWxlQnJlYWtwb2ludCA8IHRoaXMuY3VyV2lkdGgpIHtcbiAgICAgIHRoaXMubW9iaWxlID0gIXRoaXMubW9iaWxlO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnbW9iaWxlJyk7XG4gICAgfVxuICAgIGxldCByb3dzID0gdGhpcy4kb3B0aW9ucy5taW5Sb3dzLCBjb2x1bW5zID0gdGhpcy4kb3B0aW9ucy5taW5Db2xzO1xuXG4gICAgbGV0IHdpZGdldHNJbmRleCA9IHRoaXMuZ3JpZC5sZW5ndGggLSAxLCB3aWRnZXQ7XG4gICAgZm9yICg7IHdpZGdldHNJbmRleCA+PSAwOyB3aWRnZXRzSW5kZXgtLSkge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5ncmlkW3dpZGdldHNJbmRleF07XG4gICAgICBpZiAoIXdpZGdldC5ub3RQbGFjZWQpIHtcbiAgICAgICAgcm93cyA9IE1hdGgubWF4KHJvd3MsIHdpZGdldC4kaXRlbS55ICsgd2lkZ2V0LiRpdGVtLnJvd3MpO1xuICAgICAgICBjb2x1bW5zID0gTWF0aC5tYXgoY29sdW1ucywgd2lkZ2V0LiRpdGVtLnggKyB3aWRnZXQuJGl0ZW0uY29scyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gY29sdW1ucyB8fCB0aGlzLnJvd3MgIT09IHJvd3MpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncmlkU2l6ZUNoYW5nZWRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlTGF5b3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBhY3QpIHtcbiAgICAgIHRoaXMuY29tcGFjdC5jaGVja0NvbXBhY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEdyaWREaW1lbnNpb25zKCk7XG4gICAgaWYgKHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW4pIHtcbiAgICAgIGxldCBtYXJnaW5XaWR0aCA9IC10aGlzLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luTGVmdCAhPT0gbnVsbCkge1xuICAgICAgICBtYXJnaW5XaWR0aCArPSB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luTGVmdDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgdGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpbkxlZnQgKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmdpbldpZHRoICs9IHRoaXMuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCB0aGlzLiRvcHRpb25zLm1hcmdpbiArICdweCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5SaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBtYXJnaW5XaWR0aCArPSB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luUmlnaHQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctcmlnaHQnLCB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luUmlnaHQgKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmdpbldpZHRoICs9IHRoaXMuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXJpZ2h0JywgdGhpcy4kb3B0aW9ucy5tYXJnaW4gKyAncHgnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VyQ29sV2lkdGggPSAodGhpcy5jdXJXaWR0aCAtIG1hcmdpbldpZHRoKSAvIHRoaXMuY29sdW1ucztcbiAgICAgIGxldCBtYXJnaW5IZWlnaHQgPSAtdGhpcy4kb3B0aW9ucy5tYXJnaW47XG4gICAgICBpZiAodGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpblRvcCAhPT0gbnVsbCkge1xuICAgICAgICBtYXJnaW5IZWlnaHQgKz0gdGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpblRvcDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy10b3AnLCB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luVG9wICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXJnaW5IZWlnaHQgKz0gdGhpcy4kb3B0aW9ucy5tYXJnaW47XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctdG9wJywgdGhpcy4kb3B0aW9ucy5tYXJnaW4gKyAncHgnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luQm90dG9tICE9PSBudWxsKSB7XG4gICAgICAgIG1hcmdpbkhlaWdodCArPSB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luQm90dG9tO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWJvdHRvbScsIHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5Cb3R0b20gKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmdpbkhlaWdodCArPSB0aGlzLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1ib3R0b20nLCB0aGlzLiRvcHRpb25zLm1hcmdpbiArICdweCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJSb3dIZWlnaHQgPSAodGhpcy5jdXJIZWlnaHQgLSBtYXJnaW5IZWlnaHQpIC8gdGhpcy5yb3dzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1ckNvbFdpZHRoID0gKHRoaXMuY3VyV2lkdGggKyB0aGlzLiRvcHRpb25zLm1hcmdpbikgLyB0aGlzLmNvbHVtbnM7XG4gICAgICB0aGlzLmN1clJvd0hlaWdodCA9ICh0aGlzLmN1ckhlaWdodCArIHRoaXMuJG9wdGlvbnMubWFyZ2luKSAvIHRoaXMucm93cztcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIDAgKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctcmlnaHQnLCAwICsgJ3B4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXRvcCcsIDAgKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctYm90dG9tJywgMCArICdweCcpO1xuICAgIH1cbiAgICB0aGlzLmdyaWRSZW5kZXJlci51cGRhdGVHcmlkc3RlcigpO1xuXG4gICAgdGhpcy51cGRhdGVHcmlkKCk7XG5cbiAgICBpZiAodGhpcy4kb3B0aW9ucy5zZXRHcmlkU2l6ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCAodGhpcy5jb2x1bW5zICogdGhpcy5jdXJDb2xXaWR0aCArIHRoaXMuJG9wdGlvbnMubWFyZ2luKSArICdweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnaGVpZ2h0JywgKHRoaXMucm93cyAqIHRoaXMuY3VyUm93SGVpZ2h0ICsgdGhpcy4kb3B0aW9ucy5tYXJnaW4pICsgJ3B4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgJycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnaGVpZ2h0JywgJycpO1xuICAgIH1cblxuICAgIGxldCB3aWRnZXRzSW5kZXg6IG51bWJlciA9IHRoaXMuZ3JpZC5sZW5ndGggLSAxLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgd2lkZ2V0c0luZGV4ID49IDA7IHdpZGdldHNJbmRleC0tKSB7XG4gICAgICB3aWRnZXQgPSB0aGlzLmdyaWRbd2lkZ2V0c0luZGV4XTtcbiAgICAgIHdpZGdldC5zZXRTaXplKCk7XG4gICAgICB3aWRnZXQuZHJhZy50b2dnbGUoKTtcbiAgICAgIHdpZGdldC5yZXNpemUudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApO1xuICB9XG5cbiAgdXBkYXRlR3JpZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4kb3B0aW9ucy5kaXNwbGF5R3JpZCA9PT0gJ2Fsd2F5cycgJiYgIXRoaXMubW9iaWxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdkaXNwbGF5LWdyaWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJG9wdGlvbnMuZGlzcGxheUdyaWQgPT09ICdvbkRyYWcmUmVzaXplJyAmJiB0aGlzLmRyYWdJblByb2dyZXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdkaXNwbGF5LWdyaWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJG9wdGlvbnMuZGlzcGxheUdyaWQgPT09ICdub25lJyB8fCAhdGhpcy5kcmFnSW5Qcm9ncmVzcyB8fCB0aGlzLm1vYmlsZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnZGlzcGxheS1ncmlkJyk7XG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLmdyaWRDb2x1bW5zLmxlbmd0aCA9IE1hdGgubWF4KHRoaXMuY29sdW1ucywgTWF0aC5mbG9vcih0aGlzLmN1cldpZHRoIC8gdGhpcy5jdXJDb2xXaWR0aCkpIHx8IDA7XG4gICAgdGhpcy5ncmlkUm93cy5sZW5ndGggPSBNYXRoLm1heCh0aGlzLnJvd3MsIE1hdGguZmxvb3IodGhpcy5jdXJIZWlnaHQgLyB0aGlzLmN1clJvd0hlaWdodCkpIHx8IDA7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKGl0ZW1Db21wb25lbnQuJGl0ZW0uY29scyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpdGVtQ29tcG9uZW50LiRpdGVtLmNvbHMgPSB0aGlzLiRvcHRpb25zLmRlZmF1bHRJdGVtQ29scztcbiAgICAgIGl0ZW1Db21wb25lbnQuaXRlbS5jb2xzID0gaXRlbUNvbXBvbmVudC4kaXRlbS5jb2xzO1xuICAgICAgaXRlbUNvbXBvbmVudC5pdGVtQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBpZiAoaXRlbUNvbXBvbmVudC4kaXRlbS5yb3dzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZW1Db21wb25lbnQuJGl0ZW0ucm93cyA9IHRoaXMuJG9wdGlvbnMuZGVmYXVsdEl0ZW1Sb3dzO1xuICAgICAgaXRlbUNvbXBvbmVudC5pdGVtLnJvd3MgPSBpdGVtQ29tcG9uZW50LiRpdGVtLnJvd3M7XG4gICAgICBpdGVtQ29tcG9uZW50Lml0ZW1DaGFuZ2VkKCk7XG4gICAgfVxuICAgIGlmIChpdGVtQ29tcG9uZW50LiRpdGVtLnggPT09IC0xIHx8IGl0ZW1Db21wb25lbnQuJGl0ZW0ueSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuYXV0b1Bvc2l0aW9uSXRlbShpdGVtQ29tcG9uZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24oaXRlbUNvbXBvbmVudC4kaXRlbSkpIHtcbiAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5kaXNhYmxlV2FybmluZ3MpIHtcbiAgICAgICAgaXRlbUNvbXBvbmVudC5ub3RQbGFjZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgYmUgcGxhY2VkIGluIHRoZSBib3VuZHMgb2YgdGhlIGRhc2hib2FyZCwgdHJ5aW5nIHRvIGF1dG8gcG9zaXRpb24hL24nICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtQ29tcG9uZW50Lml0ZW0sIFsnY29scycsICdyb3dzJywgJ3gnLCAneSddKSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMuZGlzYWJsZUF1dG9Qb3NpdGlvbk9uQ29uZmxpY3QpIHtcbiAgICAgICAgdGhpcy5hdXRvUG9zaXRpb25JdGVtKGl0ZW1Db21wb25lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUNvbXBvbmVudC5ub3RQbGFjZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyaWQucHVzaChpdGVtQ29tcG9uZW50KTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxheW91dERlYm91bmNlKCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5zcGxpY2UodGhpcy5ncmlkLmluZGV4T2YoaXRlbUNvbXBvbmVudCksIDEpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0RGVib3VuY2UoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLml0ZW1SZW1vdmVkQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pdGVtUmVtb3ZlZENhbGxiYWNrKGl0ZW1Db21wb25lbnQuaXRlbSwgaXRlbUNvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24oaXRlbTogR3JpZHN0ZXJJdGVtKTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbiB7XG4gICAgbGV0IGNvbGxpc2lvbjogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaXRlbVZhbGlkYXRlQ2FsbGJhY2spIHtcbiAgICAgIGNvbGxpc2lvbiA9ICF0aGlzLm9wdGlvbnMuaXRlbVZhbGlkYXRlQ2FsbGJhY2soaXRlbSk7XG4gICAgfVxuICAgIGlmICghY29sbGlzaW9uICYmIHRoaXMuY2hlY2tHcmlkQ29sbGlzaW9uKGl0ZW0pKSB7XG4gICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNvbGxpc2lvbikge1xuICAgICAgY29uc3QgYyA9IHRoaXMuZmluZEl0ZW1XaXRoSXRlbShpdGVtKTtcbiAgICAgIGlmIChjKSB7XG4gICAgICAgIGNvbGxpc2lvbiA9IGM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb247XG4gIH1cblxuICBjaGVja0dyaWRDb2xsaXNpb24oaXRlbTogR3JpZHN0ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgbm9OZWdhdGl2ZVBvc2l0aW9uID0gaXRlbS55ID4gLTEgJiYgaXRlbS54ID4gLTE7XG4gICAgY29uc3QgbWF4R3JpZENvbHMgPSBpdGVtLmNvbHMgKyBpdGVtLnggPD0gdGhpcy4kb3B0aW9ucy5tYXhDb2xzO1xuICAgIGNvbnN0IG1heEdyaWRSb3dzID0gaXRlbS5yb3dzICsgaXRlbS55IDw9IHRoaXMuJG9wdGlvbnMubWF4Um93cztcbiAgICBjb25zdCBtYXhJdGVtQ29scyA9IGl0ZW0ubWF4SXRlbUNvbHMgPT09IHVuZGVmaW5lZCA/IHRoaXMuJG9wdGlvbnMubWF4SXRlbUNvbHMgOiBpdGVtLm1heEl0ZW1Db2xzO1xuICAgIGNvbnN0IG1pbkl0ZW1Db2xzID0gaXRlbS5taW5JdGVtQ29scyA9PT0gdW5kZWZpbmVkID8gdGhpcy4kb3B0aW9ucy5taW5JdGVtQ29scyA6IGl0ZW0ubWluSXRlbUNvbHM7XG4gICAgY29uc3QgbWF4SXRlbVJvd3MgPSBpdGVtLm1heEl0ZW1Sb3dzID09PSB1bmRlZmluZWQgPyB0aGlzLiRvcHRpb25zLm1heEl0ZW1Sb3dzIDogaXRlbS5tYXhJdGVtUm93cztcbiAgICBjb25zdCBtaW5JdGVtUm93cyA9IGl0ZW0ubWluSXRlbVJvd3MgPT09IHVuZGVmaW5lZCA/IHRoaXMuJG9wdGlvbnMubWluSXRlbVJvd3MgOiBpdGVtLm1pbkl0ZW1Sb3dzO1xuICAgIGNvbnN0IGluQ29sc0xpbWl0cyA9IGl0ZW0uY29scyA8PSBtYXhJdGVtQ29scyAmJiBpdGVtLmNvbHMgPj0gbWluSXRlbUNvbHM7XG4gICAgY29uc3QgaW5Sb3dzTGltaXRzID0gaXRlbS5yb3dzIDw9IG1heEl0ZW1Sb3dzICYmIGl0ZW0ucm93cyA+PSBtaW5JdGVtUm93cztcbiAgICBjb25zdCBtaW5BcmVhTGltaXQgPSBpdGVtLm1pbkl0ZW1BcmVhID09PSB1bmRlZmluZWQgPyB0aGlzLiRvcHRpb25zLm1pbkl0ZW1BcmVhIDogaXRlbS5taW5JdGVtQXJlYTtcbiAgICBjb25zdCBtYXhBcmVhTGltaXQgPSBpdGVtLm1heEl0ZW1BcmVhID09PSB1bmRlZmluZWQgPyB0aGlzLiRvcHRpb25zLm1heEl0ZW1BcmVhIDogaXRlbS5tYXhJdGVtQXJlYTtcbiAgICBjb25zdCBhcmVhID0gaXRlbS5jb2xzICogaXRlbS5yb3dzO1xuICAgIGNvbnN0IGluTWluQXJlYSA9IG1pbkFyZWFMaW1pdCA8PSBhcmVhO1xuICAgIGNvbnN0IGluTWF4QXJlYSA9IG1heEFyZWFMaW1pdCA+PSBhcmVhO1xuICAgIHJldHVybiAhKG5vTmVnYXRpdmVQb3NpdGlvbiAmJiBtYXhHcmlkQ29scyAmJiBtYXhHcmlkUm93cyAmJiBpbkNvbHNMaW1pdHMgJiYgaW5Sb3dzTGltaXRzICYmIGluTWluQXJlYSAmJiBpbk1heEFyZWEpO1xuICB9XG5cbiAgZmluZEl0ZW1XaXRoSXRlbShpdGVtOiBHcmlkc3Rlckl0ZW0pOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuIHtcbiAgICBsZXQgd2lkZ2V0c0luZGV4OiBudW1iZXIgPSB0aGlzLmdyaWQubGVuZ3RoIC0gMSwgd2lkZ2V0OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gICAgZm9yICg7IHdpZGdldHNJbmRleCA+IC0xOyB3aWRnZXRzSW5kZXgtLSkge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5ncmlkW3dpZGdldHNJbmRleF07XG4gICAgICBpZiAod2lkZ2V0LiRpdGVtICE9PSBpdGVtICYmIEdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMod2lkZ2V0LiRpdGVtLCBpdGVtKSkge1xuICAgICAgICByZXR1cm4gd2lkZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmaW5kSXRlbXNXaXRoSXRlbShpdGVtOiBHcmlkc3Rlckl0ZW0pOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+IHtcbiAgICBjb25zdCBhOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+ID0gW107XG4gICAgbGV0IHdpZGdldHNJbmRleDogbnVtYmVyID0gdGhpcy5ncmlkLmxlbmd0aCAtIDEsIHdpZGdldDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICAgIGZvciAoOyB3aWRnZXRzSW5kZXggPiAtMTsgd2lkZ2V0c0luZGV4LS0pIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZFt3aWRnZXRzSW5kZXhdO1xuICAgICAgaWYgKHdpZGdldC4kaXRlbSAhPT0gaXRlbSAmJiBHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKHdpZGdldC4kaXRlbSwgaXRlbSkpIHtcbiAgICAgICAgYS5wdXNoKHdpZGdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgYXV0b1Bvc2l0aW9uSXRlbShpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXROZXh0UG9zc2libGVQb3NpdGlvbihpdGVtQ29tcG9uZW50LiRpdGVtKSkge1xuICAgICAgaXRlbUNvbXBvbmVudC5ub3RQbGFjZWQgPSBmYWxzZTtcbiAgICAgIGl0ZW1Db21wb25lbnQuaXRlbS54ID0gaXRlbUNvbXBvbmVudC4kaXRlbS54O1xuICAgICAgaXRlbUNvbXBvbmVudC5pdGVtLnkgPSBpdGVtQ29tcG9uZW50LiRpdGVtLnk7XG4gICAgICBpdGVtQ29tcG9uZW50Lml0ZW1DaGFuZ2VkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1Db21wb25lbnQubm90UGxhY2VkID0gdHJ1ZTtcbiAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5kaXNhYmxlV2FybmluZ3MpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDYW5cXCd0IGJlIHBsYWNlZCBpbiB0aGUgYm91bmRzIG9mIHRoZSBkYXNoYm9hcmQhL24nICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtQ29tcG9uZW50Lml0ZW0sIFsnY29scycsICdyb3dzJywgJ3gnLCAneSddKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TmV4dFBvc3NpYmxlUG9zaXRpb24obmV3SXRlbTogR3JpZHN0ZXJJdGVtLCBzdGFydGluZ0Zyb206IHsgeT86IG51bWJlciwgeD86IG51bWJlciB9ID0ge30pOiBib29sZWFuIHtcbiAgICBpZiAobmV3SXRlbS5jb2xzID09PSAtMSkge1xuICAgICAgbmV3SXRlbS5jb2xzID0gdGhpcy4kb3B0aW9ucy5kZWZhdWx0SXRlbUNvbHM7XG4gICAgfVxuICAgIGlmIChuZXdJdGVtLnJvd3MgPT09IC0xKSB7XG4gICAgICBuZXdJdGVtLnJvd3MgPSB0aGlzLiRvcHRpb25zLmRlZmF1bHRJdGVtUm93cztcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkRGltZW5zaW9ucygpO1xuICAgIGxldCByb3dzSW5kZXggPSBzdGFydGluZ0Zyb20ueSB8fCAwLCBjb2xzSW5kZXg7XG4gICAgZm9yICg7IHJvd3NJbmRleCA8IHRoaXMucm93czsgcm93c0luZGV4KyspIHtcbiAgICAgIG5ld0l0ZW0ueSA9IHJvd3NJbmRleDtcbiAgICAgIGNvbHNJbmRleCA9IHN0YXJ0aW5nRnJvbS54IHx8IDA7XG4gICAgICBmb3IgKDsgY29sc0luZGV4IDwgdGhpcy5jb2x1bW5zOyBjb2xzSW5kZXgrKykge1xuICAgICAgICBuZXdJdGVtLnggPSBjb2xzSW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0NvbGxpc2lvbihuZXdJdGVtKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNhbkFkZFRvUm93cyA9IHRoaXMuJG9wdGlvbnMubWF4Um93cyA+PSB0aGlzLnJvd3MgKyBuZXdJdGVtLnJvd3M7XG4gICAgY29uc3QgY2FuQWRkVG9Db2x1bW5zID0gdGhpcy4kb3B0aW9ucy5tYXhDb2xzID49IHRoaXMuY29sdW1ucyArIG5ld0l0ZW0uY29scztcbiAgICBjb25zdCBhZGRUb1Jvd3MgPSB0aGlzLnJvd3MgPD0gdGhpcy5jb2x1bW5zICYmIGNhbkFkZFRvUm93cztcbiAgICBpZiAoIWFkZFRvUm93cyAmJiBjYW5BZGRUb0NvbHVtbnMpIHtcbiAgICAgIG5ld0l0ZW0ueCA9IHRoaXMuY29sdW1ucztcbiAgICAgIG5ld0l0ZW0ueSA9IDA7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNhbkFkZFRvUm93cykge1xuICAgICAgbmV3SXRlbS55ID0gdGhpcy5yb3dzO1xuICAgICAgbmV3SXRlbS54ID0gMDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRGaXJzdFBvc3NpYmxlUG9zaXRpb24oaXRlbTogR3JpZHN0ZXJJdGVtKTogR3JpZHN0ZXJJdGVtIHtcbiAgICBjb25zdCB0bXBJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgdGhpcy5nZXROZXh0UG9zc2libGVQb3NpdGlvbih0bXBJdGVtKTtcbiAgICByZXR1cm4gdG1wSXRlbTtcbiAgfVxuXG4gIGdldExhc3RQb3NzaWJsZVBvc2l0aW9uKGl0ZW06IEdyaWRzdGVySXRlbSk6IEdyaWRzdGVySXRlbSB7XG4gICAgbGV0IGZhcnRoZXN0SXRlbTogeyB5OiBudW1iZXIsIHg6IG51bWJlciB9ID0ge3k6IDAsIHg6IDB9O1xuICAgIGZhcnRoZXN0SXRlbSA9IHRoaXMuZ3JpZC5yZWR1Y2UoKHByZXY6IGFueSwgY3VycjogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyQ29vcmRzID0ge3k6IGN1cnIuJGl0ZW0ueSArIGN1cnIuJGl0ZW0ucm93cyAtIDEsIHg6IGN1cnIuJGl0ZW0ueCArIGN1cnIuJGl0ZW0uY29scyAtIDF9O1xuICAgICAgaWYgKEdyaWRzdGVyVXRpbHMuY29tcGFyZUl0ZW1zKHByZXYsIGN1cnJDb29yZHMpID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjdXJyQ29vcmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG4gICAgfSwgZmFydGhlc3RJdGVtKTtcblxuICAgIGNvbnN0IHRtcEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICB0aGlzLmdldE5leHRQb3NzaWJsZVBvc2l0aW9uKHRtcEl0ZW0sIGZhcnRoZXN0SXRlbSk7XG4gICAgcmV0dXJuIHRtcEl0ZW07XG4gIH1cblxuICBwaXhlbHNUb1Bvc2l0aW9uWCh4OiBudW1iZXIsIHJvdW5kaW5nTWV0aG9kOiBGdW5jdGlvbiwgbm9MaW1pdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcm91bmRpbmdNZXRob2QoeCAvIHRoaXMuY3VyQ29sV2lkdGgpO1xuICAgIGlmIChub0xpbWl0KSB7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChwb3NpdGlvbiwgMCk7XG4gICAgfVxuICB9XG5cbiAgcGl4ZWxzVG9Qb3NpdGlvblkoeTogbnVtYmVyLCByb3VuZGluZ01ldGhvZDogRnVuY3Rpb24sIG5vTGltaXQ/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHJvdW5kaW5nTWV0aG9kKHkgLyB0aGlzLmN1clJvd0hlaWdodCk7XG4gICAgaWYgKG5vTGltaXQpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KHBvc2l0aW9uLCAwKTtcbiAgICB9XG4gIH1cblxuICBwb3NpdGlvblhUb1BpeGVscyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB4ICogdGhpcy5jdXJDb2xXaWR0aDtcbiAgfVxuXG4gIHBvc2l0aW9uWVRvUGl4ZWxzKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmN1clJvd0hlaWdodDtcbiAgfVxufVxuIiwiaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyRHJhZ2dhYmxlfSBmcm9tICcuL2dyaWRzdGVyRHJhZ2dhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmlkc3RlclJlc2l6YWJsZX0gZnJvbSAnLi9ncmlkc3RlclJlc2l6YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB7XG4gIGl0ZW06IEdyaWRzdGVySXRlbTtcbiAgJGl0ZW06IEdyaWRzdGVySXRlbTtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGRyYWc6IEdyaWRzdGVyRHJhZ2dhYmxlO1xuICByZXNpemU6IEdyaWRzdGVyUmVzaXphYmxlO1xuICBub3RQbGFjZWQ6IGJvb2xlYW47XG4gIHVwZGF0ZU9wdGlvbnM6ICgpID0+IHZvaWQ7XG4gIGl0ZW1DaGFuZ2VkOiAoKSA9PiB2b2lkO1xuICBzZXRTaXplOiAoKSA9PiB2b2lkO1xuICBjaGVja0l0ZW1DaGFuZ2VzOiAobmV3VmFsdWU6IEdyaWRzdGVySXRlbSwgb2xkVmFsdWU6IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcbiAgY2FuQmVEcmFnZ2VkOiAoKSA9PiBib29sZWFuO1xuICBjYW5CZVJlc2l6ZWQ6ICgpID0+IGJvb2xlYW47XG4gIGVsOiBhbnk7XG4gIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJTd2FwIHtcbiAgcHJpdmF0ZSBzd2FwZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXJJdGVtO1xuICAgIGRlbGV0ZSB0aGlzLnN3YXBlZEl0ZW07XG4gIH1cblxuICBzd2FwSXRlbXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuc3dhcCkge1xuICAgICAgdGhpcy5jaGVja1N3YXBCYWNrKCk7XG4gICAgICB0aGlzLmNoZWNrU3dhcCh0aGlzLmdyaWRzdGVySXRlbSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTd2FwQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zd2FwZWRJdGVtKSB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueDtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55O1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS54IHx8IDA7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuc3dhcGVkSXRlbS4kaXRlbSkpIHtcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB4O1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uc2V0U2l6ZSgpO1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDA7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcmVzdG9yZVN3YXBJdGVtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueCB8fCAwO1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnkgPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS55IHx8IDA7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uc2V0U2l6ZSgpO1xuICAgICAgdGhpcy5zd2FwZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldFN3YXBJdGVtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS5jaGVja0l0ZW1DaGFuZ2VzKHRoaXMuc3dhcGVkSXRlbS4kaXRlbSwgdGhpcy5zd2FwZWRJdGVtLml0ZW0pO1xuICAgICAgdGhpcy5zd2FwZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU3dhcChwdXNoZWRCeTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgY29uc3QgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uOiBhbnkgPSB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHB1c2hlZEJ5LiRpdGVtKTtcbiAgICBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbiAhPT0gdHJ1ZSAmJiBncmlkc3Rlckl0ZW1Db2xsaXNpb24uY2FuQmVEcmFnZ2VkKCkpIHtcbiAgICAgIGNvbnN0IGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSA9IGdyaWRzdGVySXRlbUNvbGxpc2lvbjtcbiAgICAgIGNvbnN0IGNvcHlDb2xsaXNpb25YID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54O1xuICAgICAgY29uc3QgY29weUNvbGxpc2lvblkgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XG4gICAgICBjb25zdCBjb3B5WCA9IHB1c2hlZEJ5LiRpdGVtLng7XG4gICAgICBjb25zdCBjb3B5WSA9IHB1c2hlZEJ5LiRpdGVtLnk7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBwdXNoZWRCeS5pdGVtLnggfHwgMDtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IHB1c2hlZEJ5Lml0ZW0ueSB8fCAwO1xuICAgICAgcHVzaGVkQnkuJGl0ZW0ueCA9IGdyaWRzdGVySXRlbUNvbGxpZGUuaXRlbS54IHx8IDA7XG4gICAgICBwdXNoZWRCeS4kaXRlbS55ID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS5pdGVtLnkgfHwgMDtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pIHx8IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24ocHVzaGVkQnkuJGl0ZW0pKSB7XG4gICAgICAgIHB1c2hlZEJ5LiRpdGVtLnggPSBjb3B5WDtcbiAgICAgICAgcHVzaGVkQnkuJGl0ZW0ueSA9IGNvcHlZO1xuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBjb3B5Q29sbGlzaW9uWDtcbiAgICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gY29weUNvbGxpc2lvblk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7R3JpZHN0ZXJSZXNpemVFdmVudFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJSZXNpemVFdmVudFR5cGUuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcblxubGV0IHNjcm9sbFNlbnNpdGl2aXR5OiBudW1iZXI7XG5sZXQgc2Nyb2xsU3BlZWQ6IG51bWJlcjtcbmNvbnN0IGludGVydmFsRHVyYXRpb24gPSA1MDtcbmxldCBncmlkc3RlckVsZW1lbnQ6IGFueTtcbmxldCByZXNpemVFdmVudDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbmxldCByZXNpemVFdmVudFR5cGU6IEdyaWRzdGVyUmVzaXplRXZlbnRUeXBlIHwgdW5kZWZpbmVkO1xubGV0IGludGVydmFsRTogbnVtYmVyO1xubGV0IGludGVydmFsVzogbnVtYmVyO1xubGV0IGludGVydmFsTjogbnVtYmVyO1xubGV0IGludGVydmFsUzogbnVtYmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGU6IE1vdXNlRXZlbnQsIGxhc3RNb3VzZTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVJdGVtUG9zaXRpb246IEZ1bmN0aW9uLCByZXNpemU/OiBib29sZWFuLCByZXNpemVFdmVudFNjcm9sbFR5cGU/OiBHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZSkge1xuICBzY3JvbGxTZW5zaXRpdml0eSA9IGdyaWRzdGVyLiRvcHRpb25zLnNjcm9sbFNlbnNpdGl2aXR5O1xuICBzY3JvbGxTcGVlZCA9IGdyaWRzdGVyLiRvcHRpb25zLnNjcm9sbFNwZWVkO1xuICBncmlkc3RlckVsZW1lbnQgPSBncmlkc3Rlci5lbDtcbiAgcmVzaXplRXZlbnQgPSByZXNpemU7XG4gIHJlc2l6ZUV2ZW50VHlwZSA9IHJlc2l6ZUV2ZW50U2Nyb2xsVHlwZTtcblxuICBjb25zdCBvZmZzZXRXaWR0aCA9IGdyaWRzdGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZ3JpZHN0ZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdyaWRzdGVyRWxlbWVudC5zY3JvbGxMZWZ0O1xuICBjb25zdCBvZmZzZXRUb3AgPSBncmlkc3RlckVsZW1lbnQuc2Nyb2xsVG9wO1xuICBjb25zdCBlbGVtVG9wT2Zmc2V0ID0gdG9wIC0gb2Zmc2V0VG9wO1xuICBjb25zdCBlbGVtQm90dG9tT2Zmc2V0ID0gb2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0VG9wIC0gdG9wIC0gaGVpZ2h0O1xuICBpZiAobGFzdE1vdXNlLmNsaWVudFkgPCBlLmNsaWVudFkgJiYgZWxlbUJvdHRvbU9mZnNldCA8IHNjcm9sbFNlbnNpdGl2aXR5KSB7XG4gICAgY2FuY2VsTigpO1xuICAgIGlmICgocmVzaXplRXZlbnQgJiYgcmVzaXplRXZlbnRUeXBlICYmICFyZXNpemVFdmVudFR5cGUucykgfHwgaW50ZXJ2YWxTKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludGVydmFsUyA9IHN0YXJ0VmVydGljYWwoMSwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uLCBsYXN0TW91c2UpO1xuICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRZID4gZS5jbGllbnRZICYmIG9mZnNldFRvcCA+IDAgJiYgZWxlbVRvcE9mZnNldCA8IHNjcm9sbFNlbnNpdGl2aXR5KSB7XG4gICAgY2FuY2VsUygpO1xuICAgIGlmICgocmVzaXplRXZlbnQgJiYgcmVzaXplRXZlbnRUeXBlICYmICFyZXNpemVFdmVudFR5cGUubikgfHwgaW50ZXJ2YWxOKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludGVydmFsTiA9IHN0YXJ0VmVydGljYWwoLTEsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbiwgbGFzdE1vdXNlKTtcbiAgfSBlbHNlIGlmIChsYXN0TW91c2UuY2xpZW50WSAhPT0gZS5jbGllbnRZKSB7XG4gICAgY2FuY2VsVmVydGljYWwoKTtcbiAgfVxuXG4gIGNvbnN0IGVsZW1SaWdodE9mZnNldCA9IG9mZnNldExlZnQgKyBvZmZzZXRXaWR0aCAtIGxlZnQgLSB3aWR0aDtcbiAgY29uc3QgZWxlbUxlZnRPZmZzZXQgPSBsZWZ0IC0gb2Zmc2V0TGVmdDtcbiAgaWYgKGxhc3RNb3VzZS5jbGllbnRYIDwgZS5jbGllbnRYICYmIGVsZW1SaWdodE9mZnNldCA8PSBzY3JvbGxTZW5zaXRpdml0eSkge1xuICAgIGNhbmNlbFcoKTtcbiAgICBpZiAoKHJlc2l6ZUV2ZW50ICYmIHJlc2l6ZUV2ZW50VHlwZSAmJiAhcmVzaXplRXZlbnRUeXBlLmUpIHx8IGludGVydmFsRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnRlcnZhbEUgPSBzdGFydEhvcml6b250YWwoMSwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uLCBsYXN0TW91c2UpO1xuICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRYID4gZS5jbGllbnRYICYmIG9mZnNldExlZnQgPiAwICYmIGVsZW1MZWZ0T2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcbiAgICBjYW5jZWxFKCk7XG4gICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS53KSB8fCBpbnRlcnZhbFcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW50ZXJ2YWxXID0gc3RhcnRIb3Jpem9udGFsKC0xLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XG4gIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFggIT09IGUuY2xpZW50WCkge1xuICAgIGNhbmNlbEhvcml6b250YWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFZlcnRpY2FsKHNpZ246IG51bWJlciwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uOiBGdW5jdGlvbiwgbGFzdE1vdXNlOiBhbnkpOiBhbnkge1xuICBsZXQgY2xpZW50WSA9IGxhc3RNb3VzZS5jbGllbnRZO1xuICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICghZ3JpZHN0ZXJFbGVtZW50IHx8IHNpZ24gPT09IC0xICYmIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxUb3AgLSBzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgIGNhbmNlbFZlcnRpY2FsKCk7XG4gICAgfVxuICAgIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxUb3AgKz0gc2lnbiAqIHNjcm9sbFNwZWVkO1xuICAgIGNsaWVudFkgKz0gc2lnbiAqIHNjcm9sbFNwZWVkO1xuICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbih7Y2xpZW50WDogbGFzdE1vdXNlLmNsaWVudFgsIGNsaWVudFk6IGNsaWVudFl9KTtcbiAgfSwgaW50ZXJ2YWxEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SG9yaXpvbnRhbChzaWduOiBudW1iZXIsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbjogRnVuY3Rpb24sIGxhc3RNb3VzZTogYW55KTogYW55IHtcbiAgbGV0IGNsaWVudFggPSBsYXN0TW91c2UuY2xpZW50WDtcbiAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWdyaWRzdGVyRWxlbWVudCB8fCBzaWduID09PSAtMSAmJiBncmlkc3RlckVsZW1lbnQuc2Nyb2xsTGVmdCAtIHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgY2FuY2VsSG9yaXpvbnRhbCgpO1xuICAgIH1cbiAgICBncmlkc3RlckVsZW1lbnQuc2Nyb2xsTGVmdCArPSBzaWduICogc2Nyb2xsU3BlZWQ7XG4gICAgY2xpZW50WCArPSBzaWduICogc2Nyb2xsU3BlZWQ7XG4gICAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uKHtjbGllbnRYOiBjbGllbnRYLCBjbGllbnRZOiBsYXN0TW91c2UuY2xpZW50WX0pO1xuICB9LCBpbnRlcnZhbER1cmF0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcbiAgY2FuY2VsSG9yaXpvbnRhbCgpO1xuICBjYW5jZWxWZXJ0aWNhbCgpO1xuICBncmlkc3RlckVsZW1lbnQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEhvcml6b250YWwoKSB7XG4gIGNhbmNlbEUoKTtcbiAgY2FuY2VsVygpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxWZXJ0aWNhbCgpIHtcbiAgY2FuY2VsTigpO1xuICBjYW5jZWxTKCk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEUoKSB7XG4gIGlmIChpbnRlcnZhbEUpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsRSk7XG4gICAgaW50ZXJ2YWxFID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxXKCkge1xuICBpZiAoaW50ZXJ2YWxXKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFcpO1xuICAgIGludGVydmFsVyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsUygpIHtcbiAgaWYgKGludGVydmFsUykge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxTKTtcbiAgICBpbnRlcnZhbFMgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbE4oKSB7XG4gIGlmIChpbnRlcnZhbE4pIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsTik7XG4gICAgaW50ZXJ2YWxOID0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclB1c2gge1xuICBwdWJsaWMgZnJvbVNvdXRoOiBzdHJpbmc7XG4gIHB1YmxpYyBmcm9tTm9ydGg6IHN0cmluZztcbiAgcHVibGljIGZyb21FYXN0OiBzdHJpbmc7XG4gIHB1YmxpYyBmcm9tV2VzdDogc3RyaW5nO1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zVGVtcDogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtc1RlbXBQYXRoOiBBcnJheTxBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+PjtcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtc1BhdGg6IEFycmF5PEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT4+O1xuICBwcml2YXRlIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICBwcml2YXRlIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtc09yZGVyOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBwcml2YXRlIHRyeVBhdHRlcm46IHtcbiAgICBmcm9tRWFzdDogQXJyYXk8RnVuY3Rpb24+LFxuICAgIGZyb21XZXN0OiBBcnJheTxGdW5jdGlvbj4sXG4gICAgZnJvbU5vcnRoOiBBcnJheTxGdW5jdGlvbj4sXG4gICAgZnJvbVNvdXRoOiBBcnJheTxGdW5jdGlvbj4sXG4gICAgW2tleTogc3RyaW5nXTogQXJyYXk8RnVuY3Rpb24+XG4gIH07XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpIHtcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1RlbXAgPSBbXTtcbiAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGggPSBbXTtcbiAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aCA9IFtdO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtID0gZ3JpZHN0ZXJJdGVtO1xuICAgIHRoaXMuZ3JpZHN0ZXIgPSBncmlkc3Rlckl0ZW0uZ3JpZHN0ZXI7XG4gICAgdGhpcy50cnlQYXR0ZXJuID0ge1xuICAgICAgZnJvbUVhc3Q6IFt0aGlzLnRyeVdlc3QsIHRoaXMudHJ5U291dGgsIHRoaXMudHJ5Tm9ydGgsIHRoaXMudHJ5RWFzdF0sXG4gICAgICBmcm9tV2VzdDogW3RoaXMudHJ5RWFzdCwgdGhpcy50cnlTb3V0aCwgdGhpcy50cnlOb3J0aCwgdGhpcy50cnlXZXN0XSxcbiAgICAgIGZyb21Ob3J0aDogW3RoaXMudHJ5U291dGgsIHRoaXMudHJ5RWFzdCwgdGhpcy50cnlXZXN0LCB0aGlzLnRyeU5vcnRoXSxcbiAgICAgIGZyb21Tb3V0aDogW3RoaXMudHJ5Tm9ydGgsIHRoaXMudHJ5RWFzdCwgdGhpcy50cnlXZXN0LCB0aGlzLnRyeVNvdXRoXVxuICAgIH07XG4gICAgdGhpcy5mcm9tU291dGggPSAnZnJvbVNvdXRoJztcbiAgICB0aGlzLmZyb21Ob3J0aCA9ICdmcm9tTm9ydGgnO1xuICAgIHRoaXMuZnJvbUVhc3QgPSAnZnJvbUVhc3QnO1xuICAgIHRoaXMuZnJvbVdlc3QgPSAnZnJvbVdlc3QnO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XG4gIH1cblxuICBwdXNoSXRlbXMoZGlyZWN0aW9uOiBzdHJpbmcsIGRpc2FibGU/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaEl0ZW1zICYmICFkaXNhYmxlKSB7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIgPSBbXTtcbiAgICAgIGNvbnN0IHB1c2hlZCA9IHRoaXMucHVzaCh0aGlzLmdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICAgIGlmICghcHVzaGVkKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZVRlbXBJdGVtcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyID0gW107XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcCA9IFtdO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoID0gW107XG4gICAgICByZXR1cm4gcHVzaGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVzdG9yZVRlbXBJdGVtcygpOiB2b2lkIHtcbiAgICBsZXQgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKHRoaXMucHVzaGVkSXRlbXNUZW1wW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlSXRlbXMoKTogdm9pZCB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGw6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoO1xuICAgIGxldCBwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHB1c2hlZEl0ZW0gPSB0aGlzLnB1c2hlZEl0ZW1zW2ldO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gcHVzaGVkSXRlbS5pdGVtLnggfHwgMDtcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IHB1c2hlZEl0ZW0uaXRlbS55IHx8IDA7XG4gICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gIH1cblxuICBzZXRQdXNoZWRJdGVtcygpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XG4gICAgICBwdXNoZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXMocHVzaGVkSXRlbS4kaXRlbSwgcHVzaGVkSXRlbS5pdGVtKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gIH1cblxuICBjaGVja1B1c2hCYWNrKCk6IHZvaWQge1xuICAgIGxldCBpOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tQdXNoZWRJdGVtKHRoaXMucHVzaGVkSXRlbXNbaV0sIGkpKSB7XG4gICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHVzaChncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+ID0gdGhpcy5ncmlkc3Rlci5maW5kSXRlbXNXaXRoSXRlbShncmlkc3Rlckl0ZW0uJGl0ZW0pO1xuICAgIGxldCBpID0gYS5sZW5ndGggLSAxLCBpdGVtQ29sbGlzaW9uOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gICAgbGV0IG1ha2VQdXNoID0gdHJ1ZTtcbiAgICBjb25zdCBiOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+ID0gW107XG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XG4gICAgICBpdGVtQ29sbGlzaW9uID0gYVtpXTtcbiAgICAgIGlmIChpdGVtQ29sbGlzaW9uID09PSB0aGlzLmdyaWRzdGVySXRlbSkge1xuICAgICAgICBtYWtlUHVzaCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghaXRlbUNvbGxpc2lvbi5jYW5CZURyYWdnZWQoKSkge1xuICAgICAgICBtYWtlUHVzaCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBhcmUgPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5maW5kKChlbDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB7XG4gICAgICAgIHJldHVybiBlbC4kaXRlbS54ID09PSBpdGVtQ29sbGlzaW9uLiRpdGVtLnggJiYgZWwuJGl0ZW0ueSA9PT0gaXRlbUNvbGxpc2lvbi4kaXRlbS55O1xuICAgICAgfSk7XG4gICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICBtYWtlUHVzaCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVswXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XG4gICAgICAgIGIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl1bMV0uY2FsbCh0aGlzLCBpdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0pKSB7XG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlci5wdXNoKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgICBiLnB1c2goaXRlbUNvbGxpc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dWzJdLmNhbGwodGhpcywgaXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtKSkge1xuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVszXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XG4gICAgICAgIGIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1ha2VQdXNoKSB7XG4gICAgICBpID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyLmxhc3RJbmRleE9mKGJbMF0pO1xuICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICBsZXQgaiA9IHRoaXMucHVzaGVkSXRlbXNPcmRlci5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKDsgaiA+PSBpOyBqLS0pIHtcbiAgICAgICAgICBpdGVtQ29sbGlzaW9uID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyW2pdO1xuICAgICAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlci5wb3AoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVB1c2hlZEl0ZW0oaXRlbUNvbGxpc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1ha2VQdXNoO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlTb3V0aChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLnNvdXRoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbS4kaXRlbS55ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3M7XG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21Ob3J0aCkpIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHRyeU5vcnRoKGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaERpcmVjdGlvbnMubm9ydGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3M7XG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21Tb3V0aCkpIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHRyeUVhc3QoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoRGlyZWN0aW9ucy5lYXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGdyaWRzdGVySXRlbS4kaXRlbS54ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHM7XG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21XZXN0KSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5V2VzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLndlc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHM7XG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21FYXN0KSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgbGV0IGkgPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5pbmRleE9mKGdyaWRzdGVySXRlbSk7XG4gICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAucHVzaChncmlkc3Rlckl0ZW0pIC0gMTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGhbaV0ucHVzaCh7eDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsIHk6IGdyaWRzdGVySXRlbS4kaXRlbS55fSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcbiAgICBjb25zdCB0ZW1wUG9zaXRpb24gPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGhbaV0ucG9wKCk7XG4gICAgaWYgKCF0ZW1wUG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0ZW1wUG9zaXRpb24ueDtcbiAgICBncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRlbXBQb3NpdGlvbi55O1xuICAgIGdyaWRzdGVySXRlbS5zZXRTaXplKCk7XG4gICAgaWYgKCF0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGhbaV0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGguc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSkgPCAwKSB7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zLnB1c2goZ3JpZHN0ZXJJdGVtKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnB1c2goW3t4OiBncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDAsIHk6IGdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMH0sXG4gICAgICAgIHt4OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueCwgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnl9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnB1c2goe3g6IGdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueX0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVB1c2hlZChpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUZyb21QdXNoZWRJdGVtKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXMuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnBvcCgpO1xuICAgICAgaWYgKCF0aGlzLnB1c2hlZEl0ZW1zUGF0aC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHVzaGVkSXRlbShwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnB1c2hlZEl0ZW1zUGF0aFtpXTtcbiAgICBsZXQgaiA9IHBhdGgubGVuZ3RoIC0gMjtcbiAgICBsZXQgbGFzdFBvc2l0aW9uLCB4LCB5O1xuICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcbiAgICBmb3IgKDsgaiA+IC0xOyBqLS0pIHtcbiAgICAgIGxhc3RQb3NpdGlvbiA9IHBhdGhbal07XG4gICAgICB4ID0gcHVzaGVkSXRlbS4kaXRlbS54O1xuICAgICAgeSA9IHB1c2hlZEl0ZW0uJGl0ZW0ueTtcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IGxhc3RQb3NpdGlvbi54O1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gbGFzdFBvc2l0aW9uLnk7XG4gICAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuZmluZEl0ZW1XaXRoSXRlbShwdXNoZWRJdGVtLiRpdGVtKSkge1xuICAgICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcbiAgICAgICAgcGF0aC5zcGxpY2UoaiArIDEsIHBhdGgubGVuZ3RoIC0gaiAtIDEpO1xuICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0geDtcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0geTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tUHVzaGVkKGkpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJTd2FwfSBmcm9tICcuL2dyaWRzdGVyU3dhcC5zZXJ2aWNlJztcbmltcG9ydCB7Y2FuY2VsU2Nyb2xsLCBzY3JvbGx9IGZyb20gJy4vZ3JpZHN0ZXJTY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyUHVzaH0gZnJvbSAnLi9ncmlkc3RlclB1c2guc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyVXRpbHN9IGZyb20gJy4vZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJEcmFnZ2FibGUge1xuICBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xuICBsYXN0TW91c2U6IHtcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyXG4gIH07XG4gIG9mZnNldExlZnQ6IG51bWJlcjtcbiAgb2Zmc2V0VG9wOiBudW1iZXI7XG4gIG1hcmdpbjogbnVtYmVyO1xuICBkaWZmVG9wOiBudW1iZXI7XG4gIGRpZmZMZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBwb3NpdGlvblg6IG51bWJlcjtcbiAgcG9zaXRpb25ZOiBudW1iZXI7XG4gIHBvc2l0aW9uWEJhY2t1cDogbnVtYmVyO1xuICBwb3NpdGlvbllCYWNrdXA6IG51bWJlcjtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgZHJhZ1N0YXJ0RnVuY3Rpb246IChldmVudDogYW55KSA9PiB2b2lkO1xuICBkcmFnRnVuY3Rpb246IChldmVudDogYW55KSA9PiB2b2lkO1xuICBkcmFnU3RvcEZ1bmN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgbW91c2Vtb3ZlOiBGdW5jdGlvbjtcbiAgbW91c2V1cDogRnVuY3Rpb247XG4gIG1vdXNlbGVhdmU6IEZ1bmN0aW9uO1xuICBjYW5jZWxPbkJsdXI6IEZ1bmN0aW9uO1xuICB0b3VjaG1vdmU6IEZ1bmN0aW9uO1xuICB0b3VjaGVuZDogRnVuY3Rpb247XG4gIHRvdWNoY2FuY2VsOiBGdW5jdGlvbjtcbiAgbW91c2Vkb3duOiBGdW5jdGlvbjtcbiAgdG91Y2hzdGFydDogRnVuY3Rpb247XG4gIHB1c2g6IEdyaWRzdGVyUHVzaDtcbiAgc3dhcDogR3JpZHN0ZXJTd2FwO1xuICBwYXRoOiBBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+O1xuICBjb2xsaXNpb246IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtID0gZ3JpZHN0ZXJJdGVtO1xuICAgIHRoaXMuZ3JpZHN0ZXIgPSBncmlkc3RlcjtcbiAgICB0aGlzLmxhc3RNb3VzZSA9IHtcbiAgICAgIGNsaWVudFg6IDAsXG4gICAgICBjbGllbnRZOiAwXG4gICAgfTtcbiAgICB0aGlzLnBhdGggPSBbXTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSh0cnVlKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXJJdGVtO1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICAgIGRlbGV0ZSB0aGlzLmNvbGxpc2lvbjtcbiAgICBpZiAodGhpcy5tb3VzZWRvd24pIHtcbiAgICAgIHRoaXMubW91c2Vkb3duKCk7XG4gICAgICB0aGlzLnRvdWNoc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICAvLyByaWdodCBvciBtaWRkbGUgbW91c2UgYnV0dG9uXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZSAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlLnN0YXJ0KSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlLnN0YXJ0KHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0sIHRoaXMuZ3JpZHN0ZXJJdGVtLCBlKTtcbiAgICB9XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyYWdGdW5jdGlvbiA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWdTdG9wRnVuY3Rpb24gPSB0aGlzLmRyYWdTdG9wLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0Z1bmN0aW9uKTtcbiAgICAgIHRoaXMudG91Y2htb3ZlID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0Z1bmN0aW9uKTtcbiAgICB9KTtcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMubW91c2VsZWF2ZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2VsZWF2ZScsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy5jYW5jZWxPbkJsdXIgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdibHVyJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLnRvdWNoZW5kID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy50b3VjaGNhbmNlbCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAnZ3JpZHN0ZXItaXRlbS1tb3ZpbmcnKTtcbiAgICB0aGlzLm1hcmdpbiA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgIHRoaXMub2Zmc2V0TGVmdCA9IHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLm9mZnNldFRvcCA9IHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsVG9wIC0gdGhpcy5ncmlkc3Rlci5lbC5vZmZzZXRUb3A7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5ncmlkc3Rlckl0ZW0ubGVmdCAtIHRoaXMubWFyZ2luO1xuICAgIHRoaXMudG9wID0gdGhpcy5ncmlkc3Rlckl0ZW0udG9wIC0gdGhpcy5tYXJnaW47XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaGVpZ2h0O1xuICAgIHRoaXMuZGlmZkxlZnQgPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLm1hcmdpbiAtIHRoaXMubGVmdDtcbiAgICB0aGlzLmRpZmZUb3AgPSBlLmNsaWVudFkgKyB0aGlzLm9mZnNldFRvcCAtIHRoaXMubWFyZ2luIC0gdGhpcy50b3A7XG4gICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW07XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUodHJ1ZSk7XG4gICAgdGhpcy5wdXNoID0gbmV3IEdyaWRzdGVyUHVzaCh0aGlzLmdyaWRzdGVySXRlbSk7XG4gICAgdGhpcy5zd2FwID0gbmV3IEdyaWRzdGVyU3dhcCh0aGlzLmdyaWRzdGVySXRlbSk7XG4gICAgdGhpcy5ncmlkc3Rlci5kcmFnSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgdGhpcy5ncmlkc3Rlci51cGRhdGVHcmlkKCk7XG4gICAgdGhpcy5wYXRoLnB1c2goe3g6IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueCB8fCAwLCB5OiB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMH0pO1xuICB9XG5cbiAgZHJhZ01vdmUoZTogYW55KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxMZWZ0IC0gdGhpcy5ncmlkc3Rlci5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMub2Zmc2V0VG9wID0gdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxUb3AgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldFRvcDtcbiAgICBzY3JvbGwodGhpcy5ncmlkc3RlciwgdGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIGUsIHRoaXMubGFzdE1vdXNlLFxuICAgICAgdGhpcy5jYWxjdWxhdGVJdGVtUG9zaXRpb25Gcm9tTW91c2VQb3NpdGlvbi5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY2FsY3VsYXRlSXRlbVBvc2l0aW9uRnJvbU1vdXNlUG9zaXRpb24oZSk7XG4gIH1cblxuICBjYWxjdWxhdGVJdGVtUG9zaXRpb25Gcm9tTW91c2VQb3NpdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxlZnQgPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLmRpZmZMZWZ0O1xuICAgIHRoaXMudG9wID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLmRpZmZUb3A7XG4gICAgdGhpcy5jYWxjdWxhdGVJdGVtUG9zaXRpb24oKTtcbiAgICB0aGlzLmxhc3RNb3VzZS5jbGllbnRYID0gZS5jbGllbnRYO1xuICAgIHRoaXMubGFzdE1vdXNlLmNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnVwZGF0ZUdyaWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYWdTdG9wKGU6IGFueSk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY2FuY2VsU2Nyb2xsKCk7XG4gICAgdGhpcy5jYW5jZWxPbkJsdXIoKTtcbiAgICB0aGlzLm1vdXNlbW92ZSgpO1xuICAgIHRoaXMubW91c2V1cCgpO1xuICAgIHRoaXMubW91c2VsZWF2ZSgpO1xuICAgIHRoaXMudG91Y2htb3ZlKCk7XG4gICAgdGhpcy50b3VjaGVuZCgpO1xuICAgIHRoaXMudG91Y2hjYW5jZWwoKTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2dyaWRzdGVyLWl0ZW0tbW92aW5nJyk7XG4gICAgdGhpcy5ncmlkc3Rlci5kcmFnSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5kcmFnZ2FibGUuc3RvcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5kcmFnZ2FibGUuc3RvcCh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmdyaWRzdGVySXRlbSwgZSkpXG4gICAgICAgIC50aGVuKHRoaXMubWFrZURyYWcuYmluZCh0aGlzKSwgdGhpcy5jYW5jZWxEcmFnLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ha2VEcmFnKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxEcmFnKCkge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnggfHwgMDtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDA7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uc2V0U2l6ZSgpO1xuICAgIGlmICh0aGlzLnB1c2gpIHtcbiAgICAgIHRoaXMucHVzaC5yZXN0b3JlSXRlbXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLnJlc3RvcmVTd2FwSXRlbSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wdXNoKSB7XG4gICAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucHVzaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnN3YXA7XG4gICAgfVxuICB9XG5cbiAgbWFrZURyYWcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyb3BPdmVySXRlbXMgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZVxuICAgICAgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZS5kcm9wT3Zlckl0ZW1zQ2FsbGJhY2tcbiAgICAgICYmIHRoaXMuY29sbGlzaW9uICYmIHRoaXMuY29sbGlzaW9uICE9PSB0cnVlICYmIHRoaXMuY29sbGlzaW9uLiRpdGVtKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlLmRyb3BPdmVySXRlbXNDYWxsYmFjayh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmNvbGxpc2lvbi5pdGVtLCB0aGlzLmdyaWRzdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb2xsaXNpb24gPSBmYWxzZTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5zZXRTaXplKCk7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSwgdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbSk7XG4gICAgaWYgKHRoaXMucHVzaCkge1xuICAgICAgdGhpcy5wdXNoLnNldFB1c2hlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN3YXApIHtcbiAgICAgIHRoaXMuc3dhcC5zZXRTd2FwSXRlbSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wdXNoKSB7XG4gICAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucHVzaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnN3YXA7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uKCkge1xuICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtO1xuICAgIHRoaXMucG9zaXRpb25YID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWCh0aGlzLmxlZnQsIE1hdGgucm91bmQpO1xuICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWSh0aGlzLnRvcCwgTWF0aC5yb3VuZCk7XG4gICAgdGhpcy5wb3NpdGlvblhCYWNrdXAgPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54O1xuICAgIHRoaXMucG9zaXRpb25ZQmFja3VwID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5wb3NpdGlvblg7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRoaXMucG9zaXRpb25YQmFja3VwO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5wb3NpdGlvblk7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMucG9zaXRpb25ZQmFja3VwO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVyLmdyaWRSZW5kZXJlci5zZXRDZWxsUG9zaXRpb24odGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIsIHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCB0aGlzLmxlZnQsIHRoaXMudG9wKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uWEJhY2t1cCAhPT0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCB8fCB0aGlzLnBvc2l0aW9uWUJhY2t1cCAhPT0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSkge1xuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gdGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSAnJztcbiAgICAgIGlmIChsYXN0UG9zaXRpb24ueCA8IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLngpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21XZXN0O1xuICAgICAgfSBlbHNlIGlmIChsYXN0UG9zaXRpb24ueCA+IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLngpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21FYXN0O1xuICAgICAgfSBlbHNlIGlmIChsYXN0UG9zaXRpb24ueSA8IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21Ob3J0aDtcbiAgICAgIH0gZWxzZSBpZiAobGFzdFBvc2l0aW9uLnkgPiB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMucHVzaC5mcm9tU291dGg7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2gucHVzaEl0ZW1zKGRpcmVjdGlvbiwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlUHVzaE9uRHJhZyk7XG4gICAgICB0aGlzLnN3YXAuc3dhcEl0ZW1zKCk7XG4gICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0pO1xuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLnBvc2l0aW9uWEJhY2t1cDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMucG9zaXRpb25ZQmFja3VwO1xuICAgICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZHJvcE92ZXJJdGVtcyAmJiB0aGlzLmNvbGxpc2lvbiAhPT0gdHJ1ZSAmJiB0aGlzLmNvbGxpc2lvbi4kaXRlbSkge1xuICAgICAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKHt4OiB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55fSk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2guY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSh0cnVlKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCBlbmFibGVEcmFnID0gdGhpcy5ncmlkc3Rlckl0ZW0uY2FuQmVEcmFnZ2VkKCk7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQgJiYgZW5hYmxlRHJhZykge1xuICAgICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZDtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0RnVuY3Rpb24gPSB0aGlzLmRyYWdTdGFydERlbGF5LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ21vdXNlZG93bicsIHRoaXMuZHJhZ1N0YXJ0RnVuY3Rpb24pO1xuICAgICAgdGhpcy50b3VjaHN0YXJ0ID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAndG91Y2hzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0RnVuY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbmFibGVkICYmICFlbmFibGVEcmFnKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkO1xuICAgICAgdGhpcy5tb3VzZWRvd24oKTtcbiAgICAgIHRoaXMudG91Y2hzdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdTdGFydERlbGF5KGU6IGFueSk6IHZvaWQge1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignZ3JpZHN0ZXItaXRlbS1yZXNpemFibGUtaGFuZGxlcicpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3NGb3JFdmVudCh0aGlzLmdyaWRzdGVyLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBHcmlkc3RlclV0aWxzLmNoZWNrVG91Y2hFdmVudChlKTtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRlbGF5U3RhcnQpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYWdTdGFydChlKTtcbiAgICAgIGNhbmNlbERyYWcoKTtcbiAgICB9LCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5kZWxheVN0YXJ0KTtcbiAgICBjb25zdCBjYW5jZWxNb3VzZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIGNhbmNlbERyYWcpO1xuICAgIGNvbnN0IGNhbmNlbE1vdXNlTGVhdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbGVhdmUnLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxPbkJsdXIgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdibHVyJywgY2FuY2VsRHJhZyk7XG4gICAgY29uc3QgY2FuY2VsVG91Y2hNb3ZlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCBjYW5jZWxNb3ZlKTtcbiAgICBjb25zdCBjYW5jZWxUb3VjaEVuZCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxUb3VjaENhbmNlbCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hjYW5jZWwnLCBjYW5jZWxEcmFnKTtcblxuICAgIGZ1bmN0aW9uIGNhbmNlbE1vdmUoZXZlbnRNb3ZlOiBhbnkpIHtcbiAgICAgIEdyaWRzdGVyVXRpbHMuY2hlY2tUb3VjaEV2ZW50KGV2ZW50TW92ZSk7XG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnRNb3ZlLmNsaWVudFggLSBlLmNsaWVudFgpID4gOSB8fCBNYXRoLmFicyhldmVudE1vdmUuY2xpZW50WSAtIGUuY2xpZW50WSkgPiA5KSB7XG4gICAgICAgIGNhbmNlbERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxEcmFnKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgY2FuY2VsT25CbHVyKCk7XG4gICAgICBjYW5jZWxNb3VzZSgpO1xuICAgICAgY2FuY2VsTW91c2VMZWF2ZSgpO1xuICAgICAgY2FuY2VsVG91Y2hNb3ZlKCk7XG4gICAgICBjYW5jZWxUb3VjaEVuZCgpO1xuICAgICAgY2FuY2VsVG91Y2hDYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclB1c2hSZXNpemUge1xuICBwdWJsaWMgZnJvbVNvdXRoOiBzdHJpbmc7XG4gIHB1YmxpYyBmcm9tTm9ydGg6IHN0cmluZztcbiAgcHVibGljIGZyb21FYXN0OiBzdHJpbmc7XG4gIHB1YmxpYyBmcm9tV2VzdDogc3RyaW5nO1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zUGF0aDogQXJyYXk8QXJyYXk8R3JpZHN0ZXJJdGVtPj47XG4gIHByaXZhdGUgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xuICBwcml2YXRlIHRyeVBhdHRlcm46IHtcbiAgICBmcm9tRWFzdDogRnVuY3Rpb24sXG4gICAgZnJvbVdlc3Q6IEZ1bmN0aW9uLFxuICAgIGZyb21Ob3J0aDogRnVuY3Rpb24sXG4gICAgZnJvbVNvdXRoOiBGdW5jdGlvbixcbiAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcbiAgICB0aGlzLnRyeVBhdHRlcm4gPSB7XG4gICAgICBmcm9tRWFzdDogdGhpcy50cnlXZXN0LFxuICAgICAgZnJvbVdlc3Q6IHRoaXMudHJ5RWFzdCxcbiAgICAgIGZyb21Ob3J0aDogdGhpcy50cnlTb3V0aCxcbiAgICAgIGZyb21Tb3V0aDogdGhpcy50cnlOb3J0aFxuICAgIH07XG4gICAgdGhpcy5mcm9tU291dGggPSAnZnJvbVNvdXRoJztcbiAgICB0aGlzLmZyb21Ob3J0aCA9ICdmcm9tTm9ydGgnO1xuICAgIHRoaXMuZnJvbUVhc3QgPSAnZnJvbUVhc3QnO1xuICAgIHRoaXMuZnJvbVdlc3QgPSAnZnJvbVdlc3QnO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XG4gIH1cblxuICBwdXNoSXRlbXMoZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoUmVzaXplSXRlbXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2godGhpcy5ncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlSXRlbXMoKTogdm9pZCB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGw6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoO1xuICAgIGxldCBwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHB1c2hlZEl0ZW0gPSB0aGlzLnB1c2hlZEl0ZW1zW2ldO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gcHVzaGVkSXRlbS5pdGVtLnggfHwgMDtcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IHB1c2hlZEl0ZW0uaXRlbS55IHx8IDA7XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLmNvbHMgPSBwdXNoZWRJdGVtLml0ZW0uY29scyB8fCAxO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5yb3cgPSBwdXNoZWRJdGVtLml0ZW0ucm93IHx8IDE7XG4gICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gIH1cblxuICBzZXRQdXNoZWRJdGVtcygpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XG4gICAgICBwdXNoZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXMocHVzaGVkSXRlbS4kaXRlbSwgcHVzaGVkSXRlbS5pdGVtKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gIH1cblxuICBjaGVja1B1c2hCYWNrKCk6IHZvaWQge1xuICAgIGxldCBpOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tQdXNoZWRJdGVtKHRoaXMucHVzaGVkSXRlbXNbaV0sIGkpKSB7XG4gICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHVzaChncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBncmlkc3Rlckl0ZW1Db2xsaXNpb246IGFueSA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtLiRpdGVtKTtcbiAgICBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbiAhPT0gdHJ1ZSAmJlxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICE9PSB0aGlzLmdyaWRzdGVySXRlbSAmJiBncmlkc3Rlckl0ZW1Db2xsaXNpb24uY2FuQmVSZXNpemVkKCkpIHtcbiAgICAgIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXS5jYWxsKHRoaXMsIGdyaWRzdGVySXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5U291dGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcbiAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJhY2tVcFkgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XG4gICAgY29uc3QgYmFja1VwUm93cyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cztcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSArIGdyaWRzdGVySXRlbS4kaXRlbS5yb3dzO1xuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cyA9IGJhY2tVcFJvd3MgKyBiYWNrVXBZIC0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55O1xuICAgIGlmICghR3JpZHN0ZXJDb21wb25lbnQuY2hlY2tDb2xsaXNpb25Ud29JdGVtcyhncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLCBncmlkc3Rlckl0ZW0uJGl0ZW0pXG4gICAgICAmJiAhdGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkpIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICAgIHRoaXMucHVzaChncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gYmFja1VwWTtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cyA9IGJhY2tVcFJvd3M7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5Tm9ydGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcbiAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJhY2tVcFJvd3MgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3M7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XG4gICAgaWYgKCFHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0sIGdyaWRzdGVySXRlbS4kaXRlbSlcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBiYWNrVXBSb3dzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHRyeUVhc3QoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmFja1VwWCA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcbiAgICBjb25zdCBiYWNrVXBDb2xzID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzO1xuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGdyaWRzdGVySXRlbS4kaXRlbS54ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHM7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gYmFja1VwQ29scyArIGJhY2tVcFggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XG4gICAgaWYgKCFHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0sIGdyaWRzdGVySXRlbS4kaXRlbSlcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBiYWNrVXBYO1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gYmFja1VwQ29scztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlXZXN0KGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJhY2tVcENvbHMgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHM7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XG4gICAgaWYgKCFHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0sIGdyaWRzdGVySXRlbS4kaXRlbSlcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBiYWNrVXBDb2xzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHVzaGVkSXRlbXMuaW5kZXhPZihncmlkc3Rlckl0ZW0pIDwgMCkge1xuICAgICAgdGhpcy5wdXNoZWRJdGVtcy5wdXNoKGdyaWRzdGVySXRlbSk7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5wdXNoKFtcbiAgICAgICAge1xuICAgICAgICAgIHg6IGdyaWRzdGVySXRlbS5pdGVtLnggfHwgMCxcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDAsXG4gICAgICAgICAgY29sczogZ3JpZHN0ZXJJdGVtLml0ZW0uY29scyB8fCAwLFxuICAgICAgICAgIHJvd3M6IGdyaWRzdGVySXRlbS5pdGVtLnJvd3MgfHwgMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsXG4gICAgICAgICAgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnksXG4gICAgICAgICAgY29sczogZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMsXG4gICAgICAgICAgcm93czogZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3NcbiAgICAgICAgfV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSk7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aFtpXS5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgeDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsXG4gICAgICAgICAgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnksXG4gICAgICAgICAgY29sczogZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMsXG4gICAgICAgICAgcm93czogZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGcm9tUHVzaGVkKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGguc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQdXNoZWRJdGVtKHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgaTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldO1xuICAgIGxldCBqID0gcGF0aC5sZW5ndGggLSAyO1xuICAgIGxldCBsYXN0UG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyIH0sIHgsIHksIGNvbHMsIHJvd3M7XG4gICAgZm9yICg7IGogPiAtMTsgai0tKSB7XG4gICAgICBsYXN0UG9zaXRpb24gPSBwYXRoW2pdO1xuICAgICAgeCA9IHB1c2hlZEl0ZW0uJGl0ZW0ueDtcbiAgICAgIHkgPSBwdXNoZWRJdGVtLiRpdGVtLnk7XG4gICAgICBjb2xzID0gcHVzaGVkSXRlbS4kaXRlbS5jb2xzO1xuICAgICAgcm93cyA9IHB1c2hlZEl0ZW0uJGl0ZW0ucm93cztcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IGxhc3RQb3NpdGlvbi54O1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gbGFzdFBvc2l0aW9uLnk7XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLmNvbHMgPSBsYXN0UG9zaXRpb24uY29scztcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ucm93cyA9IGxhc3RQb3NpdGlvbi5yb3dzO1xuICAgICAgaWYgKCF0aGlzLmdyaWRzdGVyLmZpbmRJdGVtV2l0aEl0ZW0ocHVzaGVkSXRlbS4kaXRlbSkpIHtcbiAgICAgICAgcHVzaGVkSXRlbS5zZXRTaXplKCk7XG4gICAgICAgIHBhdGguc3BsaWNlKGogKyAxLCBwYXRoLmxlbmd0aCAtIDEgLSBqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IHg7XG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IHk7XG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0uY29scyA9IGNvbHM7XG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ucm93cyA9IHJvd3M7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXRoLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVB1c2hlZChpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtjYW5jZWxTY3JvbGwsIHNjcm9sbH0gZnJvbSAnLi9ncmlkc3RlclNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJSZXNpemVFdmVudFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJSZXNpemVFdmVudFR5cGUuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJQdXNofSBmcm9tICcuL2dyaWRzdGVyUHVzaC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJVdGlsc30gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3RlclB1c2hSZXNpemV9IGZyb20gJy4vZ3JpZHN0ZXJQdXNoUmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclJlc2l6YWJsZSB7XG4gIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2U7XG4gIGxhc3RNb3VzZToge1xuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXJcbiAgfTtcbiAgaXRlbUJhY2t1cDogQXJyYXk8bnVtYmVyPjtcbiAgcmVzaXplRXZlbnRTY3JvbGxUeXBlOiBHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZTtcbiAgZGlyZWN0aW9uRnVuY3Rpb246IEZ1bmN0aW9uO1xuICBkcmFnRnVuY3Rpb246IChldmVudDogYW55KSA9PiB2b2lkO1xuICBkcmFnU3RvcEZ1bmN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgcmVzaXplRW5hYmxlZDogYm9vbGVhbjtcbiAgbW91c2Vtb3ZlOiBGdW5jdGlvbjtcbiAgbW91c2V1cDogRnVuY3Rpb247XG4gIG1vdXNlbGVhdmU6IEZ1bmN0aW9uO1xuICBjYW5jZWxPbkJsdXI6IEZ1bmN0aW9uO1xuICB0b3VjaG1vdmU6IEZ1bmN0aW9uO1xuICB0b3VjaGVuZDogRnVuY3Rpb247XG4gIHRvdWNoY2FuY2VsOiBGdW5jdGlvbjtcbiAgcHVzaDogR3JpZHN0ZXJQdXNoO1xuICBwdXNoUmVzaXplOiBHcmlkc3RlclB1c2hSZXNpemU7XG4gIG1pbkhlaWdodDogbnVtYmVyO1xuICBtaW5XaWR0aDogbnVtYmVyO1xuICBvZmZzZXRUb3A6IG51bWJlcjtcbiAgb2Zmc2V0TGVmdDogbnVtYmVyO1xuICBkaWZmVG9wOiBudW1iZXI7XG4gIGRpZmZMZWZ0OiBudW1iZXI7XG4gIGRpZmZSaWdodDogbnVtYmVyO1xuICBkaWZmQm90dG9tOiBudW1iZXI7XG4gIG1hcmdpbjogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG5ld1Bvc2l0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXI7XG4gICAgdGhpcy5sYXN0TW91c2UgPSB7XG4gICAgICBjbGllbnRYOiAwLFxuICAgICAgY2xpZW50WTogMFxuICAgIH07XG4gICAgdGhpcy5pdGVtQmFja3VwID0gWzAsIDAsIDAsIDBdO1xuICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlID0ge3c6IGZhbHNlLCBlOiBmYWxzZSwgbjogZmFsc2UsIHM6IGZhbHNlfTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XG4gIH1cblxuICBkcmFnU3RhcnQoZTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICAvLyByaWdodCBvciBtaWRkbGUgbW91c2UgYnV0dG9uXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5yZXNpemFibGUgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLnJlc2l6YWJsZS5zdGFydCkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLnJlc2l6YWJsZS5zdGFydCh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmdyaWRzdGVySXRlbSwgZSk7XG4gICAgfVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJhZ0Z1bmN0aW9uID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbiA9IHRoaXMuZHJhZ1N0b3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0Z1bmN0aW9uKTtcbiAgICAgIHRoaXMudG91Y2htb3ZlID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0Z1bmN0aW9uKTtcbiAgICB9KTtcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMubW91c2VsZWF2ZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2VsZWF2ZScsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy5jYW5jZWxPbkJsdXIgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdibHVyJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLnRvdWNoZW5kID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy50b3VjaGNhbmNlbCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuXG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ncmlkc3Rlckl0ZW0uZWwsICdncmlkc3Rlci1pdGVtLXJlc2l6aW5nJyk7XG4gICAgdGhpcy5sYXN0TW91c2UuY2xpZW50WCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLmxhc3RNb3VzZS5jbGllbnRZID0gZS5jbGllbnRZO1xuICAgIHRoaXMubGVmdCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLmxlZnQ7XG4gICAgdGhpcy50b3AgPSB0aGlzLmdyaWRzdGVySXRlbS50b3A7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaGVpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gdGhpcy5ncmlkc3Rlckl0ZW0udG9wICsgdGhpcy5ncmlkc3Rlckl0ZW0uaGVpZ2h0O1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLmdyaWRzdGVySXRlbS5sZWZ0ICsgdGhpcy5ncmlkc3Rlckl0ZW0ud2lkdGg7XG4gICAgdGhpcy5tYXJnaW4gPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICB0aGlzLm9mZnNldExlZnQgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbExlZnQgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5vZmZzZXRUb3AgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbFRvcCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0VG9wO1xuICAgIHRoaXMuZGlmZkxlZnQgPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLmxlZnQ7XG4gICAgdGhpcy5kaWZmUmlnaHQgPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLnJpZ2h0O1xuICAgIHRoaXMuZGlmZlRvcCA9IGUuY2xpZW50WSArIHRoaXMub2Zmc2V0VG9wIC0gdGhpcy50b3A7XG4gICAgdGhpcy5kaWZmQm90dG9tID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLmJvdHRvbTtcbiAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMuZ3JpZHN0ZXIucG9zaXRpb25ZVG9QaXhlbHModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ubWluSXRlbVJvd3MgfHwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5taW5JdGVtUm93cylcbiAgICAgIC0gdGhpcy5tYXJnaW47XG4gICAgdGhpcy5taW5XaWR0aCA9IHRoaXMuZ3JpZHN0ZXIucG9zaXRpb25YVG9QaXhlbHModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ubWluSXRlbUNvbHMgfHwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5taW5JdGVtQ29scylcbiAgICAgIC0gdGhpcy5tYXJnaW47XG4gICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW07XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICB0aGlzLnB1c2ggPSBuZXcgR3JpZHN0ZXJQdXNoKHRoaXMuZ3JpZHN0ZXJJdGVtKTtcbiAgICB0aGlzLnB1c2hSZXNpemUgPSBuZXcgR3JpZHN0ZXJQdXNoUmVzaXplKHRoaXMuZ3JpZHN0ZXJJdGVtKTtcbiAgICB0aGlzLmdyaWRzdGVyLmRyYWdJblByb2dyZXNzID0gdHJ1ZTtcbiAgICB0aGlzLmdyaWRzdGVyLnVwZGF0ZUdyaWQoKTtcblxuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLW4nKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5uID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZU47XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLXcnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS53ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZVc7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLXMnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5zID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZVM7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLWUnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5lID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZUU7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLW53JykgPiAtMSkge1xuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUubiA9IHRydWU7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS53ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZU5XO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdjbGFzcycpICYmIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgnICcpLmluZGV4T2YoJ2hhbmRsZS1uZScpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLm4gPSB0cnVlO1xuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUuZSA9IHRydWU7XG4gICAgICB0aGlzLmRpcmVjdGlvbkZ1bmN0aW9uID0gdGhpcy5oYW5kbGVORTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtc3cnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5zID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLncgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlU1c7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLXNlJykgPiAtMSkge1xuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUucyA9IHRydWU7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5lID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZVNFO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdNb3ZlKGU6IGFueSk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIEdyaWRzdGVyVXRpbHMuY2hlY2tUb3VjaEV2ZW50KGUpO1xuICAgIHRoaXMub2Zmc2V0VG9wID0gdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxUb3AgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldFRvcDtcbiAgICB0aGlzLm9mZnNldExlZnQgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbExlZnQgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldExlZnQ7XG4gICAgc2Nyb2xsKHRoaXMuZ3JpZHN0ZXIsIHRoaXMubGVmdCwgdGhpcy50b3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBlLCB0aGlzLmxhc3RNb3VzZSwgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbi5iaW5kKHRoaXMpLCB0cnVlLFxuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUpO1xuICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24oZSk7XG5cbiAgICB0aGlzLmxhc3RNb3VzZS5jbGllbnRYID0gZS5jbGllbnRYO1xuICAgIHRoaXMubGFzdE1vdXNlLmNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnVwZGF0ZUdyaWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYWdTdG9wKGU6IGFueSk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNhbmNlbFNjcm9sbCgpO1xuICAgIHRoaXMubW91c2Vtb3ZlKCk7XG4gICAgdGhpcy5tb3VzZXVwKCk7XG4gICAgdGhpcy5tb3VzZWxlYXZlKCk7XG4gICAgdGhpcy5jYW5jZWxPbkJsdXIoKTtcbiAgICB0aGlzLnRvdWNobW92ZSgpO1xuICAgIHRoaXMudG91Y2hlbmQoKTtcbiAgICB0aGlzLnRvdWNoY2FuY2VsKCk7XG4gICAgdGhpcy5ncmlkc3Rlci5kcmFnSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMucmVzaXphYmxlICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5yZXNpemFibGUuc3RvcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5yZXNpemFibGUuc3RvcCh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmdyaWRzdGVySXRlbSwgZSkpXG4gICAgICAgIC50aGVuKHRoaXMubWFrZVJlc2l6ZS5iaW5kKHRoaXMpLCB0aGlzLmNhbmNlbFJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYWtlUmVzaXplKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ncmlkc3Rlckl0ZW0uZWwsICdncmlkc3Rlci1pdGVtLXJlc2l6aW5nJyk7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlcikge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsUmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMgPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLmNvbHMgfHwgMTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS5yb3dzIHx8IDE7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueCB8fCAwO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMDtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5zZXRTaXplKCk7XG4gICAgdGhpcy5wdXNoLnJlc3RvcmVJdGVtcygpO1xuICAgIHRoaXMucHVzaFJlc2l6ZS5yZXN0b3JlSXRlbXMoKTtcbiAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLnB1c2g7XG4gICAgdGhpcy5wdXNoUmVzaXplLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5wdXNoUmVzaXplO1xuICB9XG5cbiAgbWFrZVJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5zZXRTaXplKCk7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSwgdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbSk7XG4gICAgdGhpcy5wdXNoLnNldFB1c2hlZEl0ZW1zKCk7XG4gICAgdGhpcy5wdXNoUmVzaXplLnNldFB1c2hlZEl0ZW1zKCk7XG4gICAgdGhpcy5wdXNoLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5wdXNoO1xuICAgIHRoaXMucHVzaFJlc2l6ZS5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMucHVzaFJlc2l6ZTtcbiAgfVxuXG4gIGhhbmRsZU4oZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50b3AgPSBlLmNsaWVudFkgKyB0aGlzLm9mZnNldFRvcCAtIHRoaXMuZGlmZlRvcDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG4gICAgaWYgKHRoaXMubWluSGVpZ2h0ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQ7XG4gICAgICB0aGlzLnRvcCA9IHRoaXMuYm90dG9tIC0gdGhpcy5taW5IZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMubmV3UG9zaXRpb24gPSB0aGlzLmdyaWRzdGVyLnBpeGVsc1RvUG9zaXRpb25ZKHRoaXMudG9wICsgdGhpcy5tYXJnaW4sIE1hdGguZmxvb3IpO1xuICAgIGlmICh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ICE9PSB0aGlzLm5ld1Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLml0ZW1CYWNrdXBbMV0gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55O1xuICAgICAgdGhpcy5pdGVtQmFja3VwWzNdID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cztcbiAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MgKz0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSAtIHRoaXMubmV3UG9zaXRpb247XG4gICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5uZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5wdXNoSXRlbXModGhpcy5wdXNoUmVzaXplLmZyb21Tb3V0aCk7XG4gICAgICB0aGlzLnB1c2gucHVzaEl0ZW1zKHRoaXMucHVzaC5mcm9tU291dGgsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZGlzYWJsZVB1c2hPblJlc2l6ZSk7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSkpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMuaXRlbUJhY2t1cFsxXTtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cyA9IHRoaXMuaXRlbUJhY2t1cFszXTtcbiAgICAgICAgdGhpcy5zZXRJdGVtVG9wKHRoaXMuZ3JpZHN0ZXIucG9zaXRpb25ZVG9QaXhlbHModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSkpO1xuICAgICAgICB0aGlzLnNldEl0ZW1IZWlnaHQodGhpcy5ncmlkc3Rlci5wb3NpdGlvbllUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzKSAtIHRoaXMubWFyZ2luKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5jaGVja1B1c2hCYWNrKCk7XG4gICAgICB0aGlzLnB1c2guY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1Ub3AodGhpcy50b3ApO1xuICAgIHRoaXMuc2V0SXRlbUhlaWdodCh0aGlzLmhlaWdodCk7XG4gIH1cblxuICBoYW5kbGVXKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubGVmdCA9IGUuY2xpZW50WCArIHRoaXMub2Zmc2V0TGVmdCAtIHRoaXMuZGlmZkxlZnQ7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7XG4gICAgaWYgKHRoaXMubWluV2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5taW5XaWR0aDtcbiAgICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgLSB0aGlzLm1pbldpZHRoO1xuICAgIH1cbiAgICB0aGlzLm5ld1Bvc2l0aW9uID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWCh0aGlzLmxlZnQgKyB0aGlzLm1hcmdpbiwgTWF0aC5mbG9vcik7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggIT09IHRoaXMubmV3UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaXRlbUJhY2t1cFswXSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLng7XG4gICAgICB0aGlzLml0ZW1CYWNrdXBbMl0gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzO1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyArPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54IC0gdGhpcy5uZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLm5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5wdXNoUmVzaXplLnB1c2hJdGVtcyh0aGlzLnB1c2hSZXNpemUuZnJvbUVhc3QpO1xuICAgICAgdGhpcy5wdXNoLnB1c2hJdGVtcyh0aGlzLnB1c2guZnJvbUVhc3QsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZGlzYWJsZVB1c2hPblJlc2l6ZSk7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSkpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRoaXMuaXRlbUJhY2t1cFswXTtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyA9IHRoaXMuaXRlbUJhY2t1cFsyXTtcbiAgICAgICAgdGhpcy5zZXRJdGVtTGVmdCh0aGlzLmdyaWRzdGVyLnBvc2l0aW9uWFRvUGl4ZWxzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLngpKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtV2lkdGgodGhpcy5ncmlkc3Rlci5wb3NpdGlvblhUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzKSAtIHRoaXMubWFyZ2luKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5jaGVja1B1c2hCYWNrKCk7XG4gICAgICB0aGlzLnB1c2guY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1MZWZ0KHRoaXMubGVmdCk7XG4gICAgdGhpcy5zZXRJdGVtV2lkdGgodGhpcy53aWR0aCk7XG4gIH1cblxuICBoYW5kbGVTKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaGVpZ2h0ID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLmRpZmZCb3R0b20gLSB0aGlzLnRvcDtcbiAgICBpZiAodGhpcy5taW5IZWlnaHQgPiB0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1pbkhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMubmV3UG9zaXRpb24gPSB0aGlzLmdyaWRzdGVyLnBpeGVsc1RvUG9zaXRpb25ZKHRoaXMuYm90dG9tLCBNYXRoLmNlaWwpO1xuICAgIGlmICgodGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSArIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MpICE9PSB0aGlzLm5ld1Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLml0ZW1CYWNrdXBbM10gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzO1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cyA9IHRoaXMubmV3UG9zaXRpb24gLSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55O1xuICAgICAgdGhpcy5wdXNoUmVzaXplLnB1c2hJdGVtcyh0aGlzLnB1c2hSZXNpemUuZnJvbU5vcnRoKTtcbiAgICAgIHRoaXMucHVzaC5wdXNoSXRlbXModGhpcy5wdXNoLmZyb21Ob3J0aCwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlUHVzaE9uUmVzaXplKTtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzID0gdGhpcy5pdGVtQmFja3VwWzNdO1xuICAgICAgICB0aGlzLnNldEl0ZW1IZWlnaHQodGhpcy5ncmlkc3Rlci5wb3NpdGlvbllUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzKSAtIHRoaXMubWFyZ2luKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5jaGVja1B1c2hCYWNrKCk7XG4gICAgICB0aGlzLnB1c2guY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1IZWlnaHQodGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgaGFuZGxlRShlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLndpZHRoID0gZS5jbGllbnRYICsgdGhpcy5vZmZzZXRMZWZ0IC0gdGhpcy5kaWZmUmlnaHQgLSB0aGlzLmxlZnQ7XG4gICAgaWYgKHRoaXMubWluV2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5taW5XaWR0aDtcbiAgICB9XG4gICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgdGhpcy5uZXdQb3NpdGlvbiA9IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblgodGhpcy5yaWdodCwgTWF0aC5jZWlsKTtcbiAgICBpZiAoKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggKyB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzKSAhPT0gdGhpcy5uZXdQb3NpdGlvbikge1xuICAgICAgdGhpcy5pdGVtQmFja3VwWzJdID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scztcbiAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMgPSB0aGlzLm5ld1Bvc2l0aW9uIC0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueDtcbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5wdXNoSXRlbXModGhpcy5wdXNoUmVzaXplLmZyb21XZXN0KTtcbiAgICAgIHRoaXMucHVzaC5wdXNoSXRlbXModGhpcy5wdXNoLmZyb21XZXN0LCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRpc2FibGVQdXNoT25SZXNpemUpO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0pKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMgPSB0aGlzLml0ZW1CYWNrdXBbMl07XG4gICAgICAgIHRoaXMuc2V0SXRlbVdpZHRoKHRoaXMuZ3JpZHN0ZXIucG9zaXRpb25YVG9QaXhlbHModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scykgLSB0aGlzLm1hcmdpbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hSZXNpemUuY2hlY2tQdXNoQmFjaygpO1xuICAgICAgdGhpcy5wdXNoLmNoZWNrUHVzaEJhY2soKTtcbiAgICB9XG4gICAgdGhpcy5zZXRJdGVtV2lkdGgodGhpcy53aWR0aCk7XG4gIH1cblxuICBoYW5kbGVOVyhlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU4oZSk7XG4gICAgdGhpcy5oYW5kbGVXKGUpO1xuICB9XG5cbiAgaGFuZGxlTkUoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVOKGUpO1xuICAgIHRoaXMuaGFuZGxlRShlKTtcbiAgfVxuXG4gIGhhbmRsZVNXKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlUyhlKTtcbiAgICB0aGlzLmhhbmRsZVcoZSk7XG4gIH1cblxuICBoYW5kbGVTRShlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZVMoZSk7XG4gICAgdGhpcy5oYW5kbGVFKGUpO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplRW5hYmxlZCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLmNhbkJlUmVzaXplZCgpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0RGVsYXkoZTogYW55KTogdm9pZCB7XG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnJlc2l6YWJsZS5kZWxheVN0YXJ0KSB7XG4gICAgICB0aGlzLmRyYWdTdGFydChlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kcmFnU3RhcnQoZSk7XG4gICAgICBjYW5jZWxEcmFnKCk7XG4gICAgfSwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5yZXNpemFibGUuZGVsYXlTdGFydCk7XG4gICAgY29uc3QgY2FuY2VsTW91c2UgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxNb3VzZUxlYXZlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZWxlYXZlJywgY2FuY2VsRHJhZyk7XG4gICAgY29uc3QgY2FuY2VsT25CbHVyID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnYmx1cicsIGNhbmNlbERyYWcpO1xuICAgIGNvbnN0IGNhbmNlbFRvdWNoTW92ZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2htb3ZlJywgY2FuY2VsTW92ZSk7XG4gICAgY29uc3QgY2FuY2VsVG91Y2hFbmQgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgY2FuY2VsRHJhZyk7XG4gICAgY29uc3QgY2FuY2VsVG91Y2hDYW5jZWwgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoY2FuY2VsJywgY2FuY2VsRHJhZyk7XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxNb3ZlKGV2ZW50TW92ZTogYW55KSB7XG4gICAgICBHcmlkc3RlclV0aWxzLmNoZWNrVG91Y2hFdmVudChldmVudE1vdmUpO1xuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50TW92ZS5jbGllbnRYIC0gZS5jbGllbnRYKSA+IDkgfHwgTWF0aC5hYnMoZXZlbnRNb3ZlLmNsaWVudFkgLSBlLmNsaWVudFkpID4gOSkge1xuICAgICAgICBjYW5jZWxEcmFnKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsRHJhZygpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIGNhbmNlbE9uQmx1cigpO1xuICAgICAgY2FuY2VsTW91c2UoKTtcbiAgICAgIGNhbmNlbE1vdXNlTGVhdmUoKTtcbiAgICAgIGNhbmNlbFRvdWNoTW92ZSgpO1xuICAgICAgY2FuY2VsVG91Y2hFbmQoKTtcbiAgICAgIGNhbmNlbFRvdWNoQ2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbVRvcCh0b3A6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXIuZ3JpZFJlbmRlcmVyLnNldENlbGxQb3NpdGlvbih0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlciwgdGhpcy5ncmlkc3Rlckl0ZW0uZWwsIHRoaXMubGVmdCwgdG9wKTtcbiAgfVxuXG4gIHNldEl0ZW1MZWZ0KGxlZnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXIuZ3JpZFJlbmRlcmVyLnNldENlbGxQb3NpdGlvbih0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlciwgdGhpcy5ncmlkc3Rlckl0ZW0uZWwsIGxlZnQsIHRoaXMudG9wKTtcbiAgfVxuXG4gIHNldEl0ZW1IZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICB9XG5cbiAgc2V0SXRlbVdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyRHJhZ2dhYmxlfSBmcm9tICcuL2dyaWRzdGVyRHJhZ2dhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3RlclJlc2l6YWJsZX0gZnJvbSAnLi9ncmlkc3RlclJlc2l6YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJVdGlsc30gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWRzdGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZHN0ZXJJdGVtLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkc3Rlckl0ZW0uY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB7XG4gIEBJbnB1dCgpIGl0ZW06IEdyaWRzdGVySXRlbTtcbiAgJGl0ZW06IEdyaWRzdGVySXRlbTtcbiAgZWw6IGFueTtcbiAgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZHJhZzogR3JpZHN0ZXJEcmFnZ2FibGU7XG4gIHJlc2l6ZTogR3JpZHN0ZXJSZXNpemFibGU7XG4gIG5vdFBsYWNlZDogYm9vbGVhbjtcbiAgaW5pdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEhvc3QoKSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnQsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuJGl0ZW0gPSB7XG4gICAgICBjb2xzOiAtMSxcbiAgICAgIHJvd3M6IC0xLFxuICAgICAgeDogLTEsXG4gICAgICB5OiAtMSxcbiAgICB9O1xuICAgIHRoaXMuZ3JpZHN0ZXIgPSBncmlkc3RlcjtcbiAgICB0aGlzLmRyYWcgPSBuZXcgR3JpZHN0ZXJEcmFnZ2FibGUodGhpcywgZ3JpZHN0ZXIsIHRoaXMuem9uZSk7XG4gICAgdGhpcy5yZXNpemUgPSBuZXcgR3JpZHN0ZXJSZXNpemFibGUodGhpcywgZ3JpZHN0ZXIsIHRoaXMuem9uZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmdyaWRzdGVyLmFkZEl0ZW0odGhpcyk7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuJGl0ZW0gPSBHcmlkc3RlclV0aWxzLm1lcmdlKHRoaXMuJGl0ZW0sIHRoaXMuaXRlbSwge1xuICAgICAgY29sczogdW5kZWZpbmVkLFxuICAgICAgcm93czogdW5kZWZpbmVkLFxuICAgICAgeDogdW5kZWZpbmVkLFxuICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgZHJhZ0VuYWJsZWQ6IHVuZGVmaW5lZCxcbiAgICAgIHJlc2l6ZUVuYWJsZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBhY3RFbmFibGVkOiB1bmRlZmluZWQsXG4gICAgICBtYXhJdGVtUm93czogdW5kZWZpbmVkLFxuICAgICAgbWluSXRlbVJvd3M6IHVuZGVmaW5lZCxcbiAgICAgIG1heEl0ZW1Db2xzOiB1bmRlZmluZWQsXG4gICAgICBtaW5JdGVtQ29sczogdW5kZWZpbmVkLFxuICAgICAgbWF4SXRlbUFyZWE6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkl0ZW1BcmVhOiB1bmRlZmluZWQsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRzdGVyLnJlbW92ZUl0ZW0odGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XG4gICAgdGhpcy5kcmFnLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5kcmFnO1xuICAgIHRoaXMucmVzaXplLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5yZXNpemU7XG4gIH1cblxuICBzZXRTaXplKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCB0aGlzLm5vdFBsYWNlZCA/ICcnIDogJ2Jsb2NrJyk7XG4gICAgdGhpcy5ncmlkc3Rlci5ncmlkUmVuZGVyZXIudXBkYXRlSXRlbSh0aGlzLmVsLCB0aGlzLiRpdGVtLCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1TaXplKCk7XG4gIH1cblxuICB1cGRhdGVJdGVtU2l6ZSgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLiRpdGVtLnkgKiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodDtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy4kaXRlbS54ICogdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aDtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuJGl0ZW0uY29scyAqIHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLiRpdGVtLnJvd3MgKiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuXG4gICAgaWYgKCF0aGlzLmluaXQgJiYgd2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5pdGVtLmluaXRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLml0ZW0uaW5pdENhbGxiYWNrKHRoaXMuaXRlbSwgdGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLml0ZW1Jbml0Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLml0ZW1Jbml0Q2FsbGJhY2sodGhpcy5pdGVtLCB0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnNjcm9sbFRvTmV3SXRlbXMpIHtcbiAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aWR0aCAhPT0gdGhpcy53aWR0aCB8fCBoZWlnaHQgIT09IHRoaXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbVJlc2l6ZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtUmVzaXplQ2FsbGJhY2sodGhpcy5pdGVtLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGl0ZW1DaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUNoYW5nZUNhbGxiYWNrKHRoaXMuaXRlbSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJdGVtQ2hhbmdlcyhuZXdWYWx1ZTogR3JpZHN0ZXJJdGVtLCBvbGRWYWx1ZTogR3JpZHN0ZXJJdGVtKTogdm9pZCB7XG4gICAgaWYgKG5ld1ZhbHVlLnJvd3MgPT09IG9sZFZhbHVlLnJvd3MgJiYgbmV3VmFsdWUuY29scyA9PT0gb2xkVmFsdWUuY29scyAmJiBuZXdWYWx1ZS54ID09PSBvbGRWYWx1ZS54ICYmIG5ld1ZhbHVlLnkgPT09IG9sZFZhbHVlLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy4kaXRlbSkpIHtcbiAgICAgIHRoaXMuJGl0ZW0ueCA9IG9sZFZhbHVlLnggfHwgMDtcbiAgICAgIHRoaXMuJGl0ZW0ueSA9IG9sZFZhbHVlLnkgfHwgMDtcbiAgICAgIHRoaXMuJGl0ZW0uY29scyA9IG9sZFZhbHVlLmNvbHMgfHwgMTtcbiAgICAgIHRoaXMuJGl0ZW0ucm93cyA9IG9sZFZhbHVlLnJvd3MgfHwgMTtcbiAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW0uY29scyA9IHRoaXMuJGl0ZW0uY29scztcbiAgICAgIHRoaXMuaXRlbS5yb3dzID0gdGhpcy4kaXRlbS5yb3dzO1xuICAgICAgdGhpcy5pdGVtLnggPSB0aGlzLiRpdGVtLng7XG4gICAgICB0aGlzLml0ZW0ueSA9IHRoaXMuJGl0ZW0ueTtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuY2FsY3VsYXRlTGF5b3V0RGVib3VuY2UoKTtcbiAgICAgIHRoaXMuaXRlbUNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBjYW5CZURyYWdnZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmdyaWRzdGVyLm1vYmlsZSAmJlxuICAgICAgKHRoaXMuJGl0ZW0uZHJhZ0VuYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmVuYWJsZWQgOiB0aGlzLiRpdGVtLmRyYWdFbmFibGVkKTtcbiAgfVxuXG4gIGNhbkJlUmVzaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZ3JpZHN0ZXIubW9iaWxlICYmXG4gICAgICAodGhpcy4kaXRlbS5yZXNpemVFbmFibGVkID09PSB1bmRlZmluZWQgPyB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnJlc2l6YWJsZS5lbmFibGVkIDogdGhpcy4kaXRlbS5yZXNpemVFbmFibGVkKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudH0gZnJvbSAnLi9ncmlkc3Rlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkc3Rlci1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkc3RlclByZXZpZXcuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZWw6IGFueTtcbiAgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASG9zdCgpIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudCwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXI7XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUgPSB0aGlzLnByZXZpZXdTdHlsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlO1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICB9XG5cbiAgcHJldmlld1N0eWxlKGRyYWc/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNvbXBhY3QgJiYgZHJhZykge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLmNvbXBhY3QuY2hlY2tDb21wYWN0SXRlbSh0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgdGhpcy5ncmlkc3Rlci5ncmlkUmVuZGVyZXIudXBkYXRlSXRlbSh0aGlzLmVsLCB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0sIHRoaXMucmVuZGVyZXIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudH0gZnJvbSAnLi9ncmlkc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnR9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRzdGVyUHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9ncmlkc3RlclByZXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR3JpZHN0ZXJDb21wb25lbnQsXG4gICAgR3JpZHN0ZXJJdGVtQ29tcG9uZW50LFxuICAgIEdyaWRzdGVyUHJldmlld0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtHcmlkc3RlckNvbXBvbmVudCwgR3JpZHN0ZXJJdGVtQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkc3Rlck1vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQWlCRSxLQUFNLEtBQUs7SUFDWCxnQkFBaUIsZ0JBQWdCO0lBQ2pDLGtCQUFtQixrQkFBa0I7SUFDckMsT0FBUSxPQUFPO0lBQ2YsZUFBZ0IsZUFBZTtJQUMvQixpQkFBa0IsaUJBQWlCOzs7O0lBSW5DLFFBQVMsUUFBUTtJQUNqQixpQkFBa0IsZUFBZTtJQUNqQyxNQUFPLE1BQU07Ozs7SUFJYixNQUFPLE1BQU07SUFDYixXQUFZLFdBQVc7SUFDdkIsYUFBYyxhQUFhO0lBQzNCLGtCQUFtQixnQkFBZ0I7SUFDbkMsa0JBQW1CLGdCQUFnQjtJQUNuQyxjQUFlLGNBQWM7SUFDN0IsbUJBQW9CLGlCQUFpQjtJQUNyQyxtQkFBb0IsaUJBQWlCOzs7Ozs7O0FDdkN2QztBQUVBLElBQWEscUJBQXFCLEdBQW1CO0lBQ25ELFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRzs7Ozs7OztJQU10QixhQUFhLEVBQUUsR0FBRzs7SUFDbEIsY0FBYyxFQUFFLEdBQUc7O0lBQ25CLHVCQUF1QixFQUFFLEtBQUs7O0lBQzlCLHNCQUFzQixFQUFFLEtBQUs7O0lBQzdCLFdBQVcsRUFBRSxLQUFLOztJQUNsQixXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUk7O0lBQzdCLGdCQUFnQixFQUFFLEdBQUc7O0lBQ3JCLE9BQU8sRUFBRSxDQUFDOztJQUNWLE9BQU8sRUFBRSxHQUFHOztJQUNaLE9BQU8sRUFBRSxDQUFDOztJQUNWLE9BQU8sRUFBRSxHQUFHOztJQUNaLGVBQWUsRUFBRSxDQUFDOztJQUNsQixlQUFlLEVBQUUsQ0FBQzs7SUFDbEIsV0FBVyxFQUFFLEVBQUU7O0lBQ2YsV0FBVyxFQUFFLEVBQUU7O0lBQ2YsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLElBQUk7O0lBQ2pCLE1BQU0sRUFBRSxFQUFFOztJQUNWLFdBQVcsRUFBRSxJQUFJOztJQUNqQixjQUFjLEVBQUUsSUFBSTs7SUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTs7SUFDdEIsaUJBQWlCLEVBQUUsSUFBSTs7SUFDdkIsZUFBZSxFQUFFLElBQUk7O0lBQ3JCLHVCQUF1QixFQUFFLElBQUk7O0lBQzdCLGlCQUFpQixFQUFFLEVBQUU7O0lBQ3JCLFdBQVcsRUFBRSxFQUFFOztJQUNmLFlBQVksRUFBRSxTQUFTOztJQUN2QixlQUFlLEVBQUUsU0FBUzs7SUFDMUIsdUJBQXVCLEVBQUUsU0FBUzs7SUFDbEMsa0JBQWtCLEVBQUUsU0FBUzs7O0lBRTdCLGtCQUFrQixFQUFFLFNBQVM7OztJQUU3QixnQkFBZ0IsRUFBRSxTQUFTOzs7SUFFM0IsbUJBQW1CLEVBQUUsU0FBUzs7O0lBRTlCLG9CQUFvQixFQUFFLFNBQVM7OztJQUUvQixvQkFBb0IsRUFBRSxLQUFLOztJQUMzQiwwQkFBMEIsRUFBRSxLQUFLOztJQUNqQyxtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixzQkFBc0IsRUFBRSxTQUFTOztJQUNqQyw0QkFBNEIsRUFBRSxTQUFTOztJQUN2QyxxQkFBcUIsRUFBRSxTQUFTOztJQUNoQyxxQkFBcUIsRUFBRSxTQUFTOztJQUNoQyxvQkFBb0IsRUFBRSxFQUFFOztJQUN4QixvQkFBb0IsRUFBRSxFQUFFOzs7SUFFeEIsaUJBQWlCLEVBQUUsS0FBSzs7SUFDeEIsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLENBQUM7O1FBQ2IsT0FBTyxFQUFFLEtBQUs7O1FBQ2Qsa0JBQWtCLEVBQUUsdUJBQXVCOztRQUMzQyxhQUFhLEVBQUUsS0FBSzs7UUFDcEIsZUFBZSxFQUFFLGNBQWM7O1FBQy9CLElBQUksRUFBRSxTQUFTOztRQUNmLEtBQUssRUFBRSxTQUFTOzs7UUFFaEIsYUFBYSxFQUFFLEtBQUs7O1FBQ3BCLHFCQUFxQixFQUFFLFNBQVM7O0tBRWpDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLENBQUM7O1FBQ2IsT0FBTyxFQUFFLEtBQUs7O1FBQ2QsT0FBTyxFQUFFO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtTQUNUOztRQUNELElBQUksRUFBRSxTQUFTOztRQUNmLEtBQUssRUFBRSxTQUFTOztLQUVqQjtJQUNELElBQUksRUFBRSxJQUFJOztJQUNWLFNBQVMsRUFBRSxLQUFLOztJQUNoQixpQkFBaUIsRUFBRSxLQUFLOztJQUN4QixtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixjQUFjLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDOztJQUNsRSxlQUFlLEVBQUUsS0FBSzs7SUFDdEIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxlQUFlOztJQUN4QyxtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixlQUFlLEVBQUUsS0FBSzs7SUFDdEIsZ0JBQWdCLEVBQUUsS0FBSzs7SUFDdkIsNkJBQTZCLEVBQUUsS0FBSztDQUNyQzs7Ozs7O0FDdkdELEFBSUE7SUFBQTtLQWtGQzs7Ozs7OztJQS9FUSxtQkFBSzs7Ozs7O0lBQVosVUFBYSxJQUFTLEVBQUUsSUFBUyxFQUFFLFVBQWU7UUFDaEQsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztJQUVNLHNCQUFROzs7OztJQUFmLFVBQWdCLElBQWMsRUFBRSxJQUFZOztZQUN0QyxPQUFZO1FBQ2hCLE9BQU87O2dCQUNDLE9BQU8sR0FBRyxJQUFJOztnQkFBRSxJQUFJLEdBQUcsU0FBUzs7Z0JBQ2hDLEtBQUssR0FBRztnQkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25DLENBQUM7S0FDSDs7Ozs7SUFFTSw2QkFBZTs7OztJQUF0QixVQUF1QixDQUFNO1FBQzNCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO2dCQUN0RCxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3pDO1NBQ0Y7S0FDRjs7Ozs7O0lBRU0sdUNBQXlCOzs7OztJQUFoQyxVQUFpQyxRQUFvQyxFQUFFLENBQU07UUFDM0UsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzVHLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsSUFBSSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0JBQzlHLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUVNLHFEQUF1Qzs7Ozs7SUFBOUMsVUFBK0MsUUFBb0MsRUFBRSxDQUFNO1FBQ3pGLE9BQU8sYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztlQUM1RyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzlHOzs7Ozs7O0lBRU0sK0JBQWlCOzs7Ozs7SUFBeEIsVUFBeUIsTUFBVyxFQUFFLE9BQVksRUFBRSxZQUFvQjtRQUN0RSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDakMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdEcsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxhQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDbEY7S0FDRjs7Ozs7O0lBRU0sMEJBQVk7Ozs7O0lBQW5CLFVBQW9CLENBQTJCLEVBQUUsQ0FBMkI7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7YUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7O2dCQWpGRixVQUFVOztJQWtGWCxvQkFBQztDQWxGRCxJQWtGQzs7Ozs7Ozs7O0FDN0VEOzs7O0lBQUE7S0FxQ0M7SUFBRCxpQ0FBQztDQUFBOzs7Ozs7QUM5Q0QsQUFNQTtJQWdCRSwyQkFBb0IsUUFBb0M7UUFBcEMsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7S0FDdkQ7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQseUNBQWE7OztJQUFiO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFO1lBQ3ZILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFIO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0I7WUFDakYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUU7WUFDcEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BJO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLDBCQUEwQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMxRixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUU7WUFDcEgsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzthQUNySCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO2dCQUN4RSxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtZQUNwSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM3SDthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2RyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztLQUNGOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixDQUFNO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdkcsT0FBTztTQUNSOztZQUNLLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELGtEQUFzQjs7OztJQUF0QixVQUF1QixDQUFNO1FBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdkcsT0FBTztTQUNSO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRTtZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNwQzs7Ozs7SUFFRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsQ0FBTTs7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDcEM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLENBQU07UUFDdEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksRUFBRTtZQUNSLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDakM7YUFBTTtZQUNMLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7OztJQUVELDhDQUFrQjs7OztJQUFsQixVQUFtQixDQUFNO1FBQXpCLGlCQW9CQztRQW5CQyxJQUFJLGFBQWEsQ0FBQyx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzNFLE9BQU87U0FDUjtRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7O1lBQ3BDLG1CQUFtQixHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLG1CQUFtQixFQUFFO1lBQzlDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25DLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9HLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7U0FDckgsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUMvRzs7Ozs7SUFFRCw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsQ0FBTTtRQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUNkLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixDQUFNO1FBQXZCLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxRTtRQUNELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzlCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDcEM7Ozs7OztJQUVELGlEQUFxQjs7Ozs7SUFBckIsVUFBc0IsQ0FBTSxFQUFFLE9BQTZCO1FBQ3pELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztZQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNOztZQUN2RixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNOztZQUNyRixJQUFJLEdBQWlCO1lBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUN2RCxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7WUFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWU7WUFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWU7U0FDN0M7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BHLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEU7WUFDRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLENBQUMsRUFBRTtnQkFDL0UsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7O2dCQTNORixVQUFVOzs7O2dCQUZILDBCQUEwQjs7SUE4TmxDLHdCQUFDO0NBNU5ELElBNE5DOzs7Ozs7QUNsT0QsQUFPQTtJQUdFLHlCQUFvQixRQUFvQztRQUFwQyxhQUFRLEdBQVIsUUFBUSxDQUE0QjtLQUN2RDs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7OztJQUVELHNDQUFZOzs7SUFBWjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDMUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUMvRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDL0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLElBQWtCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUMvRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztTQUNGO0tBQ0Y7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7O1lBQ00sYUFBYSxHQUFHLEtBQUs7O1lBQUUsTUFBc0M7O1lBQUUsS0FBYzs7WUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pDLFNBQVM7YUFDVjtZQUNELEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksS0FBSyxFQUFFO2dCQUNULGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7OztJQUVELDZDQUFtQjs7OztJQUFuQixVQUFvQixJQUFrQjtRQUNwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7O0lBRUQsMENBQWdCOzs7SUFBaEI7O1lBQ00sYUFBYSxHQUFHLEtBQUs7O1lBQUUsTUFBc0M7O1lBQUUsS0FBYzs7WUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pDLFNBQVM7YUFDVjtZQUNELEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxFQUFFO2dCQUNULGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsMkNBQWlCOzs7SUFBakI7O1lBQ00sYUFBYSxHQUFHLEtBQUs7O1lBQUUsTUFBc0M7O1lBQUUsS0FBYzs7WUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pDLFNBQVM7YUFDVjtZQUNELEtBQUssR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxFQUFFO2dCQUNULGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixJQUFrQjtRQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7OztJQUVELGdEQUFzQjs7OztJQUF0QixVQUF1QixJQUFJO1FBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7O2dCQWhKRixVQUFVOzs7O2dCQUxILDBCQUEwQjs7SUFzSmxDLHNCQUFDO0NBakpELElBaUpDOzs7Ozs7QUNsSkQ7SUFHRSwwQkFBb0IsUUFBb0M7UUFBcEMsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7S0FDdkQ7Ozs7SUFFRCxrQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7Ozs7SUFFRCxxQ0FBVTs7Ozs7O0lBQVYsVUFBVyxFQUFPLEVBQUUsSUFBa0IsRUFBRSxRQUFtQjtRQUN6RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDbEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUM7YUFDN0Y7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7YUFDbEY7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFO2dCQUNqRCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzdFO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNwQztZQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDN0UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07O2dCQUNDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFDbkQsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTTs7Z0JBQzdFLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7WUFFdkYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7O2dCQUMzQyxZQUFZLEdBQWtCLElBQUk7O2dCQUNsQyxXQUFXLEdBQWtCLElBQUk7WUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTt3QkFDckQsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztxQkFDaEU7eUJBQU07d0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQ3JEO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTt3QkFDckQsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQ3BEO2lCQUNGO2FBQ0Y7WUFFRCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7O1lBQ00sUUFBUSxHQUFHLEVBQUU7O1lBQ2IsWUFBWSxHQUFHLEVBQUU7O1lBQ2pCLFlBQVksR0FBRyxFQUFFOztZQUNqQixZQUFZLEdBQUcsRUFBRTtRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3BELFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3hCLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFDekMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3ZELFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ25DLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQzVCLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFDekMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDdkQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUM1QixZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUN2QyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUMvQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYTtpQkFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWM7aUJBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRixRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMxQixZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUM1QixZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUN2QyxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1NBQzFDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjO2lCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakYsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbkMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDNUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUMvQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYTtpQkFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pGLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFDckMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDNUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDdkMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBRUQsNkNBQWtCOzs7O0lBQWxCLFVBQW1CLENBQVM7UUFDMUIsb0JBQ0ssSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFDdEQsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQ3ZFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksSUFDekc7S0FDSDs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLENBQVM7UUFDdkIsb0JBQ0ssSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFDdEQsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUMxRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksSUFDekU7S0FDSDs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLENBQVM7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtZQUNsRCxPQUFPO2dCQUNMLFNBQVMsRUFBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLEtBQUs7YUFDckMsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPO2dCQUNMLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSTthQUN4QyxDQUFDO1NBQ0g7S0FDRjs7Ozs7SUFFRCx5Q0FBYzs7OztJQUFkLFVBQWUsQ0FBUztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1lBQ2xELE9BQU87Z0JBQ0wsU0FBUyxFQUFFLGFBQWEsR0FBRyxDQUFDLEdBQUcsS0FBSzthQUNyQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSTthQUNwQyxDQUFDO1NBQ0g7S0FDRjs7Ozs7O0lBRUQsNENBQWlCOzs7OztJQUFqQixVQUFrQixRQUFtQixFQUFFLEVBQU87UUFDNUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtZQUNsRCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkM7S0FDRjs7Ozs7Ozs7SUFFRCwwQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLFFBQW1CLEVBQUUsRUFBTyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2hFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7O2dCQUM1QyxTQUFTLEdBQUcsY0FBYyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVE7WUFDNUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUM5RDtLQUNGOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO2dCQUNuRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUN0QztTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7Ozs7SUFFRCx1Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ3RDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7S0FDRjs7Z0JBck1GLFVBQVU7Ozs7Z0JBSkgsMEJBQTBCOztJQTBNbEMsdUJBQUM7Q0F0TUQsSUFzTUM7Ozs7OztBQzVNRDtJQXNERSwyQkFBWSxFQUFjLEVBQVMsUUFBbUIsRUFBUyxLQUF3QixFQUFTLElBQVk7UUFBekUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVI1RyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBUVosSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoRDs7Ozs7O0lBRU0sd0NBQXNCOzs7OztJQUE3QixVQUE4QixJQUFrQixFQUFFLEtBQW1CO1FBQ25FLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJO2VBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztlQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUk7ZUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUc7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbEUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakUsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0tBQ0Y7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47O1lBQ00sTUFBTTs7WUFDTixLQUFLO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BELEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDL0I7YUFBTTtZQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtLQUNGOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELDBDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7WUFDZCxZQUFZLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFBRSxNQUFzQztRQUN2RixPQUFPLFlBQVksSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsMkNBQWU7OztJQUFmOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7O1lBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7O1lBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7O1lBQ2pDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7O1lBQ25DLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7O1lBQ25DLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7O1lBQ25DLHFCQUFxQixHQUFHLFdBQVcsR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLFlBQVk7ZUFDakYsWUFBWSxHQUFHLFlBQVksR0FBRyxXQUFXLEdBQUcsV0FBVzs7WUFDdEQsdUJBQXVCLEdBQUcsWUFBWSxHQUFHLFlBQVk7ZUFDdEQsV0FBVyxHQUFHLFdBQVcsSUFBSSxXQUFXLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxZQUFZO1FBQ3pGLElBQUkscUJBQXFCLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztLQUNqQzs7OztJQUVELHVDQUFXOzs7SUFBWDs7WUFDUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7O1lBQ2QsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXOztZQUN0QixNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pGLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzFCO2FBQU07WUFDTCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN2QixNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQ3pCOzs7O0lBRUQsNkNBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0M7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7O1lBQ0csSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOztZQUU3RCxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFBRSxNQUFNO1FBQy9DLE9BQU8sWUFBWSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNGO0tBQ0Y7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7O2dCQUN6QixXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0JBQzFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDdkY7aUJBQU07Z0JBQ0wsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM5RTtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3pGO2lCQUFNO2dCQUNMLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDL0U7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Z0JBQzVELFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtnQkFDekMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNyRjtpQkFBTTtnQkFDTCxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtnQkFDNUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMzRjtpQkFBTTtnQkFDTCxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEY7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztZQUMxRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztTQUMxRzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDL0M7O1lBRUcsWUFBWSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O1lBQUUsTUFBc0M7UUFDdkYsT0FBTyxZQUFZLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFO1lBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7UUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNqRDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssZUFBZSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNqRDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzNCOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxhQUE2QztRQUNuRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMxQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUN6RCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNuRCxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMxQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUN6RCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNuRCxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0QzthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO2dCQUNsQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyw2RUFBNkU7b0JBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRTtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDZCQUE2QixFQUFFO2dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDaEM7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2hDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxhQUE2QztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3JFO0tBQ0Y7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLElBQWtCOztZQUMzQixTQUFTLEdBQTZDLEtBQUs7UUFDL0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBQ3JDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNmO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztLQUNsQjs7Ozs7SUFFRCw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsSUFBa0I7O1lBQzdCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQy9DLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOztZQUN6RCxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7WUFDekQsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUMzRixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7O1lBQzNGLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVzs7WUFDM0YsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUMzRixZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXOztZQUNuRSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXOztZQUNuRSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7O1lBQzVGLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVzs7WUFDNUYsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7O1lBQzVCLFNBQVMsR0FBRyxZQUFZLElBQUksSUFBSTs7WUFDaEMsU0FBUyxHQUFHLFlBQVksSUFBSSxJQUFJO1FBQ3RDLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDO0tBQ3RIOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixJQUFrQjs7WUFDN0IsWUFBWSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O1lBQUUsTUFBc0M7UUFDdkYsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN6RixPQUFPLE1BQU0sQ0FBQzthQUNmO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixJQUFrQjs7WUFDNUIsQ0FBQyxHQUEwQyxFQUFFOztZQUMvQyxZQUFZLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFBRSxNQUFzQztRQUN2RixPQUFPLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pGLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLGFBQTZDO1FBQzVELElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyRCxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNoQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNMLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxvREFBb0Q7b0JBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRTtTQUNGO0tBQ0Y7Ozs7OztJQUVELG1EQUF1Qjs7Ozs7SUFBdkIsVUFBd0IsT0FBcUIsRUFBRSxZQUE2QztRQUE3Qyw2QkFBQSxFQUFBLGlCQUE2QztRQUMxRixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztTQUM5QztRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O1lBQ3JCLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUM7O1lBQUUsU0FBUztRQUM5QyxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3RCLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUM1QyxPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjs7WUFDSyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSTs7WUFDaEUsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7O1lBQ3RFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWTtRQUMzRCxJQUFJLENBQUMsU0FBUyxJQUFJLGVBQWUsRUFBRTtZQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxZQUFZLEVBQUU7WUFDdkIsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBRUQsb0RBQXdCOzs7O0lBQXhCLFVBQXlCLElBQWtCOztZQUNuQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7SUFFRCxtREFBdUI7Ozs7SUFBdkIsVUFBd0IsSUFBa0I7O1lBQ3BDLFlBQVksR0FBNkIsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7UUFDekQsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxFQUFFLElBQW9DOztnQkFDeEUsVUFBVSxHQUFHLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDO1lBQ2pHLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0YsRUFBRSxZQUFZLENBQUMsQ0FBQzs7WUFFWCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEQsT0FBTyxPQUFPLENBQUM7S0FDaEI7Ozs7Ozs7SUFFRCw2Q0FBaUI7Ozs7OztJQUFqQixVQUFrQixDQUFTLEVBQUUsY0FBd0IsRUFBRSxPQUFpQjs7WUFDaEUsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0tBQ0Y7Ozs7Ozs7SUFFRCw2Q0FBaUI7Ozs7OztJQUFqQixVQUFrQixDQUFTLEVBQUUsY0FBd0IsRUFBRSxPQUFpQjs7WUFDaEUsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0tBQ0Y7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLENBQVM7UUFDekIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUM3Qjs7Ozs7SUFFRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsQ0FBUztRQUN6QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzlCOztnQkF0ZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixtWUFBOEI7b0JBRTlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBM0JDLFVBQVU7Z0JBTVYsU0FBUztnQkFSVCxpQkFBaUI7Z0JBSWpCLE1BQU07OzswQkEyQkwsS0FBSzs7SUFnZFIsd0JBQUM7Q0F2ZEQ7Ozs7Ozs7OztBQ25CQTs7OztJQUFBO0tBbUJDO0lBQUQscUNBQUM7Q0FBQTs7Ozs7O0FDekJEO0lBV0Usc0JBQVksWUFBNEM7UUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO0tBQ3ZDOzs7O0lBRUQsOEJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7S0FDRjs7OztJQUVELG9DQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ2IsQ0FBQyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUNuQyxDQUFDLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtTQUVGO0tBQ0Y7Ozs7SUFFRCxzQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtLQUNGOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtLQUNGOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxRQUF3Qzs7WUFDMUMscUJBQXFCLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvRSxJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixLQUFLLElBQUksSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsRUFBRTs7Z0JBQzdGLG1CQUFtQixHQUFtQyxxQkFBcUI7O2dCQUMzRSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUM1QyxjQUFjLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUM1QyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDeEIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0csUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO2dCQUM3QyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQzthQUN2QztTQUNGO0tBQ0Y7O2dCQWpGRixVQUFVOzs7O2dCQUhILDhCQUE4Qjs7SUFxRnRDLG1CQUFDO0NBbEZEOzs7Ozs7O0lDRkksaUJBQXlCOztJQUN6QixXQUFtQjs7SUFDakIsZ0JBQWdCLEdBQUcsRUFBRTs7SUFDdkIsZUFBb0I7O0lBQ3BCLFdBQWdDOztJQUNoQyxlQUFvRDs7SUFDcEQsU0FBaUI7O0lBQ2pCLFNBQWlCOztJQUNqQixTQUFpQjs7SUFDakIsU0FBaUI7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLFNBQWdCLE1BQU0sQ0FBQyxRQUFvQyxFQUFFLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFDOUYsQ0FBYSxFQUFFLFNBQWMsRUFDN0IscUJBQStCLEVBQUUsTUFBZ0IsRUFBRSxxQkFBK0M7SUFDdkgsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4RCxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDNUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUIsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUNyQixlQUFlLEdBQUcscUJBQXFCLENBQUM7O1FBRWxDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVzs7UUFDekMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxZQUFZOztRQUMzQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVU7O1FBQ3ZDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUzs7UUFDckMsYUFBYSxHQUFHLEdBQUcsR0FBRyxTQUFTOztRQUMvQixnQkFBZ0IsR0FBRyxZQUFZLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNO0lBQ2hFLElBQUksU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLGdCQUFnQixHQUFHLGlCQUFpQixFQUFFO1FBQ3pFLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN2RSxPQUFPO1NBQ1I7UUFDRCxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNoRTtTQUFNLElBQUksU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksYUFBYSxHQUFHLGlCQUFpQixFQUFFO1FBQzlGLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN2RSxPQUFPO1NBQ1I7UUFDRCxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2pFO1NBQU0sSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDMUMsY0FBYyxFQUFFLENBQUM7S0FDbEI7O1FBRUssZUFBZSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLEtBQUs7O1FBQ3pELGNBQWMsR0FBRyxJQUFJLEdBQUcsVUFBVTtJQUN4QyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLElBQUksaUJBQWlCLEVBQUU7UUFDekUsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ3ZFLE9BQU87U0FDUjtRQUNELFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2xFO1NBQU0sSUFBSSxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxjQUFjLEdBQUcsaUJBQWlCLEVBQUU7UUFDaEcsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ3ZFLE9BQU87U0FDUjtRQUNELFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbkU7U0FBTSxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUMxQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3BCO0NBQ0Y7Ozs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUscUJBQStCLEVBQUUsU0FBYzs7UUFDOUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPO0lBQy9CLE9BQU8sV0FBVyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNsRixjQUFjLEVBQUUsQ0FBQztTQUNsQjtRQUNELGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUNoRCxPQUFPLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUM5QixxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0tBQ3ZFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztDQUN0Qjs7Ozs7OztBQUVELFNBQVMsZUFBZSxDQUFDLElBQVksRUFBRSxxQkFBK0IsRUFBRSxTQUFjOztRQUNoRixPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU87SUFDL0IsT0FBTyxXQUFXLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ25GLGdCQUFnQixFQUFFLENBQUM7U0FDcEI7UUFDRCxlQUFlLENBQUMsVUFBVSxJQUFJLElBQUksR0FBRyxXQUFXLENBQUM7UUFDakQsT0FBTyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUM7UUFDOUIscUJBQXFCLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztLQUN2RSxFQUFFLGdCQUFnQixDQUFDLENBQUM7Q0FDdEI7Ozs7QUFFRCxTQUFnQixZQUFZO0lBQzFCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsY0FBYyxFQUFFLENBQUM7SUFDakIsZUFBZSxHQUFHLFNBQVMsQ0FBQztDQUM3Qjs7OztBQUVELFNBQVMsZ0JBQWdCO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7Q0FDWDs7OztBQUVELFNBQVMsY0FBYztJQUNyQixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0NBQ1g7Ozs7QUFFRCxTQUFTLE9BQU87SUFDZCxJQUFJLFNBQVMsRUFBRTtRQUNiLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Q0FDRjs7OztBQUVELFNBQVMsT0FBTztJQUNkLElBQUksU0FBUyxFQUFFO1FBQ2IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsR0FBRyxDQUFDLENBQUM7S0FDZjtDQUNGOzs7O0FBRUQsU0FBUyxPQUFPO0lBQ2QsSUFBSSxTQUFTLEVBQUU7UUFDYixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUNmO0NBQ0Y7Ozs7QUFFRCxTQUFTLE9BQU87SUFDZCxJQUFJLFNBQVMsRUFBRTtRQUNiLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Q0FDRjs7Ozs7O0FDbElEO0lBMEJFLHNCQUFZLFlBQTRDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckUsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7S0FDNUI7Ozs7SUFFRCw4QkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7Ozs7SUFFRCxnQ0FBUzs7Ozs7SUFBVCxVQUFVLFNBQWlCLEVBQUUsT0FBaUI7UUFDNUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Z0JBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGOzs7O0lBRUQsdUNBQWdCOzs7SUFBaEI7O1lBQ00sQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtLQUNGOzs7O0lBRUQsbUNBQVk7OztJQUFaOztZQUNNLENBQUMsR0FBRyxDQUFDOztZQUNILENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07O1lBQ3JDLFVBQTBDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQscUNBQWM7OztJQUFkOztZQUNNLENBQUMsR0FBRyxDQUFDOztZQUNILENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07O1lBQ3JDLFVBQTBDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELG9DQUFhOzs7SUFBYjs7WUFDTSxDQUFDLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFDdkMsTUFBTSxHQUFHLEtBQUs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDZjtTQUNGO1FBQ0QsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7S0FDRjs7Ozs7OztJQUVPLDJCQUFJOzs7Ozs7SUFBWixVQUFhLFlBQTRDLEVBQUUsU0FBaUI7UUFDMUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssQ0FBQyxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O1lBQ2hHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7O1lBQUUsYUFBNkM7O1lBQy9ELFFBQVEsR0FBRyxJQUFJOztZQUNiLENBQUMsR0FBMEMsRUFBRTtRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQixhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksYUFBYSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3ZDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDUDtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQ2pDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDUDs7Z0JBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBa0M7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckYsQ0FBQztZQUNGLElBQUksT0FBTyxFQUFFO2dCQUNYLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDUDtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxFQUFFO2dCQUNoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDaEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNO2FBQ1A7U0FDRjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7b0JBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQixhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Ozs7OztJQUVPLCtCQUFROzs7Ozs7SUFBaEIsVUFBaUIsbUJBQW1ELEVBQUUsWUFBNEM7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEQsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7OztJQUVPLCtCQUFROzs7Ozs7SUFBaEIsVUFBaUIsbUJBQW1ELEVBQUUsWUFBNEM7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsRCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7O0lBRU8sOEJBQU87Ozs7OztJQUFmLFVBQWdCLG1CQUFtRCxFQUFFLFlBQTRDO1FBQy9HLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQy9DLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3RSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7Ozs7SUFFTyw4QkFBTzs7Ozs7O0lBQWYsVUFBZ0IsbUJBQW1ELEVBQUUsWUFBNEM7UUFDL0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0MsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqRCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFFTyxzQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsWUFBNEM7O1lBQzlELENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FDdEY7Ozs7OztJQUVPLDJDQUFvQjs7Ozs7SUFBNUIsVUFBNkIsWUFBNEM7O1lBQ2pFLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7O1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ3RELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7O0lBRU8sa0NBQVc7Ozs7O0lBQW5CLFVBQW9CLFlBQTRDO1FBQzlELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ25GLEVBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUFNOztnQkFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDbEY7S0FDRjs7Ozs7O0lBRU8sdUNBQWdCOzs7OztJQUF4QixVQUF5QixDQUFTO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7Ozs7SUFFTywyQ0FBb0I7Ozs7O0lBQTVCLFVBQTZCLFlBQTRDOztZQUNqRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7S0FDRjs7Ozs7OztJQUVPLHNDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsVUFBMEMsRUFBRSxDQUFTOztZQUNyRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7O1lBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O1lBQ25CLFlBQVk7O1lBQUUsQ0FBQzs7WUFBRSxDQUFDOztZQUNsQixNQUFNLEdBQUcsS0FBSztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLE1BQU0sQ0FBQztLQUNmOztnQkFwVEYsVUFBVTs7OztnQkFISCw4QkFBOEI7O0lBd1R0QyxtQkFBQztDQXJURDs7Ozs7O0FDTEEsQUFTQTtJQXVDRSwyQkFBWSxZQUE0QyxFQUFFLFFBQW9DLEVBQVUsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFGcEgsY0FBUyxHQUE2QyxLQUFLLENBQUM7UUFHMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FDRjs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsQ0FBTTtRQUFoQixpQkE4Q0M7UUE3Q0MsUUFBUSxDQUFDLENBQUMsS0FBSztZQUNiLEtBQUssQ0FBQzs7Z0JBRUosTUFBTTtZQUNSLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDOztnQkFFSixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRjtRQUVELENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvRixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xHLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLENBQU07UUFDYixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUNuRixJQUFJLENBQUMsc0NBQXNDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUVELGtFQUFzQzs7OztJQUF0QyxVQUF1QyxDQUFNO1FBQTdDLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLENBQU07UUFBZixpQkE0QkM7UUEzQkMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQixZQUFZLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUMzRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDaEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUNELFVBQVUsQ0FBQztZQUNULElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7S0FDRjs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTO2VBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUI7ZUFDckQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25IO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCxpREFBcUI7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FB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QyxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxD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

/***/ }),

/***/ "./node_modules/ng-dynamic-component/bundles/ng-dynamic-component.es5.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-dynamic-component/bundles/ng-dynamic-component.es5.js ***!
  \*******************************************************************************/
/*! exports provided: windowRefFactory, DynamicModule, DynamicDirective, DynamicComponent, DynamicAttributesDirective, dynamicDirectiveDef, DynamicDirectivesDirective, ɵa, ɵc, ɵd, ɵb, ɵe, ɵf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowRefFactory", function() { return windowRefFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModule", function() { return DynamicModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDirective", function() { return DynamicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAttributesDirective", function() { return DynamicAttributesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicDirectiveDef", function() { return dynamicDirectiveDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDirectivesDirective", function() { return DynamicDirectivesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return COMPONENT_INJECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ComponentOutletInjectorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return IoFactoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return IoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return WINDOW_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENT_INJECTOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ComponentInjector');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentOutletInjectorDirective = /** @class */ (function () {
    /**
     * @param {?} componentOutlet
     */
    function ComponentOutletInjectorDirective(componentOutlet) {
        this.componentOutlet = componentOutlet;
    }
    Object.defineProperty(ComponentOutletInjectorDirective.prototype, "componentRef", {
        /**
         * @return {?}
         */
        get: function () {
            return (( /** @type {?} */(this.componentOutlet)))._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentOutletInjectorDirective;
}());
ComponentOutletInjectorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngComponentOutlet]',
                exportAs: 'ndcComponentOutletInjector',
            },] },
];
/** @nocollapse */
ComponentOutletInjectorDirective.ctorParameters = function () { return [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicAttributesDirective = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} differs
     * @param {?} injector
     * @param {?} componentInjectorType
     * @param {?} componentOutletInjector
     */
    function DynamicAttributesDirective(renderer, differs, injector, componentInjectorType, componentOutletInjector) {
        this.renderer = renderer;
        this.differs = differs;
        this.injector = injector;
        this.componentInjectorType = componentInjectorType;
        this.componentOutletInjector = componentOutletInjector;
        this._attrsDiffer = this.differs.find({}).create();
        this._componentInjector = this.injector.get(this.componentInjectorType, null);
    }
    Object.defineProperty(DynamicAttributesDirective.prototype, "_attributes", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return (this.ndcDynamicAttributes || this.ngComponentOutletNdcDynamicAttributes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicAttributesDirective.prototype, "_compInjector", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.componentOutletInjector || this._componentInjector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicAttributesDirective.prototype, "_nativeElement", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return (this._compInjector.componentRef &&
                this._compInjector.componentRef.location.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicAttributesDirective.prototype, "_compType", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return (this._compInjector.componentRef &&
                this._compInjector.componentRef.componentType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicAttributesDirective.prototype, "_isCompChanged", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            if (this._lastCompType !== this._compType) {
                this._lastCompType = this._compType;
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicAttributesDirective.prototype.ngDoCheck = function () {
        /** @type {?} */
        var isCompChanged = this._isCompChanged;
        /** @type {?} */
        var changes = this._attrsDiffer.diff(this._attributes);
        if (changes) {
            this._lastAttrActions = this._changesToAttrActions(changes);
        }
        if (changes || (isCompChanged && this._lastAttrActions)) {
            this._updateAttributes(this._lastAttrActions);
        }
    };
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    DynamicAttributesDirective.prototype.setAttribute = function (name, value, namespace) {
        if (this._nativeElement) {
            this.renderer.setAttribute(this._nativeElement, name, value, namespace);
        }
    };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DynamicAttributesDirective.prototype.removeAttribute = function (name, namespace) {
        if (this._nativeElement) {
            this.renderer.removeAttribute(this._nativeElement, name, namespace);
        }
    };
    /**
     * @private
     * @param {?} actions
     * @return {?}
     */
    DynamicAttributesDirective.prototype._updateAttributes = function (actions) {
        var _this = this;
        // ? Early exit if no dynamic component
        if (!this._compType) {
            return;
        }
        Object.keys(actions.set).forEach(function (key) { return _this.setAttribute(key, actions.set[key]); });
        actions.remove.forEach(function (key) { return _this.removeAttribute(key); });
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    DynamicAttributesDirective.prototype._changesToAttrActions = function (changes) {
        /** @type {?} */
        var attrActions = {
            set: {},
            remove: [],
        };
        changes.forEachAddedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
        changes.forEachChangedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
        changes.forEachRemovedItem(function (r) { return attrActions.remove.push(r.key); });
        return attrActions;
    };
    return DynamicAttributesDirective;
}());
DynamicAttributesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ndcDynamicAttributes],[ngComponentOutletNdcDynamicAttributes]',
                exportAs: 'ndcDynamicAttributes',
            },] },
];
/** @nocollapse */
DynamicAttributesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPONENT_INJECTOR,] }] },
    { type: ComponentOutletInjectorDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
]; };
DynamicAttributesDirective.propDecorators = {
    ndcDynamicAttributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngComponentOutletNdcDynamicAttributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} val
 * @return {?}
 */
function createNewChange(val) {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](undefined, val, true);
}
/**
 * @param {?} record
 * @param {?=} isFirstChange
 * @return {?}
 */
function recordToChange(record, isFirstChange) {
    if (isFirstChange === void 0) { isFirstChange = false; }
    return isFirstChange
        ? createNewChange(record.currentValue)
        : new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](record.previousValue, record.currentValue, false);
}
/**
 * @param {?} isFirstChanges
 * @param {?} setter
 * @return {?}
 */
function setChangeFromRecord(isFirstChanges, setter) {
    return function (record) { return setter(record, recordToChange(record, isFirstChanges)); };
}
/**
 * @param {?} isFirstChanges
 * @return {?}
 */
function getChangesRecords(isFirstChanges) {
    return function (changes) { return setChangeFromRecord(isFirstChanges, function (record, change) { return (changes[record.key] = change); }); };
}
/**
 * @param {?} isFirstChanges
 * @return {?}
 */
function getNewChangesRecords(isFirstChanges) {
    return function (changes) { return setChangeFromRecord(isFirstChanges, function (record, change) {
        if (!changes[record.key]) {
            changes[record.key] = change;
        }
    }); };
}
/** @type {?} */
var defaultOpts = {
    isFirstChanges: false,
    onlyNewChanges: false,
};
/**
 * @param {?=} opts
 * @return {?}
 */
function changesFromRecord(opts) {
    if (opts === void 0) { opts = defaultOpts; }
    return opts.onlyNewChanges
        ? getNewChangesRecords(opts.isFirstChanges)
        : getChangesRecords(opts.isFirstChanges);
}
/**
 * @return {?}
 */
function noop() { }
/**
 * @param {?} ctor
 * @param {?} reflect
 * @return {?}
 */
function getCtorType(ctor, reflect) {
    return reflect.getMetadata('design:paramtypes', ctor);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var recordToChanges = changesFromRecord({ isFirstChanges: true });
/** @type {?} */
var recordToNewChanges = changesFromRecord({ onlyNewChanges: true });
var IoService = /** @class */ (function () {
    /**
     * @param {?} _differs
     * @param {?} _cfr
     */
    function IoService(_differs, _cfr) {
        this._differs = _differs;
        this._cfr = _cfr;
        this.checkInit = this.failInit;
        this._lastComponentInst = null;
        this._inputsDiffer = this._differs.find({}).create();
        this._compFactory = null;
        this._outputsShouldDisconnect$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._outputsChanged = function () { return false; };
    }
    Object.defineProperty(IoService.prototype, "_compRef", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this._compInjector.componentRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoService.prototype, "_componentInst", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this._compRef ? this._compRef.instance : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoService.prototype, "_componentInstChanged", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            if (this._lastComponentInst !== this._componentInst) {
                this._lastComponentInst = this._componentInst;
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IoService.prototype.ngOnDestroy = function () {
        this._disconnectOutputs();
    };
    /**
     * @param {?} componentInjector
     * @param {?=} options
     * @return {?}
     */
    IoService.prototype.init = function (componentInjector, options) {
        if (options === void 0) { options = {}; }
        this.checkInit = componentInjector ? noop : this.failInit;
        this._compInjector = componentInjector;
        if (options.trackOutputChanges) {
            /** @type {?} */
            var outputsDiffer_1 = this._differs.find({}).create();
            this._outputsChanged = function (outputs) { return !!outputsDiffer_1.diff(outputs); };
        }
    };
    /**
     * @param {?} inputs
     * @param {?} outputs
     * @param {?} inputsChanged
     * @param {?} outputsChanged
     * @return {?}
     */
    IoService.prototype.update = function (inputs, outputs, inputsChanged, outputsChanged) {
        this.checkInit();
        this.updateIO(inputs, outputs);
        /** @type {?} */
        var compChanged = this._componentInstChanged;
        if (compChanged || inputsChanged) {
            /** @type {?} */
            var inputsChanges = this._getInputsChanges(this._inputs);
            if (inputsChanges) {
                this._updateInputChanges(inputsChanges);
            }
            this.updateInputs(compChanged || !this._lastInputChanges);
        }
        if (compChanged || outputsChanged) {
            this.bindOutputs();
        }
    };
    /**
     * @return {?}
     */
    IoService.prototype.maybeUpdate = function () {
        this.checkInit();
        if (this._componentInstChanged) {
            this.updateInputs(true);
            this.bindOutputs();
            return;
        }
        if (this._outputsChanged(this._outputs)) {
            this.bindOutputs();
        }
        if (!this._inputs) {
            return;
        }
        /** @type {?} */
        var inputsChanges = this._getInputsChanges(this._inputs);
        if (inputsChanges) {
            /** @type {?} */
            var isNotFirstChange = !!this._lastInputChanges;
            this._updateInputChanges(inputsChanges);
            if (isNotFirstChange) {
                this.updateInputs();
            }
        }
    };
    /**
     * @private
     * @param {?} inputs
     * @param {?} outputs
     * @return {?}
     */
    IoService.prototype.updateIO = function (inputs, outputs) {
        this._inputs = inputs;
        this._outputs = outputs;
    };
    /**
     * @private
     * @param {?=} isFirstChange
     * @return {?}
     */
    IoService.prototype.updateInputs = function (isFirstChange) {
        if (isFirstChange === void 0) { isFirstChange = false; }
        if (isFirstChange) {
            this._updateCompFactory();
        }
        /** @type {?} */
        var compInst = this._componentInst;
        /** @type {?} */
        var inputs = this._inputs;
        if (!inputs || !compInst) {
            return;
        }
        inputs = this._resolveInputs(inputs);
        Object.keys(inputs).forEach(function (p) { return (compInst[p] = inputs[p]); });
        this.notifyOnInputChanges(this._lastInputChanges, isFirstChange);
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype.bindOutputs = function () {
        var _this = this;
        this._disconnectOutputs();
        /** @type {?} */
        var compInst = this._componentInst;
        /** @type {?} */
        var outputs = this._outputs;
        if (!outputs || !compInst) {
            return;
        }
        outputs = this._resolveOutputs(outputs);
        Object.keys(outputs)
            .filter(function (p) { return compInst[p]; })
            .forEach(function (p) { return compInst[p]
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._outputsShouldDisconnect$))
            .subscribe(outputs[p]); });
    };
    /**
     * @private
     * @param {?=} changes
     * @param {?=} forceFirstChanges
     * @return {?}
     */
    IoService.prototype.notifyOnInputChanges = function (changes, forceFirstChanges) {
        if (changes === void 0) { changes = {}; }
        // Exit early if component not interested to receive changes
        if (!this._componentInst.ngOnChanges) {
            return;
        }
        if (forceFirstChanges) {
            changes = this._collectFirstChanges();
        }
        this._componentInst.ngOnChanges(changes);
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype._disconnectOutputs = function () {
        this._outputsShouldDisconnect$.next();
    };
    /**
     * @private
     * @param {?} inputs
     * @return {?}
     */
    IoService.prototype._getInputsChanges = function (inputs) {
        return this._inputsDiffer.diff(this._inputs);
    };
    /**
     * @private
     * @param {?} differ
     * @return {?}
     */
    IoService.prototype._updateInputChanges = function (differ) {
        this._lastInputChanges = this._collectChangesFromDiffer(differ);
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype._collectFirstChanges = function () {
        /** @type {?} */
        var changes = ( /** @type {?} */({}));
        /** @type {?} */
        var inputs = this._inputs;
        Object.keys(inputs).forEach(function (prop) { return (changes[prop] = createNewChange(inputs[prop])); });
        return this._resolveChanges(changes);
    };
    /**
     * @private
     * @param {?} differ
     * @return {?}
     */
    IoService.prototype._collectChangesFromDiffer = function (differ) {
        /** @type {?} */
        var changes = ( /** @type {?} */({}));
        differ.forEachAddedItem(recordToChanges(changes));
        differ.forEachItem(recordToNewChanges(changes));
        return this._resolveChanges(changes);
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype._resolveCompFactory = function () {
        try {
            try {
                return this._cfr.resolveComponentFactory(this._compRef.componentType);
            }
            catch (e) {
                // Fallback if componentType does not exist (happens on NgComponentOutlet)
                return this._cfr.resolveComponentFactory(this._compRef.instance.constructor);
            }
        }
        catch (e) {
            // Factory not available - bailout
            return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype._updateCompFactory = function () {
        this._compFactory = this._resolveCompFactory();
    };
    /**
     * @private
     * @param {?} inputs
     * @return {?}
     */
    IoService.prototype._resolveInputs = function (inputs) {
        if (!this._compFactory) {
            return inputs;
        }
        return this._remapIO(inputs, this._compFactory.inputs);
    };
    /**
     * @private
     * @param {?} outputs
     * @return {?}
     */
    IoService.prototype._resolveOutputs = function (outputs) {
        if (!this._compFactory) {
            return outputs;
        }
        return this._remapIO(outputs, this._compFactory.outputs);
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    IoService.prototype._resolveChanges = function (changes) {
        if (!this._compFactory) {
            return changes;
        }
        return this._remapIO(changes, this._compFactory.inputs);
    };
    /**
     * @private
     * @param {?} io
     * @param {?} mapping
     * @return {?}
     */
    IoService.prototype._remapIO = function (io, mapping) {
        var _this = this;
        /** @type {?} */
        var newIO = {};
        Object.keys(io).forEach(function (key) {
            /** @type {?} */
            var newKey = _this._findPropByTplInMapping(key, mapping) || key;
            newIO[newKey] = io[key];
        });
        return newIO;
    };
    /**
     * @private
     * @param {?} tplName
     * @param {?} mapping
     * @return {?}
     */
    IoService.prototype._findPropByTplInMapping = function (tplName, mapping) {
        for (var _i = 0, mapping_1 = mapping; _i < mapping_1.length; _i++) {
            var map = mapping_1[_i];
            if (map.templateName === tplName) {
                return map.propName;
            }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    IoService.prototype.failInit = function () {
        throw Error('IoService: ComponentInjector was not set! Please call init() method!');
    };
    return IoService;
}());
IoService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
IoService.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IoFactoryService = /** @class */ (function () {
    /**
     * @param {?} differs
     * @param {?} cfr
     */
    function IoFactoryService(differs, cfr) {
        this.differs = differs;
        this.cfr = cfr;
    }
    /**
     * @return {?}
     */
    IoFactoryService.prototype.create = function () {
        return new IoService(this.differs, this.cfr);
    };
    return IoFactoryService;
}());
IoFactoryService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
IoFactoryService.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW_REF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowRef');
var WindowRefService = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function WindowRefService(injector) {
        this.injector = injector;
        this.nativeWindow = this.injector.get(WINDOW_REF, null);
    }
    return WindowRefService;
}());
WindowRefService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
WindowRefService.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} type
 * @param {?=} inputs
 * @param {?=} outputs
 * @return {?}
 */
function dynamicDirectiveDef(type, inputs, outputs) {
    return { type: type, inputs: inputs, outputs: outputs };
}
var DynamicDirectivesDirective = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} iterableDiffers
     * @param {?} ioFactoryService
     * @param {?} windowRef
     * @param {?} componentInjectorType
     * @param {?} componentOutletInjector
     */
    function DynamicDirectivesDirective(injector, iterableDiffers, ioFactoryService, windowRef, componentInjectorType, componentOutletInjector) {
        this.injector = injector;
        this.iterableDiffers = iterableDiffers;
        this.ioFactoryService = ioFactoryService;
        this.windowRef = windowRef;
        this.componentInjectorType = componentInjectorType;
        this.componentOutletInjector = componentOutletInjector;
        this.ndcDynamicDirectivesCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.componentInjector = this.injector.get(this.componentInjectorType, null);
        this.dirRef = new Map();
        this.dirIo = new Map();
        this.dirsDiffer = this.iterableDiffers
            .find([])
            .create(function (_, def) { return def.type; });
    }
    Object.defineProperty(DynamicDirectivesDirective.prototype, "directives", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return (this.ndcDynamicDirectives || this.ngComponentOutletNdcDynamicDirectives);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "compInjector", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.componentOutletInjector || this.componentInjector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "componentRef", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.compInjector.componentRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "compInstance", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.componentRef && this.componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "isCompChanged", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            if (this.lastCompInstance !== this.compInstance) {
                this.lastCompInstance = this.compInstance;
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "hostInjector", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.componentRef.injector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "hostVcr", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.componentRef['_viewRef']['_viewContainerRef'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirectivesDirective.prototype, "reflect", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return (( /** @type {?} */(this.windowRef.nativeWindow))).Reflect;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.ngDoCheck = function () {
        if (this.maybeDestroyDirectives()) {
            return;
        }
        /** @type {?} */
        var dirsChanges = this.dirsDiffer.diff(this.directives);
        if (!dirsChanges) {
            return this.updateDirectives();
        }
        this.processDirChanges(dirsChanges);
    };
    /**
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.ngOnDestroy = function () {
        this.destroyAllDirectives();
    };
    /**
     * @private
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.maybeDestroyDirectives = function () {
        if (this.isCompChanged || !this.componentRef) {
            this.dirsDiffer.diff([]);
            this.destroyAllDirectives();
        }
        return !this.componentRef;
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.processDirChanges = function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (_a) {
            var item = _a.item;
            return _this.destroyDirective(item);
        });
        /** @type {?} */
        var createdDirs = [];
        changes.forEachAddedItem(function (_a) {
            var item = _a.item;
            return createdDirs.push(_this.initDirective(item));
        });
        if (createdDirs.length) {
            this.ndcDynamicDirectivesCreated.emit(createdDirs.filter(Boolean));
        }
    };
    /**
     * @private
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.updateDirectives = function () {
        var _this = this;
        this.directives.forEach(function (dir) { return _this.updateDirective(dir); });
    };
    /**
     * @private
     * @param {?} dirDef
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.updateDirective = function (dirDef) {
        /** @type {?} */
        var io = this.dirIo.get(dirDef.type);
        io.update(dirDef.inputs, dirDef.outputs, false, false);
        io.maybeUpdate();
    };
    /**
     * @private
     * @param {?} dirDef
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.initDirective = function (dirDef) {
        if (this.dirRef.has(dirDef.type)) {
            return;
        }
        /** @type {?} */
        var instance = this.createDirective(dirDef.type);
        /** @type {?} */
        var dir = {
            instance: instance,
            type: dirDef.type,
            injector: this.hostInjector,
            hostComponent: this.componentRef.instance,
            hostView: this.componentRef.hostView,
            location: this.componentRef.location,
            changeDetectorRef: this.componentRef.changeDetectorRef,
            onDestroy: this.componentRef.onDestroy,
        };
        this.initDirIO(dir, dirDef.inputs, dirDef.outputs);
        this.callInitHooks(instance);
        this.dirRef.set(dir.type, dir);
        return dir;
    };
    /**
     * @private
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.destroyAllDirectives = function () {
        var _this = this;
        this.dirRef.forEach(function (dir) { return _this.destroyDirRef(dir); });
        this.dirRef.clear();
        this.dirIo.clear();
    };
    /**
     * @private
     * @param {?} dirDef
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.destroyDirective = function (dirDef) {
        this.destroyDirRef(this.dirRef.get(dirDef.type));
        this.dirRef.delete(dirDef.type);
        this.dirIo.delete(dirDef.type);
    };
    /**
     * @private
     * @param {?} dir
     * @param {?=} inputs
     * @param {?=} outputs
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.initDirIO = function (dir, inputs, outputs) {
        /** @type {?} */
        var io = this.ioFactoryService.create();
        io.init({ componentRef: this.dirToCompDef(dir) }, { trackOutputChanges: true });
        io.update(inputs, outputs, !!inputs, !!outputs);
        this.dirIo.set(dir.type, io);
    };
    /**
     * @private
     * @param {?} dir
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.dirToCompDef = function (dir) {
        return Object.assign({}, this.componentRef, { destroy: this.componentRef.destroy, onDestroy: this.componentRef.onDestroy, instance: dir.instance, componentType: dir.type });
    };
    /**
     * @private
     * @param {?} dir
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.destroyDirRef = function (dir) {
        /** @type {?} */
        var io = this.dirIo.get(dir.type);
        io.ngOnDestroy();
        if ('ngOnDestroy' in dir.instance) {
            dir.instance.ngOnDestroy();
        }
    };
    /**
     * @private
     * @template T
     * @param {?} dirType
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.createDirective = function (dirType) {
        var _this = this;
        /** @type {?} */
        var ctorParams = getCtorType(dirType, this.reflect);
        /** @type {?} */
        var resolvedParams = ctorParams.map(function (p) { return _this.resolveDep(p); });
        return new (dirType.bind.apply(dirType, [void 0].concat(resolvedParams)))();
    };
    /**
     * @private
     * @param {?} dep
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.resolveDep = function (dep) {
        return this.maybeResolveVCR(dep) || this.hostInjector.get(dep);
    };
    /**
     * @private
     * @param {?} dep
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.maybeResolveVCR = function (dep) {
        if (dep === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) {
            return this.hostVcr;
        }
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.callInitHooks = function (obj) {
        this.callHook(obj, 'ngOnInit');
        this.callHook(obj, 'ngDoCheck');
        this.callHook(obj, 'ngAfterContentInit');
        this.callHook(obj, 'ngAfterContentChecked');
        this.callHook(obj, 'ngAfterViewInit');
        this.callHook(obj, 'ngAfterViewChecked');
    };
    /**
     * @private
     * @param {?} obj
     * @param {?} hook
     * @param {?=} args
     * @return {?}
     */
    DynamicDirectivesDirective.prototype.callHook = function (obj, hook, args) {
        if (args === void 0) { args = []; }
        if (obj[hook]) {
            obj[hook].apply(obj, args);
        }
    };
    return DynamicDirectivesDirective;
}());
DynamicDirectivesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ndcDynamicDirectives],[ngComponentOutletNdcDynamicDirectives]',
            },] },
];
/** @nocollapse */
DynamicDirectivesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
    { type: IoFactoryService },
    { type: WindowRefService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPONENT_INJECTOR,] }] },
    { type: ComponentOutletInjectorDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
]; };
DynamicDirectivesDirective.propDecorators = {
    ndcDynamicDirectives: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngComponentOutletNdcDynamicDirectives: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicDirectivesCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicComponent = /** @class */ (function () {
    /**
     * @param {?} _vcr
     * @param {?} _cfr
     */
    function DynamicComponent(_vcr, _cfr) {
        this._vcr = _vcr;
        this._cfr = _cfr;
        this.ndcDynamicCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicComponent.prototype.ngOnChanges = function (changes) {
        if (changes['ndcDynamicComponent']) {
            this.createDynamicComponent();
        }
    };
    /**
     * @return {?}
     */
    DynamicComponent.prototype.createDynamicComponent = function () {
        this._vcr.clear();
        this.componentRef = null;
        if (this.ndcDynamicComponent) {
            this.componentRef = this._vcr.createComponent(this._cfr.resolveComponentFactory(this.ndcDynamicComponent), 0, this._resolveInjector(), this.ndcDynamicContent);
            this.ndcDynamicCreated.emit(this.componentRef);
        }
    };
    /**
     * @private
     * @return {?}
     */
    DynamicComponent.prototype._resolveInjector = function () {
        /** @type {?} */
        var injector = this.ndcDynamicInjector || this._vcr.parentInjector;
        if (this.ndcDynamicProviders) {
            injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this.ndcDynamicProviders,
                parent: injector,
            });
        }
        return injector;
    };
    return DynamicComponent;
}());
DynamicComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ndc-dynamic',
                template: '',
            },] },
];
/** @nocollapse */
DynamicComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
]; };
DynamicComponent.propDecorators = {
    ndcDynamicComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicInjector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicProviders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicDirective = /** @class */ (function () {
    /**
     * @param {?} _injector
     * @param {?} ioService
     * @param {?} _componentInjectorType
     * @param {?} _componentOutletInjector
     */
    function DynamicDirective(_injector, ioService, _componentInjectorType, _componentOutletInjector) {
        this._injector = _injector;
        this.ioService = ioService;
        this._componentInjectorType = _componentInjectorType;
        this._componentOutletInjector = _componentOutletInjector;
        this._componentInjector = this._injector.get(this._componentInjectorType, null);
        this.ioService.init(this._compInjector);
    }
    Object.defineProperty(DynamicDirective.prototype, "_inputs", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.ndcDynamicInputs || this.ngComponentOutletNdcDynamicInputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirective.prototype, "_outputs", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this.ndcDynamicOutputs || this.ngComponentOutletNdcDynamicOutputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDirective.prototype, "_compInjector", {
        /**
         * @private
         * @return {?}
         */
        get: function () {
            return this._componentOutletInjector || this._componentInjector;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicDirective.prototype.ngOnChanges = function (changes) {
        this.ioService.update(this._inputs, this._outputs, this._inputsChanged(changes), this._outputsChanged(changes));
    };
    /**
     * @return {?}
     */
    DynamicDirective.prototype.ngDoCheck = function () {
        this.ioService.maybeUpdate();
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    DynamicDirective.prototype._inputsChanged = function (changes) {
        return ('ngComponentOutletNdcDynamicInputs' in changes ||
            'ndcDynamicInputs' in changes);
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    DynamicDirective.prototype._outputsChanged = function (changes) {
        return ('ngComponentOutletNdcDynamicOutputs' in changes ||
            'ndcDynamicOutputs' in changes);
    };
    return DynamicDirective;
}());
DynamicDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ndcDynamicInputs],[ndcDynamicOutputs],[ngComponentOutletNdcDynamicInputs],[ngComponentOutletNdcDynamicOutputs]',
                providers: [IoService],
            },] },
];
/** @nocollapse */
DynamicDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: IoService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPONENT_INJECTOR,] }] },
    { type: ComponentOutletInjectorDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
]; };
DynamicDirective.propDecorators = {
    ndcDynamicInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngComponentOutletNdcDynamicInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ndcDynamicOutputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngComponentOutletNdcDynamicOutputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function windowRefFactory() {
    return window;
}
var DynamicModule = /** @class */ (function () {
    function DynamicModule() {
    }
    /**
     * @param {?} components
     * @param {?=} componentInjector
     * @return {?}
     */
    DynamicModule.withComponents = function (components, componentInjector) {
        if (componentInjector === void 0) { componentInjector = DynamicComponent; }
        return {
            ngModule: DynamicModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ANALYZE_FOR_ENTRY_COMPONENTS"],
                    useValue: components,
                    multi: true,
                },
                { provide: COMPONENT_INJECTOR, useValue: componentInjector },
                IoFactoryService,
                { provide: WINDOW_REF, useFactory: windowRefFactory },
                WindowRefService,
            ],
        };
    };
    return DynamicModule;
}());
DynamicModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    DynamicComponent,
                    DynamicDirective,
                    ComponentOutletInjectorDirective,
                    DynamicAttributesDirective,
                    DynamicDirectivesDirective,
                ],
                exports: [
                    DynamicComponent,
                    DynamicDirective,
                    ComponentOutletInjectorDirective,
                    DynamicAttributesDirective,
                    DynamicDirectivesDirective,
                ],
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./src/app/common/components/grid-components/ad/ad.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/grid-components/ad/ad.component.ts ***!
  \**********************************************************************/
/*! exports provided: gridAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAdComponent", function() { return gridAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var gridAdComponent = /** @class */ (function () {
    function gridAdComponent() {
    }
    gridAdComponent.prototype.ngOnInit = function () {
        var options = JSON.parse(this.options);
        //this.imgUrl = options.imageUrl;
    };
    gridAdComponent.minGridColSize = 1;
    gridAdComponent.maxGridColSize = 5;
    gridAdComponent.minGridRowSize = 1;
    gridAdComponent.maxGridRowSize = 5;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridAdComponent.prototype, "options", void 0);
    gridAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-ad',
            template: __webpack_require__(/*! ./ad.template.html */ "./src/app/common/components/grid-components/ad/ad.template.html"),
        }),
        __metadata("design:paramtypes", [])
    ], gridAdComponent);
    return gridAdComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/ad/ad.template.html":
/*!***********************************************************************!*\
  !*** ./src/app/common/components/grid-components/ad/ad.template.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "REKLAMA!!!!!!\nREKLAMA!!!!!!\nREKLAMA!!!!\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/archive/archive.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/grid-components/archive/archive.component.ts ***!
  \********************************************************************************/
/*! exports provided: gridArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArchiveComponent", function() { return gridArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gridArchiveComponent = /** @class */ (function () {
    function gridArchiveComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    gridArchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        var options = JSON.parse(this.options);
        this.articleService.getArticles().then(function (articles) {
            //this.articles = articles;
            var arts = [];
            articles.forEach(function (article) {
                _this.articleService.getArticle(article).then(function (art) {
                    arts.push(art);
                });
            });
            _this.articles = arts;
            _this.loaded = true;
        });
    };
    gridArchiveComponent.minGridColSize = 2;
    gridArchiveComponent.maxGridColSize = 50;
    gridArchiveComponent.minGridRowSize = 2;
    gridArchiveComponent.maxGridRowSize = 50;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridArchiveComponent.prototype, "options", void 0);
    gridArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-archive',
            template: __webpack_require__(/*! ./archive.template.html */ "./src/app/common/components/grid-components/archive/archive.template.html"),
        }),
        __metadata("design:paramtypes", [src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], gridArchiveComponent);
    return gridArchiveComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/archive/archive.template.html":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/grid-components/archive/archive.template.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let article of articles\">\n            <div class=\"card h-100\" routerLink=\"/article/{{article.id}}\" style=\"cursor: pointer;background-color: #edcfac;\n            box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.25) !important;\">\n                <div class=\"d-flex align-items-baseline\" style=\"min-height: 10px;\">\n                    <p class=\"px-3 card-category pt-2 mb-0\" *ngIf=\"category != null\">{{category.info.name}}</p>\n                    <!-- <p routerLink=\"/article/{{article.id}}\" style=\"cursor: pointer;\" class=\"mb-0 px-3\">Více >></p> -->\n                </div>\n                <div class=\"d-flex align-items-baseline\">\n                    <h5 class=\"card-title mb-2 px-3\">{{article.name}}</h5>\n                </div>\n                <div class=\"small pt-0 px-3 pb-2\">\n                    {{ (article.description.length > 75)? (article.description | slice:0:75)+'..':(article.description) }}\n                </div>\n                <img *ngIf=\"article.image_url != ''\" [src]=\"article.image_url\" class=\"card-image\" alt=\"\">\n                <!-- <div class=\"card-footer d-flex\">\n\n                </div> -->\n            </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/article/article.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/grid-components/article/article.component.ts ***!
  \********************************************************************************/
/*! exports provided: gridArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArticleComponent", function() { return gridArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gridArticleComponent = /** @class */ (function () {
    function gridArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    gridArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        var options = JSON.parse(this.options);
        this.route.paramMap.subscribe(function (params) { _this.id = params.get("articleId"); });
        console.log(this.id);
        this.articleService.getArticle(this.id).then(function (article) {
            _this.article = article;
            _this.loaded = true;
        });
        // }
        // if(options.podle){
        //     this.podle = options.podle;
        // }
        // if(options.order){
        //     this.order = options.order;
        // }
    };
    gridArticleComponent.minGridColSize = 7;
    gridArticleComponent.maxGridColSize = 9;
    gridArticleComponent.minGridRowSize = 9;
    gridArticleComponent.maxGridRowSize = 15;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridArticleComponent.prototype, "options", void 0);
    gridArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-article',
            template: __webpack_require__(/*! ./article.template.html */ "./src/app/common/components/grid-components/article/article.template.html"),
        }),
        __metadata("design:paramtypes", [src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], gridArticleComponent);
    return gridArticleComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/article/article.template.html":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/grid-components/article/article.template.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\" class=\"p-3\"  [innerHTML]=\"article.contents\">\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/articlePreview/article.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/common/components/grid-components/articlePreview/article.component.ts ***!
  \***************************************************************************************/
/*! exports provided: gridArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArticlePreviewComponent", function() { return gridArticlePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/modules/categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gridArticlePreviewComponent = /** @class */ (function () {
    function gridArticlePreviewComponent(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
    }
    gridArticlePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        var options = JSON.parse(this.options);
        if (options.exact && !options.index) {
            this.exact = options.exact;
            this.articleService.getArticle(this.exact).then(function (article) {
                _this.article = article;
                _this.loaded = true;
            });
        }
        if (options.podle) {
            this.podle = options.podle;
        }
        if (options.index) {
            this.index = options.index;
            console.log(this.index.toString());
            this.articleService.getByNth('desc', this.index - 1, '1').then(function (article) {
                _this.article = article[0];
                if (article[0].categories) {
                    _this.categoriesService.getCategory(article[0].categories[0]).then(function (category) {
                        console.log(category);
                        _this.category = category;
                    });
                }
                _this.loaded = true;
            });
        }
        if (options.order) {
            this.order = options.order;
        }
    };
    gridArticlePreviewComponent.prototype.openArticle = function () {
    };
    gridArticlePreviewComponent.minGridColSize = 1;
    gridArticlePreviewComponent.maxGridColSize = 4;
    gridArticlePreviewComponent.minGridRowSize = 2;
    gridArticlePreviewComponent.maxGridRowSize = 6;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridArticlePreviewComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridArticlePreviewComponent.prototype, "editmode", void 0);
    gridArticlePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-article-preview',
            template: __webpack_require__(/*! ./article.template.html */ "./src/app/common/components/grid-components/articlePreview/article.template.html"),
            styles: [__webpack_require__(/*! ./article.styles.scss */ "./src/app/common/components/grid-components/articlePreview/article.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]])
    ], gridArticlePreviewComponent);
    return gridArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/articlePreview/article.styles.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/common/components/grid-components/articlePreview/article.styles.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 1px solid #f2f2f2; }\n\n.card-title {\n  flex: 1;\n  font-weight: 300; }\n\n.card-category {\n  flex: 1;\n  text-transform: capitalize; }\n\n.card-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: -1px;\n  margin-right: -1px;\n  height: 15em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9ncmlkLWNvbXBvbmVudHMvYXJ0aWNsZVByZXZpZXcvYXJ0aWNsZS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLFFBQU87RUFFUCxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxRQUFPO0VBRVAsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0kscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2dyaWQtY29tcG9uZW50cy9hcnRpY2xlUHJldmlldy9hcnRpY2xlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIC8vY29sb3I6ICMxZDI1M2I7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNhcmQtY2F0ZWdvcnkge1xuICAgIGZsZXg6IDE7XG4gICAgLy9jb2xvcjogIzlhOWE5YTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBoZWlnaHQ6IDE1ZW07XG59XG5cbi8vIC5ncmlkQXJ0aWNsZVByZXZpZXdDb21wb25lbnQge1xuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTVweCAwIGhzbGEoMCwwJSw0OC4yJSwuMDUpO1xuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMCBoc2xhKDAsMCUsNDguMiUsLjA1KTtcbi8vIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/components/grid-components/articlePreview/article.template.html":
/*!****************************************************************************************!*\
  !*** ./src/app/common/components/grid-components/articlePreview/article.template.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded && article && (!editmode && index)\" class=\"h-100\">\n    <div class=\"card h-100\" routerLink=\"/article/{{article.id}}\" style=\"cursor: pointer;\">\n        <div class=\"d-flex align-items-baseline\">\n            <p class=\"px-3 card-category pt-2 mb-0\" *ngIf=\"category != null\">{{category.info.name}}</p>\n            <!-- <p routerLink=\"/article/{{article.id}}\" style=\"cursor: pointer;\" class=\"mb-0 px-3\">Více >></p> -->\n        </div>\n        <div class=\"d-flex align-items-baseline\">\n            <h5 class=\"card-title mb-2 px-3\">{{article.name}}</h5>\n        </div>\n        <div class=\"small pt-0 px-3 pb-2\">\n            {{ (article.description.length > 75)? (article.description | slice:0:75)+'..':(article.description) }}\n        </div>\n        <img *ngIf=\"article.image_url != ''\" [src]=\"article.image_url\" class=\"card-image\" alt=\"\">\n        <!-- <div class=\"card-footer d-flex\">\n\n        </div> -->\n    </div>\n</div>\n\n<div *ngIf=\"index && editmode\">\n    {{index}}\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/categories/categories.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common/components/grid-components/categories/categories.component.ts ***!
  \**************************************************************************************/
/*! exports provided: gridCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridCategoriesComponent", function() { return gridCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/modules/categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var gridCategoriesComponent = /** @class */ (function () {
    function gridCategoriesComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
    }
    gridCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var options = JSON.parse(this.options);
        this.loaded = false;
        this.categoriesService.getCategories().then(function (data) {
            var categories = [];
            data.forEach(function (element) {
                console.log(element);
                _this.categoriesService.getCategory(element).then(function (category) {
                    categories.push(category);
                });
            });
            _this.categories = categories;
        });
    };
    gridCategoriesComponent.minGridColSize = 3;
    gridCategoriesComponent.maxGridColSize = 4;
    gridCategoriesComponent.minGridRowSize = 6;
    gridCategoriesComponent.maxGridRowSize = 6;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridCategoriesComponent.prototype, "options", void 0);
    gridCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-categories',
            template: __webpack_require__(/*! ./categories.template.html */ "./src/app/common/components/grid-components/categories/categories.template.html")
        }),
        __metadata("design:paramtypes", [src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], gridCategoriesComponent);
    return gridCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/categories/categories.template.html":
/*!***************************************************************************************!*\
  !*** ./src/app/common/components/grid-components/categories/categories.template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "KATEGORIES\n\n\n<div *ngFor=\"let category of categories\">\n    {{category.info.name}}\n\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/image/image.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/grid-components/image/image.component.ts ***!
  \****************************************************************************/
/*! exports provided: gridImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridImageComponent", function() { return gridImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var gridImageComponent = /** @class */ (function () {
    function gridImageComponent() {
    }
    gridImageComponent.prototype.ngOnInit = function () {
        var options = JSON.parse(this.options);
        this.imgUrl = options.imageUrl;
        if (options.imageLink) {
            this.imgLink = options.imageLink;
        }
    };
    gridImageComponent.minGridColSize = 1;
    gridImageComponent.maxGridColSize = 50;
    gridImageComponent.minGridRowSize = 1;
    gridImageComponent.maxGridRowSize = 50;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridImageComponent.prototype, "options", void 0);
    gridImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-image',
            template: __webpack_require__(/*! ./image.template.html */ "./src/app/common/components/grid-components/image/image.template.html"),
        }),
        __metadata("design:paramtypes", [])
    ], gridImageComponent);
    return gridImageComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/image/image.template.html":
/*!*****************************************************************************!*\
  !*** ./src/app/common/components/grid-components/image/image.template.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a *ngIf=\"imgLink\" [href]=\"imgLink\">\n    <img style=\"width:100%\" src=\"{{imgUrl}}\" alt=\"\">\n</a>\n<img *ngIf=\"!imgLink\" style=\"width:100%\" src=\"{{imgUrl}}\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/menu/menu.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/grid-components/menu/menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: gridMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridMenuComponent", function() { return gridMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/modules/pages/pages.service */ "./src/app/common/modules/pages/pages.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gridMenuComponent = /** @class */ (function () {
    function gridMenuComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
    }
    gridMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var options = JSON.parse(this.options);
        this.pageService.getPages().then(function (data) {
            var links = [];
            var index;
            data.forEach(function (element) {
                if (element[0] != 'index' && element[0] != 'categories' && element[0] != 'articles') {
                    links.push(element);
                }
                else if (element[0] == 'index') {
                    index = element;
                }
            });
            //links.reverse();
            //[this.links[links.length], this.links[1]] = [this.links[1],this.links[links.length]];
            _this.links = links;
            console.log(links);
            _this.links.push(index);
        });
        //this.imgUrl = options.imageUrl;
    };
    gridMenuComponent.prototype.goto = function (link) {
        var _this = this;
        console.log("ok");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            _this.router.navigated = false;
            _this.router.navigate([link]);
        });
    };
    gridMenuComponent.minGridColSize = 7;
    gridMenuComponent.maxGridColSize = 20;
    gridMenuComponent.minGridRowSize = 1;
    gridMenuComponent.maxGridRowSize = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridMenuComponent.prototype, "options", void 0);
    gridMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-menu',
            template: __webpack_require__(/*! ./menu.template.html */ "./src/app/common/components/grid-components/menu/menu.template.html"),
            styles: [__webpack_require__(/*! ./menu.styles.scss */ "./src/app/common/components/grid-components/menu/menu.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_common_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], gridMenuComponent);
    return gridMenuComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/menu/menu.styles.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/grid-components/menu/menu.styles.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex.menu-container {\n  height: 100%;\n  align-items: center; }\n\ngrid-menu {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9ncmlkLWNvbXBvbmVudHMvbWVudS9tZW51LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2dyaWQtY29tcG9uZW50cy9tZW51L21lbnUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4Lm1lbnUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZ3JpZC1tZW51IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/grid-components/menu/menu.template.html":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/grid-components/menu/menu.template.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex menu-container\">\n    <div *ngIf=\"editmode\">editmode</div>\n    <div *ngFor=\"let link of links\"  (mousedown)=\"goto('/page/'+link[0])\" style=\"cursor: pointer;max-height: 2.2rem;white-space: nowrap;\" class=\"px-5 py-2\">\n        <span *ngIf=\"link[0] != 'index' && link[0] != 'about'\">{{link[0]}}</span>\n        <span *ngIf=\"link[0] == 'index'\">úvod</span>\n        <span *ngIf=\"link[0] == 'about'\">o​​ nás</span>\n    </div>\n</div>\n​\n"

/***/ }),

/***/ "./src/app/common/components/grid-components/text/text.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/grid-components/text/text.component.ts ***!
  \**************************************************************************/
/*! exports provided: gridTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTextComponent", function() { return gridTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var gridTextComponent = /** @class */ (function () {
    function gridTextComponent() {
        this.hasClasses = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    gridTextComponent.prototype.ngOnInit = function () {
        var options = JSON.parse(this.options);
        this.text = options.text;
        if (options.class) {
            this.class = options.class;
            this.hasClasses.emit("parent-" + this.class + "|" + this.id);
        }
    };
    gridTextComponent.minGridColSize = 2;
    gridTextComponent.maxGridColSize = 50;
    gridTextComponent.minGridRowSize = 1;
    gridTextComponent.maxGridRowSize = 50;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridTextComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], gridTextComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], gridTextComponent.prototype, "hasClasses", void 0);
    gridTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-text',
            template: __webpack_require__(/*! ./text.template.html */ "./src/app/common/components/grid-components/text/text.template.html"),
        }),
        __metadata("design:paramtypes", [])
    ], gridTextComponent);
    return gridTextComponent;
}());



/***/ }),

/***/ "./src/app/common/components/grid-components/text/text.template.html":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/grid-components/text/text.template.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"p-2\"  [ngClass]=\"{'text-left' : (alignment == 'left'), 'text-center' : (alignment == 'center'),'text-right' : alignment == 'right' }\" >\n    {{text}}\n</div> -->\n\n\n<div class=\"p-2\" [ngClass]=\"class\" [innerHTML]=\"text\">/<div>\n\n"

/***/ }),

/***/ "./src/app/core/components/page/page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/page/page.component.ts ***!
  \********************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.view.service */ "./src/app/core/components/page/page.view.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PageComponent = /** @class */ (function () {
    function PageComponent(authentication, pageService, modalService, route, toast, router) {
        var _this = this;
        this.authentication = authentication;
        this.pageService = pageService;
        this.modalService = modalService;
        this.route = route;
        this.toast = toast;
        this.router = router;
        this.articleCount = 0; //realtes to ordered articles
        this.removedItems = [];
        //create new grid item
        this.componentDefinitions = [];
        this.chosenComponentOptions = {};
        this.outputs = {
            hasClasses: function (clazz) {
                setTimeout(function () {
                    var clazId = clazz.split("|");
                    _this.dashboard.forEach(function (element) {
                        //console.log(clazId[1], element.id);
                        if (element.id == clazId[1]) {
                            var index = _this.dashboard.indexOf(element);
                            _this.dashboard[index]['class'] = clazId[0];
                            //element['clazz'] =
                        }
                    });
                }, 0);
            }
        };
    }
    PageComponent_1 = PageComponent;
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        //an interceptor in case the page dosent load should try to load it again atleast 2 more times
        this.editmode = false;
        if (this.authentication._authenticated == true) {
            this.editmode = true;
        }
        ;
        if (this.route.snapshot.url[0].path == 'index') {
            this.page = "index";
            this.pageType = "index";
        }
        else if (this.route.snapshot.url[0].path == 'article') {
            this.page = 'articles';
            this.pageType = "article";
        }
        else {
            this.pageType = "";
            this.route.paramMap.subscribe(function (params) { _this.page = params.get("pageid"); });
        }
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["GridType"].VerticalFixed,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["DisplayGrid"].OnDragAndResize,
            itemResizeCallback: PageComponent_1.itemResize,
            //gridSizeChangedCallback: PageComponent.gridResize,
            //itemResizeCallback: PageComponent.itemResize,
            //itemInitCallback: PageComponent.itemInit,
            //itemRemovedCallback: PageComponent.itemRemoved,)
            disableWindowResize: false,
            fixedColWidth: 50,
            fixedRowHeight: 50,
            minCols: 12,
            minRows: 12,
            maxCols: 64,
            maxRows: 64,
            isMobile: false,
            mobileBreakpoint: 0,
            pushItems: this.editmode,
            draggable: {
                enabled: this.editmode
            },
            resizable: {
                enabled: this.editmode,
            }
        };
        this.pageService.getPageGrid(this.page).then(function (data) {
            _this.gridId = data[0].grid;
            _this.dashboard = data;
            console.log(data);
            _this.loaded = true;
            _this.calibrateOrderedArticles();
        });
    };
    PageComponent.prototype.getComponent = function (component) {
        return _page_view_service__WEBPACK_IMPORTED_MODULE_3__["PageViewService"].getStringToComponentDefinitions(component);
    };
    // static gridResize(gridsterComponent){
    //     //fix recurison problem
    //     gridsterComponent.grid.forEach(element => {
    //         PageComponent.itemResize(element.item,element);
    //     });
    // }
    PageComponent.itemResize = function (item, itemComponent) {
        var component = _page_view_service__WEBPACK_IMPORTED_MODULE_3__["PageViewService"].getStringToComponentDefinitions(item.component);
        var columns = itemComponent.gridster.columns;
        //let rows = itemComponent
        //probably create a better way
        var minCol = Math.round(columns * (component.minGridColSize / 12));
        if (itemComponent.$item.cols < minCol) {
            itemComponent.$item.cols = minCol;
            itemComponent.setSize();
            //itemComponent.checkItemChanges(itemComponent.$item, itemComponent.item);
            //this.toast.error("takhle malé pole být nemůže");
        }
        var maxCol = Math.round(columns * (component.maxGridColSize / 12));
        if (itemComponent.$item.cols > maxCol) {
            itemComponent.$item.cols = maxCol;
            itemComponent.setSize();
            //itemComponent.checkItemChanges(itemComponent.$item, itemComponent.item);
            //this.toast.error("takhle velké pole být nemůže");
        }
        if (itemComponent.$item.rows < component.minGridRowSize) {
            itemComponent.$item.rows = component.minGridRowSize;
            itemComponent.setSize();
            itemComponent.checkItemChanges(itemComponent.$item, itemComponent.item);
            //this.toast.error("takhle malé pole být nemůže");
        }
        if (itemComponent.$item.rows > component.maxGridRowSize) {
            itemComponent.$item.rows = component.maxGridRowSize;
            itemComponent.setSize();
            itemComponent.checkItemChanges(itemComponent.$item, itemComponent.item);
            //this.toast.error("takhle velké pole být nemůže");
        }
    };
    PageComponent.prototype.changedOptions = function () {
        this.options.api.optionsChanged();
    };
    PageComponent.prototype.removeItem = function (event, item) {
        this.removedItems.push(item.id);
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
        this.calibrateOrderedArticles();
    };
    PageComponent.prototype.addItem = function (data) {
        this.dashboard.push(data);
    };
    PageComponent.prototype.saveGrid = function () {
        var _this = this;
        this.loaded = false;
        this.dashboard.forEach(function (element) {
            console.log(_this.page, element);
            _this.pageService.savePageGrid(_this.page, element).then(function (data) {
                _this.loaded = true;
            });
        });
        this.removedItems.forEach(function (element) {
            _this.pageService.deletePageGrid(element).then(function (data) {
            });
        });
    };
    PageComponent.prototype.calibrateOrderedArticles = function () {
        var _this = this;
        //this is pretty crap find something better
        this.articleCount = 0;
        var orderedArticlesIndexes = {};
        this.dashboard.forEach(function (element) {
            if (element.component == 'gridArticlePreviewComponent') {
                var options = JSON.parse(element.options);
                if (options['podle'] == 'order') {
                    _this.articleCount++;
                    orderedArticlesIndexes[options['index']] = _this.dashboard.indexOf(element);
                }
            }
        });
        var keys = Object.keys(orderedArticlesIndexes);
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var indexOfArticle = parseInt(orderedArticlesIndexes[k]);
            var options = JSON.parse(this.dashboard[indexOfArticle].options);
            options.index = i + 1;
            this.dashboard[indexOfArticle].options = JSON.stringify(options);
        }
    };
    PageComponent.prototype.editItem = function (event, item, content) {
        var _this = this;
        console.log(this.page);
        this.componentDefinitions = this.pageService.getComponentDefinitions();
        this.componentDefinitions.forEach(function (element) {
            if (element.name == item.component) {
                _this.chosenComponent = element;
            }
        });
        var options = JSON.parse(item.options);
        this.chosenComponentOptions = options;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.pageService.savePageGrid(_this.page, { id: item.id, grid: _this.gridId, cols: item.cols, rows: item.rows, y: item.y, x: item.x, options: JSON.stringify(_this.chosenComponentOptions), component: item.component }).then(function (data) {
                //this.addItem( {cols: com.minGridColSize, rows: 1, y: com.minGridRowSize, x: 0,options:JSON.stringify(this.chosenComponentOptions),component:this.chosenComponent.name});
            });
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    PageComponent.prototype.open = function (content) {
        var _this = this;
        this.componentDefinitions = this.pageService.getComponentDefinitions();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            var com = _this.getComponent(_this.chosenComponent.name);
            if (_this.chosenComponent.name == 'gridArticlePreviewComponent') {
                _this.chosenComponentOptions['index'] = _this.articleCount + 1;
            }
            _this.pageService.createPageGrid({ grid: _this.gridId, cols: com.minGridColSize, rows: com.minGridRowSize, y: 0, x: 0, options: JSON.stringify(_this.chosenComponentOptions), component: _this.chosenComponent.name }, _this.page).then(function (data) {
                _this.addItem({ cols: com.minGridColSize, rows: 1, y: com.minGridRowSize, x: 0, options: JSON.stringify(_this.chosenComponentOptions), component: _this.chosenComponent.name });
            });
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    var PageComponent_1;
    PageComponent = PageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./page.template.html */ "./src/app/core/components/page/page.template.html"),
            styles: [__webpack_require__(/*! ./page.styles.scss */ "./src/app/core/components/page/page.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _page_view_service__WEBPACK_IMPORTED_MODULE_3__["PageViewService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page/page.styles.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/components/page/page.styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editbar {\n  position: fixed;\n  bottom: 2rem;\n  left: 0;\n  display: flex;\n  height: 3rem;\n  width: 100%;\n  z-index: 100;\n  align-content: center;\n  flex-direction: row;\n  justify-content: center; }\n\n.editbar-inside {\n  height: 3.5rem;\n  width: 80%;\n  box-shadow: 0px 0px 8px -3px black;\n  background-color: white;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\ngridster-item > .button-holder {\n  display: none; }\n\ngridster-item:hover > .button-holder {\n  color: gray !important;\n  display: block;\n  cursor: pointer; }\n\n.button-holder-right {\n  z-index: 99;\n  position: absolute;\n  top: -3px;\n  right: 5px; }\n\n.button-holder-left {\n  z-index: 99;\n  position: absolute;\n  top: -3px;\n  left: 5px; }\n\n.bg-white {\n  background-color: white; }\n\ngridster-item.gridArticlePreviewComponent {\n  box-shadow: 0 1px 15px 0 rgba(123, 123, 123, 0.05); }\n\ngridster-item.gridMenuComponent {\n  display: flex !important;\n  background-color: transparent; }\n\n.gridMenuComponent > * {\n  width: 100%; }\n\ngridster-item.gridMenuComponent > grid-menu {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGFnZS9wYWdlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixhQUFZO0VBQ1osUUFBTztFQUNQLGNBQWE7RUFDYixhQUFZO0VBQ1osWUFBVztFQUNYLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLHdCQUF1QixFQUMxQjs7QUFHRDtFQUNJLGVBQWM7RUFDZCxXQUFVO0VBQ1YsbUNBQWtDO0VBQ2xDLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVUsRUFDYjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFVBQVMsRUFDWjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUVJLG1EQUE2QyxFQUNoRDs7QUFFRDtFQUNJLHlCQUF3QjtFQUN4Qiw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSxZQUFXLEVBRWQ7O0FBRUQ7RUFDSSxhQUFXO0VBQ1gsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UvcGFnZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAycmVtO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5lZGl0YmFyLWluc2lkZSB7XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAtM3B4IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZ3JpZHN0ZXItaXRlbSA+IC5idXR0b24taG9sZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5ncmlkc3Rlci1pdGVtOmhvdmVyID4gLmJ1dHRvbi1ob2xkZXIge1xuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLWhvbGRlci1yaWdodCB7XG4gICAgei1pbmRleDogOTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogNXB4O1xufVxuXG4uYnV0dG9uLWhvbGRlci1sZWZ0IHtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtM3B4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZ3JpZHN0ZXItaXRlbS5ncmlkQXJ0aWNsZVByZXZpZXdDb21wb25lbnQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTVweCAwIGhzbGEoMCwwJSw0OC4yJSwuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMCBoc2xhKDAsMCUsNDguMiUsLjA1KTtcbn1cblxuZ3JpZHN0ZXItaXRlbS5ncmlkTWVudUNvbXBvbmVudCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZ3JpZE1lbnVDb21wb25lbnQgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG5ncmlkc3Rlci1pdGVtLmdyaWRNZW51Q29tcG9uZW50ID4gZ3JpZC1tZW51IHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/page/page.template.html":
/*!*********************************************************!*\
  !*** ./src/app/core/components/page/page.template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editbar\" *ngIf=\"editmode == true && loaded == true\">\n    <div class=\"editbar-inside p-2\">\n        <div class=\"btn btn-outline-secondary mr-2\">\n            Nastavení\n        </div>\n        <div routerLink=\"/redactor/pages\" class=\"btn btn-outline-secondary mr-2\">\n            Zpět do redaktora\n        </div>\n        <div style=\"flex: 1;\"></div>\n        <div class=\"btn btn-outline-info mr-2\" (click)=\"open(content)\">\n            Přidat položku\n        </div>\n        <div class=\"btn btn-outline-success mr-2\" (click)=\"saveGrid()\">\n            Uložit\n            <!--  -->\n        </div>\n    </div>\n</div>\n\n\n<gridster [options]=\"options\" *ngIf=\"loaded\" [ngClass]=\"{'bg-color': !editmode}\">\n    <gridster-item [item]=\"item\" *ngFor=\"let item of dashboard\" ngClass=\"{{item.component}} {{(item.class) ? item.class : '' }}\" >\n        <div *ngIf=\"editmode == true\" class=\"button-holder button-holder-right\">\n            <span *ngIf=\"editmode == true\" mat-mini-fab (mousedown)=\"removeItem($event, item)\"\n                (touchstart)=\"removeItem($event, item)\">\n                x\n            </span>\n        </div>\n        <div *ngIf=\"editmode == true\" class=\"button-holder button-holder-left\">\n            <span *ngIf=\"editmode == true\" mat-mini-fab (mousedown)=\"editItem($event,item,content)\"\n                (touchstart)=\"editItem($event, item,content)\">\n                u\n            </span>\n        </div>\n        <ndc-dynamic [ndcDynamicComponent]=\"getComponent(item.component)\"\n            [ndcDynamicInputs]=\"{options:item.options,editmode:editmode,id:item.id}\"\n            [ndcDynamicOutputs]=\"outputs\">\n        </ndc-dynamic>\n    </gridster-item>\n</gridster>\n\n\n\n<ng-template #content let-modal>\n <!-- asi nekam jinam tohle -->\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Přidat komponentu</h4>\n        <span class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </span>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <select class=\"form-control\" [(ngModel)]=\"chosenComponent\" [ngModelOptions]=\"{standalone: true}\">\n                <option [ngValue]=\"def\" *ngFor=\"let def of componentDefinitions\">{{def.title}}</option>\n            </select>\n            <div *ngIf=\"chosenComponent\">\n                <div *ngIf=\"chosenComponent.select != undefined\">\n                    <div class=\"mt-2\" *ngFor=\"let sel of chosenComponent.select\">\n                        <div *ngIf=\"sel.dependsOn == undefined\">\n                            {{sel.name}} :\n                            <select required class=\"form-control\" [(ngModel)]=\"chosenComponentOptions[sel.name]\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                <option [ngValue]=\"opt[0]\" *ngFor=\"let opt of sel.options\">{{opt[1]}}</option>\n                            </select>\n                        </div>\n                        <div *ngIf=\"sel.dependsOn\">\n                            <div *ngIf=\"chosenComponentOptions[sel.dependsOn[0]] == sel.dependsOn[1]\">\n                                {{sel.name}} :\n                                <select required class=\"form-control\" [(ngModel)]=\"chosenComponentOptions[sel.name]\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"opt[0]\" *ngFor=\"let opt of sel.options\">{{opt[1]}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"chosenComponent.text != undefined\">\n                    <div class=\"mt-2\" *ngFor=\"let str of chosenComponent.text\">\n                        {{str.name}} :\n                        <textarea class=\"form-control d-block\" [(ngModel)]=\"chosenComponentOptions[str.name]\"\n                            [ngModelOptions]=\"{standalone: true}\" cols=\"30\" rows=\"5\"></textarea>\n                    </div>\n                </div>\n                <div *ngIf=\"chosenComponent.richtext != undefined\">\n                        <div class=\"mt-2\" *ngFor=\"let str of chosenComponent.richtext\">\n                            {{str.name}} :\n                            <quill-editor [(ngModel)]=\"chosenComponentOptions[str.name]\"\n                                [ngModelOptions]=\"{standalone: true}\" [style]=\"{height: '200px'}\" ></quill-editor>\n                        </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n<div *ngIf=\"!loaded\">\n    <!-- in the middle or somethin -->\n    <meedias-spinner></meedias-spinner>\n</div>\n\n<!-- <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"dateOfBirth\">Date of birth</label>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template> -->\n"

/***/ }),

/***/ "./src/app/core/components/page/page.view.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/components/page/page.view.service.ts ***!
  \***********************************************************/
/*! exports provided: PageViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewService", function() { return PageViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cookies/cookies.service */ "./src/app/core/services/cookies/cookies.service.ts");
/* harmony import */ var src_app_common_components_grid_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/grid-components/text/text.component */ "./src/app/common/components/grid-components/text/text.component.ts");
/* harmony import */ var src_app_common_components_grid_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/grid-components/image/image.component */ "./src/app/common/components/grid-components/image/image.component.ts");
/* harmony import */ var src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var src_app_common_components_grid_components_articlePreview_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/components/grid-components/articlePreview/article.component */ "./src/app/common/components/grid-components/articlePreview/article.component.ts");
/* harmony import */ var src_app_common_components_grid_components_article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/components/grid-components/article/article.component */ "./src/app/common/components/grid-components/article/article.component.ts");
/* harmony import */ var src_app_common_components_grid_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/components/grid-components/ad/ad.component */ "./src/app/common/components/grid-components/ad/ad.component.ts");
/* harmony import */ var src_app_common_components_grid_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/components/grid-components/menu/menu.component */ "./src/app/common/components/grid-components/menu/menu.component.ts");
/* harmony import */ var src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/modules/categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var src_app_common_components_grid_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/components/grid-components/categories/categories.component */ "./src/app/common/components/grid-components/categories/categories.component.ts");
/* harmony import */ var src_app_common_components_grid_components_archive_archive_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/components/grid-components/archive/archive.component */ "./src/app/common/components/grid-components/archive/archive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PageViewService = /** @class */ (function () {
    function PageViewService(http, envService, articleService, categoryService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.articleService = articleService;
        this.categoryService = categoryService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    /**
     * paying homage to the terrible naming on the backend :]
     */
    PageViewService.prototype.getPageGrid = function (pageUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/page/layouts/' + pageUrl).subscribe(resolve, reject);
        });
    };
    PageViewService.prototype.getGridInfo = function (pageUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/grid/' + pageUrl).subscribe(resolve, reject);
        });
    };
    PageViewService.prototype.createPageGrid = function (pageData, pageId) {
        var _this = this;
        // loop through it here so interuptions can be handled on this service
        var authinfo = this.authentication._authinfo.get();
        var data = {
            "auth_info": authinfo,
            "page": pageData
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/page/' + pageId, data).subscribe(resolve, reject);
        });
    };
    PageViewService.prototype.savePageGrid = function (pageUrl, pageData) {
        var _this = this;
        // loop through it here so interuptions can be handled on this service
        var authinfo = this.authentication._authinfo.get();
        var data = {
            "auth_info": authinfo,
            "page": pageData
        };
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/page/' + pageData.id, data).subscribe(resolve, reject);
        });
    };
    PageViewService.prototype.deletePageGrid = function (pageId) {
        var _this = this;
        // loop through it here so interuptions can be handled on this service
        var authinfo = this.authentication._authinfo.get();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: authinfo
        };
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/delete_page/' + pageId, authinfo).subscribe(resolve, reject);
        });
    };
    PageViewService.getStringToComponentDefinitions = function (component) {
        // move to service layer
        switch (component) {
            case 'gridTextComponent':
                return src_app_common_components_grid_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__["gridTextComponent"];
            case 'gridImageComponent':
                return src_app_common_components_grid_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__["gridImageComponent"];
            case 'gridArticlePreviewComponent':
                return src_app_common_components_grid_components_articlePreview_article_component__WEBPACK_IMPORTED_MODULE_7__["gridArticlePreviewComponent"];
            case 'gridArticleComponent':
                return src_app_common_components_grid_components_article_article_component__WEBPACK_IMPORTED_MODULE_8__["gridArticleComponent"];
            case 'gridAdComponent':
                return src_app_common_components_grid_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_9__["gridAdComponent"];
            case 'gridMenuComponent':
                return src_app_common_components_grid_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["gridMenuComponent"];
            case 'gridCategoriesComponent':
                return src_app_common_components_grid_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["gridCategoriesComponent"];
            case 'gridArchiveComponent':
                return src_app_common_components_grid_components_archive_archive_component__WEBPACK_IMPORTED_MODULE_13__["gridArchiveComponent"];
            default:
                break;
        }
    };
    PageViewService.prototype.getArticlesForGrid = function () {
        var _this = this;
        var articles = [];
        this.articleService.getArticles().then(function (data) {
            data.forEach(function (element) {
                _this.articleService.getArticle(element).then(function (article) {
                    articles.push([article.id, article.name]);
                });
            });
        });
        return articles;
    };
    PageViewService.prototype.getCategoriesForGrid = function () {
        var _this = this;
        //opravdu by bylo lehčí kdyby se vracelo rovnou pole s jmenem kategorii
        var categories = [];
        this.categoryService.getCategories().then(function (data) {
            data.forEach(function (element) {
                _this.categoryService.getCategory(element).then(function (category) {
                    categories.push([category.info.id, category.info.name]);
                });
            });
        });
        console.log(categories);
        return categories;
    };
    //uhh keep here for now... its kinda messy
    PageViewService.prototype.getComponentDefinitions = function () {
        return [
            {
                name: "gridAdComponent",
                title: "reklama",
                page_type: "",
            },
            {
                name: "gridArticleListingComponent",
                title: "seznam clanku podle",
                select: [
                    {
                        name: "podle",
                        options: [
                            ["category", "kategorie"],
                            ["order", "pořadí"]
                        ]
                    },
                    {
                        name: "order",
                        dependsOn: ["podle", "order"],
                        options: [
                            ['asc', 'nejnovější'],
                            ['dec', 'nejstarší']
                        ]
                    },
                    {
                        name: "category",
                        dependsOn: ["podle", "category"],
                        options: this.getCategoriesForGrid()
                    },
                ]
            },
            // {
            //     //MA UZ BYT DEFAULTNE NA STRANCE
            //     name:"gridArticleComponent",
            //     title:"článek",
            //     page_types:["article"],
            // },
            {
                name: "gridArticlePreviewComponent",
                title: "odkaz na článek",
                select: [
                    {
                        name: "podle",
                        options: [
                            ["exact", "konkrétní"],
                            ["order", "pořadí"],
                        ]
                    },
                    {
                        name: "exact",
                        dependsOn: ["podle", "exact"],
                        options: this.getArticlesForGrid()
                    },
                    {
                        name: "order",
                        dependsOn: ["podle", "order"],
                        options: [
                            ["desc", "nejnovější"]
                        ]
                    },
                ],
                options: [
                    "nejnovější",
                    "konkrétní",
                    "pořadí"
                    // .... idk some other
                ],
                page_types: ["index", "categories"],
            },
            {
                name: "gridImageComponent",
                title: "obrázek/logo",
                page_type: [],
                text: [
                    { name: 'imageUrl' },
                    { name: 'imageLink' }
                ]
            },
            {
                name: "gridTextComponent",
                title: "text",
                page_type: [],
                text: [
                    { name: 'class' }
                ],
                richtext: [
                    { name: 'text' }
                ]
            },
            {
                name: "gridMenuComponent",
                page_type: [],
                title: "menu",
                select: [
                    {
                        name: "show",
                        //add title to definitions
                        options: [
                            ["categories", "kategorie"],
                            ["pages", "stránky"],
                        ]
                    }
                ],
            },
            {
                name: "gridCategoriesComponent",
                title: "kategorie",
            },
            {
                name: "gridArchiveComponent",
                title: "archiv"
            }
        ];
    };
    PageViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"],
            src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PageViewService);
    return PageViewService;
}());



/***/ }),

/***/ "./src/app/core/modules/landing/landing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/modules/landing/landing.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Schwada
 * @since 9.1.2018
 *
 * The actual component/template that all the
 * landing pages ( unauthenticated users ) use
 */
var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        router.navigate(['/index']);
    }
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./landing.template.html */ "./src/app/core/modules/landing/landing.template.html"),
            styles: [__webpack_require__(/*! ./landing.styles.scss */ "./src/app/core/modules/landing/landing.styles.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/core/modules/landing/landing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/modules/landing/landing.module.ts ***!
  \********************************************************/
/*! exports provided: landing_routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landing_routes", function() { return landing_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/core/modules/landing/landing.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_dynamic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-dynamic-component */ "./node_modules/ng-dynamic-component/bundles/ng-dynamic-component.es5.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./src/app/core/modules/routes.ts");
/* harmony import */ var src_app_common_components_grid_components_text_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/components/grid-components/text/text.component */ "./src/app/common/components/grid-components/text/text.component.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/page/page.component */ "./src/app/core/components/page/page.component.ts");
/* harmony import */ var _components_page_page_view_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/page/page.view.service */ "./src/app/core/components/page/page.view.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var src_app_common_components_grid_components_image_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/components/grid-components/image/image.component */ "./src/app/common/components/grid-components/image/image.component.ts");
/* harmony import */ var src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var src_app_common_components_grid_components_articlePreview_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/common/components/grid-components/articlePreview/article.component */ "./src/app/common/components/grid-components/articlePreview/article.component.ts");
/* harmony import */ var src_app_common_components_grid_components_article_article_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/common/components/grid-components/article/article.component */ "./src/app/common/components/grid-components/article/article.component.ts");
/* harmony import */ var src_app_common_components_grid_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/common/components/grid-components/menu/menu.component */ "./src/app/common/components/grid-components/menu/menu.component.ts");
/* harmony import */ var src_app_common_components_grid_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/common/components/grid-components/ad/ad.component */ "./src/app/common/components/grid-components/ad/ad.component.ts");
/* harmony import */ var src_app_common_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/common/modules/pages/pages.service */ "./src/app/common/modules/pages/pages.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/common/modules/categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var src_app_common_components_grid_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/common/components/grid-components/categories/categories.component */ "./src/app/common/components/grid-components/categories/categories.component.ts");
/* harmony import */ var src_app_common_components_grid_components_archive_archive_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/common/components/grid-components/archive/archive.component */ "./src/app/common/components/grid-components/archive/archive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Third party*/

/* Internal */





















/**
 * @author Schwada
 * @since 9.1.2018
 *
 * This is a wrapper/template for landing pages e.g. login,unreachable,etc..
 * and should only be accessed by unauthenicated users.
 * It also collects all the landing page routes
 *
 */
var landing_routes = [
    {
        path: '',
        children: _routes__WEBPACK_IMPORTED_MODULE_8__["core_routes"].slice()
    },
    {
        path: 'page/:pageid',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]
    },
    {
        path: 'index',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]
    },
    {
        path: 'article/:articleId',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]
    }
];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"],
                src_app_common_components_grid_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_19__["gridAdComponent"],
                src_app_common_components_grid_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["gridMenuComponent"],
                src_app_common_components_grid_components_text_text_component__WEBPACK_IMPORTED_MODULE_9__["gridTextComponent"],
                src_app_common_components_grid_components_image_image_component__WEBPACK_IMPORTED_MODULE_14__["gridImageComponent"],
                src_app_common_components_grid_components_article_article_component__WEBPACK_IMPORTED_MODULE_17__["gridArticleComponent"],
                src_app_common_components_grid_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_23__["gridCategoriesComponent"],
                src_app_common_components_grid_components_articlePreview_article_component__WEBPACK_IMPORTED_MODULE_16__["gridArticlePreviewComponent"],
                src_app_common_components_grid_components_archive_archive_component__WEBPACK_IMPORTED_MODULE_24__["gridArchiveComponent"]
            ],
            imports: [
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_3__["GridsterModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedMoudle"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                ng_dynamic_component__WEBPACK_IMPORTED_MODULE_7__["DynamicModule"].withComponents([
                    src_app_common_components_grid_components_text_text_component__WEBPACK_IMPORTED_MODULE_9__["gridTextComponent"],
                    src_app_common_components_grid_components_image_image_component__WEBPACK_IMPORTED_MODULE_14__["gridImageComponent"],
                    src_app_common_components_grid_components_articlePreview_article_component__WEBPACK_IMPORTED_MODULE_16__["gridArticlePreviewComponent"],
                    src_app_common_components_grid_components_article_article_component__WEBPACK_IMPORTED_MODULE_17__["gridArticleComponent"],
                    src_app_common_components_grid_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["gridMenuComponent"],
                    src_app_common_components_grid_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_19__["gridAdComponent"],
                    src_app_common_components_grid_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_23__["gridCategoriesComponent"],
                    src_app_common_components_grid_components_archive_archive_component__WEBPACK_IMPORTED_MODULE_24__["gridArchiveComponent"]
                ]),
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(landing_routes)
            ],
            providers: [
                [{ provide: src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_22__["CategoriesService"], useClass: src_app_common_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_22__["CategoriesService"] }],
                [{ provide: _components_page_page_view_service__WEBPACK_IMPORTED_MODULE_11__["PageViewService"], useClass: _components_page_page_view_service__WEBPACK_IMPORTED_MODULE_11__["PageViewService"] }],
                [{ provide: src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_15__["ArticlesService"], useClass: src_app_common_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_15__["ArticlesService"] }],
                [{ provide: src_app_common_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_20__["PagesService"], useClass: src_app_common_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_20__["PagesService"] }]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/core/modules/landing/landing.styles.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/modules/landing/landing.styles.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbW9kdWxlcy9sYW5kaW5nL2xhbmRpbmcuc3R5bGVzLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/modules/landing/landing.template.html":
/*!************************************************************!*\
  !*** ./src/app/core/modules/landing/landing.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "unauthenticated (landing page)\n\n<router-outlet></router-outlet> \n"

/***/ }),

/***/ "./src/app/core/modules/routes.ts":
/*!****************************************!*\
  !*** ./src/app/core/modules/routes.ts ***!
  \****************************************/
/*! exports provided: core_routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core_routes", function() { return core_routes; });
/* harmony import */ var _login_login_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.routing */ "./src/app/core/modules/login/login.routing.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/core/modules/landing/landing.component.ts");


/**
 * This file contains all the core routes
 */
var core_routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]
    }
].concat(_login_login_routing__WEBPACK_IMPORTED_MODULE_0__["login_routes"]);


/***/ })

}]);
//# sourceMappingURL=src-app-core-modules-landing-landing-module.js.map