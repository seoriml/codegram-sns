import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  children,
  onClick,
  disabled,
  type = 'buttonBasic',
  padding = 'paddingProfile',
  border = 'borderBlue',
  borderRadius = 'borderRadiusRegular',
  fontSize = 'fontSizeRegular',
  fontWeight = 'fontWeightBold',
  fontColor = 'fontWhite',
  backgroundColor = 'colorEnable'
})
{
  // Button 컴포넌트 props 확인
  // console.log({ props })

  const buttonType = {
    buttonBasic: 'buttonBasic'
  }

  const buttonPadding = {
    paddingLogin: 'paddingLogin',
    paddingFeed: 'paddingFeed',
    paddingProfile: 'paddingProfile',
    paddingFollow: 'paddingFollow',
    paddingPost: 'paddingPost'
  }
  
  const buttonBorder = {
    borderBlue: 'borderBlue',
    borderGray: 'borderGray'
  }

  const buttonBorderRadius = {
    borderRadiusLarge: 'borderRadiusLarge',
    borderRadiusRegular: 'borderRadiusRegular',
    borderRadiusSmall: 'borderRadiusSmall',
    borderRadiusPost: 'borderRadiusPost'
  }
  
  const buttonFontSize = {
    fontSizeLarge: 'fontSizeLarge',
    fontSizeTitle: 'fontSizeTitle',
    fontSizeRegular: 'fontSizeRegular', 
    fontSizeDetail: 'fontSizeDetail',
    fontSizeSmall: 'fontSizeSmall'  
  }
  
  const buttonFontWeight = {
    fontWeightBold: 'fontWeightBold'
  }
  
  const buttonFontColor = {
    fontWhite: 'fontWhite',
    fontGray: 'fontGray'
  }

  const buttonColor = {
    colorEnable: 'colorEnable',
    colorDisable: 'colorDisable',
    colorCommon: 'colorCommon'
  }

  const buttonStyle = `
    ${styles[buttonType[type]]}
    ${styles[buttonPadding[padding]]}
    ${styles[buttonBorder[border]]}
    ${styles[buttonBorderRadius[borderRadius]]}
    ${styles[buttonFontSize[fontSize]]} 
    ${styles[buttonFontWeight[fontWeight]]}
    ${styles[buttonFontColor[fontColor]]}
    ${styles[buttonColor[backgroundColor]]}
  `;

  return (
    <button
      className = {buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}