export function rupiah(angka) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0

    }).format(angka);

}

export function summarizePieces(pieces){

    const map={};

    pieces.forEach(x=>{

        map[x]=(map[x]||0)+1;

    });

    return map;

}