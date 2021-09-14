import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

const dropIn = {
    hidden: {
        x: "-100vw",
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        x: "0",
        y: "0",
        opacity: 1,
        transition: {
            duration: .1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        x: "100vw",
        y: "100vh",
        opacity: 0,
    },
}


const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h1>This is a modal</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos rerum nemo nesciunt ex voluptatum? Esse tempora quo, veritatis aspernatur officiis quos debitis iste impedit laborum eum veniam laudantium maiores necessitatibus.</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal