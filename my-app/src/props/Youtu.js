import React from 'react';
import YoutuItem from './YoutuItem';


function Youtu(){
    return(


        <div className={'contacts'}>

            <YoutuItem 
                name={'Jack'} //这玩意就相当于实际参数
                imgUrl={'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/03/10-Criminally-Underrated-Donghua-That-Are-Beyond-Excellent-featured-image.jpg'} 
                phone={'030022-28283'}
                email={'hsdjsjd@gmail.com'}
                btnText={'确认'}
            />

            <YoutuItem 
                name={'Tom'}
                imgUrl={'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/03/10-Criminally-Underrated-Donghua-That-Are-Beyond-Excellent-featured-image.jpg'} 
                phone={'11111-28283'}
                email={'hsdjsjd@outlook.com'}
            
            />


            <YoutuItem />
            <YoutuItem />

        </div>


    );
};


export default Youtu;
