import React from 'react';

const Vehicle = props => {
  const {
    name,
    plate_num,
    model,
    vehicle_image,
    booking_status,
    vacancy,
    available_no_of_seats,
    price,
    maintenance_status,
    description,
  } = props;
  return (
    <div className="">
      <img alt="commute taxi" src={vehicle_image} />
      <div>
        <h2>{name}</h2>
        <p>{plate_num}</p>
        <h2>{model}</h2>
        <p> {booking_status}</p>
        <h2>{available_no_of_seats}</h2>
        <p>Can accommodate {vacancy}</p>
        <p>{price}</p>
        <p>{maintenance_status}</p>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Vehicle };
