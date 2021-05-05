import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'rigth'
  disabled?: boolean
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  label,
  labelFor = '',
  initialValue = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
