// load page
// tampilan page muncul jika sudah keload semua
$(function () {
  $('body').show();
});

function verifikasi() {
  // countdown verif
  // hitung mundur kode otp
  let timeleft = 30;
  let countdownTimer = document.querySelector("#countdowntimer").textContent;
  if (countdownTimer) {
    let downloadTimer = setInterval(function () {
      timeleft--;
      document.querySelector("#countdowntimer").textContent = timeleft;
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
      // jika waktu habis, muncul link resend
      if (timeleft == 0) {
        document.querySelector('.wait').style.display = "none";
        document.querySelector('.resend').style.display = "block";
      }
    }, 1000);
  }

  // otp
  $('.digit-group').find('input').each(function () {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function (e) {
      var parent = $($(this).parent());

      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find('input#' + $(this).data('previous'));

        if (prev.length) {
          $(prev).select();
        }
      } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        var next = parent.find('input#' + $(this).data('next'));

        if (next.length) {
          $(next).select();
        } else {
          if (parent.data('autosubmit')) {
            parent.submit();
          }
        }
      }
    });
  });
}



// banner carousel homepage
// banner pada halaman awal
$('.banner-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>'],
})

// produk carousel
// slider daftar produk untuk semua page yang ada slider daftar produk
$('.produk-carousel').owlCarousel({
  margin: 28,
  nav: true,
  dots: false,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>'],
  responsive: {
    0: {
      margin: 8,
      items: 3,
      nav: true
    },
    600: {
      items: 4,
      margin: 16,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
})

// foto detail produk carousel
// slider pada foto halaman detail produk
$('.foto-produk-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 1,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>'],
})

// search navbar
// saran atau pencarian populer pada input pencarian di navbar
let pencarianPopuler = document.querySelector('.pencarian-populer');
function showPopuler() {
  pencarianPopuler.style.display = "block";
}
$("#search-produk").keyup(function () {
  if (!this.value) {
    pencarianPopuler.style.display = "block";
  }
});
function hidePopuler() {
  pencarianPopuler.style.display = "none";
}

// chat homepage
let chatBox = document.querySelector('.chat-box');
let openChatBtn = document.querySelector('.open-chat');

function openChat() {
  chatBox.style.display = 'block';
  openChatBtn.style.display = 'none';
}

function hideChat() {
  chatBox.style.display = 'none';
  openChatBtn.style.display = 'block';
}

// filter pencarian
// checkbox parent
function checkbox() {
  $(document).ready(function () {
    //find the wrappers
    let expandableCheckboxes = document.getElementsByClassName("expandable-checkbox");
    //loop through the wrappers, count them one by one
    for (let i = 0; i < expandableCheckboxes.length; i++) (function (i) {

      //find the the main
      let checkboxMainOption = expandableCheckboxes[i].getElementsByClassName("expandable-checkbox-main-option")[0];
      //find the subs
      let checkboxSubOptions = expandableCheckboxes[i].getElementsByClassName("expandable-checkbox-sub-option");
      //loop through subs
      for (let k = 0; k < checkboxSubOptions.length; k++) {

        //add listener fo each sub
        checkboxSubOptions[k].onclick = function () {
          let checkedCount = 0;
          for (let j = 0; j < checkboxSubOptions.length; j++) {
            if (checkboxSubOptions[j].checked) {
              checkedCount++;
            }
          }
          //mark appropriately
          checkboxMainOption.checked = checkedCount > 0;
          checkboxMainOption.indeterminate = checkedCount > 0 && checkedCount < checkboxSubOptions.length;
        }
      }
      //add listener to main
      checkboxMainOption.onclick = function () {
        for (let j = 0; j < checkboxSubOptions.length; j++) {
          checkboxSubOptions[j].checked = checkboxMainOption.checked;
        }
      }
    })(i)
  });

  // pilih semua
  $("#pilihSemua").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
  });


  // keranjang team
  let accordionBtn = document.querySelectorAll(".accordion-button");
  let radioPembelian = document.querySelectorAll('input[name="radioPembelian"]');
  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', () => {
      radioPembelian[i].checked = 'checked';
    })
  }
}

