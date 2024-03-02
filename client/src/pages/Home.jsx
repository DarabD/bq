import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import About from './About';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          
          <motion.header {...slideAnimation("down")}>
            <div style={{display: 'flex'}}>
            <img 
              src='./TECH4TIC.png'
              alt="logo"
              className="object-contain w-20 h-20 "
            />
            
            <div style={{marginRight: '1px', marginLeft: '1000px',...slideAnimation("left")}}>
            <CustomButton 
                type="filled"
                title="Customize"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-5 py-3 font-bold text-bm"
              />
              </div>
              </div>
          </motion.header>
          

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h6 className="head-text">
                <br/>
                <br/>
                BanoQabil 2.0<br className="hidden xl:block" />
              </h6>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-2"
            >
              <p className="max-w-md text-base font-normal text-gray-900">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-5 py-3 font-bold text-bm"
              />
            </motion.div>
          </motion.div>
          <div style={{display: 'flex', marginTop: '500px'}}>
          <About/>
          </div>
        </motion.section>
      
      )}
      
    </AnimatePresence>
  )
}

export default Home