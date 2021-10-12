"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[303],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),m=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(o,".").concat(k)]||u[k]||d[k]||n;return a?i.createElement(c,l(l({ref:t},s),{},{components:a})):i.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<n;m++)l[m]=a[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3327:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),l=["components"],p={sidebar_position:5},o="mapillary.models.api package",m={unversionedId:"sdk/mapillary.models.api",id:"sdk/mapillary.models.api",isDocsHomePage:!1,title:"mapillary.models.api package",description:"## Submodules",source:"@site/docs/sdk/mapillary.models.api.md",sourceDirName:"sdk",slug:"/sdk/mapillary.models.api",permalink:"/docs/sdk/mapillary.models.api",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/mapillary.models.api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"mapillary package",permalink:"/docs/sdk/mapillary"},next:{title:"mapillary.models package",permalink:"/docs/sdk/mapillary.models"}},s=[{value:"Submodules",id:"submodules",children:[]},{value:"mapillary.models.api.entities module",id:"mapillarymodelsapientities-module",children:[{value:"mapillary.models.api.entities",id:"mapillarymodelsapientities",children:[]}]}],d={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mapillarymodelsapi-package"},"mapillary.models.api package"),(0,n.kt)("h2",{id:"submodules"},"Submodules"),(0,n.kt)("h2",{id:"mapillarymodelsapientities-module"},"mapillary.models.api.entities module"),(0,n.kt)("h3",{id:"mapillarymodelsapientities"},"mapillary.models.api.entities"),(0,n.kt)("p",null," This module contains the Adapter design for the Entities API of Mapillary API v4."),(0,n.kt)("p",null," For more information, please check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapillary.com/developer/api-documentation/"},"https://www.mapillary.com/developer/api-documentation/"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copyright: (c) 2021 Facebook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"License: MIT LICENSE"),(0,n.kt)("h3",{parentName:"li",id:"class-mapillarymodelsapientitiesentityadapter"},"class mapillary.models.api.entities.EntityAdapter()"),(0,n.kt)("p",{parentName:"li"},"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",{parentName:"li"},"Adapter model for dealing with the Entity API, through the DRY principle. The EntityAdapter\nclass can be instantiated in the controller modules, providing an abstraction layer that uses\nthe Client class, endpoints provided by the API v4 under /config/api/entities.py."),(0,n.kt)("p",{parentName:"li"},"It performs parsing, handling of layers, properties, and fields to make it easier to\nwrite higher level logic for extracing information, and lets developers to focus only\non writing the high level business logic without having to repeat the process of parsing\nand using libraries such as mercantile, ast, and others to only then care about the\ninputs and the outputs"),(0,n.kt)("p",{parentName:"li"},"Usage:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},">>> import mapillary\n>>> from mapillary.models.api.entities import EntityAdapter\n>>> EntityAdapter().fetch_image(image_id='IMAGE_ID', fields=[\n...     'altitude', 'atomic_scale', 'geometry', 'width'\n... ])\n>>> EntityAdapter().fetch_map_feature(map_feature_id='MAP_FEATURE_ID', fields=[\n...         'first_seen_at', 'last_seen_at', 'geometry'\n...     ])\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_detectionsidentity-int-id_type-bool--true-fields-optionallist--none"},"fetch_detections(identity: int, id_type: bool = True, fields: Optional","[list]"," = None)"),(0,n.kt)("p",{parentName:"li"},"Fetches detections depending on the id, detections for either map_features or\nimages and the fields provided")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"identity")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The id to extract for")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id_type")," (",(0,n.kt)("em",{parentName:"li"},"bool"),") \u2013 Either True(id is for image), or False(id is for map_feature),\ndefaults to True")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fields")," (",(0,n.kt)("em",{parentName:"li"},"list"),") \u2013 The fields to extract properties for, defaults to []"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  The fetched GeoJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_imageimage_id-unionint-str-fields-optionallist--none"},"fetch_image(image_id: Union","[int, str]",", fields: Optional","[list]"," = None)"),(0,n.kt)("p",{parentName:"li"},"Fetches images depending on the image_id and the fields provided")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"image_id")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The image_id to extract for")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fields")," (",(0,n.kt)("em",{parentName:"li"},"list"),") \u2013 The fields to extract properties for, defaults to []"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  The fetched GeoJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_map_featuremap_feature_id-unionint-str-fields-optionallist--none"},"fetch_map_feature(map_feature_id: Union","[int, str]",", fields: Optional","[list]"," = None)"),(0,n.kt)("p",{parentName:"li"},"Fetches map features depending on the map_feature_id and the fields provided")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"map_feature_id")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The map_feature_id to extract for")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fields")," (",(0,n.kt)("em",{parentName:"li"},"list"),") \u2013 The fields to extract properties for, defaults to []"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  The fetched GeoJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"is_image_ididentity-int-fields-optionallist--none"},"is_image_id(identity: int, fields: Optional","[list]"," = None)"),(0,n.kt)("p",{parentName:"li"},"Determines whether the given id is an image_id or a map_feature_id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"identity")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The ID given to test")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fields")," (",(0,n.kt)("em",{parentName:"li"},"list"),") \u2013 The fields to extract properties for, defaults to []"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  True if id is image, else False")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"bool\n")),(0,n.kt)("h2",{parentName:"li",id:"mapillarymodelsapivector_tiles-module"},"mapillary.models.api.vector_tiles module"),(0,n.kt)("h3",{parentName:"li",id:"mapillarymodelsapivector_tiles"},"mapillary.models.api.vector_tiles"),(0,n.kt)("p",{parentName:"li"},"This module contains the adapter design for the Vector Tiles API of Mapillary API v4, Vector tiles\nprovide an easy way to visualize vast amounts of data. Vector tiles support filtering and querying\nrendered features. Mapillary vector tiles follow the Mapbox tile specification."),(0,n.kt)("p",{parentName:"li"},"For more information, please check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapillary.com/developer/api-documentation/"},"https://www.mapillary.com/developer/api-documentation/"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copyright: (c) 2021 Facebook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"License: MIT LICENSE"),(0,n.kt)("h3",{parentName:"li",id:"class-mapillarymodelsapivector_tilesvectortilesadapter"},"class mapillary.models.api.vector_tiles.VectorTilesAdapter()"),(0,n.kt)("p",{parentName:"li"},"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",{parentName:"li"},"Adapter model for dealing with the VectorTiles API, through the DRY principle. The\nVectorTilesAdapter class can be instantiated in the controller modules, providing an\nabstraction layer that uses the Client class, endpoints provided by the API v4 under\n/config/api/vector_tiles.py."),(0,n.kt)("p",{parentName:"li"},"It performs parsing, handling of layers, properties, and fields to make it easier to\nwrite higher level logic for extracing information, and lets developers to focus only\non writing the high level business logic without having to repeat the process of parsing\nand using libraries such as mercantile, \u2018vt2geojson\u2019 and others, caring only about\ninputs/outputs"),(0,n.kt)("p",{parentName:"li"},"Usage:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'>>> import mapillary\n>>> from mapillary.models.api.vector_tiles import VectorTilesAdapter\n>>> latitude, longitude = 30, 31\n>>> VectorTilesAdapter().fetch_layer(layer="image", zoom=14, longitude=longitude,\n...     latitude=latitude,\n... )\n>>> VectorTilesAdapter().fetch_layer(layer="sequence", zoom=10, longitude=longitude,\n...     latitude=latitude,\n... )\n>>> VectorTilesAdapter().fetch_layer(layer="overview", zoom=3, longitude=longitude,\n...     latitude=latitude,\n... )\n')),(0,n.kt)("h4",{parentName:"li",id:"fetch_computed_layerlayer-str-zoom-int-longitude-float-latitude-float"},"fetch_computed_layer(layer: str, zoom: int, longitude: float, latitude: float)"),(0,n.kt)("p",{parentName:"li"},"Same as fetch_layer, but gets in return computed tiles only.\nDepends on the layer, zoom level, longitude and the latitude specifications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"layer")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u2018overview\u2019, \u2018sequence\u2019, \u2018image\u2019")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"zoom")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom level, ","[0, 14]",", inclusive")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"longitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The longitude of the coordinates")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"latitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The latitude of the coordinates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_featuresfeature_type-str-zoom-int-longitude-float-latitude-float"},"fetch_features(feature_type: str, zoom: int, longitude: float, latitude: float)"),(0,n.kt)("p",{parentName:"li"},"Fetches specified features from the coordinates with the appropriate zoom level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feature_type")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either point, or tiles")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"zoom")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom level")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"longitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The longitude of the coordinates")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"latitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The latitude of the coordinates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_layerlayer-str-longitude-float-latitude-float-zoom-int--14"},"fetch_layer(layer: str, longitude: float, latitude: float, zoom: int = 14)"),(0,n.kt)("p",{parentName:"li"},"Fetches an image tile layer depending on the coordinates, and the layer selected\nalong with the zoom level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"layer")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u2018overview\u2019, \u2018sequence\u2019, \u2018image\u2019")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"longitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The longitude of the coordinates")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"latitude")," (",(0,n.kt)("em",{parentName:"li"},"float"),") \u2013 The latitude of the coordinates")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"zoom")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom level, ","[0, 14]",", inclusive"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_layerscoordinates-listlist-layer-str--image-zoom-int--14-is_computed-bool--false"},"fetch_layers(coordinates: list","[list]",", layer: str = 'image', zoom: int = 14, is_computed: bool = False)"),(0,n.kt)("p",{parentName:"li"},"Fetches multiple vector tiles based on a list of multiple coordinates in a listed format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"coordinates")," (",(0,n.kt)("em",{parentName:"li"},'"list',(0,n.kt)("strong",{parentName:"em"},"["),"list",(0,n.kt)("strong",{parentName:"em"},"]"),'"'),") \u2013 A list of lists of coordinates to get the vector tiles for")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"layer")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u201coverview\u201d, \u201csequence\u201d, \u201cimage\u201d, \u201ctraffic_sign\u201d, or \u201cmap_feature\u201d,\ndefaults to \u201cimage\u201d")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"zoom")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 the zoom level ","[0, 14]",", inclusive. Defaults to 14")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"is_computed")," (",(0,n.kt)("em",{parentName:"li"},"bool"),") \u2013 Will to be fetched layers be computed? Defaults to False"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A geojson with merged features from all unique vector tiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h4",{parentName:"li",id:"fetch_map_featurescoordinates-listlist-feature_type-str-zoom-int--14"},"fetch_map_features(coordinates: list","[list]",", feature_type: str, zoom: int = 14)"),(0,n.kt)("p",{parentName:"li"},"Fetches map features based on a list Polygon object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"coordinates")," (",(0,n.kt)("em",{parentName:"li"},'"list',(0,n.kt)("strong",{parentName:"em"},"["),"list",(0,n.kt)("strong",{parentName:"em"},"]"),'"'),") \u2013 A list of lists of coordinates to get the map features for")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feature_type")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u201cpoint\u201d, \u201ctraffic_signs\u201d, defaults to \u201cpoint\u201d")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"zoom")," (",(0,n.kt)("em",{parentName:"li"},"int"),") \u2013 the zoom level ","[0, 14]",", inclusive. Defaults to 14"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A geojson with merged features from all unique vector tiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"dict\n")),(0,n.kt)("h2",{parentName:"li",id:"module-contents"},"Module contents"),(0,n.kt)("h3",{parentName:"li",id:"mapillarymodelsapiinit"},"mapillary.models.api.",(0,n.kt)("strong",{parentName:"h3"},"init")),(0,n.kt)("p",{parentName:"li"},"This package contains the class adaptors of the API logic within the Mapillary Python SDK.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copyright: (c) 2021 Facebook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"License: MIT LICENSE"))))}u.isMDXComponent=!0}}]);