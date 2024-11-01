import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import instance from './api/axiosInstance';
import { formatRupiah } from './helpers/formatRupiah';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Swal from "sweetalert2"
import Footer from './components/Footer';
import formatDate from './helpers/formatDate';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [pegawai, setPegawai] = useState([])
  const [detailPegawai, setDetailPegawai] = useState([])
  const navigate = useNavigate()

  const fetchPegawai = async ()=>{
    try {
      const {data} = await instance({
        method:"get",
        url:"/pegawais/data"
      })
      setPegawai(data)
    } catch (error) {
      console.log(error);
    }
  }

  const totalHonor = pegawai.reduce((total, x) => {
    return total + (x.jumlahMasukKerja * x.honorHarian);
  }, 0);

  const fetchDetailPegawai = async ()=>{
    try {
      const {data} = await instance({
        method:"get",
        url:"/pegawais/data/pegawai"
      })
      setDetailPegawai(data)
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
  }

  const deleteHandler = async (id)=>{
    const result = await Swal.fire({
        position:"center",
        icon:"warning",
        title:"Seriously?",
        text:"Kamu ingin menghapus data ini",
        showCancelButton:true,
        confirmButtonText:"Lanjutkan",
        cancelButtonText:"Cancel"
    })

    if(result.isConfirmed){
      try {
        await instance({
          method:"delete",
          url:`/pegawais/delete/pegawai/${id}`
        })
        Swal.fire({
          position:"center",
          icon:"success",
          title:"delete successfully",
          showConfirmButton:false,
          timer:1200
      })
        fetchPegawai()
        fetchDetailPegawai()
      } catch (error) {
        Swal.fire({
          position:"center",
          icon:"info",
          title:"Gagal!",
          text:"Gagal Menghapus Data",
          showConfirmButton:false,
          timer:2000
      })
        console.log(error);
        
      }
    }
   
  }
 
  useEffect(()=>{
    fetchPegawai()
    fetchDetailPegawai()
  }, [])

  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <h4 className="text-center">Laporan Honor Pegawai</h4>
      <p className="text-center">Periode Bulan Oktober Tahun 2024</p>
      
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">NIP</th>
            <th scope="col">Nama Pegawai</th>
            <th scope="col">Golongan</th>
            <th scope="col">Jumlah Hari Kerja</th>
            <th scope="col">Honor Harian</th>
            <th scope="col">Honor Bulanan</th>
          </tr>
        </thead>
        <tbody>
          {pegawai.map((x,y)=>{
            return(
              <tr key={y+1}>
                <td>{y+1}</td>
                <td>{x.nip}</td>
                <td>{x.namaPegawai}</td>
                <td>{x.golongan}</td>
                <td>{x.jumlahMasukKerja}</td>
                <td>{formatRupiah(x.honorHarian)}</td>
                <td>{formatRupiah(x.jumlahMasukKerja * x.honorHarian)}</td>
            </tr>
            )
          })}
          <tr>
            <td colSpan="6" className="text-right font-weight-bold">Total Honor</td>
            <td>{formatRupiah(totalHonor)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* PEGAWAI */}

    <div className="container my-4">
      <h4 className="text-center">Data pegawai</h4>
      {isLoading ? (
          <p className="text-center">Memuat data pegawai...</p>
        ) : detailPegawai.length > 0 ? (
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">NIP</th>
                <th scope="col">Nama</th>
                <th scope="col">Tempat Lahir</th>
                <th scope="col">Tanggal Lahir</th>
                <th scope="col">Golongan</th>
                <th scope="col">Foto Pegawai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {detailPegawai.map((x, y) => (
                <tr key={y}>
                  <td>{y + 1}</td>
                  <td>{x.nip}</td>
                  <td>{x.namaPegawai}</td>
                  <td>{x.tempatLahir}</td>
                  <td>{formatDate(x.tanggalLahir)}</td>
                  <td>{x.golongan}</td>
                  <td>
                    <img
                      src={x.fotoPegawai}
                      alt="Foto Pegawai"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>
                    <div className='d-flex gap-2'>
                      <button type="button" onClick={()=>navigate(`/edit/${x.id}`)} className="btn btn-warning">update</button>
                      <button type="button" onClick={()=>deleteHandler(x.id)} className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="8" className="text-center font-weight-bold">
                  <button type="button" onClick={()=>navigate("/add")} className="btn btn-primary">Tambah Pegawai</button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center">
           <p >Data detail pegawai tidak ditemukan.</p>
           <button type="button" onClick={()=>navigate("/add")} className="btn btn-primary">Tambah Pegawai</button>
          </div>
        )}
    </div>
    <Footer/>
    </>
  )
}

export default App
