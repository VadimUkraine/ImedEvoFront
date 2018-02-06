import React from 'react'

const MenuButton = (props) => (
  <button style={{
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '31px',
    right: '40px',
    zIndex: '20'
  }} {...props} className="menu-button">
    <svg
      x="0px"
      y="0px"
      width="40px"
      height="40px"
      viewBox="0 0 124 124"
      style={{enableBackground: 'new 0 0 124 124'}}>
      <path style={{fill: '#5bb3e3'}}
            d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
      <path style={{fill: '#5bb3e3'}}
            d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
      <path style={{fill: '#5bb3e3'}}
            d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
    </svg>
  </button>
)

const CloseButton = (props) => (
  <button style={{
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '15px',
    right: '20px',
    zIndex: '20'
  }} {...props} className="menu-button">
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      style={{enableBackground: 'new 0 0 64 64'}}>
      <g>
        <g style={{fill: '#5bb3e3'}}>
          <path
            d="m46.355,17.979c-0.779-0.78-2.043-0.78-2.821,0l-11.594,11.591-11.591-11.591c-0.779-0.78-2.044-0.78-2.822,
            0-0.778,0.779-0.778,2.043 0,2.823l11.499,11.5-11.492,11.489c-0.778,0.779-0.778,2.043 0,2.822 0.392,0.391 0.903,
            0.586 1.414,0.586s1.02-0.195 1.411-0.586l11.581-11.579 11.583,11.579c0.39,0.391 0.899,0.586 1.41,0.586 0.512,0
            1.024-0.195 1.412-0.586 0.779-0.779 0.779-2.043 0-2.822l-11.489-11.488 11.499-11.5c0.78-0.781 0.78-2.044-7.10543e-15-2.824z"/>
          <path
            d="M31.94,0C14.33,0,0,14.328,0,31.941c0,17.611,14.33,31.94,31.94,31.94 c17.611,0,31.941-14.329,31.941-31.94C63.882,
            14.328,49.552,0,31.94,0z M31.94,59.89c-15.411,0-27.948-12.538-27.948-27.948 c0-15.412,12.537-27.949,27.948-27.949c15.412,
            0,27.949,12.537,27.949,27.949C59.89,47.352,47.353,59.89,31.94,59.89z"/>
        </g>
      </g>
    </svg>
  </button>
)

