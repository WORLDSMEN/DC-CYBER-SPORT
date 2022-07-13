import React from 'react';
import { BigDiv, Chackbox, Checkboxdiv, ContainerFooter, CopyDiv, DivInp, DivText,  EmailDiv,  FooterInput,  Icon1, Icon2, Icon3, Icon4, Icondiv,  Koz1,  Wrapper1, Wrapper2, Wrapper3, Wrapper4, Xat } from './style';
import { useState  } from 'react';
import Koz from '../../Assets/Koz.png';
import axios from 'axios';
import { useEffect } from 'react';

const Api_info = 'http://159.65.207.213/api/info/';



const Footer = () => {
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState();
  
  const Scrolling = (val)=>{
    window.scrollTo({
      top:val,
      behaviour:'smooth'
    })
  }

  let formData = new FormData();
  formData.append('email',email)
  
  const Submit =()=>{
        axios.post('http://159.65.207.213/api/email/',formData)
        .then((res)=>{
          console.log(res);
          setEmail('')
        })
      }

    useEffect(() => {
      
    
      axios.get(Api_info).then((res)=>{
        setInfo(res.data)
      })


    }, [])
    
      console.log(info);
  return (
	<ContainerFooter>
    <BigDiv>
      <Wrapper1>
        
        <Koz1 src= {Koz} alt="" />
    
      <Icondiv>
           <Icon1 onClick={()=>window.open(info.f_link)}/>
           <Icon2 onClick={()=>window.open(info.t_link)}/>
           <Icon3 onClick={()=>window.open(info.i_link)}/>
           <Icon4 onClick={()=>window.open(info.y_link)}/>
      </Icondiv>
      </Wrapper1>
      <Wrapper2>
        <h4 onClick={()=>Scrolling(1)}>Biz Haqimizda</h4>
        <h4 onClick={()=>Scrolling(2120)}>Тurnirlar</h4>
        <h4 onClick={()=>Scrolling(4000)}>Hisob</h4>
        <h4 onClick={()=>Scrolling(3270)}>Rasmlar</h4>
      </Wrapper2>
      <Wrapper3>
        <h5>Data</h5>
        <h5>StarCraff</h5>
        <h5>CS:GO</h5>
        <h5>Leagueof </h5>
        <h5>Legends</h5>
        <h5>Fortnite</h5>
        <h5>Rainbow6 </h5>
        <h5>Siege</h5>
        <h5>PUBG</h5>
      </Wrapper3>
      <Wrapper4>
           
          <DivText>
             <h5>Bizning axborot byulletenimizga obuna bo'ling!</h5>
             <h6>Eng so'nggi yangilanishlar va maxsus takliflarni olishni xohlaysizmi? bizning haftalik          <br/> xabarnomamizni olish uchun  elektron pochta manzilingizni kiriting.</h6>
          </DivText>
          <DivInp>
            <FooterInput value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your email'/>
            <EmailDiv>

             <Xat onClick={Submit}/>
            </EmailDiv>

          </DivInp>
          <Checkboxdiv>
          <Chackbox/>
             <h5>Men axborotnoma shartlarini qabul qilaman!</h5>

          </Checkboxdiv>
      </Wrapper4>
      <CopyDiv>

      </CopyDiv>
    </BigDiv>
      <h2> RAQAMLI SHAHAR 2022 Mualliflik huquqi !</h2>
  </ContainerFooter>
  )
}

export default Footer;