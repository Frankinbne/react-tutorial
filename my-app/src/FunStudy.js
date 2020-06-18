import React from 'react';

const GetHour=()=>{
    const date=new Date();

    return(
        <h1>
            It is currently about{date.getHours()%12 }oclock!
        </h1>
    );
};


export default GetHour;