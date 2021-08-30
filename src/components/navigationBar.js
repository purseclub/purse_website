import * as React from 'react'
import PurseWhiteLogo from '../images/purse_white_logo.svg';
import NavigationStyle from '../styles/navigationBarStyle';

const NavigationBar = () => {
    return (
        <NavigationStyle.NavigationBarStyle >
            <img src={PurseWhiteLogo} alt="white-purse-logo"/>
        </NavigationStyle.NavigationBarStyle>
    )
}

export default NavigationBar