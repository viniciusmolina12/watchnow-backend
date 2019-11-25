const SectionDao = require('../dao/SectionDao');
const SectionSeatDao = require('../dao/SectionSeatDao');
const MovieDao = require('../dao/MovieDao');
const RedesDao = require('../dao/RedesDao');

const db = require('../../config/data-base');

class SectionController{

    constructor(){
         this._list = [];
    }


    listSeats(sectionId) {
        return function(req, res){

            const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];   
            var seatsArray = [];
           
            const sectionId = req.params.id;
            const sectionSeatDao = new SectionSeatDao(db);
            
            alphabet.map((word, indiceAlphabet) => {
                var poltronas = []; 
                var seats = {};
                seats.letra = word;
                seats.id = indiceAlphabet;
                
                sectionSeatDao.list(` sections_section_id = ${sectionId} AND section_seat_alpha = "${word}"`, '')

                .then(sectionSeat => {
                    
                   
                   
                   sectionSeat.map((seat, indice) => {

                       
                        
                        var poltronaObj = {
                            id: seat.section_seat_id,
                            numero: seat.section_seat_number,
                            status: false,
                            livre: (seat.section_seat_user !== null ? false : true)
                        };
                        poltronas[indice] = poltronaObj;
                        
                        seats.poltronas = poltronas;     
                        seatsArray[indiceAlphabet] = seats;    


                   })
                   

                   
                  
                   
                   if(word == "C"){
                       
                    res.send(seatsArray);
                    }
                })
                .catch(err => {
                    console.log(err);
                })

        })
       

        }
    }
    
    listRedes(movie){
        
        return new Promise((resolve, reject) => {
            this._list = {Redes: []};
            const sectionDao = new SectionDao(db);
            const movieDao = new MovieDao(db);
            const redesDao = new RedesDao(db);

            redesDao.listRedes()
            .then(redes => {

                let redesInfo = redes.reduce((accum,row)=>{
                    let {rede_id:id}=row;
                    
                    accum['redes'] = accum['redes'] || {total:0};
                    accum['redes'].total++;
                    return accum;
                 },{});
                var totalRedes = redesInfo.redes.total;

                movieDao.listOne(movie).then(movieData => {
                  
                    redes.map((rede, index) => {
                        
                        
                        sectionDao.list( `section_movie= ${movie} and section_rede = ${rede.rede_id} `)
                        .then(sections => {
                            

                            this._list.Movie = movieData;
                            this._list.Redes[index] = {'nome': rede.rede_name,
                                                    'sessoes': sections };
                            console.log(this._list);
                            if(index+1 == totalRedes){
                                resolve(this._list);
                            }
                            





                        })
                        .catch(err => {
                            console.log(err);
                        })

                    })

            })
                  
                
            })
            .catch(err => {
                console.log(err);
            })

        })
    }
    


    list(){
        return function(req, res){
            
            const movie = req.params.id;
            
            var response = this.listRedes(movie)
            .then(response => {
                
                res.send(this._list)
            })
            .catch(err => {
                console.log(err);
            })

            

        }.bind(this)
    }



}


module.exports = SectionController;