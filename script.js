//genre
// Action, comedy, Horor, Romantic, Drama
//...................===============>>>>>>>>>>>>>> WARMINDVD <<<<<<<<<<<<<=============...........................
let DBfilm = [
    {
        id: 1,
        title: 'The Peaky Blinders 5',
        genre: 'Action',
        harga: 92000,
        rating: 9.7,
        cover: 'asset/Peaky-Blinders-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
        sinopsis: ['Keluarga Shelby mengalami perpecahan pasca penangkapan Freddie, dan kondisi ini diperburuk oleh kedatangan Arthur Senior, ayah mereka.']
    },
    {
        id: 2,
        title: 'Baby Driver',
        genre: 'Action',
        harga: 71000,
        rating: 8.5,
        cover: 'asset/Baby-Driver-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=zTvJJnoWIPk',
        sinopsis: ['Baby (Ansel Elgort) adalah seorang pemuda yang bekerja sebagai pengemudi untuk kelompok perampok bank di Atlanta, Georgia.']
    },
    {
        id: 3,
        title: 'Hot Fuzz',
        genre: 'Comedy',
        harga: 81000,
        rating: 9.0,
        cover: 'asset/Hot-Fuzz-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=674Ka18uFuA',
        sinopsis: ['Menceritakan Nicholas Angel (Simon Pegg) yang merupakan seorang polisi London yang sangat taat hukum, disiplin dan mempunyai catatan kerja yang amat memuaskan.']
    },
    {
        id: 4,
        title: 'John Wick',
        genre: 'Action',
        harga: 60500,
        rating: 7.4,
        cover: 'asset/Jhon-Wick-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=C0BMx-qxsP4',
        sinopsis: ['John Wick adalah mantan pembunuh bayaran yang pensiun dari dunia mafia dengan alasan menikah. Suatu hari, istri John yang bernama Helen Wick meninggal.']
    },
    {
        id: 5,
        title: 'Twenty Five Twenty One',
        genre: 'Romantic',
        harga: 55000,
        rating: 8.6,
        cover: 'asset/25-21-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=n7F8o-SoK8s',
        sinopsis: ['Na Hee Do, perempuan pemimpi yang akhirnya dapat menjadi atlet anggar peraih medali emas Asian Games. Serta kisah cinta dan persahabatan yang kuat di masa muda.']
    },
    {
        id: 6,
        title: 'Scream',
        genre: 'Horor',
        harga: 45500,
        rating: 6.3,
        cover: 'asset/Scream-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=beToTslH17s',
        sinopsis: ['Setahun setelah ibunda Sidney terbunuh, terjadi pembunuhan beruntun. Ia mulai curiga jika itu saling berkaitan dan mencoba menemukan pelakunya.']
    },
    {
        id: 7,
        title: 'One Piece Film Red',
        genre: 'Action',
        harga: 105000,
        rating: 7,
        cover: 'asset/One-Piece-Red.png',
        trailer: 'https://www.youtube.com/watch?v=89JWRYEIG-s',
        sinopsis: ['Topi Jerami pergi ke sebuah festival musik hingga bertemu dengan Uta, karakter baru yang ternyata adalah anak Shanks, sosok inspirasi Luffy.']
    },
    {
        id: 8,
        title: 'Black Adam',
        genre: 'Action',
        harga: 63000,
        rating: 7.5,
        cover: 'asset/Black-Adam-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
        sinopsis: ['Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.']
    },
    {
        id: 9,
        title: 'Train To Busan',
        genre: 'Horor',
        harga: 54000,
        rating: 7.6,
        cover: 'asset/Train-to-Busan-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=1ovgxN2VWNc',
        sinopsis: ['Seok-woo dan putrinya pergi ke Busan dengan kereta untuk menemui istrinya. Perjalanan berubah menjadi petaka saat mereka terjebak di tengah-tengah zombie']
    },
    {
        id: 10,
        title: 'Crash Landing On You',
        genre: 'Romantic',
        harga: 79000,
        rating: 8.7,
        cover: 'asset/Crash-Landing-on-You.png',
        trailer: 'https://www.youtube.com/watch?v=GVQGWgeVc4k',
        sinopsis: ['Drama komedi romantis ini bercerita tentang perjalanan asmara Yoon Se Ri dan Ri Jung Hyuk yang bertemu akibat kecelakaan paragliding']
    },
    {
        id: 11,
        title: 'Miracle In Cell No 7',
        genre: 'Drama',
        harga: 81000,
        rating: 8.2,
        cover: 'asset/Miracle-in-Cell-7-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=G2wPoBy2JQI',
        sinopsis: ['Dodo Rozak hanya ingin menjadi ayah yang baik bagi anaknya, Kartika. sekalipun dia hanyalah pria dengan kecerdasan terbatas, bertingkah dan berperilaku seperti anak-anak']
    },
    {
        id: 12,
        title: 'KKN Di Desa Penari',
        genre: 'Horor',
        harga: 67000,
        rating: 7.6,
        cover: 'asset/KKN-Desa-Penari-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=_ykK5YsWes0',
        sinopsis: ['tentang sekelompok mahasiswa yang tengah melakukan program KKN. Film ini diadaptasi dari salah satu cerita horor yang viral di tahun 2019 melalui Twitter']
    },
    {
        id: 13,
        title: 'Mariposa',
        genre: 'Romantic',
        harga: 73000,
        rating: 8.1,
        cover: 'asset/Mariposa-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=N9PUbRIKYOA',
        sinopsis: ['Acha ingin mendapatkan hati Iqbal, cowok cakep, pintar dan dikenal berhati dingin. Sahabatnya, Amanda berusaha mencegah niatnya karena takut Acha sakit hati']
    },
    {
        id: 14,
        title: 'IMPERFECT',
        genre: 'Drama',
        harga: 62000,
        rating: 7.8,
        cover: 'asset/Imperfect-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=f4Sc26vQHcU',
        sinopsis: ['Tentang seorang wanita bernama Rara yang kerap mengalami body shaming. Sampai tuntutan pekerjaan mengharuskan dia merubah total penampilannya.']
    },
    {
        id: 15,
        title: 'Mencuri Raden Saleh',
        genre: 'Action',
        harga: 76000,
        rating: 8.2,
        cover: 'asset/Mencuri-Raden-Saleh-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=DN3sRz_veBU',
        sinopsis: ['Pencurian terbesar tinggal menghitung hari. Komplotan sudah lengkap dan siap untuk mencuri lukisan sang maestro, Raden Saleh, yang berjudul Penangkapan Diponegoro.']
    },
    {
        id: 16,
        title: 'Perahu Kertas',
        genre: 'Drama',
        harga: 43000,
        rating: 6.1,
        cover: 'asset/Perahu-Kertas-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=vFjTDMJam30',
        sinopsis: ['Kugy, yang bercita-cita ingin menjadi penulis dongeng, kuliah di Fakultas Sastra.Keenan, pelukis muda berbakat, dipaksa untuk kuliah di Fakultas Ekonomi oleh ayahnya.']
    },
    {
        id: 17,
        title: 'Nigth At The Museum',
        genre: 'Comedy',
        harga: 99000,
        rating: 9.1,
        cover: 'asset/Night-at-the-Museum-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=KMKk7Dn__-Y',
        sinopsis: ['Larry, penjaga malam di Museum Sejarah dibantu oleh patung-patung pameran yang hidup di malam hari untuk menggagalkan pencurian batu sihir.']
    },
    {
        id: 18,
        title: 'The Conjuring',
        genre: 'Horor',
        harga: 76000,
        rating: 8.2,
        cover: 'asset/The-Conjuring-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
        sinopsis: ['Ketika suami istri Rod dan Carolyn menyadari bahwa keluarga mereka tengah diganggu oleh roh jahat, mereka meminta bantuan pada pasangan ahli supranatural.']
    },
    {
        id: 19,
        title: 'SPY',
        genre: 'Comedy',
        harga: 63000,
        rating: 8.9,
        cover: 'asset/SPY-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=YrY3v1eDmQY',
        sinopsis: ['Susan Cooper adalah analis CIA yang selalu bekerja di balik meja. Tapi ketika terjadi situasi genting, ia menawarkan diri untuk menjadi mata-mata.']
    },
    {
        id: 20,
        title: 'Cek Toko Sebelah',
        genre: 'Comedy',
        harga: 77000,
        rating: 7.1,
        cover: 'asset/Cek-Toko-Sebelah-Cover.png',
        trailer: 'https://www.youtube.com/watch?v=r9NJveLN3zI',
        sinopsis: ['Setelah Erwin menerima tawaran kerja di Singapura, ayahnya sakit dan butuh dirinya untuk meneruskan usaha toko. Sementara Yohan, kakaknya, merasa ayahnya pilih kasih.']
    }
]
let DBcomment = [
    {
        nama: 'sugeng kroco',
        komentar: 'pengiriman sangat cepat, kualitas barang sangat memuaskan dan kualitas video sangat bagus di atas rata-rata. TOP MARKOTOP!!!'
    },
    {
        nama: 'michael asli indo',
        komentar: 'barangnya bagus banget... kualitas DVDnya juga bukan kaleng kaleng, kualitas filmnya ga kalah sama di bioskop. bakalan belanja lagi sih... favorite <3 warminDVD'
    },
    {
        nama: 'Kagura',
        komentar: 'pengirimannya agak delay :(, but overall filmnya love banget suka banget sama kualitas videonya jernih'
    }
]
let DBcart = [{
    id: 2,
    title: 'Baby Driver',
    genre: 'Action',
    harga: 71000,
    rating: 8.5,
    cover: 'URL LINK COVER IMAGE',
    trailer: 'https://www.youtube.com/watch?v=zTvJJnoWIPk',
    sinopsis: [],
    quantity: 3
  },
  {
    id: 3,
    title: 'Hot Fuzz',
    genre: 'Comedy',
    harga: 81000,
    rating: 9.0,
    cover: 'URL LINK COVER IMAGE',
    trailer: 'https://www.youtube.com/watch?v=674Ka18uFuA',
    sinopsis: [/*berisi object dari komentar/testimoni user */],
    quantity: 1
}
];

