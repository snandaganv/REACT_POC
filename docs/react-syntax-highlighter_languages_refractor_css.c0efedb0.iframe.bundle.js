"use strict";(self.webpackChunkag_design_system=self.webpackChunkag_design_system||[]).push([[5008],{"./node_modules/react-code-blocks/node_modules/refractor/lang/css.js":function(module){function css(Prism){!function(Prism){var string=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+string.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+string.source+")*?(?=\\s*\\{)"),string:{pattern:string,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css;var markup=Prism.languages.markup;markup&&(markup.tag.addInlined("style","css"),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},markup.tag))}(Prism)}module.exports=css,css.displayName="css",css.aliases=[]}}]);