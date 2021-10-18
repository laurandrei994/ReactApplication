import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

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
        maxWidth: 345,
    }

});

function ImageForm() {
    const classes = useStyles();
    const [file, setFile] = useState("");
    const [text, setText] = useState("");

    function handleChange(e: any) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }

    return(
            <div className={classes.divForm}>

                <h1 style={{ margin: 8 }}>
                    Upload an Image
                </h1>

                <TextField
                    id="photo-upload"
                    name="upload-photo"
                    type="file"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={ handleChange }
                />
                {
                    file.length > 0 &&
                    <Card className={classes.paperRoot}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={file}
                                title="Image"
                            />
                        </CardActionArea>
                    </Card>
                }
            </div>
    )
}

export default ImageForm;