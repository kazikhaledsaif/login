import React, { useRef, useState } from 'react';
import './../App.css';
import { login } from './../utils/UserFunctions'
import { Grid, TextField, Button, InputAdornment, Typography, FormHelperText } from "@material-ui/core"
import { AccountBoxSharp, LockOutlined, CheckCircleOutlineRounded } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    firstDivBackgroud: {
        backgroundColor: '#f2f5f7',
    },
    divBackgroud: {
        backgroundColor: '#424b5a',
    },
    logInText: {
        color: '#fff',
        fontWeight: "bold"
    },
    forgetPasswordButton: {
        color: '#fff',
        alignSelf: "self-start",
        '&:hover': {
            backgroundColor: 'transparent',

        }

    },
    formButton: {
        color: "#303030",
        padding: "8px 10px",
        background: "#ffffff",
        borderRadius: "1px",

    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    }

});
function Login() {
    const userNameValueRef = useRef('')
    const passwordValueRef = useRef('')
    const classes = useStyles();
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmitClick = (e) => {

        e.preventDefault();
        if (passwordValueRef.current.value && userNameValueRef.current.value) {
            const user = {
                username: userNameValueRef.current.value,
                password: passwordValueRef.current.value
            }
            console.log(user)
            login(user).then(res => {
                if (res) {
                    console.log(res)
                    history.push('/dashbaord')
                }
                else {
                    setError("Wrong user name and password!! Try Again.")
                }
            })
        } else {
            setError("Please Enter you username and password.")

        }
    }

    return (
        <div >
            <Grid container style={{ minHeight: '100vh' }} >
                <Grid container item
                    xs={12}
                    sm={7}
                    className={classes.firstDivBackgroud}
                    direction="column"

                    style={{ padding: "40px 120px" }}>

                    <Typography style={{ fontWeight: "bold" }} color="primary" variant="h6" gutterBottom>
                        BKV
          </Typography>
                    <div style={{ height: 30 }} />
                    <Typography style={{ fontWeight: "bold" }} color="primary" variant="h2" gutterBottom>
                        Welcome!
            Management Of <br />
            Tax And Biofuels
         </Typography>
                    <div style={{ height: 30 }} />
                    <div className="makeStyles-welcomeListItem-9">
                        <CheckCircleOutlineRounded color="primary" />
                        <Typography color="primary" variant="body1" >
                            Excise Duty Reportings
          </Typography>
                    </div>

                    <div className="makeStyles-welcomeListItem-9">
                        <CheckCircleOutlineRounded color="primary" />
                        <Typography color="primary" variant="body1"  >
                            Reporting on biofuel sustainability criteria
          </Typography>
                    </div>



                </Grid>
                <Grid container
                    item
                    xs={12}
                    sm={5}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{ padding: 10 }}
                    className={classes.divBackgroud}
                >
                    <div />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 400,
                        minWidth: 300,
                    }}>
                        <Typography variant="h5" align="center" className={classes.logInText}>
                            Log in
                         </Typography>
                        <div style={{ height: 20 }} />
                        <TextField name="username"
                            inputRef={userNameValueRef}
                            type="text"
                            className={classes.formButton}
                            fullWidth
                            placeholder="Username"
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxSharp />
                                    </InputAdornment>
                                )
                            }}

                        />
                        <TextField name="password" type="text"
                            inputRef={passwordValueRef}
                            className={classes.formButton}
                            fullWidth
                            placeholder="Password"
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlined />
                                    </InputAdornment>
                                )
                            }}

                        />
                        {error && <p style={{ color: "red" }}> {error} </p>}
                        <div style={{ height: 20 }} />
                        <Button disableRipple className={classes.forgetPasswordButton} >Forgot your password?</Button>
                        <div style={{ height: 20 }} />
                        <Button onClick={handleSubmitClick} variant="contained" >
                            log In
                         </Button>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
