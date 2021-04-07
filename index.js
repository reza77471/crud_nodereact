//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai", pegawai)

//import route pelanggaran
const detail_pelanggaran_siswa = require("./route/detail_pelanggaran_siswa")
app.use("/detail_pelanggaran_siswa", detail_pelanggaran_siswa)

//import route pelanggaran
const pelanggaran_siswa = require("./route/pelanggaran_siswa")
app.use("/pelanggaran_siswa", pelanggaran_siswa)

//import route pelanggaran
const jurusan = require("./route/jurusan")
app.use("/jurusan", auth, jurusan)

//import route pelanggaran
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", auth, pelanggaran)

//import route pelanggaran
const siswa = require("./route/siswa")
app.use("/siswa", auth, siswa)

//membuat web server dengan port 2910
app.listen(2910, () => {
    console.log("server run on port 2910")
})