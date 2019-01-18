App.loadBundle("19zg96sf",["exports"],function(e){var t=window.App.h,n=function(){function e(){this.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}return e.prototype.todoInputSubmiHandler=function(e){this.list=this.list.concat([{text:e.detail,checked:!1}])},e.prototype.todoItemCheckedHandler=function(e){var t=this.list.slice(),n=t[e.detail];t[e.detail]=Object.assign({},n,{checked:!n.checked}),this.list=t},e.prototype.todoItemRemoveHandler=function(e){this.list=this.list.slice(0,e.detail).concat(this.list.slice(e.detail+1))},e.prototype.render=function(){return t("div",null,t("h1",null,"Todos Stencil"),t("section",null,t("todo-input",null),t("ul",{id:"list-container"},this.list.map(function(e,n){return t("todo-item",{checked:e.checked,text:e.text,index:n})}))))},Object.defineProperty(e,"is",{get:function(){return"my-todo"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{list:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"onTodoInputSubmit",method:"todoInputSubmiHandler"},{name:"onTodoItemChecked",method:"todoItemCheckedHandler"},{name:"onTodoItemRemove",method:"todoItemRemoveHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-my-todo-h{display:block}h1.sc-my-todo{font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15)}section.sc-my-todo{background:#fff;margin:130px 0 40px;position:relative;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}#list-container.sc-my-todo{margin:0;padding:0;list-style:none;border-top:1px solid #e6e6e6}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){var e=this;this.handleOnSubmit=function(t){t.preventDefault(),e.value&&(e.onTodoInputSubmit.emit(e.value),e.value="")},this.handleInputChange=function(t){return e.value=t.target.value}}return e.prototype.render=function(){return t("form",{onSubmit:this.handleOnSubmit},t("input",{id:"input-submit",value:this.value,type:"text",placeholder:"What needs to be done?",onInput:this.handleInputChange}))},Object.defineProperty(e,"is",{get:function(){return"todo-input"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onTodoInputSubmit",method:"onTodoInputSubmit",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-todo-input-h{display:block}form.sc-todo-input{border-bottom:1px solid #ededed}form.sc-todo-input, input.sc-todo-input{position:relative;font-size:24px}input.sc-todo-input{background:rgba(0,0,0,.003);margin:0;width:100%;font-family:inherit;font-weight:inherit;line-height:1.4em;outline:none;color:inherit;padding:6px;border:1px solid #ccc;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){var e=this;this.handleOnRemove=function(){return e.onTodoItemRemove.emit(e.index)},this.handleOnChecked=function(){return e.onTodoItemChecked.emit(e.index)}}return e.prototype.render=function(){return t("li",{class:this.checked?"completed":""},t("input",{type:"checkbox",checked:this.checked,onChange:this.handleOnChecked}),t("label",null,this.text),t("button",{onClick:this.handleOnRemove},"x"))},Object.defineProperty(e,"is",{get:function(){return"todo-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked"},index:{type:Number,attr:"index"},text:{type:String,attr:"text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onTodoItemChecked",method:"onTodoItemChecked",bubbles:!0,cancelable:!0,composed:!0},{name:"onTodoItemRemove",method:"onTodoItemRemove",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-todo-item-h, li.sc-todo-item{display:block}li.sc-todo-item{font-size:24px;position:relative;border-bottom:1px solid #ededed}li.sc-todo-item   input.sc-todo-item{text-align:center;width:40px;height:auto;position:absolute;top:9px;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}li.sc-todo-item   input.sc-todo-item:after{content:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>')}li.sc-todo-item   input.sc-todo-item:checked:after{content:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>')}li.sc-todo-item   label.sc-todo-item{white-space:pre;word-break:break-word;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}li.completed.sc-todo-item   label.sc-todo-item{color:#d9d9d9;text-decoration:line-through}li.sc-todo-item   button.sc-todo-item, li.sc-todo-item   input[type=checkbox].sc-todo-item{outline:none}li.sc-todo-item   button.sc-todo-item{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;font-size:30px;color:#cc9a9a;margin:auto 0 11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}li.sc-todo-item   button.sc-todo-item:hover{color:#af5b5e}"},enumerable:!0,configurable:!0}),e}();e.MyTodo=n,e.TodoInput=o,e.TodoItem=i,Object.defineProperty(e,"__esModule",{value:!0})});