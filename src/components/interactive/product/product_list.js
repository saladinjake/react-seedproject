import React from 'react';
import {VehicleCategory } from './product_category';
import jsonDemo from '../../vehiclelist.json';
import filters from '../../services/helpers/';
const VehicleList = (props) => {
    const allVehicles = jsonDemo;
    return (
        <div>
            {
                allVehicles.map( (taxiCategory, i) => {
                    const categories = taxiCategory.data;
                    
                   return (
                        <VehicleCategory 
                          key={i}
                          categories={categories}
                        />
                   );
                  

                })
            }
        </div>
    )
}
export { VehicleList }