// Render Database
let juduls = document.getElementsByClassName("card-title");
let docGenre = document.getElementsByClassName("card-genre");
let docHarga = document.getElementsByClassName("card-harga");
let docRating = document.getElementsByClassName("card-rating");
let docSinopsis = document.getElementsByClassName("card-sinopsis");

function renderData(){
    let box = document.getElementById('box')
    let data = ""
    for (let perDB of DBfilm){
    
        data += `
            <div class="col-md-3"><div class="card" style="width: 18rem;">
                <img src="${perDB.cover}" class="card-img-top" alt="...">
                <div class="card-body card-body-custom">
                    <h5 class="card-title">${perDB.title}</h5>
                    <p class="card-sinopsis">${perDB.sinopsis}</p>
                    <p class="card-genre">${perDB.genre}</p>
                    <p class="card-harga">${perDB.harga}</p>
                    <p class="card-rating">${perDB.rating}</p>
                    <a href="${perDB.trailer}" target="_blank" class="btn btn-dark">Trailer</a>
                    <a onclick="${addToCart(perDB.id)}" class="btn btn-warning btn-success" value="${perDB.id}">Add to cart</a>
                </div>
            </div></div>
      ` 
    }
    box.innerHTML = data

    let commentCard = document.getElementById('comment')
    let dataComment = ""
    for (let perC of DBcomment) {

        dataComment += `
        <div class="card" style="width: 36rem;">
              <div class="card-body text-start comment-card">
                <h5 class="card-title text-warning">${perC.nama}</h5>
                <p class="card-text">${perC.komentar}</p>
              </div>
            </div>
        `
    }
    commentCard.innerHTML = dataComment
}
renderData()


