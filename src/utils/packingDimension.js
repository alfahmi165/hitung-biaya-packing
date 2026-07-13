export function getPackingDimension(p, l, t, type) {

    switch (type) {

        case "wrapping":
            return {
                p,
                l,
                t
            }

        case "bubble":
        case "kardus":
            return {
                p: p + 1,
                l: l + 1,
                t: t + 1
            }

        case "kayu":
            return {
                p: p + 8,
                l: l + 8,
                t: t + 8
            }

        default:
            return {
                p,
                l,
                t
            }

    }

}