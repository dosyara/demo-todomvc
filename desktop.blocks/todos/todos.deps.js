[
    {
        tech: 'js',
        shouldDeps: [
            {
                block: 'todos',
                tech: 'bemhtml'
            },
            {
                block: 'checkbox',
                mods: { size: 'm', theme: 'normal' },
                tech: 'bemhtml'
            },
            {
                block: 'button',
                mods: {
                    size: ['m', 's'],
                    pseudo: 'yes',
                    theme: 'normal'
                },
                tech: 'bemhtml'
            }
        ]
    },
    {
        mustDeps : [
            { block : 'i-bem', elems : ['dom', 'i18n'] },
            { block : 'model' },
            { block : 'm-todo-item' },
            { block : 'm-todos' },
            { block : 'glue' }
        ],
        shouldDeps : [
        ]
    }
]
