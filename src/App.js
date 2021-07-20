import React from 'react';
import {Typography,AppBar,Toolbar,Container,CssBaseline, Grid, Button, CardMedia, CardContent,Card, CardActions} from '@material-ui/core'
import useStyles from './styles';



function App() {

  const classes=useStyles()
  const arr=[1,2,3,4,5,6,7,8,9]

  return (
   <>
   <CssBaseline />
   <AppBar position='relative'>
      <Toolbar>
        {/* <PhotoCamera /> */}
        <Typography variant='h6'>
          Photo Album
        </Typography>
      </Toolbar>
   </AppBar>
   <main>
     <div className={classes.container}>
       <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Photo Album
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            asd  asdjmj asldknha aslkdhnas oihasdonasoid asdoijhasdnoihas poiahjsdn asduasd oiansdlm asoid asdljjansd asdbn asdjhasd oiashdkn asdiasd
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  See my photos 
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Secondary actions
                </Button>
              </Grid>
            </Grid>
          </div>
       </Container>
     </div>
     <Container maxWidth='md' className={classes.cardGrid}>
      <Grid container spacing={4}>
          {
            arr.map((item,index)=>(
              <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className={classes.card} >
              <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title="Image Title" />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  Heading 
                </Typography>
                <Typography>This is the media card. You can use this section to describe to content.</Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>View</Button>
                <Button size='small' color='primary'>Edit</Button>
              </CardActions>
            </Card>
          </Grid>
            ))
          }
      </Grid>
     </Container>
   </main>
   <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
              Something here to give the footer a purpose 
          </Typography>
   </footer>
   </>
  );
}

export default App;
