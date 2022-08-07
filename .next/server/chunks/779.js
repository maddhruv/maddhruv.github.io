"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 5870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Tags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Tags = ({ tags  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "\uD83C\uDFF7",
        children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    index > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: ", "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: tag,
                        children: tag
                    }, tag)
                ]
            }, tag))
    });
};


/***/ }),

/***/ 9941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getPages),
/* harmony export */   "u": () => (/* binding */ getPageData)
/* harmony export */ });
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_1__]);
notion_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({
    auth: process.env.NOTION_TOKEN
});
const notionAPI = new notion_client__WEBPACK_IMPORTED_MODULE_1__.NotionAPI();
const getPageProperty = async (page_id, { property_id , property_name  })=>{
    const property = await notion.pages.properties.retrieve({
        page_id,
        property_id
    });
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getPropertyValue */ .SX)(property_name, property);
};
const getPage = async (page_id, properties)=>{
    const page = await Promise.all(properties.map((property)=>getPageProperty(page_id, property)));
    return {
        id: page_id,
        ...page.reduce((acc, prop)=>{
            return {
                ...acc,
                ...prop
            };
        })
    };
};
const getPages = async ()=>{
    const database = await notion.databases.query({
        database_id: process.env.DATABASE_ID
    });
    // @ts-ignore
    const properties = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .vw)(database.results[0].properties);
    const pages = await Promise.all(database.results.map(({ id  })=>getPage(id, properties)));
    return pages;
};
const getPageData = async (title)=>{
    const pageSearch = await notion.search({
        query: title
    });
    const pageData = pageSearch.results[0];
    const page_id = pageData.id;
    const recordMap = await notionAPI.getPage(page_id);
    // @ts-ignore
    const properties = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .vw)(pageData.properties);
    const page = await getPage(page_id, properties);
    return {
        recordMap,
        ...page
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SX": () => (/* binding */ getPropertyValue),
/* harmony export */   "pz": () => (/* binding */ getPageTitle),
/* harmony export */   "vw": () => (/* binding */ getProperties)
/* harmony export */ });
const getPageTitle = (title)=>title.split(" ").join("-");
const getProperties = (properties)=>Object.entries(properties).map((property)=>{
        // @ts-ignore
        const [name, { id  }] = property;
        return {
            property_name: name,
            property_id: id
        };
    });
const getPropertyValue = (name, response)=>{
    if (name === "title") {
        return {
            title: response.results[0].title.plain_text
        };
    }
    if (name === "description") {
        return {
            description: response.results[0].rich_text.plain_text
        };
    }
    if (name === "date") {
        return {
            date: response.date.start
        };
    }
    if (name === "published") {
        return {
            published: response.checkbox
        };
    }
    if (name === "tags") {
        return {
            tags: response.multi_select.map(({ name  })=>name)
        };
    }
};


/***/ })

};
;