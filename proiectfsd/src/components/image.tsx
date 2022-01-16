import { useState } from 'react';
import { TextField, Box, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    spacing: 4,
});

const useStyles = makeStyles({
    root: {
        background: '#FAF3EC',
        width: 'auto',
        position: 'absolute',
        top: 'calc(50% - 240px)',
        left: 'calc(40% - 160px)',
    },
    formImage : {
        boxShadow: '0 0 10px' ,
        backgroundColor: 'white',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    divForm: {
        width: '90%',
    },
    image: {
        width: "90%",
        height: "35%",
        margin: "8px"
    },
    paperRoot: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(35),
        maxWidth: "65%",
    }
});

function ImageForm() {
    const classes = useStyles();
    const [file, setFile] = useState("");
    //const [text, setText] = useState("");

    function handleChange(e: any) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }

    return(
        <><Box justifyContent="center" alignItems="center" width={800} height={500} margin='50px auto' bgcolor="primary.light">
            <TextField
                id="photo-upload"
                name="upload-photo"
                type="file"
                margin="dense"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange} />
            {file.length > 0 &&
                <Card className={classes.paperRoot} variant="outlined">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={file}
                            title="Image" />
                    </CardActionArea>
                </Card>}
        </Box><Link to="/DatePicker"> Next Page</Link></>
    )
}

export default ImageForm;