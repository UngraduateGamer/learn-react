import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import FormContainer from '../components/FormContainer'
import LeftFormImage from '../components/LeftFormImage'
import Footer from '../components/Footer'
const SignUp = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="container flex justify-between gap-50  items-center my-10  h-full w-[90%] ">
        <div className="left w-[60%] h-[500px]">
          <LeftFormImage/>
        </div>
        <div className="right w-[40%]">
            <FormContainer role={'signup'} title={'Create an account'} description = {'Enter your detaills below'}/>
            {/* <Form role={'signup'} title={'Create an account'} description = {'Enter your details below'} /> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp


// import React from 'react'
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import LeftImage from '../components/FormData/LeftImage.jsx'
// import Forms from '../components/Forms'

// const SignUp = () => {
//   return (
//     <div className=''>
//         <Header/>
//         <Navbar/>
//         {/* <div className="container flex justify-between items-center my-10 gap-20  h-full w-[90%]">
//             <div className="left w-[70%] h-[500px]">
//                 <LeftImage />
//             </div>
//             <div className="right w-[30%]">
//                 <Forms role={'signup'} title={'Create an account'} description = {'Enter your details below'} />
//             </div>
//         </div> */}
//         <Footer/>
//     </div>
//   )
// }

// export default SignUp