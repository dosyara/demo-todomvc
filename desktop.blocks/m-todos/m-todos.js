modules.define('m-todos', ['model', 'm-todo-item'], function(provide, MODEL) {
    provide(MODEL.decl(this.name, {
        items: {
            type: 'models-list',
            modelName: 'm-todo-item'
        },

        allDone: {
            type: 'boolean',
            calculate: function() {
                return this.get('items').every(function(item) {
                    return item.get('done') === true;
                });
            },
            dependsFrom: 'items'
        }
    }));
});
