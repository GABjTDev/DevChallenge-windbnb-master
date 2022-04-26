import styled from 'styled-components';
import Card from './Card';

const MainStyle = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px ;

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;

        .stay{
            grid-column: span 2;
        }
    }


    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;

        .stay{
            grid-column: span 3;
        }
    }

`;

const StaysStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 1.125rem;
        font-weight: bold;
    }

    p{
        font-size: .875rem;
        font-weight: 500;
        color: var(--gray);
    }


    @media screen and (min-width: 768px){
        h1{
            font-size: 1.5rem;
        }
    }


`;

const Main = ({data}) => {

    return (
        <MainStyle>
            <StaysStyle className="stay">
                <h1>Stays in Finland</h1>
                <p>{data.length} stays</p>
            </StaysStyle>

            {
                data.map((el, i) => {
                    return <Card key={i} data={el} />
                })
            }

        </MainStyle>
    )
}

export default Main
