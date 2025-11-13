import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BuyerDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buyer Dashboard</Text>
      <Text style={styles.text}>View and manage your purchase orders and lots available for bidding.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 10 },
  text: { fontSize: 16, color: '#333' },
});
