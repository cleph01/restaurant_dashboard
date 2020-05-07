import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Logo from "../assets/logo/head.png";

import { createUserMutation as CREATE_USER_MUTATION } from "../queries/queries";
import { useMutation } from "@apollo/react-hooks";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Socialiite
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        /* backgroundColor: theme.palette.secondary.main,*/
        backgroundColor: "#fff",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = (props) => {
    const classes = useStyles();

    //Holds Component State
    const [userEntry, setUserEntry] = useState({});

    //Initializes useMutation graphQL query
    const [createUser, { data, loading, error }] = useMutation(
        CREATE_USER_MUTATION,
        {
            onCompleted: (data) => {
                console.log(data, "use Mutation Call back");
            },
        }
    );

    //Handle onChange Event from Form Edit
    const handleChange = (e) => {
        setUserEntry({ ...userEntry, [e.target.name]: e.target.value });

        console.log(userEntry, "User Entry - Register Page");
    };

    //Handles onSubmit Event
    const handleSubmit = async (e) => {
        e.preventDefault();

        await createUser({
            variables: {
                firstName: userEntry.firstName,
                cellPhone: userEntry.cellPhone,
                password: userEntry.password,
            },
        });

        // if (loading) console.log("Loading...","UpdatedUser Loading");

        if (error) {
            console.log(error, "mutation error");
        }

        console.log(props, "\n Mutation Response - Register Component");
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                    <img src={Logo} style={{ width: "30px", height: "40px" }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="cellPhone"
                                label="Cell Phone"
                                name="cellPhone"
                                autoComplete="cellPhone"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Register;
