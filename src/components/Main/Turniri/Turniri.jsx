import React,{useEffect,useState} from 'react'
import { AvaCard, Avatar, CardTexts,FuncButton, Container, Link, LinkWr, Navbar, NavTitle, TeamCard, Teams, Wrapper, BtnDiv, Button, Images, Items, ImagesBorder, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item1, ImagesWr, BgCardWr, BgCard, ResWrapper, BgTitleWr, InpWrapper, InpButtons, InpInputs, InputsWrapper, InputMini, InputMiniWr, InpButton, InpInput, InpButtonWr, InpFiles, FilesAvatar, FilesExport, FilesWrapper, FilesButton, FilesAvatarDiv, Select } from './style'

import axios from 'axios';



//import Game1 from '../../images/image 49.png'
//import Game2 from '../../images/image 48.png'


//Gallery :
import Img1 from '../../../Assets/Img1.png';
import Img2 from '../../../Assets/Img2.png';
import Img3 from '../../../Assets/Img3.png';
import Img5 from '../../../Assets/Img5.png';
import Img4 from '../../../Assets/Img4.png';
import Img6 from '../../../Assets/Img6.png';
import Img7 from '../../../Assets/Img7.png';
import Img8 from '../../../Assets/Img8.png';
import Img9 from '../../../Assets/Img9.png';
import Img10 from '../../../Assets/Img10.png';


import AvatarImg from '../../images/Group.png';

const Api_competition = 'http://159.65.207.213/api/competition/';
const Api_game = 'http://159.65.207.213/api/game/';
const Api_number = 'http://159.65.207.213/api/number/';



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



