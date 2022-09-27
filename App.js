import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useEffect } from "react";
import { Feather as Icon1, AntDesign as Icon2 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

/**
 * Call Screen
 */
const DummyCall = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcP9l-2gFETJaQ3DzsEXcvB--tjjY9sSgog&usqp=CAU",
    displayName: "Wanda Klein",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    displayName: "Jessi Libby",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NAISSOMJrxna3Dy9Oyc0G-pnB_t3RUucug&usqp=CAU",
    displayName: "8787095215",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO8W87IBRDJf0UPVE084vrMQWlv2prA8EyA&usqp=CAU",
    displayName: "Belly Green",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPY27vtW-XQV8JpGRv8GPNBiLnqEwaYakAw&usqp=CAU",
    displayName: "Andre Flores",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyETGaiF1Iu9a-MbEYmo1D6yEbmwe0dDLkoQ&usqp=CAU",
    displayName: "Aime Allen",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNcdGKFiuFZMRYyQVRu1cIhkjK17PXs5ChQ&usqp=CAU",
    displayName: "Belly Forst",
  },
  {
    mageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Pak5sOsw6Lr3YYVUTYhGaRfB69eu6yGt1A&usqp=CAU",
    displayName: "Demo",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NAISSOMJrxna3Dy9Oyc0G-pnB_t3RUucug&usqp=CAU",
    displayName: "Prison Petter",
  },
];

const DummyCardData = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcP9l-2gFETJaQ3DzsEXcvB--tjjY9sSgog&usqp=CAU",
    displayName: "Wanda Klein",
    recentMess: " Hi,your course is very effec...",
    messTime: "8:30 PM",
    unseenMess: "3",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    displayName: "Jessi Libby",
    recentMess: "This is now a design of this..",
    messTime: "8:30 PM",
    unseenMess: "2",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO8W87IBRDJf0UPVE084vrMQWlv2prA8EyA&usqp=CAU",
    displayName: "Belly Green",
    recentMess: "Thanks a lot",
    messTime: "7:30 PM",
    unseenMess: "",
    active: false,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPY27vtW-XQV8JpGRv8GPNBiLnqEwaYakAw&usqp=CAU",
    displayName: "Andre Flores",
    recentMess: "lovely",
    messTime: "7:15 PM",
    unseenMess: "2",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyETGaiF1Iu9a-MbEYmo1D6yEbmwe0dDLkoQ&usqp=CAU",
    displayName: "aime Allen",
    recentMess: "Lets meet ..?",
    messTime: "6:45 PM",
    unseenMess: "",
    active: false,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j5EsloB48DnxRWOYQKJxT01dGj6cVFEDPQ&usqp=CAU",
    displayName: "Libby",
    recentMess: "Cool bro",
    messTime: "6:30 PM",
    unseenMess: "3",
    active: false,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNcdGKFiuFZMRYyQVRu1cIhkjK17PXs5ChQ&usqp=CAU",
    displayName: "Belly Forst",
    recentMess: "God Effort",
    messTime: "5:45 PM",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcP9l-2gFETJaQ3DzsEXcvB--tjjY9sSgog&usqp=CAU",
    displayName: "John Smith",
    recentMess: "Focus on next week",
    messTime: "5:14 PM",
    unseenMess: "1",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Pak5sOsw6Lr3YYVUTYhGaRfB69eu6yGt1A&usqp=CAU",
    displayName: "Demo",
    recentMess: "Hello, I am good bro..",
    messTime: "5:12 PM",
    active: false,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NAISSOMJrxna3Dy9Oyc0G-pnB_t3RUucug&usqp=CAU",
    displayName: "Prison Petter",
    recentMess: "When we meet?..",
    messTime: "4:20 PM",
    active: true,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU4OTkdgw6A89uNg81qarHeZuLj4tuvlIVw&usqp=CAU",
    displayName: "James",
    recentMess: "Nice to talk u ..",
    messTime: "3:00 AM",
    unseenMess: "4",
    active: false,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyETGaiF1Iu9a-MbEYmo1D6yEbmwe0dDLkoQ&usqp=CAU",
    displayName: "Petter Allen",
    recentMess: "Please dont fight with me...",
    messTime: "2:00 AM",
    active: true,
  },
];

const { height, width } = Dimensions.get("window");

function UnSeenMessage({ unseenMess }) {
  if (unseenMess) {
    return (
      <View style={styles.messView}>
        <Text style={styles.numberText}>{unseenMess}</Text>
      </View>
    );
  }
}

function ActiveUser({ active }) {
  if (active === true) {
    return <Text style={styles.emptyCircle}></Text>;
  }
}

// Tile Card
function Tile({ card }) {
  return (
    <View style={styles.tileView}>
      <View>
        <Image
          source={{
            uri: card.imageUrl,
          }}
          style={styles.headerImage}
        />
        <ActiveUser active={card.active} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.nametext}>{card.displayName}</Text>
        <Text style={styles.messText}>{card.recentMess}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{card.messTime}</Text>
        <UnSeenMessage unseenMess={card.unseenMess} />
      </View>
    </View>
  );
}

