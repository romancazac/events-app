import React from 'react'

import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';


const Fade = React.forwardRef(function Fade(props, ref) {
   const { in: open, children, onEnter, onExited, ...other } = props;
   const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
         if (open && onEnter) {
            onEnter();
         }
      },
      onRest: () => {
         if (!open && onExited) {
            onExited();
         }
      },
   });

   return (
      <animated.div ref={ref} style={style} {...other}>
         {children}
      </animated.div>
   );
});

Fade.propTypes = {
   children: PropTypes.element,
   in: PropTypes.bool.isRequired,
   onEnter: PropTypes.func,
   onExited: PropTypes.func,
};

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   boxShadow:` ${'10px'} ${'10px'} ${'40px'} ${'rgba(3, 1, 23, 0.256624)'}`,
   background:'#fff',
   borderRadius: '30px',
   p: 4,
};
const Modals = ({children, btn}) => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <span  onClick={handleOpen}>{btn}</span>
         <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}

         >
            <Fade in={open}>
               <Box sx={style}>
                  {children}
               </Box>
            </Fade>
         </Modal>
      </>
   )
}

export default Modals