// // src/pages/LandingPage.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Slide,
//   Fade,
//   Dialog,
//   DialogTitle,
//   DialogActions,
//   DialogContent
// } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// const services = [
//   'Personal Development',
//   'Personal Finance Management',
//   'Career Development',
//   'Business Development',
//   'Technology Development',
// ];

// const LandingPage = () => {
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleOpenDialog = () => setOpenDialog(true);
//   const handleCloseDialog = () => setOpenDialog(false);

//   const handleWhatsAppClick = () => {
//     window.open('https://wa.me/255749722722', '_blank');
//   };

//   const handleEmailClick = () => {
//     window.location.href = 'mailto:info@tanzaniteskills.ac.tz';
//   };

//   return (
//     <Box sx={{ m: 0, p: 0, overflowX: 'hidden' }}>
//       {/* Hero Section */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         sx={{
//           background: 'linear-gradient(135deg, #328E6E 0%, #1e5f4b 100%)',
//           color: 'white',
//           textAlign: 'center',
//           py: 5,
//           px: 2,
//           minHeight: '10vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="h3"
//           fontWeight="bold"
//           component={motion.h1}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//         >
//           TANZANITE SKILLS ACADEMY
//         </Typography>
//         <Typography
//           variant="h5"
//           mt={2}
//           component={motion.p}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//         >
//           Jifunze leo, Badilisha kesho yako
//         </Typography>
//         <Box mt={4}>
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1.1 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 mx: 1,
//                 backgroundColor: '#fff',
//                 color: '#1e5f4b',
//                 fontWeight: 'bold',
//                 borderRadius: '4px',
//                 px: 4,
//               }}
//             >
//               Jisajili
//             </Button>
//             <Button
//               variant="outlined"
//               size="large"
//               onClick={handleOpenDialog}
//               sx={{
//                 mx: 1,
//                 borderColor: '#fff',
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 borderRadius: '4px',
//                 px: 4,
//               }}
//             >
//               Wasiliana Nasi
//             </Button>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Contact Dialog */}
//       <AnimatePresence>
//         {openDialog && (
//           <Dialog
//             open={openDialog}
//             onClose={handleCloseDialog}
//             PaperComponent={motion.div}
//             PaperProps={{
//               initial: { opacity: 0, y: -20 },
//               animate: { opacity: 1, y: 0 },
//               exit: { opacity: 0, y: -20 },
//               transition: { duration: 0.3 },
//               sx: {
//                 backgroundColor: '#fff',
//                 borderRadius: 2,
//                 minWidth: 300,
//                 boxShadow: 10,
//               },
//             }}
//           >
//             <DialogTitle textAlign="center" sx={{ fontWeight: 'bold' }}>Chagua Njia ya Kuwasiliana</DialogTitle>
//             <DialogContent sx={{ textAlign: 'center' }}>
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 Tafadhali chagua njia unayopendelea kuwasiliana nasi.
//               </Typography>
//             </DialogContent>
//             <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 2 }}>
//               <Button variant="contained" color="success" onClick={handleWhatsAppClick}>
//                 WhatsApp: 0749 722 722
//               </Button>
//               <Button variant="outlined" onClick={handleEmailClick}>
//                 Barua Pepe: info@tanzaniteskills.ac.tz
//               </Button>
//             </DialogActions>
//           </Dialog>
//         )}
//       </AnimatePresence>

//       {/* Services Section */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         sx={{ py: 8, px: { xs: 2, sm: 4 }, backgroundColor: '#f5f5f5' }}
//       >
//         <Typography
//           variant="h5"
//           fontWeight="bold"
//           textAlign="center"
//           color="#1e5f4b"
//           gutterBottom
//           component={motion.h2}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           Huduma Zetu
//         </Typography>
//         <Grid container spacing={4} justifyContent="center" mt={2}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Fade in timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                 <Card
//                   elevation={4}
//                   sx={{
//                     borderRadius: 1,
//                     height: '100%',
//                     textAlign: 'center',
//                     transition: 'transform 0.5s ease',
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       boxShadow:
//                         'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                     },
//                   }}
//                 >
//                   <CardContent>
//                     <Typography variant="h6" sx={{ color: '#1e5f4b' }}>
//                       {service}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Fade>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default LandingPage;





// src/pages/LandingPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Slide,
  Fade,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';