// lihat semua filter pencarian
let lihatSemuaBtn = document.querySelectorAll(".lihat-semua-btn");
let lihatSemuaPopup = document.querySelectorAll(".lihat-semua-popup");
let closeLihatSemuaPopup = document.querySelectorAll(".lihat-semua-popup .btn-close");
if (closeLihatSemuaPopup) {
  for (let i = 0; i < lihatSemuaBtn.length; i++) {
    lihatSemuaBtn[i].addEventListener('click', () => {
      if (lihatSemuaPopup[i].style.display == "block") {
        lihatSemuaPopup[i].style.display = "none"
      } else {
        lihatSemuaPopup[i].style.display = "block"
      }
    })

    closeLihatSemuaPopup[i].addEventListener('click', () => {
      lihatSemuaPopup[i].style.display = "none"
    })
  }

}

function detailProduk() {
  // lokasi pengiriman 
  $(".lokasi-pengiriman").select2();

  let btnAddAttachment = document.querySelector('.btn-add-attachment');
  let btnAttachProduk = document.querySelector('.attach-produk');
  let btnAttachGambar = document.querySelector('.attach-gambar');
  let menuAttachment = document.querySelector('.inputAttachmentMenu');

  btnAddAttachment.onclick = function () { bukaTutupMenuAttachment(); }
  btnAttachProduk.onclick = function () { bukaTutupMenuAttachment(); }
  btnAttachGambar.onclick = function () { bukaTutupMenuAttachment(); }
  function bukaTutupMenuAttachment() {
    if (menuAttachment.style.display == "block") {
      menuAttachment.style.display = "none";
    } else {
      menuAttachment.style.display = "block";
    }
  }
}

// open link produk
function openShareLink() {
  let bagikanLink = document.querySelector('.bagikan-link');
  if (bagikanLink.style.display == "block") {
    bagikanLink.style.display = "none";
  } else {
    bagikanLink.style.display = "block";
  }
}

// copy text
function CopyToClipboard(id) {
  let r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  if (id == "linkProduk") {
    simpan();
  }
}

// variasi
var alertEl = document.querySelector('.variasi-alert')
function cekVariasi() {
  let inputRadio = document.querySelectorAll("input[name='variasiOption']")
  var alert = 0;
  inputRadio.forEach((radio) => {
    if (radio.checked == false) {
      alert += 1
    }
  })
  return alert < inputRadio.length ? true : false
}
// variasi alert
function checkVariasiBeli(form) {
  event.preventDefault()
  // let isVariasiExist = cekVariasi()
  // console.log(isVariasiExist)
  if (cekVariasi()) {
    form.submit()
    alertEl.style.display = 'none'
  } else {
    alertEl.style.display = 'block'
  }
}

function checkVariasiKeranjang(form) {
  event.preventDefault()
  let isVariasiExist = cekVariasi()
  if (isVariasiExist) {
    $('#modalKeranjang').modal('show');
    setTimeout(function () { form.submit() }, 2000)
  } else {
    alertEl.style.display = 'block'
  }
}


// wishlist btn
let wishlistIcons = document.querySelectorAll('.wishlist-icon');
let modalWishlist = document.querySelector('.modal-wishlist');
let modalUnwishlist = document.querySelector('.modal-unwishlist');
wishlistIcons.forEach((wishlist) => {
  wishlist.addEventListener('click', () => {
    if (wishlist.classList.contains('fa-heart-o')) {
      wishlist.classList.remove('fa-heart-o')
      wishlist.classList.add('fa-heart', 'checked')
      if (wishlist.classList.contains('with-modal')) {
        modalWishlist.style.display = "unset";
        modalUnwishlist.style.display = "none";
        setTimeout(function () { modalWishlist.style.display = "none"; }, 2000);
      }
    } else {
      wishlist.classList.remove('fa-heart', 'checked')
      wishlist.classList.add('fa-heart-o')
      if (wishlist.classList.contains('with-modal')) {
        modalWishlist.style.display = "none";
        modalUnwishlist.style.display = "unset";
        setTimeout(function () { modalUnwishlist.style.display = "none"; }, 2000);
      }
    }
  })
})

