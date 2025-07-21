import type { InputHTMLAttributes } from "react"


type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
    
	return (
		<input
			{...props}
			className={className}
		/>
	)
}
