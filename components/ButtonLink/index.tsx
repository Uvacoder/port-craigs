import Link from 'next/link'
import React, { FC } from 'react'

import Styles from './index.module.scss'

interface IButtonLinkProps {
  as: string
  label: string
  link: string
}

export const ButtonLink: FC<IButtonLinkProps> = ({ as, label, link }) => (
  <Link href={link} as={as}>
    <a className={Styles.button}>
      {label}
      <img src="/arrow.svg" />
    </a>
  </Link>
)
