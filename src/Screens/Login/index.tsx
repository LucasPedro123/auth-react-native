import React from 'react';

// Images
import logoIcon from '../../../assets/icon.png'

// Style
import * as S from './style';

import { View, Text, Button, TextInput } from 'react-native';

export function LoginScreen() {
    

    return (
        <S.containerLogin>
            <S.logoContainer>
                <S.logoImage source={logoIcon}/>
            </S.logoContainer>
        </S.containerLogin>
    )
}