import { useState,useRef } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
  });
const [buttonSpinner, setButtonSpinner] = useState(false);
const [emailMessage, setEmailMessage] = useState("");
const [openSnackbar, setOpenSnackbar] = useState(false);
const [severity,setSeveriaty] = useState("");
const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonSpinner(true)
    emailjs.sendForm('service_hxl8lug', 'template_7xvaupi', form.current, 'LFL5N4_l7Hja4bHkD').then((response)=>{
         setEmailMessage("Email Sent Successfully")
         setOpenSnackbar(true)
         setSeveriaty("success")
            setFormData({
                name: '',
                company: '',
                message: '',
            });
    })
    .catch((err)=>{
        if(err) {
           setEmailMessage("Error in sending email, please try again later")
            setOpenSnackbar(true)
            setSeveriaty("error")
            setFormData({
                name: '',
                company: '',
                message: '',
            });
        }
    // You can add your form submission logic here, like sending data to an API.
  });
  setButtonSpinner(false)
  setOpenSnackbar(false)
  }
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m:1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        ref={form}
        noValidate
        autoComplete="off"
        className='contact-me-form-box'
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Want to Hire Me
        </Typography>
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          id="company"
          name="company"
          label="Company"
          variant="outlined"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          required
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: '100%' }}
          loading={buttonSpinner}
        >
          Submit
        </Button>
      </Box>
      {
       <Snackbar
         open={openSnackbar}
         autoHideDuration={3000}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         
     >
        <Alert onClose={() => setOpenSnackbar(false)} severity={severity} sx={{width:'100%'}}>{emailMessage}</Alert>
        </Snackbar>}
    </Container>
  );
};

export default ContactMeForm;