import { useEffect, useState } from "react"
import instance from "../api/axiosInstance"
import {useNavigate, useParams} from "react-router-dom"
import Navbar from "../components/Navbar"
import Swal from "sweetalert2"
import Footer from "../components/Footer"

export default function Add({page}) {
    const navigate = useNavigate()
    const {id} = useParams()
    const [dataPegawai, setDataPegawai] = useState({
        nip:null,
        namaPegawai:"",
        tempatLahir:"",
        tanggalLahir:"",
        golongan:null,
        fotoPegawai:""
    })

    const [dataMasaKerja, setDataMasaKerja] = useState({
        nip:null,
        tanggalMasuk:"",
        tanggalKeluar:""
    })

    const handlerChange = (event)=>{
        const {name, value} = event.target
        if(name === "nip"){
            setDataPegawai({
                ...dataPegawai, [name]:value
            });
            setDataMasaKerja({
                ...dataMasaKerja, [name]:value
            })
        }
        else if(name in dataPegawai){
            setDataPegawai({
                ...dataPegawai, [name]:value
            })
        }
        else if (name in dataMasaKerja) {
            setDataMasaKerja({
                ...dataMasaKerja, [name]:value
            })
        }
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        console.log(dataPegawai, ">>>>>>data pegawai");
        console.log(dataMasaKerja, ">>>>>>data masaKerja");
        
            if(page === "add"){
                try {
                    await instance({
                        method:"post",
                        url:"/pegawais/add/pegawai",
                        data:dataPegawai
                    })
        
                    await instance({
                        method:"post",
                        url:"/pegawais/add/masaKerja",
                        data:dataMasaKerja
                    })
                    Swal.fire({
                        position:"center",
                        icon:"success",
                        title:"Satu pegawai berhasil di tambahkan",
                        showConfirmButton:false,
                        timer:2000
                    })
                    navigate("/")
                } catch (error) {
                    alert("Ada masalah saat menambahkan data")
                    console.log(error);
                    
                }
                
            }else{
                console.log(dataPegawai, ">>>>>>data pegawaii");
                 console.log(dataMasaKerja, ">>>>>>data masaKerjaa");
                try {
                    await instance({
                        method:"put",
                        url:`/pegawais/edit/pegawai/${id}`,
                        data:dataPegawai
                    })
                    await instance({
                        method:"put",
                        url:`/pegawais/edit/masaKerja/${id}`,
                        data:dataMasaKerja
                    })
                    Swal.fire({
                        position:"center",
                        icon:"success",
                        title:"Data berhasil di ubah",
                        showConfirmButton:false,
                        timer:2000
                    })
                    navigate("/")
                } catch (error) {
                    alert("Ada masalah saat mengupdate data")
                    console.log(error);
                }
            }
    }

    const fetchPegawai = async ()=>{
        try {
            const {data} = await instance({
                method:"get",
                url:`/pegawais/data/pegawai/${id}`
            })
            data.pegawai.tanggalLahir = data.pegawai.tanggalLahir? data.pegawai.tanggalLahir.split("T")[0]:""
            data.tanggalMasuk = data.tanggalMasuk?data.tanggalMasuk.split("T")[0]:""
            data.tanggalKeluar = data.tanggalKeluar?data.tanggalKeluar.split("T")[0]:""
            data.pegawai.tanggalLahir = data.pegawai.tanggalLahir ? data.pegawai.tanggalLahir.split("T")[0] : "";
            setDataPegawai({
                nip: data.pegawai.nip,
                namaPegawai: data.pegawai.namaPegawai,
                tempatLahir: data.pegawai.tempatLahir,
                tanggalLahir: data.pegawai.tanggalLahir,
                golongan: data.pegawai.golongan,
                fotoPegawai: data.pegawai.fotoPegawai,
            });

            setDataMasaKerja({
                nip:data.pegawai.nip,
                tanggalMasuk:data.tanggalMasuk,
                tanggalKeluar:data.tanggalKeluar
            })
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(()=>{
        if(page === "edit"){
            fetchPegawai()
        }
    },[])


    return(
        <>
        <Navbar/>
        <div className="container mt-5 mb-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    {
                        page === "add"?
                        <h5 className="card-title">Tambah Data Pegawai</h5>:
                        <h5 className="card-title">Ubah Data Pegawai</h5>

                    }
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">NIP</label>
                            <input type="number" name="nip" onChange={handlerChange} value={dataPegawai.nip} className="form-control" placeholder="Masukan nomor induk pegawai"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" name="namaPegawai" onChange={handlerChange} value={dataPegawai.namaPegawai} className="form-control" placeholder="Masukan nama pegawai"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tempat Lahir</label>
                            <input type="text" name="tempatLahir" onChange={handlerChange} value={dataPegawai.tempatLahir} className="form-control" placeholder="Masukan tempat lahir"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tanggal Lahir</label>
                            <input type="date" name="tanggalLahir" onChange={handlerChange} value={dataPegawai.tanggalLahir} className="form-control"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Golongan</label>
                            <select name="golongan" onChange={handlerChange} value={dataPegawai.golongan} className="form-select">
                                <option >Masukan golongan</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Foto</label>
                            <input type="url" name="fotoPegawai" onChange={handlerChange} value={dataPegawai.fotoPegawai} className="form-control" placeholder="Masukan URL foto"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tanggal Masuk</label>
                            <input type="date" name="tanggalMasuk" onChange={handlerChange} value={dataMasaKerja.tanggalMasuk} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tanggal Keluar</label>
                            <input type="date" name="tanggalKeluar" onChange={handlerChange} value={dataMasaKerja.tanggalKeluar} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    )
}