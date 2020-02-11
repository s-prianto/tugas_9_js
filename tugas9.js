function objectbelajarprograming(){
  var belajarprograming ={
    nama_bootcamp : "Niomic",
    materi : {
      html : ["HTML (Pengenalan)", "HTML (Struktur & Tugas)"],
      css : ["CSS (Pengenalan)", "CSS (Struktur & Tugas)"],
      javascript : ["JS (Pengenalan)","JS (Lanjutan)","JS (DOM)"],
    },
    tahun : 2019,
  }
  for(var x in belajarprograming){
    console.log(belajarprograming[x]);
  }
}

objectbelajarprograming()
