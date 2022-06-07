import TextField from '@mui/material/TextField';
function SMInput(props) {
    const { label,onChange,type } = props
    return <>
        <TextField onChange={onChange} id="standard-basic" label={label} type={type} variant="standard" />
    </>
}
export default SMInput


