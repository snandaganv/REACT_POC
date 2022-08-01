(self.webpackChunkag_design_system=self.webpackChunkag_design_system||[]).push([[5082,131,5008,7279,2496],{"./node_modules/react-code-blocks/node_modules/hastscript/factory.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var find=__webpack_require__("./node_modules/property-information/find.js"),normalize=__webpack_require__("./node_modules/property-information/normalize.js"),parseSelector=__webpack_require__("./node_modules/hast-util-parse-selector/index.js"),spaces=__webpack_require__("./node_modules/space-separated-tokens/index.js").Q,commas=__webpack_require__("./node_modules/comma-separated-tokens/index.js").Q;module.exports=function factory(schema,defaultTagName,caseSensitive){var adjust=caseSensitive?function createAdjustMap(values){var value,length=values.length,index=-1,result={};for(;++index<length;)result[(value=values[index]).toLowerCase()]=value;return result}(caseSensitive):null;return function h(selector,properties){var property,node=parseSelector(selector,defaultTagName),children=Array.prototype.slice.call(arguments,2),name=node.tagName.toLowerCase();node.tagName=adjust&&own.call(adjust,name)?adjust[name]:name,properties&&isChildren(properties,node)&&(children.unshift(properties),properties=null);if(properties)for(property in properties)addProperty(node.properties,property,properties[property]);addChild(node.children,children),"template"===node.tagName&&(node.content={type:"root",children:node.children},node.children=[]);return node};function addProperty(properties,key,value){var info,property,result;null!=value&&value==value&&(property=(info=find(schema,key)).property,"string"==typeof(result=value)&&(info.spaceSeparated?result=spaces(result):info.commaSeparated?result=commas(result):info.commaOrSpaceSeparated&&(result=spaces(commas(result).join(" ")))),"style"===property&&"string"!=typeof value&&(result=function style(value){var key,result=[];for(key in value)result.push([key,value[key]].join(": "));return result.join("; ")}(result)),"className"===property&&properties.className&&(result=properties.className.concat(result)),properties[property]=function parsePrimitives(info,name,value){var index,length,result;if("object"!=typeof value||!("length"in value))return parsePrimitive(info,name,value);length=value.length,index=-1,result=[];for(;++index<length;)result[index]=parsePrimitive(info,name,value[index]);return result}(info,property,result))}};var own={}.hasOwnProperty;function isChildren(value,node){return"string"==typeof value||"length"in value||function isNode(tagName,value){var type=value.type;if("input"===tagName||!type||"string"!=typeof type)return!1;if("object"==typeof value.children&&"length"in value.children)return!0;if(type=type.toLowerCase(),"button"===tagName)return"menu"!==type&&"submit"!==type&&"reset"!==type&&"button"!==type;return"value"in value}(node.tagName,value)}function addChild(nodes,value){var index,length;if("string"!=typeof value&&"number"!=typeof value)if("object"==typeof value&&"length"in value)for(index=-1,length=value.length;++index<length;)addChild(nodes,value[index]);else{if("object"!=typeof value||!("type"in value))throw new Error("Expected node, nodes, or string, got `"+value+"`");nodes.push(value)}else nodes.push({type:"text",value:String(value)})}function parsePrimitive(info,name,value){var result=value;return info.number||info.positiveNumber?isNaN(result)||""===result||(result=Number(result)):(info.boolean||info.overloadedBoolean)&&("string"!=typeof result||""!==result&&normalize(value)!==normalize(name)||(result=!0)),result}},"./node_modules/react-code-blocks/node_modules/hastscript/html.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var schema=__webpack_require__("./node_modules/property-information/html.js"),html=__webpack_require__("./node_modules/react-code-blocks/node_modules/hastscript/factory.js")(schema,"div");html.displayName="html",module.exports=html},"./node_modules/react-code-blocks/node_modules/hastscript/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react-code-blocks/node_modules/hastscript/html.js")},"./node_modules/react-code-blocks/node_modules/parse-entities/decode-entity.browser.js":function(module){"use strict";var el;module.exports=function decodeEntity(characters){var char,entity="&"+characters+";";if((el=el||document.createElement("i")).innerHTML=entity,59===(char=el.textContent).charCodeAt(char.length-1)&&"semi"!==characters)return!1;return char!==entity&&char}},"./node_modules/react-code-blocks/node_modules/parse-entities/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var legacy=__webpack_require__("./node_modules/character-entities-legacy/index.json"),invalid=__webpack_require__("./node_modules/character-reference-invalid/index.json"),decimal=__webpack_require__("./node_modules/is-decimal/index.js"),hexadecimal=__webpack_require__("./node_modules/is-hexadecimal/index.js"),alphanumerical=__webpack_require__("./node_modules/is-alphanumerical/index.js"),decodeEntity=__webpack_require__("./node_modules/react-code-blocks/node_modules/parse-entities/decode-entity.browser.js");module.exports=function parseEntities(value,options){var option,key,settings={};options||(options={});for(key in defaults)option=options[key],settings[key]=null==option?defaults[key]:option;(settings.position.indent||settings.position.start)&&(settings.indent=settings.position.indent||[],settings.position=settings.position.start);return function parse(value,settings){var entityCharacters,namedEntity,terminated,characters,character,reference,following,warning,reason,output,entity,begin,start,type,test,prev,next,diff,end,additional=settings.additional,nonTerminated=settings.nonTerminated,handleText=settings.text,handleReference=settings.reference,handleWarning=settings.warning,textContext=settings.textContext,referenceContext=settings.referenceContext,warningContext=settings.warningContext,pos=settings.position,indent=settings.indent||[],length=value.length,index=0,lines=-1,column=pos.column||1,line=pos.line||1,queue="",result=[];"string"==typeof additional&&(additional=additional.charCodeAt(0));prev=now(),warning=handleWarning?parseError:noop,index--,length++;for(;++index<length;)if(10===character&&(column=indent[lines]||1),38===(character=value.charCodeAt(index))){if(9===(following=value.charCodeAt(index+1))||10===following||12===following||32===following||38===following||60===following||following!=following||additional&&following===additional){queue+=fromCharCode(character),column++;continue}for(begin=start=index+1,end=start,35===following?(end=++begin,88===(following=value.charCodeAt(end))||120===following?(type=hexa,end=++begin):type=deci):type=name,entityCharacters="",entity="",characters="",test=tests[type],end--;++end<length&&test(following=value.charCodeAt(end));)characters+=fromCharCode(following),type===name&&own.call(legacy,characters)&&(entityCharacters=characters,entity=legacy[characters]);(terminated=59===value.charCodeAt(end))&&(end++,(namedEntity=type===name&&decodeEntity(characters))&&(entityCharacters=characters,entity=namedEntity)),diff=1+end-start,(terminated||nonTerminated)&&(characters?type===name?(terminated&&!entity?warning(5,1):(entityCharacters!==characters&&(diff=1+(end=begin+entityCharacters.length)-begin,terminated=!1),terminated||(reason=entityCharacters?1:3,settings.attribute?61===(following=value.charCodeAt(end))?(warning(reason,diff),entity=null):alphanumerical(following)?entity=null:warning(reason,diff):warning(reason,diff))),reference=entity):(terminated||warning(2,diff),prohibited(reference=parseInt(characters,bases[type]))?(warning(7,diff),reference=fromCharCode(65533)):reference in invalid?(warning(6,diff),reference=invalid[reference]):(output="",disallowed(reference)&&warning(6,diff),reference>65535&&(output+=fromCharCode((reference-=65536)>>>10|55296),reference=56320|1023&reference),reference=output+fromCharCode(reference))):type!==name&&warning(4,diff)),reference?(flush(),prev=now(),index=end-1,column+=end-start+1,result.push(reference),(next=now()).offset++,handleReference&&handleReference.call(referenceContext,reference,{start:prev,end:next},value.slice(start-1,end)),prev=next):(characters=value.slice(start-1,end),queue+=characters,column+=characters.length,index=end-1)}else 10===character&&(line++,lines++,column=0),character==character?(queue+=fromCharCode(character),column++):flush();return result.join("");function now(){return{line:line,column:column,offset:index+(pos.offset||0)}}function parseError(code,offset){var position=now();position.column+=offset,position.offset+=offset,handleWarning.call(warningContext,messages[code],position,code)}function flush(){queue&&(result.push(queue),handleText&&handleText.call(textContext,queue,{start:prev,end:now()}),queue="")}}(value,settings)};var own={}.hasOwnProperty,fromCharCode=String.fromCharCode,noop=Function.prototype,defaults={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},name="named",hexa="hexadecimal",deci="decimal",bases={hexadecimal:16,decimal:10},tests={};tests.named=alphanumerical,tests[deci]=decimal,tests[hexa]=hexadecimal;var messages={};function prohibited(code){return code>=55296&&code<=57343||code>1114111}function disallowed(code){return code>=1&&code<=8||11===code||code>=13&&code<=31||code>=127&&code<=159||code>=64976&&code<=65007||65535==(65535&code)||65534==(65535&code)}messages[1]="Named character references must be terminated by a semicolon",messages[2]="Numeric character references must be terminated by a semicolon",messages[3]="Named character references cannot be empty",messages[4]="Numeric character references cannot be empty",messages[5]="Named character references must be known",messages[6]="Numeric character references cannot be disallowed",messages[7]="Numeric character references cannot be outside the permissible Unicode range"},"./node_modules/react-code-blocks/node_modules/prismjs/components/prism-core.js":function(module,__unused_webpack_exports,__webpack_require__){var Prism=function(_self){var lang=/\blang(?:uage)?-([\w-]+)\b/i,uniqueId=0,_={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(tokens){return tokens instanceof Token?new Token(tokens.type,_.util.encode(tokens.content),tokens.alias):Array.isArray(tokens)?tokens.map(_.util.encode):tokens.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(obj){return obj.__id||Object.defineProperty(obj,"__id",{value:++uniqueId}),obj.__id},clone:function deepClone(o,visited){var clone,id,type=_.util.type(o);switch(visited=visited||{},type){case"Object":if(id=_.util.objId(o),visited[id])return visited[id];for(var key in clone={},visited[id]=clone,o)o.hasOwnProperty(key)&&(clone[key]=deepClone(o[key],visited));return clone;case"Array":return id=_.util.objId(o),visited[id]?visited[id]:(clone=[],visited[id]=clone,o.forEach((function(v,i){clone[i]=deepClone(v,visited)})),clone);default:return o}}},languages:{extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef)lang[key]=redef[key];return lang},insertBefore:function(inside,before,insert,root){var grammar=(root=root||_.languages)[inside],ret={};for(var token in grammar)if(grammar.hasOwnProperty(token)){if(token==before)for(var newToken in insert)insert.hasOwnProperty(newToken)&&(ret[newToken]=insert[newToken]);insert.hasOwnProperty(token)||(ret[token]=grammar[token])}var old=root[inside];return root[inside]=ret,_.languages.DFS(_.languages,(function(key,value){value===old&&key!=inside&&(this[key]=ret)})),ret},DFS:function DFS(o,callback,type,visited){visited=visited||{};var objId=_.util.objId;for(var i in o)if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);var property=o[i],propertyType=_.util.type(property);"Object"!==propertyType||visited[objId(property)]?"Array"!==propertyType||visited[objId(property)]||(visited[objId(property)]=!0,DFS(property,callback,i,visited)):(visited[objId(property)]=!0,DFS(property,callback,null,visited))}}},plugins:{},highlightAll:function(async,callback){_.highlightAllUnder(document,async,callback)},highlightAllUnder:function(container,async,callback){var env={callback:callback,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",env);for(var element,elements=container.querySelectorAll(env.selector),i=0;element=elements[i++];)_.highlightElement(element,!0===async,env.callback)},highlightElement:function(element,async,callback){for(var grammar,language="none",parent=element;parent&&!lang.test(parent.className);)parent=parent.parentNode;parent&&(language=(parent.className.match(lang)||[,"none"])[1].toLowerCase(),grammar=_.languages[language]),element.className=element.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language,element.parentNode&&(parent=element.parentNode,/pre/i.test(parent.nodeName)&&(parent.className=parent.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language));var env={element:element,language:language,grammar:grammar,code:element.textContent},insertHighlightedCode=function(highlightedCode){env.highlightedCode=highlightedCode,_.hooks.run("before-insert",env),env.element.innerHTML=env.highlightedCode,_.hooks.run("after-highlight",env),_.hooks.run("complete",env),callback&&callback.call(env.element)};if(_.hooks.run("before-sanity-check",env),env.code)if(_.hooks.run("before-highlight",env),env.grammar)if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){insertHighlightedCode(evt.data)},worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:!0}))}else insertHighlightedCode(_.highlight(env.code,env.grammar,env.language));else insertHighlightedCode(_.util.encode(env.code));else _.hooks.run("complete",env)},highlight:function(text,grammar,language){var env={code:text,grammar:grammar,language:language};return _.hooks.run("before-tokenize",env),env.tokens=_.tokenize(env.code,env.grammar),_.hooks.run("after-tokenize",env),Token.stringify(_.util.encode(env.tokens),env.language)},matchGrammar:function(text,strarr,grammar,index,startPos,oneshot,target){for(var token in grammar)if(grammar.hasOwnProperty(token)&&grammar[token]){if(token==target)return;var patterns=grammar[token];patterns="Array"===_.util.type(patterns)?patterns:[patterns];for(var j=0;j<patterns.length;++j){var pattern=patterns[j],inside=pattern.inside,lookbehind=!!pattern.lookbehind,greedy=!!pattern.greedy,lookbehindLength=0,alias=pattern.alias;if(greedy&&!pattern.pattern.global){var flags=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,flags+"g")}pattern=pattern.pattern||pattern;for(var i=index,pos=startPos;i<strarr.length;pos+=strarr[i].length,++i){var str=strarr[i];if(strarr.length>text.length)return;if(!(str instanceof Token)){if(greedy&&i!=strarr.length-1){if(pattern.lastIndex=pos,!(match=pattern.exec(text)))break;for(var from=match.index+(lookbehind?match[1].length:0),to=match.index+match[0].length,k=i,p=pos,len=strarr.length;k<len&&(p<to||!strarr[k].type&&!strarr[k-1].greedy);++k)from>=(p+=strarr[k].length)&&(++i,pos=p);if(strarr[i]instanceof Token)continue;delNum=k-i,str=text.slice(pos,p),match.index-=pos}else{pattern.lastIndex=0;var match=pattern.exec(str),delNum=1}if(match){lookbehind&&(lookbehindLength=match[1]?match[1].length:0);to=(from=match.index+lookbehindLength)+(match=match[0].slice(lookbehindLength)).length;var before=str.slice(0,from),after=str.slice(to),args=[i,delNum];before&&(++i,pos+=before.length,args.push(before));var wrapped=new Token(token,inside?_.tokenize(match,inside):match,alias,match,greedy);if(args.push(wrapped),after&&args.push(after),Array.prototype.splice.apply(strarr,args),1!=delNum&&_.matchGrammar(text,strarr,grammar,i,pos,!0,token),oneshot)break}else if(oneshot)break}}}}},tokenize:function(text,grammar){var strarr=[text],rest=grammar.rest;if(rest){for(var token in rest)grammar[token]=rest[token];delete grammar.rest}return _.matchGrammar(text,strarr,grammar,0,0,!1),strarr},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[],hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(callbacks&&callbacks.length)for(var callback,i=0;callback=callbacks[i++];)callback(env)}},Token:Token};function Token(type,content,alias,matchedStr,greedy){this.type=type,this.content=content,this.alias=alias,this.length=0|(matchedStr||"").length,this.greedy=!!greedy}if(_self.Prism=_,Token.stringify=function(o,language){if("string"==typeof o)return o;if(Array.isArray(o))return o.map((function(element){return Token.stringify(element,language)})).join("");var env={type:o.type,content:Token.stringify(o.content,language),tag:"span",classes:["token",o.type],attributes:{},language:language};if(o.alias){var aliases=Array.isArray(o.alias)?o.alias:[o.alias];Array.prototype.push.apply(env.classes,aliases)}_.hooks.run("wrap",env);var attributes=Object.keys(env.attributes).map((function(name){return name+'="'+(env.attributes[name]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+env.tag+' class="'+env.classes.join(" ")+'"'+(attributes?" "+attributes:"")+">"+env.content+"</"+env.tag+">"},!_self.document)return _self.addEventListener?(_.disableWorkerMessageHandler||_self.addEventListener("message",(function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang)),immediateClose&&_self.close()}),!1),_):_;var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return script&&(_.filename=script.src,_.manual||script.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(_.highlightAll):window.setTimeout(_.highlightAll,16):document.addEventListener("DOMContentLoaded",_.highlightAll))),_}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});module.exports&&(module.exports=Prism),void 0!==__webpack_require__.g&&(__webpack_require__.g.Prism=Prism)},"./node_modules/react-code-blocks/node_modules/refractor/core.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var restore=function capture(){var defined="Prism"in __webpack_require__.g,current=defined?__webpack_require__.g.Prism:void 0;return function restore(){defined?__webpack_require__.g.Prism=current:delete __webpack_require__.g.Prism;defined=void 0,current=void 0}}();("undefined"==typeof window?"undefined"==typeof self?{}:self:window).Prism={manual:!0,disableWorkerMessageHandler:!0};var h=__webpack_require__("./node_modules/react-code-blocks/node_modules/hastscript/index.js"),decode=__webpack_require__("./node_modules/react-code-blocks/node_modules/parse-entities/index.js"),Prism=__webpack_require__("./node_modules/react-code-blocks/node_modules/prismjs/components/prism-core.js"),markup=__webpack_require__("./node_modules/react-code-blocks/node_modules/refractor/lang/markup.js"),css=__webpack_require__("./node_modules/react-code-blocks/node_modules/refractor/lang/css.js"),clike=__webpack_require__("./node_modules/react-code-blocks/node_modules/refractor/lang/clike.js"),js=__webpack_require__("./node_modules/react-code-blocks/node_modules/refractor/lang/javascript.js");restore();var own={}.hasOwnProperty;function Refractor(){}Refractor.prototype=Prism;var refract=new Refractor;function register(grammar){if("function"!=typeof grammar||!grammar.displayName)throw new Error("Expected `function` for `grammar`, got `"+grammar+"`");void 0===refract.languages[grammar.displayName]&&grammar(refract)}module.exports=refract,refract.highlight=function highlight(value,name){var grammar,sup=Prism.highlight;if("string"!=typeof value)throw new Error("Expected `string` for `value`, got `"+value+"`");if("Object"===refract.util.type(name))grammar=name,name=null;else{if("string"!=typeof name)throw new Error("Expected `string` for `name`, got `"+name+"`");if(!own.call(refract.languages,name))throw new Error("Unknown language: `"+name+"` is not registered");grammar=refract.languages[name]}return sup.call(this,value,grammar,name)},refract.register=register,refract.alias=function alias(name,alias){var key,list,length,index,languages=refract.languages,map=name;alias&&((map={})[name]=alias);for(key in map)for(list=map[key],length=(list="string"==typeof list?[list]:list).length,index=-1;++index<length;)languages[list[index]]=languages[key]},refract.registered=function registered(language){if("string"!=typeof language)throw new Error("Expected `string` for `language`, got `"+language+"`");return own.call(refract.languages,language)},refract.listLanguages=function listLanguages(){var language,languages=refract.languages,list=[];for(language in languages)own.call(languages,language)&&"object"==typeof languages[language]&&list.push(language);return list},register(markup),register(css),register(clike),register(js),refract.util.encode=function encode(tokens){return tokens},refract.Token.stringify=function stringify(value,language,parent){var env;if("string"==typeof value)return{type:"text",value:value};if("Array"===refract.util.type(value))return function stringifyAll(values,language){var value,result=[],length=values.length,index=-1;for(;++index<length;)""!==(value=values[index])&&null!=value&&result.push(value);index=-1,length=result.length;for(;++index<length;)value=result[index],result[index]=refract.Token.stringify(value,language,result);return result}(value,language);env={type:value.type,content:refract.Token.stringify(value.content,language,parent),tag:"span",classes:["token",value.type],attributes:{},language:language,parent:parent},value.alias&&(env.classes=env.classes.concat(value.alias));return refract.hooks.run("wrap",env),h(env.tag+"."+env.classes.join("."),function attributes(attrs){var key;for(key in attrs)attrs[key]=decode(attrs[key]);return attrs}(env.attributes),env.content)}},"./node_modules/react-code-blocks/node_modules/refractor/lang/clike.js":function(module){"use strict";function clike(Prism){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/}}module.exports=clike,clike.displayName="clike",clike.aliases=[]},"./node_modules/react-code-blocks/node_modules/refractor/lang/css.js":function(module){"use strict";function css(Prism){!function(Prism){var string=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+string.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+string.source+")*?(?=\\s*\\{)"),string:{pattern:string,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css;var markup=Prism.languages.markup;markup&&(markup.tag.addInlined("style","css"),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},markup.tag))}(Prism)}module.exports=css,css.displayName="css",css.aliases=[]},"./node_modules/react-code-blocks/node_modules/refractor/lang/javascript.js":function(module){"use strict";function javascript(Prism){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript}module.exports=javascript,javascript.displayName="javascript",javascript.aliases=["js"]},"./node_modules/react-code-blocks/node_modules/refractor/lang/markup.js":function(module){"use strict";function markup(Prism){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",(function(env){"entity"===env.type&&(env.attributes.title=env.content.value.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function addInlined(tagName,lang){var includedCdataInside={};includedCdataInside["language-"+lang]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[lang]},includedCdataInside.cdata=/^<!\[CDATA\[|\]\]>$/i;var inside={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:includedCdataInside}};inside["language-"+lang]={pattern:/[\s\S]+/,inside:Prism.languages[lang]};var def={};def[tagName]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,tagName),"i"),lookbehind:!0,greedy:!0,inside:inside},Prism.languages.insertBefore("markup","cdata",def)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup}module.exports=markup,markup.displayName="markup",markup.aliases=["xml","html","mathml","svg"]}}]);