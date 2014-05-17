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
                    js: {
                        modelName: 'm-todos',
                        modelId: 1,
                        modelData: {
                            items: [
                                {
                                    todoId: 1,
                                    done: false,
                                    text: 'задать вопросы'
                                },
                                {
                                    todoId: 2,
                                    done: false,
                                    text: 'поесть печенек'
                                },
                                {
                                    todoId: 3,
                                    done: false,
                                    text: 'bit.ly/msk-bemup-feedback'
                                }
                            ]
                        }
                    },
                    content: [
                        {
                            elem: 'new-item',
                            content: [
                                {
                                    block : 'checkbox',
                                    mix: [
                                        { block: 'todos', elem: 'all-done' },
                                        {
                                            block: 'todos',
                                            elem: 'model-field',
                                            js: {
                                                name: 'allDone',
                                                type: 'checkbox'
                                            }
                                        }
                                    ],
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
                            mix: [{
                                block: 'todos',
                                elem: 'model-field',
                                js: {
                                    type: 'mod',
                                    name: 'show',
                                    block: 'todos',
                                    elem: 'items',
                                    modName: 'show'
                                }
                            }],
                            data: [ ]
                        },
                        {
                            elem: 'actions',
                            content: [
                                {
                                    elem: 'items-left',
                                    content: [
                                        { tag: 'b', content: 3 },
                                        ' item left'
                                    ]
                                },
                                {
                                    elem: 'filters',
                                    content: [
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
                                            url: '#/',
                                            content: 'All'
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
                                            url: '#/active',
                                            content: 'Active'
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'todos', elem: 'filter' },
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
                                        'Clear completed (',
                                        {
                                            elem: 'done-count',
                                            tag: 'span',
                                            mix: {
                                                block: 'todos',
                                                elem: 'model-field',
                                                js: {
                                                    name: 'itemsDone',
                                                    type: 'inline'
                                                }
                                            },
                                            content: 0
                                        },
                                        ')'
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
