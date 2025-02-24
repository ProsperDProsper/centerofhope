import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
      <div className={`navbar-top ${style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}>
         <div className="container">
            <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
               <ul className="topbar-left">
                  {style ?
                     <>
                        <li><span>HI</span>, Good Afternoon Dude! </li>
                        <li>Shiloh, Hawaii 81063</li>
                     </> :
                     <>
                        <li><b> <i className="flaticon-phone-call"></i>  <Link href="callto:+255 785 76 9548">+255 785 76 9548</Link></b></li>
                  <p className='italic'> (whatsapp) </p>     <li><b> <i className="flaticon-whatsapp"></i> <Link href="https://wa.me/255629962905">+255 629962905</Link></b></li>
                   <li><i className="flaticon-pin"></i> P.O Box 232, Musoma-Tanzania</li>
                     </>
                  }
               </ul>
               <ul className="topbar-right">
                  <li className="social-area">
                     <span>Follow Us  </span>
                     {/* <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                     <Link href="#"><i className="fab fa-twitter"></i></Link>
                     <Link href="#"><i className="fab fa-linkedin-in"></i></Link> */}
         <Link href="https://www.instagram.com/centerofhope2024/profilecard/?igsh=ZzBsa2U1aWdybHRs"><i className="fab fa-instagram"></i></Link>
         <Link href="https://www.facebook.com/profile.php?id=100064880372276"><i className="fab fa-facebook"></i></Link>
         <Link href="https://x.com/center_hope24?s=11"><i className="fab fa-twitter"></i></Link>

                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default HeaderTop
