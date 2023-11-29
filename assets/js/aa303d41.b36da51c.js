"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2642],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Upgrading Game Cloud-Native Architecture with OpenKrusieGame",c={unversionedId:"blog-video/guanying-20231129",id:"blog-video/guanying-20231129",title:"Upgrading Game Cloud-Native Architecture with OpenKrusieGame",description:"Summary: The practice of smooth implementation of traditional zone server PvE games on Kubernetes",source:"@site/kruisegame/blog-video/guanying-20231129.md",sourceDirName:"blog-video",slug:"/blog-video/guanying-20231129",permalink:"/kruisegame/blog-video/guanying-20231129",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1701245564,formattedLastUpdatedAt:"11/29/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"OpenKruiseGame Supports Game Ops & Management to Improve Efficiency",permalink:"/kruisegame/blog-video/meetup-guangzhou-20231125"}},u={},d=[{value:"About Guanying Interactive Entertainment",id:"about-guanying-interactive-entertainment",level:2},{value:"The Initial Intention of Adopting Cloud-Native Architecture",id:"the-initial-intention-of-adopting-cloud-native-architecture",level:2},{value:"Challenges in Implementing Game Servers on Kubernetes",id:"challenges-in-implementing-game-servers-on-kubernetes",level:2},{value:"OpenKruiseGame Facilitates the Cloud-Native Implementation of Game Servers",id:"openkruisegame-facilitates-the-cloud-native-implementation-of-game-servers",level:2},{value:"Achievements with Cloud-Native",id:"achievements-with-cloud-native",level:2},{value:"Outlook for Cloud Native Games",id:"outlook-for-cloud-native-games",level:2}],p={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrading-game-cloud-native-architecture-with-openkrusiegame"},"Upgrading Game Cloud-Native Architecture with OpenKrusieGame"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Summary: The practice of smooth implementation of traditional zone server PvE games on Kubernetes"),(0,r.kt)("p",{parentName:"blockquote"},"Author: ChrisLiu"),(0,r.kt)("p",{parentName:"blockquote"},"Time: 2023-11-29")),(0,r.kt)("h2",{id:"about-guanying-interactive-entertainment"},"About Guanying Interactive Entertainment"),(0,r.kt)("p",null,'Guanying Interactive Entertainment is a game company that specializes in the development and distribution of mobile games, online games, and VR games. Their flagship game, the officially licensed "Legend of Mir" series, has gained immense popularity among players. Leveraging their years of experience in developing and operating MMORPG games, Guanying Interactive Entertainment has officially launched the 2D MMO game development engine, Thousand, which has been successfully applied to their recent release, "Legend of Mir - Dream Return to Zero Three" mobile game. The cloud-native architecture used in the engine significantly improves the efficiency of game server deployment, updates, and maintenance, while reducing server resource costs. It also provides a solid foundation for the development of future outstanding products and the rapid formation of the game ecosystem.'),(0,r.kt)("img",{src:n(1213).Z,style:{width:"700px"}}),(0,r.kt)("h2",{id:"the-initial-intention-of-adopting-cloud-native-architecture"},"The Initial Intention of Adopting Cloud-Native Architecture"),(0,r.kt)("p",null,"At the beginning of the Thousand engine project, the development team decided to adopt a cloud-native architecture based on the characteristics of traditional server-based games. The main considerations were as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Strong isolation between game servers to avoid resource contention. In the past, there were instances where different servers on the same host machine interfered with each other, resulting in a larger number of affected players. By utilizing container technology, fine-grained resource control can be achieved, preventing interference between game servers and effectively reducing the impact of failures.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Efficiency advantages brought by declarative game server management. Moving from the traditional approach of managing machines and executing scripts to managing services in a batch and automated manner not only greatly improves the efficiency of server deployment but also reduces the probability of errors during game maintenance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The need for more precise fault localization and quick business recovery capabilities. When game servers share computing nodes, it becomes difficult to locate the root cause of a failure, whether it originates from server A, server B, or the host machine. Additionally, the efficiency of business migration is low when a machine fails. Cloud-native architecture brings the ability to quickly locate business faults by decoupling infrastructure resources from the business to some extent. The lightweight and consistent environment provided by containers greatly enhances the efficiency of problem localization and business recovery.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The growing maturity of the cloud-native ecosystem. Through cloud-native technology, not only can infrastructure resources such as computing, networking, and storage be highly integrated, but it also becomes easy to utilize observability, scheduling, application delivery, and other capabilities."))),(0,r.kt)("h2",{id:"challenges-in-implementing-game-servers-on-kubernetes"},"Challenges in Implementing Game Servers on Kubernetes"),(0,r.kt)("p",null,"However, the cloud-native transformation faced numerous challenges when it came to deploying game servers using the container orchestration standard Kubernetes, which has limited support for games. Guanying Interactive Entertainment encountered the following challenges during the implementation of Legend of Mir games on Kubernetes:"),(0,r.kt)("img",{src:n(9891).Z,style:{width:"700px"}}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each game server needs to have a separate public network address exposed so that players can directly connect to the corresponding server. Adding an additional networking layer for management increases the operational costs of managing game servers in bulk. However, if each server pod is bound to an Elastic IP (EIP), it would consume a significant number of EIP resources, resulting in economic waste.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'A game server consists of multiple services working together and exists in the form of a "rich container" after containerization. The native Kubernetes approach to managing business states is limited to the container level, making it difficult to precisely monitor the status of specific processes within a container. This makes it challenging to locate and handle faults or exceptions. Splitting services and deploying them separately would increase the architectural complexity and significantly raise the difficulty of the transformation.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A complete game server consists of engine-side and script-side components, with the game engine supporting hot-swappable scripts to avoid frequent downtime and player loss. The development team has designed various hot-swapping solutions for game servers deployed on Kubernetes, including pulling the latest hot-swappable files from public servers or dynamically mounting them through cloud storage. However, all these approaches encounter various problems, such as: 1) the lack of versioned management for hot-swappable files, resulting in difficulties in associating multiple versions with actual files and making rollback complex after a failed update; 2) difficulty in tracking the update status. Even if the files in the container are updated and replaced, it is challenging to determine whether the hot-swappable files have been fully mounted when executing the reload command. Maintaining this success or failure status requires additional management from operators, which increases operational complexity to some extent; 3) in the event of container abnormalities, rebuilding the pod would launch the old version of the image, resulting in the inability to persistently retain the hot-swappable files; 4) unsatisfactory update speed."))),(0,r.kt)("h2",{id:"openkruisegame-facilitates-the-cloud-native-implementation-of-game-servers"},"OpenKruiseGame Facilitates the Cloud-Native Implementation of Game Servers"),(0,r.kt)("p",null,"Guanying Interactive Entertainment leveraged OpenKruiseGame (OKG) to address the aforementioned challenges and smoothly deploy their 2D MMO game development engine, Thousand, on Kubernetes. OKG is a sub-project of the CNCF incubating project OpenKruise, specifically designed for the gaming industry. It assists game developers in achieving more agile game elastic architectures, standardized operations, multi-cloud consistency, and establishing self-operated game platforms."),(0,r.kt)("p",null,"To address the challenges, Guanying Interactive Entertainment utilized the following capabilities of OKG:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OKG provides automated management for the networking layer, eliminating the need for manual network construction/destruction for each game server. It also supports different network models for different scenarios. Guanying Interactive Entertainment utilized the NATGW model, which automatically generates D-NAT entries when a game server is launched and removes them when the server is merged or deleted. Multiple game servers can share the same Elastic IP, making efficient use of bandwidth resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'OKG believes that the service quality of game servers should be defined by users. Users can set the specific status of a game server based on their business needs and perform fine-grained handling accordingly. In the case of a "rich container" game scenario, Guanying Interactive Entertainment utilized OKG\'s "customized service quality" capability to detect specific process exceptions and expose them to the Kubernetes side. They then utilized event notification components like kube-event to notify the operations team of any exceptions, enabling quick problem detection, achieving sub-second fault localization, and resolving issues within minutes.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OKG provides an in-place hot-swapping solution based on container images. The hot-swappable script is deployed as a sidecar container alongside the main container within the same game server. They share the hot-swappable files using emptyDir, and only the sidecar container needs to be updated during the hot-swapping process. This allows game server hot-swapping to be performed in a cloud-native manner: 1) the sidecar container image has version attributes, addressing the version management issue; 2) after a successful container update in Kubernetes, it enters the Ready state, allowing detection of whether the sidecar script update was successful; 3) even in the event of a container restart due to an exception, the hot-swappable files are persistently retained as they are solidified with the image; 4) the hot-swapping process can be quickly completed through an image pre-warming mechanism."))),(0,r.kt)("h2",{id:"achievements-with-cloud-native"},"Achievements with Cloud-Native"),(0,r.kt)("p",null,"The overall cloud-native architecture of the Thousand engine is depicted in the following diagram. Guanying Interactive Entertainment has achieved platformization engineering using OKG, as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Game engineers upload new scripts, triggering the CI/CD process. After automatically packaging the image, the new GameServer is deployed to the Kubernetes cluster. Similarly, editing old scripts can trigger CI/CD, and with OKG's in-place upgrade capability, the corresponding sidecar image of the GameServer is updated, achieving game server hot-swapping. The entire process does not require the involvement of game operations engineers. By leveraging cloud-native technologies, the ability to deploy and update game servers is handed over to game developers, thereby improving game production efficiency.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The automatically generated GameServer has an independent public network access address (EIP:port) with uniqueness. The Thousand engine platform provides a service discovery mechanism, allowing players to directly connect to the corresponding game server for gameplay.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the event of occasional exceptions in game servers, the Thousand engine platform leverages OKG's customized service quality functionality to detect specific exception information and notify operations engineers. Operations engineers can quickly locate and respond to problems, ensuring the game quality for players to the greatest extent."))),(0,r.kt)("img",{src:n(5568).Z,style:{width:"700px"}}),(0,r.kt)("p",null,"The birth of the Thousand engine signifies that Guanying Interactive Entertainment has achieved the upgrade of game cloud-native architecture. Through production validation, the cloud-native architecture has brought the following advantages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Efficiency in server deployment: In traditional server deployment, manual configuration is required for IP and port association between different servers. Due to the manual configuration, the failure rate is relatively high, resulting in longer time for new server deployment. However, after containerization, all parameters are standardized and visualized. This allows for quick server deployment and ensures the speed and integrity of container deployment during traffic peaks. The efficiency of opening new game zones has been improved from 30 minutes to 15 seconds, and the efficiency of opening new servers has been improved from 2 minutes to 10 seconds, greatly enhancing the server deployment efficiency.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Efficiency in updates: Traditional update processes involve overwriting executable files in various directories, resulting in slow update speed and a high error rate. However, after containerization, the engine and scripts are separated into two containers, allowing for targeted updates. The granularity of updates becomes more precise and controllable, reducing the error rate of updates. Additionally, through image pre-warming, updates can be performed in seconds, resulting in a five-fold increase in update efficiency.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cost savings: In traditional server deployment, server resources are pre-purchased based on estimated player numbers, leading to resource redundancy and the inability to accurately isolate resources required for services. This results in significant resource wastage. However, after containerization, game servers are isolated from each other, and with fine-grained scheduling, host machine resources can be fully utilized. This leads to at least a 10% cost savings in resource allocation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Problem localization: In traditional manually deployed environments, there are often issues with server crashes that cannot be promptly detected. However, with containerization, specific error processes of game servers can be directly exposed, allowing for quick problem localization and resolution. The efficiency of problem response is increased by five times."))),(0,r.kt)("h2",{id:"outlook-for-cloud-native-games"},"Outlook for Cloud Native Games"),(0,r.kt)("p",null,'Despite the fruitful results of game cloud-native transformation, the cloud-native process at Guanying is not yet complete. Sheng Hao, the Technical Manager of the Guanying Cloud Platform, stated, "Cloud-native technologies are rapidly developing, and in the future, Guanying will embrace cloud-native more comprehensively. We will work hand in hand with the OKG community and plan to introduce chaos engineering and establish a fault self-healing system to further enhance the platform\'s automated operations and maintenance capabilities. Through vertical scaling and dynamic resource allocation, we will further reduce resource costs while ensuring the playability of game servers." In fact, the future is not far away. OKG has already opened up features such as custom fault definitions and support for automatically running maintenance scripts on specific state containers. Additionally, Kubernetes version 1.27 has introduced in-place automatic vertical scaling, which has significant implications for resource allocation in game servers. Perhaps, the era of cloud-native gaming is right before our eyes.'))}m.isMDXComponent=!0},1213:function(e,t,n){t.Z=n.p+"assets/images/menghuilingsan-3e90028c95793d6a8db8da1b5c7fb5b3.jpeg"},9891:function(e,t,n){t.Z=n.p+"assets/images/qufuguanli-612e0d3492e4e42fdfc83a31d3d809ac.png"},5568:function(e,t,n){t.Z=n.p+"assets/images/thousand-60d77f4850cf3a262f114d1504c01f46.png"}}]);