import styled from  'styled-components';


import Rasm from './../images/BgcImg.png';

//*********************** */
import BacImage from '../../../src/components/images/BacImage.png';
import Aloqa from '../../../src/components/images/Aloqa.png';



export const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	background: rgba(0, 0, 0,0);

	background-image: url(${Rasm});
`
export const Con2 = styled.div`
	width: 100%;
	height: 100vh;
	max-width: 1600px;
	//background-image: url(${Rasm});
	background-repeat:no-repeat;
	border: 1px solid red;
	background-position:center;



`
export const Div = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	background-position:center;
	justify-content: center;
	align-items: center;
	background-repeat:no-repeat;
	//background-image: url(${Rasm});



`

export const Wrapper = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
    border: 1px solid red;
	position: fixed;
	top: 0;
	//background: rgba(0, 0, 0, 0.7);


	@media (max-width:815px) {
		width: 80%;
		display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;

	}



	@media (max-width:405px) {
		width: 80%;
	}

	@media (max-width:410px) {
		left: 30px;
	}

`


export const Logo1 = styled.img`
	width: 120px;
	height: 40px;
	border: 1px solid red;
	object-fit:contain;
	
`


export const LinkWrapper = styled.ul`
	color: white;
	display: flex;
	border:1px solid red;
	align-items: center;
	justify-content: space-around;
	width: 70%; 
	height:120px;



	
`

export const Link = styled.li`
	color: white;
	text-decoration:none;
	font-size: 15px;
	list-style-type: none;
	cursor: pointer;
	@media (max-width:600px){
	display: none;
}

`

export const BarDiv = styled.div`
	color: white;
	background-color: white;
	border:1px solid #8F00FF;

@media (min-width:600px){
	display: none;
}
`


     export const Button = styled.button`
	background-color: #8F00FF;
	color: white;
	width: 160px;
	height: 50px;
	border-radius: 7px;
	font-family: 'Montserrat';
	line-height: 20px;
	font-weight: 600;
	font-style: normal;
	font-size: 16px;
	cursor: pointer;

	@media (max-width:600px){
	display: none;
}

`


export const Text = styled.p`
	color: white;
	//margin-top:200px;
	font-weight:400;
	letter-spacing:0.14em;
	font-family:'Russo One';
	font-style: normal;
	font-size: 40px;
	line-height: 80px;
	padding-top: 200px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	border: 1px solid red;
	word-break: break-all;
/*  */

	b{
		color: #8F00FF;
	 }
	
	 @media (max-width:755px){
		font-size: 30px;
	 }

	 @media (max-width:565px){
		font-size: 25px;
		line-height: 60px;
	 }


	 @media (max-width:480px){
		font-size: 20px;
		line-height: 50px;
	 }

	 @media (max-width:385px){
		font-size: 15px;
	    line-height: 40px;

	 }


