"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5169],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],u={},s="\u57fa\u672c\u4f7f\u7528\u6307\u5357",i={unversionedId:"user-manuals/basic-usage",id:"user-manuals/basic-usage",title:"\u57fa\u672c\u4f7f\u7528\u6307\u5357",description:"\u672c\u6587\u6863\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u4f7f Kruise Rollout \u751f\u6548\u4ee5\u53ca\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u53d1\u5e03\uff0c\u5e76\u56de\u7b54\u4e00\u4e9b\u5173\u4e8e\u7528\u6cd5\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-rollouts/current/user-manuals/basic-usage.md",sourceDirName:"user-manuals",slug:"/user-manuals/basic-usage",permalink:"/zh/rollouts/user-manuals/basic-usage",draft:!1,tags:[],version:"current",lastUpdatedBy:"Bob",lastUpdatedAt:1698374629,formattedLastUpdatedAt:"2023/10/27",frontMatter:{},sidebar:"rollouts",previous:{title:"API \u89c4\u8303",permalink:"/zh/rollouts/user-manuals/api-specifications"},next:{title:"\u91d1\u4e1d\u96c0\u53d1\u5e03",permalink:"/zh/rollouts/user-manuals/strategy-canary-update"}},p={},c=[{value:"\u5b8c\u6574\u7684\u53d1\u5e03\u6d41\u7a0b",id:"\u5b8c\u6574\u7684\u53d1\u5e03\u6d41\u7a0b",level:2},{value:"\u6b65\u9aa4 0\uff1a\u8981\u6c42",id:"\u6b65\u9aa4-0\u8981\u6c42",level:3},{value:"\u6b65\u9aa4 1\uff1a\u51c6\u5907\u5e76\u5e94\u7528 Rollout \u914d\u7f6e",id:"\u6b65\u9aa4-1\u51c6\u5907\u5e76\u5e94\u7528-rollout-\u914d\u7f6e",level:3},{value:"\u6b65\u9aa4 2\uff1a\u5c06\u90e8\u7f72\u5347\u7ea7\u5230 &quot;version-2&quot; \u5e76\u53d1\u5e03\u7b2c\u4e00\u6279\u6b21",id:"\u6b65\u9aa4-2\u5c06\u90e8\u7f72\u5347\u7ea7\u5230-version-2-\u5e76\u53d1\u5e03\u7b2c\u4e00\u6279\u6b21",level:3},{value:"\u6b65\u9aa4 3\uff1a\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e8c\u6279\u6b21",id:"\u6b65\u9aa4-3\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e8c\u6279\u6b21",level:3},{value:"\u6b65\u9aa4 4\uff1a\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e09\u6279\u6b21",id:"\u6b65\u9aa4-4\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e09\u6279\u6b21",level:3},{value:"\u5982\u4f55\u624b\u52a8\u7ee7\u7eed\u4e0b\u4e00\u6b65\uff1f",id:"\u5982\u4f55\u624b\u52a8\u7ee7\u7eed\u4e0b\u4e00\u6b65",level:2},{value:"\u5982\u4f55\u77e5\u9053\u5f53\u524d\u6b65\u9aa4\u662f\u5426\u5df2\u51c6\u5907\u5c31\u7eea\uff1f",id:"\u5982\u4f55\u77e5\u9053\u5f53\u524d\u6b65\u9aa4\u662f\u5426\u5df2\u51c6\u5907\u5c31\u7eea",level:2},{value:"\u5982\u4f55\u56de\u6eda",id:"\u5982\u4f55\u56de\u6eda",level:2},{value:"\u5176\u4ed6\u58f0\u660e",id:"\u5176\u4ed6\u58f0\u660e",level:2}],m={toc:c};function d(e){var t=e.components,u=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u672c\u4f7f\u7528\u6307\u5357"},"\u57fa\u672c\u4f7f\u7528\u6307\u5357"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u4f7f Kruise Rollout \u751f\u6548\u4ee5\u53ca\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u53d1\u5e03\uff0c\u5e76\u56de\u7b54\u4e00\u4e9b\u5173\u4e8e\u7528\u6cd5\u7684\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u5b8c\u6574\u7684\u53d1\u5e03\u6d41\u7a0b"},"\u5b8c\u6574\u7684\u53d1\u5e03\u6d41\u7a0b"),(0,l.kt)("h3",{id:"\u6b65\u9aa4-0\u8981\u6c42"},"\u6b65\u9aa4 0\uff1a\u8981\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh/rollouts/installation"},"\u5b89\u88c5")," Kruise Rollouts\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u60a8\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u5df2\u7ecf\u6709\u4e00\u4e2a\u90e8\u7f72\uff08Deployment\uff09\uff0c\u5982\u4e0b\u6240\u793a\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: workload-demo\n  namespace: default\nspec:\n  replicas: 10\n  selector:\n    matchLabels:\n      app: demo\n  template:\n    metadata:\n      labels:\n        app: demo\n    spec:\n      containers:\n        - name: busybox\n          image: busybox:latest\n          command: [ "/bin/sh", "-c", "sleep 100d" ]\n          env:\n            - name: VERSION\n              value: "version-1"\n')),(0,l.kt)("h3",{id:"\u6b65\u9aa4-1\u51c6\u5907\u5e76\u5e94\u7528-rollout-\u914d\u7f6e"},"\u6b65\u9aa4 1\uff1a\u51c6\u5907\u5e76\u5e94\u7528 Rollout \u914d\u7f6e"),(0,l.kt)("p",null,'\u5047\u8bbe\u60a8\u60f3\u8981\u4f7f\u7528\u591a\u6279\u6b21\u66f4\u65b0\u7b56\u7565\u5c06\u90e8\u7f72\u4ece "version-1" \u5347\u7ea7\u5230 "version-2"\uff1a'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u6279\u6b21\uff1a\u53ea\u5347\u7ea7 ",(0,l.kt)("strong",{parentName:"li"},"1\u4e2aPod"),"\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e8c\u6279\u6b21\uff1a\u5347\u7ea7 ",(0,l.kt)("strong",{parentName:"li"},"50%")," \u7684 Pods\uff0c\u5373 ",(0,l.kt)("strong",{parentName:"li"},"5\u4e2a\u5df2\u66f4\u65b0\u7684Pod"),"\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e09\u6279\u6b21\uff1a\u5347\u7ea7 ",(0,l.kt)("strong",{parentName:"li"},"100%")," \u7684 Pods\uff0c\u5373 ",(0,l.kt)("strong",{parentName:"li"},"10\u4e2a\u5df2\u66f4\u65b0\u7684Pod"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f - <<EOF\napiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  namespace: default\n  annotations:\n    rollouts.kruise.io/rolling-style: partition\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: workload-demo\n  strategy:\n    canary:\n      steps:\n      - replicas: 1\n      - replicas: 50%\n      - replicas: 100%\nEOF\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-2\u5c06\u90e8\u7f72\u5347\u7ea7\u5230-version-2-\u5e76\u53d1\u5e03\u7b2c\u4e00\u6279\u6b21"},'\u6b65\u9aa4 2\uff1a\u5c06\u90e8\u7f72\u5347\u7ea7\u5230 "version-2" \u5e76\u53d1\u5e03\u7b2c\u4e00\u6279\u6b21'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl patch deployment workload-demo -p \\\n\'{"spec":{"template":{"spec":{"containers":[{"name":"busybox", "env":[{"name":"VERSION", "value":"version-2"}]}]}}}}\'\n')),(0,l.kt)("p",null,"\u7a0d\u7b49\u7247\u523b\uff0c\u6211\u4eec\u5c06\u770b\u5230\u90e8\u7f72\u72b6\u6001\u663e\u793a\u5df2\u5347\u7ea7 ",(0,l.kt)("strong",{parentName:"p"},"1\u4e2aPod"),"\u3002"),(0,l.kt)("center",null,(0,l.kt)("img",{src:n(9961).Z,width:"90%"})),(0,l.kt)("h3",{id:"\u6b65\u9aa4-3\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e8c\u6279\u6b21"},"\u6b65\u9aa4 3\uff1a\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e8c\u6279\u6b21"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise rollout approve rollout/rollouts-demo -n default\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"kubectl-kruise")," \u4e5f\u7531 OpenKruise \u793e\u533a\u63d0\u4f9b\u3002"),(0,l.kt)("p",null,"\u7a0d\u7b49\u7247\u523b\uff0c\u6211\u4eec\u5c06\u770b\u5230\u90e8\u7f72\u72b6\u6001\u663e\u793a\u5df2\u5347\u7ea7 ",(0,l.kt)("strong",{parentName:"p"},"5\u4e2aPod"),"\u3002"),(0,l.kt)("center",null,(0,l.kt)("img",{src:n(4893).Z,width:"90%"})),(0,l.kt)("h3",{id:"\u6b65\u9aa4-4\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e09\u6279\u6b21"},"\u6b65\u9aa4 4\uff1a\u7ee7\u7eed\u53d1\u5e03\u7b2c\u4e09\u6279\u6b21"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise rollout approve rollout/rollouts-demo -n default\n")),(0,l.kt)("p",null,"\u7a0d\u7b49\u7247\u523b\uff0c\u6211\u4eec\u5c06\u770b\u5230\u90e8\u7f72\u72b6\u6001\u663e\u793a\u6240\u6709 ",(0,l.kt)("strong",{parentName:"p"},"10\u4e2aPod")," \u5df2\u5347\u7ea7\u3002"),(0,l.kt)("center",null,(0,l.kt)("img",{src:n(7340).Z,width:"90%"})),(0,l.kt)("h2",{id:"\u5982\u4f55\u624b\u52a8\u7ee7\u7eed\u4e0b\u4e00\u6b65"},"\u5982\u4f55\u624b\u52a8\u7ee7\u7eed\u4e0b\u4e00\u6b65\uff1f"),(0,l.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u5df2\u5b8c\u6210\u7b2c\u4e00\u6279\u6b21\u5e76\u5e0c\u671b\u53d1\u9001\u7b2c\u4e8c\u6279\u6b21\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1a \u60a8\u53ef\u4ee5\u5c06\u7b2c\u4e00\u6279\u6b21\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"pause.duration")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"duration:0"),"\uff0c\u8fd9\u5c06\u81ea\u52a8\u8fdb\u5165\u4e0b\u4e00\u6279\u6b21\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1a \u60a8\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"rollout.status.canaryStatus.currentStepState")," \u5b57\u6bb5\u66f4\u65b0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'"StepReady"'),"\uff0c\u8fd9\u4e5f\u5c06\u81ea\u52a8\u8fdb\u5165\u4e0b\u4e00\u6279\u6b21\u3002")),(0,l.kt)("p",null,"\u6bcf\u79cd\u65b9\u6cd5\u90fd\u6709\u5176 ",(0,l.kt)("strong",{parentName:"p"},"\u4f18\u70b9")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u65b9\u6cd5\u4e00"),"\uff0c\u5b83\u53ef\u4ee5\u786e\u4fdd\u60a8\u7684\u64cd\u4f5c\u7684\u5e42\u7b49\u6027\uff0c\u4f46\u5728\u4e0b\u4e00\u6b21\u53d1\u5e03\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5c06 Rollout \u7684\u7b56\u7565\u91cd\u7f6e\u56de\u5176\u539f\u59cb\u72b6\u6001\uff08\u4f8b\u5982\uff0c\u5c06\u6301\u7eed\u65f6\u95f4\u5b57\u6bb5\u91cd\u7f6e\u4e3a\nnil\uff09\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Rollout\nspec:\n  strategy:\n    canary:\n      steps:\n        - replicas: 1\n          pause:\n            duration: 0\n        - ... ...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u65b9\u6cd5\u4e8c"),"\uff0c\u5728\u4e0b\u4e00\u6b21\u53d1\u5e03\u4e4b\u524d\uff0c\u60a8\u65e0\u9700\u66f4\u6539\u4efb\u4f55\u5185\u5bb9\u3002\u7136\u800c\uff0c\u5728\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u68c0\u67e5 Rollout \u7684\u72b6\u6001\uff0c\u5e76\u4f7f\u7528 Kubernetes\n\u5ba2\u6237\u7aef\u7684\u66f4\u65b0\u63a5\u53e3\u800c\u4e0d\u662f\u4fee\u8865\u63a5\u53e3\uff0c\u6216\u8005\u4f7f\u7528\u6211\u4eec\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise-tools"},"kubectl-kruise")," \u5de5\u5177\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise rollout approve rollout/<your-rollout-name> -n <your-rollout-namespace>\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u77e5\u9053\u5f53\u524d\u6b65\u9aa4\u662f\u5426\u5df2\u51c6\u5907\u5c31\u7eea"},"\u5982\u4f55\u77e5\u9053\u5f53\u524d\u6b65\u9aa4\u662f\u5426\u5df2\u51c6\u5907\u5c31\u7eea\uff1f"),(0,l.kt)("p",null,"\u5173\u4e8e\u5f53\u524d\u6b65\u9aa4\u7684\u6240\u6709\u72b6\u6001\u4fe1\u606f\u90fd\u8bb0\u5f55\u5728 Rollout \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"status.canaryStatus")," \u5b57\u6bb5\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"status.canaryStatus.CurrentStepIndex")," \u4e0d\u7b49\u4e8e\u60a8\u671f\u671b\u7684\u6b65\u9aa4\u7d22\u5f15\uff0c\u5219\u5f53\u524d\u6b65\u9aa4 ",(0,l.kt)("strong",{parentName:"li"},"\u5c1a\u672a\u51c6\u5907\u5c31\u7eea"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"status.canaryStatus.CurrentStepState"),' \u4e0d\u7b49\u4e8e "StepReady" \u6216 "Complete"\uff0c\u5219\u5f53\u524d\u6b65\u9aa4 ',(0,l.kt)("strong",{parentName:"li"},"\u5c1a\u672a\u51c6\u5907\u5c31\u7eea"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func IsRolloutCurrentStepReady(rollout *rolloutsv1alpha1.Rollout, stepIndex int32) bool {\n    if rollout.Status.CanaryStatus != nil {\n        if rollout.Status.CanaryStatus.CurrentStepIndex != stepIndex {\n            return false\n        }\n        switch rollout.Status.CanaryStatus.CurrentSetpState {\n        case "StepReady", "Complete":\n            return true\n        }\n    }\n    return false\n}\n')),(0,l.kt)("p",null,"\u4f46\u5728\u4e00\u4e9b\u81ea\u52a8\u5316\u573a\u666f\uff08\u4f8b\u5982 PaaS \u5e73\u53f0\uff09\uff0c\u5728\u5224\u65ad\u5f53\u524d\u6b65\u9aa4\u662f\u5426\u51c6\u5907\u5c31\u7eea\u4e4b\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u77e5\u9053 ",(0,l.kt)("inlineCode",{parentName:"p"},"canaryStatus")," \u662f\u5426\u4e0e\u5f53\u524d\u7684 Rollout\n\u8fdb\u7a0b\u5bf9\u5e94\uff08\u4e5f\u8bb8\u5b83\u5bf9\u5e94\u4e0a\u4e00\u4e2a Rollout \u8fdb\u7a0b\uff09\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rollout-id")," \u673a\u5236\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func IsRolloutCurrentStepReady(workload appsv1.Deployment, rollout *rolloutsv1alpha1.Rollout, stepIndex int32) bool {\n    if rollout.Status.CanaryStatus != nil {\n        rolloutId := workload.Labels["rollouts.kruise.io/rollout-id"]\n        if rolloutId != rollout.Status.CanaryStatus.ObservedRolloutID {\n            return false\n        }\n        if rollout.Status.CanaryStatus.CurrentStepIndex != stepIndex {\n            return false\n        }\n        switch rollout.Status.CanaryStatus.CurrentSetpState {\n        case "StepReady", "Complete":\n            return true\n        }\n    }\n    return false\n}\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u56de\u6eda"},"\u5982\u4f55\u56de\u6eda"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0cKruise Rollout ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u63d0\u4f9b")," \u76f4\u63a5\u56de\u6eda\u7684\u529f\u80fd\u3002",(0,l.kt)("strong",{parentName:"p"},"Kruise Rollout\n\u66f4\u503e\u5411\u4e8e\u8ba9\u7528\u6237\u80fd\u591f\u76f4\u63a5\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d\u89c4\u8303\u4ee5\u56de\u6eda\u5176\u5e94\u7528\u7a0b\u5e8f\u3002")," \u5f53\u7528\u6237\u9700\u8981\u4ece\u201cversion-2\u201d\u56de\u6eda\u5230\u201cversion-1\u201d\u65f6\uff0cKruise Rollout\n\u5c06\u4f7f\u7528\u672c\u673a\u7684\u6eda\u52a8\u5347\u7ea7\u7b56\u7565\u6765\u5feb\u901f\u6267\u884c\u56de\u6eda\uff0c\u800c\u4e0d\u662f\u91c7\u7528\u591a\u6279\u6b21\u68c0\u67e5\u70b9\u7b56\u7565\u3002"),(0,l.kt)("h2",{id:"\u5176\u4ed6\u58f0\u660e"},"\u5176\u4ed6\u58f0\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8fde\u7eed\u53d1\u5e03"),"\uff1a\u5047\u8bbe Rollout \u6b63\u5728\u4ece\u201cversion-1\u201d\u8fdb\u5c55\u5230\u201cversion-2\u201d\uff08\u5c1a\u672a\u5b8c\u6210\uff09\u3002\u73b0\u5728\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u88ab\u4fee\u6539\u4e3a\u201cversion-3\u201d\uff0cRollout\n\u5c06\u4ece\u5f00\u59cb\u6b65\u9aa4\uff08\u7b2c\u4e00\u6b65\uff09\u91cd\u65b0\u5f00\u59cb\u8fdb\u5c55\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HPA\u517c\u5bb9"),"\uff1a\u5047\u8bbe\u60a8\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u4e86\u6c34\u5e73Pod\u81ea\u52a8\u4f38\u7f29\uff08HPA\uff09\u5e76\u4f7f\u7528\u591a\u6279\u6b21\u5347\u7ea7\u7b56\u7565\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u201c\u767e\u5206\u6bd4\u201d\u6765\u6307\u5b9a\u201csteps","[x]","\n.replicas\u201d\u3002\u5982\u679c\u5728\u5347\u7ea7\u8fdb\u884c\u8fc7\u7a0b\u4e2d\u6269\u5c55\u6216\u7f29\u5c0f\u526f\u672c\u6570\u91cf\uff0c\u65e7\u7248\u672c\u548c\u65b0\u7248\u672c\u7684\u526f\u672c\u5c06\u6839\u636e\u201c\u767e\u5206\u6bd4\u201d\u914d\u7f6e\u8fdb\u884c\u4f38\u7f29\uff0c\u4ee5\u786e\u4fdd\u4f38\u7f29\u4e0e\u5347\u7ea7\u8fdb\u5c55\u4fdd\u6301\u4e00\u81f4\u3002")))}d.isMDXComponent=!0},9961:function(e,t,n){t.Z=n.p+"assets/images/basic-1st-batch-2d4dd66aea0d6933125c38b15e35dc8d.jpg"},4893:function(e,t,n){t.Z=n.p+"assets/images/basic-2nd-batch-c101777d8ae2c5b4896022518aae360c.jpg"},7340:function(e,t,n){t.Z=n.p+"assets/images/basic-3rd-batch-8c5da0186f4ebb578c4f44787d1c65aa.jpg"}}]);