// like btn
let likeIcons = document.querySelectorAll('.like');
likeIcons.forEach((like) => {
  like.addEventListener('click', () => {
    if (like.classList.contains('fa-thumbs-o-up')) {
      like.classList.remove('fa-thumbs-o-up')
      like.classList.add('fa-thumbs-up')

    } else {
      like.classList.remove('fa-thumbs-up')
      like.classList.add('fa-thumbs-o-up')

    }
  })
})



// modal btn tambah ke keranjang
let modalKeranjang = document.getElementById('modalKeranjang')
if (modalKeranjang) {
  modalKeranjang.addEventListener('shown.bs.modal', function (event) {
    setTimeout(function () {
      $('#modalKeranjang').modal('hide');
    }, 1300);
  })
}

// modal simpan
function simpan() {
  let modalSimpan = document.querySelector('.modal-simpan');
  // let modalSalin = document.querySelector('.modal-salin');

  modalSimpan.style.display = "unset";
  setTimeout(function () { modalSimpan.style.display = "none"; }, 2000);
}

// kuantitas
let kuantitas = document.querySelectorAll('#qty');
let btnKurang = document.querySelectorAll('#button-kurang');
let btnTambah = document.querySelectorAll('#button-tambah');

for (let i = 0; i < kuantitas.length; i++) {
  let n = kuantitas[i].value;
  btnKurang[i].addEventListener("click", function () {
    if (n > 1) {
      n--
    }
    kuantitas[i].value = n;
  }
  );
  btnTambah[i].addEventListener("click", function () {
    n++
    kuantitas[i].value = n;
  });
}


// tulis ulasan
function tulisUlasan() {
  // preview foto
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    let inputFoto = document.getElementById("inputFoto");
    inputFoto.addEventListener("change", function (event) {
      let files = event.target.files; //FileList object
      let output = document.getElementById("result");
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        //Only pics
        if (!file.type.match('image'))
          continue;
        let picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
          let picFile = event.target;
          let div = document.createElement("div");
          div.innerHTML = `<img class='img-fluid preview-foto' src="${picFile.result}" alt="">`;
          output.insertBefore(div, null);
        });
        //Read the image
        picReader.readAsDataURL(file);
      }
      let previewFoto = document.querySelectorAll(".preview-foto");
      if (previewFoto.length == 4) {
        inputFoto.disabled = "true;"
      }
    });
  } else {
    console.log("Your browser does not support File API");
  }

  // preview video
  $(document).on("change", "#inputVideo", function (evt) {
    let $source = $('#video_here');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
    document.querySelector(".video-ulasan").style.display = "block";
    document.querySelector("#inputVideo").disabled = "true";
  });

  // username anonim
  let usernameElement = document.querySelector('.username')
  let username = usernameElement.innerHTML;
  let usernameSlice = username.slice(1, -1)
  let bintangStr = ""

  function bintang() {
    for (let i = 0; i < username.length - 2; i++) {
      bintangStr += "*"
    }
    return bintangStr
  }
  bintangStr = String(bintang())

  function ReplaceAt(input, search, replace, start, end) {
    return input.slice(0, start)
      + input.slice(start, end).replace(search, replace)
      + input.slice(end);
  }
  let anonimCheck = document.querySelector('#anonim');
  anonimCheck.addEventListener('change', () => {
    if (anonimCheck.checked) {
      usernameElement.innerHTML = ReplaceAt(username, usernameSlice, bintangStr, 1, username.length)
    } else {
      usernameElement.innerHTML = username
    }
  })
}