/* 
	 @media (max-width:363px){
		font-size: 15px;
	    line-height: 40px;

	 } */

	 `


//***************************************** */


//Blue:

export const Blue = styled.div`
	width: 100%;
	max-width: 1600px;
	height: 900px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	background-image: url(${BacImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;


	@media (max-width:770px) {
		height: 1500px;
		
	 }


`

export const Paragraph = styled.p`
	margin-top: -500px;
	font-size: 36px;
	font-weight: 400;
	line-height: 43px;
	letter-spacing: 0.14em;
	color: white;
	 display: flex;
	 flex-direction: column;




	 @media (max-width:1015px){
		font-size: 32px;
	 }

	 @media (max-width:900px){
		font-size: 29px;
	 }

	 @media (max-width:815px){
		font-size: 27px;
	line-height: 33px;

	 }

	 @media (max-width:761px){
		font-size: 24px;
	 }

	 @media (max-width:675px){
		font-size: 21px;
	 }

	 @media (max-width:595px){
		font-size: 18px;
	line-height: 28px;

	 }

	 @media (max-width:515px){
		font-size: 15px;
	 }

	 @media (max-width:425px){
		font-size: 12px;
	 }

	 @media (max-width:345px){
		font-size: 10px;
	 }

`

export const Ikki = styled.div`
	width: 100%;
	height: 1400px;
	display: flex;
	//flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding-top: 140px;
	font-family: 'Russo One';
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 43px;
	 letter-spacing: 0.14em;

	 @media (max-width:770px) {
		height: 1400px;
		
	 }

`

export const CardDiv = styled.div`
	display: flex;
	flex-direction: row-reverse;
	//flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin-top: -350px;
	width: 100%;
	height: 1000px;
	position: relative;
	border: 1px solid red;

	@media (max-width:1223px){
		width: 80%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;


	}
	 
	@media (max-width:770px){
		display: flex;
		flex-direction: column;
		align-items: center;

		height: 1200px;
	 }



`


//******************************** */
export const Card1 = styled.div`
	width: 400px;
	height: 260px;
	border:1px solid #00E0FF;
	 border-radius: 20px;
	 background: rgba(255, 255, 255, 0.1);
	 word-break: break-all;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
	 
background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

	 @media (max-width:770px) {
		height: 210px;
		margin-top: 120px;
		width: 300px;
	 }

	 @media (max-width:1223px) {
		width: 300px;


	 }
	 @media (max-width:1123px) {
		width: 300px;
	 }


	 @media (max-width:1150px) {
		width: 250px;
	 }

	 @media (max-width:956px) {
		width: 200px;
	 }


	h1{
		text-align: center;
		color: white;
		font-family: 'Russo One';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 168%;

		@media (max-width:1239px) {
			font-size: 20px;
		}

		@media (max-width:1153px) {
			font-size: 17px;
		}


	}

	p{
		font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.14em;

         color: #FFFFFF;
		
		 @media (max-width:1239px) {
			font-size: 18px;
		}

		@media (max-width:1153px) {
			font-size: 9px;
		}


		@media (max-width:951px) {
			font-size: 12px;
		}


	}

	img{
		margin-top: -140px;

		
	@media (max-width:770px){
		margin-top:-105px;
	}
	}
	
`






//*********************************000 */
//3-bolim:
export const Con3 = styled.div`
	max-width: 1600px;
	height: 480px;
	background-image: url(${Aloqa});
	background-position:center;
	background-repeat:no-repeat;

@media (max-width:660px){
	background-position:center;

}
`

export const Par1 = styled.div`
	
`

export const  Par2 = styled.p`
	color: white;
	font-size: 36px;
	height: 192px;
	padding-left: 100px;
	font-weight: 400;
	font-size: 30px;
	line-height: 43px;
	letter-spacing: 0.14em;
	padding-top: 100px;
	@media (max-width:800px){
		font-size: 25px;
	   font-weight: 350;

	 }

	 @media (max-width:690px){
		font-size: 22px;
	    height: 160px;
	    font-weight: 320;


	 }

	 @media (max-width:620px){
		font-size: 19px;
	    font-weight: 300;

	 }
	 @media (max-width:550px){
		font-size: 16px;
	 }


	@media (max-width:530px){
		font-size: 13px;
	 }

	 @media (max-width:401px){
		font-size: 11px;
	   font-weight: 100;
	  line-height: 36px;
	   letter-spacing: 0.14em;
	 }

	 @media (max-width:360px){
		font-size: 11px;
	   font-weight: 100;
	  line-height: 30px;
	   letter-spacing: 0.14em;
	   padding-left: 50px;

	 }
 

`
export const Button2 = styled.button`
	color: white;
    background-color: black;
	border:2px solid #AD00FF;
	width: 150px;
	height: 40px;
	border-radius: 7px;
	font-family: 'Montserrat';
	line-height: 20px;
	font-weight: 600;
	font-style: normal;
	font-size: 16px;
	margin-top:120px ;
	margin-left: 100px;
	cursor: pointer;
	

`