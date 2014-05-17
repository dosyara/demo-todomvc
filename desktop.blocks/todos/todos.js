modules.define(
    'todos',
    ['i-bem__dom', 'BEMHTML', 'keyboard__codes'],
    function(provide, BEMDOM, BEMHTML, keyboardCodes) {

provide(BEMDOM.decl({ block: this.name }, {
    onSetMod: {
        js: {
            inited: function() {
                this._newiItemText = this.findBlockInside('new-item-text', 'input');

                this._newiItemText.bindTo('keypress', function(e) {
                    var newText = this._newiItemText.getVal();

                    if (e.keyCode === keyboardCodes.ENTER && newText) {
                        console.log('todo');
                    }
                }.bind(this));
            }
        }
    },

    _buildItems: function(items) {
        return items && BEMHTML.apply(items.map(function(item) {
            return  {
                block: 'todos',
                elem: 'item',
                todoId: item.itemId,
                done: item.done,
                text: item.text
            }
        }));
    }

}));

});
