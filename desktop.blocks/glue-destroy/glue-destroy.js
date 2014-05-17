modules.define('glue-destroy', ['i-bem__dom', 'glue'], function(provide, BEMDOM, Glue) {
    provide(BEMDOM.decl({ block: this.name, baseBlock: Glue }, {
        onSetMod: {
            js: {
                inited: function() {
                    this.__base();

                    this.bindTo('click', function() {
                        this.model.destruct();
                    });
                }
            }
        }
    }));
});