const IconSales = (props) => (
  <svg
    version="1.1"
    x="0px" y="0px"
    viewBox="0 0 489 489"
    style={{enableBackground: 'new 0 0 489 489'}}
    width="60px"
    height="60px">
    <path
      d="M247.298,336.8c-5.9,5.9-5.9,15.6,0,21.5s15.6,5.9,21.5,0s5.9-15.6,0-21.5C262.898,330.8,253.198,330.8,247.298,336.8z"
      data-original="#000000"
      data-old_color="#000000"
      fill="#347ECF"/>
    <path d="M171.998,274.9c-5.9-5.9-15.6-5.9-21.5,0s-5.9,15.6,0,21.5s15.6,5.9,21.5,0S177.898,280.9,171.998,274.9z"
          data-original="#000000"
          data-old_color="#000000"
          fill="#347ECF"/>
    <path d="M414.498,31c-4.7-11.4-19.1-30.6-62.9-31c-0.5,0-0.9,0-1.4,0c-26.9,0-58.9,7.1-90.4,20.1c-5.8,2.4-11.4,4.9-16.8,7.6
		l-0.3-0.3c-18-17.5-46.7-17.5-64.7,0l-88.2,85.7c-11.7,11.3-18.3,26.9-18.3,43.2v290.3c0,23.4,19,42.4,42.4,42.4h193 c23.4,0,42.4-19,42.4-42.4V156.3c0-8.3-1.7-16.5-5-23.9c18.7-10.5,35-22.5,
		47.5-35.1C422.398,66.2,419.198,42.4,414.498,31z     M124.498,285.7c0-20.2,16.5-36.7,36.7-36.7s36.7,16.5,36.7,36.7s-16.5,36.7-36.7,36.7C140.998,322.4,124.598,306,124.498,285.7z
		M155.698,381.7c-3.8-3.2-4.3-8.8-1.2-12.6l96.4-116.1c3.2-3.8,8.8-4.3,12.6-1.2c3.8,3.2,4.3,8.8,1.2,12.6l-96.4,116.1
	  C165.098,384.3,159.498,384.8,155.698,381.7z M258.098,384.3c-20.2,0-36.7-16.5-36.7-36.7s16.5-36.7,36.7-36.7
		c20.2,0,36.7,16.5,36.7,36.7C294.798,367.8,278.298,384.3,258.098,384.3z M298.798,114.7c-18.4,7.6-37.3,13-54.5,15.6
		c0,0.8,0.1,1.5,0.1,2.3c0,19.4-15.7,35.1-35.1,35.1s-35.1-15.7-35.1-35.1s15.7-35.1,35.1-35.1c11.6,0,21.8,5.6,28.2,14.2
		c16.3-2.8,33.9-7.9,51.2-15c6.1-2.5,11.8-5.1,17.2-7.8l-35.4-34.5c1-0.4,2-0.8,3-1.3c26.9-11.1,54.8-17.4,76.8-17.4
		c0.3,0,0.7,0,1,0c21.1,0.2,29,5.9,30.2,8.9C385.198,53.8,361.698,88.8,298.798,114.7z"
          data-original="#000000"
          data-old_color="#000000"
          fill="#347ECF"/>
  </svg>
)
const IconHeart = (props) => (
  <svg x="0px" y="0px" viewBox="0 0 484 484" style={{enableBbackground: 'new 0 0 484 484'}}
       width="60px"
       height="60px">
    <path d="M414.74,95.558c-21.512-21.516-50.12-33.364-80.544-33.364c-30.428,0-59.032,11.848-80.544,33.364l-9.044,9.044
		 l-9.044-9.044c-21.516-21.516-50.124-33.364-80.548-33.364c-30.428,0-59.032,11.848-80.544,33.364
		 c-44.416,44.408-44.416,116.672,0,161.084L236.12,418.29c2.344,2.344,5.412,3.516,8.484,3.516c3.072,0,6.14-1.172,8.492-3.512
		 L414.74,256.646c21.516-21.512,33.364-50.12,33.364-80.544C448.104,145.674,436.256,117.07,414.74,95.558z M397.768,239.674
		 l-153.16,153.164L91.444,239.674c-35.056-35.056-35.056-92.092,0-127.148c16.98-16.98,39.556-26.332,63.572-26.332
		 c24.012,0,46.592,9.352,63.576,26.332l17.528,17.528c4.688,4.688,12.28,4.688,16.968,0l17.528-17.528
		 c16.984-16.98,39.56-26.332,63.576-26.332s46.596,9.352,63.576,26.332C432.824,147.582,432.824,204.618,397.768,239.674z"
          fill="#347ECF"/>
    <path d="M56,213.806H12c-6.628,0-12,5.372-12,12s5.372,12,12,12h44c6.628,0,12-5.372,12-12S62.628,213.806,56,213.806z"
          fill="#347ECF"/>
    <path d="M431.992,214.194H317.144l-17.872-39.308c-1.348-2.972-4.284-4.78-7.624-4.684c-3.26,0.14-6.108,2.24-7.196,5.316
		l-36.528,102.936l-44.408-122.98c-1.096-3.036-3.916-5.12-7.148-5.272c-3.456-0.16-6.236,1.66-7.612,4.584l-29.84,63.408h-98.92
		c-4.42,0-8,3.584-8,8s5.264,7.612,9.684,7.612h104c3.1,0,4.236-1.4,5.556-4.204l23.788-50.548l45.452,125.86
		c1.144,3.168,4.152,5.28,7.524,5.28c0.008,0,0.016,0,0.016,0c3.38-0.008,6.388-2.14,7.516-5.324l37.376-105.332l11.804,25.964
		 c1.296,2.86,5.832,4.304,8.968,4.304h120c4.416,0,6.312-3.196,6.312-7.612S436.408,214.194,431.992,214.194z"
          fill="#347ECF"/>
    <path
      d="M472,209.806h-36c-6.628,0-12,5.372-12,12s5.372,12,12,12h36c6.628,0,12-5.372,12-12S478.628,209.806,472,209.806z"
      fill="#347ECF"/>
  </svg>
)
const IconDoctor = (props) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    style={{enableBackground: 'new 0 0 480 480'}}
    width="60px"
    height="60px">
    <rect x="327.998" y="432" width="16" height="16" data-original="#000000" data-old_color="#00B7FF" fill="#5bb3e3"/>
    <path d="M479.334,468.808l-45.16-103.56c-2.44-7.304-8.272-13.032-15.616-15.32l-116.544-36.424l-13.024-32.568l29.664-44.496
		c0.576-0.872,0.984-1.84,1.184-2.864l6.72-33.576h9.44c13.232,0,24-10.768,24-24v-32c0-13.232-10.768-24-24-24V72
		c0-22.056-17.944-40-40-40H279.19c-3.72-18.232-19.88-32-39.192-32s-35.472,13.768-39.192,32h-9.4
		c-9.072,0-17.264,5.024-21.384,13.104c-2.68,5.264-3.256,11.152-1.888,16.656c-0.104,0.032-0.208,0.04-0.304,0.072
		c-9.472,3.08-15.832,12.32-15.832,22.992V120h-8c-13.232,0-24,10.768-24,24v32c0,13.232,10.768,24,24,24h9.44l6.712,33.568
		c0.2,1.024,0.608,2,1.184,2.864l29.56,44.336l-14.832,33.32L61.43,349.92c-7.344,2.296-13.184,8.016-15.36,14.656L0.662,468.808
		c-1.072,2.472-0.832,5.328,0.648,7.576C2.782,478.64,5.302,480,7.998,480h464c2.696,0,5.208-1.36,6.696-3.616
		C480.166,474.128,480.414,471.28,479.334,468.808z M327.998,136h8c4.416,0,8,3.592,8,8v32c0,4.408-3.584,8-8,8h-8V136z
		M151.998,184h-8c-4.408,0-8-3.592-8-8v-32c0-4.408,3.592-8,8-8h8V184z M239.998,16c10.432,0,19.328,6.688,22.632,16h-45.264
		C220.67,22.688,229.566,16,239.998,16z M184.286,52.368c1.384-2.736,4.048-4.368,7.12-4.368h104.592c13.232,0,24,10.768,24,24v48
		h-18.6c-45.912,0-89.448-22.168-116.456-59.304C183.134,58.216,182.886,55.104,184.286,52.368z M167.998,120V84.824
		c0-4.592,2.576-7.056,4.784-7.776c1.576-0.512,3.896-0.52,5.984,2.352l0.376-0.272c18.44,21.832,42.32,38.168,68.864,47.6V128
		c0,4.408-3.592,8-8,8h-30.76c-5.112,0-10.112-0.96-14.848-2.864l-26.4-10.552V120z M175.534,228.88l-7.536-37.672v-51.392
		l20.448,8.176c6.64,2.664,13.64,4.008,20.8,4.008h30.752c12.056,0,21.96-8.96,23.648-20.552
		c12.256,2.984,24.92,4.552,37.752,4.552h10.6v55.208l-7.528,37.672l-29.752,44.616l-34.72,13.888l-34.728-13.896L175.534,228.88z
		M286.614,318.072l-46.616,46.616l-47.704-47.704l11.88-26.696l32.848,13.136c0.96,0.384,1.968,0.576,2.976,0.576
		s2.016-0.192,2.976-0.568L275.55,290.4L286.614,318.072z M304.206,464h-284l40.792-93.704c0.808-2.432,2.752-4.336,5.2-5.104
		l69.8-21.808v49.424c-18.232,3.72-32,19.872-32,39.192v16c0,4.416,3.584,8,8,8h16v-16h-8v-8c0-13.232,10.768-24,24-24
		s24,10.768,24,24v8h-8v16h16c4.416,0,8-3.584,8-8v-16c0-19.312-13.768-35.472-32-39.192v-54.424l28.488-8.904l53.952,52.264
		c0.536,0.52,1.176,0.824,1.8,1.16c0.272,0.152,0.504,0.392,0.792,0.512c0.944,0.384,1.952,0.584,2.968,0.584
		c2.048,0,4.096-0.784,5.656-2.344l52.576-52.576l29.768,9.304v62.424c-18.232,3.72-32,19.872-32,39.192
		C295.998,449.04,299.126,457.296,304.206,464z M335.998,464c-13.232,0-24-10.768-24-24s10.768-24,24-24s24,10.768,24,24
		S349.23,464,335.998,464z M367.79,464c5.08-6.704,8.208-14.96,8.208-24c0-19.312-13.768-35.472-32-39.192v-57.424l69.8,21.816
		c2.448,0.76,4.392,2.664,5.456,5.768L459.79,464H367.79z" data-original="#000000" data-old_color="#5bb3e3"
          fill="#347ECF"/>
  </svg>

)
const IconHospital = (props) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    style={{enableBackground: 'new 0 0 480 480'}}
    width="60px"
    height="60px">
    <path d="M216,136h48v-24h24V64h-24V40h-48v24h-24v48h24V136z M208,96V80h24V56h16v24h24v16h-24v24h-16V96H208z"
          data-original="#000000" fill="#347ECF"/>
    <rect x="192" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="272" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="232" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="312" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="152" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="64" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="64" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="64" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="64" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="64" y="352" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <path d="M456,432V112h-80V0H104v112H24v320H0v48h480v-48H456z M376,128h64v304h-64V128z M120,16h240v416h-64v-80H184v80h-64V16z
			M280,368v64h-32v-64H280z M232,368v64h-32v-64H232z M40,128h64v304H40V128z M464,464H16v-16h448V464z"
          fill="#347ECF"/>
    <rect x="400" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="400" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="400" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="400" y="160" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="400" y="352" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="192" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="272" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="232" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="312" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="152" y="208" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="192" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="272" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="232" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="312" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="152" y="256" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="192" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="272" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="232" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="312" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
    <rect x="152" y="304" width="16" height="24" data-original="#000000" fill="#347ECF"/>
  </svg>
)

