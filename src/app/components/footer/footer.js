import './footer.css'
import Image from 'next/image'


export default function Footer() {
    return (
        <div className="footerDiv">
            <div className="contactDiv">
                <div className='footerPhoneDiv'>
                    <a href='tel:+995 598 11 15 07'><Image width={20} height={20} src='/images/phone.svg' alt='phone icon' /></a>
                    <a href='tel:+995 598 11 15 07' style={{color:'black'}} > +995 598 11 15 07</a>
                </div>
                <div className='footerMailDiv'>
                    <a href='mailto:inbox.archstudia@gmail.com'><Image width={20} height={20} src='/images/mail.svg' alt='phone icon' /></a>
                    <a href='mailto:inbox.archstudia@gmail.com' style={{color:'black'}} > inbox.archstudia@gmail.com</a>
                </div>
            </div>
            <div className="addressDiv" >
                <a href="https://www.google.com/maps/place/41%C2%B042'38.9%22N+44%C2%B047'17.7%22E/@41.710804,44.7876133,19z/data=!3m1!4b1!4m4!3m3!8m2!3d41.710804!4d44.788257?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                > <Image width={20} height={20} src='/images/map-pin.svg' alt='location' />
                </a>

                <a href="https://www.google.com/maps/place/41%C2%B042'38.9%22N+44%C2%B047'17.7%22E/@41.710804,44.7876133,19z/data=!3m1!4b1!4m4!3m3!8m2!3d41.710804!4d44.788257?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:'black'}} > მედეა ჯუღელის ქუჩა N1 </a>
            </div>

        </div>
    )
}
