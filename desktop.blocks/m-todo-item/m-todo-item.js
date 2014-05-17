modules.define('m-todo-item', ['model'], function(provide, MODEL) {
    provide(MODEL.decl(this.name, {
        todoId: 'id',
        done: 'boolean',
        text: 'string'
    }));
});
