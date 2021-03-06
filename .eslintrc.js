module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': ['warn'],
        'no-plusplus': ['off'],
        'no-new-func': ['off'],
        'no-eval': 'off'
    }
};
