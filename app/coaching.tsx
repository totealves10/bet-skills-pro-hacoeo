
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';

export default function CoachingScreen() {
  const [isBookingSheetVisible, setIsBookingSheetVisible] = useState(false);

  const coachingPackages = [
    {
      title: 'Beginner Session',
      duration: '1 hour',
      price: '$99',
      description: 'Perfect for those new to betting. Learn the fundamentals and basic strategies.',
      features: [
        'Betting basics and terminology',
        'Risk management principles',
        'Simple betting strategies',
        'Bankroll management',
        'Follow-up email support'
      ]
    },
    {
      title: 'Advanced Strategy',
      duration: '1.5 hours',
      price: '$149',
      description: 'For experienced bettors looking to refine their approach and increase profits.',
      features: [
        'Advanced betting strategies',
        'Market analysis techniques',
        'Value betting identification',
        'Portfolio diversification',
        '2-week follow-up support'
      ]
    },
    {
      title: 'Professional Package',
      duration: '2 hours',
      price: '$199',
      description: 'Comprehensive session for serious bettors aiming for professional-level results.',
      features: [
        'Professional betting systems',
        'Advanced analytics tools',
        'Psychological aspects of betting',
        'Long-term strategy planning',
        '1-month ongoing support'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Mike Johnson',
      text: 'The coaching session completely changed my approach to betting. My win rate improved by 40% in just 2 months!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      text: 'Professional, knowledgeable, and practical advice. Worth every penny for the insights I gained.',
      rating: 5
    }
  ];

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
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

        {/* Hero Section */}
        <View style={[commonStyles.section, { paddingTop: 32 }]}>
          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt, alignItems: 'center' }]}>
            <Icon name="person-outline" size={64} color={colors.primary} />
            <Text style={[commonStyles.title, { textAlign: 'center', marginTop: 16 }]}>
              One-on-One Coaching
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 8 }]}>
              Personalized betting strategy sessions tailored to your experience level and goals
            </Text>
          </View>
        </View>

        {/* Coaching Packages */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Choose Your Package</Text>
          
          {coachingPackages.map((pkg, index) => (
            <View key={index} style={commonStyles.serviceCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.subtitle}>{pkg.title}</Text>
                  <Text style={[commonStyles.textSecondary, { marginTop: 4 }]}>
                    Duration: {pkg.duration}
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
                {pkg.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={{ 
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
                style={buttonStyles.primary}
                onPress={() => setIsBookingSheetVisible(true)}
              >
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                  Book This Session
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* How It Works */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>How It Works</Text>
          
          <View style={commonStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ 
                backgroundColor: colors.primary, 
                width: 32, 
                height: 32, 
                borderRadius: 16, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: 16
              }}>
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '700' }]}>1</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Book Your Session</Text>
                <Text style={commonStyles.textSecondary}>Choose your package and schedule a convenient time</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ 
                backgroundColor: colors.primary, 
                width: 32, 
                height: 32, 
                borderRadius: 16, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: 16
              }}>
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '700' }]}>2</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Pre-Session Assessment</Text>
                <Text style={commonStyles.textSecondary}>Complete a brief questionnaire about your betting experience</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ 
                backgroundColor: colors.primary, 
                width: 32, 
                height: 32, 
                borderRadius: 16, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: 16
              }}>
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '700' }]}>3</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>One-on-One Session</Text>
                <Text style={commonStyles.textSecondary}>Video call session with personalized strategy development</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ 
                backgroundColor: colors.primary, 
                width: 32, 
                height: 32, 
                borderRadius: 16, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: 16
              }}>
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '700' }]}>4</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Follow-Up Support</Text>
                <Text style={commonStyles.textSecondary}>Ongoing support via email to track your progress</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Testimonials */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>What Students Say</Text>
          
          {testimonials.map((testimonial, index) => (
            <View key={index} style={[commonStyles.card, { marginBottom: 16 }]}>
              <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Icon key={starIndex} name="star" size={16} color={colors.warning} style={{ marginRight: 2 }} />
                ))}
              </View>
              <Text style={[commonStyles.text, { marginBottom: 12, fontStyle: 'italic' }]}>
                &quot;{testimonial.text}&quot;
              </Text>
              <Text style={[commonStyles.textSecondary, { fontWeight: '600' }]}>
                - {testimonial.name}
              </Text>
            </View>
          ))}
        </View>

        {/* Bottom padding */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Booking Bottom Sheet */}
      <SimpleBottomSheet
        isVisible={isBookingSheetVisible}
        onClose={() => setIsBookingSheetVisible(false)}
      >
        <View style={{ padding: 20 }}>
          <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 20 }]}>
            Book Your Coaching Session
          </Text>
          
          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt, marginBottom: 20 }]}>
            <Icon name="calendar-outline" size={32} color={colors.primary} style={{ alignSelf: 'center', marginBottom: 12 }} />
            <Text style={[commonStyles.text, { textAlign: 'center', marginBottom: 8 }]}>
              Ready to book your session?
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center' }]}>
              Contact us to schedule your personalized coaching session at a time that works for you.
            </Text>
          </View>
          
          <TouchableOpacity style={[buttonStyles.primary, { marginBottom: 12 }]}>
            <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
              Contact via Email
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={buttonStyles.outline}>
            <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
              Schedule a Call
            </Text>
          </TouchableOpacity>
        </View>
      </SimpleBottomSheet>
    </SafeAreaView>
  );
}
