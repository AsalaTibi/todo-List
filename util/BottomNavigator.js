import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import TaskList from '../components/TaskList';
import CompletedTask from '../components/CompletedTask';
import { TaskContext } from '../context/TaskContext';
import Users from '../components/Users';
import { useSelector, useDispatch } from 'react-redux'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const user = useSelector((state)=> state.currentUser)
  
  return (
    <Tab.Navigator
     initialRouteName={'Add Tasks'}
     screenOptions={({route}) => ({
       headerShown: false ,
       tabBarStyle:{
        backgroundColor:'#CB997E',
        height:60,
        paddingBottom:5,
        paddingTop:5,
        borderRadius:40,
        marginBottom:10
       },
       tabBarIcon:({focused,color,size}) =>{
        let iconName;
        if(route.name == 'Add Tasks'){
          iconName ='add-to-list';
          size = focused?25:20;
          return (
            <Icon 
            name={iconName} 
            size={size}
             color={color}
             />
             );
        }
        if(route.name == 'Done'){
          iconName ='checkcircle';
          size = focused ? 25 : 20;
          return (
            <Check 
            name={iconName} 
            size={size}
             color={color}
             />
             );
        }
      }
     })
    }
    tabBarOptions={{
      activeTintColor:'#fff',
      inactiveTintColor:'#e9e9e8',
      labelStyle:{fontSize :15,fontWeight:'bold'},
    }}
   >
      <Tab.Screen name="Add Tasks" component={TaskList} />
      <Tab.Screen name="Done" component={CompletedTask} />
      {user.isAdmin ? 
        <Tab.Screen name="Users" component={Users}/> : null
      }
    </Tab.Navigator>
  );
}