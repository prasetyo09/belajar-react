function DataSiswa({name, age, major, address}){
    //props : object : props.name, props.age, props.major

    // const name = "Rahmat Effendi";
    // const age = 40;
    // const major = "Junior Web Programming";

    return (
        <div>  
        <h1>{name}</h1>

        <p>
            <strong>Usia</strong>: {age}
        </p>

        <p>
            <strong>Jurusan</strong>: {major}
        </p>

        <p>
            <strong>Alamat</strong>: {address}
        </p>
        </div>
    )
}

export default DataSiswa;