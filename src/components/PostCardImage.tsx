// noinspection PointlessArithmeticExpressionJS

import {motion} from "framer-motion"
import Image from 'next/image'
import 'react-aspect-ratio/aspect-ratio.css'
import {AspectRatio} from 'react-aspect-ratio';
import {forwardRef, useState} from "react";
import sizeMe, {SizeMeProps, withSize} from "react-sizeme";

type PostCardImageProps = SizeMeProps & {
    isSelected: boolean;
    src: string;
    onLoaded(height: number): void;
}
export default sizeMe({monitorHeight: true})(forwardRef<HTMLDivElement, PostCardImageProps>(function PostCardImage({
                                                                                                                       isSelected,
                                                                                                                       src,
                                                                                                                       size,
                                                                                                                       onLoaded
                                                                                                                   }, ref) {
    const [ratio, setRatio] = useState(0.66),
        [loaded, setLoaded] = useState(false);
    return <motion.div ref={ref} layout animate={isSelected ? {scale: 1.2} : {scale: 1}} style={{position: 'relative'}}>
        <AspectRatio ratio={ratio} style={loaded ? {} : {height: 400}}>
            <Image src={src} alt={''} layout={"fill"}
                   onLoadingComplete={({naturalWidth, naturalHeight}) => {
                       setRatio(naturalWidth * 1.0 / naturalHeight);
                       setLoaded(true);
                       onLoaded((size.width! * 1.0 / naturalWidth) * naturalHeight)
                   }
                   }/>
        </AspectRatio>
    </motion.div>
}))