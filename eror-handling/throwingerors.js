// Contoh 1
// const json = '{"name" : "Arif", "age" : 20, "study" : "teknik informatika"}';

// try {
//     const mhs = JSON.parse(json);
//     console.log(mhs.name);
//     console.log(mhs.age);
//     console.log(mhs.study);
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
// }

// ketika json string tidak sesuai dengan format object JavaScript
// const json = '{ bad json }';

// try {
//     const user = JSON.parse(json);
//     console.log(user.name);
//     console.log(user.age);
// } catch(error){
//     console.log(error.name);
//     console.log(error.messaage);
// }

// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//     const user = JSON.parse(json);

//     if(!user.name){
//         throw new SyntaxError("'name' is required.");
//     }

//     errorCode;

//     console.log(user.name);
//     console.log(user.age);

// } catch(error){
//     console.log(`JSON Error : ${error.message}`);     
// }

// const json = '{ "name": "Yoda",  "age": 20  }';
// try{
//     const user = JSON.parse(json);

//     if(!user.name){
//         console.log("'name' : is required. ");
//     }

//     console.log(user.name);
//     console.log(user.age);

// } catch(error) {
//     if (error instanceof SyntaxError){
//         console.log(`JSON Error : ${error.message}`);
//     } else if (error instanceof ReferenceError){
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }


class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = 'VallidationError';
    }
}

const json = '{"age":20}';

try {
    const user = JSON.parse(json);

    if(!user.name){
        throw new ValidationError("'name' is required.");
    }

    if (!user.age){
        throw new ValidationError("'age' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch(error){
    if (error instanceof SyntaxError){
        console.log(`JSON Syntax Error: ${error.message}`);
    }
    else if (error instanceof ReferenceError){
        console.log(`Invalid Data: ${error.message}`);
    }
    else {
        console.log(error.stack);
    }
}





// ==== PENJELASAN ====

/*
message adalah parameter dari constructor ValidationError. Ketika Anda membuat instance objek dari kelas ValidationError, Anda dapat melewatkan pesan kesalahan sebagai argumen saat pembuatan instance. Parameter ini mewakili pesan yang akan ditampilkan ketika objek kesalahan diciptakan.

Error adalah kelas bawaan JavaScript yang digunakan untuk menciptakan objek kesalahan. Dalam konteks extends Error, Anda sedang meng-extend (mewarisi) sifat dan perilaku kelas bawaan Error untuk digunakan dalam kelas yang Anda definisikan sendiri (ValidationError dalam hal ini). Dengan mewarisi dari Error, Anda dapat menggunakan super(message) dalam constructor untuk memanggil constructor dari kelas Error yang mengharapkan pesan kesalahan sebagai argumen.

Dengan cara ini, ketika Anda membuat instance dari ValidationError, Anda dapat meneruskan pesan kesalahan melalui konstruktor. Dalam konstruktor ValidationError, Anda menggunakan super(message) untuk meneruskan pesan ke constructor kelas Error, sehingga menginisialisasi pesan kesalahan dalam instance objek yang dibuat.

Deklarasi JSON dan Blok Try-Catch: Kode dimulai dengan mendeklarasikan variabel json yang berisi string JSON yang akan di-parse. Kemudian, kode berlanjut dengan blok try yang akan menangkap dan mengelola kesalahan yang terjadi dalam blok ini.

JSON Parsing: Di dalam blok try, baris const user = JSON.parse(json); digunakan untuk mem-parsing string JSON ke dalam objek JavaScript. Jika parsing berhasil, objek user akan berisi data yang diambil dari JSON.

Pengecekan Properti 'name': Setelah parsing JSON berhasil, kode melakukan pemeriksaan apakah properti name ada dalam objek user. Jika tidak ada, pesan kesalahan akan dicetak, mengingatkan bahwa properti 'name' diperlukan.

Cetak Nama dan Usia Pengguna: Jika properti 'name' ada dalam objek user, kode mencetak nilai user.name dan user.age ke konsol.

Blok Catch: Jika terjadi kesalahan dalam blok try, eksekusi kode akan berpindah ke blok catch. Di dalam blok catch, kesalahan yang terjadi akan diperiksa menggunakan serangkaian pernyataan if else.

Jika kesalahan merupakan SyntaxError, berarti ada kesalahan dalam struktur JSON, dan pesan kesalahan akan dicetak beserta pesan kesalahan spesifik.
Jika kesalahan merupakan ReferenceError, berarti ada penggunaan variabel yang belum dideklarasikan. Pesan kesalahan akan dicetak.
Jika jenis kesalahan tidak sesuai dengan yang dijelaskan di atas, maka stack trace dari kesalahan tersebut akan dicetak.

Blok try dan catch digunakan untuk mengatasi kesalahan yang mungkin terjadi selama eksekusi kode. Dalam kasus ini, blok try digunakan untuk mengelola kemungkinan kesalahan saat parsing JSON, serta kesalahan yang mungkin muncul saat mengakses properti objek yang tidak ada. Blok catch memberikan mekanisme untuk menangani jenis kesalahan yang berbeda dengan cara yang sesuai.
*/
