import React,{useState} from 'react';
import {View,Text,StyleSheet,Pressable,ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from 'expo-status-bar';

const songs=[['بوی گندم','داریوش اقبالی'],['زندونی','فریدون فروغی'],['کوچه‌ها','داریوش اقبالی'],['آدمک','فریدون فروغی'],['به من نگو دوستت دارم','داریوش اقبالی'],['غم تنهایی','فریدون فروغی']];

export default function Home(){
 const [current,setCurrent]=useState(0); const [playing,setPlaying]=useState(false);
 return <View style={s.page}><StatusBar style="light"/>
 <ScrollView contentContainerStyle={s.content}>
  <View style={s.top}><View><Text style={s.logo}>آواز قدیمی</Text><Text style={s.muted}>خاطره‌ها هنوز زنده‌اند</Text></View><Text style={s.search}>⌕</Text></View>
  <LinearGradient colors={['#68483a','#211a1c']} style={s.hero}>
   <Text style={s.label}>پیشنهاد امروز</Text><Text style={s.heroTitle}>صدای ماندگار{'
'}یک نسل</Text>
   <Pressable style={s.listen} onPress={()=>{setCurrent(0);setPlaying(true)}}><Text style={s.listenText}>▶  پخش آهنگ</Text></Pressable>
  </LinearGradient>
  <View style={s.row}><Text style={s.section}>محبوب‌ترین‌ها</Text><Text style={s.more}>همه</Text></View>
  {songs.map((x,i)=><Pressable key={i} style={s.card} onPress={()=>{setCurrent(i);setPlaying(true)}}>
    <View style={s.art}><Text style={s.music}>♫</Text></View>
    <View style={{flex:1}}><Text style={s.song}>{x[0]}</Text><Text style={s.artist}>{x[1]}</Text></View>
    <Text style={s.dots}>⋮</Text>
  </Pressable>)}
 </ScrollView>
 <View style={s.mini}><View style={{flex:1}}><Text style={s.miniTitle}>{songs[current][0]}</Text><Text style={s.artist}>{songs[current][1]}</Text></View>
 <Pressable onPress={()=>setPlaying(!playing)} style={s.play}><Text style={s.playText}>{playing?'Ⅱ':'▶'}</Text></Pressable></View>
 <View style={s.nav}><Text style={s.navActive}>⌂{'
'}خانه</Text><Text style={s.navItem}>♡{'
'}موردعلاقه</Text><Text style={s.navItem}>♫{'
'}کتابخانه</Text></View>
 </View>
}
const s=StyleSheet.create({
 page:{flex:1,backgroundColor:'#0a090b'},content:{padding:20,paddingBottom:170},
 top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:12,marginBottom:20},
 logo:{color:'#fff',fontSize:28,fontWeight:'800'},muted:{color:'#aaa',marginTop:5},search:{color:'#fff',fontSize:34},
 hero:{height:220,borderRadius:28,padding:22,justifyContent:'space-between',marginBottom:22},
 label:{color:'#ddd',fontWeight:'700'},heroTitle:{color:'#fff',fontSize:29,fontWeight:'900',lineHeight:36},
 listen:{backgroundColor:'#a76f4c',width:165,height:48,borderRadius:25,justifyContent:'center',alignItems:'center'},
 listenText:{color:'#fff',fontWeight:'800'},row:{flexDirection:'row',alignItems:'center',marginBottom:12},section:{color:'#fff',fontSize:21,fontWeight:'800',flex:1},more:{color:'#c79570'},
 card:{height:74,borderRadius:18,backgroundColor:'#161518',marginBottom:9,padding:8,flexDirection:'row',alignItems:'center'},
 art:{width:58,height:58,borderRadius:16,backgroundColor:'#342824',justifyContent:'center',alignItems:'center',marginRight:14},music:{color:'#d5aa8c',fontSize:28},
 song:{color:'#fff',fontSize:16,fontWeight:'700'},artist:{color:'#858287',fontSize:13,marginTop:3},dots:{color:'#aaa',fontSize:25,paddingHorizontal:8},
 mini:{position:'absolute',bottom:78,left:14,right:14,height:68,borderRadius:22,backgroundColor:'#292528',paddingLeft:15,paddingRight:7,flexDirection:'row',alignItems:'center'},miniTitle:{color:'#fff',fontWeight:'800',fontSize:14},
 play:{width:54,height:54,borderRadius:27,backgroundColor:'#a76f4c',justifyContent:'center',alignItems:'center'},playText:{color:'#fff',fontSize:21,fontWeight:'900'},
 nav:{position:'absolute',bottom:0,left:0,right:0,height:78,backgroundColor:'#171519',flexDirection:'row',alignItems:'center',justifyContent:'space-around'},navActive:{color:'#d09b75',textAlign:'center',fontWeight:'800'},navItem:{color:'#777',textAlign:'center'}
});