// Input Variable

let trailerButton;
let sortHargaMurah;

function sortHarga(a, b) {
    if (a.harga < b.harga) {
        return -1;
    }
    if (a.harga > b.harga) {
        return 1;
    }
    return 0;
}

function sortRating(a, b) {
    if (a.rating < b.rating) {
        return -1;
    }
    if (a.rating > b.rating) {
        return 1;
    }
    return 0;
}

function selectSort(value) {
    if (value === 'populer') {
        return DBfilm.sort(sortRating).reverse()
    } else if (value === 'murah') {
        return DBfilm.sort(sortHarga)
    } else if (value === 'mahal') {
        return DBfilm.sort(sortHarga).reverse()
    }
}

// console.log(selectSort('populer'))

function testimoni() {
    let name = document.getElementById('comment-name').value
    let text = document.getElementById('comment-komen').value
    let obj = {
        nama: name,
        komentar: text
    }
    DBcomment.push(obj)
    alert('Terima kasih sudah meninggalkan kenangan')
    renderData()

}


function addToCart(id) {
    // let f = function(PerData) {
    //     if(perData.id === id) return perData
    // }
    let film = DBfilm.find(perData => perData.id === id);

    let cart = DBcart.find(perData => perData.id === film.id);

    if(cart){
         cart.quantity++;
    }else{
      DBcart.push({...film, quantity: 1})
    //   return DBcart
    }
    return DBcart
}
// console.log(addToCart(4))

function deleteCart(index){
    DBcart.splice(index,1);

    return DBcart
}
// console.log(deleteCart(1))
function minusCart(id){
    // let data = DBcart.find(perData => perData.id === data.id);
    let index = DBcart.findIndex(perData => perData.id === id)

    DBcart[index].quantity--  
    if(DBcart[index].quantity === 0){
        deleteCart(index)
    }

    return DBcart
}
// console.log(minusCart(3))
function filterShowMovie(value) {
    let x = DBfilm.filter(perData => perData.genre === value);
    renderFiltered(x)
}

function renderFiltered(perGenre){

    if (!perGenre)
        perGenre = DBfilm

    let box = document.getElementById('box')
    let data = ""
    for (let perDB of perGenre){
    
        data += `
            <div class="col-md-3"><div class="card" style="width: 18rem;">
                <img src="${perDB.cover}" class="card-img-top" alt="...">
                <div class="card-body card-body-custom">
                    <h5 class="card-title">${perDB.title}</h5>
                    <p class="card-sinopsis">${perDB.sinopsis}</p>
                    <p class="card-genre">${perDB.genre}</p>
                    <p class="card-harga">${perDB.harga}</p>
                    <p class="card-rating">${perDB.rating}</p>
                    <a href="${perDB.trailer}" target="_blank" class="btn btn-dark">Trailer</a>
                    <a onclick="${addToCart(perDB.id)}" class="btn btn-warning btn-success" value="${perDB.id}">Add to cart</a>
                </div>
            </div></div>
      ` 
    }
    box.innerHTML = data
}
renderFiltered()











