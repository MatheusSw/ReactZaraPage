import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class ProductPage extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-sm-7'>
                    <ProductGallery />
                </div>
                <div className='col-12 col-sm-5'>
                    <ProductInformation />
                </div>
            </div>
        );
    }
}

class ProductInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: "CAMISETA COM ESTAMPA PRINCE © THE PRINCE ESTATE.",
                price: 119.00,
            }
        };
    }
    render() {
        return (
            <div className='p-5 m-2'>
                <p className='h5'><b>{this.state.product.title}</b></p>
                <p className='h6'>R$ {this.state.product.price}</p>
                <div className="product-information">
                    <p>PRETO - 1277/402</p>
                    <p>Camiseta ampla de gola redonda e manga curta. Estampa frontal fotográfica de Prince © The Prince Estate.</p>
                    <p>ALTURA MODELO: 189 CM</p>
                    <p>TAMANHO: EUR L</p>
                </div>
                <hr></hr>
                <ul >
                    <li className='p-1'>P</li>
                    <li className='p-1'>M</li>
                    <li className='p-1'>G</li>
                    <li className='p-1 disabled'>EG</li>
                </ul>
                <hr></hr>
                <button className='btn-bordered text-center'><b>QUAL É MEU TAMANHO?</b></button>
            </div>
        );
    }
}

class ProductGallery extends React.Component {
    render() {
        return (
            <div>
                <img className='product-image' src='https://static.zara.net/photos///2019/I/0/2/p/1277/402/800/2/w/1024/1277402800_1_1_1.jpg?ts=1567612579757'></img>
            </div>
        );
    }
}

const Example = (props) => {
    return (
        <ProductPage productId={props.productId} />
    )
}

const element = <Example></Example>

ReactDOM.render(element, document.querySelector("#root"));