import React from "react";
import FindCar from "../FindCar";
// import ListCar from "./search";

function refreshPage() {
  window.location.reload()
}

class Search extends React.Component{
    constructor(pros) {
      super(pros);
      this.state = {tipedriver: '',jumlahpenumpang:'',tanggal: '', waktu: ''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.Hapus = this.Hapus.bind(this)
      this.data = this.data.bind(this)
    }

    handleChange(event) {
      const value = event.target.value
      const name = event.target.name
      this.setState({[name] : value})
    }

    handleSubmit(event) {
      event.preventDefault()

      console.log(this.state.tipedriver);
      console.log(this.state.jumlahpenumpang);
      console.log(this.state.tanggal);
      console.log(this.state.waktu);
    }

    Hapus() {
      return 2
    }

    data(event) {
      event.preventDefault()
      const jumlahpenumpang = this.state.jumlahpenumpang
      console.log("Jumlah : " + jumlahpenumpang);
      const data1 = [this.state.jumlahpenumpang, this.state.tipedriver, this.state.tanggal, this.state.waktu]

      return data1
    }

  render(){
    return(
        <>
        <form onSubmit={this.handleSubmit}>
        <div className="row justify-content-center mt-5">
                <div className="col-lg-11 .offset-lg-1 col-md-12 col-sm-12">
                <div className="card border-0 shadow rounded">
                    <div className="card-body">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-10 mb-3">
                            <div className="row" style={{ fontSize:"14px" }}>
                            <div className="col-md-3 mb-3">
                                <label for="tipe">Tipe Driver</label>
                                <select name="tipedriver" value={this.state.value} onChange={this.handleChange} className="form-control" id="tipe-driver">
                                <option value="" disabled selected>Pilih Driver</option>
                                <option value="true">Dengan Driver</option>
                                <option value="false">Tanpa Driver</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="tgl">Tanggal</label>
                                <input type="date" className="form-control" name="tanggal" value={this.state.tanggal} onChange={this.handleChange} id="tanggal"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="jemput">Waktu Jemput / Ambil</label>
                                <input type="time" className="form-control" name="waktu" value={this.state.waktu} onChange={this.handleChange} id="waktu"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="jmlh">Jumlah Penumpang (Optional)</label>
                                <input type="number" className="form-control" id="penumpang" name="jumlahpenumpang" value={this.state.jumlahpenumpang} onChange={this.handleChange} placeholder="Jumlah Penumpang"/>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4">
                            <div className="span2">
                            <button className="btn btn-success btn-block" id="load-btn">Cari Mobil</button>
                            <button className="btn btn-outline-danger btn-block" id="clear-btn">Reset</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </form>
        <FindCar submit={this.handleSubmit} data={this.data} jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu}/>
        </>
        
    )
  }
}

export default Search