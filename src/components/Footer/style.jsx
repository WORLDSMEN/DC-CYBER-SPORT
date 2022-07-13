import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import Facebook from '@mui/icons-material/Facebook';
import Telegram from '@mui/icons-material/Telegram';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';


import { Checkbox } from "@mui/material";



export const ContainerFooter = styled.div`
	width: 100%;

	//height: 400px;
	background-color: black;
	text-align: center;

	h2{
		color: white;
	}

`

export const BigDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;

	@media (max-width:950px){
		display: flex;
		flex-direction: column;
	}


	h2{
		color: #FFFFFF;
		
	}



	h5{
		color: white;
		text-align: center;
		margin-top: 10px;
	}
`

export const Wrapper1 = styled.div`

	
`

export const Koz1 = styled.img`
			margin-top: 50px;
		width: 300px;
		height: 200px;
		border: 1px solid red;

	@media (max-width:1017px) {
		width: 250px;
		height: 150px;
	}

	@media (max-width:950px) {

	}
`

export const Icondiv = styled.div`
margin-top: 10px;
padding: 10px;
margin: 10px;
			img{
		
		width: 51.36px;
		height: 27.54px;
		margin: 14px;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 16.3767px;
		line-height: 168%;
		/* identical to box height, or 28px */
		
		letter-spacing: 0.14em;
			}

`


export const Wrapper2 = styled.div`

		h4{
		
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16.3767px;
line-height: 168%;
/* identical to box height, or 28px */
margin: 20px;
letter-spacing: 0.14em;
cursor: pointer;
color: #FFFFFF;

@media (max-width:1017px) {
	line-height: 140%;
	font-size: 13px;
	font-weight: 600;
}

	}

`

export const Wrapper3 = styled.div`

		h5{
			
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16.3767px;
line-height: 80%;
/* identical to box height, or 28px */
margin: 20px;
letter-spacing: 0.14em;

color: #FFFFFF;

@media (max-width:1081px){
	font-size: 12px;
	line-height: 60%;
}

@media (max-width:1031px) {
		margin: 15px;
	}

	@media (max-width:950px) {
		margin: 15px;
	}
	}

`

export const Wrapper4 = styled.div`


`



export const Icon1 = styled(Facebook)`
	color: white;
	width: 51.36px !important;
	height: 27.54px !important;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
		font-size: 16.3767px;
		line-height: 168%;
		/* identical to box height, or 28px */
		cursor: pointer;
		letter-spacing: 0.14em;

`

export const Icon2 = styled(Telegram)`
	color: white;
	width: 51.36px !important;
		height: 27.54px !important;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 16.3767px;
		line-height: 168%;
		/* identical to box height, or 28px */
		cursor: pointer;
		letter-spacing: 0.14em;

	

	
`
export const Icon3 = styled(Instagram)`
	color: white;
	width: 51.36px !important;
		height: 27.54px !important;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 16.3767px;
		line-height: 168%;
		/* identical to box height, or 28px */
		cursor: pointer;
		letter-spacing: 0.14em;

`

export const Icon4 = styled(YouTube)`
	color: white;
	width: 51.36px !important;
		height: 27.54px !important;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 16.3767px;
		line-height: 168%;
		/* identical to box height, or 28px */
		cursor: pointer;
		letter-spacing: 0.14em;
		
		`
export const CopyDiv=styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const DivText = styled.div`
			h5{
				font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16.3767px;
line-height: 168%;
/* identical to box height, or 28px */
letter-spacing: 0.14em;

color: #FFFFFF;

@media (max-width:1037px) {
	
}
	}
	

	h6{
		color: white;
		margin: 20px;
		width: 100%;
		
		@media (max-width:950px) {
			width: 70%;
		}
	}
	
	`
export const Xat = styled(EmailIcon)`
	color: white !important;
	width: 25px !important;
	height: 100% !important;
	transform: skew(30deg);
	cursor: pointer;
`

export const EmailDiv = styled.div`
	width: 40px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(darkblue, purple);

`
export const DivInp = styled.div`
width: 300px;
height: 40px;
border: 1px solid white;
transform: skew(-30deg);
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`

export const FooterInput = styled.input`
	width: 90%;
	background-color: rgba(0,0,0,0);
	border: none;
	outline: none;
	transform: skew(30deg);
	color: #ffffff9d;
	padding: 20px;
	font-size: 15px;
`
	


export const Chackbox = styled(Checkbox)`
	color: white !important;
`

export const Checkboxdiv = styled.div`
	display: flex;
	align-items: center;
`