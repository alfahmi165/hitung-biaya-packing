function calculateGrid(width, height) {

    const horizontal =
        Math.max(
            2,
            Math.ceil(height / 40) + 1
        );

    const vertical =
        Math.max(
            3,
            Math.ceil(width / 40) + 1
        );

    return {

        horizontal,

        vertical

    };

}