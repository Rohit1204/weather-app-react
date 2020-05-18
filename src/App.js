import React ,{Component} from 'react';
import styled from 'styled-components';
import SearchCity from './components/SearchCity';
import device from './responsive';
import './App.css';
const AppTitle = styled.h1`
display: block;
height: 64px;
margin: 0;
padding: 20px 0;
font-size: 20px;
text-transform: uppercase;
font-weight: 400;
color: #ffffff;
transition: 0.3s 1.4s;
opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};
${({ secondary }) =>
  secondary &&
  `
  opacity: 1;
  height: auto;
  position: relative;
  padding: 20px 0;
  font-size: 30px;
  top: 20%;
  text-align: center;
  transition: .5s;
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 70px;
  }
  
`}
${({ showResult }) =>
  showResult &&
  `
  opacity: 0;
  visibility: hidden;
  top: 10%;
`}
`;

const WeatherWrapper = styled.div`
max-width: 1500px;
margin: 0 auto;
height: calc(100vh - 64px);
width: 100%;
position: relative;
`;


class App extends Component{
  state = {
    value: '',
    weatherInfo: null,
    error: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render(){
    const { value, weatherInfo, error } = this.state;
    return(
      <>
      <AppTitle>Weather app</AppTitle>
      <WeatherWrapper>
        <AppTitle>
          Weather app
        </AppTitle>
        <SearchCity
          showResult={(weatherInfo || error) && true}
          change={this.handleInputChange}
        />
      </WeatherWrapper>
    </>
        );
      }
}

export default App;

