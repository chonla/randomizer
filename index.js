const alpha = 'abcdefghijklmnopqrstuvwxyz'
const alphaUpper = alpha.toUpperCase()
const alphaMixed = alpha + alphaUpper
const numeric = '0123456789'
const alphaNumeric = alpha + numeric
const alphaNumericUpper = alphaUpper + numeric
const alphaNumericMixed = alphaMixed + numeric
const hex = '0123456789abcdef'
const hexUpper = hex.toUpperCase()
const hexMixed = hex + 'ABCDEF'
const defaultLength = 10

class Randomizer {
    static LOWERCASE = 'lower'
    static UPPERCASE = 'upper'
    static MIXEDCASE = 'mixed'

    static ALPHA = 'alpha'
    static NUMERIC = 'numeric'
    static ALPHANUMERIC = 'alphanumeric'
    static HEX = 'hex'
    static CUSTOM = 'custom'

    constructor() {
        this.charmap = {
            lower: {
                alpha: alpha,
                numeric: numeric,
                alphanumeric: alphaNumeric,
                hex: hex
            },
            upper: {
                alpha: alphaUpper,
                numeric: numeric,
                alphanumeric: alphaNumericUpper,
                hex: hexUpper
            },
            mixed: {
                alpha: alphaMixed,
                numeric: numeric,
                alphanumeric: alphaNumericMixed,
                hex: hexMixed
            }
        }
    }

    // Short hands
    alpha(length) {
        return this.get({
            type: Randomizer.ALPHA,
            length: length,
            case: Randomizer.LOWERCASE
        })
    }

    numeric(length) {
        return this.get({
            type: Randomizer.NUMERIC,
            length: length,
            case: Randomizer.LOWERCASE
        })
    }

    hex(length) {
        return this.get({
            type: Randomizer.HEX,
            length: length,
            case: Randomizer.LOWERCASE
        })
    }

    alphanumeric(length) {
        return this.get({
            type: Randomizer.ALPHANUMERIC,
            length: length,
            case: Randomizer.LOWERCASE
        })
    }

    custom(length, charset) {
        return this.get({
            type: Randomizer.CUSTOM,
            length: length,
            case: Randomizer.LOWERCASE,
            charset: charset
        })
    }

    // Low level
    get(options) {
        const defaultOptions = {
            type: Randomizer.ALPHA,
            length: defaultLength,
            case: Randomizer.LOWERCASE,
            charset: ''
        }

        options = Object.assign(defaultOptions, options)

        // validate
        if (options.length <= 0) {
            options.length = defaultLength
        }

        if (options.type !== 'custom') {
            options.charset = this.charmap[options.case][options.type]
        }

        const charlen = options.charset.length
        let out = ''
        if (charlen > 0) {
            for (let i = 0; i < options.length; i++) {
                out += options.charset[Math.floor(Math.random() * charlen)]
            }
        }

        return out
    }
}

module.exports = Randomizer