const IconMicroScope = (props) => (
  <svg
    viewBox="0 0 511.998 511.998"
    style={{enableBackground: 'new 0 0 511.998 511.998'}}
    width="60px"
    height="60px">
    <path d="M423.21,432.435l-8.742-25.945c-0.93-2.757-1.988-5.442-3.144-8.068c31.446-26.169,49.361-64.157,49.361-105.218
		 c0-32.414-11.573-63.883-32.587-88.612c-18.266-21.495-42.68-36.82-69.642-43.92l33.702-53.283
		 c1.107-1.75,1.474-3.868,1.019-5.888c-0.455-2.02-1.693-3.777-3.443-4.884l-12.767-8.075l7.945-12.561l12.767,8.076
		 c1.295,0.818,2.739,1.21,4.165,1.21c2.588,0,5.12-1.285,6.606-3.635l16.48-26.056c1.107-1.75,1.474-3.868,1.019-5.888
		 c-0.455-2.02-1.693-3.777-3.443-4.884L353.58,1.208c-3.644-2.301-8.466-1.219-10.771,2.425l-16.48,26.056
		 c-1.107,1.75-1.473,3.868-1.019,5.888c0.455,2.02,1.693,3.777,3.443,4.884l12.767,8.075l-7.945,12.561l-12.767-8.076
		 c-3.643-2.302-8.467-1.219-10.771,2.425L197.591,233.226l-9.485-5.999c-1.75-1.106-3.868-1.474-5.889-1.018
		 c-2.02,0.455-3.777,1.692-4.884,3.443l-16.48,26.057c-2.305,3.644-1.22,8.466,2.424,10.771l101.092,63.941
		 c1.295,0.818,2.739,1.21,4.166,1.21c2.588,0,5.119-1.286,6.606-3.635l16.48-26.056c2.305-3.644,1.22-8.466-2.424-10.771
		 l-9.485-5.999l27.734-43.846c5.23-1.64,10.673-2.473,16.219-2.473c29.971,0,54.355,24.383,54.355,54.355
		 c0,22.037-13.484,41.975-33.78,50.305c-6.662-1.461-13.548-2.243-20.576-2.243H163.835c-29.328,0-53.19,23.861-53.19,53.191
		 c0,4.312,3.495,7.807,7.807,7.807h115.955c-0.543,1.393-1.064,2.798-1.546,4.226l-8.606,25.541H93.254
		 c-23.126,0-41.942,18.815-41.942,41.941v30.218c0,4.312,3.495,7.807,7.807,7.807H451.6c4.312,0,7.807-3.495,7.807-7.807v-30.219
		 C459.408,452.795,443.628,435.245,423.21,432.435z M351.832,18.578l55.73,35.249l-8.133,12.86l-12.763-8.073
		 c-0.001-0.001-0.003-0.002-0.004-0.003l-30.195-19.099c-0.002-0.001-0.005-0.003-0.007-0.004l-12.76-8.071L351.832,18.578z
		 M371.716,67.634l-7.944,12.561l-16.999-10.752l7.944-12.561L371.716,67.634z M266.119,313.051l-87.896-55.594l8.133-12.861
		 l9.474,5.993c0.003,0.002,0.006,0.005,0.011,0.007l68.926,43.596l0.001,0.001l9.482,5.998L266.119,313.051z M266.516,276.822
		 l-1.859-1.176l-53.87-34.074L319.059,70.392l12.762,8.072c0.002,0.001,0.003,0.002,0.005,0.003l30.195,19.099
		 c0.002,0.001,0.004,0.002,0.006,0.003l12.761,8.071l-35.479,56.094c0,0-0.001,0.002-0.002,0.002l-24.48,38.704L266.516,276.822z
		 M393.634,293.204c0-38.581-31.388-69.97-69.97-69.97c-1.635,0-3.264,0.056-4.884,0.169l30.617-48.407l0.25-0.395
		 c25.796,5.657,49.272,19.766,66.554,40.102c18.618,21.908,28.87,49.787,28.87,78.501c0,35.327-14.967,68.101-41.359,91.207
		 c-0.094-0.142-0.193-0.279-0.288-0.422c-0.462-0.695-0.931-1.383-1.41-2.063c-0.156-0.222-0.315-0.442-0.473-0.662
		 c-0.529-0.738-1.065-1.47-1.613-2.192c-0.083-0.108-0.168-0.216-0.251-0.324c-9.401-12.255-21.605-22.029-35.522-28.516
		 C382.295,337.3,393.634,316.135,393.634,293.204z M310.385,357.991c18.805-3.142,38.629,0.649,54.928,10.551
		 c15.998,9.719,28.382,25.195,34.359,42.933l6.927,20.557H240.732l6.927-20.557c1.557-4.621,3.518-9.018,5.813-13.178
		 c0.012-0.021,0.027-0.038,0.038-0.06c11.804-21.331,32.536-35.897,56.057-40.099C309.84,358.089,310.111,358.037,310.385,357.991z
		 M127.074,386.649c3.602-16.986,18.716-29.768,36.759-29.768h107.389c-11.635,7.608-21.586,17.73-29.03,29.768H127.074z
		 M443.794,496.384h-0.001H66.928v-22.411c0-14.517,11.81-26.326,26.327-26.326h136.608h187.605
		 c14.516,0,26.326,11.809,26.326,26.326V496.384z"
          fill="#347ECF"/>
    <path d="M323.664,369.369c-13.833,0-25.086,11.253-25.086,25.086c0,13.833,11.253,25.087,25.086,25.087
		s25.086-11.255,25.086-25.087C348.751,380.623,337.497,369.369,323.664,369.369z M323.664,403.929
		c-5.223,0-9.472-4.249-9.472-9.473c0-5.223,4.25-9.472,9.472-9.472c5.223,0,9.472,4.249,9.472,9.472
		 C333.136,399.68,328.887,403.929,323.664,403.929z"
          fill="#347ECF"/>
  </svg>

)

