import Image from 'next/image'
import styles from '../styles/Parallax.module.css'

export default function Parallax() {

    return(
        
        <div className={styles.parallax}>
            <div className={styles.parallaxlayer + ` ` + styles.layer1 + ` bg-[url('/images/landscape_0004_Layer-5.png')]`}>
                               
            </div>
            <div className={styles.parallaxlayer + ` ` + styles.layer2 + ` bg-[url('/images/landscape_0003_Layer-4.png')]`}>
                            
            </div>
            <div className={styles.parallaxlayer + ` ` + styles.layer3 + ` bg-[url('/images/landscape_0002_Layer-8.png')]`}>
                            
            </div>
            <div className={styles.parallaxlayer + ` ` + styles.layer4 + ` bg-[url('/images/landscape_0001_Layer-2.png')]`}>
                            
            </div>
            <div className={styles.parallaxlayer + ` ` + styles.layer5 + ` bg-[url('/images/landscape_0000_Layer-1.png')]`}>
                      
            </div>
            
        </div>
        

    )


}