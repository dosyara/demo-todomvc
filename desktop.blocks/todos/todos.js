modules.define(
    'todos',
    ['i-bem__dom', 'BEMHTML', 'keyboard__codes', 'glue', 'm-todos', 'next-tick'],
    function(provide, BEMDOM, BEMHTML, keyboardCodes, Glue, mTodos, nextTick) {

provide(BEMDOM.decl({ block: this.name, baseBlock: Glue }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base();

                this._newiItemText = this.findBlockInside('new-item-text', 'input');
                this._allDoneChecbox = this.findBlockOn('all-done', 'checkbox');

                this
                    .bindTo('new-item-text', 'keypress', function(e) {
                        var newText = this._newiItemText.getVal();

                        if (e.keyCode === keyboardCodes.ENTER && newText) {
                            this.model.get('items').add({
                                todoId: +new Date,
                                done: false,
                                text: newText
                            });

                            this._newiItemText.setVal('');
                        }
                    }.bind(this))
                    .bindToWin('hashchange', function() {
                        this.model.set('show', this._getShowType());
                    }.bind(this));

                this.bindTo('clear-completed', 'click', function() {
                    this.model.get('items')
                        .filter(function(item) {
                            return item.get('done');
                        })
                        .forEach(function(item) {
                            item.destruct();
                        });
                });

                this._allDoneChecbox.bindTo('click', function() {
                    nextTick(function() {
                        var state = this._allDoneChecbox.hasMod('checked'),
                            todoItems = this.model.get('items');

                        todoItems.forEach(function(item) {
                            item.set('done', state);
                        });
                    }.bind(this));
                }.bind(this));

                this.model
                    .on('items', 'change', function() {
                        this._updateItems();
                    }, this)
                    .on('itemsLeft', 'change', function() {
                        var itemsLeft = this.model.get('itemsLeft');

                        BEMDOM.update(this.elem('items-left'), itemsLeft == 0
                            ? '<b>All done</b>'
                            : itemsLeft == 1
                            ? '<b>1</b> item left'
                            : '<b>' + itemsLeft + '</b>' + ' items left');

                    }, this);

                this._updateItems();
                this.model.set('show', this._getShowType());
            }
        }
    },

    _updateItems: function() {
        BEMDOM.update(this.elem('items'), this._buildItems(this.model.toJSON().items));
    },

    _buildItems: function(items) {
        return items && BEMHTML.apply(items.map(function(item) {
            return  {
                block: 'todos',
                elem: 'item',
                todoId: item.todoId,
                done: item.done,
                text: item.text
            }
        }));
    },

    _getShowType: function() {
        switch (window.location.hash) {
            case '#/active':
                return 'active';
            case '#/completed':
                return 'completed';
            default:
                return 'all';
        }
    }
}));

});
