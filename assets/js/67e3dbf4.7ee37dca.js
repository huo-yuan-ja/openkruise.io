"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3411],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7238:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),i=["components"],l={title:"Cloud-Native Devops Best Practices(1) - Continuous Integration (CI) + OpenKruise Image Pre-download"},s=void 0,p={unversionedId:"best-practices/ci-pipeline-image-predownload",id:"version-v1.0/best-practices/ci-pipeline-image-predownload",title:"Cloud-Native Devops Best Practices(1) - Continuous Integration (CI) + OpenKruise Image Pre-download",description:"What is Devops\uff1f",source:"@site/versioned_docs/version-v1.0/best-practices/ci-pipeline-image-predownload.md",sourceDirName:"best-practices",slug:"/best-practices/ci-pipeline-image-predownload",permalink:"/docs/best-practices/ci-pipeline-image-predownload",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/ci-pipeline-image-predownload.md",tags:[],version:"v1.0",lastUpdatedBy:"berg",lastUpdatedAt:1646277219,formattedLastUpdatedAt:"3/3/2022",frontMatter:{title:"Cloud-Native Devops Best Practices(1) - Continuous Integration (CI) + OpenKruise Image Pre-download"},sidebar:"docs",previous:{title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread",permalink:"/docs/best-practices/elastic-deployment"},next:{title:"Best Practice for Managing Log Collection Sidecar Containers",permalink:"/docs/best-practices/log-container-sidecarset"}},c=[{value:"What is Devops\uff1f",id:"what-is-devops",children:[],level:2},{value:"Continuous Integration (CI) + OpenKruise Image Pre-download",id:"continuous-integration-ci--openkruise-image-pre-download",children:[{value:"Core Concepts",id:"core-concepts",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3},{value:"User Story",id:"user-story",children:[],level:3}],level:2},{value:"Tekton(CI) + Image Pre-download Practice",id:"tektonci--image-pre-download-practice",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Build-Test-Docker Push",id:"build-test-docker-push",children:[],level:3},{value:"Image Pre-download",id:"image-pre-download",children:[{value:"Kruise CloneSet &amp; Advanced StatefulSet InPlace Update Built-in Image Pre-download",id:"kruise-cloneset--advanced-statefulset-inplace-update-built-in-image-pre-download",children:[],level:4},{value:"Kubernetes Native Workload, e.g. Deployment, StatefulSet, DaemonSet, Job etc.",id:"kubernetes-native-workload-eg-deployment-statefulset-daemonset-job-etc",children:[],level:4}],level:3},{value:"Tekton Pipeline",id:"tekton-pipeline",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],d={toc:c};function u(e){var n=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-devops"},"What is Devops\uff1f"),(0,r.kt)("p",null,"DevOps is the merging of the three domains of Development, QA, and Operations. DevOps is an idea, a set of best practices, and a culture.\nDevOps is an extension of CI/CD, and CI/CD is the core foundation of DevOps. Without CI/CD automation tools and processes, DevOps is meaningless."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ci/cd pipeline",src:t(9040).Z})),(0,r.kt)("h2",{id:"continuous-integration-ci--openkruise-image-pre-download"},"Continuous Integration (CI) + OpenKruise Image Pre-download"),(0,r.kt)("h3",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Continuous Integration(CI)")," is a hands-on way to bring integration forward to the early stages of the development cycle, allowing builds, tests and integration of code to happen more often and repeatedly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://openkruise.io/docs/user-manuals/imagepulljob/"},"Image Pre-download"))," is provided by OpenKruise to pull application images to specific Node nodes in advance of application deployment, which in turn can greatly improve the efficiency of application deployment.")),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ci+image predownload",src:t(944).Z})),(0,r.kt)("h3",{id:"user-story"},"User Story"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Long-term pre-download common sidecar images, base images, such as: istio envoy, log collection containers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In large-scale scenarios, pre-download business app images to a specific K8s Node to reduce the pressure on the image repository during deployment, mainly for Deployment, StatefulSet and other k8s native resources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenKruise CloneSet & Advanced StatefulSet InPlace Update with built-in image pre-download capability, refer to ",(0,r.kt)("a",{parentName:"strong",href:"https://openkruise.io/docs/user-manuals/cloneset#pre-download-image-for-in-place-update"},"CloneSet documentation"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The OpenKruise image pre-download capability is only available for regular kubelet nodes, and not for virtual kubelet.")),(0,r.kt)("h2",{id:"tektonci--image-pre-download-practice"},"Tekton(CI) + Image Pre-download Practice"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Kubernetes Cluster, Since v1.0.0 (alpha/beta), OpenKruise requires Kubernetes version >= 1.16."),(0,r.kt)("li",{parentName:"ul"},"Install Tekton, Reference ",(0,r.kt)("a",{parentName:"li",href:"https://tekton.dev/docs/getting-started/"},"Official Documents"),"\u3002\nTekton is a Google open source Kubernetes native framework for creating continuous integration and continuous deployment/delivery (CI/CD) systems."),(0,r.kt)("li",{parentName:"ul"},"Helm installation of OpenKruise, Since v0.9.0, Reference ",(0,r.kt)("a",{parentName:"li",href:"https://tekton.dev/docs/getting-started/"},"Install OpenKruise"),"\u3002")),(0,r.kt)("h3",{id:"build-test-docker-push"},"Build-Test-Docker Push"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Git Repo: This article provides a helloworld http service ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/zmberg/samples/tree/hello_world/helloworld"},"demo"),", It contains Code, Dockerfile, and Unit Test, as follows:"),"\n",(0,r.kt)("img",{alt:"git helloworld",src:t(5209).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Tekton Build-Test-DockerPush Task, and need to generate the docker registry secret(for docker push image), as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# docker registry secret, for docker push image\napiVersion: v1\ndata:\n  .dockerconfigjson: xxxxxx\nkind: Secret\nmetadata:\n  name: dockersecret\ntype: kubernetes.io/dockerconfigjson\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app: helloworld\n  name: helloworld-build-push\nspec:\n  stepTemplate:\n    workingDir: /workspace\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  steps:\n  # git clone\n  - name: git-clone-and-checkout\n    image: bitnami/git:latest\n    command: ["sh", "-ce"]\n    args:\n    - >\n      set -e\n\n      echo $(params.gitrepositoryurl)\n\n      git clone $(params.gitrepositoryurl) ./ && git checkout $(params.branch)\n  # unit test\n  - name: auto-test\n    image: golang:1.16\n    command: [ "sh", "-ce" ]\n    args:\n    - >\n      set -e\n\n      cp -R /workspace/$(params.app_name) /go/src/ && cd /go/src/$(params.app_name) && pwd;\n\n      go test\n  # docker build & push registry\n  - name: push-to-registry\n    image: gcr.io/kaniko-project/executor:latest\n    args:\n    - --dockerfile=Dockerfile\n    - --destination=$(params.docker_repo):$(params.branch)-$(params.short_sha)\n    - --context=./$(params.app_name)\n    - --cache=true\n    - --cache-dir=/cache\n    - --use-new-run\n    volumeMounts:\n    - name: kaniko-secret\n      mountPath: "/kaniko/.docker"\n  volumes:\n  # docker push secret\n  - name: kaniko-secret\n    secret:\n      secretName: dockersecret\n      items:\n      - key: .dockerconfigjson\n        path: config.json\n')),(0,r.kt)("h3",{id:"image-pre-download"},"Image Pre-download"),(0,r.kt)("h4",{id:"kruise-cloneset--advanced-statefulset-inplace-update-built-in-image-pre-download"},"Kruise CloneSet & Advanced StatefulSet InPlace Update Built-in Image Pre-download"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: This scenario no longer requires to deploy ImagePullJob CRD")),(0,r.kt)("p",null,"If you have enabled the ",(0,r.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," feature-gate during ",(0,r.kt)("a",{parentName:"p",href:"../installation#optional-feature-gate"},"Kruise installation or upgrade"),",\nCloneSet & Advanced StatefulSet controller will automatically pre-download the image you want to update to the nodes of all old Pods.\nIt is quite useful to accelerate the progress of applications upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Firstly add openkruise charts repository if you haven\'t do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --set featureGates="PreDownloadImageForInPlaceUpdate=true"\n\n# Those that have been installed need to be upgraded\n$ helm upgrade kruise openkruise/kruise --set featureGates="PreDownloadImageForInPlaceUpdate=true"\n')),(0,r.kt)("p",null,"The parallelism of each new image pre-downloading by CloneSet & Advanced StatefulSet is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", which means the image is downloaded on nodes one by one.\nYou can change the parallelism using the annotation on CloneSet according to the capability of image registry,\nfor registries with more bandwidth and P2P image downloading ability, a larger parallelism can speed up the pre-download process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet/StatefulSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,r.kt)("h4",{id:"kubernetes-native-workload-eg-deployment-statefulset-daemonset-job-etc"},"Kubernetes Native Workload, e.g. Deployment, StatefulSet, DaemonSet, Job etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Configure ImagePullJob CRD in k8s configmap, as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: imagePullJob\ndata:\n  imagepulljob.yaml: |\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: ImagePullJob\n    metadata:\n      name: APP_NAME\n    spec:\n      # pre-download image\n      image: APP_IMAGE\n      parallelism: 10\n      # You can write the names or label selector in the selector field to assign Nodes (only one of them can be set).\n      # If no selector is set, the image will be pulled on all Nodes in the cluster.\n      selector:\n        names:\n        - node-1\n        - node-2\n        matchLabels:\n          node-type: xxx\n      completionPolicy:\n        type: Always\n        activeDeadlineSeconds: 1200\n        ttlSecondsAfterFinished: 300\n      pullPolicy:\n        backoffLimit: 3\n        timeoutSeconds: 300\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Image Pre-download ImagePullJob TASK, and store kubeconfig in secret, as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# kubeconfig\napiVersion: v1\ndata:\n  kubeconfig: xxxxxx\nkind: Secret\nmetadata:\n  name: kubeconfig\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app: helloworld\n  name: helloworld-image-predownload\nspec:\n  params:\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  steps:\n  - name: image-pre-download\n    image: bitnami/kubectl:latest\n    command: [ "sh", "-ce" ]\n    args:\n    - >\n      set -e\n\n      echo "pre-download image"\n\n      cat /var/crd/imagepulljob.yaml | sed \'s#JOB_NAME#$(params.app_name)-$(params.short_sha)#\' | sed \'s#APP_IMAGE#$(params.docker_repo):$(params.branch)-$(params.short_sha)#\' | kubectl apply --kubeconfig=/var/kube/kubeconfig -f -\n    volumeMounts:\n    - name: kubeconfig\n      mountPath: "/var/kube"\n    - name: imagepulljob\n      mountPath: "/var/crd"\n  volumes:\n  - name: kubeconfig\n    secret:\n      secretName: kubeconfig\n  - name: imagepulljob\n    configmap:\n      name: imagepulljob\n')),(0,r.kt)("h3",{id:"tekton-pipeline"},"Tekton Pipeline"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. configure tekton pileline, first executing the Build-Test-DockerPush Task, and second Image Pre-download Task, as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: helloworld-pipeline\nspec:\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  tasks:\n  - name: helloworld-build-push\n    taskRef:\n      name: helloworld-build-push\n    params:\n    - name: gitrepositoryurl\n      value: $(params.gitrepositoryurl)\n    - name: short_sha\n      value: $(params.short_sha)\n    - name: branch\n      value: $(params.branch)\n    - name: docker_repo\n      value: $(params.docker_repo)\n    - name: app_name\n      value: $(params.app_name)\n  - name: helloworld-image-predownload\n  taskRef:\n    name: helloworld-image-predownload\n    params:\n    - name: short_sha\n      value: $(params.short_sha)\n    - name: branch\n      value: $(params.branch)\n    - name: docker_repo\n      value: $(params.docker_repo)\n    - name: app_name\n      value: $(params.app_name)\n    runAfter:\n    - helloworld-build-push\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Configure PipelineRun CRD, and kubectl apply -f in k8s cluster to run Pipeline, as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: helloworld-pipeline-run-1\nspec:\n  pipelineRef:\n    name: helloworld-pipeline\n    params:\n    - name: gitrepositoryurl\n      value: https://github.com/zmberg/samples.git\n    - name: branch\n      value: hello_world\n    - name: short_sha\n      value: d92ae174b\n    - name: docker_repo\n      value: zhaomingshan/kruise\n    - name: app_name\n      value: helloworld\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. The execution results can be viewed via the tekton command line tool tkn, as follows:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tekton pipeline",src:t(4414).Z})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article aims to combine the image pre-download capability provided by OpenKruise with CI Pipeline, which can greatly improve the deployment efficiency of users in the application deployment phase and reduce the pressure on image repositories in large-scale deployments.\nA later article will focus on the CD Pipeline application deployment phase, so stay tuned."))}u.isMDXComponent=!0},9040:function(e,n,t){n.Z=t.p+"assets/images/ci_cd_pipeline-5a5af4826d9617c6d0f4890f07507d77.png"},5209:function(e,n,t){n.Z=t.p+"assets/images/helloworld-570f327bedc9fe2c77218f9728025ffb.png"},944:function(e,n,t){n.Z=t.p+"assets/images/imagepulljob-ac04817d1f28ee088deaa785eaeed33d.png"},4414:function(e,n,t){n.Z=t.p+"assets/images/tekton_pipeline-0a1ffac26f87a5a1a38520724b9f861d.png"}}]);