const IconPlace = (props) => (
  <svg x="0px" y="0px"
       width="17px" height="22px" viewBox="0 0 530.719 530.719">
    <circle style={{fill: '#0b689a'}} cx="265.36" cy="197.619" r="89.304"/>
    <path style={{fill: '#0b689a'}} d="M265.36,530.719c0,0,197.627-223.944,197.627-333.09C462.987,88.482,374.507,0,265.36,0
C156.213,0,67.731,88.482,67.731,197.628C67.731,306.774,265.36,530.719,265.36,530.719z M265.36,61.171
c75.352,0,136.448,61.085,136.448,136.448S340.712,334.066,265.36,334.066c-75.353,0-136.447-61.085-136.447-136.447
S190.007,61.171,265.36,61.171z"/>
  </svg>
)

const IconTime = (props) => (
  <svg version="1.1" viewBox="0 0 60 60" width="17px" height="22px">

    <path style={{fill: '#0b689a'}} d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
    <path style={{fill: '#0b689a'}} d="M31,26.021V15.879c0-0.553-0.448-1-1-1s-1,0.447-1,1v10.142c-1.399,0.364-2.494,1.459-2.858,2.858H19c-0.552,0-1,0.447-1,1
s0.448,1,1,1h7.142c0.447,1.72,2,3,3.858,3c2.206,0,4-1.794,4-4C34,28.02,32.72,26.468,31,26.021z M30,31.879c-1.103,0-2-0.897-2-2
s0.897-2,2-2s2,0.897,2,2S31.103,31.879,30,31.879z"/>
    <path style={{fill: '#0b689a'}}
          d="M30,9.879c0.552,0,1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1v1C29,9.432,29.448,9.879,30,9.879z"/>
    <path style={{fill: '#0b689a'}}
          d="M30,49.879c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1C31,50.326,30.552,49.879,30,49.879z"/>
    <path style={{fill: '#0b689a'}}
          d="M52,28.879h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S52.552,28.879,52,28.879z"/>
    <path style={{fill: '#0b689a'}}
          d="M9,28.879H8c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S9.552,28.879,9,28.879z"/>
    <path style={{fill: '#0b689a'}} d="M44.849,13.615l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S45.24,13.225,44.849,13.615z"/>
    <path style={{fill: '#0b689a'}} d="M14.444,44.021l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S14.834,43.631,14.444,44.021z"/>
    <path style={{fill: '#0b689a'}} d="M45.556,44.021c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L45.556,44.021z"/>
    <path style={{fill: '#0b689a'}} d="M15.151,13.615c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L15.151,13.615z"/>

  </svg>

)

const IconPrice = (props) => (
  <svg version="1.1" x="0px" y="0px" width="17px" height="22px"
       viewBox="0 0 295 295">
    <path style={{fill: '#0b689a'}} d="M290.156,23.89c-0.482-10.311-8.733-18.562-19.044-19.044L168.005,0.023c-5.62-0.272-11.097,1.855-15.077,5.836
L5.858,152.93C2.108,156.681,0,161.767,0,167.072s2.107,10.392,5.858,14.143l107.929,107.928c3.904,3.905,9.023,5.857,14.142,5.857
c5.118,0,10.237-1.953,14.143-5.857l147.069-147.069c3.98-3.98,6.1-9.454,5.837-15.077L290.156,23.89z M252.481,76.087
c-9.269,9.269-24.298,9.269-33.567,0s-9.269-24.298,0-33.567s24.298-9.269,33.567,0S261.751,66.817,252.481,76.087z"/>
  </svg>
)

const IconArrowDown = (props) => (
  <svg version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 444.819 444.819">
    <path style={{fill: '#0b689a'}} d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
		L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
		C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
		c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
		C444.819,130.287,441.295,121.629,434.252,114.203z"/>
  </svg>
)

