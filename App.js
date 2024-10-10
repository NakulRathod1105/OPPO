import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./PROJECT/HtAf/Header";
import Home from "./PROJECT/HtAf/Homepage";
import PhonePage from "./PROJECT/Phone/Phones";
import PhoneDetails from "./PROJECT/Phone/PhoneDetails";
import Cart from "./PROJECT/Cart";
import AudioPage from "./PROJECT/Audio/Audio";
import TabletPage from "./PROJECT/Tablet/Tablet";
import WearablesPage from "./PROJECT/Wearables/Wearables";
import AccessoriesPage from "./PROJECT/Accessories/Accessories";
import AboutPage from "./PROJECT/HtAf/About";
import ColorOSPage from "./PROJECT/Coloros";
import Footer from "./PROJECT/HtAf/Footer";
import PaymentPage from "./PROJECT/PaymentPage";
import Thankyou from "./PROJECT/HtAf/Thankyou";
import './App.css'
import AudioDetails from "./PROJECT/Audio/AudioDetails";
import TabletDetails from "./PROJECT/Tablet/TabletDetails";
import WearablesDetails from "./PROJECT/Wearables/WearablesDetails";
import AccessoriesDetails from "./PROJECT/Accessories/AccessoriesDetails";
import StoreLocator from "./PROJECT/StoreLocator/StoreLocator";
import Phones from "./PROJECT/Phone/Phones";
import Audio from "./PROJECT/Audio/Audio"
import Accessories from "./PROJECT/Accessories/Accessories"
import Tablet from "./PROJECT/Tablet/Tablet";
import LoginSignup from "./PROJECT/HtAf/LoginSignup"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          

          <Route path="/phone" element={<PhonePage />} />
          <Route path="/phone/:id" element={<PhoneDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/audio" element={<AudioPage />} />
          <Route path="/audio/:id" element={<AudioDetails />} />

          <Route path="/tablet" element={<TabletPage/>} />
          <Route path="/tablet/:id" element={<TabletDetails />} />


          <Route path="/wearables" element={<WearablesPage />} />
          <Route path="/wearables/:id" element={<WearablesDetails />} />

          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/accessories/:id" element={<AccessoriesDetails />} />


          <Route path="/about" element={<AboutPage />} />
          <Route path="/coloros" element={<ColorOSPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/thankyou" element={<Thankyou/>}/>
          <Route path="/storeLocator" element={<StoreLocator/>}/>
        

          <Route path="/login" element={<LoginSignup />} />

          <Route path="/Phones" element={<Phones/>}/>
          <Route path="/Audio" element={<Audio/>}/>
          <Route path="/Tablet" element={<Tablet/>}/>
          <Route path="/Accessories" element={<Accessories/>}/>



        </Routes>
      </main> 
      <Footer />
    </div>
  );
}
