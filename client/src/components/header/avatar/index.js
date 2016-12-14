import React from 'react'
import classNames from 'classnames'
import { avatar, avatarImage, pullLeft, pullRight } from './style'

const pullDirections = {
  left: pullLeft,
  right: pullRight
}

export const Avatar = ({image, pull}) => {
  const imageTag = image ? <img src={image} className={avatarImage} /> : null
  console.log(pull, pullDirections[pull])

  return (<div className={classNames(avatar, pullDirections[pull])}>
    {imageTag}
  </div>)
}
