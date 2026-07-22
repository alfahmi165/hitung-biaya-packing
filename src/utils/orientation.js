export function getOrientation(p, l, t, maxWidth) {


    /*
    =========================
    PENDEKATAN 1
    =========================

    Cari:
    2(P+L)
    2(P+T)
    2(L+T)

    pilih yang <= lebar
    paling mendekati
    */


    const approach1 = [

        {
            ukuran: 2 * (p + l),
            panjang: l + t
        },

        {
            ukuran: 2 * (p + t),
            panjang: l + t
        },

        {
            ukuran: 2 * (l + t),
            panjang: p + t
        }

    ];


    const hasil1 =
        approach1
            .filter(
                x => x.ukuran <= maxWidth
            )
            .sort(
                (a,b)=>
                b.ukuran-a.ukuran
            );


    if(hasil1.length > 0){

        return {

            panjang:
            hasil1[0].panjang,

            strip:1,

            metode:"Pendekatan 1"

        };

    }



    /*
    =========================
    PENDEKATAN 2
    =========================

    Jika tidak ada

    Cari:

    P+L
    P+T
    L+T

    <= width

    */


    const approach2 = [

        {
            ukuran:p+l,
            panjang:2*(l+t)
        },

        {
            ukuran:p+t,
            panjang:2*(l+t)
        },

        {
            ukuran:l+t,
            panjang:2*(p+t)
        }

    ];


    const hasil2 =
        approach2
        .filter(
            x=>x.ukuran<=maxWidth
        )
        .sort(
            (a,b)=>
            b.ukuran-a.ukuran
        );


    if(hasil2.length>0){

        return {

            panjang:
            hasil2[0].panjang,

            strip:1,

            metode:"Pendekatan 2"

        };

    }



    /*
    =========================
    PENDEKATAN 3
    =========================

    Semua tidak muat

    gunakan multi strip

    */


    const semua = [

        {
            nama:"2(P+L)",
            orientasi:2*(p+l),
            panjang:l+t
        },

        {
            nama:"2(P+T)",
            orientasi:2*(p+t),
            panjang:l+t
        },

        {
            nama:"2(L+T)",
            orientasi:2*(l+t),
            panjang:p+t
        }

    ];



    let terbaik=null;


    semua.forEach(item=>{


        const strip =
        Math.ceil(
            item.orientasi /
            maxWidth
        );


        const total =
        item.panjang *
        strip;



        if(
            terbaik===null ||
            total < terbaik.total
        ){

            terbaik={

                panjang:
                item.panjang,

                strip,

                total,

                metode:"Pendekatan 3"

            };

        }


    });


    return terbaik;

}
