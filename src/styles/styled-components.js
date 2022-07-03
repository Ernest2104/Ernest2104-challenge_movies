import styled from 'styled-components';
import background from '../images/background01.png'
import magnifying_glass from '../images/lupa.png'

export const Body = styled.body`
    margin: 3% 5%;
    padding: 0;
    background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
    border-radius: 1rem;
`
export const Search = styled.div`
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: inline-block;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    background-image: url(${background});
    filter: grayscale(80%);
    background-repeat: no-repeat;
    background-size: cover;
    /* background-attachment: fixed; */
    margin-top: 4%;
    border: 1px solid black;
    height: 20rem;
    width: 74rem;
    h1{
        margin-top: 5%;
        color: white;
        font-size: calc(1.5rem + 1.2vw);
    }
    h2{
        margin-top: 2%;
        color: white;
        font-size: calc(1rem + 1vw);
    }
    input[type=search]{
        margin-top: 1.5%;
        width: 25rem;
        height: 3rem;
        color:antiquewhite;
        text-align: left;
        font-size: calc(0.6rem + 0.6vw);
        border-radius: 1rem;
        cursor: pointer;
        padding-left: 2rem;
        /* background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat left; */
        background: url(${magnifying_glass}) no-repeat left;
        background-size: 1.4rem;
    }
`
export const Movies = styled.div`
    border: 1px solid black;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    margin: 0 6rem 2rem 6rem;
    padding: 1rem 2rem;
    background-color: white;
    width: 70rem;
`
export const Card = styled.div`
    margin: 0.5rem;
    img{
        width: 10rem;
    }
    img:hover {
        transform: scale(1.05);
    }
`
export const Detail = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
    display: flex;
    flex-direction: column;
    
    width: 70rem;
    align-items: stretch;
    margin: 2% auto;
    img{
        width: calc(25rem + 25vw);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    h1{
        font-size: calc(1.2rem + 1.2vw);
        text-shadow: 2px 1px 1px #000;
    }
    h3{
        font-size: calc(0.5rem + 0.5vw);
        margin: 0.7rem 2.5rem;
        text-align: justify;
    }
    button{
        background-color: initial;
        background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
        border-radius: 1.7rem;
        border-width: 0;
        box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
        margin-bottom: 1.5rem;
        color: #FFFFFF;
        cursor: pointer;
        font-size: calc(0.5rem + 0.5vw);
        font-weight: bold;
        letter-spacing: .04em;
        padding: 1rem 1rem;
        text-align: center;
        text-decoration: none;
        text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
    }
    button:hover {
    background-image: linear-gradient(#B384C9, #391F5B 50%);
}
`
export const Average = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(0.6rem + 0.6vh);
    font-weight:bold;
    border: 1px solid black;
    border-radius: 0.4rem;
    padding: 0.4rem;
    direction: rtl;/* right to left */
    unicode-bidi: bidi-override;/* bidi de bidireccional */
    cursor: pointer;
    label{
        font-size: calc(0.8rem + 0.8vw);
        color:grey;
    }
    label:hover{
        color:orange;
    }
    label:hover ~ label{
        color:orange;
    }
    
    input[type='checkbox']{
        display: none;
    }
    input[type='checkbox']:checked ~ label{
        color:orange;
    }
`
export const Menu = styled.div`
    display: flex;
    width: 60rem;
    justify-content: space-between;
`