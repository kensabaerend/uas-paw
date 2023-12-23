module.exports = mongoose =>{

    const schema = mongoose.Schema(
        {
            nama_siswa: String,
            tanggal_lahir: String,
            noakte: String,
            nama_orangtua: String,
            alamat: String,
            email: String,
            nohp: String
        }, {
            timestamps: true
        }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("etalase", schema);

}