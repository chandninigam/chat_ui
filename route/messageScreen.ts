// import {
//     StyleSheet,
//     Text,
//     View,
//     StatusBar,
//     Image,
//     TextInput,
//     ScrollView,
//     TouchableOpacity,
//   } from "react-native";
//   import { useEffect } from "react";
//   import { Feather as Icon } from "@expo/vector-icons";
//   const DummyCardData = [
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcP9l-2gFETJaQ3DzsEXcvB--tjjY9sSgog&usqp=CAU",
//       displayName: "Wanda Klein",
//       recentMess: " Hi,your course is very effec...",
//       messTime: "8:30 PM",
//       unseenMess: "3",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
//       displayName: "Jessi Libby",
//       recentMess: "This is now a design of this..",
//       messTime: "8:30 PM",
//       unseenMess: "2",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO8W87IBRDJf0UPVE084vrMQWlv2prA8EyA&usqp=CAU",
//       displayName: "Belly Green",
//       recentMess: "Thanks a lot",
//       messTime: "7:30 PM",
//       unseenMess: "",
//       active: false,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPY27vtW-XQV8JpGRv8GPNBiLnqEwaYakAw&usqp=CAU",
//       displayName: "Andre Flores",
//       recentMess: "lovely",
//       messTime: "7:15 PM",
//       unseenMess: "2",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyETGaiF1Iu9a-MbEYmo1D6yEbmwe0dDLkoQ&usqp=CAU",
//       displayName: "aime Allen",
//       recentMess: "Lets meet ..?",
//       messTime: "6:45 PM",
//       unseenMess: "",
//       active: false,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j5EsloB48DnxRWOYQKJxT01dGj6cVFEDPQ&usqp=CAU",
//       displayName: "Libby",
//       recentMess: "Cool bro",
//       messTime: "6:30 PM",
//       unseenMess: "3",
//       active: false,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNcdGKFiuFZMRYyQVRu1cIhkjK17PXs5ChQ&usqp=CAU",
//       displayName: "Belly Forst",
//       recentMess: "God Effort",
//       messTime: "5:45 PM",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcP9l-2gFETJaQ3DzsEXcvB--tjjY9sSgog&usqp=CAU",
//       displayName: "John Smith",
//       recentMess: "Focus on next week",
//       messTime: "5:14 PM",
//       unseenMess: "1",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Pak5sOsw6Lr3YYVUTYhGaRfB69eu6yGt1A&usqp=CAU",
//       displayName: "Demo",
//       recentMess: "Hello, I am good bro..",
//       messTime: "5:12 PM",
//       active: false,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NAISSOMJrxna3Dy9Oyc0G-pnB_t3RUucug&usqp=CAU",
//       displayName: "Prison Petter",
//       recentMess: "When we meet?..",
//       messTime: "4:20 PM",
//       active: true,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU4OTkdgw6A89uNg81qarHeZuLj4tuvlIVw&usqp=CAU",
//       displayName: "James",
//       recentMess: "Nice to talk u ..",
//       messTime: "3:00 AM",
//       unseenMess: "4",
//       active: false,
//     },
//     {
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyETGaiF1Iu9a-MbEYmo1D6yEbmwe0dDLkoQ&usqp=CAU",
//       displayName: "Petter Allen",
//       recentMess: "Please dont fight with me...",
//       messTime: "2:00 AM",
//       active: true,
//     },
//   ];
  
//   function UnSeenMessage({ unseenMess }) {
//     if (unseenMess) {
//       return (
//         <View style={styles.messView}>
//           <Text style={styles.numberText}>{unseenMess}</Text>
//         </View>
//       );
//     }
//   }
  
//   function ActiveUser({ active }) {
//     if (active === true) {
//       return <Text style={styles.emptyCircle}></Text>;
//     }
//   }
  
