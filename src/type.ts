export interface countryType {
    name: {
        common: string
        official: string
    },
    ccn3:{
        ccn3:string
    }
    flags:{
        flags:{
            png:string,
            alt:string
        }
    }
    capital: {
        capital: [
          string
    ]
    }

    population: {
        population: number
    }

    area:{
        area: number
    }

    region:{
        region: string
    }

}


// "region": {
//         "region": "Americas"
//       },