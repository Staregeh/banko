import { Typography, Link, Grid } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function Contacts(){
    return(
        <div style={{
            alignSelf: "center",
            textAlign: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "auto",
            maxHeight: "auto",
            padding: "5%",
            margin: "5%"
          }}>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Typography variant="h3" align='center' paddingBottom={"20px"}>Have some questions or proposes?</Typography>
                    <Typography fontSize={"120%"} variant='body1' align='center' paddingBottom={"20px"}>You can <Link href="mailto: banko@gmail.com">write us</Link> an email</Typography>
                    <Typography fontSize={"120%"} variant='body1' align='center' paddingBottom={"20px"}>Or you can <Link href="tel: +380931111111">call us</Link></Typography>
                    <Typography fontSize={"120%"} variant='body1' align='center' paddingBottom={"20px"}>Here you can follow us on social media</Typography>
                    <Grid container justifyContent={"center"}>
                        
                        <Grid  item xs={2}>
                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={4}>
                                    <Link href='https://www.instagram.com/'>
                                    <InstagramIcon />
                                    </Link>
                                </Grid>
                                <Grid item xs={4}>
                                    <Link href='https://www.facebook.com/'>
                                        <FacebookIcon />
                                    </Link>
                                </Grid>
                                <Grid item xs={4}>
                                    <Link href='https://www.t.me/staregeh'>
                                        <TelegramIcon />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid sm={12} md={6}>
                    <Typography variant='h5' align='center' paddingBottom={"20px"}>Leave us your question, we will answer as soon as possible</Typography>
                    <Stack spacing={2}>
                    <TextField
                        id="name"
                        variant="outlined"
                        label="Your name"
                        InputLabelProps={{ required: false }}
                        required
                    />
                    <TextField
                        id="email"
                        variant="outlined"
                        label="Your email"
                        InputLabelProps={{ required: false }}
                        required
                    />
                    <TextField
                        id="question"
                        variant="outlined"
                        label="Your question"
                        InputLabelProps={{ required: false }}
                        required
                    />
                    <Button variant="contained" size="large">
                        Submit my question
                    </Button>
                </Stack>
                </Grid>
            </Grid>
        </div>
    )
}