import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.styles'

const LoadingComponent = () => {

    return (
        <Box sx={styles.containerCircleProgress}>
            <Box>
                Cargando los datos, espere un momento
            </Box>
            <CircularProgress size={100} disableShrink={true} sx={styles.circleProgress} />
        </Box>
    )
}

export default LoadingComponent