const services = [
  { title: 'Personal Development', icon: <PersonIcon fontSize="large" sx={{ color: '#0D936BFF'}} /> },
  { title: 'Personal Finance Management', icon: <AccountBalanceWalletIcon fontSize="large" sx={{ color: '#0D936BFF'}} /> },
  { title: 'Career Development', icon: <SchoolIcon fontSize="large" sx={{ color: '#0D936BFF'}} /> },
  { title: 'Business Development', icon: <BusinessCenterIcon fontSize="large" sx={{ color: '#0D936BFF'}} />},
  { title: 'Technology Development', icon: <DevicesIcon fontSize="large" sx={{ color: '#0D936BFF'}} /> },
  { title: 'Growth Strategy', icon: <TrendingUpIcon fontSize="large" sx={{ color: '#0D936BFF'}} /> },
];

const LandingPage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/255749722722', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@tanzaniteskills.ac.tz';
  };

  return (
    <Box sx={{ m: 0, p: 0, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          background: 'linear-gradient(135deg, #0D936BFF 0%, #1B7C5FFF 100%)',
          color: 'white',
          textAlign: 'center',
          py: 5,
          px: 2,
          minHeight: '10vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          component={motion.h1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          TANZANITE SKILLS ACADEMY
        </Typography>
        <Typography
          variant="h6"
          mt={2}
          component={motion.p}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Jifunze leo, Badilisha kesho yako
        </Typography>
        <Box mt={4}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                mx: 1,
                backgroundColor: '#fff',
                color: '#1e5f4b',
                fontWeight: 'bold',
                borderRadius: '1px',
                px: 4,
              }}
            >
              Anza Mafunzo
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleOpenDialog}
              sx={{
                mx: 1,
                borderColor: '#fff',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '1px',
                px: 4,
              }}
            >
              Wasiliana Nasi
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Contact Dialog */}
      <AnimatePresence>
        {openDialog && (
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            PaperComponent={motion.div}
            PaperProps={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.3 },
              sx: {
                backgroundColor: '#fff',
                borderRadius: 2,
                minWidth: 300,
                boxShadow: 10,
              },
            }}
          >
            <DialogContent sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Tafadhali chagua njia unayopendelea kuwasiliana nasi.
              </Typography>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 2 }}>
              <Button variant='outlined' sx={{ color: '#0D936BFF'}} onClick={handleWhatsAppClick}>
                WhatsApp
              </Button>
              <Button variant="outlined" sx={{ color: '#0D936BFF'}} onClick={handleEmailClick}>
                Barua Pepe
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{ py: 8, px: { xs: 2, sm: 4 }, backgroundColor: '#f5f5f5' }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          color="#1e5f4b"
          gutterBottom
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Huduma Zetu
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
  {services.map((service, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
        <Card
        elevation={6}
        sx={{
            borderRadius: 0,
            height: 120,
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default', // default cursor normally
            '&:hover, &:focus-visible': {
            transform: 'scale(1.05)',
            boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            cursor: 'pointer', // pointer cursor on hover/focus
            },
            '&:active': {
            transform: 'scale(1.05)',
            boxShadow:
                'rgba(50, 50, 93, 0.35) 0px 8px 16px -2px, rgba(0, 0, 0, 0.4) 0px 4px 10px -3px',
            cursor: 'pointer', // pointer cursor on active (touch)
            },
        }}
        >
        {service.icon}
        <CardContent>
        <Typography variant="h6" sx={{ color: '#1e5f4b' }}>
            {service.title}
        </Typography>
        </CardContent>
    </Card>
    </Fade>
</Grid>
  ))}
</Grid>

      </Box>


      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          backgroundColor: '#f5f5f5',
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '70px' }}
        >
          <path
            d="M0 30 Q360 90 720 30 T1440 30 V100 H0 Z"
            fill="#0D936BFF"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0 30 Q360 90 720 30 T1440 30 V100 H0 Z;
                M0 40 Q360 20 720 40 T1440 40 V100 H0 Z;
                M0 30 Q360 90 720 30 T1440 30 V100 H0 Z
              "
            />
          </path>
        </svg>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0D936BFF', color: 'white', textAlign: 'center', py: 6 }}>
        <Typography variant="h6" fontWeight="bold">Tanzanite Skills Academy</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Jifunze leo, Badilisha kesho yako
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Anuani: Kinyerezi, Dar es Salaam, Tanzania
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Mawasiliano: info@tanzaniteskills.ac.tz | 0749 722 722
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} Tanzanite Skills Academy. Haki zote zimehifadhiwa.
        </Typography>
      </Box>
    </Box>
  );
};


export default LandingPage;



