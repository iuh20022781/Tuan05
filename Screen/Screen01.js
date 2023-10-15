
import React, { useState ,useEffect} from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";

function Screen01({route,navigation}) {
    console.log(route)
    var [image,setImage] = useState();
    
    useEffect(()=>{
        setImage(route.params?.img);
        }  ,[route.params?.img])

    return (
        <view style={styles.container}>

            <View style={styles.styleImg}>
                <Image source={ route.params?.img||require("../assets/vs_blue.png")} style={{width: 301, height: 321}} resizeMode="contain"/> 
                <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            {/* rate */}
            <View style={styles.style1}>


                <View style={styles.styleImgStar}>
                    <Image source={require('../assets/star.png')} style={[{ height: '25px', width: '23px' }, styles.starImg]} ></Image>
                    <Image source={require('../assets/star.png')} style={[{ height: '25px', width: '23px' }, styles.starImg]} ></Image>
                    <Image source={require('../assets/star.png')} style={[{ height: '25px', width: '23px' }, styles.starImg]} ></Image>
                    <Image source={require('../assets/star.png')} style={[{ height: '25px', width: '23px' }, styles.starImg]} ></Image>
                    <Image source={require('../assets/star.png')} style={[{ height: '25px', width: '23px' }, styles.starImg]} ></Image>
                </View>

                <View><Text style={styles.text2}>(Xem 828 đánh giá)</Text></View>




            </View>

            <View style={styles.stylePrice}>
                <Text style={styles.text3}>1.790.000 đ</Text>

                <Text style={styles.text4}>1.790.000 đ</Text>
            </View>

            <View style={styles.style2}>
                <Text style={styles.text5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image source={require('../assets/Group1.png')} style={{ height: '20px', width: '20px', marginHorizontal: 10 }} ></Image>
            </View>

            <View style={styles.styleBtn1}>
                <TouchableOpacity style={styles.bn1} onPress={()=>{navigation.navigate('Screen2')}}>
                    <Text style={[styles.text2, { marginTop: 5 }]}> 4 MÀU-CHỌN MÀU </Text>
                    <Image source={require('../assets/Vector.png')}
                        style={{ position: "absolute", width: '11.5px', height: '14px', marginLeft: 280, marginTop: 7 }} ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.styleBtn2}>
                <TouchableOpacity style={styles.bn2}>
                    <Text style={styles.txtBnt2}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </view>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    stylePrice: {
        marginTop: 10,
        justifyContent: "center",

        flexDirection: "row"

    },
    style1: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"

    },
    style2: {
        marginLeft: 45,
        marginTop: 15,
        flexDirection: "row",


    },
    styleImg: {
        alignItems: "center"
    },
    styleImgStar: {

        alignItems: "center",
        flexDirection: "row"

    },
    starImg: {
        marginHorizontal: 3
    },

    text: {
        margin: 10,
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
    },
    text2: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
    },
    text3: {
        color: '#000',

        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginHorizontal: 25,

    },
    text4: {
        color: 'rgba(0, 0, 0, 0.58)',

        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        textDecorationLine: "line-through",
        marginHorizontal: 60,
        marginTop: 2
    },
    text5: {
        color: '#FA0000',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',

    },
    styleBtn1: {
        marginTop: 15,

        alignItems: "center",


    },
    styleBtn2: {
        marginTop: 30,
        alignItems: "center"

    },
    bn1: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.46)',
        width: 322,
        height: 34,
        flexShrink: 0,

        justifyContent: "center",
        flexDirection: "row"
    },
    txtBnt2: {
        color: '#F9F2F2',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
    bn2: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#CA1536',
        backgroundColor: '#EE0A0A',
        width: 325,
        height: 44,
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

});
export default Screen01;