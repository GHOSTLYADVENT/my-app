import React, { Component } from 'react';
import slideData from './slideData';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

class Slides extends Component {
    state = { 
        slideIndex: 1
    }
    
    nextSlide = () => {

        if ( this.state.slideIndex !== slideData.length ) {
            
            this.setState({

                slideIndex: this.state.slideIndex + 1
            })
        }

        else if (this.state.slideIndex === slideData.length) {
            
            this.setState({

                slideIndex: 1
            })
        }
    }

    prevSlide = () => {

        if ( this.state.slideIndex !== 1 ) {

            this.setState({slideIndex: this.state.slideIndex - 1 })
        }
        else if (this.state.slideIndex === 1) {
            
            this.setState({
                slideIndex: slideData.length
            })
        }
    }

    moveDot = index => {
        return this.setState({slideIndex: index})
    }

    render() { 
        return (
            <div className='slide-container'>

                <FaAngleDoubleRight
                    style={{
                        position: 'absolute',
                        
                        top: '300',
                    
                        zIndex: '1',
                    
                        right: '0',
                        
                        fontSize: '4rem',

                        color: '#000',

                        margin: '0',
                        
                        padding: '0',

                        cursor: 'pointer'
                    }}
                    
                    onClick={this.nextSlide}
                />
                
                {
                    slideData.map((obj, index) => {
                        return (
                            <div className={this.state.slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={obj.id}>

                                <img src={process.env.PUBLIC_URL + `./Imgs/000${index + 1}.jpg`} alt="" />
                        
                    </div>
                    
                        )
                    })}
                
                <FaAngleDoubleLeft
                    
                    style={{
                        position: 'absolute',
                        
                        top: '300',
                    
                        zIndex: '1',
                    
                        left: '0',
                        
                        fontSize: '4rem',

                        color: '#000',

                        margin: '0',

                        padding: '0',

                        cursor: 'pointer'
                }}

                    onClick={this.prevSlide} />
                <div className="container-dots">
                    {
                        Array.from({ length: slideData.length}).map((item, index) => {
                            return (
                                <div
                                    key={index}
                                onClick={() => this.moveDot(index + 1)}
                                    className={this.state.slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}
 
export default Slides;