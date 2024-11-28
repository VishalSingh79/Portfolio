import React from 'react'
import "./Contact.css"

import { toast } from 'react-toastify';
import {useForm} from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

function Contact({cursorref}) {
  const form = useRef();
  const { register, formState: { errors }, handleSubmit } = useForm();
  function cursordec(event){
 
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:1,
      duration:0.4,
      ease:"black.out",
      overwrite: true,
    })
  }

  function cursordec1(event){
  
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:0.3,
      duration:0.4,
      ease:"black.out",
      overwrite: true,
    })
  }
    
  const onSubmit=(data)=>{
    toast.info("Sending your message...", {
      autoClose: 900, 
    });    
      sendEmail(data);
  }

  const sendEmail = (data) => {
   
    emailjs
      .sendForm('service_m5mbkyq', 'template_mynulfv', form.current, {
        publicKey: 'rzm2-l5V9nWBmLH5H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent",{
            autoClose:1000
           });
          form.current.reset();

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.warning("Message not sent",{
            autoClose:1000
           });
        },
      );
  };




  return (
    <div className='contact-sec' id='contactsec' >
    <div className='contact-info'>
      <h1>Get in <span style={{color:"#14f7ff"}}>touch</span></h1>
      <div className='contact-details'>
        <div className='contact-left'>
            <p className='heading'><span style={{color:"#14f7ff"}}>Let's</span> talk</p>
            <p className='cdesc'>Curious about something, have a bright idea, or just want to say hi? Feel free to reach out. I’m always excited to connect, chat, and explore new opportunities together!</p>
            <p className='icons'><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAolJREFUSEulV+2B2yAMlTyJb5PeJK0niTNJbpPLJvUkVi0QICFhuy2/Egx6evoGoS4EAGp/+1/psz6DgEDBjQs5IpdP2WVlO10C/HbGYY6EsdID4Ht6l8tjgFirCHhs7Ng0gjmyhNtPUq6A79D+xzPZ1HKZiH4dIfQAgDntc6x5Zwhz+Xh6phppOyQ9EfGrYFWxRMRgv8tRLS/9DgDa1m0lPhHx3UyNALTTKmwZeyOA2ZB1mmjiI9puf8EJv9iS1dQVONP7BMBXNXm1mBU00qVFIW0AuADAt+yxuZlgAMybOLENgIgY/IdXwId+wDmBMLOdqFSm5yF6bYw5jsiY+gMROSB4n4ED9jbGNEsCXKbky7woASfVhLFKJ6J9PWzMEc2LLy0FXC7fYV9Nme/ss7iMlecVAdN6qPXITucajBzJCyC9EafKngBeSDDbNKMtYKmDtZCPfLyvBCjA2ofE4V/Zi89eAOwCnA8Nk99KHeG0TMrl2FArkXlOycfF1JJOjbG9IDHI0flO5k/ndwYGnPBdulaOE3roqtPlemPcNDU+9mHrfN/aYu9LV1iatM7ULqptJQoqV2XfZUOnsEuyGPjU1B69pEvny1GanUS1Kpnn/cHJvlMydR5zkZImZPP4XstRRWPQxiQtnY9NAZHKNWpFo3DTeX9xplUuFfdd5VKmHjeGGMey7HhEwSXp9LdWPo0lN0t0eZwLCE8fXI9P1oVW7rNLy49pwi11pzYyIey0c+n7GY4+12PIWOGM/5wQuR+kZWauulO+ntP/r6+Z8WhEvSNa3x2dd/JVk7BvkWBmPR1j78y4Viszz8XvAUtp9GZwZJ0u9q3lfaycH7nauUYjykf3mAueE38AMIlkOKAbUFoAAAAASUVORK5CYII="/></span> us55547660@gmail.com </p>
            <p className='icons'><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAxBJREFUSEuNV4uV4jAM1LiSpZKDSo5Uwm4lhEpIJ5tKootkOZZ/4fwevEBsfUajUQIaLBAR69doB9Hp7dFNM4wPtqlr3h86dWBB2x6fjFyXd5sEQSAuE3fOmPkqsABhaSEYR+gclx5PoS4dv4noaqfX/XrZYfoBsJ4VY+AYxLzd9wo/iPgFhO9ouMWVmbNj4QOUFiuIXgDsXMuT6Liyx8zP/fDdRSUZNEbk/sb8RUTp84eI7uZfLK9MdAuavV9SPrfMkIdOac0EAtMPwiiDzB7eNJCnhx/ARbLzXCkcb8xXML3FizmLaOQVM2/IpRmvABY5wLzJby2VZZ8Rcww/zEaGkmSsLE4+8zULYYra8cZvAl1tj0B6E2Jp5iAp2RVEKxFPAWFJslBn/AWi37IePgS9I8anmB1RQa54UOo6BWDhWP9fy2IBcPPNe/gRorSOu2FMQJi1/tG4LOsCvT6c5MB4BcKl67hPLtuqievXgoBbT0qZWZj/sBMCuWT9vcf3kLphJ8iZY2GkRN8rdAFXiYXCHqGN6yZqxrwdvLH6a4kaAfEEi+ePGldOy+Z3PS2ByxISzla+p9nR/xrH7nBFsJRBJFQhOJ+nTAlMr53SDqkLEz1iSY8azwhhynPyfzyOhkRSrmoiRAFAnbX2ok4hSzsrUVSlbWMRl1kk0vdrb6QP5zEzC8FSvRIYawAuPUO+bZjwCqrtDtfqUOvY9hpDhRTXSj4PdUr1VvXKo1H+lj1Z4QzREiFX+lyReGXOxWgSicRxNWyzV/o2zeO6w7pTrdtOvsEFnao3Cw2vvaT2U4TyzeFI7ZwvGWu9WGTed1p1fgqTaUbA5M8Ma5z7tYDd6XF+3DApPfouPYa4tGVkHjrdh7pqrWOAZ9J5Pe4k3h2oMs3muqvHqPkgyuGfBv1fT7yixhmQOQjMdTsVuJ89vw+EyvpdnrUkmJrdUd+bdpJJdf6ykIW5s7GGbtOnDk1V2y89LPS0/ZxcBkeDuBeksTj1S1gMiUbLR28PI3xOpHHwDub6vDNJGoZ/eFFrZuZYIv4BYJ6dMi+BcmwAAAAASUVORK5CYII="/></span> +91-7905248829</p>
            <p className='icons'><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA0FJREFUSEuVVzFCGzEQnLkGfhHzinRgfyMpAhUPIL1NTx6QylDAN3ykyytwfhGam3h1qzvpdMLOVSAkze7s7KwgAQj9l/7sS5P12o5095HL/Ea76ZSdQ1T/Af1BMgxJHvlKKEkLANd+8JHk/tgteeQnAZeESFoC2PlfViTbEN7JdGTA9ouO1tvA1GkJ5sDzGdcjKamuhc4AGCn+BmBhoiRgNLcAnizz45SPQq7v9SA6dQv21Bpw/jm6L1oQRv3RmnOeDF8NWXYbgWuWAE8APvXBaCnEumkP0LLf5BGOd5oYPlS1Om0OhV8nF9w35Cb2fVxPVJ7tLcHz5p2lOihX2HloRt3NoN6KX3R9m8WSDGfmACriAjppR8Daxr4VG7YmeUlfINyC+Ox/+w3gZ0O+GBNStwD4FtqD2pPNxWnA4bDMHLZ+4D5SJukBwF1/aXpdWPhB8rutdtLmII9Ie+jzYbcLNrPM2MeSDDQ4Ew+ooXctU+C5wMzT+UryxSgn8DYNPN06AJtABNgBg9kCtHq1JFcO/ArockzVzKZQ5y+SV2F/J9OHlSrUOrYbG+6DqmM7STL5p6q0vY9kc2PzS9JfAGezSvQJR+GdDc/tzi5hbVA/ELqiZ9IPTYF7baBl06xGYJ1NijuN453kuTO0BXQ9YWXQS0Z14kxrAUuzQ5IXnsErgMtaxr4eqPb9VuNoq6FcRnt0tVkDsewPnbOOwKO49Hwk4yAu3x99xsZmqHE6BmrA6dhL2ql7EHgXD00U7u1EdOo2FNZWK4CDB4ScE+fM2fMpJGDrBtI7UGogwC2QG0iSaRp0KFUESOdC1avdf2Mv+tRp9uMLray2nzEPGByvIdue83wc9aquzOuJgxl4OXX8AqmbtmMoUW36lWMx2Tk3dWTK7E2mBfjnMBSubCyGjLwHD1066GLkJSe6Mo9zGoMFhkll0ycCzDSWsAf7KXak7VKrTwe1HyuzNxu1+o1Z9pb4dOj71up5yus8VrweXL32xSszvWSq3unDYR64ACuZ6F+Z2gU7lM3qpi1eqMWxSY1HpU/knvxrM+2G8kH/cZtllMaAKmxW6K/tzt/khZJnjlUNpKhZHXM0gpkyjSXw4HzPPzU0oDiOmuLnAAAAAElFTkSuQmCC"/></span> Kanpur,Uttar Pradesh</p>
        </div>
        <div className='contact-right'>
           <div>
          
              <form action='' ref={form} onSubmit={handleSubmit(onSubmit)} className='contact-form'>
                  <label htmlFor='name'>Name:</label>
                  <br/>
                  <input type='text' id='name' name='name' className='labelh'   onMouseEnter={(event)=>cursordec1(event)} onMouseLeave={(event)=>cursordec(event)}
                     {...register('name', { required: "Name is required**" })}
                  />
                  <p style={{color:'red',backgroundColor:'inherit'}}>{errors.name?.message}</p>
                  
                  <label htmlFor='email'>Email:</label>
                  <br/>
                  <input type='email' id='email' name='email' className='labelh' onMouseEnter={(event)=>cursordec1(event)}  onMouseLeave={(event)=>cursordec(event)}
                      {...register('email', { required: "Email is required**" })}
                  />
                   <p style={{color:'red',backgroundColor:'inherit'}}>{errors.email?.message}</p>
                 
                  <label htmlFor='message'>Message:</label>
                  <br/>
                  <textarea type='text' id='message' name='message' className='textlabel' onMouseEnter={(event)=>cursordec1(event)}  onMouseLeave={(event)=>cursordec(event)}
                    {...register('message', { required: "Message is required**" })}
                  />
                   <p style={{color:'red',backgroundColor:'inherit'}}>{errors.message?.message}</p>
                  <button className='submitlabel'>Send</button>
              </form>
           </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
