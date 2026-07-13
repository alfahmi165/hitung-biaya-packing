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