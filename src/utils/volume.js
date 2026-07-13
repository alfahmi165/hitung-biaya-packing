export function volumeKg(p, l, t) {

    return Number(

        ((p * l * t) / 5000).toFixed(2)

    );

}