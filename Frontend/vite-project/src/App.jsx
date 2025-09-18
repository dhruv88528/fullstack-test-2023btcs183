import React from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import SuccessSection from './components/SuccessSection';
import WhyChooseUs from './components/HealthCareTheme';
import ScheduleSection from './components/ScheduleSection';
import DoctorsSection from './components/DoctorSection';
import Footer from './components/Footer';
export const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <SuccessSection/> */}
      
      <WhyChooseUs/>
      <ScheduleSection/>
      <DoctorsSection/>
      <ContactForm/>
      <Footer/>
      </div>
  )
}
export default App;

