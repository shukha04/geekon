import { forwardRef, SVGProps, useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

export const UIUXIllustration = forwardRef<SVGSVGElement, SVGProps<any>>(({ ...props }, forwardedRef) => {
	const [ scope, animate ] = useAnimate()
	const stages = stagger(0.3, { ease: 'easeIn' })

	useEffect(() => {
		animate('.button', { opacity: [ 0, 1 ] }, { delay: stages, repeatType: 'loop', repeat: Infinity, duration: 1 })
	}, [ scope, animate, stages ])

	return (
		<svg {...props} ref={forwardedRef} viewBox='0 0 256 210' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M151.069 30.994C151.069 40.2529 151.105 44.0488 151.14 39.4015C151.211 34.7898 151.211 27.1981 151.14 22.5509C151.105 17.9392 151.069 21.735 151.069 30.994Z'
				fill='black'
			/>
			<path
				d='M119.745 18.4358C119.887 18.5422 125.244 18.6131 131.735 18.5777C139.682 18.5777 143.442 18.6841 143.265 18.9324C143.158 19.1453 143.265 19.1807 143.584 19.0743C145.358 18.4003 143.017 18.2229 131.842 18.2229C125.102 18.2229 119.638 18.3293 119.745 18.4358Z'
				fill='black'
			/>
			<path
				d='M64.8651 33.1222C32.1571 33.2641 22.1177 33.406 21.5501 33.7253C20.3439 34.4348 18.9959 36.2085 18.5702 37.663C18.3219 38.5499 18.2509 60.5798 18.3219 105.491L18.3928 172.007L18.5702 59.0189H204.459V71.5771C204.459 78.4947 204.566 84.2417 204.743 84.3126C204.885 84.419 204.991 74.8053 204.991 62.9921V41.4588L221.061 41.3524L237.096 41.2814L237.061 39.756C237.061 38.9401 236.848 37.7339 236.6 37.0954C236.032 35.4635 234.045 33.5479 232.697 33.2996C232.094 33.1931 214.073 33.0867 192.681 33.0158L153.73 32.9448L153.659 42.3457L153.553 51.7466L132.622 51.853C121.128 51.8885 111.337 51.853 110.912 51.7466L110.096 51.5692V32.7674L108.783 32.8384C108.038 32.9093 88.2786 33.0158 64.8651 33.1222ZM36.3077 41.8136C38.6136 43.0197 39.5004 45.9287 38.2943 48.341C36.9462 50.9306 33.3633 51.3918 31.0574 49.2988C29.8512 48.1636 29.7448 47.9153 29.7448 46.1415C29.7448 44.013 30.2415 43.1616 32.2281 41.9555C33.5052 41.1395 34.9242 41.1041 36.3077 41.8136ZM50.746 41.9909C52.3779 42.9842 53.0874 44.2613 53.0519 46.106C53.0519 47.8443 52.3779 49.1214 51.0298 50.0083C49.8946 50.7533 47.234 50.7887 46.0988 50.0083C43.9703 48.6248 43.2253 45.8222 44.4315 43.8356C45.9569 41.4588 48.582 40.6784 50.746 41.9909ZM65.007 41.9909C67.845 43.4099 68.3416 47.1703 65.9648 49.3343C65.2553 49.9728 64.3329 50.5049 63.9072 50.5404C60.2178 50.7178 58.3022 49.1569 58.3022 45.9996C58.3022 44.0485 58.9053 42.9842 60.5726 41.9555C61.9916 41.1041 63.3042 41.1041 65.007 41.9909Z'
				fill='black'
			/>
			<path
				d='M119.319 42.1331C118.681 42.9491 118.645 43.091 119.177 42.5943C119.851 42.0622 120.987 41.9912 131.948 41.9912C140.853 41.9912 144.116 42.0977 144.436 42.4169C144.755 42.7362 144.755 42.5943 144.436 41.8848C143.974 40.927 143.442 40.6077 143.442 41.2817C143.442 41.7429 121.022 41.7784 120.561 41.3172C120.348 41.1398 119.851 41.4591 119.319 42.1331Z'
				fill='black'
			/>
			<path
				d='M208.007 51.5692L230.462 51.4983L252.883 51.3918L233.797 51.3209L214.712 51.2144L214.924 44.829H208.007V51.5692Z'
				fill='black'
			/>
			<path
				d='M150.715 48.3764C150.573 48.6248 144.045 48.7312 131.665 48.7312C121.306 48.7312 112.756 48.8021 112.65 48.9086C112.543 49.015 121.199 49.0859 131.842 49.0859C148.87 49.0859 151.247 49.015 151.247 48.5538C151.247 47.9507 151.034 47.8798 150.715 48.3764Z'
				fill='black'
			/>
			<path
				d='M208.007 61.5022L230.285 61.4312L252.528 61.3248L233.62 61.2539L214.712 61.1474L214.924 54.7619H208.007V61.5022Z'
				fill='black'
			/>
			<path d='M208.007 71.4352H214.924V64.6949H208.007V71.4352Z' fill='black' />
			<path
				d='M29.3546 81.5458C29.3546 87.9667 29.4256 90.6628 29.461 87.5056C29.532 84.3483 29.532 79.098 29.461 75.7988C29.4256 72.5351 29.3546 75.0893 29.3546 81.5458Z'
				fill='black'
			/>
			<path d='M208.184 81.191L214.924 81.4039V74.6282H207.971L208.184 81.191Z' fill='black' />
			<path
				d='M255.011 84.2062C254.869 84.4191 246.071 84.5965 230.072 84.6319C211.625 84.7029 209.319 84.7384 221.062 84.8093L236.741 84.9157V115.992L234.968 115.921L233.194 115.885V137.277C233.194 149.055 233.3 158.668 233.478 158.633C233.62 158.597 234.116 158.704 234.578 158.846C235.074 159.023 235.535 158.988 235.784 158.739C235.997 158.526 236.316 158.349 236.458 158.349C236.6 158.349 236.777 161.435 236.848 165.16C236.883 168.921 236.954 152.425 237.025 128.444L237.096 84.9157H245.93C253.344 84.9157 254.834 84.8448 255.189 84.3836C255.437 84.0998 255.543 83.8515 255.437 83.8515C255.33 83.8515 255.118 83.9934 255.011 84.2062Z'
				fill='black'
			/>
			<path
				d='M88.8107 97.5451C90.0169 97.7934 92.713 97.8643 92.713 97.616C92.713 97.4386 91.7197 97.3677 90.5135 97.3677C89.2719 97.4032 88.5269 97.4741 88.8107 97.5451Z'
				fill='black'
			/>
			<path
				d='M185.551 97.5805C185.445 97.7579 186.119 97.8288 187.006 97.7579C189.595 97.5805 189.915 97.4031 187.715 97.3677C186.615 97.3677 185.622 97.4386 185.551 97.5805Z'
				fill='black'
			/>
			<path
				d='M39.9261 99.8155C39.9261 100.489 39.9971 100.773 40.1035 100.419C40.1745 100.099 40.1745 99.5317 40.1035 99.1769C39.9971 98.8576 39.9261 99.1414 39.9261 99.8155Z'
				fill='black'
			/>
			<path
				d='M137.979 99.3185C137.66 100.134 138.05 100.525 139.221 100.525C140.072 100.525 140.249 100.383 140.249 99.6378C140.249 98.8928 140.072 98.751 139.221 98.751C138.618 98.751 138.121 98.9638 137.979 99.3185Z'
				fill='black'
			/>
			<path
				d='M29.3546 104.214C29.2482 104.463 29.2127 105.633 29.2836 106.769L29.3901 108.862L34.5339 109.074V103.718H32.0507C30.2769 103.718 29.4965 103.86 29.3546 104.214Z'
				fill='black'
			/>
			<path
				d='M37.5139 104.179C37.4074 104.462 37.372 105.633 37.4429 106.768L37.5493 108.861H42.5158V103.895L40.1035 103.788C38.2943 103.717 37.6558 103.824 37.5139 104.179Z'
				fill='black'
			/>
			<path d='M45.5312 109.074L50.6751 108.862L50.8879 103.718H45.5312V109.074Z' fill='black' />
			<path d='M53.5131 108.862L58.657 109.074V103.718H53.3002L53.5131 108.862Z' fill='black' />
			<path d='M61.6723 108.862L66.8162 109.074V103.682L61.4595 103.824L61.6723 108.862Z' fill='black' />
			<path
				d='M4.84137 122.058C5.76372 122.129 7.25368 122.129 8.2115 122.058C9.13385 121.987 8.3534 121.952 6.5087 121.952C4.664 121.952 3.88355 121.987 4.84137 122.058Z'
				fill='black'
			/>
			<path
				d='M187.183 123.513C187.006 123.654 186.757 124.187 186.651 124.719C186.473 125.606 186.58 125.712 187.467 125.712C188.354 125.712 188.496 125.57 188.496 124.683C188.496 123.654 187.857 123.087 187.183 123.513Z'
				fill='black'
			/>
			<path
				d='M89.7685 123.796C89.6266 123.938 89.5202 124.435 89.5202 124.896C89.5202 125.57 89.6976 125.712 90.6199 125.712C91.5778 125.712 91.6842 125.606 91.5778 124.719C91.4713 123.796 90.3716 123.193 89.7685 123.796Z'
				fill='black'
			/>
			<path
				d='M187.006 147.423C186.722 147.565 187.147 147.706 188.07 147.706C188.886 147.706 189.56 147.636 189.56 147.565C189.56 147.281 187.431 147.139 187.006 147.423Z'
				fill='black'
			/>
			<path
				d='M89.4493 147.6C90.0524 147.671 91.1166 147.671 91.7552 147.6C92.3582 147.529 91.8616 147.458 90.5845 147.458C89.3074 147.458 88.8107 147.529 89.4493 147.6Z'
				fill='black'
			/>
			<path
				d='M138.121 148.948C138.121 149.409 135.247 149.48 115.346 149.587L92.5356 149.658L115.346 149.764C130.246 149.799 138.121 149.941 138.121 150.19C138.121 150.367 138.618 150.544 139.185 150.544C139.788 150.544 140.249 150.367 140.249 150.19C140.249 149.941 148.054 149.835 162.953 149.835C175.441 149.835 185.657 149.729 185.657 149.551C185.657 149.409 175.441 149.338 162.953 149.409C142.875 149.48 140.249 149.445 140.249 148.948C140.249 148.593 139.895 148.416 139.185 148.416C138.476 148.416 138.121 148.593 138.121 148.948Z'
				fill='black'
			/>
			<path
				d='M188.425 149.161C187.36 149.587 186.544 151.325 187.041 152.247C187.36 152.85 190.269 160.584 191.866 165.089C192.327 166.366 193.32 169.169 194.136 171.368C194.952 173.568 195.59 175.448 195.59 175.59C195.59 175.696 195.839 176.299 196.123 176.902C196.371 177.541 197.293 179.776 198.074 181.94C198.89 184.068 199.706 186.055 199.918 186.268C200.522 187.013 202.473 186.8 203.289 185.913C203.998 185.168 206.623 180.521 209.319 175.306C210.632 172.752 210.419 172.894 218.827 168.317C223.722 165.621 224.609 165.018 224.822 164.202C225.248 162.5 224.538 161.684 221.771 160.655C220.352 160.158 218.791 159.555 218.294 159.342C217.798 159.165 216.521 158.704 215.421 158.349C213.399 157.675 205.63 154.837 200.912 153.028C189.524 148.664 189.702 148.735 188.425 149.161Z'
				fill='black'
			/>
			<path
				d='M76.1816 181.585C76.1816 187.616 76.2526 190.17 76.288 187.19C76.359 184.246 76.359 179.279 76.288 176.193C76.2526 173.107 76.1816 175.519 76.1816 181.585Z'
				fill='black'
			/>
			<path d='M99.0985 177.86H103.001V173.958H99.0985V177.86Z' fill='black' />
			<path d='M93.0677 186.374H83.1347V189.212H95.9057V176.441H93.0677V186.374Z' fill='black' />
			<path d='M99.0985 183.536H103.001V179.634H99.0985V183.536Z' fill='black' />
			<path d='M99.0985 189.212H103.001V185.31H99.0985V189.212Z' fill='black' />
			<path
				d='M106.903 192.689C106.903 193.008 103.001 193.15 91.7551 193.186L76.5718 193.292L91.6132 193.363C105.803 193.47 107.967 193.363 107.151 192.512C107.009 192.405 106.903 192.476 106.903 192.689Z'
				fill='black'
			/>
			<path
				d='M110.628 9.07023C110.521 9.31856 110.486 18.9323 110.521 30.4617L110.628 51.3919L132.019 51.4983L153.375 51.5693V8.64453H132.09C115.381 8.64453 110.734 8.75096 110.628 9.07023ZM151.601 49.4408L132.019 49.3698L112.402 49.2634L112.295 30.0005L112.224 10.773H151.601V49.4408Z'
				fill='white'
			/>
			<path d='M120.206 17.868H143.974L150.005 11.8373H114.175L120.206 17.868Z' fill='white' />
			<path
				d='M113.288 29.8586C113.288 39.4368 113.359 47.3123 113.466 47.3123C113.537 47.3123 114.991 45.9997 116.659 44.4388L119.674 41.5299V18.7549L113.288 12.3694V29.8586Z'
				fill='white'
			/>
			<path
				d='M147.628 15.5267L144.506 18.5066V41.4589L150.892 47.8444V30.1779C150.892 20.4932 150.857 12.5468 150.821 12.5468C150.75 12.5823 149.331 13.8948 147.628 15.5267Z'
				fill='white'
			/>
			<path d='M127.656 25.3178H131.913L136.17 25.2823L139.504 22.125L142.839 18.9323H121.27L127.656 25.3178Z' fill='white' />
			<path
				d='M120.383 40.7494L127.124 34.0092V30.0005C127.124 27.0915 126.982 25.8499 126.663 25.5661C126.379 25.3178 124.889 23.8633 123.292 22.3024L120.383 19.4644V40.7494Z'
				fill='white'
			/>
			<path
				d='M136.702 26.2046V34.0446L139.895 37.2018C141.668 38.9046 143.194 40.2527 143.265 40.1463C143.371 40.0398 143.407 35.3926 143.371 29.7876L143.265 19.6417L136.702 26.2046Z'
				fill='white'
			/>
			<path d='M128.188 33.8318H135.638V26.382H128.188V33.8318Z' fill='white' />
			<path d='M121.27 41.2815H132.09L142.91 41.2461L136.17 34.9315L131.913 34.896H127.656L121.27 41.2815Z' fill='white' />
			<path d='M116.978 45.3612L113.821 48.3765H150.005L143.974 42.3458H120.171L116.978 45.3612Z' fill='white' />
			<path
				d='M32.5119 42.1329C30.3479 43.0907 29.4256 45.6449 30.4543 47.8089C31.2703 49.5117 32.7602 50.2922 34.8533 50.0438C38.3298 49.6536 39.7133 45.7868 37.301 43.2326C35.9175 41.8136 34.1792 41.3879 32.5119 42.1329Z'
				fill='white'
			/>
			<path
				d='M46.7728 42.2039C45.1055 43.0553 44.467 44.0841 44.467 45.9997C44.467 47.4897 44.6443 47.9154 45.6731 48.9441C46.7019 49.9729 47.1276 50.1503 48.5466 50.1503C49.9656 50.1503 50.3913 49.9729 51.4201 48.9441C52.0941 48.2701 52.6262 47.3478 52.6617 46.8866C52.8036 44.2969 52.0586 42.8779 50.2494 42.1329C48.7595 41.4944 48.0854 41.5299 46.7728 42.2039Z'
				fill='white'
			/>
			<path
				d='M60.8919 42.2039C58.7989 43.2682 58.0539 46.1771 59.3665 48.3056C60.7855 50.647 64.7587 50.8243 66.2486 48.5894C68.6964 44.8291 64.8296 40.2173 60.8919 42.2039Z'
				fill='white'
			/>
			<path
				d='M205.417 41.8846C205.275 41.991 205.169 51.5693 205.169 63.1696V84.2063H254.834V41.6363H230.25C216.698 41.6363 205.523 41.7427 205.417 41.8846ZM252.634 44.4033C252.954 44.6162 253.06 45.645 252.989 48.2346L252.883 51.7467H207.829L207.723 48.412C207.687 46.5673 207.687 44.8645 207.794 44.5807C207.936 44.1905 212.051 44.1195 230.072 44.1195C242.24 44.1195 252.386 44.2614 252.634 44.4033ZM252.883 61.6797H207.829L207.617 54.4428L211.093 54.3363C213.009 54.2654 223.19 54.3009 233.726 54.4073L252.883 54.5847V61.6797ZM252.883 71.6127L230.285 71.7191L207.652 71.79V64.3403L230.285 64.4112L252.883 64.5177V71.6127ZM252.883 81.5457H207.829L207.617 74.2733L230.25 74.3442L252.883 74.4507V81.5457Z'
				fill='white'
			/>
			<path
				d='M215.102 50.8598H251.996V45.1838H215.102V50.8598ZM249.796 46.6737C250.577 47.4542 250.293 49.0506 249.335 49.5117C248.59 49.831 248.342 49.7955 247.739 49.2634C246.462 48.1282 247.029 46.248 248.626 46.248C249.051 46.248 249.548 46.4254 249.796 46.6737Z'
				fill='white'
			/>
			<path
				d='M248.094 48.0217C248.094 48.5538 248.271 48.7312 248.732 48.6603C249.051 48.5893 249.335 48.3055 249.335 48.0217C249.335 47.7379 249.051 47.4541 248.732 47.3832C248.271 47.3122 248.094 47.4896 248.094 48.0217Z'
				fill='white'
			/>
			<path
				d='M215.102 60.7928H251.996V55.1168H215.102V60.7928ZM249.796 56.6067C250.47 57.2808 250.328 58.9481 249.548 59.3738C248.59 59.8704 248.235 59.835 247.597 59.1609C246.462 58.0612 247.1 56.181 248.626 56.181C249.051 56.181 249.548 56.3584 249.796 56.6067Z'
				fill='white'
			/>
			<path
				d='M248.094 57.9547C248.094 58.4868 248.271 58.6642 248.732 58.5933C249.051 58.5223 249.335 58.2385 249.335 57.9547C249.335 57.6709 249.051 57.3871 248.732 57.3162C248.271 57.2452 248.094 57.4226 248.094 57.9547Z'
				fill='white'
			/>
			<path
				d='M215.35 65.2981C215.208 65.4045 215.102 66.6816 215.102 68.1361V70.7258H251.996V65.0498H233.797C223.758 65.0498 215.456 65.1562 215.35 65.2981ZM249.796 66.5397C250.045 66.7881 250.222 67.3911 250.222 67.8878C250.222 69.5551 248.732 70.2291 247.597 69.0939C246.462 67.9942 247.1 66.114 248.626 66.114C249.051 66.114 249.548 66.2914 249.796 66.5397Z'
				fill='white'
			/>
			<path
				d='M248.094 67.8877C248.094 68.4198 248.271 68.5972 248.732 68.5263C249.051 68.4553 249.335 68.1715 249.335 67.8877C249.335 67.6039 249.051 67.3201 248.732 67.2492C248.271 67.1782 248.094 67.3556 248.094 67.8877Z'
				fill='white'
			/>
			<path
				d='M215.102 80.6588H251.996V74.9828H215.102V80.6588ZM249.832 76.5437C250.435 77.2532 250.187 78.9205 249.442 79.3462C248.448 79.9848 247.029 79.0979 247.029 77.8563C247.029 76.2954 248.909 75.4085 249.832 76.5437Z'
				fill='white'
			/>
			<path
				d='M248.094 77.8207C248.094 78.3528 248.271 78.5302 248.732 78.4593C249.051 78.3883 249.335 78.1045 249.335 77.8207C249.335 77.5369 249.051 77.2531 248.732 77.1822C248.271 77.1112 248.094 77.2886 248.094 77.8207Z'
				fill='white'
			/>
			<path
				d='M18.925 172.042L19.7409 173.603C21.2663 176.619 19.4571 176.441 49.4335 176.37L75.8624 176.264L76.2171 169.524L91.4714 169.453C100.695 169.382 106.938 169.488 107.258 169.701C107.648 169.949 107.825 170.872 107.896 173.249L108.038 176.441H151.85C193.427 176.441 195.661 176.406 195.413 175.838C194.881 174.526 190.163 161.968 189.382 159.768C188.921 158.491 188.141 156.327 187.644 154.979C186.97 153.063 186.58 152.46 185.941 152.318C185.338 152.176 185.09 151.822 185.019 150.97L184.913 149.835H162.741C143.371 149.835 140.569 149.906 140.391 150.367C140.108 151.112 137.766 151.112 137.766 150.367C137.766 149.906 135.141 149.835 115.523 149.906L93.2451 150.012L93.0677 151.077C92.8904 152.105 92.8194 152.141 90.8328 152.247C89.6976 152.318 88.5269 152.176 88.2786 151.964C87.8529 151.609 87.6401 148.416 87.9948 147.423C88.1012 147.21 88.5624 146.997 89.0236 146.997H89.875V136.567C89.875 129.969 89.7331 126.031 89.5202 125.889C89.3428 125.783 89.1655 125.109 89.1655 124.435C89.1655 123.761 89.3428 123.229 89.5202 123.229C89.7331 123.229 89.875 119.504 89.875 112.764V102.299H89.0236C88.5624 102.299 88.0658 102.05 87.9593 101.731C87.6401 100.915 87.711 97.7577 88.0303 97.5449C88.1722 97.4739 89.3429 97.3321 90.5845 97.2966C92.8549 97.1902 92.8904 97.2256 92.9968 98.148L93.1032 99.1058H115.452C130.104 99.1058 137.766 98.9994 137.766 98.751C137.766 98.5382 138.334 98.3963 139.008 98.3963C139.682 98.3963 140.249 98.5382 140.249 98.751C140.249 98.9994 147.948 99.1058 162.599 99.1058H184.948V98.2189C184.948 97.3675 185.019 97.332 187.609 97.332H190.269V102.299H188.141V112.764C188.141 119.504 188.283 123.229 188.495 123.229C188.708 123.229 188.85 123.867 188.85 124.648C188.85 125.428 188.708 126.067 188.495 126.067C188.283 126.067 188.141 129.792 188.141 136.532V146.997H189.205C190.092 146.997 190.269 147.139 190.269 147.848C190.269 148.452 190.553 148.806 191.263 149.055C191.795 149.232 197.719 151.396 204.459 153.844C225.815 161.648 225.389 161.435 225.389 163.67C225.389 165.089 224.396 165.905 219.43 168.459C212.086 172.291 211.27 172.823 210.313 174.455C209.816 175.306 209.426 176.087 209.426 176.228C209.426 176.335 214.641 176.406 221.062 176.37L232.662 176.264L232.839 85.2705H205.204L204.672 84.4901C204.175 83.8161 204.104 81.9714 204.104 71.7191V59.7285H18.925V172.042ZM69.335 66.8235C69.9735 67.1783 70.009 67.8168 70.009 89.2792C70.009 105.988 69.9026 111.487 69.5833 111.806C69.264 112.125 64.0137 112.232 48.1564 112.232C29.532 112.232 27.0842 112.161 26.5876 111.664C26.0909 111.167 26.02 108.649 26.02 89.3502C26.02 70.0518 26.0909 67.533 26.5876 67.0364C27.0842 66.5397 29.4965 66.4688 47.8726 66.4688C61.495 66.4688 68.8738 66.6107 69.335 66.8235Z'
				fill='white'
			/>
			<path
				d='M27.3326 67.7814C27.1907 67.8878 27.0842 77.7144 27.0842 89.5985V111.167H68.9447V67.533H48.2628C36.8753 67.533 27.439 67.6395 27.3326 67.7814ZM67.1355 69.8034C67.4193 70.1227 67.5257 73.5993 67.4548 81.7585L67.3484 93.2524H29.0354L28.9289 81.723C28.8935 75.373 28.9289 70.0163 29.0354 69.768C29.2837 69.0585 66.5679 69.0939 67.1355 69.8034ZM56.6704 96.0904C56.8123 96.5161 57.7701 96.6225 62.0271 96.6225C65.2199 96.6225 67.171 96.7644 67.171 96.9773C67.171 97.1901 65.1489 97.332 61.8497 97.332C57.3444 97.332 56.5285 97.403 56.5285 97.8642C56.5285 98.148 56.3511 98.3963 56.1737 98.3963C55.9609 98.3963 55.7126 98.148 55.6061 97.8642C55.4288 97.403 53.5841 97.332 42.1256 97.332C33.5052 97.332 28.858 97.1901 28.858 96.9773C28.858 96.7644 33.5052 96.6225 42.1256 96.6225C53.5841 96.6225 55.4288 96.5516 55.6061 96.0904C55.7126 95.8066 55.9609 95.5583 56.1383 95.5583C56.3156 95.5583 56.5285 95.8066 56.6704 96.0904ZM40.3519 98.9284C40.5293 99.3896 42.3385 99.4605 53.8679 99.4605C65.4682 99.4605 67.171 99.5315 67.171 99.9927C67.171 100.454 65.4682 100.525 53.9388 100.525C43.8639 100.525 40.6002 100.631 40.2809 100.95C39.9262 101.305 39.7843 101.305 39.5714 100.986C39.3586 100.667 37.7267 100.525 34.1792 100.454C30.4898 100.383 29.0354 100.241 28.9289 99.8862C28.8225 99.567 30.0287 99.4605 34.1438 99.4605C38.6846 99.4605 39.5005 99.3896 39.5005 98.9284C39.5005 98.6446 39.6424 98.3963 39.8198 98.3963C39.9971 98.3963 40.21 98.6446 40.3519 98.9284ZM35.0306 103.93C35.3499 104.746 35.279 108.436 34.9242 108.968C34.7468 109.287 33.86 109.394 31.8379 109.323L29.0354 109.216L28.9289 106.768C28.858 105.42 28.8935 104.108 28.9999 103.824C29.2837 103.079 34.7468 103.185 35.0306 103.93ZM42.8706 109.216L40.0681 109.323C38.046 109.394 37.1591 109.287 36.9818 108.968C36.5206 108.223 36.5915 104.285 37.0882 103.788C37.4075 103.469 38.4362 103.363 40.21 103.434L42.8706 103.54V109.216ZM51.1363 105.669C51.3137 109.394 51.3137 109.429 47.9081 109.323L44.9991 109.216L44.8927 107.088C44.7153 103.363 44.7153 103.327 48.1209 103.434L51.0299 103.54L51.1363 105.669ZM59.1891 109.216H53.1584L53.0519 106.768C52.981 105.42 53.0165 104.108 53.1229 103.824C53.2648 103.434 54.0098 103.363 56.2447 103.434L59.1891 103.54V109.216ZM67.2774 104.888C67.4548 105.633 67.4903 106.946 67.3484 107.833L67.1355 109.429L61.3176 109.216L61.2112 106.768C61.0693 103.256 61.0338 103.327 64.2266 103.434L66.9581 103.54L67.2774 104.888Z'
				fill='white'
			/>
			<path
				d='M29.6384 81.4394L29.7449 92.5431L47.305 92.6495C56.9542 92.685 65.2199 92.6495 65.681 92.5431L66.4615 92.3657V70.3712H29.5675L29.6384 81.4394Z'
				fill='white'
			/>
			<path d='M233.904 115.602H236.387V85.2705H233.904V115.602Z' fill='white' />
			<path d='M88.8107 101.234H92.3582V98.0415H88.8107V101.234Z' fill='white' />
			<path d='M186.012 101.234H189.205V98.0415H186.012V101.234Z' fill='white' />
			<path
				d='M93.316 100.418C93.1741 100.525 93.0677 101.021 93.0677 101.447C93.0677 102.05 92.8194 102.263 92.1099 102.369L91.1166 102.476L91.0102 112.835C90.9392 121.916 91.0102 123.229 91.4714 123.229C92.2163 123.229 92.2163 125.641 91.4714 125.925C91.0102 126.102 90.9392 127.628 90.9392 136.567V146.997H92.0035C92.9613 146.997 93.0677 147.103 93.0677 148.061V149.126H115.417C130.068 149.126 137.766 149.019 137.766 148.771C137.766 148.558 138.334 148.416 139.008 148.416C139.682 148.416 140.249 148.558 140.249 148.771C140.249 149.019 147.912 149.126 162.563 149.126H184.913L185.019 148.132C185.09 147.387 185.338 147.139 186.119 147.068L187.076 146.962V136.532C187.076 127.628 187.006 126.102 186.544 125.925C185.835 125.677 185.835 123.725 186.544 123.335C187.006 123.051 187.076 121.632 187.006 112.764L186.899 102.476L185.941 102.369C185.09 102.263 184.948 102.086 184.948 101.199V100.17H162.776C143.371 100.17 140.569 100.241 140.391 100.702C140.249 101.021 139.717 101.234 138.972 101.234C138.121 101.234 137.766 101.057 137.766 100.702C137.766 100.241 135.07 100.17 115.665 100.17C103.497 100.17 93.4225 100.276 93.316 100.418Z'
				fill='white'
			/>
			<path d='M88.8107 151.289L90.5135 151.183L92.1809 151.077V147.884L90.5135 147.777L88.8107 147.671V151.289Z' fill='white' />
			<path
				d='M186.012 149.551C186.012 151.432 186.154 151.502 186.864 150.119C187.076 149.658 187.715 149.09 188.247 148.842C189.666 148.168 189.418 147.707 187.609 147.707H186.012V149.551Z'
				fill='white'
			/>
			<path
				d='M233.904 167.289C233.904 172.042 234.045 175.377 234.223 175.377C234.4 175.377 234.932 174.845 235.393 174.206C236.174 173.142 236.209 172.716 236.316 166.083L236.422 159.13L233.904 159.2V167.289Z'
				fill='white'
			/>
			<path
				d='M76.9976 170.304C76.8557 170.411 76.7492 175.519 76.7492 181.656V192.76H106.903L106.832 181.479L106.726 170.233L91.968 170.127C83.8797 170.091 77.1395 170.162 76.9976 170.304ZM93.3515 174.738C93.4579 176.051 93.4934 176.087 94.877 176.087H96.2605L96.1895 182.72L96.0831 189.39L89.4493 189.496L82.78 189.567V188.361C82.78 187.19 82.709 187.119 81.4674 187.013L80.1194 186.906L80.0129 180.379C79.942 175.377 80.0484 173.781 80.3677 173.532C80.616 173.39 83.6314 173.284 87.037 173.355L93.2451 173.426L93.3515 174.738ZM103.285 173.568C103.604 173.745 103.71 174.49 103.639 175.945L103.533 178.038L98.7437 178.251V175.98C98.7437 174.738 98.8502 173.603 98.9921 173.497C99.3113 173.142 102.717 173.213 103.285 173.568ZM103.32 179.421C103.568 179.705 103.71 180.734 103.639 181.833L103.533 183.714L98.7437 183.927V181.656C98.7437 180.414 98.8502 179.279 98.9921 179.173C99.4532 178.712 102.894 178.925 103.32 179.421ZM103.32 185.097C103.568 185.381 103.71 186.41 103.639 187.509L103.533 189.39H98.9211L98.8147 187.474C98.7437 186.445 98.7792 185.346 98.8856 185.097C99.134 184.423 102.752 184.423 103.32 185.097Z'
				fill='white'
			/>
			<path d='M81.0062 186.02L86.7887 185.949L92.5356 185.842L92.642 180.06L92.713 174.313H81.0062V186.02Z' fill='white' />
			<path
				className='star'
				d='M197.754 1.72764C197.47 2.57904 196.974 3.14664 196.193 3.46591L195.058 3.92709L196.158 4.49469C196.761 4.81396 197.47 5.59441 197.754 6.19749L198.215 7.36816L198.677 6.23296C198.925 5.62989 199.634 4.84944 200.273 4.53016L201.408 3.92709L200.202 3.35949C199.422 2.96926 198.889 2.40166 198.641 1.62121L198.215 0.450539L197.754 1.72764Z'
				fill='black'
			/>
			<path
				className='star_2'
				d='M9.31122 19.7482C8.99194 20.6705 8.53077 21.1672 7.64389 21.5219L6.43774 22.0186L7.57294 22.4797C8.31792 22.799 8.92099 23.4021 9.27574 24.218L9.80787 25.4951L10.269 24.3599C10.5528 23.6859 11.2623 22.9409 12.0073 22.5507L13.2844 21.9121L12.0428 21.4864C11.1559 21.1672 10.6947 20.6705 10.3045 19.7482L9.80787 18.4356L9.31122 19.7482Z'
				fill='black'
			/>
			<path
				className='star_3'
				d='M247.029 201.876C246.745 202.692 246.248 203.153 245.397 203.473C243.872 204.005 243.872 204.324 245.397 204.821C246.284 205.105 246.745 205.53 247.029 206.346L247.419 207.481L247.916 206.311C248.235 205.566 248.803 204.998 249.512 204.785C250.825 204.289 250.86 203.934 249.583 203.473C248.98 203.26 248.341 202.621 247.987 201.947L247.419 200.741L247.029 201.876Z'
				fill='black'
			/>
			<path
				className='star_4'
				d='M40.5998 203.615C40.316 204.431 39.7484 205.034 38.897 205.496L37.6199 206.134L38.7196 206.524C39.4291 206.773 40.0676 207.376 40.4933 208.227L41.1674 209.575L41.664 208.263C41.9833 207.34 42.4445 206.844 43.3313 206.489L44.5375 205.992L43.4023 205.531C42.6218 205.212 42.0542 204.609 41.664 203.722L41.0609 202.374L40.5998 203.615Z'
				fill='black'
			/>
			<g className='buttons' ref={scope}>
				<path
					d='M0.477783 185.664H12.5393L12.4683 152.566L12.3619 119.504L6.43758 119.397L0.477783 119.326V185.664ZM10.4463 128.94L2.78366 128.727L2.67723 125.57C2.60628 123.831 2.67723 122.164 2.74818 121.916C2.89008 121.526 3.77696 121.455 6.57948 121.526L10.2334 121.632L10.4463 128.94ZM10.2334 137.951L6.72138 138.057C4.13171 138.128 3.10293 138.021 2.89008 137.702C2.57081 137.135 2.49986 131.246 2.85461 130.926C2.96103 130.785 4.73478 130.678 6.75686 130.678H10.4463L10.2334 137.951ZM10.3398 143.236C10.4108 145.826 10.3044 146.855 9.98508 147.068C9.24011 147.529 3.52863 147.422 3.03198 146.926C2.57081 146.465 2.42891 141.143 2.81913 140.079C2.99651 139.618 3.59958 139.547 6.65043 139.618L10.2334 139.724L10.3398 143.236ZM10.2334 156.043L6.72138 156.149C4.13171 156.22 3.10293 156.114 2.89008 155.794C2.57081 155.227 2.49986 149.338 2.85461 149.019C2.96103 148.877 4.73478 148.77 6.75686 148.77H10.4463L10.2334 156.043ZM10.4463 165.124L2.78366 164.912L2.67723 162.074C2.49986 157.426 2.35796 157.604 6.61496 157.71L10.2334 157.817L10.4463 165.124ZM9.63033 166.721C10.4108 166.934 10.4463 167.076 10.3398 170.552L10.2334 174.135L6.72138 174.241C4.13171 174.312 3.10293 174.206 2.89008 173.887C2.42891 173.142 2.53533 167.43 3.03198 166.934C3.49316 166.472 8.17586 166.331 9.63033 166.721ZM10.4463 183.217L2.78366 183.004L2.67723 180.166C2.49986 175.519 2.35796 175.696 6.61496 175.802L10.2334 175.909L10.4463 183.217Z'
					fill='white'
				/>
				<path className='button' d='M3.67053 128.195H9.34653V122.519H3.67053V128.195Z' fill='white' />
				<path className='button' d='M3.84789 146.11L9.34651 146.323V140.611H3.63504L3.84789 146.11Z' fill='white' />
				<path
					className='button'
					d='M3.91886 167.785C3.77696 167.927 3.67053 169.204 3.67053 170.659V173.248H9.38201L9.16916 167.75L6.68591 167.643C5.30238 167.608 4.06076 167.643 3.91886 167.785Z'
					fill='white'
				/>
				<path
					className='button'
					d='M3.31574 137.773H6.43754C8.17582 137.773 9.66577 137.702 9.73672 137.631C9.80767 137.56 9.84314 136.035 9.77219 134.261L9.66577 131.033H3.31574V137.773Z'
					fill='black'
				/>
				<path className='button' d='M3.31578 155.901L9.87866 155.688L9.94961 149.125H3.31578V155.901Z' fill='black' />
				<path
					className='button'
					d='M3.31578 164.734H6.72138C9.70128 164.734 10.0915 164.663 9.91413 164.166C9.80771 163.847 9.70128 162.357 9.70128 160.796V157.994H3.31578V164.734Z'
					fill='black'
				/>
				<path
					className='button' d='M3.31578 183.181H6.47306C10.127 183.181 10.056 183.288 10.056 178.995V176.441H3.31578V183.181Z'
					fill='black'
				/>
			</g>
		</svg>
	)
})

UIUXIllustration.displayName = 'UIUXIllustration'
