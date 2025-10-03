
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const services = [
    {
      id: 'coaching',
      title: 'Individual Coaching',
      description: 'One-on-one personalized betting strategy sessions with expert guidance',
      price: '$99/session',
      icon: 'person-outline',
      features: ['Personalized strategy', '1-hour session', 'Follow-up support', 'Risk management'],
      route: '/coaching'
    },
    {
      id: 'tips',
      title: 'Daily Bet Tips',
      description: 'Premium daily betting tips with detailed analysis and predictions',
      price: '$29/month',
      icon: 'trending-up-outline',
      features: ['Daily tips', 'Detailed analysis', 'Win rate tracking', 'Multiple sports'],
      route: '/tips'
    },
    {
      id: 'theory',
      title: 'Betting Theory Course',
      description: 'Comprehensive course covering all aspects of professional betting',
      price: '$149/course',
      icon: 'school-outline',
      features: ['Video lessons', 'PDF materials', 'Quizzes', 'Certificate'],
      route: '/theory'
    }
  ];

  return (
    <View style={commonStyles.container}>
      <LinearGradient
        colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={commonStyles.gradientBackground}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={[commonStyles.section, { paddingTop: 40, paddingBottom: 20 }]}>
            <Text style={[commonStyles.title, { textAlign: 'center' }]}>
              Betting Skills Academy
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 8 }]}>
              Master the art of professional betting with expert guidance
            </Text>
          </View>

          {/* Hero Section */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <View style={commonStyles.heroCard}>
              <Icon name="trophy-outline" size={48} color={colors.background} />
              <Text style={[commonStyles.subtitle, { color: colors.background, textAlign: 'center', marginTop: 16 }]}>
                Transform Your Betting Game
              </Text>
              <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginTop: 8 }]}>
                Join our community of successful bettors who have improved their skills with our proven methods
              </Text>
            </View>
          </View>

          {/* Services */}
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Our Services</Text>
            
            {services.map((service) => (
              <Link key={service.id} href={service.route} asChild>
                <TouchableOpacity style={commonStyles.serviceCard}>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 }}>
                    <View style={{ 
                      backgroundColor: colors.backgroundGradientStart, 
                      padding: 12, 
                      borderRadius: 12, 
                      marginRight: 16 
                    }}>
                      <Icon name={service.icon as any} size={24} color={colors.primary} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={commonStyles.subtitle}>{service.title}</Text>
                      <View style={[commonStyles.priceTag, { marginTop: 8 }]}>
                        <Text style={commonStyles.priceText}>{service.price}</Text>
                      </View>
                    </View>
                  </View>
                  
                  <Text style={[commonStyles.text, { marginBottom: 16 }]}>
                    {service.description}
                  </Text>
                  
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
                    {service.features.map((feature, index) => (
                      <View key={index} style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginRight: 16, 
                        marginBottom: 8 
                      }}>
                        <Icon name="checkmark-circle-outline" size={16} color={colors.success} />
                        <Text style={[commonStyles.textSecondary, { marginLeft: 4 }]}>
                          {feature}
                        </Text>
                      </View>
                    ))}
                  </View>
                  
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
                      Learn More
                    </Text>
                    <Icon name="chevron-forward-outline" size={20} color={colors.primary} style={{ marginLeft: 4 }} />
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>

          {/* Stats Section */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 24 }]}>
              Proven Results
            </Text>
            <View style={commonStyles.statsContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>500+</Text>
                  <Text style={commonStyles.textSecondary}>Students Trained</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>78%</Text>
                  <Text style={commonStyles.textSecondary}>Success Rate</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>5+</Text>
                  <Text style={commonStyles.textSecondary}>Years Experience</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom padding */}
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
