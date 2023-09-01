import{o as r,c as d,d as e,w as n,a,t as o}from"./index-11535bd6.js";import{E as c,a as u}from"./el-tag-1f27b791.js";const _=a("h1",null,"App 最外层容器",-1),m=a("p",null,o("原则上请一定要使用此组件，除非你开发的页面外观特殊。"),-1),h=a("p",null,o("此组件内部包含了一个二次封装过的 <van-nav-bar /> 组件，你只需要简单地配置一下即可使用。"),-1),b=a("h2",null,"Attributes",-1),f=a("div",{style:{height:"30px"}},null,-1),y=a("h2",null,"Events",-1),v=a("h2",null,"Slots",-1),A={__name:"app-container",setup(w){const s=[{name:"title",description:"页头标题",type:"String",values:" — ",defaultValue:" — "},{name:"canPop",description:"是否显示页头左侧的后退按钮，如果展示的话，点击则是默认的后退动作",type:"Boolean",values:" — ",defaultValue:"false"},{name:"moreActions",description:"是否显示页头右侧的“更多操作”按钮，你可以通过配置数组中的内容来决定都有哪些操作",type:"Array",values:" — ",defaultValue:" — "},{name:"backFn",description:"（仅在canPop = true时有意义）如果你需要拦截并自定义后退动作，那么你可以用此函数来替代",type:"Function",values:" — ",defaultValue:" — "}],i=[{name:"action",description:"当定义了顶部条“更多操作”后，点击当中的一条时触发",args:"text, index"}],p=[{name:" - ",description:"如果你想要使用此组件的顶部条，但是又不想使用 #body 插槽的默认嵌套样式，则可以使用此插槽"},{name:"title",description:"用于替代顶部文字标题"},{name:"top-right",description:"如果你需要在右上方添加特殊物件，可使用此插槽"},{name:"body",description:"用于插入主要内容"}];return(V,g)=>{const t=u,l=c;return r(),d("main",null,[_,m,h,b,e(l,{data:s,style:{width:"100%"}},{default:n(()=>[e(t,{prop:"name",label:"属性名",width:"180"}),e(t,{prop:"description",label:"说明",width:"300"}),e(t,{prop:"type",label:"类型"}),e(t,{prop:"values",label:"可选值"}),e(t,{prop:"defaultValue",label:"默认值"})]),_:1}),f,y,e(l,{data:i,style:{width:"100%"}},{default:n(()=>[e(t,{prop:"name",label:"事件名",width:"180"}),e(t,{prop:"description",label:"说明",width:"400"}),e(t,{prop:"args",label:"回调参数"})]),_:1}),v,e(l,{data:p,style:{width:"100%"}},{default:n(()=>[e(t,{prop:"name",label:"插槽名",width:"180"}),e(t,{prop:"description",label:"说明"})]),_:1})])}}};export{A as default};