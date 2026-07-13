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