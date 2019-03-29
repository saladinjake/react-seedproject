import React from 'react';
import { Vehicle } from './product';
import { DriverProfile } from './driverProfile';
import jsonDemo from '../../vehiclelist.json';
import filters from '../../services/helpers/';
const VehicleCategory = ({categories}) => {
    const UNIQUE_IDENTIFIER = 'driver-attached-to-cab-';
    return (
        <div>
            {
                categories.map( (taxi, i) => {
                   
                    
                   return (
                        <Vehicle
                            key={i}
                            name={taxi.name}
                            plate_num={taxi.plate_num}
                            model={taxi.model} 
                            vehicle_image={taxi.vehicle_image}
                            booking_status={taxi.booking_status}
                            vacancy={taxi.vacancy}
                            available_no_of_seats={taxi.available_no_of_seats}
                            price={taxi.price}
                            maintenance_status={taxi.maintenance_status}
                            description={taxi.description}

                        >
                         <DriverProfile 
                            key={ UNIQUE_IDENTIFIER + i }
                            name={taxi.driversInfo.name}
                            profile={taxi.driversInfo.profile}
                            licence_no={taxi.driversInfo.licence_no}
                            ratings={taxi.driversInfo.ratings}
                            
                            />
                        </Vehicle>
                   );
                  

                })
            }
        </div>
    )
}

export { VehicleCategory };