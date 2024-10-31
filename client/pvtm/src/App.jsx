import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import instance from './api/axiosInstance';
import { formatRupiah } from './helpers/formatRupiah';


function App() {
  const [pegawai, setPegawai] = useState([])

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

  useEffect(()=>{
    fetchPegawai()
  }, [])

  console.log(pegawai);
  return (
    <>
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
    </>
  )
}

export default App
