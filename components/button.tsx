import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 rounded-full bg-blue-500 text-white" {...props}>
      {children}
    </button>
  )
}
