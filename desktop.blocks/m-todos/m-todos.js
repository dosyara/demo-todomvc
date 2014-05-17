modules.define('m-todos', ['model', 'm-todo-item'], function(provide, MODEL) {
    provide(MODEL.decl(this.name, {
        items: {
            type: 'models-list',
            modelName: 'm-todo-item'
        },

        show: 'string',

        allDone: {
            type: 'boolean',
            calculate: function(itemsLeft) {
                return !itemsLeft;
            },
            dependsFrom: 'itemsLeft'
        },

        itemsLeft: {
            type: 'number',
            precision: 0,
            calculate: function() {
                return this.get('items').length() - this.get('items').filter(function(item) {
                    return item.get('done') === true;
                }).length;
            },
            dependsFrom: 'items'
        },

        itemsDone: {
            type: 'number',
            precision: 0,
            calculate: function() {
                return this.get('items').filter(function(item) {
                    return item.get('done') === true;
                }).length;
            },
            dependsFrom: 'items'
        }
    }));
});