const IconPediatrician = (props) => (
  <svg width="30px" height="30px" version="1.1" x="0px" y="0px"
       viewBox="0 0 512 512">
    <path style={{fill: '#fff'}} d="M172.464,258.939c60.808,0,110.28-49.471,110.28-110.28c0-35.807-17.557-69.36-46.434-89.908
				C233.588,25.903,206.003,0,172.464,0s-61.123,25.903-63.846,58.751c-28.876,20.549-46.434,54.1-46.434,89.908
				C62.184,209.467,111.656,258.939,172.464,258.939z M172.464,35.801c15.595,0,28.283,12.688,28.283,28.283
				c0,37.422-56.566,37.347-56.566,0C144.181,48.489,156.869,35.801,172.464,35.801z M117.637,98.289
				c24.911,40.275,86.172,38.589,109.628-0.032c12.452,13.572,19.679,31.524,19.679,50.402c0,41.068-33.411,74.479-74.479,74.479
				c-41.068,0-74.479-33.411-74.479-74.479C97.986,129.796,105.204,111.856,117.637,98.289z"/>
    <path style={{fill: '#fff'}} d="M402.368,348.228c38.941,0,70.623-31.682,70.623-70.623s-31.682-70.623-70.623-70.623
				c-38.942,0-70.624,31.682-70.624,70.623S363.426,348.228,402.368,348.228z M402.368,242.784c19.2,0,34.822,15.621,34.822,34.822
				c0,19.2-15.621,34.822-34.822,34.822c-19.201,0-34.823-15.621-34.823-34.822S383.167,242.784,402.368,242.784z"/>
    <path style={{fill: '#fff'}} d="M329.988,390.723c-20.246-68.315-83.523-117.669-157.532-117.669c-90.367,0-164.26,73.49-164.26,164.272v56.774
				c0,9.886,8.015,17.901,17.901,17.901c19.445,0,448.393,0,459.807,0c9.886,0,17.901-8.015,17.901-17.901v-32.403
				C503.805,371.123,393.382,326.088,329.988,390.723z M154.564,476.199H43.999c0-41.058-5.565-89.916,41.438-133.277l69.127,69.128
				V476.199z M115.399,322.253c35.879-17.864,78.24-17.87,114.13,0l-57.065,57.065L115.399,322.253z M300.931,476.199H190.366
				v-64.15l69.128-69.128C305.546,385.407,300.931,432.364,300.931,476.199z M468.004,476.199H336.732v-14.502
				c0-36.192,29.444-65.636,65.636-65.636s65.636,29.444,65.636,65.636V476.199z"/>
  </svg>
)