function MessageScreen({}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.textHeader}>Chats</Text>
      </View>
      <View style={styles.searchView}>
        <Icon1 name="search" size={24} color="black" />
        <TextInput
          placeholder="Search"
          placeholderTextColor={"black"}
          style={styles.searchInput}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tilesView}>
          {DummyCardData.map((card) => (
            <Tile card={card} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/**
 * Setting Screen
 * @returns void
 */

const DummySettingCard = [
  {
    leftIconName: "key",
    title: "Account",
    subtitle: " Privacy,security,change number",
  },
  {
    leftIconName: "message",
    title: "Chats",
    subtitle: " Theme, wallpapers,chat history",
  },
  {
    leftIconName: "bell",
    title: "Notifications",
    subtitle: "Message ,group & call tones",
  },
  {
    leftIconName: "feather",
    title: "Storage and Data",
    subtitle: " Network usage, auto downloaded",
  },
  {
    leftIconName: "help-circle",
    title: "Help",
    subtitle: " Help center, contact us",
  },
  {
    leftIconName: "search",
    title: "About Us",
    subtitle: " Information about app",
  },
];
function SettingTile({ settingCard }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: height / 40,
      }}
    >
      <Icon1 name={settingCard.leftIconName} size={24} color="black" />
      <View style={{ marginLeft: height / 40, flex: 1 }}>
        <Text style={{ fontSize: height / 40, fontWeight: "bold" }}>
          {settingCard.title}
        </Text>
        <Text style={{ marginTop: 4, color: "#757574" }}>
          {settingCard.subtitle}
        </Text>
      </View>
      <Icon2 name="rightcircleo" size={24} color="black" />
    </View>
  );
}

function SettingScreen() {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: height / 40,
        paddingHorizontal: height / 40,
        flex: 1,
      }}
    >
      {DummySettingCard.map((settingCard) => (
        <SettingTile settingCard={settingCard} />
      ))}
    </View>
  );
}

/**
 * Home Screen
 */
function HomeScreen() {
  return (
    <View style={home_style.container}>
      <Image
        source={{
          uri: "https://image.shutterstock.com/image-vector/talk-logo-vector-modern-illustration-260nw-1450896380.jpg",
        }}
        style={home_style.image}
      />
      <Text style={home_style.title}>Manage your chats ,</Text>
      <Text style={home_style.titleNext}>easily</Text>
      <Text style={home_style.subTitle}>
        Get the most value for every impression from one easy-to-use ,integrated
        platform
      </Text>
      <Text></Text>
    </View>
  );
}

function CallScreen() {
  return (
    <View style={styleCall.container}>
      <View style={styles.searchView}>
        <Icon1 name="search" size={24} color="black" />
        <TextInput
          placeholder="Search"
          placeholderTextColor={"black"}
          style={styles.searchInput}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {DummyCardData.map((eachCall) => (
          <SingleCallTile eachCall={eachCall} />
        ))}
      </ScrollView>
    </View>
  );
}

function SingleCallTile({ eachCall }) {
  return (
    <View style={styleCall.tileView}>
      <Image source={{ uri: eachCall.imageUrl }} style={styleCall.image} />
      <Text style={styleCall.text}>{eachCall.displayName}</Text>
      <Icon name="call" />
    </View>
  );
}

const BottomStack = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("white");
  }, []);
  return (
    <NavigationContainer>
      <BottomStack.Navigator>
        <BottomStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomStack.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
        <BottomStack.Screen
          name="Call"
          component={CallScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="call" color={color} size={size} />
            ),
          }}
        />
        <BottomStack.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
}

const styleCall = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  tileView: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  text: {
    flex: 1,
    display: "flex",
    alignSelf: "center",
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    paddingHorizontal: 24,
  },
  headerImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  textHeader: {
    display: "flex",
    alignSelf: "center",
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: -32,
  },
  searchView: {
    marginHorizontal: 24,
    padding: 8,
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d7f7ef",
    borderRadius: 24,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 12,
  },
  tilesView: {
    flex: 1,
  },
  tileView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  emptyCircle: {
    position: "absolute",
    right: 0,
    bottom: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#0793eb",
    borderColor: "white",
    borderWidth: 1,
  },
  nameView: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
  nametext: {
    fontSize: 20,
    fontWeight: "600",
  },
  messText: {
    fontSize: 14,
    color: "#7a7c7d",
  },
  dateView: {
    display: "flex",
    padding: 12,
  },
  dateText: {
    fontSize: 12,
    color: "#919394",
    marginBottom: 8,
  },
  messView: {
    display: "flex",
    tabsView: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
    },
    alignItems: "flex-end",
    borderRadius: 8,
  },
  numberText: {
    fontSize: 8,
    color: "white",
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#066391",
  },
});

const home_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 200,
    width: 400,
    display: "flex",
    alignSelf: "center",
    marginVertical: 24,
    borderRadius: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    marginTop: height / 20,
    marginHorizontal: height / 20,
  },
  titleNext: {
    fontSize: 32,
    fontWeight: "500",
    marginHorizontal: height / 20,
  },
  subTitle: {
    marginHorizontal: height / 20,
    marginTop: height / 20,
    fontSize: 24,
    fontWeight: "200",
  },
});
