import React,{useState} from 'react'
import "./Qr.css"

const Generatorqrcode = () => {
    const [input,setInput]=useState('')
    const [isLoding,setIsLoding]=useState(false)
    const [qr,setQr]=useState('')

    

    const getQrCode=async()=>{
        try {
            setIsLoding(true)
            const res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`)
            setQr(res.url)
            console.log(res)
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoding(false)
        }
    }



    const handleinput=(e)=>{
        setInput(e.target.value)
    }

  return (
    
    
        <div className='box'>
        <h1>QR Code Generator</h1>
        <input type="text" value={input} placeholder='Enter URL or Text...' onChange={handleinput} className='input' />
        <button className='qr_button' onClick={getQrCode}>Generator QR Code</button>

        {isLoding&& <div className='loding'><span></span>Loding....</div>}
        
        {!isLoding && (qr?<img className='img' src={qr} />:<div className='loding'> Generator QR Code fpr you & your friends !</div>)}
        </div>
    
  )
}

export default Generatorqrcode