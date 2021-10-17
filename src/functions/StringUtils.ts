export default class StringUtils {
    public static formattedInlineStrings(list: string[]) {
        let word = ''

        list.forEach((item) => {
            word += item + ', '
        })

        return word.replace(/(([,\s]$|[,\s]+))$/, '')
    }

    public static processTextValueToDefault(text: String) {
        if (text == undefined || text.length == 0) {
            return 'NONE'
        } else {
            return text.toUpperCase()
        }
    }

    public static splitString(raw: string, splitter: string): string[] {
        return raw.split(splitter)
    }

    public static checkComplexity(raw: string): boolean {
        return raw.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,20}/).length > 0
    }
    public static sanitizeValue(value) {
        if (value && value != 'null' && value != '0' && value != 0) {
            return value
        } else {
            return 'unknown'
        }
    }

}