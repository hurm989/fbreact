import Button from '@mui/material/Button';
function SMButton(props) {
    const { ButnName, onClick } = props
    return <>
        <Button sx={{ width: 100, height: 24, fontSize: 10, fontFamily: '"Times New Roman"' }} onClick={onClick} variant="contained">{ButnName}</Button>
    </>
}
export default SMButton