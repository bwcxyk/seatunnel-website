"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4453],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,i(i({ref:n},o),{},{components:t})):a.createElement(k,i({ref:n},o))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94413:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return o},toc:function(){return c},default:function(){return d}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],p={sidebar_position:4},s=void 0,u={unversionedId:"seatunnel-engine/deployment",id:"seatunnel-engine/deployment",title:"deployment",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/deployment",permalink:"/zh-CN/docs/seatunnel-engine/deployment",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"about",permalink:"/zh-CN/docs/seatunnel-engine/about"},next:{title:"local-mode",permalink:"/zh-CN/docs/seatunnel-engine/local-mode"}},o={},c=[{value:"1. \u4e0b\u8f7d",id:"1-\u4e0b\u8f7d",level:2},{value:"2 \u914d\u7f6e SEATUNNEL_HOME",id:"2-\u914d\u7f6e-seatunnel_home",level:2},{value:"3. \u914d\u7f6e SeaTunnel Engine JVM \u9009\u9879",id:"3-\u914d\u7f6e-seatunnel-engine-jvm-\u9009\u9879",level:2},{value:"4. \u914d\u7f6e SeaTunnel Engine",id:"4-\u914d\u7f6e-seatunnel-engine",level:2},{value:"4.1 \u5907\u4efd\u8ba1\u6570",id:"41-\u5907\u4efd\u8ba1\u6570",level:3},{value:"4.2 \u63d2\u69fd\u670d\u52a1",id:"42-\u63d2\u69fd\u670d\u52a1",level:3},{value:"4.3 \u68c0\u67e5\u70b9\u7ba1\u7406\u5668",id:"43-\u68c0\u67e5\u70b9\u7ba1\u7406\u5668",level:3},{value:"4.4 \u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e",id:"44-\u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e",level:3},{value:"4.5 \u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f",id:"45-\u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"5. \u914d\u7f6e SeaTunnel Engine \u670d\u52a1",id:"5-\u914d\u7f6e-seatunnel-engine-\u670d\u52a1",level:2},{value:"5.1 \u96c6\u7fa4\u540d\u79f0",id:"51-\u96c6\u7fa4\u540d\u79f0",level:3},{value:"5.2 \u7f51\u7edc",id:"52-\u7f51\u7edc",level:3},{value:"TCP",id:"tcp",level:4},{value:"5.3 \u6620\u5c04",id:"53-\u6620\u5c04",level:3},{value:"6. \u914d\u7f6e SeaTunnel Engine \u5ba2\u6237\u7aef",id:"6-\u914d\u7f6e-seatunnel-engine-\u5ba2\u6237\u7aef",level:2},{value:"6.1 cluster-name",id:"61-cluster-name",level:3},{value:"6.2 \u7f51\u7edc",id:"62-\u7f51\u7edc",level:3},{value:"7. \u542f\u52a8 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9",id:"7-\u542f\u52a8-seatunnel-engine-\u670d\u52a1\u5668\u8282\u70b9",level:2},{value:"8. \u5b89\u88c5 SeaTunnel Engine \u5ba2\u6237\u7aef",id:"8-\u5b89\u88c5-seatunnel-engine-\u5ba2\u6237\u7aef",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u90e8\u7f72-seatunnel-engine"},"\u90e8\u7f72 SeaTunnel Engine"),(0,r.kt)("h2",{id:"1-\u4e0b\u8f7d"},"1. \u4e0b\u8f7d"),(0,r.kt)("p",null,"SeaTunnel Engine \u662f SeaTunnel \u7684\u9ed8\u8ba4\u5f15\u64ce\u3002SeaTunnel \u7684\u5b89\u88c5\u5305\u5df2\u7ecf\u5305\u542b\u4e86 SeaTunnel Engine \u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"2-\u914d\u7f6e-seatunnel_home"},"2 \u914d\u7f6e SEATUNNEL_HOME"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," \u6587\u4ef6\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," \u3002",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," \u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export SEATUNNEL_HOME=${seatunnel install path}\nexport PATH=$PATH:$SEATUNNEL_HOME/bin\n")),(0,r.kt)("h2",{id:"3-\u914d\u7f6e-seatunnel-engine-jvm-\u9009\u9879"},"3. \u914d\u7f6e SeaTunnel Engine JVM \u9009\u9879"),(0,r.kt)("p",null,"SeaTunnel Engine \u652f\u6301\u4e24\u79cd\u8bbe\u7f6e JVM \u9009\u9879\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 JVM \u9009\u9879\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/bin/seatunnel-cluster.sh"),"."),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/bin/seatunnel-cluster.sh")," \u6587\u4ef6\uff0c\u5e76\u5728\u7b2c\u4e00\u884c\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'JAVA_OPTS="-Xms2G -Xmx2G"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u542f\u52a8 SeaTunnel Engine \u65f6\u6dfb\u52a0 JVM \u9009\u9879\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'seatunnel-cluster.sh -DJvmOption="-Xms2G -Xmx2G"')))),(0,r.kt)("h2",{id:"4-\u914d\u7f6e-seatunnel-engine"},"4. \u914d\u7f6e SeaTunnel Engine"),(0,r.kt)("p",null,"SeaTunnel Engine \u63d0\u4f9b\u8bb8\u591a\u529f\u80fd\uff0c\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"seatunnel.yaml")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002."),(0,r.kt)("h3",{id:"41-\u5907\u4efd\u8ba1\u6570"},"4.1 \u5907\u4efd\u8ba1\u6570"),(0,r.kt)("p",null,"SeaTunnel Engine \u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/"},"Hazelcast IMDG")," \u5b9e\u73b0\u96c6\u7fa4\u7ba1\u7406\u3002\u96c6\u7fa4\u7684\u72b6\u6001\u6570\u636e\uff08\u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\u3001\u8d44\u6e90\u72b6\u6001\uff09\u5b58\u50a8\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/data-structures/map"},"Hazelcast IMap"),"\u3002\n\u5b58\u50a8\u5728 Hazelcast IMap \u4e2d\u7684\u6570\u636e\u5c06\u5728\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u5206\u5e03\u548c\u5b58\u50a8\u3002Hazelcast \u4f1a\u5206\u533a\u5b58\u50a8\u5728 Imap \u4e2d\u7684\u6570\u636e\u3002\u6bcf\u4e2a\u5206\u533a\u53ef\u4ee5\u6307\u5b9a\u5907\u4efd\u6570\u91cf\u3002\n\u56e0\u6b64\uff0cSeaTunnel Engine \u53ef\u4ee5\u5b9e\u73b0\u96c6\u7fa4 HA\uff0c\u65e0\u9700\u4f7f\u7528\u5176\u4ed6\u670d\u52a1\uff08\u4f8b\u5982 zookeeper\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"backup count")," \u662f\u5b9a\u4e49\u540c\u6b65\u5907\u4efd\u6570\u91cf\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u5206\u533a\u7684\u5907\u4efd\u5c06\u653e\u7f6e\u5728\u4e00\u4e2a\u5176\u4ed6\u6210\u5458\u4e0a\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a 2\uff0c\u5219\u5c06\u653e\u7f6e\u5728\u4e24\u4e2a\u5176\u4ed6\u6210\u5458\u4e0a\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae ",(0,r.kt)("inlineCode",{parentName:"p"},"backup-count")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"min(1, max(5, N/2))"),"\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," \u662f\u96c6\u7fa4\u8282\u70b9\u7684\u6570\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        # \u5176\u4ed6\u914d\u7f6e\n")),(0,r.kt)("h3",{id:"42-\u63d2\u69fd\u670d\u52a1"},"4.2 \u63d2\u69fd\u670d\u52a1"),(0,r.kt)("p",null,"\u63d2\u69fd\u6570\u91cf\u51b3\u5b9a\u4e86\u96c6\u7fa4\u8282\u70b9\u53ef\u4ee5\u5e76\u884c\u8fd0\u884c\u7684\u4efb\u52a1\u7ec4\u6570\u91cf\u3002SeaTunnel Engine \u662f\u4e00\u4e2a\u6570\u636e\u540c\u6b65\u5f15\u64ce\uff0c\u5927\u591a\u6570\u4f5c\u4e1a\u90fd\u662f IO \u5bc6\u96c6\u578b\u7684\u3002\n\u5efa\u8bae\u4f7f\u7528\u52a8\u6001\u63d2\u69fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: true\n        # \u5176\u4ed6\u914d\u7f6e\n")),(0,r.kt)("h3",{id:"43-\u68c0\u67e5\u70b9\u7ba1\u7406\u5668"},"4.3 \u68c0\u67e5\u70b9\u7ba1\u7406\u5668"),(0,r.kt)("p",null,"\u4e0e Flink \u4e00\u6837\uff0cSeaTunnel Engine \u652f\u6301 Chandy\u2013Lamport \u7b97\u6cd5\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u5b9e\u73b0\u65e0\u6570\u636e\u4e22\u5931\u548c\u91cd\u590d\u7684\u6570\u636e\u540c\u6b65\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"interval")),(0,r.kt)("p",null,"\u4e24\u4e2a\u68c0\u67e5\u70b9\u4e4b\u95f4\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002\u5982\u679c\u5728\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," \u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," \u53c2\u6570\uff0c\u5219\u6b64\u5904\u8bbe\u7f6e\u7684\u503c\u5c06\u8986\u76d6\u5b83\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timeout")),(0,r.kt)("p",null,"\u68c0\u67e5\u70b9\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5982\u679c\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u65e0\u6cd5\u5b8c\u6210\u68c0\u67e5\u70b9\uff0c\u5219\u4f1a\u89e6\u53d1\u68c0\u67e5\u70b9\u5931\u8d25\u3002\u56e0\u6b64\uff0c\u4f5c\u4e1a\u5c06\u88ab\u6062\u590d\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        print-execution-info-interval: 10\n        slot-service:\n            dynamic-slot: true\n        checkpoint:\n            interval: 300000\n            timeout: 10000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"checkpoint storage")),(0,r.kt)("p",null,"\u6709\u5173\u68c0\u67e5\u70b9\u5b58\u50a8\u7684\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/checkpoint-storage"},"checkpoint storage")),(0,r.kt)("h3",{id:"44-\u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e"},"4.4 \u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5b8c\u6210\u7684\u4f5c\u4e1a\u7684\u4fe1\u606f\uff0c\u5982\u72b6\u6001\u3001\u8ba1\u6570\u5668\u548c\u9519\u8bef\u65e5\u5fd7\uff0c\u90fd\u5b58\u50a8\u5728 IMap \u5bf9\u8c61\u4e2d\u3002\u968f\u7740\u8fd0\u884c\u4f5c\u4e1a\u6570\u91cf\u7684\u589e\u52a0\uff0c\u5185\u5b58\u4f1a\u589e\u52a0\uff0c\u6700\u7ec8\u5185\u5b58\u5c06\u6ea2\u51fa\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u8c03\u6574 ",(0,r.kt)("inlineCode",{parentName:"p"},"history-job-expire-minutes")," \u53c2\u6570\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u6b64\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\u662f\u5206\u949f\u3002\u9ed8\u8ba4\u503c\u662f 1440 \u5206\u949f\uff0c\u5373\u4e00\u5929\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    history-job-expire-minutes: 1440\n")),(0,r.kt)("h3",{id:"45-\u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f"},"4.5 \u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6b64\u914d\u7f6e\u4e3b\u8981\u89e3\u51b3\u4e0d\u65ad\u521b\u5efa\u548c\u5c1d\u8bd5\u9500\u6bc1\u7c7b\u52a0\u8f7d\u5668\u6240\u5bfc\u81f4\u7684\u8d44\u6e90\u6cc4\u6f0f\u95ee\u9898\u3002\n\u5982\u679c\u60a8\u9047\u5230\u4e0e\u5143\u7a7a\u95f4\u6ea2\u51fa\u76f8\u5173\u7684\u5f02\u5e38\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u542f\u7528\u6b64\u914d\u7f6e\u3002\n\u4e3a\u4e86\u51cf\u5c11\u521b\u5efa\u7c7b\u52a0\u8f7d\u5668\u7684\u9891\u7387\uff0c\u5728\u542f\u7528\u6b64\u914d\u7f6e\u540e\uff0cSeaTunnel \u5728\u4f5c\u4e1a\u5b8c\u6210\u65f6\u4e0d\u4f1a\u5c1d\u8bd5\u91ca\u653e\u76f8\u5e94\u7684\u7c7b\u52a0\u8f7d\u5668\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u88ab\u540e\u7eed\u4f5c\u4e1a\u4f7f\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u8fd0\u884c\u4f5c\u4e1a\u4e2d\u4f7f\u7528\u7684 Source/Sink \u8fde\u63a5\u5668\u7c7b\u578b\u4e0d\u662f\u592a\u591a\u65f6\uff0c\u5b83\u66f4\u6709\u6548\u3002\n\u9ed8\u8ba4\u503c\u662f false\u3002\n\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    classloader-cache-mode: true\n")),(0,r.kt)("h2",{id:"5-\u914d\u7f6e-seatunnel-engine-\u670d\u52a1"},"5. \u914d\u7f6e SeaTunnel Engine \u670d\u52a1"),(0,r.kt)("p",null,"\u6240\u6709 SeaTunnel Engine \u670d\u52a1\u914d\u7f6e\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"hazelcast.yaml")," \u6587\u4ef6\u4e2d."),(0,r.kt)("h3",{id:"51-\u96c6\u7fa4\u540d\u79f0"},"5.1 \u96c6\u7fa4\u540d\u79f0"),(0,r.kt)("p",null,"SeaTunnel Engine \u8282\u70b9\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-name")," \u6765\u786e\u5b9a\u53e6\u4e00\u4e2a\u8282\u70b9\u662f\u5426\u4e0e\u81ea\u5df1\u5728\u540c\u4e00\u96c6\u7fa4\u4e2d\u3002\u5982\u679c\u4e24\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u96c6\u7fa4\u540d\u79f0\u4e0d\u540c\uff0cSeaTunnel \u5f15\u64ce\u5c06\u62d2\u7edd\u670d\u52a1\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"52-\u7f51\u7edc"},"5.2 \u7f51\u7edc"),(0,r.kt)("p",null,"\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/discovery-mechanisms"},"Hazelcast"),", \u4e00\u4e2a SeaTunnel Engine \u96c6\u7fa4\u662f\u7531\u8fd0\u884c SeaTunnel Engine \u670d\u52a1\u5668\u7684\u96c6\u7fa4\u6210\u5458\u7ec4\u6210\u7684\u7f51\u7edc\u3002 \u96c6\u7fa4\u6210\u5458\u81ea\u52a8\u52a0\u5165\u4e00\u8d77\u5f62\u6210\u96c6\u7fa4\u3002\u8fd9\u79cd\u81ea\u52a8\u52a0\u5165\u662f\u901a\u8fc7\u96c6\u7fa4\u6210\u5458\u4f7f\u7528\u7684\u5404\u79cd\u53d1\u73b0\u673a\u5236\u6765\u76f8\u4e92\u53d1\u73b0\u7684\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u96c6\u7fa4\u5f62\u6210\u540e\uff0c\u96c6\u7fa4\u6210\u5458\u4e4b\u95f4\u7684\u901a\u4fe1\u59cb\u7ec8\u901a\u8fc7 TCP/IP \u8fdb\u884c\uff0c\u65e0\u8bba\u4f7f\u7528\u7684\u53d1\u73b0\u673a\u5236\u5982\u4f55\u3002"),(0,r.kt)("p",null,"SeaTunnel Engine \u4f7f\u7528\u4ee5\u4e0b\u53d1\u73b0\u673a\u5236\u3002"),(0,r.kt)("h4",{id:"tcp"},"TCP"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 SeaTunnel Engine \u914d\u7f6e\u4e3a\u5b8c\u6574\u7684 TCP/IP \u96c6\u7fa4\u3002\u6709\u5173\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/tcp"},"Discovering Members by TCP section"),"\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"hazelcast.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  cluster-name: seatunnel\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - hostname1\n    port:\n      auto-increment: false\n      port: 5801\n  properties:\n    hazelcast.logging.type: log4j2\n")),(0,r.kt)("p",null,"TCP \u662f\u6211\u4eec\u5efa\u8bae\u5728\u72ec\u7acb SeaTunnel Engine \u96c6\u7fa4\u4e2d\u4f7f\u7528\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cHazelcast \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5176\u4ed6\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u6cd5\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/setting-up-clusters"},"hazelcast network")),(0,r.kt)("h3",{id:"53-\u6620\u5c04"},"5.3 \u6620\u5c04"),(0,r.kt)("p",null,"\u4ec5\u5728\u6620\u5c04\u4e0a\u914d\u7f6e\u65f6\uff0cMapStores \u624d\u4f1a\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002\u672c\u4e3b\u9898\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528 MapStore \u914d\u7f6e\u6620\u5c04\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"hazelcast map")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type")),(0,r.kt)("p",null,"imap \u6301\u4e45\u5316\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"namespace")),(0,r.kt)("p",null,"\u5b83\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\uff0c\u5982 OSS \u5b58\u50a8\u6876\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clusterName")),(0,r.kt)("p",null,"\u6b64\u53c2\u6570\u4e3b\u8981\u7528\u4e8e\u96c6\u7fa4\u9694\u79bb\uff0c \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u533a\u5206\u4e0d\u540c\u7684\u96c6\u7fa4\uff0c\u5982 cluster1\u3001cluster2\uff0c\u8fd9\u4e5f\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u4e1a\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fs.defaultFS")),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 hdfs api \u8bfb\u5199\u6587\u4ef6\uff0c\u56e0\u6b64\u4f7f\u7528\u6b64\u5b58\u50a8\u9700\u8981\u63d0\u4f9b hdfs \u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 HDFS\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: hdfs://localhost:9000\n")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709 HDFS\uff0c\u5e76\u4e14\u60a8\u7684\u96c6\u7fa4\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\u4f7f\u7528\u672c\u5730\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: file:///\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 OSS\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: oss\n           block.size: block size(bytes)\n           oss.bucket: oss://bucket name/\n           fs.oss.accessKeyId: OSS access key id\n           fs.oss.accessKeySecret: OSS access key secret\n           fs.oss.endpoint: OSS endpoint\n           fs.oss.credentials.provider: org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\n")),(0,r.kt)("h2",{id:"6-\u914d\u7f6e-seatunnel-engine-\u5ba2\u6237\u7aef"},"6. \u914d\u7f6e SeaTunnel Engine \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u6240\u6709 SeaTunnel Engine \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"hazelcast-client.yaml")," \u91cc\u3002"),(0,r.kt)("h3",{id:"61-cluster-name"},"6.1 cluster-name"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u5fc5\u987b\u4e0e SeaTunnel Engine \u5177\u6709\u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-name"),"\u3002\u5426\u5219\uff0cSeaTunnel Engine \u5c06\u62d2\u7edd\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"62-\u7f51\u7edc"},"6.2 \u7f51\u7edc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cluster-members")),(0,r.kt)("p",null,"\u9700\u8981\u5c06\u6240\u6709 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9\u7684\u5730\u5740\u6dfb\u52a0\u5230\u8fd9\u91cc\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hazelcast-client:\n  cluster-name: seatunnel\n  properties:\n      hazelcast.logging.type: log4j2\n  network:\n    cluster-members:\n      - hostname1:5801\n")),(0,r.kt)("h2",{id:"7-\u542f\u52a8-seatunnel-engine-\u670d\u52a1\u5668\u8282\u70b9"},"7. \u542f\u52a8 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5b88\u62a4\u8fdb\u7a0b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," \u53c2\u6570\u542f\u52a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $SEATUNNEL_HOME/logs\n./bin/seatunnel-cluster.sh -d\n")),(0,r.kt)("p",null,"\u65e5\u5fd7\u5c06\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/logs/seatunnel-engine-server.log")),(0,r.kt)("h2",{id:"8-\u5b89\u88c5-seatunnel-engine-\u5ba2\u6237\u7aef"},"8. \u5b89\u88c5 SeaTunnel Engine \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u60a8\u53ea\u9700\u5c06 SeaTunnel Engine \u8282\u70b9\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME")," \u76ee\u5f55\u590d\u5236\u5230\u5ba2\u6237\u7aef\u8282\u70b9\uff0c\u5e76\u50cf SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9\u4e00\u6837\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME"),"\u3002"))}d.isMDXComponent=!0}}]);