const IconCardiologist = (props) => (
  <svg version="1.1" width="30px" height="30px" x="0px" y="0px" viewBox="0 0 489.083 489.083">

    <path style={{fill: '#fff'}} d="M482.754,401.6l-48.9-48.9c15.1-20.7,23.9-46.3,23.9-73.9c0-15.8-2.9-30.9-8.3-44.9c29-60.3,21.7-137.2-19.8-187.1
		c-25-30.2-58.3-46.8-94.7-46.8c-65.8,0-102,55.1-102,55.1S197.654,0,132.054,0c-36.4,0-69.7,16.6-94.7,46.8
		c-49.8,59.3-49.8,157.1,0.2,216.4l177.9,216.4c14.1,17.5,30.2,6.2,34.3,2.1l64.8-78.2c5.7,0.8,11.5,1.2,17.4,1.2
		c27.1,0,52.1-8.5,72.6-23.1l49.1,49.1c12.6,11.7,25,4.2,29.1,0C491.154,422.4,491.154,409.9,482.754,401.6z M233.154,437
		l-164.4-198.7c-37.5-44.7-37.5-118.6,0-164.4c17.7-20.8,39.5-32.3,63.5-32.3c48.8,0,84.3,57.2,84.3,57.2
		c13.1,16.2,28.1,8.3,33.3,2.1c0,0,35-59.3,85.3-59.3c23.9,0,45.8,11.4,63.5,32.3c25.8,30.9,34.5,76.7,23.9,117.4
		c-22.9-23.7-55-38.4-90.5-38.4c-69.5,0-125.9,56.4-125.9,125.9c0,47.9,26.8,89.6,66.2,110.9L233.154,437z M246.654,278.8
		c0-47.1,38.2-85.3,85.3-85.3s85.3,38.2,85.3,85.3s-38.2,85.3-85.3,85.3S246.654,325.9,246.654,278.8z"/>
  </svg>

)
const IconFamilyDoctor = (props) => (
  <svg version="1.1" x="0px" y="0px" width="30px" height="30px"
       viewBox="0 0 457.292 457.292">

    <circle style={{fill: '#fff'}} cx="193.31" cy="51.905" r="36.358"/>
    <path style={{fill: '#fff'}} d="M163.637,372.865c-5.057,3.474-10.978,5.447-17.212,5.696v57.679c0,11.627,9.425,21.052,21.052,21.052
		c11.627,0,21.052-9.425,21.052-21.052v-39.864C176.057,394.65,166.051,385.107,163.637,372.865z"/>
    <path style={{fill: '#fff'}}
          d="M197.618,436.24c0,11.627,9.425,21.052,21.052,21.052c11.626,0,21.051-9.425,21.051-21.052v-39.578h-42.103V436.24z"/>
    <path style={{fill: '#fff'}} d="M70.886,86.355c1.549,3.079,3.972,5.634,6.964,7.345l68.567,39.197v71.928c18.123,7.59,30.949,25.478,31.053,46.287
		c0.01,1.986,0.081,16.07,0.091,18.035c4.001-2.377,8.549-3.82,13.426-4.083v-2.027c0-16.904,13.752-30.656,30.657-30.656h17.695
		v-95.442h13.189c0.782-2.246,1.508-4.345,2.175-6.287c4.288-12.477,9.796-21.811,15.831-28.799h-77.448
		c-0.006,0-0.012,0.001-0.018,0.001c-0.006,0-30.26-0.001-30.26-0.001l-62.957-35.99L71.571,9.661
		c-4.356-8.654-14.903-12.14-23.557-7.785c-8.655,4.355-12.14,14.901-7.785,23.557L70.886,86.355z"/>
    <path style={{fill: '#fff'}} d="M454.698,251.515c-0.284-0.777-28.557-78.13-41.009-114.363c-8.032-23.378-21.503-35.231-40.038-35.231
		c-5.026,0-34.196,0-59.995,0c-22.148,0-33.514,16.327-40.664,37.048c-11.696,33.838-40.786,113.85-40.786,113.85
		c-8.498,0-10.698-0.132-12.382,0.171c-0.079,0.014-0.161,0.02-0.24,0.037c-4.67,0.956-8.16,5.087-8.16,10.011
		c0,8.981,0,13.492,0,22.419h-18.832c-5.014,0-9.079,4.065-9.079,9.08v72.61c0,5.014,4.065,9.079,9.079,9.079h110.558
		c5.014,0,9.079-4.065,9.079-9.079v-72.61c0-5.015-4.065-9.08-9.079-9.08h-18.832c0-8.93,0-13.438,0-22.419
		c0-5.644-4.575-10.219-10.219-10.219h0h-5.104c9.13-25.071,21.63-59.616,30.55-84.872c-0.867,7.092,0.914-2.754-12.645,67.247
		c10.527,4.859,17.855,15.509,17.855,27.845v2.027c15.532,0.836,27.912,13.734,27.912,29.472c0,9.168,0,65.35,0,72.61
		c0,16.275-13.241,29.517-29.517,29.517h-5.542v39.85c0,11.476,9.304,20.779,20.779,20.779s20.779-9.304,20.779-20.779V308.346
		c2.987,0,5.984,0,8.972,0v128.167c0,11.476,9.304,20.779,20.779,20.779c11.476,0,20.779-9.304,20.779-20.779V308.346
		c5.002,0,9.489,0,13.213,0c2.874,0,5.596-1.285,7.424-3.503c1.827-2.218,2.566-5.136,2.02-7.957
		c-26.605-137.362-23.664-121.338-24.595-128.947c13.868,39.26,34.172,94.81,34.413,95.469c3.289,8.995,13.244,13.596,22.209,10.316
		C453.363,270.441,457.983,260.498,454.698,251.515z M248.87,274.782c2.462,0,4.867-0.54,7.07-1.526h7.941h0v12.2h-32.02v-12.2h0
		h9.957C244.055,274.25,246.316,274.782,248.87,274.782z"/>
    <path style={{fill: '#fff'}} d="M145.152,358.595c7.101-0.035,12.829-5.821,12.793-12.922l-0.475-94.461c-0.084-16.693-13.734-30.275-30.427-30.275
		c-8.954,0-43.707,0-57.807,0l-34.365-13.114l-7.815-44.125c-1.242-7.015-7.983-11.644-14.903-10.419
		c-6.993,1.239-11.657,7.911-10.418,14.903l9.086,51.299c0.788,4.45,3.854,8.159,8.077,9.77l39.371,15.024l0.006,197.586
		c0,8.521,6.908,15.43,15.429,15.43c8.521,0,15.429-6.908,15.429-15.43c0-107.688,0.01-96.494-0.019-97.705h6.7
		c-0.028,1.142-0.019-9.27-0.019,97.705c0,8.521,6.908,15.43,15.429,15.43c8.521,0,15.429-6.908,15.429-15.43v-68.956
		l-0.269-121.545c-0.003-1.482,1.194-2.686,2.675-2.692c1.482-0.006,2.688,1.19,2.696,2.672l0,0l0.475,94.461
		c0.035,7.079,5.785,12.793,12.856,12.793C145.108,358.595,145.131,358.595,145.152,358.595z"/>
    <path style={{fill: '#fff'}} d="M59.373,177.803c0,7.844,2.721,15.048,7.262,20.735c6.095,7.634,15.475,12.531,26.003,12.531
		c9.379,0,17.845-3.887,23.892-10.131c5.799-5.987,9.373-14.141,9.373-23.135c0-18.372-14.893-33.265-33.266-33.265
		S59.373,159.431,59.373,177.803z"/>
    <path style={{fill: '#fff'}} d="M343.654,90.481c19.722,0,35.888-15.984,35.888-35.888c0-19.82-16.067-35.887-35.888-35.887
		c-19.82,0-35.888,16.067-35.888,35.887C307.766,74.415,323.867,90.481,343.654,90.481z"/>
  </svg>
)

const IconDantist = (props) => (
  <svg version="1.1" width="30px" height="30px" viewBox="0 0 407.504 407.504">
    <path style={{fill: '#fff'}} d="M376.328,45.601c-21.131-23.658-50.213-36.686-81.891-36.686c-24.766,0-51.477,14.735-70.994,25.501
		c-7.105,3.922-16.821,9.284-19.693,9.637c-2.859-0.347-12.525-5.695-19.613-9.616C164.67,23.666,138.009,8.915,113.068,8.915
		c-31.679,0-60.762,13.028-81.894,36.686C11.071,68.108,0,97.734,0,129.021c0,44.695,16.05,108.255,42.933,170.029
		c11.96,27.484,24.691,51.233,36.816,68.68c14.432,20.766,26.817,30.859,37.864,30.859c4.902,0,13.878-2.079,18.914-16.007
		c4.894-13.534,9.296-29.069,13.964-45.547c12.354-43.606,27.728-97.878,52.48-97.878h1.563c11.005,0,20.856,9.426,30.115,28.818
		c9.172,19.209,16.145,44.752,22.898,69.485c4.463,16.351,8.68,31.792,13.416,45.085c4.934,13.842,13.809,15.912,18.666,15.915
		c10.992-0.001,23.365-10.249,37.828-31.329c12.094-17.626,24.852-41.611,36.895-69.361c27.02-62.271,43.152-125.354,43.152-168.75
		C407.504,97.733,396.432,68.107,376.328,45.601 M286.797,77.685c-0.254-0.017-25.844-1.242-49.139-7.411
		c-10.504-2.781-22.924-8.369-22.924-10.027c0-1.614,13.494-9.471,16.748-11.267c17.924-9.888,42.469-23.43,62.955-23.43
		c60.361,0,96.432,52.609,96.432,103.471c0,40.62-16.008,102.744-41.779,162.126c-11.457,26.404-24.012,50.047-35.35,66.572
		c-13.082,19.067-21.547,24.61-24.111,24.105c-1.574-0.311-1.77-1.427-2.994-4.865c-4.531-12.712-8.668-27.863-13.047-43.904
		c-6.938-25.41-14.109-51.687-23.928-72.25c-12.301-25.762-27.062-38.285-45.126-38.285h-1.563
		c-17.401,0-31.821,12.423-44.081,37.978c-9.786,20.397-17.218,46.631-24.404,72.002c-4.58,16.165-8.905,31.436-13.602,44.424
		c-1.037,2.867-1.357,4.739-3.271,5.029c-1.5,0.228-7.907-0.269-24.204-23.718c-11.346-16.325-23.855-39.702-35.223-65.824
		C32.556,233.517,16.635,170.91,16.635,129.02c0-50.862,36.071-103.471,96.433-103.471c15.69,0,36.309,7.149,55.155,19.124
		c2.764,1.757,6.656,4.748,10.42,7.642c1.502,1.155,2.982,2.292,4.36,3.329c4.418,3.309,10.388,7.636,17.398,11.763
		c2.989,1.764,6.708,3.96,10.658,5.636c15.105,6.412,31.121,9.663,47.602,9.663c16.793,0,28.088-2.987,28.199-3.022
		c0,0,2.527-0.668,2.447-1.325C289.227,77.702,286.797,77.685,286.797,77.685z"/>
  </svg>
)

