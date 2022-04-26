import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import data from "../data/stays.json";

const HeaderStyle = styled.header`
    width: 100%;
    margin-bottom: 40px;

    img{
        margin-bottom: 40px;
    }

    @media screen and (min-width: 768px){

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;

        img{
            margin-bottom: 0;
        }

    }

`;


const DivInputStyle = styled.div`
    width: 100%;
    max-width: 300px;
    height: 55px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:hover div:nth-child(3){
        background-color: var(--red);
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
        
        span{
            color: white;
        }

    }

    div{
        padding: 0 15px;
        height: 100%;
        border-right: 1px solid #F2F2F2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Mulish', sans-serif;
        font-size: .90rem;
        cursor: pointer;
        transition: all .2s ease;
    }

    .location{
        color: var(--black);
        overflow: hidden;
    }

    .guests{
        color: var(--lightGray);
    }

    div:nth-child(3){
        border-right: none;
    }

    .search{
        color: var(--red);
    }

    @media screen and (min-width: 768px){
        margin: 0;
    }
`;

const HeaderBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(79, 79, 79, 0.4);
    height: 100vh;
    display: none;

    &.active{
        display: block;
    }

`;

const HeaderMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px;
    transform: translateY(-800px);
    transition: all 1s ease fowards;
    z-index: 10000;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 130px;
        height: 48px;
        color: white;
    }

    .btn-search{
        background: var(--red);
        border: none;
        border-radius: 16px;
        font-weight: 700;
        cursor: pointer;

        span{
            margin-right: 10px;
        }
    }

    .btn-search-desktop{
        display: none;
    }

    .close-menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .close-icon{
        cursor: pointer;
    }

    .form{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 300px;

        .form-inputs{
            border: 1px solid #F2F2F2;
            box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            padding: 10px;
            margin-bottom: 36px;
        }

        .inputs-box{
            width: 100%;
            padding: 5px 0;

            p{
                font-weight: 800;
                font-size: .5625rem;
                margin-bottom: 5px;
            }

        }

        input[type="text"]{
            width: 100%;
            height: 20px;
            border: none;
            outline: none;
        }

        .input-box-1{
            border-bottom: 1px solid #F2F2F2;
        }
    }

    .location-boxs{
        width: 100%;
    }

    .guests-box{
        font-weight: 700;

        p{
            font-size: .875rem;
            color: var(--black);
        }

        span{
            color: var(--gray);
            font-weight: 400;
        }

        .count{
            margin: 10px 0;
            display: flex;
            align-items: center;

            p.button{
                width: 23px;
                height: 23px;
                background: transparent;
                border: 1px solid var(--gray);
                border-radius: 5px;
                color: var(--gray);
                cursor: pointer;
                text-align: center;
            }

            p{
                margin: 0 16px;
            }

        }
    }


    @media screen and (min-width: 768px){
        .btn-search-mobile{
            display: none;
        }

        .btn-search-desktop{
            display: flex;
        }

        .form{
            grid-template-columns: 1fr 1fr 1fr;
            width: 100%;
            max-width: 1024px;
            margin: 0 auto;
        }

        .form-inputs{
            grid-column: span 3;
            display: flex;
            width: 1024px;
            margin: 0 auto;

            .input-box-1{
                border-bottom: none;
            }   

        }

    }


    &.active{
        transform: translateY(0);
    }

`;

const LocationBox = styled.div`
    display: flex;
    align-items: center;
    color: var(--gray);
    height: 30px;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
    overflow: hidden;

    span{
        margin-right: 10px;
    }

    p{
        font-size: .875rem;
    }
`;

const Header = ({setData}) => {

    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('Helsinki, Finland');
    const [children, setChildren] = useState(1);
    const [adults, setAdults] = useState(0);
    const [guest, setGuest] = useState(children + adults);

    const handleShow = () => {
        setShow(!show);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleGuest = (e) => {
        setGuest(e.target.value);
    }

    const add = (age) => {
        if(age === 'adult'){
            setAdults(adults => adults + 1);
        }else{
            setChildren(children => children + 1);
        }
        setGuest(guest => guest + 1);
    }

    const subtract = (age) => {
        if(age === 'adult'){
            if(adults > 1){
                setAdults(adults => adults - 1);
            }
        }else{
            if(children > 0){
                setChildren(children => children - 1);
            }
        }
        setGuest(guest => guest - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(!show);

        const newData = data.filter(dat => dat.city.includes(inputValue.split(',')[0]) || dat.country.includes(inputValue.split(',')[0]));
        setData(newData.filter(dat => dat.maxGuests >= Number(guest)));

        console.log(newData)
    }

    return (
        <HeaderStyle>

            <HeaderBackground className={show ? 'active' : ''}>
                <HeaderMenu className={show ? 'active' : ''}>
                    <div className="close-menu">
                        <p>Edit your search</p>
                        <span className="material-icons close-icon" onClick={handleShow}>
                            close
                        </span>
                    </div>

                    <form className="form" onSubmit={handleSubmit}>

                        <div className="form-inputs">
                            <div className="inputs-box input-box-1">
                                <p>LOCATION</p>
                                <input type="text" value={inputValue} onChange={handleChange} />
                            </div>

                            <div className="inputs-box">
                                <p>GUESTS</p>
                                <input type="text" placeholder="Add guests" value={guest} onChange={handleGuest}/>
                            </div>

                            <div>
                                <button className="btn-search btn-search-desktop">
                                    Search
                                    <span className="material-icons search">
                                        search
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="locations-boxs" >

                            <LocationBox>
                                <span className="material-icons">
                                    place
                                </span>
                                <p>Helsinki; Finland</p>
                            </LocationBox>
                            <LocationBox>
                                <span className="material-icons">
                                    place
                                </span>
                                <p>Vaasa; Finland</p>
                            </LocationBox>
                            <LocationBox>
                                <span className="material-icons">
                                    place
                                </span>
                                <p>Oulu; Finland</p>
                            </LocationBox>
                            <LocationBox>
                                <span className="material-icons">
                                    place
                                </span>
                                <p>Turku; Finland</p>
                            </LocationBox>

                        </div>

                        <div className="guests">
                            <div className="guests-box">
                                <p>Adults <br />
                                    <span>Ages 13 or above</span>
                                </p>

                                <div className="count">
                                    <p className='button' onClick={() => subtract('adult')}>-</p>
                                    <p>{adults}</p>
                                    <p className='button' onClick={() => add('adult')}>+</p>
                                </div>
                            </div>

                            <div className="guests-box">
                                <p>Children <br />
                                    <span>Ages 2-12</span>
                                </p>
                                <div className="count">
                                    <p className='button' onClick={() => subtract('children')}>-</p>
                                    <p>{children}</p>
                                    <p className='button' onClick={() => add('children')}>+</p>
                                </div>
                            </div>

                        </div>

                        <button className="btn-search btn-search-mobile">
                            <span className="material-icons search">
                                search
                            </span>
                            Search
                        </button>

                    </form>

                </HeaderMenu>
            </HeaderBackground>

            <img src={Logo} alt="Logo windbnb" />
            <DivInputStyle onClick={handleShow}>
                <div className="location">
                    <p>{inputValue}</p>
                </div>
                <div className="guests">
                    <p>{guest}</p>
                </div>
                <div>
                    <span className="material-icons search">
                        search
                    </span>
                </div>
            </DivInputStyle>
        </HeaderStyle>
    )
}

export default Header
