import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
    <View style={styles.header}>
      
      
    <Text style={styles.boldtext}>Limkokwing Student Portal</Text>
          
       
         <Image style={styles.pic}
          source={require("./assets/Taylor.jpg")}/>
             
          <Text style={styles.font1}>Lebohang Joseph Mots'etlase</Text>
          <Text style={styles.font2}>Faculty Of Information And Communication Technology</Text>
          <Text style={styles.font3}>BSC(Hons) Software Engineering with Multimedia</Text>
          <Text style={styles.font4}>2020-2024</Text>

          <ScrollView>
          <View style={styles.semester1}>
            <View style={styles.dig1}>
            <Text style={styles.title1}>                                semester1</Text>
            </View>
            
          <View style={styles.fleg1}>
              
            <Text>MODULES-----------------------------------------------CREDITS</Text>
            <Text>Business Communication-----------------------------A*</Text>
            <Text>Computer Skills--------------------------------------------B*</Text>
            <Text>Creative Studies-------------------------------------------B-</Text>
            <Text>Algebra--------------------------------------------------------A</Text>
            <Text>Programming and Logic Design---------------------------B</Text>
            </View>
            
          </View>
          <View style={styles.semester2}>
            <View style={styles.dig2}>
              <Text style={styles.title2}>                              semester2</Text>
            </View>
            <View style={styles.fleg2}>
            <Text>MODULES-----------------------------------------------CREDITS</Text>
            <Text>Calculus1---------------------------------------------------A*</Text>
            <Text>Intro to Database----------------------------------------B*</Text>
            <Text>Principle of Software Engineering---------------B-</Text>
            <Text>Intro to Data Communication----------------------A*</Text>
            <Text>Web Design------------------------------------------------A*</Text>
            </View>
          </View>
          <View style={styles.semester3}>
            <View style={styles.dig3}>
              <Text style={styles.title3}>                               semester3</Text>
            </View>
            <View style={styles.fleg3}>
            <Text>MODULES-----------------------------------------------CREDITS</Text>
            <Text>C++Programming 1---------------------------------------A</Text>
            <Text>Internet Technology---------------------------------------A</Text>
            <Text>Data Communication and Network-----------------A*</Text>
            <Text>Multimedia Technology---------------------------------A</Text>
            <Text>Principle Of Web Design--------------------------------A*</Text>
            
            </View>
          
          
          
          </View>
          </ScrollView>
      </View>
      
     </View>
     
     
     </>

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'red',
    justifyContent: 'center',
    

  },

  header:{
    
    backgroundColor:'black',
    padding:15,
    height:780,
    width:'100%',
    alignItems:'center',
    shadowOpacity:50,
    shadowColor:'grey',
    
},

boldtext:{
  fontWeight: 'bold',
  fontStyle:'italic',
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  fontSize:15,
  marginRight:10,


},
font1:{
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 20,
  color:'white',
},
font2:{
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 10,
  color: 'white',
},
font3:{
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize:10,
  color: 'white',
},
font4:{
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 10,
  color: 'white',
  
},

  
pic:{
  height: 200,
  width: 200,
  borderRadius:90,
  alignItems:'center',
  marginBottom:20,
  marginTop:50,
  
},

txt1:{
  fontWeight: 'bold',
  fontStyle: 'italic',
  backgroundColor: 'white',
  justifyContent: 'center',
},
semester1:{
  height: 200,
  width:'100%' ,
  backgroundColor:'blue',
  
  


},
semester2:{
  height: 200,
  width: '100%',
  backgroundColor: 'blue',
  
},
semester3:{
  height: 200,
  width: '100%',
  backgroundColor: 'blue',
  
},
dig1:{
  height:25,
  width: '100%',
  backgroundColor:'white',
  
},
  dig2: {
    height: 25,
    width: '100%',
    backgroundColor: 'white',
    
  },
  dig3: {
    height: 25,
    width: '100%',
    backgroundColor: 'white',
    
  },
 title1:{
   fontSize:15,
   color:'black',
   fontStyle:'italic',
   fontWeight:'bold',
  
 },
  title2: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
  

  },
  title3: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    

  },
  fleg1:{
    fontSize:20,

  },
  fleg2:{
    fontSize: 20,
  },
  fleg3:{
    fontSize: 20,
    color:'red',
  },



  
});