const IconGinecologiest = (props) => (
  <svg version="1.1" width="40px" height="40px" viewBox="0 0 122.405 122.405">

    <path style={{fill: '#fff'}} d="M55.776,58.11c-0.512-0.303-1.095-0.463-1.687-0.463c-1.167,0-2.261,0.623-2.854,1.625
			c-0.452,0.761-0.58,1.653-0.36,2.511c0.219,0.857,0.76,1.579,1.522,2.029c0.511,0.303,1.094,0.463,1.685,0.463l0,0
			c1.166,0,2.26-0.622,2.854-1.625C57.869,61.079,57.348,59.041,55.776,58.11z"/>
    <path style={{fill: '#fff'}} d="M56.69,67.623l5.484,3.249c0.376,0.222,0.786,0.335,1.22,0.335c1.023,0,2.062-0.637,2.646-1.622
			c0.042-0.069,0.073-0.134,0.092-0.196c0.171-0.272,0.312-0.304,0.408-0.326c0.072-0.015,0.156-0.022,0.249-0.022
			c0.974,0,2.529,0.882,3.145,1.354c0.833,0.637,2.106,0.467,2.742-0.363c0.65-0.878,0.479-2.096-0.363-2.742
			c-0.288-0.221-2.892-2.157-5.539-2.157c-0.369,0-0.73,0.038-1.07,0.112c-0.176,0.038-0.348,0.089-0.514,0.146l-0.118,0.063
			l-0.294,0.224c-2.618-1.012-2.455-2.994-2.367-4.072l0.015-0.188c0.005-0.662-0.152-1.453-0.525-2.669
			c-0.245-0.801-1.128-1.272-1.933-1.027c-0.815,0.248-1.277,1.114-1.029,1.932c0.437,1.426,0.409,1.485,0.229,1.87l-0.054,0.119
			c-0.071,0.158-0.202,0.324-0.401,0.511c-1.813,1.122-2.88,2.556-2.865,3.885C55.853,66.723,56.168,67.314,56.69,67.623z"/>
    <path style={{fill: '#fff'}} d="M70.778,28.913c-1.656-1.361-3.652-2.344-5.702-2.846l-3.155,3.176l-3.06-3.211c-0.01,0.002-0.021,0.003-0.031,0.005
			c-2.341,0.56-4.615,1.746-6.394,3.414c-9.766,6.568-13.925,15.271-16.717,34.311c-0.395,2.687,1.464,5.185,4.151,5.578
			c0.242,0.035,0.482,0.053,0.72,0.053c2.4,0,4.5-1.76,4.859-4.205c1.004-6.849,2.167-11.853,3.507-15.634v5.466l-0.247,1.573
			c-1.671,3.41-2.646,7.489-2.646,11.875c0,1.217,0.079,2.409,0.223,3.571l-3.538,22.543c0,0,2.636,0.923,6.859,1.75l0.002,20.263
			c0,3.209,2.602,5.812,5.812,5.812c3.209,0,5.812-2.603,5.811-5.812L61.23,97.596c0.272,0.006,0.551,0.006,0.826,0.008
			l-0.001,18.988c0,3.211,2.603,5.812,5.812,5.812l0,0c3.209,0,5.812-2.602,5.812-5.812V96.477c2.625-0.555,5.274-1.334,7.887-2.42
			l-3.601-21.041c0.234-1.469,0.36-2.989,0.36-4.552c0-0.138-0.012-0.271-0.014-0.407c-0.118,0.063-0.23,0.131-0.354,0.194
			c-0.896,0.472-1.902,0.72-2.908,0.72c-0.394,0-0.777-0.049-1.155-0.119c-1.79,5.012-6.564,8.604-12.19,8.604
			c-7.155,0-12.957-5.801-12.957-12.956c0-7.155,5.801-12.956,12.957-12.956c4.389,0,8.262,2.188,10.604,5.528
			c1.476-0.806,2.21-1.598,2.576-2.278v-7.607c1.288,2.274,2.08,4.545,2.018,6.454c-0.049,1.443-0.528,3.324-3.848,5.068
			c-2.403,1.264-3.329,4.237-2.064,6.641c0.88,1.674,2.589,2.631,4.356,2.631c0.771,0,1.555-0.183,2.283-0.565
			c7.281-3.827,8.968-9.426,9.101-13.449C87.071,43.711,77.654,33.191,70.778,28.913z"/>
    <circle style={{fill: '#fff'}} cx="61.92" cy="12.666" r="12.666"/>
  </svg>
)

