module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                printWidth: 180, //一行的字符数，如果超过会进行换行，默认为80
                tabWidth: 4, //一个tab代表几个空格数，默认为80
                useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
                singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
                semi: true, //行位是否使用分号，默认为true
                trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
                bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
                parser: 'typescript' //代码的解析引擎，默认为babylon，与babel相同。
            }
        ],
        '@typescript-eslint/consistent-type-imports': ['warn'],
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }
        ],
        // "comma-dangle": [
        //   "error",
        //   {
        //     arrays: "never",
        //     objects: "always-multiline",
        //     imports: "never",
        //     exports: "never",
        //     functions: "ignore",
        //   },
        // ],
        'no-restricted-globals': ['error', 'event', 'fdescribe']
    }
};
