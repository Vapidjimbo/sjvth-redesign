import { useForm, ValidationError } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        },
      },
    btn: {
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: '#607D8B',
            color: 'white',
        },
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-start',
    },
    popColor: {
        color: '#607D8B',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    error: {
        display: 'block',
        color: 'red',
    },
    hideError: {
        display: 'none',
    },
  }));
  
export function TicketForm() {
    const [state, handleSubmit] = useForm("meqvoazl");
    const classes = useStyles();
    const [error, setError] = useState(classes.hideError);
    if (state.succeeded) {
        return <p>Thank You!</p>;
    }

    let errorCheck = () => {
        if(!state.succeeded){
            setError(classes.error);
        } else {
            setError(classes.hideError);
        }
    }

    return (
     <>
        <Typography className={`${classes.title} ${classes.popColor}`}  variant="h5" noWrap>
            Ticket Order Form
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
            <Typography className={`${classes.title}`}  variant="h6" noWrap>
                Member Information
            </Typography>
            <MemberInformation />
            <ValidationError prefix="Email" field="email"errors={state.errors}/>
            <ValidationError prefix="FirstName" field="firstName" errors={state.errors}/>
            <ValidationError prefix="LastName" field="lastName" errors={state.errors}/>
            <ValidationError prefix="Address" field="address" errors={state.errors}/>
            <ValidationError prefix="City" field="city" errors={state.errors}/>
            <Typography className={`${classes.title}`}  variant="h6" noWrap>
                Ordering Information
            </Typography>
            <OrderingInformation />
            <ValidationError prefix="Order-type-select" field="order-type-select" errors={state.errors}/>
            <ValidationError prefix="Number-tickets" field="number-tickets" errors={state.errors}/>
            <Typography className={`${classes.title}`}  variant="h6" noWrap>
                Payment Method
            </Typography>
            <PaymentMethod />
            <ValidationError prefix="Payment-method" field="payment-method" errors={state.errors}/>
            <Typography className={`${classes.title}`}  variant="h6" noWrap>
                Credit Card Information
            </Typography>
            <CreditCardInformation />
            <ValidationError prefix="Credit-card" field="credit-card" errors={state.errors}/>
            <ValidationError prefix="Card-number" field="card-number" errors={state.errors}/>
            <ValidationError prefix="Expiration-date" field="expiration-date" errors={state.errors}/>
            <br></br><br></br>
            <span className={error}>Please Complete All Fields</span>
            <div className={classes.btn} >
                <Button onClick={errorCheck} variant="contained" type="submit" disabled={state.submitting}>Submit</Button>
            </div>
        </form>
     </>
    );
  }

function MemberInformation() {
    const classes = useStyles();
    return(
        <>
            <TextField id="email" name="email" label="Email Address" variant="outlined" />
            <TextField id="firstName" name="firstName" label="First Name" variant="outlined" /> <br/>
            <TextField id="lastName" name="lastName" label="Last Name" variant="outlined" />
            <TextField id="address" name="address" label="Address" variant="outlined" /> <br/>
            <TextField id="city" name="city" label="City" variant="outlined" />
        </>
    );
}

function OrderingInformation() {
    const classes = useStyles();
    const [orderType, setOrderType] = useState('');

    const handleChange = (event) => {
      setOrderType(event.target.value);
    };
    return(
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="order-type-select-label">Order Type</InputLabel>
                <Select
                    labelId="order-type-select-label"
                    id="order-type-select"
                    name="order-type-select"
                    value={orderType}
                    onChange={handleChange}
                >
                    <MenuItem value={'Member Package'}>Member Package</MenuItem>
                    <MenuItem value={'Donor Package'}>Donor Package</MenuItem>
                    <MenuItem value={'Single Tickets'}>Single Tickets</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="number-tickets"
                name="number-tickets"
                label="Number of Tickets"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
        />
        </>
    );
}

function PaymentMethod() {
    const classes = useStyles();
    const [value, setValue] = useState('Bill Me');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose One</FormLabel>
                <RadioGroup id='payment-method' name="payment-method" value={value} onChange={handleChange}>
                    <FormControlLabel value="Bill Me" control={<Radio />} label="Bill Me" />
                    <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                </RadioGroup>
            </FormControl>
        </>
    );
}

function CreditCardInformation() {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date('2021-05-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose One</FormLabel>
                <RadioGroup id='credit-card' name="credit-card" value={value} onChange={handleChange}>
                    <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
                    <FormControlLabel value="MasterCard" control={<Radio />} label="MasterCard" />
                    <FormControlLabel value="Discover" control={<Radio />} label="Discover" />
                </RadioGroup>
            </FormControl>
            <TextField
                id="card-number"
                name="card-number"
                label="Credit Card Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="expiration-date"
                        name="expiration-date"
                        label="Expiration Date"
                        format="MM-yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </>
    );
}