// countdown pembayaran
function pembayaran() {
  //  this code set time to 24 hrs
  // pakai ajax jika dari db php
  let timer2 = "24:00:00";

  let interval = setInterval(function () {
    let timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    let hours = parseInt(timer[0], 10);
    let minutes = parseInt(timer[1], 10);
    let seconds = parseInt(timer[2], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    hours = (minutes < 0) ? --hours : hours;
    if (hours < 0) clearInterval(interval);
    minutes = (minutes < 0) ? 59 : minutes;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    hours = (hours < 10) ? '0' + hours : hours;
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? minutes : minutes;

    timer2 = hours + ':' + minutes + ':' + seconds;
    // kalau waktu pembayaran sudah habis
    if (hours <= 0 && minutes == 0 && seconds == 0) {
      window.location.href = "waktu-pembayaran-habis.html";
    }
    else {
      $('#timerPembayaran').html(timer2);
      // if you want to save it on local storage
      // localStorage.setItem('timer', timer2);
    }

  }, 1000);
}


// ganti foto profile
$(".profile-picture-container").click(function (e) {
  $("#uploadFotoProfil").click();
});

function fasterPreview(uploader) {
  if (uploader.files && uploader.files[0]) {
    $('.profile-picture').attr('src',
      window.URL.createObjectURL(uploader.files[0]));
  }
}

// tipe akun input kalau yang perusahaan atau instansi
let tipeAkunRadio = document.querySelectorAll('input[name="tipeAkun"]');
let inputPerusahaan = document.querySelector('.input-perusahaan');
let inputInstansi = document.querySelector('.input-instansi');
for (let i = 0; i < tipeAkunRadio.length; i++) {
  tipeAkunRadio[i].addEventListener('change', () => {
    if (tipeAkunRadio[1].checked) {
      inputPerusahaan.style.display = "block"
      inputInstansi.style.display = "none"
    } else if (tipeAkunRadio[2].checked) {
      inputPerusahaan.style.display = "none"
      inputInstansi.style.display = "block"
    } else {
      inputPerusahaan.style.display = "none"
      inputInstansi.style.display = "none"
    }
  })
}


$("#uploadFotoProfil").change(function () {
  fasterPreview(this);
});

// cari bantuan 
let availableTags = [
  // isi suggestion cari bantuan (riwayat)
  "Pembayaran",
  "Refund",
  "Cara Berbelanja"
];
if (document.querySelector('.cari-bantuan-input')) {
  $(".cari-bantuan-input").autocomplete({
    source: availableTags
  });
}

// koordinat lokasi
let pakaiMap = document.querySelector('#map');
if (pakaiMap) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFuaWZhbGlmZnVkaW4iLCJhIjoiY2tqcDlkMHBhMTlkbjJ0bDl6ZzNmZHYxeiJ9.Zy2Y1YPy9NsKY-Yc5sg0zw";
  var alamatMap = document.getElementById("alamat-map");
  if (alamatMap) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
    function successLocation(position) {
      currentLongitude = position.coords.longitude;
      currentLatitude = position.coords.latitude;
      setupMap([position.coords.longitude, position.coords.latitude]);
    }
    function errorLocation() { }

    function setupMap(center) {
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12,
      });

      map.on('idle', function () {
        map.resize()
      })

      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      });

      geocoder.on('result', function (e) {
        geocoder.clear();
        if (document.querySelector('.mapboxgl-marker')) {
          document.querySelector('.mapboxgl-marker').remove()
        }
        var marker = new mapboxgl.Marker({ draggable: true, })
          .setLngLat(e.result.center)
          .addTo(map)

        function onDragEnd() {
          var lngLat = marker.getLngLat();
          alamatMap.style.display = "block";
          $.getJSON(
            "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
            lngLat.lng +
            "," +
            lngLat.lat +
            ".json?access_token=pk.eyJ1IjoiaGFuaWZhbGlmZnVkaW4iLCJhIjoiY2tqcDlkMHBhMTlkbjJ0bDl6ZzNmZHYxeiJ9.Zy2Y1YPy9NsKY-Yc5sg0zw",
            function (data) {
              var text = `${data.features[0].place_name}`;
              alamatMap.innerHTML = text;
            }
          );

        }

        marker.on("dragend", onDragEnd);
      });

      document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    }

  }
}
// cari drop point
let backDetailInfo = document.querySelector('.detail-info .back')
if (backDetailInfo) {
  backDetailInfo.onclick = function () {
    document.querySelector(".drop-point-list").style.display = "block";
    document.querySelector(".detail-info").style.display = "none";
  }
}
if (pakaiMap) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFuaWZhbGlmZnVkaW4iLCJhIjoiY2tqcDlkMHBhMTlkbjJ0bDl6ZzNmZHYxeiJ9.Zy2Y1YPy9NsKY-Yc5sg0zw";
  var dropPoint = document.querySelector('.drop-point')
  if (dropPoint) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function successLocation(position) {
      currentLongitude = position.coords.longitude;
      currentLatitude = position.coords.latitude;
      console.log(position);
      setupMap([position.coords.longitude, position.coords.latitude]);
    }

    function errorLocation() { }

    function setupMap(center) {
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 10,
      });

      map.on('idle', function () {
        map.resize()
        document.querySelector('.mapboxgl-ctrl-geocoder--input').placeholder = 'Masukkan Alamat';
        document.querySelector('.cari-drop-point').style.display = "block"
      })

      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      map.on("load", function () {

        // Add an image to use as a custom marker
        map.loadImage("img/icon/drop-point/Location.png", function (
          error,
          image
        ) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with 2 points
          map.addSource("places", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {
                    name:
                      '<div class="nama-tempat">Kurir Bangsa Drop Point Bukit Duri Tebet</div>',
                    address:
                      '<div class="alamat">Jl. Tebet Raya No.27b, RT.1/RW.2, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820</div>',
                    telp: '<div class="telp">+622122833765</div>',
                    hours: '<div class="hours">08:00 - 16:00</div>',
                    description:
                      '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [106.81501202257152, -6.248328782186817],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    name:
                      '<div class="nama-tempat">Kurir Bangsa Drop Point Menteng Raya Jelawe</div>',
                    address:
                      '<div class="alamat">Jl. Menteng Raya Jelawe RT/RW 013/003 Pasar Manggis, Setia Budi,</div>',
                    telp: '<div class="telp">(+62) 821 8727 2718</div>',
                    hours: '<div class="hours">08:00 - 16:00</div>',
                    description:
                      '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [106.8061067327099, -6.173974316653599],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    name:
                      '<div class="nama-tempat">Kurir Bangsa Drop Point Talang 16B Menteng</div>',
                    address:
                      '<div class="alamat">Jl. Menteng Raya Jelawe RT/RW 013/003 Pasar Manggis, Setia Budi,</div>',
                    telp: '<div class="telp">(+62) 821 8727 2718</div>',
                    hours: '<div class="hours">08:00 - 16:00</div>',
                    description:
                      '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [106.8261067327099, -6.173974316653599],
                  },
                },
              ],
            },
          });
          // Add a layer showing the places.
          map.addLayer({
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
            },
          });
          geocoder.on("result", function (results) {
            geocoder.clear();
            document.querySelector(".drop-point-list").style.display =
              "block";
            document.querySelector(".detail-info").style.display =
              "none";
          });
          // When a click event occurs on a feature in the places layer, open a popup at the
          // location of the feature, with description HTML from its properties.
          map.on("click", "places", function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var name = e.features[0].properties.name;
            var address = e.features[0].properties.address;
            var telp = e.features[0].properties.telp;
            var hours = e.features[0].properties.hours;

            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            document.querySelector(".drop-point-list").style.display = "none";
            document.querySelector(".detail-info").style.display = "block";
            document.querySelector(
              ".detail-info .nama-tempat"
            ).innerHTML = name;
            document.querySelector(
              ".detail-info .alamat"
            ).innerHTML = address;
            document.querySelector(".detail-info .telp").innerHTML = telp;
            document.querySelector(".detail-info .hours").innerHTML = hours;


          });

          // Change the cursor to a pointer when the mouse is over the places layer.
          map.on("mouseenter", "places", function () {
            map.getCanvas().style.cursor = "pointer";
          });

          // Change it back to a pointer when it leaves.
          map.on("mouseleave", "places", function () {
            map.getCanvas().style.cursor = "";
          });
        });

        document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
      });
    }
  }
}