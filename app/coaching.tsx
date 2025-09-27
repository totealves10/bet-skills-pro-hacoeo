
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function CoachingScreen() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showBookingSheet, setShowBookingSheet] = useState(false);

  const coachingPackages = [
    {
      id: 'starter',
      title: 'Starter Session',
      price: '$99',
      duration: '1 hour',
      description: 'Perfect for beginners looking to understand the basics of professional betting',
      features: [
        'Fundamentals of betting',
        'Risk management basics',
        'Bankroll management',
        'Basic strategy development',
        'Q&A session',
        'Follow-up email summary'
      ],
      popular: false
    },
    {
      id: 'advanced',
      title: 'Advanced Strategy',
      price: '$199',
      duration: '2 hours',
      description: 'Deep dive into advanced betting strategies and market analysis',
      features: [
        'Advanced betting strategies',
        'Market analysis techniques',
        'Value betting identification',
        'Statistical modeling basics',
        'Portfolio diversification',
        'Custom strategy development',
        '2 weeks follow-up support'
      ],
      popular: true
    },
    {
      id: 'premium',
      title: 'Premium Mentorship',
      price: '$399',
      duration: '4 hours',
      description: 'Comprehensive mentorship program with ongoing support',
      features: [
        'Everything in Advanced',
        'Personal betting audit',
        'Custom betting system',
        'Live betting session',
        'Monthly check-ins (3 months)',
        'Direct messaging access',
        'Exclusive resources'
      ],
      popular: false
    }
  ];

  const handleBookSession = (packageData: any) => {
    console.log('Booking session for package:', packageData.title);
    setSelectedPackage(packageData);
    setShowBookingSheet(true);
  };

  return (
    <View style={commonStyles.container}>
      <LinearGradient
        colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={commonStyles.gradientBackground}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={commonStyles.header}>
          <Link href="/" asChild>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chevron-back-outline" size={24} color={colors.text} />
              <Text style={[commonStyles.text, { marginLeft: 8 }]}>Back</Text>
            </TouchableOpacity>
          </Link>
          <Text style={commonStyles.subtitle}>Individual Coaching</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <View style={commonStyles.heroCard}>
              <Icon name="person-outline" size={48} color={colors.background} />
              <Text style={[commonStyles.subtitle, { color: colors.background, textAlign: 'center', marginTop: 16 }]}>
                Personal Betting Coach
              </Text>
              <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginTop: 8 }]}>
                Get personalized guidance from experienced betting professionals
              </Text>
            </View>
          </View>

          {/* Packages */}
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Choose Your Package</Text>
            
            {coachingPackages.map((pkg) => (
              <View key={pkg.id} style={[
                commonStyles.serviceCard,
                pkg.popular && { borderColor: colors.primary, borderWidth: 2 }
              ]}>
                {pkg.popular && (
                  <View style={{
                    position: 'absolute',
                    top: -10,
                    right: 20,
                    backgroundColor: colors.primary,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 12,
                  }}>
                    <Text style={[commonStyles.textSecondary, { color: colors.background, fontSize: 12, fontWeight: '600' }]}>
                      MOST POPULAR
                    </Text>
                  </View>
                )}
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.subtitle}>{pkg.title}</Text>
                    <Text style={[commonStyles.textSecondary, { marginTop: 4 }]}>
                      {pkg.duration}
                    </Text>
                  </View>
                  <View style={commonStyles.priceTag}>
                    <Text style={commonStyles.priceText}>{pkg.price}</Text>
                  </View>
                </View>
                
                <Text style={[commonStyles.text, { marginBottom: 16 }]}>
                  {pkg.description}
                </Text>
                
                <View style={{ marginBottom: 20 }}>
                  <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 12 }]}>
                    What&apos;s Included:
                  </Text>
                  {pkg.features.map((feature, index) => (
                    <View key={index} style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginBottom: 8 
                    }}>
                      <Icon name="checkmark-circle-outline" size={16} color={colors.success} />
                      <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>
                
                <TouchableOpacity 
                  style={[
                    buttonStyles.primary,
                    pkg.popular && { backgroundColor: colors.primary }
                  ]}
                  onPress={() => handleBookSession(pkg)}
                >
                  <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                    Book Session
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Why Choose Our Coaching */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 24 }]}>
              Why Choose Our Coaching?
            </Text>
            <View style={commonStyles.statsContainer}>
              <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                  <Icon name="star-outline" size={20} color={colors.primary} />
                  <Text style={[commonStyles.text, { marginLeft: 8, fontWeight: '600' }]}>
                    Expert Guidance
                  </Text>
                </View>
                <Text style={commonStyles.textSecondary}>
                  Learn from professionals with 5+ years of successful betting experience
                </Text>
              </View>
              
              <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                  <Icon name="trending-up-outline" size={20} color={colors.primary} />
                  <Text style={[commonStyles.text, { marginLeft: 8, fontWeight: '600' }]}>
                    Proven Results
                  </Text>
                </View>
                <Text style={commonStyles.textSecondary}>
                  Our students see an average 40% improvement in their betting performance
                </Text>
              </View>
              
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                  <Icon name="shield-checkmark-outline" size={20} color={colors.primary} />
                  <Text style={[commonStyles.text, { marginLeft: 8, fontWeight: '600' }]}>
                    Personalized Approach
                  </Text>
                </View>
                <Text style={commonStyles.textSecondary}>
                  Every session is tailored to your specific goals and experience level
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom padding */}
          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Booking Bottom Sheet */}
        <SimpleBottomSheet
          isVisible={showBookingSheet}
          onClose={() => setShowBookingSheet(false)}
        >
          <View style={{ padding: 20 }}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 16 }]}>
              Book Your Session
            </Text>
            
            {selectedPackage && (
              <>
                <View style={[commonStyles.card, { marginBottom: 20 }]}>
                  <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
                    {selectedPackage.title}
                  </Text>
                  <Text style={commonStyles.textSecondary}>
                    Duration: {selectedPackage.duration}
                  </Text>
                  <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600', marginTop: 8 }]}>
                    {selectedPackage.price}
                  </Text>
                </View>
                
                <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginBottom: 20 }]}>
                  To book your coaching session, please contact us directly. We&apos;ll schedule a convenient time and send you the meeting details.
                </Text>
                
                <TouchableOpacity style={buttonStyles.primary}>
                  <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                    Contact Coach
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </SimpleBottomSheet>
      </SafeAreaView>
    </View>
  );
}
