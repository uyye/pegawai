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


            console.log(result);
            
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = PegawaiController