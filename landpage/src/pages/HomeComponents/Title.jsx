import React from 'react';
import logo from '../../media/title/download 1.png'
import search from '../../media/title/bi_search.png'
import './title.scss';
import './common.scss'
import useWindowSize from "../../utils/useWindowSize";
const Title = () => {
    const [clicked, setClick] = React.useState(false)
    const { width } = useWindowSize();
    return (
        <div id='title'>
            {width > 360 && (
                <>
            <div className='center'><img className='logo' src={logo}/></div>
            <div className='center'>
                <div className='center'>
                    <a href="#ourHotel">
                        <div className='space'>Our Hotel</div>
                    </a>
                    <a href='#rooms'>
                        <div className='space'>Room & Rates</div>
                    </a>
                    <a href="#facilities">
                        <div className='space'>Facilities</div>
                    </a>
                    <a href="#footer">
                        <div className='space'>Contact Us</div>
                    </a>
                    <div className={clicked? 'hidden' : 'space'}><img onClick={()=>setClick(true)} src={search}/></div>
                </div>
            </div>
            <div className='center'>
                <input
                    className={clicked? 'center form' : 'hidden'}
                    name="search"
                    placeholder="Search Everything!"
                    type="search"
                />
                <div className={clicked? 'loupe' : 'hidden'}><img className={clicked? 'space' : 'hidden'} src={search}/></div>
                <button className={clicked? undefined : 'hidden'} onClick={()=>setClick(false)}>-</button>
            </div>
                </>)}
            {width < 360 && (
                <>
                    <div className='center'><img className='logo' src={logo}/></div>
                    <div className='center'>
                        <div className='centerColumn'>
                            <a href="#ourHotel">
                                <div className='space'>Our Hotel</div>
                            </a>
                            <a href='#rooms'>
                                <div className='space'>Room & Rates</div>
                            </a>
                            <a href="#facilities">
                                <div className='space'>Facilities</div>
                            </a>
                            <a href="#footer">
                                <div className='space'>Contact Us</div>
                            </a>
                            <div className={clicked? 'hidden' : 'space'}><img onClick={()=>setClick(true)} src={search}/></div>
                        </div>
                    </div>
                    <div className='center'>
                        <input
                            className={clicked? 'center form' : 'hidden'}
                            name="search"
                            placeholder="Search Everything!"
                            type="search"
                        />
                        <div className={clicked? 'loupe' : 'hidden'}><img className={clicked? 'space' : 'hidden'} src={search}/></div>
                        <button className={clicked? undefined : 'hidden'} onClick={()=>setClick(false)}>-</button>
                    </div>
                </>)}
        </div>
    );
};
export default Title;
