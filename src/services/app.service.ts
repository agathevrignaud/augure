import axios from "axios";

export class AppService {
    public async getZodiacData(sign: string, time: string) : Promise<any> {
        const options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: {sign: `${sign}`, day: `${time}`},
            headers: {
              'X-RapidAPI-Key': 'd4c8160624msh3a3dd06d7d5d726p1b6c5fjsn7119ac3fd994',
              'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
}