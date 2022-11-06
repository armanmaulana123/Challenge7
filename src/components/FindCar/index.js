import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getListCar } from '../../actions/carAction'
import * as Icon from "react-bootstrap-icons";
import car from '../../reducers/car';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function DateTime(hasil) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return hasil
  }

function FindCar({submit, data, jumlahpenumpang,tipedriver,tanggal,waktu}){
    const { getListCarResult, getListCarLoading, getListCarError } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch()
    const jumlah = jumlahpenumpang;
    const tipe = tipedriver === 'true' ? true : false
    let d = (`${tanggal}T${waktu}`);
    // console.log(d); 
    let formdate = Date.parse(d);
    console.log(Date.parse(tanggal));
    
    console.log(typeof(formdate));
    console.log(data);

    useEffect(() => {
        //get carAction
        console.log('1. use effect component did mount')
        dispatch(getListCar());
    }, [dispatch])

    return(
        <section>
            <div className="container mt-5">
            <div className="row" id="cars-container">
                {getListCarResult ? (getListCarResult.filter((car) =>  car.capacity >= jumlah && car.available === tipe && 
            Date.parse(DateTime(car.availableAt)) > formdate 
            ).map((car) => {
                return(
                    <div className='col-md-3'>
                <div className="card mb-3">
                  <img src={`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/images/${car.image.split('/')[2]}`} className="card-img-top" height={200} alt={car.manufacture}/>
                  <div className="card-body">
                    <p className="card-text">{car.model}</p>
                    <h5 className="card-title" style={{fontWeight:"bold"}}>{car.rentPerDay} / Hari</h5>
                    <p className="card-text">{car.description}</p>
                    <p className="card-text"><Icon.People></Icon.People> {car.capacity}</p>
                    <p className="card-text"><Icon.Gear></Icon.Gear> {car.transmission}</p>
                    <p className="card-text"><Icon.Calendar></Icon.Calendar> {car.year}</p>
                    <a href="#" className="btn btn-success btn-block">Pilih Mobil</a>
                  </div>
                </div>
                </div>
                )
            })
            ) : getListCarLoading ? (
                <p>Loading . . .</p>
            ) : (<p>{getListCarError ? getListCarError : "Data Kosong"}</p>)}
            </div>
            </div>
        </section>
    )
}

export default FindCar