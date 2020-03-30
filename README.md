# Randomizer

Just a string randomizer.

## Usage

```
const Randomizer = require('@chonla/randomizer')
const rnd = new Randomizer()
console.log(rnd.alphanumeric(40))
console.log(rnd.get({
    type: 'custom',
    length: 32,
    charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
}))
```

## License

[MIT](LICENSE)