//   // Tile Card
//   function Tile({ card }) {
//     return (
//       <View style={styles.tileView}>
//         <View>
//           <Image
//             source={{
//               uri: card.imageUrl,
//             }}
//             style={styles.headerImage}
//           />
//           <ActiveUser active={card.active} />
//         </View>
//         <View style={styles.nameView}>
//           <Text style={styles.nametext}>{card.displayName}</Text>
//           <Text style={styles.messText}>{card.recentMess}</Text>
//         </View>
//         <View style={styles.dateView}>
//           <Text style={styles.dateText}>{card.messTime}</Text>
//           <UnSeenMessage unseenMess={card.unseenMess} />
//         </View>
//       </View>
//     );
//   }
  
//   export default function Message() {
//     useEffect(() => {
//       StatusBar.setBarStyle("dark-content");
//       StatusBar.setBackgroundColor("#f7f5eb");
//     }, []);
//     return (
//       <View style={styles.container}>
//         <View style={styles.headerView}>
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
//             }}
//             style={styles.headerImage}
//           />
//           <Text style={styles.textHeader}>Chats</Text>
//         </View>
//         <View style={styles.searchView}>
//           <Icon name="search" size={24} color="black" />
//           <TextInput
//             placeholder="Search"
//             placeholderTextColor={"black"}
//             style={styles.searchInput}
//           />
//         </View>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View style={styles.tilesView}>
//             {DummyCardData.map((card) => (
//               <Tile card={card} />
//             ))}
//           </View>
//         </ScrollView>
//         <View style={styles.tabsView}>
//           <TouchableOpacity style={styles.tabIconTouch}>
//             <Icon name="home" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.tabIconTouch}>
//             <Icon name="message-circle" size={24} color="black" />
//             <Text style={styles.activeTab}></Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.tabIconTouch}>
//             <Icon name="settings" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.tabIconTouch}>
//             <Icon name="phone-call" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       marginTop: 48,
//       flex: 1,
//       backgroundColor: "#f7f5eb",
//     },
//     headerView: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 24,
//       paddingHorizontal: 24,
//     },
//     headerImage: {
//       height: 48,
//       width: 48,
//       borderRadius: 24,
//     },
//     textHeader: {
//       display: "flex",
//       alignSelf: "center",
//       flex: 1,
//       textAlign: "center",
//       fontSize: 24,
//       fontWeight: "700",
//       marginLeft: -16,
//     },
//     searchView: {
//       marginHorizontal: 24,
//       padding: 16,
//       marginTop: 40,
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       backgroundColor: "#d7f7ef",
//       borderRadius: 24,
//       marginBottom: 16,
//     },
//     searchInput: {
//       marginLeft: 12,
//     },
//     tilesView: {
//       flex: 1,
//     },
//     tileView: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       marginBottom: 8,
//       paddingHorizontal: 24,
//     },
//     emptyCircle: {
//       position: "absolute",
//       right: 0,
//       bottom: 4,
//       height: 12,
//       width: 12,
//       borderRadius: 6,
//       backgroundColor: "#0793eb",
//       borderColor: "white",
//       borderWidth: 1,
//     },
//     nameView: {
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       padding: 12,
//     },
//     nametext: {
//       fontSize: 20,
//       fontWeight: "600",
//     },
//     messText: {
//       fontSize: 14,
//       color: "#7a7c7d",
//     },
//     dateView: {
//       display: "flex",
//       padding: 12,
//     },
//     dateText: {
//       fontSize: 12,
//       color: "#919394",
//       marginBottom: 8,
//     },
//     messView: {
//       display: "flex",
//       alignItems: "flex-end",
//       borderRadius: 8,
//     },
//     numberText: {
//       fontSize: 8,
//       color: "white",
//       padding: 4,
//       paddingHorizontal: 8,
//       borderRadius: 24,
//       backgroundColor: "#066391",
//     },
//     tabsView: {
//       backgroundColor: "white",
//       display: "flex",
//       flexDirection: "row",
//       borderTopRightRadius: 32,
//       borderTopLeftRadius: 32,
//     },
//     tabIconTouch: {
//       alignItems: "center",
//       flex: 1,
//       position: "relative",
//       padding: 16,
//     },
//     activeTab: {
//       position: "absolute",
//       right: 32,
//       top: 16,
//       height: 12,
//       width: 12,
//       borderRadius: 6,
//       backgroundColor: "#8bfc5b",
//       borderColor: "white",
//       borderWidth: 2,
//     },
//   });
  