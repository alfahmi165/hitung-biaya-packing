export function optimizePieces(pieces, stockLength) {

    const sorted = [...pieces].sort((a, b) => b - a);

    const stocks = [];

    sorted.forEach(piece => {

        let placed = false;

        for (const stock of stocks) {

            const used =
                stock.reduce((a, b) => a + b, 0);

            if (used + piece <= stockLength) {

                stock.push(piece);

                placed = true;

                break;

            }

        }

        if (!placed) {

            stocks.push([piece]);

        }

    });

    return stocks;

}