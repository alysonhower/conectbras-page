import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const conectbras: CustomThemeConfig = {
    name: 'conectbras',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "var(--color-surface-50)",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #049DD9 
		"--color-primary-50": "217 240 249", // #d9f0f9
		"--color-primary-100": "205 235 247", // #cdebf7
		"--color-primary-200": "192 231 246", // #c0e7f6
		"--color-primary-300": "155 216 240", // #9bd8f0
		"--color-primary-400": "79 186 228", // #4fbae4
		"--color-primary-500": "4 157 217", // #049DD9
		"--color-primary-600": "4 141 195", // #048dc3
		"--color-primary-700": "3 118 163", // #0376a3
		"--color-primary-800": "2 94 130", // #025e82
		"--color-primary-900": "2 77 106", // #024d6a
		// secondary | #9FD923 
		"--color-secondary-50": "241 249 222", // #f1f9de
		"--color-secondary-100": "236 247 211", // #ecf7d3
		"--color-secondary-200": "231 246 200", // #e7f6c8
		"--color-secondary-300": "217 240 167", // #d9f0a7
		"--color-secondary-400": "188 228 101", // #bce465
		"--color-secondary-500": "159 217 35", // #9FD923
		"--color-secondary-600": "143 195 32", // #8fc320
		"--color-secondary-700": "119 163 26", // #77a31a
		"--color-secondary-800": "95 130 21", // #5f8215
		"--color-secondary-900": "78 106 17", // #4e6a11
		// tertiary | #F2D230 
		"--color-tertiary-50": "253 248 224", // #fdf8e0
		"--color-tertiary-100": "252 246 214", // #fcf6d6
		"--color-tertiary-200": "252 244 203", // #fcf4cb
		"--color-tertiary-300": "250 237 172", // #faedac
		"--color-tertiary-400": "246 224 110", // #f6e06e
		"--color-tertiary-500": "242 210 48", // #F2D230
		"--color-tertiary-600": "218 189 43", // #dabd2b
		"--color-tertiary-700": "182 158 36", // #b69e24
		"--color-tertiary-800": "145 126 29", // #917e1d
		"--color-tertiary-900": "119 103 24", // #776718
		// success | #28a745 
		"--color-success-50": "223 242 227", // #dff2e3
		"--color-success-100": "212 237 218", // #d4edda
		"--color-success-200": "201 233 209", // #c9e9d1
		"--color-success-300": "169 220 181", // #a9dcb5
		"--color-success-400": "105 193 125", // #69c17d
		"--color-success-500": "40 167 69", // #28a745
		"--color-success-600": "36 150 62", // #24963e
		"--color-success-700": "30 125 52", // #1e7d34
		"--color-success-800": "24 100 41", // #186429
		"--color-success-900": "20 82 34", // #145222
		// warning | #ffc107 
		"--color-warning-50": "255 246 218", // #fff6da
		"--color-warning-100": "255 243 205", // #fff3cd
		"--color-warning-200": "255 240 193", // #fff0c1
		"--color-warning-300": "255 230 156", // #ffe69c
		"--color-warning-400": "255 212 81", // #ffd451
		"--color-warning-500": "255 193 7", // #ffc107
		"--color-warning-600": "230 174 6", // #e6ae06
		"--color-warning-700": "191 145 5", // #bf9105
		"--color-warning-800": "153 116 4", // #997404
		"--color-warning-900": "125 95 3", // #7d5f03
		// error | #dc3545 
		"--color-error-50": "250 225 227", // #fae1e3
		"--color-error-100": "248 215 218", // #f8d7da
		"--color-error-200": "246 205 209", // #f6cdd1
		"--color-error-300": "241 174 181", // #f1aeb5
		"--color-error-400": "231 114 125", // #e7727d
		"--color-error-500": "220 53 69", // #dc3545
		"--color-error-600": "198 48 62", // #c6303e
		"--color-error-700": "165 40 52", // #a52834
		"--color-error-800": "132 32 41", // #842029
		"--color-error-900": "108 26 34", // #6c1a22
		// surface | #049DD9 
		"--color-surface-50": "217 240 249", // #d9f0f9
		"--color-surface-100": "205 235 247", // #cdebf7
		"--color-surface-200": "192 231 246", // #c0e7f6
		"--color-surface-300": "155 216 240", // #9bd8f0
		"--color-surface-400": "79 186 228", // #4fbae4
		"--color-surface-500": "4 157 217", // #049DD9
		"--color-surface-600": "4 141 195", // #048dc3
		"--color-surface-700": "3 118 163", // #0376a3
		"--color-surface-800": "2 94 130", // #025e82
		"--color-surface-900": "2 77 106", // #024d6a
		
	}
}