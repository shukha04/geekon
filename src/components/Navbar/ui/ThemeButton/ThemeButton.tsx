import { ButtonHTMLAttributes, forwardRef, useCallback, useEffect, useState } from 'react'
import { CheckedState, Indicator, Root } from '@radix-ui/react-checkbox'
import cx from 'clsx'
import { useTheme } from 'next-themes'
import MoonIcon from '@/assets/icons/moon-fill.svg'
import SunIcon from '@/assets/icons/sun-fill.svg'

export const ThemeButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<any>>(({
	className,
	...props
}, forwardRef) => {
	const {
		setTheme,
		resolvedTheme,
	} = useTheme()
	const [ checked, setChecked ] = useState<boolean | 'indeterminate'>('indeterminate')

	const handleCheckedChange = useCallback(
		(state: CheckedState) => {
			setTheme(state ? 'dark' : 'light')
			setChecked(state)
		},
		[ setTheme ],
	)

	useEffect(() => {
		setChecked(resolvedTheme === 'dark' ? true : 'indeterminate')
	}, [ setChecked, resolvedTheme ])

	return (
		<Root
			{...props}
			checked={checked}
			className={cx('theme-checkbox', className)}
			ref={forwardRef}
			onCheckedChange={handleCheckedChange}
		>
			<SunIcon />
			<Indicator>
				<MoonIcon />
			</Indicator>
		</Root>
	)
})

ThemeButton.displayName = Root.displayName