import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import "./Contactus.css";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { axiosClient } from "../axiosClient";
import { useScroll } from "../components/ScrollProvider";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { contactRef } = useScroll(); 
  const handleClose = () => setOpen(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      remarks: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form data submitted:", data);

   try {
    setLoading(true);
    const response = await axiosClient.post("/api/user/create", data);
    if (response.status === 200) {
      try {

        const response = await axiosClient.post("/api/user/sendEmail", {
          name:data.name,
          email:data.email,
          contact:data.phone,
          remark:data.remarks,
        });
        setLoading(false);
        setOpen(true);
      } catch (error) {
        setLoading(false);
        console.error("Something went wrong")
      }
      
    }
    else{
      setLoading(false);
      console.error("Something went wrong")
    }
    reset();
   } catch (error) {
    
   }
  };

  return (
    <>
      {" "}
      <Grid container ref={contactRef}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              maxWidth: "600px",
              padding: 3,
              color: "#454545",
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Name"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Enter Name.."
                        margin="normal"
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        type="email"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Enter Email.."
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      validate: {
                        validLength: (value) => {
                          const digitsOnly = value
                            ? value.replace(/\D/g, "")
                            : "";
                          return (
                            digitsOnly.length === 10 ||
                            "Phone number must be exactly 10 digits"
                          );
                        },
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Box className="phoneInput">
                        <IntlTelInput
                          preferredCountries={["in"]}
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                          defaultCountry="in"
                          autoPlaceholder="aggressive"
                          value={value || ""}
                          onPhoneNumberChange={(
                            isValid,
                            phoneValue,
                            countryData
                          ) => {
                            const sanitizedValue = phoneValue || "";
                            onChange(sanitizedValue);
                            trigger("phone");
                          }}
                          style={{ width: "100%" }} // Full width
                        />
                      </Box>
                    )}
                  />
                  {errors.phone && (
                    <Typography variant="caption" color="error">
                      {errors.phone.message}
                    </Typography>
                  )}
                  <Controller
                    name="remarks"
                    control={control}
                    rules={{ required: "Remarks are required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Remarks"
                        multiline
                        rows={4}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Enter Remark.."
                        margin="normal"
                        error={!!errors.remarks}
                        helperText={
                          errors.remarks ? errors.remarks.message : ""
                        }
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#000000",
                      "&:hover": {
                        backgroundColor: "#333333",
                      },
                    }}
                  >
                 {loading?<CircularProgress sx={{color:"gray"}} size={30}/>:<>Contact Us</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bolder !important",
              display: "flex",
              alignItems: "center",
            }}
          >
            Success &nbsp;
            <CheckCircleOutlineIcon fontSize="medium" />
          </Typography>
          <Typography variant="h6" id="modal-modal-description" sx={{ mt: 2 }}>
            "Draft recieved! Now,let's start writing your story"
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{
              float: "right",
              mt: 2,
              backgroundColor: "#000000",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUs;
