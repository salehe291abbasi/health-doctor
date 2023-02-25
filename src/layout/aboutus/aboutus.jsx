import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AboutUsImage from "../../assets/img/icons img/vector.jpg";
import OurServices from './OurServices';

const AboutUsPage = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img src={AboutUsImage} alt="تصویر درباره ما" style={{ width: '100%', borderRadius: '5px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#ff9800' }}>درباره ما</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
            ما یک تیم پزشکی مجرب هستیم که با بیش از ۱۰ سال تجربه در زمینه پزشکی، به ارائه خدمات پزشکی با کیفیت و حرفه‌ای به مراجعین خود متعهدیم.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
            با توجه به این که سلامتی یکی از ارزشمندترین دارایی‌های انسان است، تلاش می‌کنیم تا در طول درمان بیماران، آن‌ها را به خوبی آگاه کنیم تا بتوانند بهترین تصمیم‌گیری را برای سلامتی خودشان بگیرند.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
            خدماتی که ارائه می‌دهیم شامل مشاوره پزشکی، درمان‌های مختلف، آزمایشات و تست‌های پزشکی، ارائه خدمات پرستاری و مراقبت از بیمار و دیگر خدمات پزشکی مرتبط است.
          </Typography>
          <OurServices />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsPage;