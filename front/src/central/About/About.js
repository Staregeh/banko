import { Link, Typography } from '@mui/material'


export default function About(){
    return(
        <div style={{
            maxWidth: "auto",
            maxHeight: "auto",
            padding: "5%",
            margin: "5%"
          }}>
            <Typography variant="h1" align='center' >First of all, what is Banko?</Typography>
            <Typography fontSize={"150%"} variant='body1' align='center'>Name Banko comes from bank of code. Once we came up with idea, that it would be great to have all algorithms stored in one place.</Typography>
            <Typography fontSize={"150%"} variant='body1' align='center'>So, we created a service, that helps you to choose the right one, and provides you with code on wanted language.</Typography> 
            <Typography fontSize={"150%"} variant='body1' align='center'>Of course, we can't catch up with all of them, so we gave users the oppotunity to add algorithms by themselves. </Typography> 
            <Typography fontSize={"150%"} variant='body1' align='center'>If you want to explore Banko features read <Link href={"/docs"}>documentaion</Link>.</Typography> 
            <Typography fontSize={"150%"} variant='body1' align='center'>If you have some questions, spotted some bugs, or know how to make our service better, fell free to <Link href='/contacts'>contact us</Link>.</Typography>
        </div>
        
    )
}
