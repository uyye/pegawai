const calculateDays = require("../helpers/calculate");
const {pegawai, honorHarian, jumlahMasukKerja, Sequelize} = require("../models/index")


class PegawaiController{

    static async getPegawai(req, res, next){
        try {
            const data = await pegawai.findAll({
                include: [
                    {
                        model: honorHarian,
                        as: 'honorHarian',
                        attributes: ['honor']
                    }
                ]
            });

            const result = await Promise.all(data.map(async (item) => {
                const jumlahMasuk = await jumlahMasukKerja.findOne({
                    where: { nip: item.nip }
                });

                return {
                    nip: item.nip,
                    namaPegawai: item.namaPegawai,
                    golongan: item.golongan,
                    jumlahMasukKerja: jumlahMasuk ? jumlahMasuk.jumlahHari : "-",
                    honorHarian: item.honorHarian ? item.honorHarian.honor : "-"
                };
            }));
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async detailPegawai(req, res, next){
        try {
            const data = await pegawai.findAll()
            console.log(data);
            
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    static async addPegawai(req, res, next){
        try {
            const {nip, namaPegawai, tempatLahir, tanggalLahir, golongan, fotoPegawai} = req.body
            const insertData = await pegawai.create({nip, namaPegawai, tempatLahir, tanggalLahir, golongan, fotoPegawai})
            res.status(201).json(insertData)
        } catch (error) {
            console.log(error);
        }
    }

    static async addMasaKerja(req, res, next){
        try {
            const {nip, tanggalMasuk, tanggalKeluar} = req.body
            const jumlahHari = calculateDays(tanggalMasuk, tanggalKeluar)
            const insertData = await jumlahMasukKerja.create({nip, jumlahHari, tanggalMasuk, tanggalKeluar, periodeBulan:1})
            res.status(201).json(insertData)
        } catch (error) {
            console.log(error);
        }
    }

    static async findPegawaiById(req, res, next){
        try {
            const {id} = req.params
            const data = await jumlahMasukKerja.findByPk(id, {
                include: [{
                    model: pegawai,
                    as: 'pegawai',
                }]
            });
    
            if (!data) {
                throw new Error('Data tidak ditemukan');
            }
            
            console.log(data);
            
            res.status(200).json(data) 
        } catch (error) {
            console.log(error);
            
        }
    }

    static async updatePegawai(req, res, next){
        try {
            const {id} = req.params
            const {nip, namaPegawai, tempatLahir, tanggalLahir, golongan, fotoPegawai} = req.body
            console.log(nip, namaPegawai, tempatLahir, tanggalLahir, golongan, fotoPegawai, ">>>>>>>DI UPDATE PEGAWAI");
            
            const updateData = await pegawai.update({nip, namaPegawai, tempatLahir, tanggalLahir, golongan, fotoPegawai},{
                where:{id}
            })
            res.status(200).json(updateData)
        } catch (error) {
            console.log(error); 
        }
    }

    static async updateMasaKerja(req, res, next){
        try {
            const {id} = req.params
            const {nip, tanggalMasuk, tanggalKeluar} = req.body
            console.log(req.body, ">>>>>>>>>>>>>DI UPDATE MASA KERJA");
            
            
            const jumlahHari = calculateDays(tanggalMasuk, tanggalKeluar)
            const updateData = await jumlahMasukKerja.update({nip, tanggalMasuk, tanggalKeluar, jumlahHari, periodeBulan:1},{
                where:{id}
            })
            res.status(200).json(updateData)
        } catch (error) {
            console.log(error);   
        }
    }

    static async deletePegawai(req, res, next){
        try {
            const {id} = req.params
            const deleteData = await pegawai.destroy({where:{id}})
            res.status(200).json(deleteData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PegawaiController