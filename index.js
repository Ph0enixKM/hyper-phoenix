'use strict';

const foregroundColor = '#CFB8AB'
const backgroundColor = '#2a2522'
const red = '#C7565A'
const green = '#B0B81A'
const yellow = '#E0BB3F'
const blue = '#2A968A'
const magenta = '#AA6BC4'
const cyan = '#65B57B'

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#2a2522',
	cursorColor: '#faad9b',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(150, 120, 100, 0.2)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#F2E7A9',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			background: linear-gradient(90deg, purple, orange);
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}

		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
			color: #FFDDD6;
		}

		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}

		.tabs_title {
			display: none !important;
		}
		.header_appTitle {
			background: linear-gradient(90deg,#e6b04a,#ef5a5a);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.header_windowHeader {
			overflow: hidden
		}
		
		${config.css}
	`
})
