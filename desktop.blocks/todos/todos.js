modules.define(
    'todos',
    ['i-bem__dom', 'BEMHTML', 'keyboard__codes', 'glue', 'm-todos'],
    function(provide, BEMDOM, BEMHTML, keyboardCodes, Glue, mTodos) {

provide(BEMDOM.decl({ block: this.name, baseBlock: Glue }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base();

                this._newiItemText = this.findBlockInside('new-item-text', 'input');

                this._newiItemText.bindTo('keypress', function(e) {
                    var newText = this._newiItemText.getVal();

                    if (e.keyCode === keyboardCodes.ENTER && newText) {
                        this.model.get('items').add({
                            todoId: +new Date,
                            done: false,
                            text: newText
                        });

                        this._newiItemText.setVal('');
                    }
                }.bind(this));

                this.model.on('items', 'change', function() {
                    this._udpateItems();
                }, this);

                this._udpateItems();
            }
        }
    },

    _udpateItems: function() {
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
    }

}));

});