const Turniri = () => {
    // api
  
    const [comp, setComp] = useState([])
  
    const [globalbolen, setglobalbolen] = useState(true)
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
  
  
    // for filter 
    const [game, setGame] = useState([])
    
    const [MyCategory, setMyCategory] = useState('Все')
    
    const [category, setCategory] = useState('solo') 
  
    const [number, setNumber] = useState([])
    
    
    // reg-user1
    
    const [avatar, setAvatar] = useState('')
    const [name1, setName] = useState('')
    const [surname1, setSurname] = useState('')
    const [email1, setEmail] = useState('')
    const [exp_from1, setExp_from] = useState('')
    const [exp_to1, setExp_to] = useState('')
    const [select1, setSelect] = useState(0)
    const [phone1, setPhone] = useState('')
    const [BackImage, setBackImage] = useState(null)
  
    // reg-user2
  
    const [name2, setName2] = useState('')
    const [surname2, setSurname2] = useState('')
    const [email2, setEmail2] = useState('')
    const [exp_from2, setExp_from2] = useState('')
    const [exp_to2, setExp_to2] = useState('')
    const [select2, setSelect2] = useState(0)
    const [phone2, setPhone2] = useState(0)
  
    // Data user 1
  
    let DATAMAIN = new FormData()
    DATAMAIN.append('player_type',1)
    DATAMAIN.append('name',name1)
    DATAMAIN.append('surname',surname1)
    DATAMAIN.append('email',email1)
    DATAMAIN.append('experience_from',exp_from1)
    DATAMAIN.append('experience_to',exp_to1)
    DATAMAIN.append('phone',phone1)
    DATAMAIN.append('game',select1)
    DATAMAIN.append('img',BackImage)
    DATAMAIN.append('team_member',1)
  
    // Data user 2
  
    let DATAMAIN2 = new FormData()
    DATAMAIN2.append('player_type',2)
    DATAMAIN2.append('name',name2)
    DATAMAIN2.append('surname',surname2)
    DATAMAIN2.append('email',email2)
    DATAMAIN2.append('experience_from',exp_from2)
    DATAMAIN2.append('experience_to',exp_to2)
    DATAMAIN2.append('game',select2)
    DATAMAIN2.append('phone',phone2)
    DATAMAIN2.append('img',BackImage)
    DATAMAIN2.append('team_member',2)
  
    // axios post function
    
  
    const sendFunc = ()=>{

      
      try {
        axios.post('http://159.65.207.213/api/user/',DATAMAIN).then((res)=>{
          console.log(res);
          setName('')
          setSurname('')
          setEmail('')
          setExp_from('')
          setExp_to('')
          setPhone(0)
          
        })
      } catch (err) {
        console.log(err);
      }
    }
  
    // for api (axios.get)
  
    useEffect(() => {
      axios.get(Api_competition)
    .then((res)=>{
      let Filtred = res.data.filter((item)=> {
        if (item.game.name === MyCategory) {
          return item
        }

        if (MyCategory === 'Все') {
          return item
        }
      })
      setComp(Filtred)
    })

    axios.get(Api_game)
    .then(res=>{
      setGame(res.data)
    })

    

    axios.get(Api_number).then((res)=>{
      setNumber(res.data);
    })

    
  
    // setWindowDimensions

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      if(windowDimensions.width>768){
        setglobalbolen(false)
      }
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions,setMyCategory,]);


  const openMenu = ()=>{  // open menu function
    setglobalbolen(!globalbolen)
  }

  const SetImage = (e)=>{ // upload image from computer
    const rasm = e.target.files[0]

    setBackImage(rasm)
    setAvatar(URL.createObjectURL(rasm))
  }

  const Scrolling = (val)=>{
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
  }
  return (
    <Wrapper>
        <Container>
            <Navbar>
                <NavTitle>Eng so'nggi turnirlar</NavTitle>
                <FuncButton onClick={openMenu}>Eng so'nggi turnirlar</FuncButton>

                <LinkWr bolen={globalbolen} >
                  
                  <Link onClick={()=>setMyCategory('Все')} >Все</Link>

                    {
                      game?.map((item1,index1)=>{
                        return(
                          <Link key={index1}  onClick={()=>setMyCategory(item1.name) } >{item1.name}</Link>
                        )
                      })
                    }

                </LinkWr>

            </Navbar>
            <Teams>

              {
                comp?.map((item,index)=>{
                  return(

                    <TeamCard key={index}>
                      <AvaCard>
                        <Avatar src={`http://159.65.207.213${item.user1.img}`}/>
                        <h1>VS</h1>
                        <Avatar src={`http://159.65.207.213${item.user2.img}`}/>
                      </AvaCard>
                      <CardTexts>
                        <h2>{`${item.user1.name} - ${item.user2.name} ${item.game.name}`}</h2>
                        <p>{item.data}</p>
                      </CardTexts>
                    </TeamCard>

                  )
                })
              }


            </Teams>

            {/* Button div */}

            <BtnDiv>
              <Button onClick={()=>Scrolling(5100)}>Ro'yxatdan o'tish</Button>
            </BtnDiv>

            {/* Title wrapper */}

            <BgTitleWr>
              <h1>RASMLAR TO'PLAMI</h1>
            </BgTitleWr>

            {/* Images wrapper */}
            
            <ImagesWr>
              <Images>
                <Items>
                  <ImagesBorder>
                  <Item1 src={Img1}/>
                  <Item2 src={Img2}/>
                  <Item3 src={Img5}/>
                  <Item4 src={Img3}/>
                  <Item5 src={Img4}/>
                  <Item6 src={Img6}/>
                  <Item7 src={Img7}/>
                  <Item8 src={Img10}/>
                  <Item9 src={Img8}/>
                  <Item10 src={Img9}/>
                  </ImagesBorder>
                </Items>
              </Images>
            </ImagesWr>

            {/* Responsive images  wrappper */}

            <ResWrapper>
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img8} alt="" />
              <img src={Img9} alt="" />
              <img src={Img10} alt="" />
              <img src={Img5} alt="" />
              <img src={Img6} alt="" />
              <img src={Img7} alt="" />
              <img src={Img4} alt="" />
            </ResWrapper>
            <BgCardWr>
            {
              number?.map((item,index)=>{
                return(
                  <BgCard>
                      <h1>{item.number}</h1>
                      <p>Twitch потоки</p>
                  </BgCard>
                )
              })
            }
          </BgCardWr>

          {/* Inputs wrapper */}

          <InpWrapper>
            <h1>RO'YATDAN O'TISH</h1>
            <InpButtons>
              <button

              onClick={() => setCategory("solo")}
              style={{border:category==='solo' ? '2px solid rgba(87, 87, 241, 0.663)' : '',backgroundColor:category==='solo'?'#ffffff30':'' }}

              >BIR O'YINCHI</button>
              
              <button

              onClick={() => setCategory("squad")}
              style={{border:category==='squad' ? '2px solid rgba(87, 87, 241, 0.663)' : '' , backgroundColor:category==='squad'?'#ffffff30':''}}

              >JAMOA</button>
            </InpButtons>

            <InpFiles>
              {
                avatar === '' ?

                <FilesAvatarDiv>
                  <FilesAvatar src={AvatarImg} /> 
                </FilesAvatarDiv>

              :

                <FilesAvatarDiv>
                  <FilesAvatar src={avatar} />
                </FilesAvatarDiv>

              }
              <FilesWrapper>
                <h1>Fayl yuklang</h1>
                <label htmlFor="file-input">Avatar yuklang</label>
                <input onChange={(e)=>SetImage(e)} type="file" id='file-input' />
              </FilesWrapper>
            </InpFiles>

            {/* Inputs */}

              {
                category === 'solo' ? 
                
                // solo

                <InpInputs>
                  <InputsWrapper>
                    <label htmlFor="">Ism:</label>
                    <InpInput value={name1} onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="">Familia:</label>
                    <InpInput value={surname1} onChange={(e)=>setSurname(e.target.value)}/>
                    <label htmlFor="">Pochta:</label>
                    <InpInput value={email1} onChange={(e)=>setEmail(e.target.value)}/>
                  </InputsWrapper>
                  <InputsWrapper>
                      <label htmlFor="">Tajriba(yil)</label>
                    <InputMiniWr>
                      <InputMini value={exp_from1} type='number' onChange={(e)=>setExp_from(e.target.value)} placeholder='Dan:'/>
                      <InputMini value={exp_to1} type='number' onChange={(e)=>setExp_to(e.target.value)} placeholder='Gacha:'/>
                    </InputMiniWr>
                    <label htmlFor="">Yo'nalish:</label>
                    <Select onChange={(e)=>setSelect(e.target.value)}>
                      {
                        game?.map((item,index)=>{
                          return(
                            <option value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </Select>
                    <label htmlFor="">Тelefon:</label>
                    <InpInput value={phone1} onChange={(e)=>setPhone(e.target.value)}/>
                  </InputsWrapper>
                </InpInputs>

                // squad

                :

                <InpInputs>
                  <InputsWrapper>
                      <label htmlFor="">Yo'nalish:</label>
                      <InpInput onChange={(e)=>setName2(e.target.value)}/>
                      <label htmlFor="">O'yinchilar soni:</label>
                      <InpInput onChange={(e)=>setSurname2(e.target.value)}/>
                      <label htmlFor="">Yetakchi pochtasi:</label>
                      <InpInput onChange={(e)=>setEmail2(e.target.value)}/>
                    </InputsWrapper>
                    <InputsWrapper>
                        <label htmlFor="">Tajriba(yil)</label>
                      <InputMiniWr>
                        <InputMini onChange={(e)=>setExp_from2(e.target.value)} placeholder='Dan:'/>
                        <InputMini onChange={(e)=>setExp_to2(e.target.value)} placeholder='gacha:'/>
                      </InputMiniWr>
                      <label htmlFor="">Yo'nalish:</label>
                      <Select onChange={(e)=>setSelect2(e.target.value)}>
                        {
                          game?.map((item,index)=>{
                            return(
                              <option value={item.id}>{item.name}</option>
                            )
                          })
                        }
                      </Select>
                      <label htmlFor="">Yetakchi tel nomeri:</label>
                      <InpInput onChange={(e)=>setPhone2(e.target.value)}/>
                    </InputsWrapper>
                  </InpInputs>

                }


              <InpButtonWr>
                <InpButton onClick={sendFunc}>Yuborish!</InpButton> 
              </InpButtonWr>
            </InpWrapper>

        </Container>
    </Wrapper>
  )
}

export default Turniri;