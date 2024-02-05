"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8206],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,k=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5065:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Goliang Client",u={unversionedId:"developer-manuals/go-client",id:"developer-manuals/go-client",title:"Goliang Client",description:"If you want to create/get/update/delete those OKG resources in a Golang project or list-watch them using informer,",source:"@site/kruisegame/developer-manuals/go-client.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/go-client",permalink:"/kruisegame/developer-manuals/go-client",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1707122926,formattedLastUpdatedAt:"2/5/2024",frontMatter:{},sidebar:"kruisegame",previous:{title:"FAQ",permalink:"/kruisegame/developer-manuals/faq"},next:{title:"ShangYou's Cloud-Native Practice of GameServers based on OpenKruiseGame",permalink:"/kruisegame/blog-video/kubecon-shangyou-20230926"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Use OKG api",id:"use-okg-api",level:3},{value:"RBAC",id:"rbac",level:3},{value:"Code Example",id:"code-example",level:2}],p={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goliang-client"},"Goliang Client"),(0,o.kt)("p",null,"If you want to create/get/update/delete those OKG resources in a Golang project or list-watch them using informer,\nyou may need a Golang client for OKG."),(0,o.kt)("p",null,"In that way, you should use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-game"},"kruise-game")," repository"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Firstly, import ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise-game")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," file (the version better to be the kruise-game version you installed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"require github.com/openkruise/kruise-game v0.7.0\n")),(0,o.kt)("p",null,"Using the kruise-game api requires Kubernetes version >= 1.16."),(0,o.kt)("h3",{id:"use-okg-api"},"Use OKG api"),(0,o.kt)("p",null,"Here we use GameServerSet as an example, GameServer is used in the same way as GameServerSet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"New kruise-game client using your rest config:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'kruisegameclientset "github.com/openkruise/kruise-game/pkg/client/clientset/versioned"\n\n// cfg is the rest config defined in client-go, you should get it using kubeconfig or serviceaccount\nkruisegameClient := kruisegameclientset.NewForConfigOrDie(cfg)\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Get/List Kruise-Game resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gamekruiseiov1alpha1 "github.com/openkruise/kruise-game/apis/v1alpha1"\n\ngameServerSet, err := kruisegameClient.GameV1alpha1().GameServerSets(namespace).Get(context.TODO(), "GameServerSetName", metav1.GetOptions{})\n\n// gss is a GameServerSet object\ngssName := gss.GetName()\n\n// The labelSelector is used to filter GameServers, in the example we use the name of the GameServerSet to filter out the GameServers it manages, you can also use a custom labelSelector.\nlabelSelector := labels.SelectorFromSet(map[string]string{\ngamekruiseiov1alpha1.GameServerOwnerGssKey: gssName,\n}).String()\n\ngameServerList, err := kruisegameclientset.GameV1alpha1().GameServerSets(namespace).List(context.TODO(), metav1.ListOptions{})\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create/Update kruise-game resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import gameKruiseV1alpha1 "github.com/openkruise/kruise-game/apis/v1alpha1"\n\ncloneSet := &gameKruiseV1alpha1.GameServerSet{\n    // ...\n}\ngameServerSet, err = kruisegameclientset.GameV1alpha1().GameServerSet(namespace).Create(context.TODO(), cloneSet, metav1.CreateOptions{})\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\ngameServerSet, err := kruisegameclientset.GameV1alpha1().GameServerSets(namespace).Get(context.TODO(), "GameServerSetName", metav1.GetOptions{})\nif err != nil {\n    return err\n}\n\n// Modify object, such as replicas\ngameServerSet.Spec.Replicas = pointer.Int32Ptr(3)\n\nnewGameServerSet, err := kruisegameclientset.GameV1alpha1().GameServerSets(namespace).Update(context.TODO(), gameServerSet, metav1.UpdateOptions{})\nif err != nil{\nreturn err\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Delete an existing GameServerSet:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// delete gss\nerr := kruisegameclientset.GameV1alpha1().GameServerSets(namespace).Delete(context.TODO(), "GameServerSetName", metav1.DeleteOptions{})\nif err != nil {\nreturn err\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Watch Kruise-Game resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import gameinformer "github.com/openkruise/kruise-api/client/informers/externalversions"\n\ngameInformerFactory := gameinformer.NewSharedInformerFactory(kruisegameclientset, 0)\ngameInformerFactory.Game().V1alpha1().GameServerSets().Informer().AddEventHandler(...)\ngameInformerFactory.Start(...)\n')),(0,o.kt)("h3",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"When your component is deployed inside a kubernetes cluster, you need to give the component permission to operate OKG resources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  creationTimestamp: null\n  name: okg-role\nrules:\n- apiGroups:\n  - game.kruise.io\n  resources:\n  - gameserversets\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n- apiGroups:\n  - game.kruise.io\n  resources:\n  - gameservers\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: okg-sa      # Set the serviceAccount Name for your pod\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: okg-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: okg-role\nsubjects:\n- kind: ServiceAccount\n  name: okg-sa\n  namespace: kube-system\n\n")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following projects all use the OKG API, and developers can read the source code reference as an example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/aigc-gateway"},"https://github.com/CloudNativeGame/aigc-gateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/kruise-game-open-match-director"},"https://github.com/CloudNativeGame/kruise-game-open-match-director")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/palworld-okg-playground"},"https://github.com/CloudNativeGame/palworld-okg-playground"))))}g.isMDXComponent=!0}}]);