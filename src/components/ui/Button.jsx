import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  children, onClick,
  type, padding, border, borderRadius,
  fontSize, fontWeight, fontColor, backgroundColor
})
{
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

  const buttonStyle = `${
    styles[
      buttonType[type],
      buttonPadding[padding],
      buttonBorder[border],
      buttonBorderRadius[borderRadius],
      buttonFontSize[fontSize],
      buttonFontWeight[fontWeight],
      buttonFontColor[fontColor],
      buttonColor[backgroundColor]
    ]
  }`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}