modules.define('m-todos', ['model', 'm-todo-item'], function(provide, MODEL) {
    provide(MODEL.decl(this.name, {
        items: {
            type: 'models-list',
            modelName: 'm-todo-item'
        }
    }));
});
