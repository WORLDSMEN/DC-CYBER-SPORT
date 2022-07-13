import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Link,Logo1,   LinkWrapper, Text,Button, Blue, Paragraph, Ikki, CardDiv, Card1, Con2,  Con3, Par1, Par2, Button2, Div,  BarDiv,   } from './style';
//import Logo from '../images/Group 500.png';


//********************** */
//import Photo1 from '../../components/images/Rasm1.png';
//import Photo2 from '../../components/images/Rasm2.png';
//import Photo3 from '../../components/images/Rasm3.png';
import  Bar from '../../../src/components/Bar/Bar';
import axios from 'axios';

const Api_info = 'http://159.65.207.213/api/info/'
const Api_blog = 'http://159.65.207.213/api/blog/'




	

  const Navbar = ()=>{

	const [info, setinfo] = useState({})

	const [blog, setblog] = useState([])

	useEffect(() => {
	  axios.get(Api_info).then((res)=>{
		setinfo(res.data)
	  })
	  axios.get(Api_blog).then((res)=>{
		setblog(res.data)
	  })
	}, [])
	

	const Scrolling = (val)=>{
		window.scrollTo({
			top:val,
			behavior:'smooth'
		})
	}
	return(
 
	<Container>
		
			 <Con2>
			  <Div>
						<Wrapper>

						  <Logo1 src={`http://159.65.207.213/${info.logo}`} alt="logo" />
					   <LinkWrapper>
				
						<Link onClick={()=>Scrolling(1)}>Biz haqimizda</Link>
						<Link onClick={()=>Scrolling(2120)}>Turnirlar</Link>
						<Link onClick={()=>Scrolling(4200)}>Hisob</Link>
						<Link onClick={()=>Scrolling(3300)}>Rasmlar</Link>
					   <Button onClick={()=>Scrolling(5100)}>Ro‘yxatdan o‘tish!</Button>
					  <BarDiv>

					   <Bar/>
					   </BarDiv>
					</LinkWrapper>
				
				</Wrapper>

				
				  
			<Text>
					<p>KIBER SPORT O'YINI </p>
						<p> <b>DC CYBER</b> GA</p>
						<p>XUSH KELIBSIZ ! </p> 
				</Text>
			
				</Div>
			</Con2>
	
	
			
			 <Blue>
				<Ikki>

				   <Paragraph>Raqamli SHahar- bu 2019-yilda tashkil etilgan <br /> profesional o'yin tashkiloti — <br /> Bizning maqsadimiz butun dunyodagi <br /> eng iqtidorli kibersport o'yinchilarini birlashtirishdir. 
                  </Paragraph>


				</Ikki>
				<CardDiv>
					{
						blog?.map((item,index)=>{
							return(
								<Card1 key={index}>
									<img src={`http://159.65.207.213${item.image}`} alt="rasm" />
									<h1>{item.title}</h1>
									<p>{item.text}</p>
								</Card1>
							)
						})
					}
				</CardDiv>
			 </Blue>

			 <Con3>
				<Par1>
					<Par2>
					RAQAMLI SHAHAR-SPORT BILAN <br /> KIBERSPORT OLAMIGA SHO'NG'IB <br />KETISH VAQTI BO'LDI BUGUN  <br /> JAMOAMIZDA BO'LING!
					</Par2>
				</Par1>
				<Button2 onClick={()=>Scrolling(4900)}>Ro'yxatdan o'tish</Button2>
			 </Con3> 
	</Container>
  )
}

export default Navbar;