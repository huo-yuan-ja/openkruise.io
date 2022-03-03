"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8647],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5492:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=["components"],i={title:"WorkloadSpread"},s=void 0,d={unversionedId:"user-manuals/workloadspread",id:"version-v1.0/user-manuals/workloadspread",title:"WorkloadSpread",description:"FEATURE STATE: Kruise v0.10.0",source:"@site/versioned_docs/version-v1.0/user-manuals/workloadspread.md",sourceDirName:"user-manuals",slug:"/user-manuals/workloadspread",permalink:"/docs/user-manuals/workloadspread",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/workloadspread.md",tags:[],version:"v1.0",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1639452598,formattedLastUpdatedAt:"12/14/2021",frontMatter:{title:"WorkloadSpread"},sidebar:"docs",previous:{title:"SidecarSet",permalink:"/docs/user-manuals/sidecarset"},next:{title:"UnitedDeployment",permalink:"/docs/user-manuals/uniteddeployment"}},p=[{value:"Demo",id:"demo",children:[],level:2},{value:"subsets",id:"subsets",children:[{value:"sub-fields",id:"sub-fields",children:[],level:3}],level:2},{value:"Schedule strategy",id:"schedule-strategy",children:[],level:2},{value:"Requirements",id:"requirements",children:[{value:"Pod Webhook",id:"pod-webhook",children:[],level:3},{value:"deletion-cost feature",id:"deletion-cost-feature",children:[],level:3}],level:2},{value:"Scale order:",id:"scale-order",children:[{value:"Scale out",id:"scale-out",children:[],level:3},{value:"Scale in",id:"scale-in",children:[],level:3}],level:2},{value:"feature-gates",id:"feature-gates",children:[],level:2},{value:"Example",id:"example",children:[{value:"Elastic deployment",id:"elastic-deployment",children:[{value:"Effect",id:"effect",children:[],level:4}],level:3},{value:"Multi-domain deployment",id:"multi-domain-deployment",children:[],level:3}],level:2}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,o.kt)("p",null,"WorkloadSpread can distribute Pods of workload to different types of Node according to some polices, which empowers single workload the abilities for\nmulti-domain deployment and elastic deployment."),(0,o.kt)("p",null,"Some common policies include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fault toleration spread (for example, spread evenly among hosts, az, etc)"),(0,o.kt)("li",{parentName:"ul"},"spread according to the specified ratio (for example, deploy Pod to several specified az according to the proportion)"),(0,o.kt)("li",{parentName:"ul"},"subset management with priority, such as",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"deploy Pods to ecs first, and then deploy to eci when its resources are insufficient."),(0,o.kt)("li",{parentName:"ul"},"deploy a fixed number of Pods to ecs first, and the rest Pods are deployed to eci."))),(0,o.kt)("li",{parentName:"ul"},"subset management with customization, such as",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"control how many pods in a workload are deployed in different cpu arch"),(0,o.kt)("li",{parentName:"ul"},"enable pods in different cpu arch to have different resource requirements")))),(0,o.kt)("p",null,"The feature of WorkloadSpread is similar with UnitedDeployment in OpenKruise community. Each WorkloadSpread defines multi-domain\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),". Each domain may provide the limit to run the replicas number of pods called ",(0,o.kt)("inlineCode",{parentName:"p"},"maxReplicas"),".\nWorkloadSpread injects the domain configuration into the Pod by Webhook, and it also controls the order of scale in and scale out."),(0,o.kt)("p",null,"Currently, supported workload: ",(0,o.kt)("inlineCode",{parentName:"p"},"CloneSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),"."),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadata:\n  name: workloadspread-demo\nspec:\n  targetRef:\n    apiVersion: apps/v1 | apps.kruise.io/v1alpha1\n    kind: Deployment | CloneSet\n    name: workload-xxx\n  subsets:\n    - name: subset-a\n      requiredNodeSelectorTerm:\n        matchExpressions:\n          - key: topology.kubernetes.io/zone\n            operator: In\n            values:\n              - zone-a\n    preferredNodeSelectorTerms:\n      - weight: 1\n        preference:\n        matchExpressions:\n          - key: another-node-label-key\n            operator: In\n            values:\n              - another-node-label-value\n      maxReplicas: 3\n      tolertions: []\n      patch:\n        metadata:\n          labels:\n            xxx-specific-label: xxx\n    - name: subset-b\n      requiredNodeSelectorTerm:\n        matchExpressions:\n          - key: topology.kubernetes.io/zone\n            operator: In\n            values:\n              - zone-b\n  scheduleStrategy:\n    type: Adaptive | Fixed\n    adaptive:\n      rescheduleCriticalSeconds: 30\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"targetRef"),": specify the target workload. Can not be mutated\uff0cand one workload can only correspond to one WorkloadSpread."),(0,o.kt)("h2",{id:"subsets"},"subsets"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subsets")," consists of multiple domain called ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),", and each topology has different configuration."),(0,o.kt)("h3",{id:"sub-fields"},"sub-fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name"),": the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),", it is distinct in a WorkloadSpread, which represents a topology.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"maxReplicas"),"\uff1athe replicas limit of ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),", and must be Integer and >= 0. There is no replicas limit while the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxReplicas")," is nil."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Don't support percentage type in current version."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"requiredNodeSelectorTerm"),": match zone hardly\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"preferredNodeSelectorTerms"),": match zone softly\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"requiredNodeSelectorTerm")," corresponds the ",(0,o.kt)("inlineCode",{parentName:"p"},"requiredDuringSchedulingIgnoredDuringExecution")," of nodeAffinity.\n",(0,o.kt)("inlineCode",{parentName:"p"},"preferredNodeSelectorTerms")," corresponds the ",(0,o.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," of nodeAffinity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tolerations"),": the tolerations of Pod in ",(0,o.kt)("inlineCode",{parentName:"li"},"subset"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- key: "key1"\n  operator: "Equal"\n  value: "value1"\n  effect: "NoSchedule"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patch"),": customize the Pod configuration of ",(0,o.kt)("inlineCode",{parentName:"li"},"subset"),", such as Annotations, Labels, Env. ")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# patch pod with a topology label:\npatch:\n  metadata:\n    labels:\n      topology.application.deploy/zone: "zone-a"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# patch pod container resources:\npatch:\n  spec:\n    containers:\n    - name: main\n      resources:\n        limit:\n          cpu: "2"\n          memory: 800Mi\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# patch pod container env with a zone name:\npatch:\n  spec:\n    containers:\n    - name: main\n      env:\n      - name: K8S_AZ_NAME\n        value: zone-a\n")),(0,o.kt)("h2",{id:"schedule-strategy"},"Schedule strategy"),(0,o.kt)("p",null,"WorkloadSpread provides two kind strategies, the default strategy is ",(0,o.kt)("inlineCode",{parentName:"p"},"Fixed"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  scheduleStrategy:\n    type: Adaptive | Fixed\n    adaptive:\n      rescheduleCriticalSeconds: 30\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed: "),(0,o.kt)("p",{parentName:"li"},"Workload is strictly spread according to the definition of the subset. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adaptive:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Reschedule"),": Kruise will check the unschedulable Pods of subset. If it exceeds the defined duration, the failed Pods will be rescheduled to the other ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),"."))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"WorkloadSpread defaults to be disabled. You have to configure the feature-gate ",(0,o.kt)("em",{parentName:"p"},"WorkloadSpread")," when install or upgrade Kruise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="WorkloadSpread=true"\n')),(0,o.kt)("h3",{id:"pod-webhook"},"Pod Webhook"),(0,o.kt)("p",null,"WorkloadSpread uses ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook")," to inject fault domain rules."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"PodWebhook")," feature-gate is set to false, WorkloadSpread will also be disabled."),(0,o.kt)("h3",{id:"deletion-cost-feature"},"deletion-cost feature"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CloneSet")," has supported deletion-cost feature in the latest versions."),(0,o.kt)("p",null,"The other native workload need kubernetes version >= 1.21. (In 1.21, users need to enable PodDeletionCost feature-gate, and since 1.22 it will be enabled by default)"),(0,o.kt)("h2",{id:"scale-order"},"Scale order:"),(0,o.kt)("p",null,"The workload managed by WorkloadSpread will scale according to the defined order in ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.subsets"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The order of ",(0,o.kt)("inlineCode",{parentName:"strong"},"subset")," in ",(0,o.kt)("inlineCode",{parentName:"strong"},"spec.subsets")," can be changed"),", which can adjust the scale order of workload."),(0,o.kt)("h3",{id:"scale-out"},"Scale out"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Pods are scheduled in the subset order defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.subsets"),". It will be scheduled in the next ",(0,o.kt)("inlineCode",{parentName:"li"},"subset")," while the replica number reaches the maxReplicas of ",(0,o.kt)("inlineCode",{parentName:"li"},"subset")," ")),(0,o.kt)("h3",{id:"scale-in"},"Scale in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the replica number of the ",(0,o.kt)("inlineCode",{parentName:"li"},"subset")," is greater than the ",(0,o.kt)("inlineCode",{parentName:"li"},"maxReplicas"),", the extra Pods will be removed in a high priority."),(0,o.kt)("li",{parentName:"ul"},"According to the ",(0,o.kt)("inlineCode",{parentName:"li"},"subset")," order in the ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.subsets"),", the Pods of the ",(0,o.kt)("inlineCode",{parentName:"li"},"subset")," at the back are deleted before the Pods at the front.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#             subset-a   subset-b  subset-c\n# maxReplicas    10          10        nil\n# pods number    10          10        10\n# deletion order: c -> b -> a\n\n#             subset-a   subset-b  subset-c\n# maxReplicas    10          10        nil\n# pods number    20          20        20\n# deletion order: b -> a -> c\n")),(0,o.kt)("h2",{id:"feature-gates"},"feature-gates"),(0,o.kt)("p",null,"WorkloadSpread feature is turned off by default, if you want to turn it on set feature-gates ",(0,o.kt)("em",{parentName:"p"},"WorkloadSpread"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="WorkloadSpread=true"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"elastic-deployment"},"Elastic deployment"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zone-a"),"(ACK) holds 100 Pods, ",(0,o.kt)("inlineCode",{parentName:"p"},"zone-b"),"(ECI) as an elastic zone holds additional Pods."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a WorkloadSpread instance.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadta:\n  name: ws-demo\n  namespace: deploy\nspec:\n  targetRef: # workload in the same namespace\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n    name: workload-xxx\n  subsets:\n  - name: ACK # zone ACK\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - ack\n    maxReplicas: 100\n    patch: # inject label.\n      metadata:\n        labels:\n          deploy/zone: ack\n  - name: ECI # zone ECI\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - eci\n    patch:\n      metadata:\n        labels:\n          deploy/zone: eci\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Creat a corresponding workload, the number of replicas ca be adjusted freely.")),(0,o.kt)("h4",{id:"effect"},"Effect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," <= 100, the Pods are scheduled in ",(0,o.kt)("inlineCode",{parentName:"li"},"ACK")," zone."),(0,o.kt)("li",{parentName:"ul"},"When the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," > 100, the 100 Pods are in ",(0,o.kt)("inlineCode",{parentName:"li"},"ACK")," zone, the extra Pods are scheduled in ",(0,o.kt)("inlineCode",{parentName:"li"},"ECI")," zone."),(0,o.kt)("li",{parentName:"ul"},"The Pods in ",(0,o.kt)("inlineCode",{parentName:"li"},"ECI")," elastic zone are removed first when scaling in.")),(0,o.kt)("h3",{id:"multi-domain-deployment"},"Multi-domain deployment"),(0,o.kt)("p",null,"Deploy 100 Pods to two ",(0,o.kt)("inlineCode",{parentName:"p"},"zone"),"(zone-a, zone-b) separately."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a WorkloadSpread instance.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadta:\n  name: ws-demo\n  namespace: deploy\nspec:\n  targetRef:\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n    name: workload-xxx\n  subsets:\n  - name: subset-a\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-a\n    maxReplicas: 100\n    patch:\n      metadata:\n        labels:\n          deploy/zone: zone-a\n  - name: subset-b\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-b\n    maxReplicas: 100\n    patch:\n      metadata:\n        labels:\n          deploy/zone: zone-b\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creat a corresponding workload with a 200 replicas, or perform a rolling update on an existing workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the spread of zone needs to be changed, first adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxReplicas")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),", and then change the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," of workload."))))}c.isMDXComponent=!0}}]);