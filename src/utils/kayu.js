import { getConfig } from "./config";
import { rupiah } from "./helper";
import { volumeKg } from "./volume";
import { getPackingDimension } from "./packingDimension";
import { optimizePieces } from "./ffd";

function getLargestFace(p, l, t) {

    const faces = [

        {
            width: p,
            height: l,
            depth: t,
            area: p * l
        },

        {
            width: p,
            height: t,
            depth: l,
            area: p * t
        },

        {
            width: l,
            height: t,
            depth: p,
            area: l * t
        }

    ];

    faces.sort((a, b) => b.area - a.area);

    return faces[0];

}

function calculateGrid(width, height) {

    const horizontal = Math.max(
        2,
        Math.ceil(height / 40) + 1
    );

    const vertical = Math.max(
        3,
        Math.ceil(width / 40) + 1
    );

    return {

        horizontal,

        vertical

    };

}

function generatePanelPieces(face, grid) {

    const pieces = [];

    for (let i = 0; i < grid.horizontal; i++) {

        pieces.push(face.width);

    }

    for (let i = 0; i < grid.vertical; i++) {

        pieces.push(face.height);

    }

    return pieces;

}

function generateLockPieces(depth, count) {

    const pieces = [];

    for (let i = 0; i < count; i++) {

        pieces.push(depth + 8);

    }

    return pieces;

}

function splitLongPieces(pieces) {

    const hasil = [];

    pieces.forEach(piece => {

        let sisa = piece;

        while (sisa > 160) {

            hasil.push(160);

            sisa -= 160;

            hasil.push(20);

        }

        hasil.push(sisa);

    });

    return hasil;

}

function summarizePieces(pieces) {

    const map = {};

    pieces.forEach(p => {

        map[p] = (map[p] || 0) + 1;

    });

    return map;

}

export function calculateKayu(p, l, t) {
    const config = getConfig();
    const dim = getPackingDimension(
        p,
        l,
        t,
        "kayu"
    );

    const face = getLargestFace(
        p,
        l,
        t
    );

    const grid = calculateGrid(
        face.width,
        face.height
    );

    const panelPieces = [

        ...generatePanelPieces(face, grid),

        ...generatePanelPieces(face, grid)

    ];

    const lockPieces = generateLockPieces(

        face.depth,

        panelPieces.length

    );

    const pieces = splitLongPieces([

        ...panelPieces,

        ...lockPieces

    ]);

    const summary = summarizePieces(pieces);

    const batang = optimizePieces(
        pieces,
        config.kayu.panjangBatang
    );

    const modal =
        batang.length *
        config.kayu.hargaBatang;

    return {

        volumeBarang:
            volumeKg(p, l, t) + " Kg",

        volumePacking:
            volumeKg(
                dim.p,
                dim.l,
                dim.t
            ) + " Kg",

        bahan:

            Object.entries(summary)

                .map(

                    ([u, j]) =>

                        `${u} cm × ${j}`

                )

                .join(", "),

        jumlahBatang:
            batang.length,

        modal:
            rupiah(modal),

        harga:
            rupiah(
                modal +
                config.kayu.margin
            )

    };

}