import { useState } from "react";

function FormSiswa({tambahSiswa}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [major, setMajor] = useState("Teknik Informatika");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !age) {
            alert('Nama dan Usia tidak boleh kosong!')
            return;
        }

        tambahSiswa({
            id: Date.now(),
            name: name.trim(),
            age: age,
            major: major,
            address: address
        });

        setName("")
        setAge("")
        setMajor("")
    }

    return(
        <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="" className="form-label">Nama Lengkap</label>
                <input type="text" id="name" placeholder="Nama Lengkap" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="" className="form-label">Usia</label>
                <input type="number" id="age" placeholder="Usia" value={age} onChange={(e)=> setAge(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="" className="form-label">Jurusan</label>
                <input type="text" id="major" placeholder="Jurusan" value={major} onChange={(e)=> setMajor(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="" className="form-label">Alamat</label>
                <textarea id="address" onChange={(e)=> setAddress(e.target.value)}></textarea>
            </div>

            <button type="submit" className="btn btn-submit">Save</button>
        </form>
    )
}

export default FormSiswa;