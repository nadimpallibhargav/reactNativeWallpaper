import React, { useState } from "react";
import { View, ScrollView, Image, SafeAreaView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./HomeStyles";
import imgDay from '../assets/DayMode.jpeg';
import imgNight from '../assets/NightMode.jpeg';

const Home = () => {
  
  const myTime =  new Date();
  const myHours = myTime.getHours();
  const [backgroundImage, SetBackgroundImage] = useState( myHours >= 6 && myHours < 18 ? imgDay : imgNight );
  
  const clickCountry = (country: any) => {    

    const newTime: any = new Date().toLocaleString('en-US',
                        {timeZone: country,hour: '2-digit',hourCycle:'h24'}
                    );
    if( newTime >= 6 && newTime < 18 ) {
      SetBackgroundImage(imgDay);
    } else {
      SetBackgroundImage(imgNight);
    }
    
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'INDIA', value: 'Asia/Kolkata'},
    {label: 'USA', value: 'America/New_York'},
    {label: 'UK', value: 'Europe/London'},
    {label: 'AUSTRALIA', value: 'Australia/Sydney'},
    {label: 'SOUTH AFRICA', value: 'Africa/Johannesburg'},
  ]);



  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.backgroundView}>
            <Image source={backgroundImage} style={styles.bgImage} />
          </View>
          <ScrollView>
            <View style={{padding: 20}}>        
              <DropDownPicker
                style={{marginBottom: 10}}
                open={open}
                setOpen={setOpen}
                value={value}
                placeholder='Select Country'
                items={items}              
                setValue={setValue}
                setItems={setItems}
                onSelectItem={(item) => {
                  clickCountry(item.value);
                }}
              />       
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>      
    );
}

export default Home;