({
    block: 'page',
    title: 'TodoMVC',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    tag: 'h1',
                    content: 'todos'
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'todos',
                    content: [
                        {
                            elem: 'new-item',
                            content: [
                                {
                                    block : 'checkbox',
                                    mix: [{ block: 'todos', elem: 'all-done' }],
                                    mods : { theme : 'normal', size : 'l', type : 'simple' },
                                    name : 'all-done'
                                },
                                {
                                    block : 'input',
                                    mix: [{ block: 'todos', elem: 'new-item-text' }],
                                    mods : { theme : 'simple', size : 'l' },
                                    val : '',
                                    placeholder: 'What needs to be done?'
                                }
                            ]
                        },
                        {
                            elem: 'items',
                            content: [
                                {
                                    elem: 'item',
                                    mods: { completed: true },
                                    content: [
                                        {
                                            block : 'checkbox',
                                            mix: [{ block: 'todos', elem: 'done' }],
                                            mods : { theme : 'normal', size : 'm', type : 'simple', checked: true },
                                            name : 'done'
                                        },
                                        {
                                            elem: 'item-text',
                                            tag: 'label',
                                            content: 'uno'
                                        },
                                        {
                                            block : 'button',
                                            mix: [{ block: 'todos', elem: 'item-delete' }],
                                            mods : { theme : 'simple' },
                                            text : '✖'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    mods: { completed: false },
                                    content: [
                                        {
                                            block : 'checkbox',
                                            mix: [{ block: 'todos', elem: 'done' }],
                                                mods : { theme : 'normal', size : 'm', type : 'simple', checked: false },
                                            name : 'done'
                                        },
                                        {
                                            elem: 'item-text',
                                            tag: 'label',
                                            content: 'due'
                                        },
                                        {
                                            block : 'button',
                                            mix: [{ block: 'todos', elem: 'item-delete' }],
                                            mods : { theme : 'simple' },
                                            text : '✖'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'actions',
                            content: [
                                {
                                    elem: 'items-left',
                                    content: [
                                        { tag: 'b', content: 1 },
                                        ' item left'
                                    ]
                                },
                                {
                                    elem: 'filters',
                                    content: [
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
                                            mods: { pseudo: true },
                                            url: '#/',
                                            content: 'All'
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
                                            mods: { pseudo: true },
                                            url: '#/active',
                                            content: 'Active'
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
                                            mods: { pseudo: true },
                                            url: '#/completed',
                                            content: 'Completed'
                                        }
                                    ]
                                },
                                {
                                    block: 'button',
                                    mix: [
                                        {
                                            block: 'todos',
                                            elem: 'clear-completed',
                                            mods: { visible: true }
                                        }
                                    ],
                                    mods : { theme: 'simple', size: 's' },
                                    content: [
                                        'Clear completed (1)'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'Created with ',
                {
                    block: 'link',
                    url: 'https://github.com/bem/bem-mvc',
                    content: 'bem-mvc'
                }
            ]
        }
    ]
})