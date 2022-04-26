import styled from 'styled-components';

const CardStyle = styled.div`
    
    cursor: pointer;
    transition: all 1s ease;

    img{
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 24px;
        margin-bottom: 20px;
        transition: all 1s ease;
    }

    h2{
        color: var(--black);
        font-size: .875rem;
    }

    &:hover img{
        opacity: .8;
    }

    @media screen and (min-width: 768px){
        h2{
            font-size: 1rem;
        }
    }

`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .super{
        border: 1px solid #4F4F4F;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 5px 8px;
        font-size: .625rem;
        color: var(--gray);
        font-weight: bold;
    }

    .type{
        color: var(--gray3);
        font-size: .75rem;
        color: var(--gray);
        font-weight: 500;
    }

    .star{
        display: flex;
        align-items: center;
        font-size: .75rem;
        color: var(--gray);
        font-weight: 500 ;

        span{
            color: rgba(235, 87, 87, 0.72);
            font-size: 1rem;
        }
    }

    
    @media screen and (min-width: 768px){

        margin-bottom: 20px;

        .super{
            font-size: .75rem;
        }

        .type{
            font-size: .875rem;
        }

        .star{
            font-size: .875rem;

            span{
                color: rgba(235, 87, 87, 0.72);
                font-size: .875rem;
            }
    }
    }

`;

const Card = ({ data }) => {
    return (
        <CardStyle>
            <img src={data.photo} alt="dasdas" />

            <Details>
                {
                    data.superHost &&
                    <p className="super">SUPER HOST</p>
                }

                <p className="type">{data.type}</p>
                <p className="star">
                    <span className="material-icons">star</span>
                    {data.rating}
                </p>
            </Details>

            <h2>{data.title}</h2>
        </CardStyle>
    )
}

export default Card