const IconEdit = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      pencil-icon
    </title>
    <path
      d="M15.015 5.356l-8.658 8.656c-.495.454-1.088.79-1.732.98l-2.64.66-1.185.3c-.215.094-.466.048-.633-.12-.166-.165-.213-.416-.12-.632l.3-1.183.66-2.64c.19-.646.525-1.24.98-1.734L10.645.987c.77-.83 1.93-1.17 3.027-.89 1.096.278 1.952 1.134 2.232 2.23.28 1.096-.06 2.258-.89 3.03zM3.39 11.046c-.2.24-.354.514-.457.81l-.403 1.613 1.613-.405c.294-.103.568-.258.808-.457l6.824-6.822-.035-.035-1.493-1.49-.036-.037-6.82 6.824zm10.22-8.655c-.432-.43-1.13-.43-1.562 0l-.43.432.035.035 1.492 1.492.035.034.43-.43c.432-.433.43-1.133 0-1.565z"
      fill="#FFF" fillRule="evenodd"/>
  </svg>
)

const IconMail = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      mail-icon
    </title>
    <path
      d="M13.993 15H2.007C.902 15 .005 14.105 0 13V3c0-.532.212-1.04.588-1.417.377-.375.887-.585 1.42-.583h11.985c1.105 0 2.002.895 2.007 2v10c0 .532-.212 1.04-.588 1.417-.377.375-.887.585-1.42.583zM14 13V4.47L9.055 9.56c-.28.283-.663.44-1.06.44-.4 0-.782-.157-1.063-.44L2 4.484V13h12zM12.63 3H3.36l4.634 4.78L12.63 3z"
      fill="#4775d1" fillRule="evenodd"/>
  </svg>
)

const IconPhone = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      smartphone-icon
    </title>
    <path
      d="M11 16H5c-1.105 0-2-.895-2-2V2c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2zm0-13H5v10h6V3z"
      fill="#4775d1" fillRule="evenodd"/>
  </svg>
)

const IconCalendar = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      calendar-icon
    </title>
    <path
      d="M13.993 16H2.007C.902 16 .005 15.105 0 14V4c0-.532.212-1.04.588-1.417.377-.375.887-.585 1.42-.583H4V1c0-.552.448-1 1-1s1 .448 1 1v1h4V1c0-.552.448-1 1-1s1 .448 1 1v1h1.993c1.105 0 2.002.895 2.007 2v10c0 .532-.212 1.04-.588 1.417-.377.375-.887.585-1.42.583zM14 4h-2v1c0 .552-.448 1-1 1s-1-.448-1-1V4H6v1c0 .552-.448 1-1 1s-1-.448-1-1V4H2v10h12V4zm-3 8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-3 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-3 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"
      fill="#4775d1" fillRule="evenodd"/>
  </svg>
)

const IconSearch = (props) => (
  <svg width="29" height="29" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      loupe-icon
    </title>
    <path
      d="M14.295 15.703c.39.396 1.022.396 1.412 0 .39-.395.39-1.034 0-1.43l-3.08-3.08c.87-1.168 1.386-2.616 1.386-4.186C14.013 3.137 10.876 0 7.007 0 3.137 0 0 3.137 0 7.007c0 3.87 3.137 7.007 7.007 7.007 1.575 0 3.03-.52 4.2-1.397l3.088 3.086zM2.002 7.007c0-2.764 2.24-5.005 5.005-5.005 2.764 0 5.004 2.24 5.004 5.005 0 2.764-2.24 5.005-5.003 5.005-2.764 0-5.005-2.24-5.005-5.005z"
      fill="#FFF" fillRule="evenodd"/>
  </svg>
)

const IconClock = (props) => (
  <svg style={{marginRight: '10px'}} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      clock-icon
    </title>
    <path
      d="M8 16c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm4 7H8c-.55 0-.995-.442-1-.99V3.99c0-.55.448-1 1-1s1 .45 1 1V7h3c.552 0 1 .448 1 1s-.448 1-1 1z"
      fill="#fff" fillRule="evenodd"/>
  </svg>
)

const IconFolder = (props) => (
  <svg style={{marginRight: '10px'}} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      forward-filled-icon
    </title>
    <path
      d="M15.32 9.128l-6.313 3.657c-.225.13-.48.2-.738.2-.217 0-.43-.053-.618-.158-.414-.24-.663-.686-.648-1.164V9.887l-5 2.895c-.225.13-.48.2-.738.2-.216 0-.43-.053-.617-.158-.415-.24-.664-.686-.65-1.164V4.32c-.013-.476.235-.923.65-1.162.426-.226.942-.21 1.354.046l5 2.894V4.32c-.014-.476.234-.923.648-1.162.427-.226.943-.21 1.355.046L15.32 6.86c.43.213.703.653.703 1.134 0 .48-.273.92-.704 1.134z"
      fill="#FFF" fillRule="evenodd"/>
  </svg>
)

const IconComments = (props) => (
  <svg style={{marginRight: '10px'}} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>
      bubble-filled-icon
    </title>
    <path
      d="M15.707 15.7c.257-.256.354-.632.255-.982-.1-.35-.867-3.026-.866-3.035 1.818-3.502.81-7.807-2.373-10.138C9.54-.785 5.13-.447 2.343 2.343c-2.79 2.79-3.13 7.2-.797 10.382 2.332 3.182 6.637 4.19 10.14 2.37l3.037.86c.35.1.726.004.984-.254z"
      fill="#FFF" fillRule="evenodd"/>
  </svg>
)

const IconCloseModal = (props) => (
  <svg viewBox="0 0 51.976 51.976" width="44px" height="44px">
	  <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" fill="#4775d1"/>
  </svg>
)
export {
  MenuButton,
  CloseButton,
  IconSales,
  IconHeart,
  IconDoctor,
  IconHospital,
  IconMicroScope,
  IconPlace,
  IconTime,
  IconPrice,
  IconArrowDown,
  IconPediatrician,
  IconCardiologist,
  IconFamilyDoctor,
  IconDantist,
  IconGinecologiest,
  IconEdit,
  IconMail,
  IconPhone,
  IconCalendar,
  IconSearch,
  IconClock,
  IconFolder,
  IconComments,
  IconCloseModal
}