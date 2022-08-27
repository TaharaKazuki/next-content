import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
