import React, {useState, useEffect} from 'react';
import Card from './Card.jsx'
import axios from 'axios';
import Promise from 'bluebird';
import Carousel from './Carousel.jsx'

const RelatedItemsList = ({IDlist, currProduct, handleRelatedItemClick}) => {
    const [list, setList] = useState ([])
    const [responses, setResponses] = useState([]);
    const [lastIndex, setLastIndex] = useState(5)
    const [startIndex, setStartIndex] = useState(0);

    const GETRelatedProductsProps = ()=>{
        const url = `/api/products`
        const promises = IDlist.map(id=> axios.get(`${url}/${id}`));
        Promise.all([...promises]).then(props=> {
            setResponses(props)
        });
    };

    const listHandler = ()=>{
        const data = []
        responses.forEach(res=>{
            data.push(res.data);
        });
        setList(data)
        // console.log('realted items: ',  data)
    };


    useEffect(()=>{
        GETRelatedProductsProps();
    }, [IDlist]);

    useEffect(()=>{
        listHandler();
    }, [responses]);

    return (
        <div className='RelatedItemsList'>
            <h2>Similar Items..</h2>
            <Carousel startIndex={startIndex} setStartIndex={setStartIndex} lastIndex={lastIndex} setLastIndex={setLastIndex} maxIndex={list.length}>
                {list.map((card,index)=>{
                     if(index >= startIndex && index < lastIndex)
                        return <Card key={card.id}
                        card={card}
                        currProduct={ currProduct}
                        handleRelatedItemClick={handleRelatedItemClick}
                        relatedItems={true}/>
                })}
            </Carousel>
         </div>
    );
}

export default RelatedItemsList;