import { View,Text, StyleSheet,Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeArea } from "../utility/safearea";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faHome } from "@fortawesome/free-solid-svg-icons";


export function Info({navigation}) {
    return(
        <View style={{flex:1,padding:20,backgroundColor:"#111212"}}>
            <SafeArea>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../assets/aave1.png")} 
                style={{height:30,width:30,borderRadius:10}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faHome} 
                size={30} style={{color:"#7bb0ad"}}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={{justifyContent:"center",marginTop:35,alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:27}}>Privacy Policy</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>1.Introduction and Overview.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>This Privacy Policy (the “Privacy Policy”) provides a comprehensive description of how Avara UI Labs Ltd. (“Avara UI Labs,” “we,” “our,” or “us”) collects, uses, and shares information about you in connection with the website at https://aave.com (the “Site”), as well as your rights and choices regarding such information. These terms apply to the Site and any other online location that links to this Privacy Policy (collectively, the “Services”).
By accessing or using the Site, you agree to our Terms of Service (the “Terms”) and understand that the Terms represent a binding agreement between you and us. By using the Services, you also agree to our collection, use, and disclosure practices, as well as any other activities described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, you should immediately discontinue the use of the Services and refrain from accessing the Site. If you have any questions or wish to exercise your rights and choices, please contact us at the email or portal address set forth in the “Contact Us” section below. If you are a data subject in the European Economic Area, the United Kingdom, or a resident of Canada, please see the additional disclosures at the end of this Privacy Policy.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>2. Changes to Privacy Policy.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>We reserve the right to revise and reissue this Privacy Policy at any time. Any changes will be effective immediately upon our posting of the revised Privacy Policy. For the avoidance of doubt, your continued use of the Services indicates your consent to the revised Privacy Policy then posted.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>3. Information Collection.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>A. Information You Provide.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>We may collect the following information about you when you use the Services:
Content, within any messages you send to us (such as feedback and questions to information support).
You may choose to voluntarily provide other information to us that we have not solicited from you, and, in such instances, you are solely responsible for such information</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>B. Information Collected Automatically.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>Although at this time we do not automatically collect information from you when you access the Avara UI Labs Services, it is possible that we may in the future. We would utilize this information to operate and ensure the security, reliability, and robust performance of our Services.
We may also use tracking technologies to automatically collect information including the following
Log Files, which are files that record events that occur in connection with your use of the Avara UI Labs Services. Log files are created when you view content or otherwise interact with the Services.
Cookies, which are small data files stored on your device that act as a unique tag to identify your browser. We will only use strictly necessary cookies in connection with the Site and Services. For the avoidance of doubt, the cookies that we include are essential for you to browse the Site and use its features, including accessing secure areas of the Site.
For further information on how we use tracking technologies for analytics, and your rights and choices regarding them, please see the “Analytics” and “Your Rights and Choices” sections below.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>4. Use of Information.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>We do not anticipate using, but we may collect and use, information for business purposes in accordance with the practices described in this Privacy Policy. Our business purposes for collecting and using information include:
Operating and managing the Services; performing services requested by you, such as responding to your comments, questions, and requests, and providing information support; sending you technical notices, updates, security alerts, information regarding changes to our policies, and support and administrative messages; detecting, preventing, and addressing fraud, breach of Terms, and threats, or harm; and compliance with legal and regulatory requirements.
Protecting the security and integrity of the Services; improving the Services and other websites, apps, products and services; conducting promotions, such as hack-a-thons, including to verify your eligibility and deliver prizes in connection with your entries; and fulfilling any other business purpose, with notice to you and your consent.
Notwithstanding the above, we may use information that does not identify you (including information that has been aggregated or de-identified) for any purpose except as prohibited by applicable law. For information on your rights and choices with respect to how we use information about you, please see the “Your Rights and Choices” section below.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>5. Sharing and Disclosure of Information.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>If share or disclose information that we collect, we do so in accordance with the practices described in this Privacy Policy. The categories of parties with whom we may share information include:
Affiliates. We share information with our affiliates and related entities, including where they act as our service providers or for their own internal purposes.
Service Providers. We share information with third-party service providers for business purposes, including fraud detection and prevention, security threat detection, payment processing, customer support, data analytics, information technology, storage, and transaction monitoring. Any information shared with such service providers is subject to the terms of this Privacy Policy. All service providers that we engage with are restricted to only utilizing the information on our behalf and in accordance with our instructions.
Professional Advisors.We share information with our professional advisors for purposes of audits and compliance with our legal obligations.
Merger or Acquisition. We share information in connection with, or during negotiations of, any proposed or actual merger, purchase, sale or any other type of acquisition or business combination of all or any portion of our assets, or transfer of all or a portion of our business to another business.
Security and Compelled Disclosure.We share information to comply with the law or other legal process, and where required, in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.
Facilitating Requests.We may share information about you at your request or direction.
Consent.We may share information about you with your consent.
Notwithstanding the above, we may share information that does not identify you (including information that has been aggregated or de-identified) except as prohibited by applicable law. For information on your rights and choices regarding how we share information about you, please see the “Your Rights and Choices” section below.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>6. Other Parties.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>We may integrate technologies operated or controlled by other parties into parts of the Services. For example, the Services may include links that hyperlink to websites, platforms, and other services not operated or controlled by us.
Please note that when you interact with other parties, including when you leave the Site, those parties may independently collect information about you and solicit information from you. The information collected and stored by those parties remains subject to their own policies and practices, including what information they share with us, your rights and choices on their services and devices, and whether they store information in the U.S. or elsewhere. We encourage you to familiarize yourself with and consult their privacy policies and terms of use.</Text>
            </View>
            <View style={{marginTop:35}}>
                <Text style={{color:"#fff",fontSize:20}}>Data Security.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#fff"}}>We implement and maintain reasonable administrative, physical, and technical security safeguards to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Nevertheless, transmission via the internet is not completely secure and we cannot guarantee the security of information about you.</Text>
            </View>
            <View >

            </View>
            </ScrollView>
            </SafeArea>

        </View>
    )
}
const styles = StyleSheet.create({

})