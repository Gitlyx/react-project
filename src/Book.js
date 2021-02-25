import React from "react";

const Book = ({img, title, author, desc, price}) => {
    const clickHandler = (title) => {
        alert(`${title} has been added to the shopping cart.`)
    };

    return (
        <article className={'card m-auto p-5'} align="left" style={{width: "500px"}}>
            <img src={img} className={'card-img-top'} alt={'...'} style={{height: '300px', objectFit: 'contain'}}/>
            <div className={'card-body'}>
                <h4>{title}</h4>
                <h6>Author: {author}</h6>
                <hr/>
                <p>{desc}</p><br/>
                <p>Price: {price},-</p>
                <button type="button" onClick={() => clickHandler(title)} className={'btn btn-primary'}>Add to shopping list</button>
            </div>
        </article>
    );
}


export default Book;