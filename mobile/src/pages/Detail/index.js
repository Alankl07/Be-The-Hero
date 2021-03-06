import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import api from '../../services/api';

import logoImg from "../assets/logo.png";
import styles from "./styles";

function Datils() {
    const route = useRoute();
    const incidents = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incidents.name}, estou entrando em contato pois gostaria de ajudar no caso "${incidents.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incidents.value)}`;

    function navigateToIncident(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incidents.title}`,
            recipients: [incidents.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incidents.whatsapp}&text=${message}`);
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateToIncident}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentPropety, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incidents.name} de {incidents.city}/{incidents.uf}</Text>

        <Text style={styles.incidentPropety}>CASO:</Text>
        <Text style={styles.incidentValue}>{incidents.title}</Text>

        <Text style={styles.incidentPropety}>VALOR:</Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incidents.value)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={ sendWhatsapp } >
                <Text style={styles.actionText}>WhatApp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.action} onPress={ sendEmail} >
                <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Datils;
