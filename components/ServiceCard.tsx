import { FunctionComponent } from 'react'
import { Service } from '../types'
import DOMPurify from "isomorphic-dompurify";

// import { motion } from 'framer-motion'
// for about page 
const ServiceCard: FunctionComponent<{ service: Service }> = ({
   service: { Icon, title, about },
}) => {
  
 const sanitizedData = () => ({
   __html: DOMPurify.sanitize(about),
 });

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-green' />
         <div className=''>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={sanitizedData()} />
         </div>
      </div>
   )
}

export default ServiceCard
