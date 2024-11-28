import React from 'react'
import './Aboutme.css';
import myphoto from "../assets/me2.webp";
import { MdEmail } from "react-icons/md";
import { AiFillMediumSquare } from "react-icons/ai";
import gsap from 'gsap';

function Aboutme({cursorref,setCursorText,setIsHovered}) {

  function cursorinc(event){
    
    setCursorText("");
    
    setIsHovered(2);
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY-85,
      scale:1,
      duration:0.5,
      ease:"black.out",
      overwrite: true,
    })
  }
  function cursordec(event){
 
    setIsHovered(0);
    setCursorText("");
 
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:1,
      duration:0.6,
      ease:"black.out",
      overwrite: true,
    })
  }

  function cursordec1(event){
    setIsHovered(0);
    setCursorText("");
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:0.3,
      duration:0.4,
      ease:"black.out",
      overwrite: true,
    })
  }

  return (
    <div className='aboutsec' id='about-sec'>
        <h1>About <span style={{color:"#14f7ff"}}>me</span></h1>
        <div className='aboutsec-details'>
            <div className='left-about'>
                <img src={myphoto} className='aboutphoto'/>
            </div>
            <div className='right-about'>
                 <p className='right-desc'
                   onMouseEnter={(event)=>cursorinc(event)}  onMouseLeave={(event)=>cursordec(event)}
                 > 
                 I'm a <span style={{color:"#14f7ff",fontWeight:"bold"}}>MERN Stack Developer</span> with expertise in MongoDB, Express.js, ReactJS, and Node.js and a solid foundation in C, C++, and Python. With strong skills in problem-solving and Data Structures & Algorithms (DSA), I create responsive, high-performance applications focused on user experience. Driven by continuous learning, I’m eager to bring innovative, impactful projects to life.</p> 
                 <div className='links'>
                 <a href='https://www.linkedin.com/in/vishalsingh79' target='_blank' ><img className='link' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABAxJREFUaEO9WUtSGzEQfc0iVcMymCp2ISeJuUl8EsJJbE6Cb4KXSWG2zCaxYmk0HrXUklqDYTYJMy3p9dPrj2SC4iEAJrHjb2UbxeQ1E2Fi++pznxBE7v8VRB8A+mM4j/0D1OuoDRVcpYLTAlExPR/q/JElr4ugr3vz0w62nKi8Uxt6SAX7l442uQSQYvGWV715JuCWe6xD5aaomOb2YHxvgN1rR98lxkUCLcMGWDOKdXjPnYnu9h1tY61T4jEB129OFmspVM6N6jSfTMpq39EmXrPMdBFhnnp1+NUltLLangF6mtnqjIBHAnYH4MfxXxeoTY+bTqc1AuqgHUNeHk7T/Nnuu4u7sKAvevPrOOQ+D9qDEzBqdiMLWhp8CsQAjTTBTW9u/wLPTUw3GIdrTjjJp9+oRtpADJn2n30k81UXvUtuqkfdavidkUFnaobEtAE2rx2twoUlOxG9TsLJUAf6kjZxi8myxwioAOZh35HVMRa9WQJ4UlGcGOW1HprO07QmgNQshoa5Qfy9iunRS860gZV+rSznGG8r6QLobJ6uBKIHtD1m2IcInJWIS3k+h6+iCue+G4MNER6Hkgz4rGP7muWxS7nPtWOKQJyQlwIxBB3aEbB96egu/m7/HqualF5LuV5RXJwIXKC2g3bbut2HoAm4eTO3fzralXMiYdEfxCJVBh1R8F7QtbYz1n8uEymY9lNlyviYp6cFCdf9ISxCnOkAmZcADsC3L8DD74527nPgndS/ZzWtLeMp6ERGIuir3qzDxirX3C96Y3O+DdzTkzDtwab9tNf01E8PachmgNdLmrJDqv0T6KhqSnV+aAkCwxF0lMjqXV6Sp4O02cy0D8SkoTIAUdpysh0Je49aGQ9BxycXxrSnIwrYRB75ADOrl+6CNfexjLzkC0yfOXuMzrdkhXbQUSgPWYHYIUDR5VWZHrk5BRjPHixgOdNc6UOXp2b6YhWeXObLg2vaLv81yjKiPMbsITU6YnGpZA+pjOvkMSAZ5GFvAaZueV5rGnjUnD18z03AU1zGJTCjpqNNf98VwpyKuOgPSwLlQas1zfWQLS7xaTwNRF/GDdZ+R30gTkiqKW8uaLWmAdsvuH54fNxdn8HS3mMYuH4i/X4qzf4wMQze2nIerb2M7w4V/fQ0Rf6MGJ7tGAjJ9+TdRGxyQuFn1+lzi6bTPD0gUB8IVU7UjPStafGkfQbQ6vOt28n6FcLoedPN0bv9kCdovp+24C3wfy7IvCuaq4pZDnDqh0iZzpVMQqWKqPvBJneoqik1/d46k5inxWXdzIGrti+OfxSNOnjhF9N2j4QRU6FP+6aGBVq5yk2tm4eBZmWjkabccjoYDfzwX9r41keVzytjJoSibPicoQpzrvwHJ6K4T+OMEZkAAAAASUVORK5CYII="/></a>      
                 <a href='https://github.com/VishalSingh79' target='_blank'><img className='link' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABRFJREFUaEOtWUt200oQvWUM58jDF+ccmNkrIV7JS1YSvJKYlURZScSIcHAYRgN4rudqtaT+VLdaCZpA5O763vqK8IaHAPAr7xffVQ7KK+XxT5q/Epc1oYsFSilsCaToJIT2qeUu90LrZwgEVr0xni85E8sDRBzfZquPLW/+AJsluBHiTxU1IVtXGVeBEsBRykIll3tBLlu+ZuBfBjYEbHSvc02gh3eMw9OKmrlmcc8XYXoUYrwqgv4H3C4YG+Op4WEYhwtu+vfu/7tzNQFf3wH1U7VojNUncOxyiIUOVWIXPYR1e7o6x+XtmbH8W/bEQvf36nOI74/Vos4T8oUqCsSe4EXLdwRcT+ebMl2cU/slcBDslwR0AtMx03XL97Osm5LbWn0UbnBDvQRuflTUTOX+ztIT2cMIzLhSMWp4pv2voC3pBgaa98AuzjZayrPvNNf8NQsHoiqWNvX1BGo+ZAWXMA8fp/ytW/5ig87JDRDcfQXw+QRsFm6Ki1xvnag44pweDwR8EzoR7Bj744qEt/L0QismtgXiscvXnm77Y9URXLd8JflZDU5GzaTmbYPdHgI2x9950knGItz8rOiQCnpVnwgWo+y7Y0VeihLhpahI3hViLiZF3YuWh/TY3+3tNBrHEYNNr5PEtxqIIsTZbZIttDiNhI7DZCr+x9hXhR4JDl51eah5WqxMgLj+FULPU+Fje9r8AT3G7pZGi5rnirZa2HnvJjQXdCexpqroUNcaIxXTzp0lsA2LTmTp9Qt/AfFtEHyGDIOb52oRaT7wmOgfUjn7ouXHdKOFCCKx0JnKl7ZyuicOsaihfcK79bGiXRLTosE/Ga2Plan6sx69l7CB6PyYs3bI18keHYV1a5rK6JESqwVFXgNF5IQWucrb49rNZgPfnJukgj1XdDPLzN7hlM27Q30HqZ0ahHZiZiD9qeXNbyBIP7aqMOrjarEzFTLPv0ivkESu7QXg1QYte8jooT1RQJQEWemZ9Qvfg/TBIgOPPKbFwEvirYxHsUZzGlDdEV0sDV71Mq4eiA4dLYodkSZKuBCan/6mClpWaJvyxpEqaPDeHoxJK/stsMOXGc3zyi/lEXovX/iaCX6r6PCaLuNFcdjFMgHrF785U24HFVEZAjxXKc27hUoBTDqo5PYnYTfpC9wxXzK2sicxv2kpr7+0bk/3BBq6PNlThIsYgcoHYP892h6VWVpPcb6VUgVNTW6X7emaQXd9MPcpZ2Dk05bG/0EUO66oTq1R+ylHRiu1OdJnYx8aSUvbH0wWsdsj84qxE6G0udHaVm3YR+/F82Y8yY1e8q3swyzZAAm2fwMyDAy7udDiLim3AIzvfWapvsYTdaxsybjxhA7DxrNq575oqBWGC+AhNYS6CB+9l96TyPk+taZKltPl6QEU4jgsqd2tVDcXWXpiS2WUGdoF3WPa3sPK3udRUVt67G472s1txLg5rmRpWD7ACtmpxU+6/S3EdGh3JUWZdYEwEtyH04Xmt2i95h/KNmTj0SlLB64XjNvljLc4L7WQvksx3lN69fxnjbJqYE/ZfCv9ySB4mJ6i7yxuGvW/FIi3JLjT++lEuExVW1UpW4LNcl2E/lXRdgrhjqXNl4CfKzoUhIVfv+0M8iqhe00kn/ur2Xy/EZ+f5egBsG6+mE9h4kZ2PHBT1AzOyYo4g0Z0tHiOSaV3l+LfxHSipMzT1WmAvHgoeK8yihTMQ9WhkeI4A0cTR/8HAhiTUrrxhwEAAAAASUVORK5CYII="/></a>
                 <a href='https://www.instagram.com/visha_lsingh8874' target='_blank'><img className='link'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABWFJREFUaEOtWT1vHFUUPXftEE2sgPDu8tGgtRCCMg01a1HwB0BCBCmOEDW0iAKMKPgNNDESShMBkWiosGnpKJDodiUaMLsmQcJjk/Vccmfe7Lw3c9/H2h4psrRz593zzjv3490QEh4CwAl2tUnHPrJAsr0xlD/q0yxEIDB4VeTBhS+2mBd0kNigz4sB6vi1l4sxnayG5LNNWdFCFdBjgjxSnKXZxM/gQqDjyz+X8+gMGKH6Vz3CjkND54fabLoOTP/IaNrebtxzy0Xsg0HOnwJ4DcA4jdvKge+kGZgSeArQT7OMZO3q6ejYXcXixb/8IOcxA3fIZtWL2mZXZ1r7tNoAbs8yOogREs0ew7zYYdAd5/zTscT8a+93HdYViyDTwvBjOew3Z8Cosrbn8W1m9U1uu4xr8vAoo5/zZCmJVR1H7DsuLXuRyjyjLSVFLyWv0jbMeUd07L50kdgnYMd0LKBNopHMIfode2KlkolSB8i3m37OEng7EvtBSXS2nBaIs6x0XT6DnPfBGLvpEgezjLY1Rh3QtoEjjXOEkxyxfNYDRkoMOMHWENRku1oiKmgdD2GYF8xBXZqXzR9JWV/JkdtBZIqQpMxbdX4XQEcZbdWb8RFkn4aNU015g7wYE2g/3I46srGYM12hXSeMBk1x+sTWdCVB79PKIpWdCloPQuNKPnFPYHuW9Q7sutc/5VeK/7C+1sN8fg2HTHQmriRZ9k0aLb3HM9JlgLYZYQnRvXlGtysAvD44xXtgfgtEr4LxZMkK4Xsw7i9y/ubvzd5DE3hSskvGQ49UyL8y2mvbqIGoMt1ixQkULtb6J7RLwMcBEJ/NMiqBis4XVTodh+j2gtac+OVhrLlkcMnCIOf3AXwZoe0BMz58XDQkWCXNiZZbdaBZX1R4cdAtpteBrbq17OfFDwR6o3IZFOqPs4xet9ieRBQiDVRXHj6mhQUte9TFqE5Hz5zyi8UZfgZhs14rUBEXxQI3jq7Tr2LbP+YJEUalvbJXm+l2EezgDmUPyQGF1Rv0T/hlMH6LBVX9vreGG4dP9H6RE6lB+75tQLuQPSnPbkf1JWdZr8x9Tz3gp69cxZ8EXEkZMxTAC0cZ/V4ybRqyizNNwPDYNEvhPLrMof0TvkeMN2NsE+O7jQzvTIlOTDDq+yz9lsVLT3nnyh7VR8sqOMj5JoCvI6Bz7uHd+VX6VuyiGaqqfC5o697bucj583RDfbuhGZ7yR1zgAwDPdsAT/uUCn8+v0Rf1u82cJ9JMqRs1bnRNr1zGXRcMNBVRcu8xv40eboLLy+/10ppwj89wd75B9+uv7R4kdDoJ2aOJUGmYANrvLqiKvJSJHd/Dh/wSreEfCdTDDZqDaGEBLq9wOtjOJSOu6dpxfTeMBtZyPMC7s6zXjAAqhss6Y2+mYTjeKRnf8YapdmB6g4lW3HyFw4wAOv308zmPHgFydbvVXKvSbkN21bUJ9IwQCJt5MekxRmrzalKSJyTK9c0m9EBzjtDPevgSoNBX3tuCkyT35hKTkr8n0UG3gzyBaTuPJutvuW7KbTxmY6ZNe77+Rx24NT2vDGw8KlrCXHVjYfvupbY1rFHGCqjH/hVwnpSgm4S/0n9lxGWjWqhZo7Z0KNSOLLUQtDXXPda00/A1/kmato2E8UeMfel9m9+TQSSdzDmnpi3dSNqyfqrnF4XMpxljdwPKESfsyQCVoY47n45oqhthsbA2C5pAlVtHJxfH8DJ4Wo0dwo8PSgU6EWjMSfVeGdYoH67msquCNCyXZbUaWjX3e+URSoWXhX+VddxbYkIdi5PjtnSNfdtVq+2L50l3X5Yb88IPLQg6vqNVCE2y/R9GEYJOmTqr3wAAAABJRU5ErkJggg=="/></a>
                 <a href='mailto:us55547660@gmail.com' target='_blank'><MdEmail className='link' style={{fontSize:"30px",color:"#14f7ff"}}/></a>
                 <a href='https://medium.com/@vishal_singh79' target='_blank'><AiFillMediumSquare className='link' style={{fontSize:"28px",color:"#14f7ff"}}/></a>
                 </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Aboutme
