import React from 'react';
import ReactDom from 'react-dom';

import {data} from './books';
import SpecificBook from './Book';


function BookList() {
    return (
        <section className={'booklist'}>
            {data.map((book) => {
                return <SpecificBook key={book.id} {...book}/>;
            })}
        </section>
    );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
